import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, ArrowUpRight, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.jpg";

const navItems = [
  {
    label: "Services",
    path: "/services",
    children: [
      { label: "IT Services", path: "/services/it-services" },
      { label: "eCTD Submission Services", path: "/services/ectd-submission" },
      { label: "Regulatory Information Management", path: "/services/regulatory-information-management" },
      { label: "Data & Image Processing", path: "/services/data-image-processing" },
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
      { label: "ROSETTA eCTD Viewer with AI-powered Q&A", path: "/ai-solutions/ectd-viewer-ai" },
      { label: "ROSETTA Scribe - AI-assisted publishing", path: "/ai-solutions/scribe-ai" },
      { label: "ROSETTA GnosisVault - AI-powered Q&A", path: "/ai-solutions/gnosisvault-ai" },
    ],
  },
  { label: "Careers", path: "/careers" },
  { label: "About", path: "/about" },
];

const utilityLinks = [
  { label: "About", path: "/about" },
  { label: "Careers", path: "/careers" },
  { label: "Contact", path: "/contact" },
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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${scrolled ? "shadow-md" : ""}`}>

      {/* Main navigation bar */}
      <div className="bg-card border-b border-border">
        <div className="container flex items-center h-[72px]">
          {/* Logo - large, prominent */}
          <Link to="/" className="flex items-center shrink-0 mr-10 group">
            <img
              src={logo}
              alt="DoubleBridge Technologies"
              className="h-[52px] w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop nav - Gartner style with vertical separators */}
          <nav className="hidden md:flex items-center flex-1 h-full">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path || location.pathname.startsWith(item.path + "/");
              return (
                <div
                  key={item.label}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {/* Left vertical separator (skip first item) */}
                  {index > 0 && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-5 bg-border" />
                  )}
                  <Link
                    to={item.path}
                    className="relative px-5 h-full flex items-center gap-1.5 text-[15px] font-medium transition-colors duration-200 group"
                  >
                    {/* Left hover bar */}
                    <span className={`absolute left-1 top-1/2 -translate-y-1/2 w-[2.5px] rounded-full bg-accent transition-all duration-200 ease-out ${
                      isActive ? "h-5 opacity-100" : "h-0 opacity-0 group-hover:h-5 group-hover:opacity-100"
                    }`} />
                    {/* Right hover bar */}
                    <span className={`absolute right-1 top-1/2 -translate-y-1/2 w-[2.5px] rounded-full bg-accent transition-all duration-200 ease-out ${
                      isActive ? "h-5 opacity-100" : "h-0 opacity-0 group-hover:h-5 group-hover:opacity-100"
                    }`} />
                    <span className={`transition-colors duration-200 ${
                      isActive ? "text-accent" : "text-foreground/75 group-hover:text-foreground"
                    }`}>
                      {item.label}
                    </span>
                    {item.children && (
                      <ChevronDown className={`w-3.5 h-3.5 transition-all duration-200 ${
                        openDropdown === item.label ? "rotate-180 text-accent" : "text-foreground/40 group-hover:text-foreground/60"
                      }`} />
                    )}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute top-full left-0 min-w-[22rem] bg-card border border-border shadow-lg shadow-foreground/5 py-2"
                      >
                        <div className="absolute top-0 left-0 right-0 h-[3px] bg-accent" />
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="relative flex items-center justify-between px-6 py-3.5 text-[14px] text-foreground/70 hover:text-accent hover:bg-accent/[0.03] transition-all duration-150 group/item"
                          >
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0 bg-accent transition-all duration-200 group-hover/item:h-5" />
                            <span>{child.label}</span>
                            <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* CTA - far right, Gartner style rounded button */}
          <div className="hidden md:flex items-center ml-auto shrink-0">
            <Link
              to="/contact"
              className="px-7 py-3 bg-primary text-primary-foreground text-[14px] font-semibold rounded-full hover:bg-primary/90 transition-all duration-200 flex items-center gap-2 group shadow-sm hover:shadow-md"
            >
              Talk to Us
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-foreground ml-auto"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile nav - full screen overlay style */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden bg-card border-t border-border shadow-lg max-h-[80vh] overflow-y-auto"
          >
            <nav className="container py-6 flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-3 text-[15px] font-semibold text-foreground hover:text-accent transition-colors"
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
              <div className="mt-4 pt-4 border-t border-border">
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-full text-center"
                >
                  Talk to Us
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
