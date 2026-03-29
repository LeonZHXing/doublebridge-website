import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-heading font-bold">DB</span>
              </div>
              <div className="leading-tight">
                <span className="font-heading font-bold text-lg">DoubleBridge</span>
                <span className="block text-[9px] uppercase tracking-[0.2em] opacity-70 font-body">Technologies</span>
              </div>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Established in 1997, providing global Life Sciences organizations with reliable business and technology solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Services", path: "/services" },
                { label: "Products", path: "/products" },
                { label: "AI Solutions", path: "/ai-solutions" },
                { label: "Careers", path: "/careers" },
                { label: "About", path: "/about" },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">Products</h4>
            <ul className="space-y-2.5">
              {[
                { label: "ROSETTA eCTD Viewer", path: "/products/ectd-viewer" },
                { label: "ROSETTA GnosisVault", path: "/products/gnosisvault" },
                { label: "ROSETTA Scribe", path: "/products/scribe" },
                { label: "AperioTest.AI", path: "/products/aperiotest" },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm opacity-70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>5 Independence Way, Suite 310<br />Princeton, NJ 08540, USA</span>
              </li>
              <li className="flex items-center gap-3 text-sm opacity-70">
                <Phone className="w-4 h-4 shrink-0" />
                <span>(609) 716-9001</span>
              </li>
              <li className="flex items-center gap-3 text-sm opacity-70">
                <Mail className="w-4 h-4 shrink-0" />
                <a href="mailto:info@doublebridge.com" className="hover:opacity-100 transition-opacity">info@doublebridge.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs opacity-50">© {new Date().getFullYear()} DoubleBridge Technologies, Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/company/392512" target="_blank" rel="noreferrer" className="text-xs opacity-50 hover:opacity-100 transition-opacity">LinkedIn</a>
            <a href="http://twitter.com/doublebridgetec" target="_blank" rel="noreferrer" className="text-xs opacity-50 hover:opacity-100 transition-opacity">Twitter</a>
            <a href="http://www.youtube.com/user/DoubleBridgeTec" target="_blank" rel="noreferrer" className="text-xs opacity-50 hover:opacity-100 transition-opacity">YouTube</a>
            <a href="http://www.facebook.com/home.php#!/pages/DoubleBridge-Technologies/193420894016078" target="_blank" rel="noreferrer" className="text-xs opacity-50 hover:opacity-100 transition-opacity">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
