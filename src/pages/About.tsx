import { usePageTitle } from "@/hooks/use-page-title";
import Layout from "@/components/Layout";
import { PageHero, SectionHeading } from "@/components/PageSections";
import { motion } from "framer-motion";
import { Globe, Award, Users, Clock } from "lucide-react";

export default function About() {
  usePageTitle("About");
  return (
    <Layout>
      <PageHero
        subtitle="About Us"
        title="Who We Are"
        description="Established in 1997, DoubleBridge Technologies has over a quarter century of experience as a pioneer in providing global Life Sciences organizations with reliable business and technology solutions."
      />

      <section className="py-20 md:py-28" style={{ background: "var(--section-gradient)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed font-body">
                <p>
                  Established in 1997, DoubleBridge Technologies has over a quarter century of experience as a pioneer in providing global Life Sciences organizations with reliable business and technology solutions & services, such as software development, application customization and integration, electronic document management systems, regulatory information management and data migration services.
                </p>
                <p>
                  Our headquarters is located in Princeton, New Jersey, but our development centers span across the world. This global presence powers 24×7 around the clock delivery.
                </p>
                <p>
                  DoubleBridge Technologies closes the gap between the goals of your business and the technologies needed to get you there by bringing a broad perspective to deliver effective, creative solutions to your IT and software challenges. Our services have helped our major clients throughout the world achieve their goals faster and more cost-effectively.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Clock className="w-6 h-6" />, value: "Since 1997", label: "Serving the industry for over 25 years" },
                { icon: <Globe className="w-6 h-6" />, value: "Global Reach", label: "Development centers across the world" },
                { icon: <Award className="w-6 h-6" />, value: "Life Sciences", label: "Deep domain expertise" },
                { icon: <Users className="w-6 h-6" />, value: "F500 Clients", label: "Trusted by Fortune 500 companies" },
              ].map((item, i) => (
                <motion.div
                  key={item.value}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border rounded-sm p-6 shadow-[var(--card-shadow)]"
                >
                  <div className="w-10 h-10 bg-accent/10 text-accent flex items-center justify-center rounded-sm mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{item.value}</h3>
                  <p className="text-xs text-muted-foreground font-body">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28">
        <div className="container max-w-3xl text-center">
          <SectionHeading
            title="Our Mission"
            subtitle="To close the gap between the goals of your business and the technologies needed to get you there — delivering effective, creative solutions to IT and software challenges."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Reliability", desc: "Proven track record of delivering on promises with clearly defined SLAs." },
              { title: "Innovation", desc: "Pioneering AI-powered solutions for regulatory and compliance challenges." },
              { title: "Partnership", desc: "A designated team that knows both your business and your technology." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
