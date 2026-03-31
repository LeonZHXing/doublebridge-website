import { usePageTitle } from "@/hooks/use-page-title";
import Layout from "@/components/Layout";
import { PageHero } from "@/components/PageSections";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Monitor, Database, FileText, Cpu } from "lucide-react";

const products = [
  {
    title: "ROSETTA eCTD Viewer",
    path: "/products/ectd-viewer",
    icon: <Monitor className="w-7 h-7" />,
    description:
      "Feature-rich, easy to use eCTD viewer for submissions and dossiers prepared in Electronic Common Technical Document (eCTD) format. Supports the latest and all previous ICH and regional eCTD specifications since 2004. eCTD v4.0 support is now available for pilot testing.",
    highlights: ["Easy to Use", "Fast Loading", "Fully Compliant", "Free Trial Available"],
  },
  {
    title: "ROSETTA GnosisVault",
    path: "/products/gnosisvault",
    icon: <Database className="w-7 h-7" />,
    description:
      "Advanced document vault for Life Sciences regulatory content management. Secure storage and retrieval of critical regulatory documents with full audit trail and compliance capabilities.",
    highlights: ["Secure Storage", "Audit Trail", "Regulatory Compliance", "Life Sciences Focus"],
  },
  {
    title: "ROSETTA Scribe eCTD Publisher",
    path: "/products/scribe",
    icon: <FileText className="w-7 h-7" />,
    description:
      "AI-assisted regulatory submission publishing. Compliant by design, ready for eCTD v4.0. Features smart authoring, automated compiling, and one-click publishing capabilities.",
    highlights: ["AI-Assisted", "eCTD v4.0 Ready", "Smart Authoring", "One-click Publishing"],
  },
  {
    title: "AperioTest.AI",
    path: "/products/aperiotest",
    icon: <Cpu className="w-7 h-7" />,
    description:
      "An AI-assisted solution that generates test cases from system requirements, ready for human review and approval within minutes. Purpose-built for GxP, 21 CFR Part 11, and IEC 62304 compliance.",
    highlights: ["AI Test Generation", "GxP Compliant", "21 CFR Part 11", "IEC 62304"],
  },
];

export default function Products() {
  usePageTitle("Products");
  return (
    <Layout>
      <PageHero
        subtitle="Products"
        title="Industry-Leading Regulatory Solutions"
        description="Purpose-built tools for regulatory submissions, document management, and AI-powered validation for the Life Sciences industry."
      />

      <section className="py-20 md:py-28">
        <div className="container space-y-8">
          {products.map((product, i) => (
            <motion.div
              key={product.path}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                to={product.path}
                className="group block bg-card border border-border rounded-sm p-8 md:p-10 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] hover:border-accent/30 transition-all"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                  <div className="w-16 h-16 bg-accent/10 text-accent flex items-center justify-center rounded-sm shrink-0">
                    {product.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-heading font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {product.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed font-body mb-5">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {product.highlights.map((h) => (
                        <span
                          key={h}
                          className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-sm font-body"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-accent text-sm font-medium font-body">
                      View Details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
