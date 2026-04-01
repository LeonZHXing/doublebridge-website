import { usePageTitle } from "@/hooks/use-page-title";
import ECTDViewerLayout from "@/components/ECTDViewerLayout";
import { PageHero, FeatureCard } from "@/components/PageSections";
import {
  Globe,
  Database,
  Search,
  ShieldCheck,
  Code,
  Settings,
} from "lucide-react";

const features = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Compatible with all browsers",
    description:
      "RADARS supports and is compatible with most modern browsers, such as Chrome, Edge, Firefox, and Safari. Its compatibility puts IT managers in control of the deployment.",
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Integrated eCTD capabilities",
    description:
      "The product deeply integrates with eCTD, making record creation straightforward with automated indexing and document classification of eCTD submissions.",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Single source of truth",
    description:
      "Record content can be linked to any archive location, such as a file share or Electronic Document Management Systems, to preserve the corporate's 'Single source of truth' paradigm.",
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "Metadata-driven search",
    description:
      "A customizable set of metadata index elements for the search form, allowing users to streamline and enhance their search process to find the most relevant records.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Secured",
    description:
      "Access controls enable administrators to set permissions at various levels such as country, product, and document classification for granular control over access rights.",
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Data integrity through master data",
    description:
      "The Master Data module equips the system with a consistent vocabulary, ensuring data accuracy and consistency with fully configurable procedure types, record types, and metadata.",
  },
];

export default function ECTDViewerRADARS() {
  usePageTitle("RADARS — Regulatory Affairs Document Archive and Retrieval System");

  return (
    <ECTDViewerLayout>
      <PageHero
        subtitle="RADARS"
        title="Regulatory Affairs Document Archive and Retrieval System"
        description="Single Source of Truth for Regulatory Correspondence"
      />

      <section className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <div className="space-y-6 text-muted-foreground font-body leading-relaxed mb-16">
            <p>
              The Regulatory Affairs Document Archive and Retrieval System
              (RADARS) is an archive solution which provides the ability to
              track regulatory communications with health authorities.
            </p>
            <p>
              By logging and tracking official submission records, incoming
              correspondence, and other forms of communications from health
              authorities such as emails, phone calls, and letters, RADARS can
              provide a complete chronology of interactions for a particular
              product, drug application, specific topic, or timeframe.
            </p>
            <p>
              This powerful and quick metadata-driven approach provides for
              instant retrieval of records and their associated electronic
              documents including digitized paper records.
            </p>
            <p>
              RADARS allows consolidation of multiple systems and storage
              locations, combining file shares with other EDMS and tracking
              databases with spreadsheets into a single centralized location for
              all the information about a product.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container">
          <h2 className="text-2xl font-heading font-bold text-foreground text-center mb-12">
            Features
          </h2>
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
            Ready to learn more?
          </h2>
          <p className="text-primary-foreground/80 font-body mb-6">
            Contact us to schedule a demo and see how RADARS can transform your
            regulatory document management.
          </p>
          <a
            href="mailto:rosetta@doublebridge.com"
            className="inline-flex items-center gap-2 px-7 py-3 bg-accent text-accent-foreground text-sm font-medium rounded-sm hover:opacity-90 transition-opacity font-body"
          >
            Contact Us
          </a>
        </div>
      </section>
    </ECTDViewerLayout>
  );
}
