import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Search, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  {
    label: "Services",
    path: "/services",
    children: [
      { label: "IT Services", path: "/services" },
      { label: "eCTD Submission Services", path: "/services" },
      { label: "Regulatory Information Management", path: "/services" },
      { label: "Data & Image Processing", path: "/services" },
    ],
  },
  {
    label: "Products",
    path: "/products",
    children: [
      { label: "ROSETTA eCTD Viewer", path: "/products/ectd-viewer" },
      { label: "ROSETTA GnosisVault", path: "/products/gnosisvault" },
      { label: "ROSETTA Scribe eCTD Publisher", path: "/products/scribe" },
      { label: "AperioTest.AI", path: "/products/aperiotest" },
    ],
  },
  {
    label: "AI Solutions",
    path: "/ai-solutions",
    children: [
      { label: "ROSETTA eCTD Viewer with AI-powered Q&A", path: "/ai-solutions" },
      { label: "ROSETTA Scribe - AI-assisted regulatory submission publishing", path: "/ai-solutions" },
      { label: "ROSETTA GnosisVault - AI-powered Q&A for regulatory teams", path: "/ai-solutions" },
    ],
  },
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "shadow-[var(--card-shadow)]" : ""}`}>

      {/* Main nav */}
      <div className="bg-card border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 rounded-sm bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-heading font-bold text-xs">DB</span>
            </div>
            <div className="leading-tight">
              <span className="font-heading font-bold text-[17px] text-foreground tracking-tight">DoubleBridge</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0">
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
                    className={`relative px-4 py-5 text-[14px] font-medium transition-colors flex items-center gap-1 border-b-2 ${
                      isActive
                        ? "text-accent border-accent"
                        : "text-foreground/70 hover:text-foreground border-transparent hover:border-accent/40"
                    }`}
                  >
                    {item.label}
                    {item.children && <ChevronDown className="w-3.5 h-3.5 opacity-50" />}
                  </Link>

                  <AnimatePresence>
                    {item.children && openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.12 }}
                        className="absolute top-full left-0 w-72 bg-card border border-border shadow-[var(--card-shadow-elevated)] rounded-sm py-2"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="flex items-center justify-between px-5 py-3 text-[14px] text-foreground/70 hover:bg-accent/5 hover:text-accent transition-colors group"
                          >
                            {child.label}
                            <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-accent text-accent-foreground text-[13px] font-semibold rounded-sm hover:shadow-md hover:shadow-accent/15 transition-all duration-200 flex items-center gap-2"
            >
              Talk to Us
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-card border-t border-border"
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
