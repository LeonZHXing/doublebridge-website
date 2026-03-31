import { usePageTitle } from "@/hooks/use-page-title";
import Layout from "@/components/Layout";
import { PageHero, SectionHeading } from "@/components/PageSections";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const services = [
  "Seamless project management for regulatory submissions across all stages",
  "Initial preparation, submission, and ongoing maintenance of INDs, NDAs, ANDAs, BLAs, and eDMFs",
  "Specialized country-specific submission composition, validation, and publishing for FDA and EMA",
  "Comprehensive formatting, editing, and hyperlink verification to ensure submission readiness",
  "Expert preparation and organization of submission documents and cross references",
  "Efficient preparation, publishing, and management of amendments and supplements",
  "End-to-end document authoring and translation services to support global compliance",
  "Secure and reliable submissions using our FDA-compliant company gateway",
  "Access to our intuitive, cloud-based software portal for streamlined and timely submissions",
  "Safe and compliant eCTD file storage and archival on our 21 CFR Part 11 secure servers",
];

export default function ECTDSubmission() {
  return (
    <Layout>
      <PageHero
        subtitle="Services"
        title="eCTD Submission Services"
        description="A full suite of eSubmission services tailored to meet your regulatory needs."
      />

      <section className="py-20 md:py-28" style={{ background: "var(--section-gradient)" }}>
        <div className="container">
          <SectionHeading
            title="Comprehensive eSubmission Services"
            subtitle="At DoubleBridge Technologies, we offer a full suite of eSubmission services tailored to meet your regulatory needs."
          />
          <div className="max-w-3xl mx-auto space-y-4">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-4 bg-card border border-border rounded-sm p-5 shadow-[var(--card-shadow)]"
              >
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p className="text-foreground font-body">{service}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
