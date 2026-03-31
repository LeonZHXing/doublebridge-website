import { usePageTitle } from "@/hooks/use-page-title";
import Layout from "@/components/Layout";
import { PageHero, SectionHeading, FeatureCard } from "@/components/PageSections";
import { motion } from "framer-motion";
import { Brain, MessageSquare, Database, Shield, Users, Search } from "lucide-react";

export default function GnosisVaultAI() {
  return (
    <Layout>
      <PageHero
        subtitle="AI Solutions"
        title="ROSETTA GnosisVault — AI-Powered Q&A for Regulatory Teams"
        description="Empower regulatory teams with AI-driven question answering across your entire document repository."
      />

      <section className="py-20 md:py-28" style={{ background: "var(--section-gradient)" }}>
        <div className="container">
          <SectionHeading
            title="Intelligent Document Intelligence"
            subtitle="GnosisVault with AI transforms your regulatory document repository into an intelligent knowledge base that answers questions instantly."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<MessageSquare className="w-6 h-6" />}
              title="AI-Powered Q&A"
              description="Ask questions about any document in your vault and receive accurate, contextual answers with source citations."
            />
            <FeatureCard
              icon={<Search className="w-6 h-6" />}
              title="Semantic Search"
              description="Find information based on meaning, not just keywords — AI understands regulatory context and terminology."
            />
            <FeatureCard
              icon={<Database className="w-6 h-6" />}
              title="Knowledge Base"
              description="Build an intelligent knowledge base from your regulatory documents that grows smarter with every interaction."
            />
            <FeatureCard
              icon={<Users className="w-6 h-6" />}
              title="Team Collaboration"
              description="Share AI-generated insights and answers across regulatory teams to accelerate decision-making."
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6" />}
              title="Secure & Compliant"
              description="Enterprise-grade security with 21 CFR Part 11 compliance, role-based access, and full audit trails."
            />
            <FeatureCard
              icon={<Brain className="w-6 h-6" />}
              title="Continuous Learning"
              description="The AI improves over time as your team interacts with documents, providing increasingly relevant answers."
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading title="How GnosisVault AI Works" />
          <div className="max-w-3xl mx-auto space-y-0">
            {[
              { step: "01", title: "Upload Documents", desc: "Add regulatory documents to your secure GnosisVault repository." },
              { step: "02", title: "AI Indexing", desc: "Documents are automatically analyzed and indexed by AI for intelligent retrieval." },
              { step: "03", title: "Ask Questions", desc: "Query your document library in natural language and get instant, cited answers." },
              { step: "04", title: "Share Insights", desc: "Distribute AI-generated insights across your team for faster regulatory decisions." },
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
