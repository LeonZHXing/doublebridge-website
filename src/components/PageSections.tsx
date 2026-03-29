import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function PageHero({
  title,
  subtitle,
  description,
  cta,
}: {
  title: string;
  subtitle?: string;
  description?: string;
  cta?: { label: string; to: string };
}) {
  return (
    <section
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: "var(--hero-gradient)" }}
    >
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      }} />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          {subtitle && (
            <p className="text-accent-foreground/70 text-sm font-medium uppercase tracking-wider mb-4 font-body">
              {subtitle}
            </p>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-2xl font-body">
              {description}
            </p>
          )}
          {cta && (
            <Link
              to={cta.to}
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-accent text-accent-foreground text-sm font-medium rounded-sm hover:opacity-90 transition-opacity font-body"
            >
              {cta.label}
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl font-body leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function FeatureCard({
  icon,
  title,
  description,
  link,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  link?: { label: string; to: string };
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-card border border-border p-8 rounded-sm shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-shadow"
    >
      <div className="w-12 h-12 bg-accent/10 text-accent flex items-center justify-center rounded-sm mb-5">
        {icon}
      </div>
      <h3 className="font-heading font-semibold text-lg text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed font-body">{description}</p>
      {link && (
        <Link
          to={link.to}
          className="inline-flex items-center gap-1.5 mt-5 text-accent text-sm font-medium hover:underline font-body"
        >
          {link.label}
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      )}
    </motion.div>
  );
}
