import { usePageTitle } from "@/hooks/use-page-title";
import Layout from "@/components/Layout";
import { PageHero, SectionHeading, FeatureCard } from "@/components/PageSections";
import { motion } from "framer-motion";
import { Settings, Monitor, Database, Shield, Workflow, Headphones } from "lucide-react";

export default function ITServices() {
  return (
    <Layout>
      <PageHero
        subtitle="Services"
        title="IT Services"
        description="From the very start of a project, application-specific critical success factors are addressed with an eye toward solving a business problem or automating a business process."
      />

      <section className="py-20 md:py-28" style={{ background: "var(--section-gradient)" }}>
        <div className="container">
          <SectionHeading
            title="Customer-Centric Delivery"
            subtitle="DoubleBridge ensures that measurable objectives are identified and documented. By creating contingency plans, we manage software development projects proactively."
          />
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-sm p-10 shadow-[var(--card-shadow)]"
            >
              <p className="text-foreground text-lg leading-relaxed font-body mb-6">
                DoubleBridge understands that every project will have some risks. However, if identified in a timely manner, they can be planned for, managed, and often eliminated. By creating contingency plans, DoubleBridge is able to manage the software development projects in a proactive manner.
              </p>
              <p className="text-foreground text-lg leading-relaxed font-body">
                The IT services provided by DoubleBridge Technologies cover IT infrastructure management, application development and testing, and legacy system upgrade and migration.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            title="Our IT Services"
            subtitle="Comprehensive technology services for Life Sciences organizations."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Monitor className="w-6 h-6" />}
              title="IT Infrastructure Management"
              description="End-to-end IT infrastructure management services ensuring your systems run reliably and efficiently around the clock."
            />
            <FeatureCard
              icon={<Settings className="w-6 h-6" />}
              title="Application Development & Testing"
              description="Custom application development with comprehensive testing methodologies, from requirements gathering through deployment."
            />
            <FeatureCard
              icon={<Database className="w-6 h-6" />}
              title="Legacy System Upgrade & Migration"
              description="Safe and reliable legacy system upgrades and data migration services with comprehensive validation to ensure data integrity."
            />
            <FeatureCard
              icon={<Workflow className="w-6 h-6" />}
              title="Application Customization & Integration"
              description="Expert customization and integration of enterprise applications including SharePoint and Documentum."
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6" />}
              title="Quality Assurance"
              description="Rigorous QA processes with clearly defined service level agreements ensuring the highest standards of delivery."
            />
            <FeatureCard
              icon={<Headphones className="w-6 h-6" />}
              title="Managed Services"
              description="Dedicated managed services supported by a designated team of experienced professionals who know your business and technology."
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
