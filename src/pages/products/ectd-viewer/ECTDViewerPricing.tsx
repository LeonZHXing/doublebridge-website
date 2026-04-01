import { usePageTitle } from "@/hooks/use-page-title";
import ECTDViewerLayout from "@/components/ECTDViewerLayout";
import { PageHero } from "@/components/PageSections";
import { motion } from "framer-motion";
import { Check, Heart } from "lucide-react";

export default function ECTDViewerPricing() {
  usePageTitle("ROSETTA eCTD Viewer Pricing");

  return (
    <ECTDViewerLayout>
      <PageHero
        subtitle="Pricing"
        title="ROSETTA eCTD Viewer Desktop Edition Pricing"
        description="Simple, transparent pricing with volume discounts available."
      />

      <section className="py-20 md:py-28">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-sm p-10 shadow-[var(--card-shadow)] text-center"
          >
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4 font-body">
              Annual License
            </h3>
            <div className="flex items-baseline justify-center gap-1 mb-2">
              <span className="text-5xl font-heading font-bold text-foreground">
                $599
              </span>
            </div>
            <p className="text-muted-foreground font-body mb-8">
              per user per device · yearly renewal
            </p>

            <div className="text-left max-w-sm mx-auto space-y-3 mb-8">
              {[
                "Technical support included",
                "Software upgrades included",
                "No additional charges during license term",
                "Volume discounts available",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-sm text-foreground font-body"
                >
                  <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <a
              href="mailto:rosetta@doublebridge.com"
              className="inline-flex items-center gap-2 px-7 py-3 bg-accent text-accent-foreground text-sm font-medium rounded-sm hover:opacity-90 transition-opacity font-body"
            >
              Contact Us for a Quote
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-12 bg-accent/5 border border-accent/20 rounded-sm p-8 text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <Heart className="w-5 h-5 text-accent" />
              <h3 className="font-heading font-bold text-lg text-foreground">
                Educational & Not-for-Profit Organizations
              </h3>
            </div>
            <p className="text-sm text-muted-foreground font-body mb-4 max-w-lg mx-auto">
              <a
                href="mailto:rosetta@doublebridge.com"
                className="text-accent underline font-semibold"
              >
                Contact Us
              </a>{" "}
              to see whether your organization qualifies for a free production
              license.
            </p>
            <p className="text-xs text-muted-foreground font-body">
              Organizations that have benefited from this program include:
              Seattle Children's Research Institute, RTI International, Parker
              Institute for Cancer Immunotherapy, AFSSA French Food Safety
              Agency, Médecins Sans Frontières, and more.
            </p>
          </motion.div>
        </div>
      </section>
    </ECTDViewerLayout>
  );
}
