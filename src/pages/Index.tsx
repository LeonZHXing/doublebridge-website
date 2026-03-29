import Layout from "@/components/Layout";
import { PageHero, SectionHeading, FeatureCard } from "@/components/PageSections";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Code, Database, FileText, Globe, Shield, Cpu,
  ArrowRight, Monitor, Briefcase, Layers
} from "lucide-react";

export default function Index() {
  return (
    <Layout>
      {/* Hero */}
      <PageHero
        subtitle="Established 1997 · Princeton, NJ"
        title="Bridging Business Goals with Technology Solutions"
        description="DoubleBridge Technologies has over a quarter century of experience as a pioneer in providing global Life Sciences organizations with reliable business and technology solutions & services."
        cta={{ label: "Explore Our Services", to: "/services" }}
      />

      {/* What We Do */}
      <section className="py-20 md:py-28" style={{ background: "var(--section-gradient)" }}>
        <div className="container">
          <SectionHeading
            title="What We Do"
            subtitle="DoubleBridge Technologies closes the gap between the goals of your business and the technologies needed to get you there by bringing a broad perspective to deliver effective, creative solutions to your IT and software challenges."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <FeatureCard
              icon={<Code className="w-6 h-6" />}
              title="Software Development"
              description="Custom software solutions tailored to your Life Sciences business needs, from enterprise applications to specialized regulatory tools."
              link={{ label: "Learn More", to: "/services" }}
            />
            <FeatureCard
              icon={<Layers className="w-6 h-6" />}
              title="Application Integration"
              description="Seamless application customization and integration services to connect your existing systems and optimize workflows."
              link={{ label: "Learn More", to: "/services" }}
            />
            <FeatureCard
              icon={<FileText className="w-6 h-6" />}
              title="Document Management"
              description="Electronic document management systems designed for regulatory compliance and efficient content organization."
              link={{ label: "Learn More", to: "/services" }}
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6" />}
              title="Regulatory Information Management"
              description="Comprehensive regulatory information management solutions to ensure compliance across global markets."
              link={{ label: "Learn More", to: "/products" }}
            />
            <FeatureCard
              icon={<Database className="w-6 h-6" />}
              title="Data Migration"
              description="Reliable data migration services ensuring data integrity and minimal disruption to your operations."
              link={{ label: "Learn More", to: "/services" }}
            />
            <FeatureCard
              icon={<Cpu className="w-6 h-6" />}
              title="AI Solutions"
              description="Purpose-built AI solutions for Life Sciences validation, regulatory publishing, and test automation."
              link={{ label: "Learn More", to: "/ai-solutions" }}
            />
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            title="Our Products"
            subtitle="Industry-leading tools for regulatory submissions, document management, and AI-powered validation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "ROSETTA eCTD Viewer",
                desc: "Feature-rich, easy to use eCTD viewer for submissions and dossiers in Electronic Common Technical Document format. Supports all ICH and regional eCTD specifications since 2004.",
                path: "/products/ectd-viewer",
                icon: <Monitor className="w-6 h-6" />,
              },
              {
                title: "ROSETTA GnosisVault",
                desc: "Advanced document vault for Life Sciences regulatory content management, enabling secure storage and retrieval of critical regulatory documents.",
                path: "/products/gnosisvault",
                icon: <Database className="w-6 h-6" />,
              },
              {
                title: "ROSETTA Scribe",
                desc: "AI-assisted regulatory submission publishing. Compliant by design, ready for eCTD v4.0 with smart authoring, automated compiling, and one-click publishing.",
                path: "/products/scribe",
                icon: <FileText className="w-6 h-6" />,
              },
              {
                title: "AperioTest.AI",
                desc: "AI-assisted solution that generates test cases from system requirements and ready for human review within minutes. Purpose-built for GxP, 21 CFR Part 11, and IEC 62304 compliance.",
                path: "/products/aperiotest",
                icon: <Cpu className="w-6 h-6" />,
              },
            ].map((product, i) => (
              <motion.div
                key={product.path}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link
                  to={product.path}
                  className="group block bg-card border border-border p-8 rounded-sm shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-all hover:border-accent/30"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-accent/10 text-accent flex items-center justify-center rounded-sm shrink-0">
                      {product.icon}
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-accent transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed font-body">{product.desc}</p>
                      <span className="inline-flex items-center gap-1.5 mt-4 text-accent text-sm font-medium font-body">
                        Learn More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Global Presence, Local Expertise</h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed font-body mb-6">
                Our headquarters is located in Princeton, New Jersey, but our development centers span across the world. This global presence powers 24×7 around the clock delivery.
              </p>
              <p className="text-primary-foreground/80 text-lg leading-relaxed font-body">
                Our services have helped our major clients throughout the world achieve their goals faster and more cost-effectively.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "25+", label: "Years of Experience" },
                { value: "24/7", label: "Global Delivery" },
                { value: "F500", label: "Enterprise Clients" },
                { value: "100%", label: "Commitment" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="border border-primary-foreground/10 p-6 rounded-sm text-center"
                >
                  <div className="text-3xl font-heading font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-primary-foreground/60 font-body">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28" style={{ background: "var(--section-gradient)" }}>
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-5">Ready to Get Started?</h2>
          <p className="text-muted-foreground text-lg font-body mb-8 max-w-xl mx-auto">
            Let's discuss how DoubleBridge Technologies can help your organization achieve its technology goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-accent text-accent-foreground text-sm font-medium rounded-sm hover:opacity-90 transition-opacity font-body"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 border border-border text-foreground text-sm font-medium rounded-sm hover:bg-secondary transition-colors font-body"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
