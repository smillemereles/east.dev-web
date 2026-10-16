import { createOpenAI } from "npm:@ai-sdk/openai";
import { streamText } from "npm:ai";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-lovable-aig-run-id",
  "Access-Control-Expose-Headers": "X-Lovable-AIG-Run-ID",
};

const PROJECTS = [
  { slug: "llevaviajes", name: "Lleva Viajes", summary: "Contenido visual para agencia de viajes: posteos, promociones y campañas estacionales en redes." },
  { slug: "farmanext", name: "Farma Next", summary: "Diseño digital y campañas para farmacia con e-commerce: piezas promocionales y branding en redes." },
  { slug: "citytour-asu", name: "City Tour Asunción", summary: "Contenido digital para experiencias turísticas: posteos, stories y material promocional." },
  { slug: "nevenhost", name: "NevenHost", summary: "Web para inmobiliaria con listado de propiedades, filtros de búsqueda y galería." },
  { slug: "farmacia-dosul", name: "Farmacia Do Sul", summary: "Tienda online para farmacia con catálogo, precios en guaraníes/reales y checkout." },
  { slug: "vitalx", name: "Vital X", summary: "Sitio informativo y e-commerce para marca de salud y suplementos, con carrito de compras." },
];

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { business, siteType, locale } = await req.json();
    const b = typeof business === "string" ? business.trim().slice(0, 1000) : "";
    const s = typeof siteType === "string" ? siteType.trim().slice(0, 200) : "";
    if (b.length < 5) return json({ error: "Describí un poco más tu negocio." }, 400);

    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!apiKey) return json({ error: "AI no configurada." }, 500);

    let runId = req.headers.get("X-Lovable-AIG-Run-ID")?.trim() || undefined;
    const provider = createOpenAI({
      baseURL: "https://ai.gateway.lovable.dev/v1",
      apiKey,
      headers: { "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
      fetch: async (input: RequestInfo | URL, init?: RequestInit) => {
        const headers = new Headers(init?.headers);
        if (runId && !headers.has("X-Lovable-AIG-Run-ID")) headers.set("X-Lovable-AIG-Run-ID", runId);
        const res = await fetch(input, { ...init, headers });
        runId ??= res.headers.get("X-Lovable-AIG-Run-ID")?.trim() || undefined;
        return res;
      },
    });

    const lang = locale === "en" ? "English" : "Spanish (Rioplatense/Paraguayan, use 'vos')";
    const instructions = `You recommend ONE portfolio project from east.dev (a web studio in Ciudad del Este, Paraguay) that best matches a prospective client's needs.
Projects:
${PROJECTS.map((p) => `- slug "${p.slug}": ${p.name} — ${p.summary}`).join("\n")}
Reply ONLY with a JSON object: {"slug": "<one slug from the list>", "reason": "<2-3 sentences in ${lang} explaining why this project fits their business and what east.dev could build for them>"}. No markdown.`;

    const result = streamText({
      model: provider.responses("openai/gpt-6-astra"),
      instructions,
      messages: [{ role: "user", content: `Negocio: ${b}\nTipo de sitio buscado: ${s || "no especificado"}` }],
      abortSignal: req.signal,
      providerOptions: {
        openai: {
          store: false,
          forceReasoning: true,
          reasoningEffort: "low",
          reasoningSummary: "auto",
          include: ["reasoning.encrypted_content"],
        },
      },
    } as any);

    const text = await result.text;
    const match = text.match(/\{[\s\S]*\}/);
    if (!match) return json({ error: "No se pudo generar una recomendación." }, 502);
    const parsed = JSON.parse(match[0]);
    const project = PROJECTS.find((p) => p.slug === parsed.slug);
    if (!project || typeof parsed.reason !== "string") {
      return json({ error: "No se pudo generar una recomendación." }, 502);
    }
    const headers: Record<string, string> = {};
    if (runId) headers["X-Lovable-AIG-Run-ID"] = runId;
    return new Response(JSON.stringify({ slug: project.slug, name: project.name, reason: parsed.reason }), {
      headers: { ...corsHeaders, ...headers, "Content-Type": "application/json" },
    });
  } catch (e: any) {
    const status = e?.statusCode ?? e?.lastError?.statusCode;
    if (e?.name === "AbortError") return json({ error: "Cancelado" }, 499);
    if (status === 429) return json({ error: "Muchas consultas ahora mismo, probá de nuevo en un momento." }, 429);
    if (status === 402) return json({ error: "El servicio de IA no está disponible por ahora." }, 402);
    if (status === 403) return json({ error: "El servicio de IA no está disponible por ahora." }, 403);
    console.error("recommend-project error", e);
    return json({ error: "Ocurrió un error. Probá de nuevo." }, 500);
  }
});
