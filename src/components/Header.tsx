import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", path: "/" },
  {
    label: "Services",
    path: "/services",
  },
  {
    label: "Products",
    path: "/products",
    children: [
      { label: "ROSETTA eCTD Viewer", path: "/products/ectd-viewer" },
      { label: "ROSETTA GnosisVault", path: "/products/gnosisvault" },
      { label: "ROSETTA Scribe", path: "/products/scribe" },
      { label: "AperioTest.AI", path: "/products/aperiotest" },
    ],
  },
  {
    label: "AI Solutions",
    path: "/ai-solutions",
  },
  { label: "Careers", path: "/careers" },
  { label: "Contact Us", path: "/contact" },
  { label: "Connect", path: "/connect" },
  { label: "About", path: "/about" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-[var(--nav-height)]">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-heading font-bold text-lg">DB</span>
          </div>
          <div className="leading-tight">
            <span className="font-heading font-bold text-lg text-foreground tracking-tight">DoubleBridge</span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-body">Technologies</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${
                  location.pathname === item.path || location.pathname.startsWith(item.path + "/")
                    ? "text-accent"
                    : "text-foreground hover:text-accent"
                }`}
              >
                {item.label}
                {item.children && <ChevronDown className="w-3.5 h-3.5" />}
              </Link>

              <AnimatePresence>
                {item.children && openDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 w-64 bg-card border border-border shadow-lg rounded-sm py-2"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block px-4 py-2.5 text-sm text-foreground hover:bg-secondary hover:text-accent transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-flex px-5 py-2.5 bg-accent text-accent-foreground text-sm font-medium rounded-sm hover:opacity-90 transition-opacity"
        >
          Talk to Us
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-foreground"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="lg:hidden overflow-hidden bg-card border-t border-border"
          >
            <nav className="container py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2.5 text-sm font-medium text-foreground hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                  {item.children?.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      onClick={() => setMobileOpen(false)}
                      className="block pl-8 py-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-5 py-2.5 bg-accent text-accent-foreground text-sm font-medium rounded-sm text-center"
              >
                Talk to Us
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
