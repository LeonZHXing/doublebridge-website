import { usePageTitle } from "@/hooks/use-page-title";
import Layout from "@/components/Layout";
import { PageHero, SectionHeading, FeatureCard } from "@/components/PageSections";
import { motion } from "framer-motion";
import { Cpu, FileText, TestTube, Brain, Sparkles, Shield } from "lucide-react";

export default function AISolutions() {
  usePageTitle("AI Solutions");
  return (
    <Layout>
      <PageHero
        subtitle="AI Solutions"
        title="Purpose-Built AI for Life Sciences"
        description="Leveraging artificial intelligence to accelerate regulatory processes, enhance compliance, and drive efficiency across Life Sciences organizations."
      />

      <section className="py-20 md:py-28" style={{ background: "var(--section-gradient)" }}>
        <div className="container">
          <SectionHeading
            title="AI-Powered Innovation"
            subtitle="Our AI solutions are specifically designed for the unique requirements of Life Sciences, ensuring compliance while maximizing efficiency."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 [&>*]:h-full">
            <FeatureCard
              icon={<FileText className="w-6 h-6" />}
              title="ROSETTA Scribe — AI-Assisted Publishing"
              description="AI-assisted regulatory submission publishing with smart authoring capabilities. Generates draft content, summaries, and structured templates based on submission type and context."
              link={{ label: "Learn More", to: "/products/scribe" }}
            />
            <FeatureCard
              icon={<TestTube className="w-6 h-6" />}
              title="AperioTest.AI — Test Generation"
              description="AI-assisted solution that generates test cases from system requirements and ready for human review within minutes. Purpose-built for GxP, 21 CFR Part 11, and IEC 62304 compliance."
              link={{ label: "Learn More", to: "/products/aperiotest" }}
            />
            <FeatureCard
              icon={<Brain className="w-6 h-6" />}
              title="AI Content Generation"
              description="Generate draft content, summaries, and structured templates for regulatory submissions. Speeds up writing and reduces the manual burden on regulatory authors."
            />
            <FeatureCard
              icon={<Sparkles className="w-6 h-6" />}
              title="Smart Strategy Selection"
              description="Choose default, single, or separate strategies to match your project's validation goals. AI helps optimize test coverage and strategy selection."
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6" />}
              title="Compliance-First AI"
              description="All our AI solutions are built with compliance at the core — designed for FDA, CE, GxP, and IEC 62304 requirements with human-in-the-loop oversight."
            />
            <FeatureCard
              icon={<Cpu className="w-6 h-6" />}
              title="Human-in-the-Loop Oversight"
              description="Allows regulatory professionals to review, edit, and approve AI-generated content before publishing. Maintains human judgment and control with AI boosting speed and accuracy."
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading title="How Our AI Works" />
          <div className="max-w-3xl mx-auto space-y-0">
            {[
              { step: "01", title: "Import Requirements", desc: "From DOORS, Jira, spreadsheets or any existing system." },
              { step: "02", title: "Analyze with AI", desc: "Instantly generate test cases or content with contextual prompts." },
              { step: "03", title: "Review & Refine", desc: "Customize and optimize AI-generated outputs with expert oversight." },
              { step: "04", title: "Export & Submit", desc: "Get submission-ready documents with full traceability." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 py-8 border-b border-border last:border-0"
              >
                <span className="text-accent font-heading font-bold text-2xl shrink-0">{item.step}</span>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground font-body">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
