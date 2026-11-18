import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Shuffle, Gauge, Handshake, MessageSquare, ClipboardList, Wrench } from "lucide-react";
import { PageHero, SectionHead, CtaBand, FeatureRow } from "@/components/site/layout";
import { COMPANY, seo } from "@/lib/site";
import team from "@/assets/unternehmen-team.jpg";
import meeting from "@/assets/unternehmen-planning.jpg";
import hamburg from "@/assets/hamburg.jpg";
import warehouse from "@/assets/unternehmen-warehouse.jpg";
import goods from "@/assets/unternehmen-customer.jpg";

export const Route = createFileRoute("/unternehmen")({
  head: () =>
    seo(
      "/unternehmen",
      "Unternehmen | Über Port Road Service GmbH, Hamburg",
      "Lernen Sie Port Road Service GmbH kennen: Logistik-, Fulfillment- und Transportdienstleister aus Hamburg mit Fokus auf Zuverlässigkeit, Flexibilität und Geschäftskunden.",
    ),
  component: Unternehmen,
});

const VALUES = [
  { icon: ShieldCheck, title: "Zuverlässigkeit", text: "Zusagen gelten. Termine, Mengen und Qualität sind für uns keine Verhandlungsmasse." },
  { icon: Shuffle, title: "Flexibilität", text: "Anforderungen ändern sich – wir passen Abläufe an, ohne dass die Qualität leidet." },
  { icon: Gauge, title: "Effizienz", text: "Durchdachte Prozesse sparen Zeit und Kosten – auf beiden Seiten." },
  { icon: Handshake, title: "Partnerschaft", text: "Wir denken mit und sprechen offen an, wenn sich etwas besser lösen lässt." },
];

const WAY = [
  { icon: MessageSquare, title: "Zuhören", text: "Am Anfang steht ein Gespräch über Ware, Mengen, Ziele und Besonderheiten." },
  { icon: ClipboardList, title: "Planen", text: "Wir definieren Abläufe, Verantwortlichkeiten und Kommunikationswege schriftlich." },
  { icon: Wrench, title: "Umsetzen", text: "Unser Team setzt die Prozesse im Tagesgeschäft konsequent um und meldet Ergebnisse zurück." },
];

function Unternehmen() {
  return (
    <>
      <PageHero
        eyebrow="Unternehmen"
        title="Logistik mit Verantwortung – aus Hamburg"
        text="Port Road Service GmbH ist ein Logistikdienstleister für Geschäftskunden. Wir verbinden operative Erfahrung mit einem klaren Anspruch: Prozesse, auf die sich unsere Kunden verlassen können."
        image={team}
        alt="Drei Kollegen von Port Road Service in Firmenjacken stimmen sich am Kommissionierwagen im Lager ab"
      />

      <section className="py-24">
        <div className="container-site">
          <FeatureRow image={warehouse} alt="Operativer Lagerbetrieb bei Port Road Service in Hamburg" eyebrow="Wer wir sind" title="Erfahren, strukturiert, serviceorientiert">
            <p>Port Road Service GmbH unterstützt Unternehmen bei Fulfillment, Versandabwicklung, Transport und Spedition. Seit 2011 sind wir für Geschäftskunden aktiv und haben in dieser Zeit gelernt, was gute Logistik im Alltag ausmacht: klare Absprachen, sorgfältige Ausführung und schnelle Reaktion, wenn es darauf ankommt.</p>
            <p>Geführt wird das Unternehmen von Geschäftsführer {COMPANY.ceo}. Kurze Entscheidungswege und ein direkter Draht zur Geschäftsführung sind für unsere Kunden ein spürbarer Vorteil.</p>
          </FeatureRow>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="container-site">
          <SectionHead center eyebrow="Wofür wir stehen" title="Werte, die unsere Arbeit prägen" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-lg border bg-card p-7 text-center shadow-card">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-navy text-navy-foreground"><v.icon className="h-6 w-6" /></span>
                <h3 className="mt-5 text-lg font-bold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-site space-y-24">
          <FeatureRow reverse image={meeting} alt="Abstimmungsgespräch mit Geschäftskunden im Büro" eyebrow="Unsere Arbeitsweise" title="Praktische Lösungen statt Standardpakete">
            <p>Jedes Unternehmen hat eigene Abläufe, Produkte und Kunden. Deshalb beginnen wir nicht mit einem fertigen Paket, sondern mit Ihren Anforderungen. Daraus entsteht ein Ablauf, der zu Ihrem Geschäft passt.</p>
            <div className="grid gap-4 pt-2 sm:grid-cols-3">
              {WAY.map((w) => (
                <div key={w.title} className="rounded-md border bg-card p-4">
                  <w.icon className="h-5 w-5 text-steel" />
                  <p className="mt-2 font-bold text-navy">{w.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{w.text}</p>
                </div>
              ))}
            </div>
          </FeatureRow>
          <FeatureRow image={goods} alt="Mitarbeiterin in PRS-Firmenjacke bespricht Ware und Lieferpapiere mit einem Geschäftskunden" eyebrow="Kundenorientierung" title="Für wen wir arbeiten">
            <p>Unsere Kunden sind Händler, Onlineshops, Hersteller, Importeure, Großhändler und Unternehmen mit Fahrzeugflotten. Gemeinsam ist ihnen der Wunsch nach einem Logistikpartner, der mitdenkt und Verantwortung übernimmt.</p>
            <p>Wir arbeiten ausschließlich im B2B-Bereich – mit festen Ansprechpartnern und einer Kommunikation auf Augenhöhe.</p>
          </FeatureRow>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-28">
        <img src={hamburg} alt="Hamburger Hafen und Skyline am Abend" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-hero-overlay" />
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-accent">Unser Standort in Hamburg</p>
            <h2 className="mt-3 text-3xl font-extrabold text-navy-foreground sm:text-4xl">Zuhause im Logistikzentrum des Nordens</h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-foreground/80">Unser Sitz am Merkurring in Hamburg-Rahlstedt liegt verkehrsgünstig im Nordosten der Stadt – mit schneller Anbindung an die A1 und das überregionale Straßennetz.</p>
          </div>
          <address className="self-end rounded-lg border border-navy-foreground/15 bg-navy-deep/60 p-8 not-italic text-navy-foreground backdrop-blur">
            <p className="font-display text-xl font-bold">{COMPANY.name}</p>
            <p className="mt-3 text-navy-foreground/80">{COMPANY.street}<br />{COMPANY.zip} {COMPANY.city}, {COMPANY.country}</p>
            <p className="mt-3 text-navy-foreground/80">Geschäftsführer: {COMPANY.ceo}</p>
          </address>
        </div>
      </section>

      <CtaBand title="Lernen Sie uns persönlich kennen" />
    </>
  );
}
