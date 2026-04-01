import { usePageTitle } from "@/hooks/use-page-title";
import ECTDViewerLayout from "@/components/ECTDViewerLayout";
import { PageHero, FeatureCard } from "@/components/PageSections";
import { CheckCircle, Zap, Shield, Download } from "lucide-react";
import { Link } from "react-router-dom";

export default function ECTDViewerDesktop() {
  usePageTitle("ROSETTA eCTD Viewer Desktop Edition");

  return (
    <ECTDViewerLayout>
      <PageHero
        subtitle="Desktop Edition"
        title="ROSETTA eCTD Viewer Desktop Edition"
        description="Supports the latest and all previous ICH and regional eCTD specifications since 2004. eCTD v4.0 support is now available for pilot testing."
      />

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-3">
              Don't compromise quality or performance for cheap imitations.
            </h2>
            <p className="text-muted-foreground font-body mb-2">
              eCTD v4.0 support is now available for pilot testing.{" "}
              <a
                href="mailto:rosetta@doublebridge.com"
                className="text-accent underline"
              >
                Contact Us
              </a>{" "}
              for a preview version.
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <a
                href="https://www.ectdviewer.com/download"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 bg-accent text-accent-foreground text-sm font-medium rounded-sm hover:opacity-90 transition-opacity font-body"
              >
                <Download className="w-4 h-4" /> Try it for Free
              </a>
              <Link
                to="/products/ectd-viewer/features"
                className="inline-flex items-center gap-2 px-7 py-3 border border-border text-foreground text-sm font-medium rounded-sm hover:bg-accent/5 transition-colors font-body"
              >
                View Features
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<CheckCircle className="w-6 h-6" />}
              title="It's Easy to Use!"
              description="A feature-rich, easy to use eCTD viewer for submissions and dossiers prepared in Electronic Common Technical Document (eCTD) format. Designed for users who do not need to know the technical aspects of eCTD."
              link={{
                label: "Learn More",
                to: "/products/ectd-viewer/features",
              }}
            />
            <FeatureCard
              icon={<Zap className="w-6 h-6" />}
              title="It's Fast!"
              description="It's easy on the outside but fast on the inside! ROSETTA eCTD Viewer's smart eCTD loading and processing engine is among the fastest in the industry. Many companies select it because it outperforms other eCTD viewing software in loading speed."
              link={{
                label: "Learn More",
                to: "/products/ectd-viewer/features",
              }}
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6" />}
              title="It's Compliant!"
              description="Compliant with the latest eCTD specifications and backwards-compatible with all previous specifications. Any eCTD submissions can be viewed, as long as they conform to ICH and regional eCTD specifications."
              link={{
                label: "Learn More",
                to: "/products/ectd-viewer/features",
              }}
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container text-center max-w-2xl">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Ready to get started?
          </h2>
          <p className="text-primary-foreground/80 font-body mb-6">
            Contact us at{" "}
            <a
              href="mailto:rosetta@doublebridge.com"
              className="underline"
            >
              rosetta@doublebridge.com
            </a>{" "}
            for a preview version of eCTD v4.0 support.
          </p>
          <a
            href="https://www.ectdviewer.com/download"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 bg-accent text-accent-foreground text-sm font-medium rounded-sm hover:opacity-90 transition-opacity font-body"
          >
            <Download className="w-4 h-4" /> Download Free Trial
          </a>
        </div>
      </section>
    </ECTDViewerLayout>
  );
}
