import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Link } from "@tanstack/react-router";

export type Consent = { necessary: true; functional: boolean; statistics: boolean; marketing: boolean };
const KEY = "prs-cookie-consent-v1";

type Ctx = { consent: Consent | null; openSettings: () => void };
const ConsentContext = createContext<Ctx>({ consent: null, openSettings: () => {} });
export const useConsent = () => useContext(ConsentContext);

const CATEGORIES: { key: keyof Omit<Consent, "necessary">; label: string; text: string }[] = [
  { key: "functional", label: "Funktional", text: "Ermöglicht komfortable Zusatzfunktionen, z. B. das Speichern von Formulareingaben oder eingebettete Karten." },
  { key: "statistics", label: "Statistik", text: "Hilft uns zu verstehen, wie Besucher die Website nutzen, damit wir Inhalte verbessern können. Daten werden anonymisiert ausgewertet." },
  { key: "marketing", label: "Marketing", text: "Wird verwendet, um Inhalte und Anzeigen auf externen Plattformen relevanter zu gestalten." },
];

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [draft, setDraft] = useState({ functional: false, statistics: false, marketing: false });

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const c = JSON.parse(raw) as Consent;
        setConsent(c);
        setDraft({ functional: c.functional, statistics: c.statistics, marketing: c.marketing });
      } else setShowBanner(true);
    } catch {
      setShowBanner(true);
    }
  }, []);

  // Non-essential scripts are loaded here only after explicit consent.
  useEffect(() => {
    if (!consent) return;
    // Beispiel: if (consent.statistics) loadAnalytics();
  }, [consent]);

  const save = (c: Omit<Consent, "necessary">) => {
    const full: Consent = { necessary: true, ...c };
    localStorage.setItem(KEY, JSON.stringify({ ...full, savedAt: new Date().toISOString() }));
    setConsent(full);
    setDraft(c);
    setShowBanner(false);
    setShowSettings(false);
  };

  const openSettings = () => {
    setShowSettings(true);
    setShowBanner(true);
  };

  return (
    <ConsentContext.Provider value={{ consent, openSettings }}>
      {children}
      {showBanner && (
        <div role="dialog" aria-modal="false" aria-labelledby="cookie-title" className="fixed inset-x-0 bottom-0 z-[60] p-3 sm:p-5">
          <div className="mx-auto max-w-3xl rounded-lg border bg-card p-5 shadow-lift sm:p-6">
            <h2 id="cookie-title" className="text-lg font-bold text-navy">Datenschutz-Einstellungen</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Wir verwenden Cookies und ähnliche Technologien. Technisch notwendige Cookies sind für den Betrieb der Website erforderlich. Weitere Kategorien setzen wir nur mit Ihrer Einwilligung ein, die Sie jederzeit im Footer unter „Cookie-Einstellungen“ widerrufen können. Mehr in unserer{" "}
              <Link to="/datenschutz" className="text-steel underline">Datenschutzerklärung</Link>.
            </p>
            {showSettings && (
              <div className="mt-4 divide-y rounded-md border">
                <div className="flex items-start justify-between gap-4 p-4">
                  <div>
                    <p className="font-semibold">Notwendig</p>
                    <p className="text-sm text-muted-foreground">Erforderlich für Grundfunktionen wie Seitennavigation und das Speichern Ihrer Cookie-Auswahl.</p>
                  </div>
                  <Switch checked disabled aria-label="Notwendig (immer aktiv)" />
                </div>
                {CATEGORIES.map((c) => (
                  <div key={c.key} className="flex items-start justify-between gap-4 p-4">
                    <div>
                      <p className="font-semibold">{c.label}</p>
                      <p className="text-sm text-muted-foreground">{c.text}</p>
                    </div>
                    <Switch
                      checked={draft[c.key]}
                      onCheckedChange={(v) => setDraft((d) => ({ ...d, [c.key]: v }))}
                      aria-label={c.label}
                    />
                  </div>
                ))}
              </div>
            )}
            <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-end">
              {showSettings ? (
                <Button variant="outline" onClick={() => save(draft)}>Auswahl speichern</Button>
              ) : (
                <Button variant="outline" onClick={() => setShowSettings(true)}>Einstellungen</Button>
              )}
              <Button variant="secondary" onClick={() => save({ functional: false, statistics: false, marketing: false })}>
                Nur notwendige Cookies
              </Button>
              <Button onClick={() => save({ functional: true, statistics: true, marketing: true })}>Alle akzeptieren</Button>
            </div>
          </div>
        </div>
      )}
    </ConsentContext.Provider>
  );
}
