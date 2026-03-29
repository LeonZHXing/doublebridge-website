import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
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
  { label: "AI Solutions", path: "/ai-solutions" },
  { label: "Careers", path: "/careers" },
  { label: "Contact Us", path: "/contact" },
  { label: "Connect", path: "/connect" },
  { label: "About", path: "/about" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 header-glass border-b transition-all duration-300 ${scrolled ? "border-border shadow-[var(--card-shadow)]" : "border-transparent"}`}>
      <div className="container flex items-center justify-between h-[var(--nav-height)]">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 rounded-sm bg-accent flex items-center justify-center">
            <span className="text-accent-foreground font-heading font-bold text-sm">DB</span>
          </div>
          <div className="leading-tight">
            <span className="font-heading font-bold text-lg text-foreground tracking-tight">DoubleBridge</span>
            <span className="block text-[9px] uppercase tracking-[0.25em] text-muted-foreground font-body font-medium">Technologies</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || location.pathname.startsWith(item.path + "/");
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`relative px-3 py-2 text-[13px] font-medium transition-colors flex items-center gap-1 ${
                    isActive ? "text-accent" : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3 h-3 opacity-50" />}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-accent"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                </Link>

                <AnimatePresence>
                  {item.children && openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 w-64 bg-card border border-border shadow-[var(--card-shadow-elevated)] rounded-sm py-1.5 mt-0.5"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-4 py-2.5 text-[13px] text-foreground/80 hover:bg-accent/5 hover:text-accent transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-flex px-5 py-2 bg-accent text-accent-foreground text-[13px] font-semibold rounded-sm hover:shadow-md hover:shadow-accent/15 transition-all duration-200"
        >
          Talk to Us
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-foreground"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-card border-t border-border"
          >
            <nav className="container py-4 flex flex-col gap-0.5">
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
                className="mt-3 px-5 py-2.5 bg-accent text-accent-foreground text-sm font-semibold rounded-sm text-center"
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
