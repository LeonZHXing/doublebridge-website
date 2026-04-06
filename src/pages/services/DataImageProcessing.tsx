import { usePageTitle } from "@/hooks/use-page-title";
import { PageHero, SectionHeading, FeatureCard } from "@/components/PageSections";
import { Image, Database, FileText, Workflow, Shield, Zap } from "lucide-react";

export default function DataImageProcessing() {
  usePageTitle("Data & Image Processing");
  return (
      <PageHero
        subtitle="Services"
        title="Data & Image Processing"
        description="Professional data and image processing services for regulatory submissions and Life Sciences documentation."
      />

      <section className="py-20 md:py-28" style={{ background: "var(--section-gradient)" }}>
        <div className="container">
          <SectionHeading
            title="Processing Services"
            subtitle="Accurate, efficient processing of data and images to meet the demanding standards of Life Sciences organizations."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Image className="w-6 h-6" />}
              title="Image Processing"
              description="High-quality image processing, conversion, and optimization for regulatory submissions and clinical documentation."
            />
            <FeatureCard
              icon={<Database className="w-6 h-6" />}
              title="Data Migration"
              description="Safe and reliable data migration with comprehensive validation to ensure data integrity across system transitions."
            />
            <FeatureCard
              icon={<FileText className="w-6 h-6" />}
              title="Document Conversion"
              description="Professional document conversion services supporting all major formats required for regulatory submissions."
            />
            <FeatureCard
              icon={<Workflow className="w-6 h-6" />}
              title="Batch Processing"
              description="Automated batch processing capabilities for handling large volumes of data and image files efficiently."
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6" />}
              title="Quality Assurance"
              description="Rigorous quality checks ensuring all processed data and images meet regulatory standards and specifications."
            />
            <FeatureCard
              icon={<Zap className="w-6 h-6" />}
              title="Fast Turnaround"
              description="Rapid turnaround times with 24x7 global delivery capabilities to meet tight submission deadlines."
            />
          </div>
        </div>
      </section>);
}
