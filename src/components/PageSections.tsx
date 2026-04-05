import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";

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
      className="relative overflow-hidden py-24 md:py-32 lg:py-40"
      style={{ background: "var(--hero-gradient)" }}
    >
      {/* Mesh grid overlay */}
      <div className="absolute inset-0 hero-mesh" />
      {/* Radial glow */}
      <div className="absolute inset-0" style={{ background: "var(--hero-gradient-overlay)" }} />
      
      {/* Abstract line art decoration on right */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block pointer-events-none overflow-hidden">
        <svg viewBox="0 0 500 500" className="absolute right-[-50px] top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.08]">
          <path d="M100,400 Q200,100 400,200 T500,100" fill="none" stroke="hsl(214 100% 70%)" strokeWidth="1.5" />
          <path d="M50,350 Q250,50 450,250" fill="none" stroke="hsl(214 100% 60%)" strokeWidth="1" />
          <circle cx="400" cy="200" r="4" fill="hsl(214 100% 70%)" />
          <circle cx="250" cy="150" r="3" fill="hsl(214 100% 60%)" />
          <circle cx="350" cy="300" r="3" fill="hsl(214 100% 50%)" />
          <path d="M150,450 Q300,150 450,350" fill="none" stroke="hsl(214 100% 55%)" strokeWidth="0.8" strokeDasharray="4 6" />
        </svg>
      </div>
      
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          {subtitle && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-primary-foreground/50 text-xs font-semibold uppercase tracking-[0.2em] mb-5 font-body"
            >
              {subtitle}
            </motion.p>
          )}
          {/* Left accent bar like Gartner */}
          <div className="flex gap-5">
            <div className="w-[3px] bg-accent shrink-0 rounded-full hidden md:block" />
            <div>
              <h1 className="text-3xl md:text-[2.75rem] lg:text-[3.25rem] font-heading font-bold text-primary-foreground leading-[1.15] mb-6 tracking-tight">
                {title}
              </h1>
              {description && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-base md:text-lg text-primary-foreground/65 leading-relaxed max-w-xl font-body"
                >
                  {description}
                </motion.p>
              )}
            </div>
          </div>
          {cta && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="md:pl-8"
            >
              <Link
                to={cta.to}
                className="group inline-flex items-center gap-2 mt-8 text-accent text-[15px] font-semibold hover:gap-3 transition-all duration-300 font-body"
              >
                {cta.label}
                <ArrowUpRight className="w-4 h-4" />
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
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      {eyebrow && (
        <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-3 font-body">{eyebrow}</p>
      )}
      <h2 className="text-2xl md:text-3xl lg:text-[2.25rem] font-heading font-bold text-foreground mb-4 leading-tight tracking-tight">{title}</h2>
      {subtitle && (
        <p className={`text-muted-foreground text-base font-body leading-relaxed ${centered ? "max-w-2xl mx-auto" : "max-w-2xl"}`}>
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
      className="group relative h-full flex flex-col bg-card border border-border p-7 rounded-sm shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-all duration-300 hover:border-accent/20"
    >
      {/* Top accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      
      <div className="w-10 h-10 bg-accent/10 text-accent flex items-center justify-center rounded-sm mb-4">
        {icon}
      </div>
      <h3 className="font-heading font-semibold text-base text-foreground mb-2 group-hover:text-accent transition-colors duration-200">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed font-body flex-1">{description}</p>
      {link && (
        <Link
          to={link.to}
          className="inline-flex items-center gap-1.5 mt-4 text-accent text-sm font-medium hover:gap-2.5 transition-all font-body"
        >
          {link.label}
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      )}
    </motion.div>
  );
}
