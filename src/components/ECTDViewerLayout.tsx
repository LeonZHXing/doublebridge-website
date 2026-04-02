import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";

const subNavItems = [
  { label: "Home", path: "/products/ectd-viewer" },
  {
    label: "Desktop Edition",
    path: "/products/ectd-viewer/desktop",
    children: [
      { label: "Free Trial", path: "/products/ectd-viewer/desktop" },
      { label: "Features", path: "/products/ectd-viewer/features" },
      { label: "Download", path: "/products/ectd-viewer/download" },
      { label: "Pricing", path: "/products/ectd-viewer/pricing" },
    ],
  },
  { label: "Enterprise Edition", path: "/products/ectd-viewer/enterprise" },
  { label: "RADARS", path: "/products/ectd-viewer/radars" },
];

export default function ECTDViewerLayout({ children }: { children: ReactNode }) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main DoubleBridge header - always visible */}
      <Header />

      {/* Secondary eCTD Viewer sub-navigation bar */}
      <div className="fixed top-[108px] left-0 right-0 z-40 bg-muted/80 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center h-11">
          {/* Product label */}
          <span className="text-[13px] font-semibold text-accent mr-6 shrink-0 hidden md:block">
            ROSETTA eCTD Viewer
          </span>

          {/* Desktop sub-nav */}
          <nav className="hidden md:flex items-center gap-0 flex-1">
            {subNavItems.map((item) => {
              const isActive =
                location.pathname === item.path ||
                (item.children && item.children.some((c) => location.pathname === c.path));
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`px-3 py-3 text-[13px] font-medium transition-colors flex items-center gap-1 border-b-2 ${
                      isActive
                        ? "text-accent border-accent"
                        : "text-foreground/60 hover:text-foreground border-transparent hover:border-accent/30"
                    }`}
                  >
                    {item.label}
                    {item.children && <ChevronDown className="w-3 h-3 opacity-50" />}
                  </Link>

                  <AnimatePresence>
                    {item.children && openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.12 }}
                        className="absolute top-full left-0 min-w-[14rem] bg-card border border-border shadow-[var(--card-shadow-elevated)] rounded-sm py-1.5 z-50"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="flex items-center justify-between px-4 py-2.5 text-[13px] text-foreground/70 hover:bg-accent/5 hover:text-accent transition-colors group"
                          >
                            {child.label}
                            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* Back to main site link */}
          <Link
            to="/products"
            className="hidden md:flex items-center gap-1 text-[12px] text-muted-foreground hover:text-foreground transition-colors ml-auto"
          >
            ← All Products
          </Link>

          {/* Mobile sub-nav toggle */}
          <button
            onClick={() => setMobileSubOpen(!mobileSubOpen)}
            className="md:hidden flex items-center gap-2 text-sm font-medium text-foreground ml-auto"
          >
            <span className="text-accent text-[13px] font-semibold">eCTD Viewer</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubOpen ? "rotate-180" : ""}`} />
          </button>
        </div>

        {/* Mobile sub-nav dropdown */}
        <AnimatePresence>
          {mobileSubOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden bg-card border-t border-border"
            >
              <nav className="container py-3 flex flex-col gap-0.5">
                {subNavItems.map((item) => (
                  <div key={item.label}>
                    <Link
                      to={item.path}
                      onClick={() => setMobileSubOpen(false)}
                      className="block px-3 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
                    >
                      {item.label}
                    </Link>
                    {item.children?.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        onClick={() => setMobileSubOpen(false)}
                        className="block pl-8 py-1.5 text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ))}
                <Link
                  to="/products"
                  onClick={() => setMobileSubOpen(false)}
                  className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  ← All Products
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content: offset for main header (80px) + sub-nav (44px) = 124px */}
      <main className="flex-1 pt-[124px]">{children}</main>
      <Footer />
    </div>
  );
}
