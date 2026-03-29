import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      <div className="absolute inset-0 hero-mesh" />
      <div className="container relative py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-sm bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-heading font-bold text-xs">DB</span>
              </div>
              <div className="leading-tight">
                <span className="font-heading font-bold text-base text-primary-foreground">DoubleBridge</span>
                <span className="block text-[8px] uppercase tracking-[0.25em] text-primary-foreground/50 font-body font-medium">Technologies</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/60 leading-relaxed font-body">
              Established in 1997, providing global Life Sciences organizations with reliable business and technology solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body font-semibold text-xs uppercase tracking-[0.15em] text-primary-foreground/40 mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Services", path: "/services" },
                { label: "Products", path: "/products" },
                { label: "AI Solutions", path: "/ai-solutions" },
                { label: "Careers", path: "/careers" },
                { label: "About", path: "/about" },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors font-body">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-body font-semibold text-xs uppercase tracking-[0.15em] text-primary-foreground/40 mb-5">Products</h4>
            <ul className="space-y-2.5">
              {[
                { label: "ROSETTA eCTD Viewer", path: "/products/ectd-viewer" },
                { label: "ROSETTA GnosisVault", path: "/products/gnosisvault" },
                { label: "ROSETTA Scribe", path: "/products/scribe" },
                { label: "AperioTest.AI", path: "/products/aperiotest" },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors font-body">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body font-semibold text-xs uppercase tracking-[0.15em] text-primary-foreground/40 mb-5">Contact</h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/60">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary-foreground/40" />
                <span>5 Independence Way, Suite 310<br />Princeton, NJ 08540, USA</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/60">
                <Phone className="w-4 h-4 shrink-0 text-primary-foreground/40" />
                <span>(609) 716-9001</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/60">
                <Mail className="w-4 h-4 shrink-0 text-primary-foreground/40" />
                <a href="mailto:info@doublebridge.com" className="hover:text-primary-foreground transition-colors">info@doublebridge.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/35 font-body">© {new Date().getFullYear()} DoubleBridge Technologies, Inc. All rights reserved.</p>
          <div className="flex gap-5">
            {[
              { label: "LinkedIn", url: "https://www.linkedin.com/company/392512" },
              { label: "Twitter", url: "http://twitter.com/doublebridgetec" },
              { label: "YouTube", url: "http://www.youtube.com/user/DoubleBridgeTec" },
              { label: "Facebook", url: "http://www.facebook.com/home.php#!/pages/DoubleBridge-Technologies/193420894016078" },
            ].map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-primary-foreground/35 hover:text-primary-foreground/70 transition-colors font-body">
                {s.label}
                <ArrowUpRight className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
