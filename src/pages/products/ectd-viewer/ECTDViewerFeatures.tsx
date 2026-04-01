import { usePageTitle } from "@/hooks/use-page-title";
import ECTDViewerLayout from "@/components/ECTDViewerLayout";
import { PageHero } from "@/components/PageSections";
import { motion } from "framer-motion";
import { Rocket, Eye, FileText, Navigation, Settings, Download } from "lucide-react";

const featureSections = [
  {
    icon: <Rocket className="w-7 h-7" />,
    title: "Quick Deployment and Access",
    items: [
      "Lightweight, quick install Windows application.",
      "View submissions instantly without any preprocess, upload, or migration required.",
      "Easily access any eCTD storage location available through Windows — Local drive, Network drive, Cloud share mounted drive (SharePoint via OneDrive, Box, Citrix, Egnyte).",
      "Discover all eCTD submissions in a repository for one-click access.",
      "eCTD submissions are optimized for faster subsequent viewing, particularly for submissions stored in cloud storage.",
      "Pin favorite submissions for one-click quick access.",
    ],
  },
  {
    icon: <Eye className="w-7 h-7" />,
    title: "Content Viewing",
    items: [
      "View the lifecycle of a submission in Current or Cumulative View Modes.",
      "View the revisions and lifecycle status of any document.",
      "Utilize multiple View Modes (Table of Contents, Sequences, Regulatory Activity, Study, Folder) to fit any workflow.",
      "Embedded PDF Viewer displays contextual document information including Application Type, Application Number, Sequence Number, Document Title and Lifecycle Status.",
      "Open documents in tabs in ROSETTA eCTD Viewer, send them to a secondary display, or your choice of PDF tool (e.g. Adobe).",
      "Bookmark important documents for quick access.",
    ],
  },
  {
    icon: <FileText className="w-7 h-7" />,
    title: "Reports",
    items: [
      "Display and Export Reports of Studies, Regulatory Activities, Sequence Chronology, Section Attributes, and Cross-referenced Files.",
      "Export the Table of Contents in HTML, spreadsheet (XLS), or text (TXT) format with the files (optional).",
      "Display all of the hyperlinks in a PDF. This report can verify hyperlink page locations, target destinations and validity.",
      "Verify and Display a report of file checksum integrity.",
    ],
  },
  {
    icon: <Navigation className="w-7 h-7" />,
    title: "Navigation",
    items: [
      "View all sequences of an eCTD application or dossier.",
      "View submissions of any regional eCTD specification (US, EU, CA, JP, CH, AU, GCC, ZA, TW, TH, JO, KR, CN, and EAEU).",
      "View Non eCTD Electronic Submissions (NeeS).",
      "Add sequence to view an in-progress sequence with existing eCTD submissions.",
      "Use Filter options to customize the modules, sections, and sequences displayed.",
      "Append submission metadata (Sequence number, Submission Date, Submission Type) to the document title for further clarity.",
      "Merge repeating sections with different attribute values into single sections.",
      "Display placeholder empty sections for sections that are defined without documents.",
      "Search the Table of Contents for specific strings that occur in modules, submission types, or sequences.",
      "Search the Study modules (M4 and M5) for specific strings that occur in study categories or study document file tags.",
      "Sort Table of Contents documents by the sponsor defined order, file name, or document title.",
      "Sort Study View studies by Study ID or Study Title.",
    ],
  },
  {
    icon: <Settings className="w-7 h-7" />,
    title: "Additional Features",
    items: [
      "Batch documents for printing at once with the Print Job tool.",
      "Compare two documents side by side within ROSETTA eCTD Viewer.",
      "Customize the application theme and preferences.",
      "Multi-language support for user interface.",
    ],
  },
];

export default function ECTDViewerFeatures() {
  usePageTitle("ROSETTA eCTD Viewer Desktop Edition Features");

  return (
    <ECTDViewerLayout>
      <PageHero
        subtitle="Desktop Edition"
        title="Desktop Edition Features"
        description="A comprehensive set of features designed for regulatory professionals who need fast, compliant, and user-friendly eCTD viewing."
      />

      <section className="py-20 md:py-28">
        <div className="container max-w-5xl">
          <div className="space-y-16">
            {featureSections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8"
              >
                <div className="flex flex-col items-start gap-3">
                  <div className="w-12 h-12 bg-accent/10 text-accent flex items-center justify-center rounded-sm">
                    {section.icon}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed font-body"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container text-center max-w-2xl">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Try it for free
          </h2>
          <p className="text-primary-foreground/80 font-body mb-6">
            Download the ROSETTA eCTD Viewer Desktop Edition and start viewing eCTD submissions in seconds.
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
