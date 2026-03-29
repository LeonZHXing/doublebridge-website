import Layout from "@/components/Layout";
import { PageHero } from "@/components/PageSections";
import { motion } from "framer-motion";
import { Briefcase, Mail } from "lucide-react";

const openings = [
  "Business Support Analyst",
  "Document Management Specialists",
  "Web Designer",
  "Documentum Administrator",
  "Computer Project Manager",
  "Senior Software Engineer",
  "Software Engineer",
  "Geographic Image Processing Application Architect",
  "Metadata Architect",
  "Sr. Project Manager",
  "Software Architects/Lead Developers",
  "Solution Architect",
  "Systems Analyst",
  "Technical Project Manager",
  "System Administrator",
  "Unix System Administrator",
  "Web Designer/Web Communication Consultant",
  "Technical Lead",
  "Documentum Developer",
];

export default function Careers() {
  return (
    <Layout>
      <PageHero
        subtitle="Careers"
        title="Join Our Team"
        description="A company like ours isn't built on technology alone. It's built on the intelligence of our employees."
      />

      <section className="py-20 md:py-28" style={{ background: "var(--section-gradient)" }}>
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-sm p-10 shadow-[var(--card-shadow)] mb-10"
          >
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Why DoubleBridge?</h2>
            <p className="text-muted-foreground leading-relaxed font-body mb-6">
              DoubleBridge provides a competitive benefit package for every employee from the first day of working with us. We offer a complete compensation package comprised of:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Competitive salaries",
                "Bonus opportunities",
                "Medical/dental/life insurance",
                "401K plan",
                "Vacation, sick day and holiday pay",
                "Professional growth opportunities",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 text-sm text-foreground font-body">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                  {benefit}
                </div>
              ))}
            </div>
          </motion.div>

          <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Current Openings</h2>
          <div className="space-y-3">
            {openings.map((role, i) => (
              <motion.div
                key={`${role}-${i}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="flex items-center gap-4 bg-card border border-border rounded-sm px-6 py-4 shadow-[var(--card-shadow)]"
              >
                <Briefcase className="w-4 h-4 text-accent shrink-0" />
                <span className="text-sm font-body text-foreground">{role}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 bg-primary text-primary-foreground p-8 rounded-sm text-center"
          >
            <Mail className="w-8 h-8 mx-auto mb-4 opacity-80" />
            <h3 className="font-heading font-semibold text-lg mb-2">Interested in a position?</h3>
            <p className="text-primary-foreground/80 font-body mb-4">
              Please send us your resume to get started.
            </p>
            <a
              href="mailto:hr@doublebridge.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground text-sm font-medium rounded-sm hover:opacity-90 transition-opacity font-body"
            >
              hr@doublebridge.com
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
