import Layout from "@/components/Layout";
import { PageHero, SectionHeading, FeatureCard } from "@/components/PageSections";
import { motion } from "framer-motion";
import { Brain, Search, FileText, MessageSquare, Shield, Zap } from "lucide-react";

export default function ECTDViewerAI() {
  return (
    <Layout>
      <PageHero
        subtitle="AI Solutions"
        title="ROSETTA eCTD Viewer with AI-powered Q&A"
        description="Ask questions across your eCTD submissions and get instant, contextual answers powered by AI."
      />

      <section className="py-20 md:py-28" style={{ background: "var(--section-gradient)" }}>
        <div className="container">
          <SectionHeading
            title="AI-Powered Submission Intelligence"
            subtitle="Transform how your team navigates and understands regulatory submissions with AI-driven Q&A capabilities."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<MessageSquare className="w-6 h-6" />}
              title="Natural Language Q&A"
              description="Ask questions in plain language and receive accurate, contextual answers drawn directly from your eCTD submission content."
            />
            <FeatureCard
              icon={<Search className="w-6 h-6" />}
              title="Intelligent Search"
              description="Go beyond keyword search — AI understands context and meaning to find the most relevant information across modules."
            />
            <FeatureCard
              icon={<FileText className="w-6 h-6" />}
              title="Cross-Module Analysis"
              description="Get answers that span multiple modules and documents, with source references for full traceability."
            />
            <FeatureCard
              icon={<Brain className="w-6 h-6" />}
              title="Contextual Understanding"
              description="AI understands regulatory terminology and eCTD structure, providing domain-specific insights and answers."
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6" />}
              title="Compliance-First Design"
              description="Built for regulated environments with audit trails, source citations, and human oversight at every step."
            />
            <FeatureCard
              icon={<Zap className="w-6 h-6" />}
              title="Instant Insights"
              description="Reduce hours of manual document review to seconds with AI-powered summarization and question answering."
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading title="How It Works" />
          <div className="max-w-3xl mx-auto space-y-0">
            {[
              { step: "01", title: "Load Your Submission", desc: "Import your eCTD submission into the ROSETTA Viewer." },
              { step: "02", title: "Ask a Question", desc: "Type any question about the submission content in natural language." },
              { step: "03", title: "Get AI Answers", desc: "Receive accurate, cited answers with direct links to source documents." },
              { step: "04", title: "Verify & Navigate", desc: "Click through to source documents to verify answers in full context." },
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
