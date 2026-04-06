import { usePageTitle } from "@/hooks/use-page-title";
import { PageHero, SectionHeading, FeatureCard } from "@/components/PageSections";
import { motion } from "framer-motion";
import {
  Settings, Users, Monitor, Database, FileText,
  Headphones, Shield, Workflow
} from "lucide-react";

export default function Services() {
  usePageTitle("Services");
  return (
    <>
      <PageHero
        subtitle="Services"
        title="Excellence Delivered"
        description="We deliver what we promised. Greater workplace efficiency without the burden of maintaining and managing SharePoint and Documentum applications."
      />

      {/* Service Commitment */}
      <section className="py-20 md:py-28" style={{ background: "var(--section-gradient)" }}>
        <div className="container">
          <SectionHeading
            title="Service Commitment"
            subtitle="We deliver what we promised"
          />
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-sm p-10 shadow-[var(--card-shadow)]"
            >
              <p className="text-foreground text-lg leading-relaxed font-body mb-6">
                Greater workplace efficiency without the burden of maintaining and managing SharePoint and Documentum applications. Better team collaboration and content management solutions through high-performing, reliable service delivery methodologies with clearly defined service level agreements.
              </p>
              <p className="text-foreground text-lg leading-relaxed font-body mb-6">
                Access to SharePoint and Documentum expertise. SharePoint and Documentum applications tailored to your exact business needs.
              </p>
              <p className="text-foreground text-lg leading-relaxed font-body">
                Support from a designated team of experienced professionals who know both your business and your technology.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive IT and software services for Life Sciences organizations worldwide."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 [&>*]:h-full">
            <FeatureCard
              icon={<Settings className="w-6 h-6" />}
              title="Software Development"
              description="Custom software development services including full lifecycle management, from requirements gathering through deployment and maintenance."
            />
            <FeatureCard
              icon={<Workflow className="w-6 h-6" />}
              title="Application Customization & Integration"
              description="Expert customization and integration of enterprise applications including SharePoint and Documentum to streamline your business processes."
            />
            <FeatureCard
              icon={<FileText className="w-6 h-6" />}
              title="Electronic Document Management"
              description="Comprehensive EDMS solutions to manage, store, and retrieve documents across your organization with full regulatory compliance."
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6" />}
              title="Regulatory Information Management"
              description="End-to-end regulatory information management services ensuring compliance with global regulatory requirements."
            />
            <FeatureCard
              icon={<Database className="w-6 h-6" />}
              title="Data Migration"
              description="Safe and reliable data migration services with comprehensive validation to ensure data integrity across system transitions."
            />
            <FeatureCard
              icon={<Monitor className="w-6 h-6" />}
              title="SharePoint & Documentum"
              description="Specialized expertise in SharePoint and Documentum platforms, including development, administration, and ongoing support."
            />
            <FeatureCard
              icon={<Users className="w-6 h-6" />}
              title="Team Collaboration Solutions"
              description="Better team collaboration and content management solutions through high-performing, reliable service delivery methodologies."
            />
            <FeatureCard
              icon={<Headphones className="w-6 h-6" />}
              title="Managed Services"
              description="Dedicated managed services with clearly defined SLAs, supported by a designated team of experienced professionals who know your business."
            />
          </div>
        </div>
      </section>);
}
