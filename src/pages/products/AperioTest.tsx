import { usePageTitle } from "@/hooks/use-page-title";
import { PageHero, SectionHeading } from "@/components/PageSections";
import { motion } from "framer-motion";
import { Cpu, Import, Search, Pencil, Download, TrendingDown, Shield, Zap, FileCheck } from "lucide-react";

const poweredFeatures = [
  {
    title: "AI Test Case Generation",
    desc: "Trained on thousands of real validation cases, our AI understands regulated environments and generates high-coverage test cases automatically.",
  },
  {
    title: "Smart Strategy Selection",
    desc: "Choose default, single, or separate strategies to match your project's validation goals.",
  },
  {
    title: "Traceability Built-In",
    desc: "Automatically links test cases to requirements for full audit readiness.",
  },
  {
    title: "Validation-Ready Documents",
    desc: "Export compliant test protocols, traceability matrices, and documentation directly.",
  },
];

const howItWorks = [
  { icon: <Import className="w-5 h-5" />, title: "Import Requirements", desc: "From DOORS, Jira, spreadsheets or any existing system." },
  { icon: <Search className="w-5 h-5" />, title: "Analyze with AI", desc: "Instantly generate test cases with contextual prompts." },
  { icon: <Pencil className="w-5 h-5" />, title: "Review & Refine", desc: "Customize and optimize test coverage." },
  { icon: <Download className="w-5 h-5" />, title: "Export & Submit", desc: "Get submission-ready documents with full traceability." },
];

const whyItMatters = [
  { icon: <TrendingDown className="w-5 h-5" />, title: "Reduce Effort", desc: "Cut test creation by up to 50%." },
  { icon: <Shield className="w-5 h-5" />, title: "Ensure Compliance", desc: "Built for FDA, CE, GxP, IEC 62304." },
  { icon: <Zap className="w-5 h-5" />, title: "Accelerate Timelines", desc: "Move faster from requirements to validated tests." },
  { icon: <FileCheck className="w-5 h-5" />, title: "Audit-Ready", desc: "Full traceability from the start." },
];

export default function AperioTest() {
  usePageTitle("AperioTest.AI");
  return (
    <>
      <PageHero
        subtitle="Product"
        title="AperioTest.AI"
        description="Revolutionize your validation process with AI-assisted test generation for Life Sciences. Purpose-built for GxP, 21 CFR Part 11, and IEC 62304 compliance."
      />

      {/* What It Is */}
      <section className="py-20 md:py-28" style={{ background: "var(--section-gradient)" }}>
        <div className="container max-w-3xl">
          <SectionHeading title="What It Is" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-sm p-10 shadow-[var(--card-shadow)] text-center"
          >
            <p className="text-lg text-foreground leading-relaxed font-body">
              AperioTest is an AI-assisted solution that generates test cases from system requirements and ready for human review and approval within minutes. Purpose-built for GxP, 21 CFR Part 11, and IEC 62304 compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Powered by AI */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading title="Powered by Purpose-Built AI" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {poweredFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card border border-border rounded-sm p-7 shadow-[var(--card-shadow)]"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-2">{f.title}</h3>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28" style={{ background: "var(--section-gradient)" }}>
        <div className="container">
          <SectionHeading title="How It Works" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-sm p-6 shadow-[var(--card-shadow)] text-center"
              >
                <div className="w-12 h-12 bg-accent/10 text-accent flex items-center justify-center rounded-sm mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading title="Why It Matters" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyItMatters.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-accent/10 text-accent flex items-center justify-center rounded-sm mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container text-center max-w-2xl">
          <h2 className="text-3xl font-heading font-bold mb-4">Ready to Transform Your Validation Process?</h2>
          <p className="text-primary-foreground/80 font-body mb-6">
            See how AperioTest.AI can cut test creation time by up to 50% while ensuring full compliance.
          </p>
          <a
            href="mailto:sales@doublebridge.com"
            className="inline-flex items-center gap-2 px-7 py-3 bg-accent text-accent-foreground text-sm font-medium rounded-sm hover:opacity-90 transition-opacity font-body"
          >
            Request a Demo
          </a>
        </div>
      </section>
    </>
  );
}
