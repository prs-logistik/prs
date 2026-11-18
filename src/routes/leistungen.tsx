import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, PackageCheck, ClipboardCheck, ScanLine, Package, Tag, Send, RotateCcw, Truck, Layers, Wrench, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, SectionHead, CtaBand } from "@/components/site/layout";
import { seo } from "@/lib/site";
import hero from "@/assets/packing.jpg";
import goods from "@/assets/goods-receipt.jpg";
import picking from "@/assets/picking.jpg";
import labels from "@/assets/labels.jpg";
import trucks from "@/assets/trucks.jpg";
import meeting from "@/assets/office-meeting.jpg";

export const Route = createFileRoute("/leistungen")({
  head: () =>
    seo(
      "/leistungen",
      "Leistungen | Fulfillment, Versand & Spedition – Port Road Service GmbH",
      "Fulfillment, Warenannahme, Kommissionierung, Verpackung, Etikettierung, Versand, Retouren, Transport und Projektlogistik für Geschäftskunden aus Hamburg.",
    ),
  component: Leistungen,
});

const BLOCKS = [
  { id: "fulfillment", icon: PackageCheck, title: "Fulfillment-Services", text: "Wir übernehmen die komplette Auftragsabwicklung oder einzelne Teilschritte – je nachdem, was Ihr Unternehmen benötigt. Sie liefern die Ware an, wir kümmern uns um Annahme, Bearbeitung und Versand. So reduzieren Sie Fixkosten für Fläche und Personal und gewinnen Flexibilität bei schwankenden Auftragsvolumen.", points: ["Komplette oder modulare Prozessübernahme", "Skalierbar bei Saison- und Aktionsspitzen", "Abstimmung auf Ihre Versandstandards"] },
  { id: "wareneingang", icon: ClipboardCheck, title: "Wareneingang und Warenbearbeitung", text: "Ein sauberer Wareneingang ist die Grundlage jeder funktionierenden Logistik. Wir nehmen Paletten, Pakete und lose Ware an, gleichen sie mit Lieferpapieren ab und dokumentieren Abweichungen oder Transportschäden unmittelbar – damit Reklamationen gegenüber Lieferanten schnell geklärt werden können.", points: ["Mengen- und Sichtkontrolle", "Fotodokumentation bei Auffälligkeiten", "Vereinzelung und Vorbereitung zur Weiterverarbeitung"] },
  { id: "kommissionierung", icon: ScanLine, title: "Kommissionierung", text: "Wir stellen Aufträge exakt nach Ihren Vorgaben zusammen – vom Einzelartikel bis zur Sammelbestellung für den Handel. Scannergestützte Abläufe und Kontrollschritte senken die Fehlerquote und sorgen dafür, dass beim Empfänger genau das ankommt, was bestellt wurde.", points: ["Einzel- und Mehrpositionsaufträge", "Kontrolle vor dem Verpacken", "Priorisierung eiliger Aufträge"] },
  { id: "verpackung", icon: Package, title: "Verpackung und Umpacken", text: "Die richtige Verpackung schützt Ihre Ware und Ihr Markenimage. Wir verpacken sachgerecht, polstern empfindliche Artikel, packen Lieferungen in versandfähige Einheiten um oder stellen Sets und Displays zusammen.", points: ["Produktschonende Verpackung", "Umpacken von Container- und Palettenware", "Set- und Displaybau nach Vorgabe"] },
  { id: "etikettierung", icon: Tag, title: "Etikettierung und Versandvorbereitung", text: "Ob Versandlabel, Artikeletiketten, Länderkennzeichnung oder Umetikettierung für den Handel: Wir bringen die richtigen Kennzeichnungen an und bereiten Sendungen so vor, dass sie ohne Verzögerung weiterlaufen.", points: ["Versand- und Artikeletiketten", "Umetikettierung nach Händlervorgaben", "Bereitstellung von Begleitpapieren"] },
  { id: "versand", icon: Send, title: "Versandabwicklung", text: "Wir übergeben Ihre Sendungen an Paketdienste, Stückgutnetzwerke oder Speditionen – oder organisieren den Transport selbst. Sie erhalten Sendungsinformationen, sodass Sie Ihre Kunden zuverlässig informieren können.", points: ["Paket, Stückgut und Teilladung", "Konsolidierung mehrerer Sendungen", "Sendungsinformationen für Ihre Kunden"] },
  { id: "retouren", icon: RotateCcw, title: "Retourenmanagement", text: "Retouren sind ein Kostenfaktor – wenn sie nicht systematisch bearbeitet werden. Wir prüfen zurückgesandte Ware, sortieren sie nach Zustand, bereiten wiederverkaufsfähige Artikel auf und melden Ihnen die Ergebnisse strukturiert zurück.", points: ["Zustandsprüfung und Klassifizierung", "Wiederaufbereitung und Neuverpackung", "Strukturierte Rückmeldung"] },
  { id: "transport", icon: Truck, title: "Transport- und Speditionslösungen", text: "Nationale und internationale Transporte koordinieren wir mit einem belastbaren Netzwerk aus Partnern und eigenen Kapazitäten. Wir planen Routen, Ladungen und Zeitfenster und behalten die Abwicklung bis zur Zustellung im Blick.", points: ["Nationale und europäische Transporte", "Fahrzeuglogistik", "Termin- und Direktfahrten"] },
  { id: "projektlogistik", icon: Layers, title: "Individuelle Projektlogistik", text: "Manche Aufgaben passen in kein Standardraster: Produkteinführungen, Rückrufaktionen, Messelogistik oder Sonderverteilungen. Wir entwickeln dafür gemeinsam mit Ihnen einen konkreten Ablaufplan und setzen ihn verlässlich um.", points: ["Projektplanung mit festem Ansprechpartner", "Kurzfristige Sonderaktionen", "Klare Kosten- und Zeitplanung"] },
  { id: "zusatz", icon: Wrench, title: "Zusätzliche operative Dienstleistungen", text: "Rund um die Kernleistungen übernehmen wir weitere Aufgaben, die in Ihrem Betrieb Kapazitäten binden: Zwischenlagerung, Qualitätskontrollen, Beilagen, Bündelung oder einfache Konfektionierung.", points: ["Zwischenlagerung / lagernahe Leistungen", "Beilagen und Bündelung", "Einfache Konfektionierung"] },
];

