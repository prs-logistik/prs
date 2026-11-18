import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Route as RouteIcon, Globe2, MapPinned, Car, CalendarClock, Layers, Radio, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, SectionHead, ProcessFlow, CtaBand, FeatureRow } from "@/components/site/layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { seo } from "@/lib/site";
import hero from "@/assets/trucks.jpg";
import driver from "@/assets/driver.jpg";
import vehicles from "@/assets/vehicle-logistics.jpg";
import hamburg from "@/assets/hamburg.jpg";

export const Route = createFileRoute("/transport-spedition")({
  head: () =>
    seo(
      "/transport-spedition",
      "Transport & Spedition aus Hamburg | Port Road Service GmbH",
      "Speditionsleistungen, Transportkoordination, nationale und internationale Transporte sowie Fahrzeuglogistik für Unternehmen – organisiert von Port Road Service in Hamburg.",
    ),
  component: Transport,
});

const SERVICES = [
  { icon: RouteIcon, title: "Speditionsleistungen", text: "Wir organisieren den Transport Ihrer Güter von der Abholung bis zur Zustellung – inklusive Auswahl geeigneter Frachtführer, Laderaumplanung und Abstimmung der Zeitfenster." },
  { icon: Radio, title: "Transportkoordination", text: "Ein zentraler Ansprechpartner behält alle Beteiligten im Blick: Versender, Fahrer, Empfänger. So werden Abweichungen früh erkannt und gelöst." },
  { icon: MapPinned, title: "Nationale Transporte", text: "Teil- und Komplettladungen, Stückgut und Direktfahrten innerhalb Deutschlands – mit verlässlichen Laufzeiten ab Hamburg." },
  { icon: Globe2, title: "Internationale Transporte", text: "Transporte innerhalb Europas und darüber hinaus, inklusive Abstimmung der erforderlichen Begleitdokumente mit Ihnen und unseren Partnern." },
  { icon: Car, title: "Fahrzeuglogistik", text: "Transport und Überführung von Pkw und Transportern für Händler, Flottenbetreiber und Unternehmen – sicher verladen und termingerecht übergeben." },
  { icon: Layers, title: "Projektbezogene Transporte", text: "Messen, Standorteröffnungen, Umzüge von Lagerbeständen oder Rollouts: Wir planen Transporte als Projekt mit festen Meilensteinen." },
  { icon: CalendarClock, title: "Flexible Transportlösungen", text: "Kurzfristige Termine, Expressfahrten oder wechselnde Mengen – wir finden eine passende Kapazität, auch wenn es schnell gehen muss." },
];

const STEPS = [
  { title: "Anfrage", text: "Sie nennen Ware, Mengen, Abhol- und Zielort sowie den Wunschtermin." },
  { title: "Planung", text: "Wir wählen Fahrzeug, Route und Partner und bestätigen das Angebot." },
  { title: "Abholung", text: "Verladung und Ladungssicherung durch erfahrene Fahrer." },
  { title: "Transport", text: "Aktive Begleitung mit Statusinformationen bei Bedarf." },
  { title: "Zustellung", text: "Übergabe mit Ablieferbeleg und Abschlussmeldung." },
];

const FAQ = [
  { q: "Welche Transportarten bieten Sie an?", a: "Stückgut, Teil- und Komplettladungen, Direkt- und Terminfahrten sowie Fahrzeugtransporte – national und international." },
  { q: "Übernehmen Sie auch kurzfristige Aufträge?", a: "Ja, soweit Kapazitäten verfügbar sind. Je früher wir informiert werden, desto besser können wir planen." },
  { q: "Können Transport und Fulfillment kombiniert werden?", a: "Ja. Viele Kunden lassen Ware bei uns umpacken oder konsolidieren und anschließend direkt von uns transportieren." },
];

