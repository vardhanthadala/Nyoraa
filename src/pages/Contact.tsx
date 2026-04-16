import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Facebook, Instagram, Twitter } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import contactImg from "@/assets/contact-women.jpg";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <PageLayout>
      <section ref={ref} className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-stretch">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="hidden md:block"
            >
              <img
                src={contactImg}
                alt="Contact us"
                className="w-full h-full object-cover rounded-xl"
                loading="lazy"
                decoding="async"
                width={700}
                height={900}
              />
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col justify-center space-y-8"
            >
              <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground">
                Contact Us
              </h1>

              <div className="space-y-6">
                <div>
                  <label className="block text-xs text-muted-foreground mb-1 uppercase tracking-wider">Full Name</label>
                  <input
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-border py-2 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs text-muted-foreground mb-1 uppercase tracking-wider">E-mail</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-border py-2 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs text-muted-foreground mb-1 uppercase tracking-wider">Message</label>
                  <textarea
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-border py-2 text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="How can we help?"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  className="w-full sm:w-auto px-8 py-3 rounded-full bg-foreground text-background-pure text-sm font-medium hover:bg-foreground/80 transition-colors"
                >
                  Contact Us
                </motion.button>
              </div>

              {/* Info */}
              <div className="space-y-4 pt-4 border-t border-border">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Contact</p>
                  <p className="text-sm text-foreground">hi@honasa.com</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Based in</p>
                  <p className="text-sm text-foreground">Gurugram, Haryana</p>
                </div>
                <div className="flex gap-3 pt-2">
                  {[Facebook, Instagram, Twitter].map((Icon, i) => (
                    <a key={i} href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ContactPage;
