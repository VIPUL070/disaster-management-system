import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  GraduationCap,
  Activity,
  Bell,
  BarChart3,
  Users,
  Brain,
  Shield,
  Rocket,
  Map,
  MessageSquare,
  Layers,
  Scan,
  Cloud,
  Database,
  Globe,
  AlarmClock,
} from "lucide-react";

export default function Index() {
  return (
    <div className="">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-emerald-100/30 dark:from-primary/10 dark:via-accent/10 dark:to-emerald-900/10" />
          <div className="absolute inset-0 bg-grid opacity-40 mask-faded" />
        </div>
        <div className="container py-20 md:py-28">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
                <Shield className="h-3.5 w-3.5 text-primary" />
                Safety. Education. Resilience.
              </div>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                Disaster Preparedness Education System
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                A comprehensive digital platform that trains students, teachers, and staff for disaster response through interactive learning, virtual simulations, and real-time emergency coordination.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#resources"><Button size="lg">Get Started</Button></a>
                <a href="#solution"><Button size="lg" variant="outline">Learn More</Button></a>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1"><Rocket className="h-4 w-4 text-accent" /> Rapid onboarding</span>
                <span className="inline-flex items-center gap-1"><AlarmClock className="h-4 w-4 text-amber-500" /> Real-time alerts</span>
                <span className="inline-flex items-center gap-1"><BarChart3 className="h-4 w-4 text-emerald-600" /> Measurable impact</span>
              </div>
            </div>
            <div className="relative">
              <div className="mx-auto w-full max-w-md rounded-xl border bg-card p-4 shadow-lg md:max-w-lg">
                <div className="grid grid-cols-2 gap-3">
                  <MiniStat icon={<GraduationCap className="h-4 w-4 text-primary" />} label="Interactive Learning" value="Modules" accent="primary" />
                  <MiniStat icon={<Scan className="h-4 w-4 text-amber-500" />} label="Virtual Drills" value="Simulations" accent="amber" />
                  <MiniStat icon={<Bell className="h-4 w-4 text-amber-600" />} label="Emergency Response" value="Alerts" accent="amber" />
                  <MiniStat icon={<BarChart3 className="h-4 w-4 text-emerald-600" />} label="Analytics" value="Dashboard" accent="emerald" />
                </div>
                <div className="mt-4 rounded-lg bg-muted p-4 text-sm text-muted-foreground">
                  Real-time coordination for schools across Punjab. Integrates Maps, CAP alerts, and LMS.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Solution */}
      <section id="solution" className="container py-16 md:py-24">
        <SectionHeader title="Core Solution" subtitle="End-to-end preparedness — from learning to response" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          <FeaturePill icon={<GraduationCap className="h-5 w-5" />} title="Interactive Learning" color="primary" />
          <FeaturePill icon={<Scan className="h-5 w-5" />} title="Virtual Drills" color="amber" />
          <FeaturePill icon={<Bell className="h-5 w-5" />} title="Emergency Response" color="amber" />
          <FeaturePill icon={<BarChart3 className="h-5 w-5" />} title="Analytics Dashboard" color="emerald" />
          <FeaturePill icon={<Users className="h-5 w-5" />} title="Community Integration" color="primary" />
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="relative py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="container">
          <SectionHeader title="Key Features" subtitle="Built for schools, optimized for outcomes" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard title="Gamified learning modules" icon={<Brain className="h-5 w-5 text-primary" />}>
              Master disaster concepts with quizzes, badges, and progress tracking.
            </FeatureCard>
            <FeatureCard title="School-specific evacuation simulations" icon={<Map className="h-5 w-5 text-emerald-600" />}>
              Custom drills using your campus layout with safe assembly points.
            </FeatureCard>
            <FeatureCard title="Real-time alerts & parent notifications" icon={<Bell className="h-5 w-5 text-amber-600" />}>
              CAP-based alerts with SMS, WhatsApp, and push notifications.
            </FeatureCard>
            <FeatureCard title="Performance tracking dashboard" icon={<BarChart3 className="h-5 w-5 text-primary" />}>
              Drill metrics, response times, and readiness scores for administrators.
            </FeatureCard>
            <FeatureCard title="Parent & community engagement" icon={<Users className="h-5 w-5 text-emerald-600" />}>
              Send guides, resources, and training invites to families and local bodies.
            </FeatureCard>
            <FeatureCard title="Role-based access & audits" icon={<Shield className="h-5 w-5 text-primary" />}>
              Secure roles for teachers, students, staff, and district authorities.
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* Target Impact */}
      <section id="impact" className="container py-16 md:py-24">
        <SectionHeader title="Target Impact" subtitle="Measurable outcomes across Punjab schools" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ImpactTile label="Faster emergency response times" value="30%+" note="reduction in average response" />
          <ImpactTile label="Reduced panic during disasters" value="-40%" note="reported panic incidents" />
          <ImpactTile label="Standardized preparedness across schools" value="100%" note="district-wide coverage" />
          <ImpactTile label="Community-wide disaster resilience" value="↑" note="stronger engagement & drills" />
        </div>
      </section>

      {/* Resources & References */}
      <section id="resources" className="relative py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background via-emerald-50/60 dark:via-emerald-900/10 to-background" />
        <div className="container">
          <SectionHeader title="Resources & References" subtitle="Guidelines, curricula, and integration resources" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ResourceCard href="https://ndma.gov.in" title="NDMA" subtitle="National Disaster Management Authority" />
            <ResourceCard href="https://education.gov.in" title="MoE" subtitle="Ministry of Education" />
            <ResourceCard href="https://psdma.punjab.gov.in/" title="PSDMS" subtitle="Punjab State Disaster Management Authority" />
            <ResourceCard href="https://www.cbse.gov.in/" title="CBSE" subtitle="Curriculum & safety" />
            <ResourceCard href="https://www.unesco.org/en" title="UNESCO" subtitle="Global education guidelines" />
            <ResourceCard href="https://www.ready.gov/" title="Ready.gov" subtitle="Preparedness resources" />
          </div>
          <h4 className="mt-12 text-sm font-semibold text-muted-foreground">APIs & Integrations</h4>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Google Maps",
              "Firebase",
              "Twilio",
              "WhatsApp",
              "Moodle",
              "Microsoft Teams",
            ].map((label) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs"
              >
                <Dot /> {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Integration */}
      <section id="integrations" className="container py-16 md:py-24">
        <SectionHeader title="Technical Integration" subtitle="How systems connect for end-to-end preparedness" />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <IntegrationsGroup title="Emergency Alert System" items={["CAP Feeds", "Firebase Cloud Messaging"]} icon={<Bell className="h-5 w-5 text-amber-600" />} />
          <IntegrationsGroup title="Mapping & Location Services" items={["Google Maps", "OpenStreetMap"]} icon={<Map className="h-5 w-5 text-primary" />} />
          <IntegrationsGroup title="Communication Systems" items={["Twilio SMS", "WhatsApp Business API"]} icon={<MessageSquare className="h-5 w-5 text-emerald-600" />} />
          <IntegrationsGroup title="Learning Management Systems" items={["Moodle", "Google Classroom", "Microsoft Teams"]} icon={<GraduationCap className="h-5 w-5 text-primary" />} />
          <IntegrationsGroup title="Simulation Tools" items={["HAZUS", "InaSAFE", "DisasterAWARE"]} icon={<Layers className="h-5 w-5 text-amber-600" />} />
          <IntegrationsGroup title="Data Sources" items={["IMD", "Geological Survey", "Central Water Commission"]} icon={<Database className="h-5 w-5 text-primary" />} />
        </div>
      </section>

      {/* Compliance & Standards */}
      <section id="compliance" className="relative py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="container">
          <SectionHeader title="Compliance & Standards" subtitle="Aligned with national and international frameworks" />
          <div className="mt-8 flex flex-wrap gap-3">
            {["ISO 22320", "NDMA School Safety Guidelines 2016", "RTE Act safety measures"].map((label) => (
              <span key={label} className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs">
                <Shield className="h-4 w-4 text-primary" /> {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Tech */}
      <section id="tech" className="container py-16 md:py-24">
        <SectionHeader title="Open Source Tech" subtitle="Built on a robust, scalable stack" />
        <div className="mt-8 flex flex-wrap gap-2">
          {[
            "React",
            "Flutter",
            "Node.js",
            "Django",
            "Socket.io",
            "Leaflet.js",
            "Chart.js",
          ].map((label) => (
            <span key={label} className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs">
              <Dot /> {label}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}

function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
      {subtitle ? (
        <p className="mt-2 text-muted-foreground">{subtitle}</p>
      ) : null}
    </div>
  );
}

function FeaturePill({ icon, title, color = "primary" }: { icon: React.ReactNode; title: string; color?: "primary" | "emerald" | "amber" }) {
  const colorClass =
    color === "emerald"
      ? "text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20"
      : color === "amber"
      ? "text-amber-600 bg-amber-50 dark:bg-amber-900/20"
      : "text-primary bg-primary/10";
  return (
    <div className={"flex items-center gap-3 rounded-xl border p-4 " + colorClass}>
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-background">
        {icon}
      </span>
      <span className="font-medium">{title}</span>
    </div>
  );
}

function FeatureCard({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <Card>
      <CardHeader className="flex-row items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-muted">{icon}</span>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0 text-sm text-muted-foreground">{children}</CardContent>
    </Card>
  );
}

function ImpactTile({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <div className="rounded-xl border bg-card p-6">
      <div className="text-3xl font-extrabold tracking-tight">{value}</div>
      <div className="mt-2 text-sm font-medium">{label}</div>
      {note ? <div className="text-xs text-muted-foreground">{note}</div> : null}
    </div>
  );
}

function ResourceCard({ href, title, subtitle }: { href: string; title: string; subtitle?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-xl border bg-card p-5 transition hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary font-bold">
          {title.slice(0, 3)}
        </span>
        <div>
          <div className="font-medium">{title}</div>
          {subtitle ? (
            <div className="text-xs text-muted-foreground group-hover:text-foreground">{subtitle}</div>
          ) : null}
        </div>
      </div>
    </a>
  );
}

function IntegrationsGroup({ title, items, icon }: { title: string; items: string[]; icon?: React.ReactNode }) {
  return (
    <div className="relative rounded-xl border bg-card p-6">
      <div className="mb-3 flex items-center gap-2">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-muted">{icon ?? <Cloud className="h-5 w-5" />}</span>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <ul className="space-y-2 text-sm">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-muted-foreground">
            <Dot /> {item}
          </li>
        ))}
      </ul>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-border" />
    </div>
  );
}

function Dot() {
  return <span className="inline-block h-1.5 w-1.5 rounded-full bg-foreground/50" />;
}

function MiniStat({ icon, label, value, accent = "primary" }: { icon: React.ReactNode; label: string; value: string; accent?: "primary" | "amber" | "emerald" }) {
  const ring = accent === "amber" ? "ring-amber-300" : accent === "emerald" ? "ring-emerald-300" : "ring-primary/30";
  return (
    <div className={"rounded-lg border bg-card p-3 ring-1 " + ring}>
      <div className="flex items-center gap-3">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-muted">
          {icon}
        </span>
        <div>
          <div className="text-xs text-muted-foreground">{label}</div>
          <div className="text-sm font-medium">{value}</div>
        </div>
      </div>
    </div>
  );
}