const IMAGES = [goods, picking, hero, labels, trucks, meeting];

function Leistungen() {
  return (
    <>
      <PageHero
        eyebrow="Leistungen"
        title="Logistikleistungen für Geschäftskunden"
        text="Von der Warenannahme über Kommissionierung und Verpackung bis zu Versand und Transport: Wir übernehmen die operativen Schritte, die Ihr Unternehmen entlasten."
        image={hero}
        alt="PRS-Mitarbeiterin verschließt einen Versandkarton an der Packstation"
      >
        <Button asChild variant="cta" size="xl"><Link to="/kontakt">Angebot anfragen <ArrowRight /></Link></Button>
      </PageHero>

      <section className="border-b bg-surface py-10">
        <div className="container-site flex flex-wrap gap-2">
          {BLOCKS.map((b) => (
            <a key={b.id} href={`#${b.id}`} className="rounded-full border bg-card px-4 py-2 text-sm font-medium text-graphite hover:border-steel hover:text-navy">{b.title}</a>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="container-site">
          <SectionHead eyebrow="Leistungsübersicht" title="Bausteine, die sich flexibel kombinieren lassen" text="Sie entscheiden, welche Teile Ihrer Logistik wir übernehmen. Viele Kunden starten mit einem Baustein und erweitern die Zusammenarbeit Schritt für Schritt." />
          <div className="mt-16 space-y-6">
            {BLOCKS.map((b, i) => (
              <article id={b.id} key={b.id} className="scroll-mt-32 grid overflow-hidden rounded-lg border bg-card shadow-card lg:grid-cols-[1fr_1.4fr]">
                <img src={IMAGES[i % IMAGES.length]} alt={`${b.title} bei Port Road Service`} loading="lazy" width={1280} height={960} className={`h-full min-h-56 w-full object-cover ${i % 2 ? "lg:order-2" : ""}`} />
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-md bg-navy text-navy-foreground"><b.icon className="h-5 w-5" /></span>
                    <h2 className="text-2xl font-extrabold text-navy">{b.title}</h2>
                  </div>
                  <p className="mt-5 leading-relaxed text-graphite">{b.text}</p>
                  <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                    {b.points.map((p) => (
                      <li key={p} className="flex gap-2 text-sm text-graphite"><Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {p}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container-site grid gap-6 md:grid-cols-2">
          <Link to="/fulfillment" className="group rounded-lg bg-navy-gradient p-10 text-navy-foreground">
            <p className="eyebrow text-accent">Im Detail</p>
            <h2 className="mt-3 text-2xl font-extrabold">Fulfillment & Versand</h2>
            <p className="mt-3 text-navy-foreground/75">Alle Prozessschritte von der Annahme bis zur Retoure ausführlich erklärt.</p>
            <span className="mt-6 inline-flex items-center gap-2 font-semibold">Zur Seite <ArrowRight className="h-4 w-4" /></span>
          </Link>
          <Link to="/transport-spedition" className="group rounded-lg bg-navy-gradient p-10 text-navy-foreground">
            <p className="eyebrow text-accent">Im Detail</p>
            <h2 className="mt-3 text-2xl font-extrabold">Transport & Spedition</h2>
            <p className="mt-3 text-navy-foreground/75">Nationale und internationale Transporte, Fahrzeuglogistik und Projekttransporte.</p>
            <span className="mt-6 inline-flex items-center gap-2 font-semibold">Zur Seite <ArrowRight className="h-4 w-4" /></span>
          </Link>
        </div>
      </section>

      <CtaBand title="Welche Leistungen passen zu Ihrem Bedarf?" />
    </>
  );
}
