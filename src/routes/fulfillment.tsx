import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, TrendingDown, Expand, Users, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, SectionHead, ProcessFlow, CtaBand, FeatureRow } from "@/components/site/layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { seo } from "@/lib/site";
import hero from "@/assets/fulfillment-picking.jpg";
import goods from "@/assets/fulfillment-receiving.jpg";
import packing from "@/assets/fulfillment-packing.jpg";
import labels from "@/assets/fulfillment-dispatch.jpg";
import warehouse from "@/assets/fulfillment-storage.jpg";

export const Route = createFileRoute("/fulfillment")({
  head: () =>
    seo(
      "/fulfillment",
      "Fulfillment & Versand in Hamburg | Port Road Service GmbH",
      "Fulfillment-Dienstleister in Hamburg: Warenannahme, Kontrolle, Kommissionierung, Verpackung, Etikettierung, Versandabwicklung und Retourenbearbeitung für Unternehmen.",
    ),
  component: Fulfillment,
});

const FLOW = [
  { title: "Warenannahme", text: "Avisierte Anlieferung, Entladung und Erfassung." },
  { title: "Kontrolle", text: "Abgleich mit Lieferschein, Zustandsprüfung, Dokumentation." },
  { title: "Kommissionierung", text: "Scannergestützte Auftragszusammenstellung." },
  { title: "Verpackung", text: "Sachgerecht verpackt, umgepackt oder konsolidiert." },
  { title: "Versand", text: "Etikettierung und Übergabe an den passenden Carrier." },
];

const DETAILS = [
  { title: "Warenannahme", text: "Wir nehmen Ihre Ware zu vereinbarten Zeitfenstern an – als Palette, Paket oder lose Ladung. Jede Anlieferung wird erfasst und der weiteren Bearbeitung zugeordnet. Bei Containerware übernehmen wir auf Wunsch die Entladung." },
  { title: "Wareneingangskontrolle", text: "Mengen, Artikel und äußerer Zustand werden mit den Lieferpapieren abgeglichen. Abweichungen und Transportschäden halten wir mit Fotos fest und melden sie Ihnen unmittelbar, damit Sie Ansprüche gegenüber Lieferanten oder Frachtführern zeitnah geltend machen können." },
  { title: "Zwischenlagerung / operative Lagerprozesse", text: "Für Ware, die nicht sofort weiterläuft, bieten wir lagernahe Zwischenlösungen an. Bestände werden geordnet bereitgestellt, sodass Aufträge ohne Suchzeiten bearbeitet werden können." },
  { title: "Kommissionierung", text: "Aufträge werden nach Ihren Vorgaben zusammengestellt – vom Einzelartikel bis zur gemischten Palette. Kontrollschritte vor dem Verpacken stellen sicher, dass Artikel und Mengen stimmen." },
  { title: "Verpackung", text: "Wir wählen Verpackung und Füllmaterial passend zur Ware und zum Versandweg. Auf Wunsch verwenden wir Ihre gebrandeten Kartons, Beilagen oder Grußkarten." },
  { title: "Umpacken / Konsolidierung", text: "Container- und Palettenware packen wir in versandfähige Einheiten um. Mehrere Teilsendungen konsolidieren wir zu einer Lieferung – das spart Transportkosten und erleichtert die Annahme beim Empfänger." },
  { title: "Etikettierung", text: "Versandlabel, Artikel- und Barcodeetiketten, Umetikettierung nach Händlervorgaben oder Kennzeichnungen für bestimmte Zielländer – wir bringen die richtige Kennzeichnung sauber an." },
  { title: "Versandabwicklung", text: "Wir übergeben Sendungen an Paketdienste, Stückgutnetzwerke oder Speditionen und stellen Ihnen die Sendungsinformationen bereit. Für größere Mengen organisieren wir den Transport direkt." },
  { title: "Retourenbearbeitung", text: "Rücksendungen werden angenommen, geprüft und nach Zustand sortiert. Wiederverkaufsfähige Ware wird aufbereitet, alle Ergebnisse erhalten Sie in einer klaren Übersicht." },
  { title: "Individuelle Versandanforderungen", text: "Zeitfenster, Sonderverpackungen, Beilagen, Musterversand oder Aktionsware: Besondere Anforderungen besprechen wir vorab und definieren einen festen Ablauf." },
];

const BENEFITS = [
  { icon: TrendingDown, title: "Fixkosten senken", text: "Keine eigene Lagerfläche, kein Packpersonal für Spitzenzeiten – Sie zahlen für die Leistung, die Sie nutzen." },
  { icon: Expand, title: "Flexibel skalieren", text: "Saisonale Schwankungen und Aktionen fangen wir operativ ab, ohne dass Sie kurzfristig umplanen müssen." },
  { icon: Users, title: "Fokus aufs Kerngeschäft", text: "Ihr Team konzentriert sich auf Vertrieb, Einkauf und Produkt – wir auf die Logistik." },
  { icon: Eye, title: "Transparenz", text: "Klare Rückmeldungen zu Wareneingang, Versand und Retouren schaffen Planungssicherheit." },
];

