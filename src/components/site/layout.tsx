import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY, NAV } from "@/lib/site";
import { useConsent } from "./consent";
import logoDark from "@/assets/prs-logo.png";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Port Road Service GmbH – Startseite">
      <span className={`shrink-0 ${light ? "grid h-14 w-fit place-items-center rounded-md bg-white px-3 py-2" : ""}`}>
        <img
          src={logoDark}
          alt="PRS Firmenlogo"
          width={1315}
          height={870}
          className="h-10 w-auto"
        />
      </span>
      <span className="leading-tight">
        <span className={`block font-display text-base font-extrabold ${light ? "text-navy-foreground" : "text-navy"}`}>Port Road Service</span>
        <span className={`block text-[11px] uppercase tracking-[0.18em] ${light ? "text-navy-foreground/60" : "text-muted-foreground"}`}>Logistik · Fulfillment · Transport</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <div className="hidden bg-navy-deep text-navy-foreground/80 md:block">
        <div className="container-site flex h-9 items-center justify-between text-xs">
          <span className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> {COMPANY.street}, {COMPANY.zip} {COMPANY.city}</span>
          <div className="flex items-center gap-6">
            <a href={COMPANY.phoneHref} className="flex items-center gap-2 hover:text-navy-foreground"><Phone className="h-3.5 w-3.5" /> {COMPANY.phone}</a>
            <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 hover:text-navy-foreground"><Mail className="h-3.5 w-3.5" /> {COMPANY.email}</a>
          </div>
        </div>
      </div>
      <div className="container-site flex h-[72px] items-center justify-between gap-6">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-sm px-3 py-2 text-sm font-medium text-graphite transition-colors hover:text-navy"
              activeProps={{ className: "text-navy font-semibold" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button asChild variant="cta"><Link to="/kontakt">Anfrage stellen <ArrowRight /></Link></Button>
        </div>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menü öffnen" aria-expanded={open}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-t bg-background lg:hidden" aria-label="Mobile Navigation">
          <div className="container-site flex flex-col py-3">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="border-b py-3 font-medium text-graphite last:border-0">
                {n.label}
              </Link>
            ))}
            <Button asChild variant="cta" className="mt-3"><Link to="/kontakt" onClick={() => setOpen(false)}>Anfrage stellen</Link></Button>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  const { openSettings } = useConsent();
  const links = [
    { to: "/leistungen", label: "Leistungen" },
    { to: "/fulfillment", label: "Fulfillment" },
    { to: "/transport-spedition", label: "Transport & Spedition" },
    { to: "/unternehmen", label: "Unternehmen" },
    { to: "/kontakt", label: "Kontakt" },
  ] as const;
  return (
    <footer className="bg-navy-deep text-navy-foreground/75">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Logo light />
          <p className="mt-5 max-w-md text-sm leading-relaxed">
            Port Road Service GmbH ist Ihr Partner für Fulfillment, Versandabwicklung, Transport und Spedition aus Hamburg – mit klaren Prozessen, persönlicher Betreuung und Lösungen für Geschäftskunden.
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-navy-foreground">Navigation</h2>
          <ul className="space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.to}><Link to={l.to} className="hover:text-navy-foreground">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-navy-foreground">Kontakt</h2>
          <address className="space-y-2 text-sm not-italic">
            <p>{COMPANY.name}<br />{COMPANY.street}<br />{COMPANY.zip} {COMPANY.city}</p>
            <p><a href={COMPANY.phoneHref} className="hover:text-navy-foreground">{COMPANY.phone}</a></p>
            <p><a href={`mailto:${COMPANY.email}`} className="hover:text-navy-foreground">{COMPANY.email}</a></p>
          </address>
        </div>
      </div>
      <div className="border-t border-navy-foreground/10">
        <div className="container-site flex flex-col gap-3 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {COMPANY.name}. Alle Rechte vorbehalten.</p>
          <div className="flex gap-5">
            <Link to="/impressum" className="hover:text-navy-foreground">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-navy-foreground">Datenschutz</Link>
            <button onClick={openSettings} className="hover:text-navy-foreground">Cookie-Einstellungen</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, text, image, alt, children, tall = false }: {
  eyebrow: string; title: string; text: string; image: string; alt: string; children?: ReactNode; tall?: boolean;
}) {
  return (
    <section className={`relative isolate overflow-hidden bg-navy-deep ${tall ? "min-h-[640px]" : "min-h-[460px]"} flex items-center`}>
      <img src={image} alt={alt} className="absolute inset-0 -z-20 h-full w-full object-cover" width={1920} height={1088} />
      <div className="absolute inset-0 -z-10 bg-hero-overlay" />
      <div className="container-site py-20">
        <div className="max-w-2xl">
          <p className="eyebrow text-accent">{eyebrow}</p>
          <h1 className={`mt-4 font-extrabold text-navy-foreground ${tall ? "text-4xl sm:text-5xl lg:text-6xl" : "text-4xl sm:text-5xl"} leading-[1.05]`}>{title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-navy-foreground/80">{text}</p>
          {children && <div className="mt-9 flex flex-wrap gap-3">{children}</div>}
        </div>
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, text, center = false }: { eyebrow: string; title: string; text?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">{title}</h2>
      {text && <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{text}</p>}
    </div>
  );
}

export function CtaBand({ title = "Lassen Sie uns über Ihr Logistikprojekt sprechen", text = "Beschreiben Sie uns kurz Ihre Anforderungen – wir melden uns zeitnah mit einer Einschätzung und einem passenden Lösungsvorschlag." }: { title?: string; text?: string }) {
  return (
    <section className="bg-navy-gradient">
      <div className="container-site flex flex-col items-start justify-between gap-8 py-16 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold text-navy-foreground">{title}</h2>
          <p className="mt-3 text-navy-foreground/75">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="cta" size="xl"><Link to="/kontakt">Anfrage stellen <ArrowRight /></Link></Button>
          <Button asChild variant="heroOutline" size="xl"><a href={COMPANY.phoneHref}><Phone /> {COMPANY.phone}</a></Button>
        </div>
      </div>
    </section>
  );
}

export function ProcessFlow({ steps }: { steps: { title: string; text: string }[] }) {
  return (
    <ol className="grid gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((s, i) => (
        <li key={s.title} className="relative bg-card p-6">
          <span className="font-display text-4xl font-black text-steel/25">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="mt-3 text-lg font-bold text-navy">{s.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
          {i < steps.length - 1 && <ArrowRight className="absolute right-4 top-7 hidden h-5 w-5 text-accent lg:block" aria-hidden />}
        </li>
      ))}
    </ol>
  );
}

export function FeatureRow({ image, alt, eyebrow, title, children, reverse = false }: {
  image: string; alt: string; eyebrow: string; title: string; children: ReactNode; reverse?: boolean;
}) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className={reverse ? "lg:order-2" : ""}>
        <img src={image} alt={alt} loading="lazy" width={1280} height={960} className="aspect-[4/3] w-full rounded-lg object-cover shadow-lift" />
      </div>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-extrabold text-navy">{title}</h2>
        <div className="mt-5 space-y-4 leading-relaxed text-graphite">{children}</div>
      </div>
    </div>
  );
}
