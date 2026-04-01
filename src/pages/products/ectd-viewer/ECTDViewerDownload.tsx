import { usePageTitle } from "@/hooks/use-page-title";
import ECTDViewerLayout from "@/components/ECTDViewerLayout";
import { PageHero } from "@/components/PageSections";
import { motion } from "framer-motion";
import { Download, Monitor, Apple, FileText } from "lucide-react";

const regions = [
  { region: "Australia", specs: "0.9, 3.0, 3.1, 3.2", windows: true, mac: true },
  { region: "Bosnia and Herzegovina", specs: "1.0", windows: true, mac: false },
  { region: "Canada", specs: "1.0, 2.2", windows: true, mac: true },
  { region: "China", specs: "1.0, 1.1", windows: true, mac: true },
  { region: "Eurasian Economic Union", specs: "No. 78 Decision", windows: true, mac: false },
  { region: "European Union", specs: "1.0, 1.1, 1.2.1, 1.3, 1.4, 2.0, 3.0, 3.0.1, 3.1", windows: true, mac: true },
  { region: "Gulf Cooperation Council", specs: "1.0, 1.1", windows: true, mac: false },
  { region: "Japan", specs: "1.0", windows: true, mac: true },
  { region: "Jordan", specs: "1.0, 1.1", windows: true, mac: false },
  { region: "Singapore", specs: "1.0", windows: true, mac: false },
  { region: "South Africa", specs: "1.0, 2.1, 3.0, 3.1", windows: true, mac: false },
  { region: "South Korea", specs: "1.0", windows: true, mac: false },
  { region: "Switzerland", specs: "1.0, 1.0.1, 1.2, 1.3, 1.4, 1.5", windows: true, mac: false },
  { region: "Taiwan", specs: "1.0, 2.0, 2.1", windows: true, mac: false },
  { region: "Thailand", specs: "0.9, 0.92, 1.0", windows: true, mac: false },
  { region: "Tunisia", specs: "1.1", windows: true, mac: false },
  { region: "Ukraine", specs: "1.0", windows: true, mac: false },
  { region: "United States", specs: "2.0, 2.01, 3.3", windows: true, mac: true },
  { region: "West African", specs: "1.0", windows: true, mac: false },
  { region: "World Health Organization", specs: "1.0", windows: true, mac: false },
];

export default function ECTDViewerDownload() {
  usePageTitle("ROSETTA eCTD Viewer Download");

  return (
    <ECTDViewerLayout>
      <PageHero
        subtitle="Download"
        title="ROSETTA eCTD Viewer Desktop Edition Download"
        description="Download the latest version for Windows or macOS."
      />

      <section className="py-20 md:py-28">
        <div className="container max-w-4xl">
          {/* Download cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-sm p-8 text-center shadow-[var(--card-shadow)]"
            >
              <Monitor className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-heading font-bold text-xl mb-2">Windows</h3>
              <p className="text-sm text-muted-foreground font-body mb-6">
                Windows 10, 11
              </p>
              <a
                href="https://www.ectdviewer.com/Rosetta/phoenix/download/desktop/R651/lO1uL8/Setup_ROSETTA_eCTD_Viewer_6.5.1.2063.msi"
                className="inline-flex items-center gap-2 px-7 py-3 bg-accent text-accent-foreground text-sm font-medium rounded-sm hover:opacity-90 transition-opacity font-body"
              >
                <Download className="w-4 h-4" /> Download R6.5.1
              </a>
              <div className="mt-4">
                <a
                  href="https://www.ectdviewer.com/release-notes/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-accent hover:underline font-body"
                >
                  <FileText className="w-3.5 h-3.5" /> Release Notes
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border rounded-sm p-8 text-center shadow-[var(--card-shadow)]"
            >
              <Apple className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-heading font-bold text-xl mb-2">Mac</h3>
              <p className="text-sm text-muted-foreground font-body mb-6">
                macOS 11.0 or later
              </p>
              <a
                href="https://ectdviewer.com/Rosetta/phoenix/download/desktop/macOS/R1/icFwMJ/Setup_ROSETTA_eCTD_Viewer_1.0.0.1292_universal.dmg"
                className="inline-flex items-center gap-2 px-7 py-3 bg-accent text-accent-foreground text-sm font-medium rounded-sm hover:opacity-90 transition-opacity font-body"
              >
                <Download className="w-4 h-4" /> Download R1.0
              </a>
              <div className="mt-4">
                <a
                  href="https://www.ectdviewer.com/release-notes/#mac-version"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-accent hover:underline font-body"
                >
                  <FileText className="w-3.5 h-3.5" /> Release Notes
                </a>
              </div>
            </motion.div>
          </div>

          {/* eCTD v4 notice */}
          <div className="bg-accent/5 border border-accent/20 rounded-sm p-6 text-center mb-16">
            <p className="text-sm text-foreground font-body">
              Support for <strong>eCTD v4.0</strong> with forward compatibility
              is now available in R7 (
              <a
                href="https://www.ectdviewer.com/release-notes7"
                target="_blank"
                rel="noreferrer"
                className="text-accent underline"
              >
                Release Notes
              </a>
              ).{" "}
              <a
                href="mailto:rosetta@doublebridge.com"
                className="text-accent underline"
              >
                Contact Us
              </a>{" "}
              to request a free trial!
            </p>
          </div>

          {/* Regional specs table */}
          <h3 className="text-xl font-heading font-bold text-foreground text-center mb-8">
            Regional Specifications Supported
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-body">
              <thead>
                <tr className="border-b-2 border-accent/30">
                  <th className="text-left py-3 px-4 font-semibold text-foreground">
                    Region
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">
                    M1 specs versions
                  </th>
                  <th className="text-center py-3 px-4 font-semibold text-foreground">
                    Windows
                  </th>
                  <th className="text-center py-3 px-4 font-semibold text-foreground">
                    macOS*
                  </th>
                </tr>
              </thead>
              <tbody>
                {regions.map((r) => (
                  <tr
                    key={r.region}
                    className="border-b border-border hover:bg-accent/5 transition-colors"
                  >
                    <td className="py-2.5 px-4 text-foreground">{r.region}</td>
                    <td className="py-2.5 px-4 text-muted-foreground">
                      {r.specs}
                    </td>
                    <td className="py-2.5 px-4 text-center text-muted-foreground">
                      {r.windows ? "Yes" : "No"}
                    </td>
                    <td className="py-2.5 px-4 text-center text-muted-foreground">
                      {r.mac ? "Yes" : "No"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-4 font-body">
            * Support for eCTD specifications from other regions in the Mac
            Edition will be included in the next version.
          </p>
        </div>
      </section>
    </ECTDViewerLayout>
  );
}
