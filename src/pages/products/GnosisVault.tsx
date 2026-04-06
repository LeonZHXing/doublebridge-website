import { usePageTitle } from "@/hooks/use-page-title";
import { PageHero, SectionHeading, FeatureCard } from "@/components/PageSections";
import { Database, Lock, FileSearch, Shield } from "lucide-react";

export default function GnosisVault() {
  usePageTitle("ROSETTA GnosisVault");
  return (
      <PageHero
        subtitle="Product"
        title="ROSETTA GnosisVault"
        description="Advanced document vault for Life Sciences regulatory content management, enabling secure storage and retrieval of critical regulatory documents."
      />

      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            title="Secure Regulatory Content Management"
            subtitle="ROSETTA GnosisVault provides a centralized, secure repository for managing your regulatory documents with full compliance and audit capabilities."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<Database className="w-6 h-6" />}
              title="Centralized Repository"
              description="Store and organize all regulatory documents in a single, secure location with structured taxonomy and metadata management."
            />
            <FeatureCard
              icon={<Lock className="w-6 h-6" />}
              title="Security & Access Control"
              description="Role-based access control with comprehensive audit trails ensuring document security and regulatory compliance."
            />
            <FeatureCard
              icon={<FileSearch className="w-6 h-6" />}
              title="Advanced Search"
              description="Powerful search capabilities to quickly find and retrieve documents across your entire regulatory content library."
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6" />}
              title="Compliance Ready"
              description="Built for Life Sciences regulatory requirements with full audit trail and version control capabilities."
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container text-center max-w-2xl">
          <h2 className="text-3xl font-heading font-bold mb-4">Learn More About GnosisVault</h2>
          <p className="text-primary-foreground/80 font-body mb-6">
            Contact our sales team to schedule a demo and discover how GnosisVault can transform your regulatory content management.
          </p>
          <a
            href="mailto:sales@doublebridge.com"
            className="inline-flex items-center gap-2 px-7 py-3 bg-accent text-accent-foreground text-sm font-medium rounded-sm hover:opacity-90 transition-opacity font-body"
          >
            Request a Demo
          </a>
        </div>
      </section>);
}
