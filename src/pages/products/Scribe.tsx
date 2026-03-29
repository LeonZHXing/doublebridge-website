import Layout from "@/components/Layout";
import { PageHero, SectionHeading } from "@/components/PageSections";
import { motion } from "framer-motion";
import { FileText, Cpu, CheckCircle, Layers } from "lucide-react";

const authoringFeatures = [
  {
    title: "Microsoft Word Add-In",
    desc: "Integrates seamlessly into Word, allowing users to draft, review, and finalize documents within their existing environment. No need to switch platforms — familiar tools, smarter workflow.",
  },
  {
    title: "Built-In Authoring & Formatting Controls",
    desc: "Applies standardized formats and structure rules automatically to ensure consistency and compliance. Reduces formatting errors and maintains a professional, submission-ready layout.",
  },
  {
    title: "AI-Assisted Content Generation",
    desc: "Generates draft content, summaries, and structured templates based on submission type and context. Speeds up writing and reduces the manual burden on regulatory authors.",
  },
  {
    title: "Human-in-the-Loop Oversight",
    desc: "Allows regulatory professionals to review, edit, and approve AI-generated content before publishing. Maintains human judgment and control, with AI boosting speed and accuracy.",
  },
];

const compilingFeatures = [
  {
    title: "Auto-Match Files to eCTD Table of Contents Structure",
    desc: "Automatically places ready documents into the correct nodes of the eCTD structure. Simplifies mapping and reduces manual misplacement.",
  },
  {
    title: "Metadata, CoU, and Keyword Automation",
    desc: "Automatically extracts and fills required metadata fields, captures and maintains keywords, and creates necessary CoUs, based on file names or content.",
  },
  {
    title: "Real-Time Compiling Dashboard",
    desc: "Visualizes document status, Key Word readiness, and submission structure as you build. Provides instant visibility and ensures nothing gets missed.",
  },
];

const managementFeatures = [
  {
    title: "Configured Templates for Different Submission Types",
    desc: "Provides compliant templates tailored to IND, NDA, ANDA, and more. Standardizes document structure and content based on ICH and regional specifications.",
  },
  {
    title: "Scheduled Publishing Tasks",
    desc: "Automate recurring submissions such as Annual Reports with scheduled publishing workflows.",
  },
];

export default function Scribe() {
  return (
    <Layout>
      <PageHero
        subtitle="Product"
        title="ROSETTA Scribe eCTD Publisher"
        description="AI-Assisted Regulatory Submission Publishing. Compliant by Design, Ready for eCTD v4.0."
      />

      {/* Key Features Banner */}
      <section className="py-10 bg-secondary">
        <div className="container flex flex-wrap justify-center gap-8">
          {[
            { icon: <FileText className="w-5 h-5" />, label: "Smart Authoring" },
            { icon: <Cpu className="w-5 h-5" />, label: "Automated Compiling" },
            { icon: <CheckCircle className="w-5 h-5" />, label: "One-click Publishing" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-foreground font-body font-medium text-sm">
              <span className="text-accent">{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>
      </section>

      {/* Authoring & Formatting */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading title="Authoring & Formatting" centered={false} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {authoringFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card border border-border rounded-sm p-7 shadow-[var(--card-shadow)]"
              >
                <h3 className="font-heading font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compiling & Publishing */}
      <section className="py-20 md:py-28" style={{ background: "var(--section-gradient)" }}>
        <div className="container">
          <SectionHeading title="Compiling & Publishing" centered={false} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {compilingFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card border border-border rounded-sm p-7 shadow-[var(--card-shadow)]"
              >
                <h3 className="font-heading font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Submission Management */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading title="Submission Management" centered={false} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {managementFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card border border-border rounded-sm p-7 shadow-[var(--card-shadow)]"
              >
                <h3 className="font-heading font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container text-center max-w-2xl">
          <h2 className="text-3xl font-heading font-bold mb-4">Experience ROSETTA Scribe</h2>
          <p className="text-primary-foreground/80 font-body mb-6">
            See how AI-assisted publishing can transform your regulatory submission process.
          </p>
          <a
            href="mailto:sales@doublebridge.com"
            className="inline-flex items-center gap-2 px-7 py-3 bg-accent text-accent-foreground text-sm font-medium rounded-sm hover:opacity-90 transition-opacity font-body"
          >
            Request a Demo
          </a>
        </div>
      </section>
    </Layout>
  );
}
