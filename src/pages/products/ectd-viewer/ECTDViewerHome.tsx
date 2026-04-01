import { usePageTitle } from "@/hooks/use-page-title";
import ECTDViewerLayout from "@/components/ECTDViewerLayout";
import { PageHero } from "@/components/PageSections";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Monitor, Globe, Archive } from "lucide-react";

const products = [
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "eCTD Viewer Desktop Edition",
    subtitle: "The most trusted eCTD Viewer since 2004.",
    description:
      "A user-friendly app for Windows and macOS, ready to install and run in seconds.",
    link: "/products/ectd-viewer/desktop",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "eCTD Viewer Enterprise Edition",
    subtitle: "High Performance Web Based eCTD Viewing Solution",
    description:
      "Server-side accelerators handle large eCTD submissions (1000+ sequences) with ease.",
    link: "/products/ectd-viewer/enterprise",
  },
  {
    icon: <Archive className="w-8 h-8" />,
    title: "RADARS",
    subtitle: "Regulatory Affairs Document Archive and Retrieval System",
    description:
      "Archive and track regulatory submissions (eCTD and non-eCTD) and correspondence from health authorities in a single system.",
    link: "/products/ectd-viewer/radars",
  },
];

export default function ECTDViewerHome() {
  usePageTitle("ROSETTA Regulatory Software — eCTD and Beyond");

  return (
    <ECTDViewerLayout>
      <PageHero
        subtitle="ROSETTA"
        title="Regulatory Software — eCTD and Beyond"
        description="The industry-leading suite of eCTD viewing, enterprise archival, and regulatory document management tools — trusted by global life sciences organizations since 2004."
      />

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="group relative bg-card border border-border p-8 rounded-sm shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-all duration-300 hover:border-accent/20 flex flex-col"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="w-12 h-12 bg-accent/10 text-accent flex items-center justify-center rounded-sm mb-5">
                  {product.icon}
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2 group-hover:text-accent transition-colors">
                  {product.title}
                </h3>
                <p className="text-sm font-semibold text-muted-foreground mb-2">
                  {product.subtitle}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed font-body flex-1">
                  {product.description}
                </p>
                <Link
                  to={product.link}
                  className="inline-flex items-center gap-1.5 mt-5 text-accent text-sm font-medium hover:gap-2.5 transition-all font-body"
                >
                  Learn More
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </ECTDViewerLayout>
  );
}
