import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Leaf, Facebook, Instagram, Twitter } from "lucide-react";

const brandLinks = ["Mamaearth", "The Derma Co", "Aqualogica", "BBlunt", "Staze", "Dr. Sheth's"];
const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Contact Us", path: "/contact" },
  { label: "Careers", path: "#" },
  { label: "Press", path: "#" },
];
const legalLinks = ["Terms & Conditions", "Terms of Use", "Privacy Policy", "Refund Policy"];

const Footer = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-footer text-footer-text"
    >
      <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-5 h-5 text-primary" />
              <span className="font-display font-bold text-xl text-footer-text">Nyoraa</span>
            </div>
            <p className="text-footer-muted text-sm leading-relaxed mb-4">
              Science-backed beauty for every story.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="text-footer-muted hover:text-primary transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Our Brands */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-footer-text">Our Brands</h4>
            <ul className="space-y-2">
              {brandLinks.map((b) => (
                <li key={b}>
                  <a href="#" className="text-footer-muted text-sm hover:text-primary transition-colors">{b}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-footer-text">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.path} className="text-footer-muted text-sm hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-footer-text">Contact</h4>
            <ul className="space-y-2 text-footer-muted text-sm">
              <li>hi@nyoraa.com</li>
              <li>Gurugram, Haryana</li>
              <li>+91 124 000 0000</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-footer-text">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-footer-muted text-sm hover:text-primary transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-footer-muted/20">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <p className="text-center text-footer-muted text-xs">
            © 2024 Nyoraa Consumer Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
