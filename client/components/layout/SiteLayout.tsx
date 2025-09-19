import { Link, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Shield, BookOpen, Activity, Map, Bell, Users, Linkedin, Twitter, Facebook, Mail } from "lucide-react";

export default function SiteLayout() {
  const navItems = [
    { href: "#solution", label: "Solution" },
    { href: "#features", label: "Features" },
    { href: "#impact", label: "Impact" },
    { href: "#resources", label: "Resources" },
    { href: "#integrations", label: "Integrations" },
    { href: "#compliance", label: "Compliance" },
    { href: "#tech", label: "Open Source" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary">
              <Shield className="h-5 w-5" />
            </span>
            <span className="hidden sm:inline">Disaster Preparedness Education System</span>
            <span className="sm:hidden">DPES</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href="#resources">
              <Button size="sm" variant="outline">Get Started</Button>
            </a>
            <a href="#solution">
              <Button size="sm">Learn More</Button>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer id="contact" className="border-t bg-card/50">
        <div className="container py-10 grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-semibold">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Shield className="h-5 w-5" />
              </span>
              DPES
            </div>
            <p className="mt-3 text-sm text-muted-foreground max-w-sm">
              A modern platform for training students, teachers, and staff for effective disaster response.
            </p>
            <div className="mt-4 flex items-center gap-3 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <a href="mailto:contact@example.com" className="hover:text-foreground">contact@example.com</a>
            </div>
            <div className="mt-2 flex items-center gap-3 text-muted-foreground">
              <PhoneIcon className="h-4 w-4" />
              <a href="tel:+910000000000" className="hover:text-foreground">+91 00000 00000</a>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a className="hover:text-foreground" href="#resources">Resources</a></li>
              <li><a className="hover:text-foreground" href="#integrations">Technical Integrations</a></li>
              <li><a className="hover:text-foreground" href="#compliance">Compliance & Standards</a></li>
              <li><a className="hover:text-foreground" href="#impact">Target Impact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">At a Glance</h4>
            <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><BookOpen className="h-4 w-4" /> Learning</li>
              <li className="flex items-center gap-2"><Activity className="h-4 w-4" /> Response</li>
              <li className="flex items-center gap-2"><Map className="h-4 w-4" /> Mapping</li>
              <li className="flex items-center gap-2"><Bell className="h-4 w-4" /> Alerts</li>
              <li className="flex items-center gap-2"><Users className="h-4 w-4" /> Community</li>
            </ul>
          </div>
        </div>
        <div className="border-t">
          <div className="container py-4 text-xs text-muted-foreground flex items-center justify-between">
            <p>© {new Date().getFullYear()} DPES. All rights reserved.</p>
            <p className="hidden sm:block">Built with performance, accessibility, and resilience in mind.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.09 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.81.3 1.6.54 2.34a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.74-1.11a2 2 0 0 1 2.11-.45c.74.24 1.53.42 2.34.54A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
