import { usePageTitle } from "@/hooks/use-page-title";
import Layout from "@/components/Layout";
import { PageHero, SectionHeading, FeatureCard } from "@/components/PageSections";
import { motion } from "framer-motion";
import { FileText, Brain, Sparkles, Shield, Workflow, Zap } from "lucide-react";

export default function ScribeAI() {
  return (
    <Layout>
      <PageHero
        subtitle="AI Solutions"
        title="ROSETTA Scribe — AI-Assisted Regulatory Submission Publishing"
        description="Accelerate regulatory submission publishing with AI-assisted content generation, smart authoring, and compliance-first workflows."
      />

      <section className="py-20 md:py-28" style={{ background: "var(--section-gradient)" }}>
        <div className="container">
          <SectionHeading
            title="AI-Powered Publishing"
            subtitle="ROSETTA Scribe leverages AI to streamline the creation of regulatory submissions while maintaining compliance and quality."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Brain className="w-6 h-6" />}
              title="AI Content Generation"
              description="Generate draft content, summaries, and structured templates based on submission type and regulatory context."
            />
            <FeatureCard
              icon={<FileText className="w-6 h-6" />}
              title="Smart Authoring"
              description="AI-assisted authoring capabilities that suggest content, flag inconsistencies, and ensure completeness."
            />
            <FeatureCard
              icon={<Sparkles className="w-6 h-6" />}
              title="Template Intelligence"
              description="Automatically generate structured templates tailored to specific submission types and regulatory requirements."
            />
            <FeatureCard
              icon={<Workflow className="w-6 h-6" />}
              title="Automated Workflows"
              description="Streamline publishing workflows with AI-driven task automation, reducing manual effort and accelerating timelines."
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6" />}
              title="Human-in-the-Loop"
              description="Regulatory professionals review, edit, and approve all AI-generated content before publishing — maintaining full control."
            />
            <FeatureCard
              icon={<Zap className="w-6 h-6" />}
              title="Accelerated Timelines"
              description="Reduce submission preparation time significantly while maintaining the highest quality and compliance standards."
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading title="Publishing Workflow" />
          <div className="max-w-3xl mx-auto space-y-0">
            {[
              { step: "01", title: "Define Submission Scope", desc: "Select submission type, region, and regulatory requirements." },
              { step: "02", title: "AI-Assisted Drafting", desc: "Generate draft content and templates with AI, guided by regulatory context." },
              { step: "03", title: "Review & Refine", desc: "Expert review and editing of AI-generated content with full audit trail." },
              { step: "04", title: "Publish & Submit", desc: "Finalize and publish submission-ready documents with full compliance validation." },
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
