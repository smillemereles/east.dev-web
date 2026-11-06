import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { localizePath, stripLocale, useTranslation } from "@/hooks/use-i18n";

const BASE = "https://eastdevpy.com";

const HOME_META = {
  es: {
    title: "east.dev | Desarrolladora Web en Ciudad del Este, Paraguay",
    description:
      "Soy desarrolladora web independiente en Ciudad del Este, Paraguay. Creo sitios web, tiendas online y landing pages a medida para negocios de Paraguay, Brasil y Estados Unidos.",
  },
  en: {
    title: "east.dev | Freelance Web Developer from Paraguay for US & Global Clients",
    description:
      "I'm an independent web developer and designer from Paraguay building custom websites, e-commerce and landing pages for businesses in the United States and worldwide.",
  },
  pt: {
    title: "east.dev | Desenvolvedora Web Freelancer — Foz do Iguaçu e Ciudad del Este",
    description:
      "Sou desenvolvedora web independente na fronteira com Foz do Iguaçu. Crio sites, lojas virtuais e landing pages sob medida para empresas do Brasil e do Paraguai.",
  },
} as const;

const OG_LOCALE = { es: "es_PY", en: "en_US", pt: "pt_BR" } as const;

/** Canonical + hreflang for every route, in every language. */
export const LocaleSeo = () => {
  const { pathname } = useLocation();
  const { locale } = useTranslation();
  const base = stripLocale(pathname);
  const url = (l: "es" | "en" | "pt") => BASE + localizePath(base, l);
  const home = base === "/" ? HOME_META[locale] : null;

  return (
    <Helmet>
      <html lang={locale === "pt" ? "pt-BR" : locale} />
      {home && <title>{home.title}</title>}
      {home && <meta name="description" content={home.description} />}
      {home && <meta property="og:title" content={home.title} />}
      {home && <meta property="og:description" content={home.description} />}
      <link rel="canonical" href={url(locale)} />
      <meta property="og:url" content={url(locale)} />
      <meta property="og:locale" content={OG_LOCALE[locale]} />
      <link rel="alternate" hrefLang="es" href={url("es")} />
      <link rel="alternate" hrefLang="en" href={url("en")} />
      <link rel="alternate" hrefLang="pt-BR" href={url("pt")} />
      <link rel="alternate" hrefLang="x-default" href={url("es")} />
    </Helmet>
  );
};