function Transport() {
  return (
    <>
      <PageHero
        eyebrow="Transport & Spedition"
        title="Transporte koordiniert aus Hamburg"
        text="Wir planen, organisieren und begleiten Transporte für Unternehmen – national, international und projektbezogen. Mit klarer Kommunikation und dem Blick für Details."
        image={hero}
        alt="Lkw und Transporter an den Laderampen eines Logistikzentrums"
      >
        <Button asChild variant="cta" size="xl"><Link to="/kontakt">Transport anfragen <ArrowRight /></Link></Button>
      </PageHero>

      <section className="py-24">
        <div className="container-site">
          <SectionHead eyebrow="Leistungsspektrum" title="Strukturierte Transportlogistik für Geschäftskunden" text="Ein Transport ist mehr als eine Fahrt von A nach B. Entscheidend sind Planung, Abstimmung und die Fähigkeit, auf Unvorhergesehenes zu reagieren." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <div key={s.title} className="rounded-lg border bg-card p-7 shadow-card">
                <s.icon className="h-8 w-8 text-steel" />
                <h3 className="mt-4 text-xl font-bold text-navy">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="container-site space-y-24">
          <FeatureRow image={driver} alt="PRS-Fahrer in Firmenjacke mit Tablet vor einer Zugmaschine" eyebrow="Zuverlässige Abwicklung" title="Erfahrene Fahrer, saubere Übergaben">
            <p>Ladungssicherung, pünktliche Abholung und ein professionelles Auftreten beim Empfänger gehören für uns zur Grundausstattung. Unsere Fahrer und Partner kennen die Anforderungen gewerblicher Kunden.</p>
            <ul className="space-y-2">
              {["Fachgerechte Ladungssicherung", "Ablieferbelege und Dokumentation", "Kommunikation bei Abweichungen"].map((p) => (
                <li key={p} className="flex gap-2"><Check className="mt-1 h-4 w-4 shrink-0 text-accent" /> {p}</li>
              ))}
            </ul>
          </FeatureRow>
          <FeatureRow reverse image={vehicles} alt="Autotransporter mit Neufahrzeugen auf der Autobahn" eyebrow="Fahrzeuglogistik" title="Fahrzeuge sicher ans Ziel bringen">
            <p>Für Autohäuser, Leasinggesellschaften und Unternehmen mit eigenen Flotten organisieren wir den Transport von Pkw und leichten Nutzfahrzeugen. Wir stimmen Abhol- und Übergabetermine ab und sorgen für eine dokumentierte Übergabe.</p>
            <p>Ob Einzelfahrzeug oder mehrere Einheiten – wir wählen die passende Transportlösung.</p>
          </FeatureRow>
        </div>
      </section>

      <section className="py-24">
        <div className="container-site">
          <SectionHead eyebrow="Ablauf" title="Von der Anfrage bis zur Zustellung" />
          <div className="mt-12"><ProcessFlow steps={STEPS} /></div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-28">
        <img src={hamburg} alt="Hamburger Hafen mit Containerbrücken zur blauen Stunde" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-hero-overlay" />
        <div className="container-site max-w-2xl">
          <p className="eyebrow text-accent">Standortvorteil</p>
          <h2 className="mt-3 text-3xl font-extrabold text-navy-foreground sm:text-4xl">Hamburg als logistische Drehscheibe</h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-foreground/80">Der Hafen, die Anbindung an A1, A7 und A24 sowie die Nähe zu Skandinavien und Osteuropa machen Hamburg zu einem idealen Ausgangspunkt für nationale und internationale Transporte.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHead eyebrow="FAQ" title="Fragen zu Transport & Spedition" />
          <Accordion type="single" collapsible>
            {FAQ.map((f, i) => (
              <AccordionItem key={f.q} value={`t${i}`}>
                <AccordionTrigger className="text-left text-base font-semibold text-navy">{f.q}</AccordionTrigger>
                <AccordionContent className="leading-relaxed text-graphite">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CtaBand title="Transport planen? Wir kümmern uns darum." />
    </>
  );
}
