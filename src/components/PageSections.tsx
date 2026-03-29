import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function PageHero({
  title,
  subtitle,
  description,
  cta,
  children,
}: {
  title: string;
  subtitle?: string;
  description?: string;
  cta?: { label: string; to: string };
  children?: ReactNode;
}) {
  return (
    <section
      className="relative overflow-hidden py-28 md:py-36 lg:py-44"
      style={{ background: "var(--hero-gradient)" }}
    >
      {/* Mesh grid overlay */}
      <div className="absolute inset-0 hero-mesh" />
      {/* Radial glow */}
      <div className="absolute inset-0" style={{ background: "var(--hero-gradient-overlay)" }} />
      {/* Floating accent shapes */}
      <div className="absolute top-20 right-[10%] w-72 h-72 rounded-full opacity-[0.07]" style={{ background: "radial-gradient(circle, hsl(214 100% 60%), transparent 70%)" }} />
      <div className="absolute bottom-10 left-[5%] w-96 h-96 rounded-full opacity-[0.05]" style={{ background: "radial-gradient(circle, hsl(214 100% 50%), transparent 70%)" }} />
      
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {subtitle && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-accent-foreground/60 text-xs font-semibold uppercase tracking-[0.25em] mb-5 font-body"
            >
              {subtitle}
            </motion.p>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[3.5rem] font-heading font-bold text-primary-foreground leading-[1.1] mb-7 tracking-tight">
            {title}
          </h1>
          {description && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-primary-foreground/70 leading-relaxed max-w-2xl font-body font-light"
            >
              {description}
            </motion.p>
          )}
          {cta && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
            >
              <Link
                to={cta.to}
                className="group inline-flex items-center gap-2.5 mt-10 px-7 py-3.5 bg-accent text-accent-foreground text-sm font-semibold rounded-sm hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 font-body"
              >
                {cta.label}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  eyebrow,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
  eyebrow?: string;
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-14 ${centered ? "text-center" : ""}`}
    >
      {eyebrow && (
        <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-3 font-body">{eyebrow}</p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-bold text-foreground mb-5 leading-tight tracking-tight">{title}</h2>
      {subtitle && (
        <p className={`text-muted-foreground text-lg font-body leading-relaxed ${centered ? "max-w-2xl mx-auto" : "max-w-2xl"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="group relative bg-card border border-border p-8 rounded-sm shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-all duration-300 hover:border-accent/20 hover:-translate-y-0.5"
    >
      {/* Top accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      
      <div className="w-11 h-11 bg-accent/10 text-accent flex items-center justify-center rounded-sm mb-5">
        {icon}
      </div>
      <h3 className="font-heading font-semibold text-lg text-foreground mb-3 group-hover:text-accent transition-colors duration-200">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed font-body">{description}</p>
      {link && (
        <Link
          to={link.to}
          className="inline-flex items-center gap-1.5 mt-5 text-accent text-sm font-medium hover:gap-2.5 transition-all font-body"
        >
          {link.label}
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      )}
    </motion.div>
  );
}
