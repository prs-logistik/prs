import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, PackageCheck, Boxes, Truck, RotateCcw, Tag, Warehouse, ShieldCheck, Handshake, Clock, MapPin, Factory, ShoppingCart, Car, Building2, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, SectionHead, ProcessFlow, CtaBand, FeatureRow } from "@/components/site/layout";
import { COMPANY, seo } from "@/lib/site";
import hero from "@/assets/hero-warehouse.jpg";
import packing from "@/assets/packing.jpg";
import trucks from "@/assets/trucks.jpg";
import team from "@/assets/team.jpg";
import picking from "@/assets/picking.jpg";
import driver from "@/assets/driver.jpg";
import labels from "@/assets/labels.jpg";
import meeting from "@/assets/office-meeting.jpg";

export const Route = createFileRoute("/")({
  head: () =>
    seo(
      "/",
      "Port Road Service GmbH | Logistik, Fulfillment & Transport in Hamburg",
      "Port Road Service GmbH bietet professionelle Fulfillment-, Logistik-, Versand- und Transportlösungen für Unternehmen in Hamburg und darüber hinaus.",
    ),
  component: Home,
});

const SERVICES = [
  { icon: PackageCheck, title: "Fulfillment", text: "Von der Warenannahme bis zum versandfertigen Paket – wir übernehmen Ihre operativen Abläufe zuverlässig und nachvollziehbar.", to: "/fulfillment" },
  { icon: Warehouse, title: "Warenannahme & Prüfung", text: "Strukturierte Annahme, Mengen- und Sichtkontrolle sowie lückenlose Dokumentation jeder Anlieferung.", to: "/fulfillment" },
  { icon: Boxes, title: "Kommissionierung & Verpackung", text: "Sorgfältige Zusammenstellung, Umpacken und Konsolidierung nach Ihren Vorgaben und Verpackungsstandards.", to: "/leistungen" },
  { icon: Tag, title: "Etikettierung & Versand", text: "Etikettierung, Versandvorbereitung und Übergabe an Paketdienste oder Speditionen – termingerecht.", to: "/fulfillment" },
  { icon: Truck, title: "Transport & Spedition", text: "Nationale und internationale Transporte, koordiniert aus Hamburg – von der Teilpartie bis zum Projekttransport.", to: "/transport-spedition" },
  { icon: RotateCcw, title: "Retourenbearbeitung", text: "Prüfung, Sortierung und Wiederaufbereitung zurückgesandter Ware mit klarer Rückmeldung an Sie.", to: "/leistungen" },
] as const;

const STEPS = [
  { title: "Anlieferung", text: "Ihre Ware trifft in Hamburg ein und wird avisiert, angenommen und erfasst." },
  { title: "Prüfung", text: "Mengen-, Sicht- und Zustandskontrolle mit Dokumentation von Abweichungen." },
  { title: "Kommissionierung", text: "Zusammenstellung der Aufträge exakt nach Ihren Vorgaben." },
  { title: "Verpackung", text: "Sichere, sachgerechte Verpackung, Umpacken oder Konsolidieren." },
  { title: "Versand", text: "Etikettierung, Übergabe an Carrier oder eigener Transport – mit Statusmeldung." },
];

const REASONS = [
  { icon: Handshake, title: "Fester Ansprechpartner", text: "Sie sprechen mit Menschen, die Ihr Projekt kennen – keine anonymen Ticketsysteme." },
  { icon: ShieldCheck, title: "Sorgfalt im Detail", text: "Klare Prüfschritte und Dokumentation sorgen für Transparenz bei jeder Sendung." },
  { icon: Clock, title: "Flexibel bei Spitzen", text: "Saisonale Peaks, Sonderaktionen oder kurzfristige Aufträge fangen wir operativ ab." },
  { icon: MapPin, title: "Standort Hamburg", text: "Kurze Wege zu Hafen, Autobahnen und wichtigen Paket- und Speditionsnetzwerken." },
];

