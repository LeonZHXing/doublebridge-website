import { usePageTitle } from "@/hooks/use-page-title";
import { PageHero } from "@/components/PageSections";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  usePageTitle("Contact");
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:info@doublebridge.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
  };

  return (
    <>
      <PageHero
        subtitle="Contact Us"
        title="Let's Start a Conversation"
        description="Get in touch with our team to learn how DoubleBridge Technologies can support your business."
      />

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-8">Get in Touch</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
                    Email Addresses
                  </h3>
                  <div className="space-y-3">
                    {[
                      { label: "General", email: "info@doublebridge.com" },
                      { label: "Sales", email: "sales@doublebridge.com" },
                      { label: "Employment", email: "hr@doublebridge.com" },
                    ].map((item) => (
                      <div key={item.email} className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-accent shrink-0" />
                        <div>
                          <span className="text-xs text-muted-foreground font-body block">{item.label}</span>
                          <a href={`mailto:${item.email}`} className="text-sm text-foreground hover:text-accent transition-colors font-body font-medium">
                            {item.email}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
                    Headquarters
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <div className="text-sm font-body text-foreground">
                        <strong>DoubleBridge Technologies, Inc.</strong><br />
                        5 Independence Way<br />
                        Suite 310<br />
                        Princeton, NJ 08540<br />
                        USA
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-accent shrink-0" />
                      <div className="text-sm font-body text-foreground">
                        Tel: (609) 716-9001<br />
                        Fax: (609) 716-9002
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-card border border-border rounded-sm p-8 shadow-[var(--card-shadow)] space-y-5"
              >
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">Send Us a Message</h3>
                {[
                  { key: "name", label: "Your Name", type: "text" },
                  { key: "email", label: "Email Address", type: "email" },
                  { key: "subject", label: "Subject", type: "text" },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5 font-body">{field.label}</label>
                    <input
                      type={field.type}
                      required
                      value={formData[field.key as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                      className="w-full px-4 py-2.5 bg-background border border-input rounded-sm text-sm font-body text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5 font-body">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-background border border-input rounded-sm text-sm font-body text-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground text-sm font-medium rounded-sm hover:opacity-90 transition-opacity font-body w-full justify-center"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>);
}
