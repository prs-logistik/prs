import { createFileRoute } from "@tanstack/react-router";
import { COMPANY, seo } from "@/lib/site";
import { useConsent } from "@/components/site/consent";

export const Route = createFileRoute("/datenschutz")({
  head: () => seo("/datenschutz", "Datenschutzerklärung | Port Road Service GmbH", "Informationen zur Verarbeitung personenbezogener Daten auf der Website der Port Road Service GmbH gemäß DSGVO."),
  component: Datenschutz,
});

function Datenschutz() {
  const { openSettings } = useConsent();
  return (
    <section className="bg-surface py-20">
      <div className="container-site max-w-3xl">
        <div className="rounded-lg border bg-card p-8 shadow-card sm:p-12">
          <h1 className="text-4xl font-extrabold text-navy">Datenschutzerklärung</h1>
          <div className="prose-legal mt-6">
            <h2>1. Datenschutz auf einen Blick</h2>
            <p>Die folgenden Hinweise geben einen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>

            <h2>2. Verantwortlicher</h2>
            <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
            <p>{COMPANY.name}<br />{COMPANY.street}<br />{COMPANY.zip} {COMPANY.city}<br />Vertreten durch den Geschäftsführer {COMPANY.ceo}<br />Telefon: {COMPANY.phone}<br />E-Mail: <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></p>
            <p>Verantwortlicher ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.</p>

            <h2>3. Hosting</h2>
            <p>Diese Website wird bei einem externen Dienstleister gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich insbesondere um IP-Adressen, Meta- und Kommunikationsdaten, Websitezugriffe und sonstige Daten handeln, die über eine Website generiert werden.</p>
            <p>Der Einsatz des Hosters erfolgt im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots (Art. 6 Abs. 1 lit. f DSGVO). Mit dem Hoster besteht ein Vertrag über Auftragsverarbeitung gemäß Art. 28 DSGVO.</p>

            <h2>4. Server-Logfiles</h2>
            <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Logfiles, die Ihr Browser automatisch übermittelt. Dies sind:</p>
            <ul>
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer-URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p>Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Sicherheit unserer Website. Logfiles werden nach spätestens 30 Tagen gelöscht, sofern keine längere Aufbewahrung zu Beweiszwecken erforderlich ist.</p>

            <h2>5. Kontaktaufnahme per E-Mail, Telefon oder Kontaktformular</h2>
            <p>Wenn Sie uns per E-Mail, Telefon oder über das Kontaktformular kontaktieren, werden Ihre Angaben (z. B. Unternehmen, Name, E-Mail-Adresse, Telefonnummer, Nachricht) zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert und verarbeitet. Das Kontaktformular öffnet Ihr E-Mail-Programm und übermittelt die Daten per E-Mail an uns.</p>
            <p>Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung von Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).</p>
            <p>Die Daten verbleiben bei uns, bis Sie zur Löschung auffordern, Ihre Einwilligung widerrufen oder der Zweck der Speicherung entfällt. Zwingende gesetzliche Aufbewahrungsfristen bleiben unberührt.</p>

            <h2>6. Cookies</h2>
            <p>Unsere Website verwendet Cookies und vergleichbare Technologien (z. B. Local Storage). Dabei handelt es sich um kleine Datensätze, die auf Ihrem Endgerät gespeichert werden. Technisch notwendige Cookies werden auf Grundlage von § 25 Abs. 2 TDDDG und Art. 6 Abs. 1 lit. f DSGVO gespeichert. Alle anderen Cookies werden nur mit Ihrer Einwilligung gemäß § 25 Abs. 1 TDDDG und Art. 6 Abs. 1 lit. a DSGVO gesetzt.</p>
            <h3>Kategorien</h3>
            <ul>
              <li><strong>Notwendig:</strong> Speichern Ihrer Cookie-Auswahl und grundlegende Seitenfunktionen.</li>
              <li><strong>Funktional:</strong> Komfortfunktionen, z. B. eingebettete Inhalte Dritter.</li>
              <li><strong>Statistik:</strong> Anonymisierte Auswertung der Websitenutzung.</li>
              <li><strong>Marketing:</strong> Personalisierung von Inhalten und Anzeigen.</li>
            </ul>

            <h2>7. Consent Management / Cookie-Banner</h2>
            <p>Beim ersten Besuch fragen wir über ein Cookie-Banner Ihre Einwilligung für nicht notwendige Kategorien ab. Ihre Auswahl wird im Local Storage Ihres Browsers gespeichert, damit wir sie bei späteren Besuchen berücksichtigen können. Nicht notwendige Dienste werden erst nach Ihrer Einwilligung geladen. Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft ändern oder widerrufen:</p>
            <p><button onClick={openSettings} className="font-semibold text-steel underline">Cookie-Einstellungen öffnen</button></p>

            <h2>8. Technisch notwendige Dienste</h2>
            <p>Zur Darstellung der Schriftarten binden wir Google Fonts ein. Dabei wird beim Seitenaufruf eine Verbindung zu Servern von Google hergestellt und Ihre IP-Adresse übermittelt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse liegt in einer einheitlichen Darstellung. Weitere Informationen finden Sie in der Datenschutzerklärung von Google.</p>

            <h2>9. Speicherdauer</h2>
            <p>Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung widerrufen, werden Ihre Daten gelöscht, sofern keine anderen rechtlich zulässigen Gründe (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen) für die Speicherung bestehen.</p>

            <h2>10. Ihre Rechte als betroffene Person</h2>
            <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:</p>
            <ul>
              <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO)</li>
            </ul>
            <h3>Widerspruchsrecht (Art. 21 DSGVO)</h3>
            <p>Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen.</p>
            <p>Zur Ausübung Ihrer Rechte wenden Sie sich bitte an <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.</p>

            <h2>11. Beschwerderecht bei der Aufsichtsbehörde</h2>
            <p>Im Falle von Verstößen gegen die DSGVO steht Ihnen ein Beschwerderecht bei einer Aufsichtsbehörde zu, insbesondere in dem Mitgliedstaat Ihres gewöhnlichen Aufenthalts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes. Zuständig für uns ist der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit.</p>

            <h2>12. SSL- bzw. TLS-Verschlüsselung</h2>
            <p>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie an „https://“ in der Adresszeile Ihres Browsers.</p>

            <h2>13. Aktualität</h2>
            <p>Wir passen diese Datenschutzerklärung an, sobald Änderungen der Website oder der Rechtslage dies erfordern.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