const INDUSTRIES = [
  { icon: ShoppingCart, title: "Handel & E-Commerce", text: "Versand an Endkunden und Händler, Retourenabwicklung, Aktionsware." },
  { icon: Factory, title: "Industrie & Produktion", text: "Ersatzteile, Komponenten, Zwischenlagerung und Versorgungstransporte." },
  { icon: Building2, title: "Großhandel & Import", text: "Containerentladung, Umpacken, Etikettierung und Verteilung im Inland." },
  { icon: Car, title: "Automotive & Fahrzeuge", text: "Fahrzeuglogistik, Überführungen und Teileversorgung für Betriebe." },
];

function Home() {
  return (
    <>
      <PageHero
        tall
        eyebrow="Logistik aus Hamburg"
        title="Logistik- und Fulfillment-Lösungen für Unternehmen"
        text="Port Road Service GmbH übernimmt Warenannahme, Kommissionierung, Verpackung, Versand und Transport für Geschäftskunden – strukturiert, termingerecht und mit persönlicher Betreuung."
        image={hero}
        alt="PRS-Mitarbeiter in Warnwesten bei der Arbeit im Hamburger Logistiklager"
      >
        <Button asChild variant="cta" size="xl"><Link to="/kontakt">Anfrage stellen <ArrowRight /></Link></Button>
        <Button asChild variant="heroOutline" size="xl"><Link to="/leistungen">Leistungen ansehen</Link></Button>
      </PageHero>

      <section className="border-b bg-surface">
        <div className="container-site grid grid-cols-2 gap-6 py-8 text-sm lg:grid-cols-4">
          {["Fulfillment & Versand", "Transport & Spedition", "Fahrzeuglogistik", "Projektlogistik"].map((t) => (
            <div key={t} className="flex items-center gap-3 font-semibold text-navy">
              <span className="h-2 w-2 rounded-full bg-accent" /> {t}
            </div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHead eyebrow="Port Road Service GmbH" title="Ihr operativer Logistikpartner im Norden" />
          <div className="space-y-5 text-lg leading-relaxed text-graphite">
            <p>Unternehmen stehen heute unter Druck: Lieferzeiten werden kürzer, Sendungsmengen schwanken und Kunden erwarten fehlerfreie Abläufe. Genau hier setzen wir an. Wir übernehmen die logistischen Prozesse, die Zeit, Fläche und Personal binden – und geben Ihnen Freiraum für Ihr Kerngeschäft.</p>
            <p>Von unserem Standort in Hamburg aus betreuen wir Händler, Hersteller und Dienstleister mit Fulfillment-Services, Versandabwicklung sowie Transport- und Speditionsleistungen. Unser Anspruch: klare Absprachen, nachvollziehbare Prozesse und Ergebnisse, auf die Sie sich verlassen können.</p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="container-site">
          <SectionHead center eyebrow="Leistungen" title="Alles aus einer Hand – von der Rampe bis zum Empfänger" text="Wählen Sie einzelne Bausteine oder lassen Sie uns die komplette Prozesskette übernehmen." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Link key={s.title} to={s.to} className="group rounded-lg border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift">
                <span className="grid h-12 w-12 place-items-center rounded-md bg-navy text-navy-foreground"><s.icon className="h-6 w-6" /></span>
                <h3 className="mt-5 text-xl font-bold text-navy">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{s.text}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-steel group-hover:gap-3 transition-all">Mehr erfahren <ArrowRight className="h-4 w-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-site">
          <SectionHead eyebrow="Unser Prozess" title="Anlieferung → Prüfung → Kommissionierung → Verpackung → Versand" text="Jeder Auftrag durchläuft definierte Schritte. So bleibt nachvollziehbar, wo sich Ihre Ware befindet und in welchem Zustand sie unser Haus verlässt." />
          <div className="mt-12"><ProcessFlow steps={STEPS} /></div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <img src={picking} alt="PRS-Mitarbeiterin kommissioniert Ware mit Handscanner" loading="lazy" width={1280} height={960} className="aspect-[4/3] w-full rounded-lg object-cover" />
            <img src={packing} alt="Mitarbeiterin im PRS-Poloshirt verpackt einen Versandkarton" loading="lazy" width={1280} height={960} className="aspect-[4/3] w-full rounded-lg object-cover" />
            <img src={labels} alt="Versandetiketten werden auf Pakete am Förderband geklebt" loading="lazy" width={1280} height={960} className="aspect-[4/3] w-full rounded-lg object-cover" />
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-navy-deep py-24">
        <img src={trucks} alt="Lkw und Transporter an den Laderampen eines Logistikzentrums" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30" />
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="eyebrow text-accent">Warum Port Road Service</p>
            <h2 className="mt-3 text-3xl font-extrabold text-navy-foreground sm:text-4xl">Verlässlichkeit, die man im Alltag spürt</h2>
            <p className="mt-5 text-lg text-navy-foreground/75">Geschäftskunden arbeiten mit uns, weil Absprachen eingehalten werden und Probleme gelöst statt verschoben werden.</p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {REASONS.map((r) => (
              <div key={r.title} className="rounded-lg border border-navy-foreground/10 bg-navy/60 p-6 backdrop-blur">
                <r.icon className="h-7 w-7 text-accent" />
                <h3 className="mt-4 text-lg font-bold text-navy-foreground">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-foreground/70">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-site">
          <SectionHead eyebrow="Branchen & Einsatzbereiche" title="Für Unternehmen, die Logistik ernst nehmen" text="Unsere Leistungen richten sich ausschließlich an Geschäftskunden. Typische Einsatzbereiche:" />
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border bg-border md:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map((i) => (
              <div key={i.title} className="bg-card p-7">
                <i.icon className="h-7 w-7 text-steel" />
                <h3 className="mt-4 text-lg font-bold text-navy">{i.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="container-site space-y-24">
          <FeatureRow image={driver} alt="PRS-Fahrer mit Tablet vor einer Lkw-Zugmaschine" eyebrow="Transport & Spedition" title="Transporte, die geplant ankommen">
            <p>Ob Teilladung innerhalb Deutschlands, internationale Sendung oder Fahrzeugüberführung: Wir organisieren Transporte mit Blick auf Termin, Ladung und Kosten – und halten Sie über den Status informiert.</p>
            <Button asChild variant="default"><Link to="/transport-spedition">Zu Transport & Spedition <ArrowRight /></Link></Button>
          </FeatureRow>
          <FeatureRow reverse image={team} alt="Team von Port Road Service in Firmenjacken vor der Laderampe" eyebrow="Über uns" title="Ein eingespieltes Team mit Erfahrung">
            <p>Hinter Port Road Service steht ein Team aus Lager-, Versand- und Transportprofis. Wir arbeiten seit vielen Jahren für Geschäftskunden und wissen, worauf es im operativen Alltag ankommt: Verlässlichkeit, kurze Abstimmungswege und Lösungen, die in der Praxis funktionieren.</p>
            <Button asChild variant="default"><Link to="/unternehmen">Unternehmen kennenlernen <ArrowRight /></Link></Button>
          </FeatureRow>
        </div>
      </section>

      <section className="py-24">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <img src={meeting} alt="Logistikberatung im Besprechungsraum mit Blick auf den Hamburger Hafen" loading="lazy" width={1280} height={960} className="aspect-[4/3] w-full rounded-lg object-cover shadow-lift" />
          <div>
            <SectionHead eyebrow="Kontakt" title="Sprechen Sie mit uns über Ihre Anforderungen" text="Schildern Sie uns Art der Ware, Mengen und gewünschte Leistungen. Wir erstellen Ihnen ein passendes Angebot." />
            <div className="mt-8 space-y-3">
              <a href={COMPANY.phoneHref} className="flex items-center gap-3 font-semibold text-navy"><Phone className="h-5 w-5 text-steel" /> {COMPANY.phone}</a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 font-semibold text-navy"><Mail className="h-5 w-5 text-steel" /> {COMPANY.email}</a>
              <p className="flex items-center gap-3 text-graphite"><MapPin className="h-5 w-5 text-steel" /> {COMPANY.street}, {COMPANY.zip} {COMPANY.city}</p>
            </div>
            <Button asChild variant="cta" size="xl" className="mt-8"><Link to="/kontakt">Zum Kontaktformular <ArrowRight /></Link></Button>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
