import { createFileRoute } from "@tanstack/react-router";
import { COMPANY, seo } from "@/lib/site";

export const Route = createFileRoute("/impressum")({
  head: () => {
    const s = seo("/impressum", "Impressum | Port Road Service GmbH", "Impressum und Anbieterkennzeichnung der Port Road Service GmbH, Merkurring 82, 22143 Hamburg.");
    return { ...s, meta: [...s.meta, { name: "robots", content: "index, follow" }] };
  },
  component: Impressum,
});

function Impressum() {
  return (
    <section className="bg-surface py-20">
      <div className="container-site max-w-3xl">
        <div className="rounded-lg border bg-card p-8 shadow-card sm:p-12">
          <h1 className="text-4xl font-extrabold text-navy">Impressum</h1>
          <div className="prose-legal mt-6">
            <h2>Angaben gemäß § 5 DDG</h2>
            <p>{COMPANY.name}<br />{COMPANY.street}<br />{COMPANY.zip} {COMPANY.city}<br />{COMPANY.country}</p>
            <h2>Vertreten durch</h2>
            <p>Geschäftsführer: {COMPANY.ceo}</p>
            <h2>Kontakt</h2>
            <p>Telefon: <a href={COMPANY.phoneHref}>{COMPANY.phone}</a><br />E-Mail: <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></p>
            <h2>Registereintrag</h2>
            <p>Eintragung im Handelsregister<br />Registernummer: {COMPANY.hrb}</p>
            <h2>Steuerangaben</h2>
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: {COMPANY.vatId}<br />Steuernummer: {COMPANY.taxNo}</p>
            <h2>Verantwortlich für den Inhalt</h2>
            <p>{COMPANY.ceo}, Anschrift wie oben</p>
            <h2>EU-Streitschlichtung</h2>
            <p>Unsere Leistungen richten sich ausschließlich an Unternehmer. Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
            <h2>Haftung für Inhalte</h2>
            <p>Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.</p>
            <h2>Haftung für Links</h2>
            <p>Unser Angebot kann Links zu externen Websites Dritter enthalten, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
            <h2>Urheberrecht</h2>
            <p>Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
