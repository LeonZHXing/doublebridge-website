import { usePageTitle } from "@/hooks/use-page-title";
import { PageHero, SectionHeading, FeatureCard } from "@/components/PageSections";
import { FileText, Shield, Database, Workflow, Globe, Users } from "lucide-react";

export default function RegulatoryIM() {
  usePageTitle("Regulatory Information Management");
  return (
      <PageHero
        subtitle="Services"
        title="Regulatory Information Management"
        description="End-to-end regulatory information management services ensuring compliance with global regulatory requirements."
      />

      <section className="py-20 md:py-28" style={{ background: "var(--section-gradient)" }}>
        <div className="container">
          <SectionHeading
            title="RIM Services"
            subtitle="Streamline your regulatory processes with our comprehensive information management solutions."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<FileText className="w-6 h-6" />}
              title="Document Management"
              description="Comprehensive regulatory document management with version control, audit trails, and full lifecycle tracking."
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6" />}
              title="Compliance Tracking"
              description="Real-time tracking and monitoring of regulatory compliance status across global markets and submission types."
            />
            <FeatureCard
              icon={<Database className="w-6 h-6" />}
              title="Submission Tracking"
              description="End-to-end submission tracking from planning through approval, with complete visibility into regulatory milestones."
            />
            <FeatureCard
              icon={<Globe className="w-6 h-6" />}
              title="Global Regulatory Intelligence"
              description="Stay informed of changing regulatory requirements across FDA, EMA, and other global health authorities."
            />
            <FeatureCard
              icon={<Workflow className="w-6 h-6" />}
              title="Process Automation"
              description="Automate routine regulatory workflows to reduce manual effort and ensure consistency across submissions."
            />
            <FeatureCard
              icon={<Users className="w-6 h-6" />}
              title="Team Collaboration"
              description="Collaborative workspaces enabling regulatory teams to work together efficiently across geographies."
            />
          </div>
        </div>
      </section>);
}
