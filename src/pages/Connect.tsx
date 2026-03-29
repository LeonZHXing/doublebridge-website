import Layout from "@/components/Layout";
import { PageHero } from "@/components/PageSections";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Youtube, Facebook, ExternalLink } from "lucide-react";

const socials = [
  {
    name: "LinkedIn",
    url: "http://www.linkedin.com/company/392512",
    icon: <Linkedin className="w-7 h-7" />,
    desc: "Connect with us professionally and stay updated on company news.",
  },
  {
    name: "Twitter",
    url: "http://twitter.com/doublebridgetec",
    icon: <Twitter className="w-7 h-7" />,
    desc: "Follow us for the latest updates and industry insights.",
  },
  {
    name: "YouTube",
    url: "http://www.youtube.com/user/DoubleBridgeTec",
    icon: <Youtube className="w-7 h-7" />,
    desc: "Watch product demos and company presentations.",
  },
  {
    name: "Facebook",
    url: "http://www.facebook.com/home.php#!/pages/DoubleBridge-Technologies/193420894016078",
    icon: <Facebook className="w-7 h-7" />,
    desc: "Join our community and engage with our team.",
  },
];

export default function Connect() {
  return (
    <Layout>
      <PageHero
        subtitle="Connect"
        title="Connect With Us"
        description="Here at DoubleBridge Technologies, we love being a part of the social networking world. We enjoy using social media to stay connected with our customers, colleagues, and community."
      />

      <section className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {socials.map((social, i) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-card border border-border rounded-sm p-8 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] hover:border-accent/30 transition-all"
              >
                <div className="w-14 h-14 bg-accent/10 text-accent flex items-center justify-center rounded-sm mb-5 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  {social.icon}
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2 flex items-center gap-2">
                  {social.name}
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
                </h3>
                <p className="text-sm text-muted-foreground font-body">{social.desc}</p>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-sm p-10 shadow-[var(--card-shadow)]"
          >
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Why Social Networking?</h2>
            <p className="text-muted-foreground leading-relaxed font-body mb-4">
              By utilizing social networking sites, your business will immediately increase backlinks resulting in greater search engine visibility and website traffic. In addition, it helps enhance your company's web presence by providing a strong, cohesive corporate image to a much wider audience.
            </p>
            <p className="text-muted-foreground leading-relaxed font-body mb-6">
              We also love helping our customers take advantage of what Web 2.0 has to offer. Does your company need help using social networking sites to connect with potential customers and targeted online communities?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground text-sm font-medium rounded-sm hover:opacity-90 transition-opacity font-body"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
