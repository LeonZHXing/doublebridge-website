import Layout from "@/components/Layout";
import { PageHero, SectionHeading, FeatureCard } from "@/components/PageSections";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Code, Database, FileText, Globe, Shield, Cpu,
  ArrowRight, Monitor, Briefcase, Layers, ChevronRight
} from "lucide-react";

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

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

      {/* Trust bar */}
      <section className="border-b border-border bg-card">
        <div className="container py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {["Life Sciences", "Pharmaceutical", "Biotech", "Medical Devices", "Regulatory Affairs"].map((label) => (
              <span key={label} className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground/60 font-body">
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 md:py-32" style={{ background: "var(--section-gradient)" }}>
        <div className="container">
          <SectionHeading
            eyebrow="Our Capabilities"
            title="What We Do"
            subtitle="DoubleBridge Technologies closes the gap between the goals of your business and the technologies needed to get you there by bringing a broad perspective to deliver effective, creative solutions to your IT and software challenges."
          />

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4"
          >
            {[
              { icon: <Code className="w-5 h-5" />, title: "Software Development", description: "Custom software solutions tailored to your Life Sciences business needs, from enterprise applications to specialized regulatory tools.", to: "/services" },
              { icon: <Layers className="w-5 h-5" />, title: "Application Integration", description: "Seamless application customization and integration services to connect your existing systems and optimize workflows.", to: "/services" },
              { icon: <FileText className="w-5 h-5" />, title: "Document Management", description: "Electronic document management systems designed for regulatory compliance and efficient content organization.", to: "/services" },
              { icon: <Shield className="w-5 h-5" />, title: "Regulatory Information Mgmt", description: "Comprehensive regulatory information management solutions to ensure compliance across global markets.", to: "/products" },
              { icon: <Database className="w-5 h-5" />, title: "Data Migration", description: "Reliable data migration services ensuring data integrity and minimal disruption to your operations.", to: "/services" },
              { icon: <Cpu className="w-5 h-5" />, title: "AI Solutions", description: "Purpose-built AI solutions for Life Sciences validation, regulatory publishing, and test automation.", to: "/ai-solutions" },
            ].map((item) => (
              <motion.div key={item.title} variants={staggerItem}>
                <FeatureCard
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  link={{ label: "Learn More", to: item.to }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-24 md:py-32">
        <div className="container">
          <SectionHeading
            eyebrow="Product Suite"
            title="Our Products"
            subtitle="Industry-leading tools for regulatory submissions, document management, and AI-powered validation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: "ROSETTA eCTD Viewer",
                desc: "Feature-rich, easy to use eCTD viewer for submissions and dossiers in Electronic Common Technical Document format. Supports all ICH and regional eCTD specifications since 2004.",
                path: "/products/ectd-viewer",
                icon: <Monitor className="w-5 h-5" />,
                accent: "214 100% 44%",
              },
              {
                title: "ROSETTA GnosisVault",
                desc: "Advanced document vault for Life Sciences regulatory content management, enabling secure storage and retrieval of critical regulatory documents.",
                path: "/products/gnosisvault",
                icon: <Database className="w-5 h-5" />,
                accent: "222 68% 28%",
              },
              {
                title: "ROSETTA Scribe",
                desc: "AI-assisted regulatory submission publishing. Compliant by design, ready for eCTD v4.0 with smart authoring, automated compiling, and one-click publishing.",
                path: "/products/scribe",
                icon: <FileText className="w-5 h-5" />,
                accent: "200 80% 40%",
              },
              {
                title: "AperioTest.AI",
                desc: "AI-assisted solution that generates test cases from system requirements and ready for human review within minutes. Purpose-built for GxP, 21 CFR Part 11, and IEC 62304 compliance.",
                path: "/products/aperiotest",
                icon: <Cpu className="w-5 h-5" />,
                accent: "250 60% 50%",
              },
            ].map((product, i) => (
              <motion.div
                key={product.path}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <Link
                  to={product.path}
                  className="group relative block bg-card border border-border p-8 rounded-sm shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
                >
                  {/* Left accent bar */}
                  <div 
                    className="absolute top-0 left-0 bottom-0 w-[3px] transition-all duration-300 group-hover:w-1"
                    style={{ background: `hsl(${product.accent})`, opacity: 0.6 }}
                  />
                  <div className="flex items-start gap-5 pl-3">
                    <div className="w-11 h-11 flex items-center justify-center rounded-sm shrink-0 mt-0.5"
                      style={{ background: `hsl(${product.accent} / 0.1)`, color: `hsl(${product.accent})` }}>
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
      <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
        <div className="absolute inset-0 hero-mesh" />
        <div className="absolute inset-0" style={{ background: "var(--hero-gradient-overlay)" }} />
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-4 font-body" style={{ color: "hsl(214 100% 70%)" }}>
                Global Reach
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-bold mb-7 text-primary-foreground leading-tight tracking-tight">
                Global Presence,<br />Local Expertise
              </h2>
              <p className="text-primary-foreground/70 text-lg leading-relaxed font-body mb-5 font-light">
                Our headquarters is located in Princeton, New Jersey, but our development centers span across the world. This global presence powers 24×7 around the clock delivery.
              </p>
              <p className="text-primary-foreground/70 text-lg leading-relaxed font-body font-light">
                Our services have helped our major clients throughout the world achieve their goals faster and more cost-effectively.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-2 gap-5"
            >
              {[
                { value: "25+", label: "Years of Experience" },
                { value: "24/7", label: "Global Delivery" },
                { value: "F500", label: "Enterprise Clients" },
                { value: "100%", label: "Commitment" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                  className="border border-primary-foreground/10 bg-primary-foreground/[0.03] p-7 rounded-sm text-center hover:border-primary-foreground/20 transition-colors"
                >
                  <div className="text-3xl md:text-4xl font-heading font-bold mb-2 stat-glow text-primary-foreground">{stat.value}</div>
                  <div className="text-xs uppercase tracking-wider text-primary-foreground/50 font-body font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32" style={{ background: "var(--section-gradient)" }}>
        <div className="container">
          <div className="relative bg-card border border-border rounded-sm p-12 md:p-16 text-center shadow-[var(--card-shadow-elevated)] overflow-hidden">
            {/* Subtle decorative corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-accent/20 rounded-tl-sm" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-accent/20 rounded-br-sm" />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-5 tracking-tight">Ready to Get Started?</h2>
              <p className="text-muted-foreground text-lg font-body mb-9 max-w-xl mx-auto">
                Let's discuss how DoubleBridge Technologies can help your organization achieve its technology goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent text-accent-foreground text-sm font-semibold rounded-sm hover:shadow-lg hover:shadow-accent/15 transition-all duration-300 font-body"
                >
                  Contact Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-border text-foreground text-sm font-semibold rounded-sm hover:bg-secondary transition-colors font-body"
                >
                  Learn About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
