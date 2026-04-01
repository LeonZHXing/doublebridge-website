import { usePageTitle } from "@/hooks/use-page-title";
import ECTDViewerLayout from "@/components/ECTDViewerLayout";
import { PageHero, FeatureCard } from "@/components/PageSections";
import {
  Globe,
  Database,
  Zap,
  Monitor,
  LayoutList,
  Search,
  ShieldCheck,
  Lock,
  ClipboardList,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "eCTD WebViewer",
    description:
      "Full lifecycle eCTD viewer compatible with all modern browsers — Chrome, Edge, Firefox, and Safari. Its compatibility puts IT managers in control of the deployment.",
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "Full text search",
    description:
      "Full Text Search allows users to thoroughly search the textual content within a submission to find all instances of specific phrases or terms.",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "No migration needed",
    description:
      "eCTD submissions are ready to view without importing, preprocessing, migrating, or creating duplicate copies — maintaining a single source of truth.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Flexible authentication",
    description:
      "User accounts can be managed through Inline accounts or integrate with an existing Active Directory and honor existing filesystem permissions and privileges.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Fast",
    description:
      "Accelerator functionality allows the system to precompile eCTD submissions for even faster viewing.",
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Role-based access controls",
    description:
      "Ensures that each user has access to the authorized resources for their role, enhancing security and operational efficiency.",
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "eCTD Viewer App",
    description:
      "The optional eCTD Viewer App is a client-side software providing the most responsive user experience for viewing eCTD documents.",
  },
  {
    icon: <ClipboardList className="w-6 h-6" />,
    title: "Audit trails",
    description:
      "Audit trails provide a complete record of changes and actions taken within the system, ensuring 21 CFR Part 11 compliance.",
  },
  {
    icon: <LayoutList className="w-6 h-6" />,
    title: "Quick access to eCTD applications",
    description:
      "Centralized Application List readily accessible to all users allows quick access to eCTD applications.",
  },
];

export default function ECTDViewerEnterprise() {
  usePageTitle("ROSETTA Viewer Enterprise Edition");

  return (
    <ECTDViewerLayout>
      <PageHero
        subtitle="Enterprise Edition"
        title="ROSETTA Viewer Enterprise Edition"
        description="A web browser user interface for viewing eCTD Repositories and submissions. Users can easily access eCTD submissions in centralized Repository locations with a consistent viewing experience."
      />

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-muted-foreground font-body leading-relaxed">
              The ROSETTA eCTD Viewer Enterprise Edition solution provides a web
              browser user interface for viewing eCTD Repositories and
              submissions. Users can easily access eCTD submissions in
              well-defined centralized Repository locations and view the
              submission in the browser-based eCTD WebViewer or eCTD Viewer App.
              All users will have a consistent viewing experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <FeatureCard
                key={f.title}
                icon={f.icon}
                title={f.title}
                description={f.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container text-center max-w-2xl">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Goes beyond eCTD
          </h2>
          <p className="text-primary-foreground/80 font-body mb-6">
            The{" "}
            <Link
              to="/products/ectd-viewer/radars"
              className="underline text-accent"
            >
              Regulatory Affairs Document Archive and Retrieval System (RADARS)
            </Link>{" "}
            Add-On Module goes beyond eCTD and provides the ability to track all
            regulatory communications with health authorities.
          </p>
          <Link
            to="/products/ectd-viewer/radars"
            className="inline-flex items-center gap-2 px-7 py-3 bg-accent text-accent-foreground text-sm font-medium rounded-sm hover:opacity-90 transition-opacity font-body"
          >
            Learn More about RADARS
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </ECTDViewerLayout>
  );
}
