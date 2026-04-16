import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Trophy, Grid3X3, MapPin, Heart } from "lucide-react";

const stats = [
  {
    icon: Trophy,
    text: "Largest Digital-First BPC Company In India",
  },
  {
    icon: Grid3X3,
    text: "8 Unique Brands Across Beauty And Personal Care",
  },
  {
    icon: MapPin,
    text: "Omni-Channel Presence Across 750+ Districts",
  },
  {
    icon: Heart,
    text: "Strong Commitment Towards People And Planet",
  },
];

const StatsSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-xl p-6 border-t-2 border-primary shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-shadow duration-300 text-center h-full"
            >
              <div className="w-12 h-12 rounded-full bg-highlight flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm font-bold text-foreground leading-snug">{stat.text}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