const FAQ = [
  { q: "Für welche Unternehmen eignet sich Ihr Fulfillment?", a: "Für Händler, Onlineshops, Hersteller und Importeure, die ihre Versandlogistik ganz oder teilweise auslagern möchten. Wir arbeiten ausschließlich für Geschäftskunden." },
  { q: "Gibt es Mindestmengen?", a: "Das hängt von Ware und Leistungsumfang ab. Beschreiben Sie uns Ihr Volumen – wir sagen Ihnen offen, ob und wie eine Zusammenarbeit sinnvoll ist." },
  { q: "Kann ich einzelne Leistungen buchen?", a: "Ja. Viele Kunden nutzen zunächst einzelne Bausteine wie Umpacken, Etikettierung oder Retourenbearbeitung." },
  { q: "Wie schnell kann gestartet werden?", a: "Nach Klärung der Abläufe und Anforderungen ist ein Start häufig kurzfristig möglich. Den konkreten Zeitplan stimmen wir gemeinsam ab." },
];

function Fulfillment() {
  return (
    <>
      <PageHero
        eyebrow="Fulfillment & Versand"
        title="Fulfillment-Dienstleister in Hamburg"
        text="Wir übernehmen Ihre Auftragsabwicklung – von der Warenannahme über Kommissionierung und Verpackung bis zum Versand und zur Retoure. Zuverlässig, dokumentiert und auf Ihre Anforderungen abgestimmt."
        image={hero}
        alt="PRS-Mitarbeiterin kommissioniert Artikel aus dem Regal mit Handscanner"
      >
        <Button asChild variant="cta" size="xl"><Link to="/kontakt">Fulfillment anfragen <ArrowRight /></Link></Button>
      </PageHero>

      <section className="py-24">
        <div className="container-site">
          <SectionHead eyebrow="Operativer Ablauf" title="So läuft Ihr Fulfillment bei uns" text="Ein klar definierter Prozess mit festen Prüfpunkten – damit Sie wissen, was mit Ihrer Ware passiert." />
          <div className="mt-12"><ProcessFlow steps={FLOW} /></div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="container-site space-y-24">
          <FeatureRow image={goods} alt="Mitarbeiter in PRS-Firmenjacke kontrolliert einen geöffneten Warenkarton mit Scanner und Tablet" eyebrow="Schritt 1 & 2" title="Warenannahme und Wareneingangskontrolle">
            <p>{DETAILS[0]!.text}</p>
            <p>{DETAILS[1]!.text}</p>
          </FeatureRow>
          <FeatureRow reverse image={warehouse} alt="Mitarbeiter mit PRS-Logo lagert einen Karton neben einem Kommissionierwagen ein" eyebrow="Schritt 3" title="Zwischenlagerung und Kommissionierung">
            <p>{DETAILS[2]!.text}</p>
            <p>{DETAILS[3]!.text}</p>
          </FeatureRow>
          <FeatureRow image={packing} alt="Mitarbeiterin im PRS-Polo verpackt Ware an der Packstation" eyebrow="Schritt 4" title="Verpackung, Umpacken und Konsolidierung">
            <p>{DETAILS[4]!.text}</p>
            <p>{DETAILS[5]!.text}</p>
          </FeatureRow>
          <FeatureRow reverse image={labels} alt="Mitarbeiter im PRS-Polo etikettiert einen Versandkarton am Packtisch" eyebrow="Schritt 5" title="Etikettierung und Versandabwicklung">
            <p>{DETAILS[6]!.text}</p>
            <p>{DETAILS[7]!.text}</p>
          </FeatureRow>
        </div>
      </section>

      <section className="py-24">
        <div className="container-site grid gap-6 md:grid-cols-2">
          {DETAILS.slice(8).map((d) => (
            <div key={d.title} className="rounded-lg border bg-card p-8 shadow-card">
              <h2 className="text-2xl font-extrabold text-navy">{d.title}</h2>
              <p className="mt-4 leading-relaxed text-graphite">{d.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy-gradient py-24">
        <div className="container-site">
          <p className="eyebrow text-accent">Ihre Vorteile</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-extrabold text-navy-foreground sm:text-4xl">Warum sich das Auslagern von Fulfillment lohnt</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b) => (
              <div key={b.title} className="rounded-lg border border-navy-foreground/10 p-6">
                <b.icon className="h-7 w-7 text-accent" />
                <h3 className="mt-4 text-lg font-bold text-navy-foreground">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-foreground/70">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHead eyebrow="FAQ" title="Häufige Fragen zum Fulfillment" />
          <Accordion type="single" collapsible className="w-full">
            {FAQ.map((f, i) => (
              <AccordionItem key={f.q} value={`f${i}`}>
                <AccordionTrigger className="text-left text-base font-semibold text-navy">{f.q}</AccordionTrigger>
                <AccordionContent className="leading-relaxed text-graphite">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CtaBand title="Fulfillment auslagern? Wir beraten Sie gern." />
    </>
  );
}
