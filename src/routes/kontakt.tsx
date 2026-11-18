import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Send, Check, Clock } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PageHero } from "@/components/site/layout";
import { COMPANY, seo } from "@/lib/site";
import hero from "@/assets/office-meeting.jpg";
import packing from "@/assets/packing.jpg";

export const Route = createFileRoute("/kontakt")({
  head: () =>
    seo(
      "/kontakt",
      "Kontakt & Anfrage | Port Road Service GmbH Hamburg",
      "Kontaktieren Sie Port Road Service GmbH in Hamburg für Fulfillment, Versand, Transport und Spedition. Telefon, E-Mail und Anfrageformular für Geschäftskunden.",
    ),
  component: Kontakt,
});

const SERVICES = ["Fulfillment komplett", "Warenannahme & Kontrolle", "Kommissionierung & Verpackung", "Etikettierung & Versand", "Retourenbearbeitung", "Transport & Spedition", "Fahrzeuglogistik", "Projektlogistik", "Sonstiges"];

function Kontakt() {
  const [service, setService] = useState("");
  const [privacy, setPrivacy] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (!privacy) {
      toast.error("Bitte bestätigen Sie den Datenschutzhinweis.");
      return;
    }
    const body = [
      `Unternehmen: ${f.get("company")}`,
      `Ansprechpartner: ${f.get("name")}`,
      `E-Mail: ${f.get("email")}`,
      `Telefon: ${f.get("phone") || "-"}`,
      `Gewünschte Leistung: ${service || "-"}`,
      "",
      `${f.get("message")}`,
    ].join("\n");
    const subject = `Anfrage: ${service || "Logistikleistung"} – ${f.get("company")}`;
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    toast.success("Ihr E-Mail-Programm wurde mit der Anfrage geöffnet.");
  };

  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Sprechen wir über Ihre Logistik"
        text="Ob konkretes Projekt oder erste Orientierung: Schreiben Sie uns oder rufen Sie an. Wir melden uns zeitnah mit einer persönlichen Rückmeldung."
        image={hero}
        alt="Besprechung mit Geschäftskunden im Büro mit Hafenblick"
      />

      <section className="py-24">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <aside className="space-y-6">
            <div className="rounded-lg bg-navy-gradient p-8 text-navy-foreground">
              <h2 className="text-2xl font-extrabold">{COMPANY.name}</h2>
              <ul className="mt-6 space-y-5">
                <li className="flex gap-3"><MapPin className="mt-1 h-5 w-5 text-accent" /><span>{COMPANY.street}<br />{COMPANY.zip} {COMPANY.city}<br />{COMPANY.country}</span></li>
                <li className="flex gap-3"><Phone className="mt-1 h-5 w-5 text-accent" /><a href={COMPANY.phoneHref} className="hover:underline">{COMPANY.phone}</a></li>
                <li className="flex gap-3"><Mail className="mt-1 h-5 w-5 text-accent" /><a href={`mailto:${COMPANY.email}`} className="hover:underline">{COMPANY.email}</a></li>
                <li className="flex gap-3"><Clock className="mt-1 h-5 w-5 text-accent" /><span>Wir beantworten Anfragen in der Regel innerhalb eines Werktags.</span></li>
              </ul>
            </div>
            <div className="rounded-lg border bg-surface p-8">
              <h2 className="text-xl font-bold text-navy">Projektanfrage – das hilft uns weiter</h2>
              <p className="mt-2 text-sm text-muted-foreground">Je genauer Ihre Angaben, desto schneller und präziser unser Angebot:</p>
              <ul className="mt-4 space-y-2 text-sm text-graphite">
                {["Art der Ware (Abmessungen, Gewicht, Besonderheiten)", "Mengen pro Tag, Woche oder Monat", "Gewünschte Leistungen", "Versandziele (national / international)", "Besondere Anforderungen oder Termine"].map((p) => (
                  <li key={p} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {p}</li>
                ))}
              </ul>
            </div>
            <img src={packing} alt="PRS-Mitarbeiterin an der Packstation" loading="lazy" width={1280} height={960} className="aspect-[4/3] w-full rounded-lg object-cover" />
          </aside>

          <form onSubmit={onSubmit} className="rounded-lg border bg-card p-8 shadow-card lg:p-10">
            <h2 className="text-2xl font-extrabold text-navy">Anfrage stellen</h2>
            <p className="mt-2 text-muted-foreground">Felder mit * sind Pflichtfelder.</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="space-y-2"><Label htmlFor="company">Unternehmen *</Label><Input id="company" name="company" required maxLength={120} /></div>
              <div className="space-y-2"><Label htmlFor="name">Ansprechpartner *</Label><Input id="name" name="name" required maxLength={100} /></div>
              <div className="space-y-2"><Label htmlFor="email">E-Mail *</Label><Input id="email" name="email" type="email" required maxLength={160} /></div>
              <div className="space-y-2"><Label htmlFor="phone">Telefon</Label><Input id="phone" name="phone" type="tel" maxLength={40} /></div>
              <div className="space-y-2 sm:col-span-2">
                <Label>Gewünschte Leistung</Label>
                <Select value={service} onValueChange={setService}>
                  <SelectTrigger><SelectValue placeholder="Bitte auswählen" /></SelectTrigger>
                  <SelectContent>{SERVICES.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="message">Nachricht *</Label>
                <Textarea id="message" name="message" required rows={7} maxLength={4000} placeholder="Beschreiben Sie Art der Ware, Mengen, gewünschte Leistungen, Versandziele und besondere Anforderungen." />
              </div>
              <div className="flex items-start gap-3 sm:col-span-2">
                <Checkbox id="privacy" checked={privacy} onCheckedChange={(v) => setPrivacy(v === true)} className="mt-1" />
                <Label htmlFor="privacy" className="text-sm font-normal leading-relaxed text-graphite">
                  Ich habe die <Link to="/datenschutz" className="text-steel underline">Datenschutzerklärung</Link> zur Kenntnis genommen und bin einverstanden, dass meine Angaben zur Bearbeitung der Anfrage verwendet werden. *
                </Label>
              </div>
            </div>
            <Button type="submit" variant="cta" size="xl" className="mt-8 w-full sm:w-auto"><Send /> Anfrage senden</Button>
          </form>
        </div>
      </section>
    </>
  );
}
