import { useState } from "react";
import { Sparkles, ArrowDown, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useTranslation } from "@/hooks/use-i18n";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

type Result = { slug: string; name: string; reason: string };

export const ProjectMatcher = ({ onSelect }: { onSelect: (slug: string) => void }) => {
  const { locale } = useTranslation() as any;
  const en = locale === "en";
  const [business, setBusiness] = useState("");
  const [siteType, setSiteType] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);
    const { data, error } = await supabase.functions.invoke("recommend-project", {
      body: { business, siteType, locale },
    });
    setLoading(false);
    if (error || data?.error) {
      let msg = data?.error;
      try { msg = msg ?? (await (error as any)?.context?.json())?.error; } catch { /* ignore */ }
      setError(msg ?? (en ? "Something went wrong. Try again." : "Ocurrió un error. Probá de nuevo."));
      return;
    }
    setResult(data as Result);
  };

  return (
    <section className="container-custom py-16">
      <div className="max-w-3xl mx-auto rounded-2xl border border-brand/30 bg-card/50 p-6 sm:p-10">
        <div className="flex items-center gap-2 text-brand text-xs font-medium tracking-[0.2em] uppercase mb-3">
          <Sparkles className="w-4 h-4" />
          {en ? "AI-powered" : "Con IA"}
        </div>
        <h2 className="text-2xl sm:text-3xl font-display font-bold mb-2">
          {en ? "Which project fits your business?" : "¿Qué proyecto se parece a lo que necesitás?"}
        </h2>
        <p className="text-muted-foreground mb-6">
          {en
            ? "Tell us about your business and the site you need. We'll show you the most relevant work."
            : "Contanos sobre tu negocio y el sitio que buscás. Te mostramos el trabajo más relevante."}
        </p>
        <form onSubmit={submit} className="space-y-4">
          <Textarea
            required
            minLength={5}
            maxLength={1000}
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
            placeholder={en ? "E.g. I run a pharmacy in Ciudad del Este and sell on Instagram" : "Ej: Tengo una farmacia en Ciudad del Este y vendo por Instagram"}
            rows={4}
          />
          <Input
            maxLength={200}
            value={siteType}
            onChange={(e) => setSiteType(e.target.value)}
            placeholder={en ? "Type of site (online store, landing page...)" : "Tipo de sitio (tienda online, landing page...)"}
          />
          <Button type="submit" variant="hero" disabled={loading}>
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
            {loading ? (en ? "Analyzing..." : "Analizando...") : (en ? "Get recommendation" : "Ver recomendación")}
          </Button>
        </form>
        {error && <p className="mt-4 text-sm text-destructive">{error}</p>}
        {result && (
          <div className="mt-6 rounded-xl border border-border/40 bg-background/60 p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">
              {en ? "Recommended project" : "Proyecto recomendado"}
            </p>
            <h3 className="text-xl font-display font-bold mb-2">{result.name}</h3>
            <p className="text-muted-foreground mb-4">{result.reason}</p>
            <button type="button" onClick={() => onSelect(result.slug)} className="inline-flex items-center gap-2 text-brand font-medium">
              {en ? "See project" : "Ver proyecto"} <ArrowDown className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
