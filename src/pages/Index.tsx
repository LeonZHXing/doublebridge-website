import { usePageTitle } from "@/hooks/use-page-title";
import Layout from "@/components/Layout";
import { PageHero, SectionHeading, FeatureCard } from "@/components/PageSections";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Code, Database, FileText, Globe, Shield, Cpu,
  ArrowRight, Monitor, Briefcase, Layers, ArrowUpRight
} from "lucide-react";

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function Index() {
  usePageTitle();
  return (
    <Layout>
      {/* Hero */}
      <PageHero
        subtitle="Established 1997 · Princeton, NJ"
        title="Bridging Business Goals with Technology Solutions"
        description="DoubleBridge Technologies has over a quarter century of experience as a pioneer in providing global Life Sciences organizations with reliable business and technology solutions & services."
        cta={{ label: "Explore Our Services", to: "/services" }}
      />

      {/* 4-column feature cards — Gartner style */}
      <section className="border-b border-border bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-primary-foreground/10">
            {[
              {
                title: "Life Sciences Expertise",
                desc: "25+ years serving pharma, biotech, and medical device organizations worldwide.",
                linkLabel: "Our Services",
                to: "/services",
              },
              {
                title: "ROSETTA Product Suite",
                desc: "Industry-leading tools for eCTD submissions, regulatory publishing, and document management.",
                linkLabel: "View Products",
                to: "/products",
              },
              {
                title: "AI-Powered Solutions",
                desc: "Purpose-built AI for validation, test automation, and regulatory compliance.",
                linkLabel: "Explore AI",
                to: "/ai-solutions",
              },
              {
                title: "Global Delivery",
                desc: "Princeton headquarters with global development centers for 24/7 around-the-clock delivery.",
                linkLabel: "Learn More",
                to: "/about",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="p-8 lg:p-10"
              >
                <h3 className="font-heading font-bold text-[15px] mb-3 inline-block bg-primary-foreground/10 px-3 py-1.5 rounded-sm">
                  {card.title}
                </h3>
                <p className="text-primary-foreground/65 text-sm leading-relaxed font-body mb-6">
                  {card.desc}
                </p>
                <Link
                  to={card.to}
                  className="inline-flex items-center gap-2 text-accent text-sm font-semibold hover:gap-3 transition-all font-body"
                  style={{ color: "hsl(214 100% 70%)" }}
                >
                  {card.linkLabel}
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 md:py-28" style={{ background: "var(--section-gradient)" }}>
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-2"
          >
            {[
              { icon: <Code className="w-5 h-5" />, title: "Software Development", description: "Custom software solutions tailored to your Life Sciences business needs, from enterprise applications to specialized regulatory tools.", to: "/services" },
              { icon: <Layers className="w-5 h-5" />, title: "Application Integration", description: "Seamless application customization and integration services to connect your existing systems and optimize workflows.", to: "/services" },
              { icon: <FileText className="w-5 h-5" />, title: "Document Management", description: "Electronic document management systems designed for regulatory compliance and efficient content organization.", to: "/services" },
              { icon: <Shield className="w-5 h-5" />, title: "Regulatory Information Mgmt", description: "Comprehensive regulatory information management solutions to ensure compliance across global markets.", to: "/products" },
              { icon: <Database className="w-5 h-5" />, title: "Data Migration", description: "Reliable data migration services ensuring data integrity and minimal disruption to your operations.", to: "/services" },
              { icon: <Cpu className="w-5 h-5" />, title: "AI Solutions", description: "Purpose-built AI solutions for Life Sciences validation, regulatory publishing, and test automation.", to: "/ai-solutions" },
            ].map((item) => (
              <motion.div key={item.title} variants={staggerItem} className="h-full">
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

      {/* Products — two-column with accent bars */}
      <section className="py-20 md:py-28 bg-card">
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
              },
              {
                title: "ROSETTA GnosisVault",
                desc: "Advanced document vault for Life Sciences regulatory content management, enabling secure storage and retrieval of critical regulatory documents.",
                path: "/products/gnosisvault",
                icon: <Database className="w-5 h-5" />,
              },
              {
                title: "ROSETTA Scribe",
                desc: "AI-assisted regulatory submission publishing. Compliant by design, ready for eCTD v4.0 with smart authoring, automated compiling, and one-click publishing.",
                path: "/products/scribe",
                icon: <FileText className="w-5 h-5" />,
              },
              {
                title: "AperioTest.AI",
                desc: "AI-assisted solution that generates test cases from system requirements and ready for human review within minutes. Purpose-built for GxP, 21 CFR Part 11, and IEC 62304 compliance.",
                path: "/products/aperiotest",
                icon: <Cpu className="w-5 h-5" />,
              },
            ].map((product, i) => (
              <motion.div
                key={product.path}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Link
                  to={product.path}
                  className="group relative flex items-start gap-5 bg-background border border-border p-7 rounded-sm shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-all duration-300 overflow-hidden"
                >
                  {/* Left accent bar */}
                  <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-accent opacity-60 group-hover:opacity-100 transition-opacity" />
                  <div className="w-10 h-10 flex items-center justify-center rounded-sm shrink-0 mt-0.5 bg-accent/10 text-accent">
                    {product.icon}
                  </div>
                  <div className="pl-1">
                    <h3 className="font-heading font-semibold text-base text-foreground mb-2 group-hover:text-accent transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-body">{product.desc}</p>
                    <span className="inline-flex items-center gap-1.5 mt-4 text-accent text-sm font-medium font-body">
                      Learn More <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence — Gartner style split layout */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
        <div className="absolute inset-0 hero-mesh" />
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-4 font-body" style={{ color: "hsl(214 100% 70%)" }}>
                Global Reach
              </p>
              <div className="flex gap-5">
                <div className="w-[3px] bg-accent shrink-0 rounded-full hidden md:block" />
                <div>
                  <h2 className="text-2xl md:text-3xl lg:text-[2.25rem] font-heading font-bold mb-6 text-primary-foreground leading-tight tracking-tight">
                    Global Presence,<br />Local Expertise
                  </h2>
                  <p className="text-primary-foreground/65 text-base leading-relaxed font-body mb-4">
                    Our headquarters is located in Princeton, New Jersey, but our development centers span across the world. This global presence powers 24×7 around the clock delivery.
                  </p>
                  <p className="text-primary-foreground/65 text-base leading-relaxed font-body">
                    Our services have helped our major clients throughout the world achieve their goals faster and more cost-effectively.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-2 gap-4"
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
                  transition={{ delay: 0.15 + i * 0.06 }}
                  className="border border-primary-foreground/10 bg-primary-foreground/[0.03] p-6 rounded-sm text-center hover:border-primary-foreground/20 transition-colors"
                >
                  <div className="text-2xl md:text-3xl font-heading font-bold mb-1.5 stat-glow text-primary-foreground">{stat.value}</div>
                  <div className="text-[11px] uppercase tracking-wider text-primary-foreground/45 font-body font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28" style={{ background: "var(--section-gradient)" }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4 tracking-tight">Ready to Get Started?</h2>
            <p className="text-muted-foreground text-base font-body mb-8 max-w-xl mx-auto">
              Let's discuss how DoubleBridge Technologies can help your organization achieve its technology goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3 bg-accent text-accent-foreground text-sm font-semibold rounded-sm hover:shadow-lg hover:shadow-accent/15 transition-all duration-300 font-body"
              >
                Contact Us <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 border border-border text-foreground text-sm font-semibold rounded-sm hover:bg-secondary transition-colors font-body"
              >
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
