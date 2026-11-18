export const COMPANY = {
  name: "Port Road Service GmbH",
  short: "PRS Logistik",
  street: "Merkurring 82",
  zip: "22143",
  city: "Hamburg",
  country: "Deutschland",
  ceo: "Josef Nasr",
  hrb: "HRB 118179",
  vatId: "DE276959543",
  taxNo: "2246070201762",
  email: "info@prs-logistik.de",
  phone: "+49 40 74302153",
  phoneHref: "tel:+494074302153",
  url: "https://prs-logistik.de",
} as const;

export function seo(path: string, title: string, description: string) {
  const url = `${COMPANY.url}${path === "/" ? "/" : path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "de_DE" },
      { property: "og:site_name", content: COMPANY.name },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export const NAV = [
  { to: "/", label: "Startseite" },
  { to: "/leistungen", label: "Leistungen" },
  { to: "/fulfillment", label: "Fulfillment" },
  { to: "/transport-spedition", label: "Transport & Spedition" },
  { to: "/unternehmen", label: "Unternehmen" },
  { to: "/kontakt", label: "Kontakt" },
] as const;
