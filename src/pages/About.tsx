import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Leaf, ChevronDown, Eye, Telescope, ArrowUp, Target, Users } from "lucide-react";

const AboutPage = () => (
  <PageLayout>
    <AboutHero />
    <ValuesSection />
    <MissionVision />
  </PageLayout>
);

const AboutHero = () => (
  <section className="relative w-full h-[280px] md:h-[400px] bg-gradient-to-br from-[hsl(153,55%,14%)] to-primary flex flex-col items-center justify-center text-center px-4">
    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-background-pure/10 backdrop-blur-sm flex items-center justify-center mb-6">
      <Leaf className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground" />
    </div>
    <p className="font-display italic text-primary-foreground/90 text-base md:text-xl max-w-lg leading-relaxed">
      "Science-backed beauty for every skin, every story."
    </p>
    <ChevronDown className="w-6 h-6 text-primary-foreground/60 mt-8 animate-bounce-chevron" />
  </section>
);

const values = [
  {
    title: "DO MORE",
    subtitle: "WITH LESS",
    icon: ArrowUp,
    caption: "Think creatively. Drive impact without over-relying on resources.",
  },
  {
    title: "ACT",
    subtitle: "NOW",
    icon: Target,
    caption: "Speed is a superpower.",
  },
  {
    title: "OBSESS OVER",
    subtitle: "CONSUMER",
    icon: Users,
    caption: "Be their voice in every decision.",
  },
];

const ValuesSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <AnimatedSection className="text-center mb-12">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">Our Values</h2>
      </AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {values.map((v, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-card border-[1.5px] border-sky-300 rounded-xl p-6 text-center h-full hover:border-sky-600 transition-all duration-300 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)]"
            >
              <h3 className="text-primary font-bold text-xl md:text-2xl uppercase">{v.title}</h3>
              <p className="text-primary font-bold text-lg uppercase mb-6">{v.subtitle}</p>
              <div className="w-20 h-20 rounded-full bg-highlight flex items-center justify-center mx-auto mb-6">
                <v.icon className="w-8 h-8 text-primary" />
              </div>
              <p className="text-muted-foreground text-sm italic">{v.caption}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

const MissionVision = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-accent">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-highlight/40 rounded-2xl p-8 md:p-10"
          >
            <Eye className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-display font-bold text-2xl text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              To create honest, safe, and effective beauty products that serve every Indian consumer — from metros to tier-3 towns — with transparency and care.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-sky-100 rounded-2xl p-8 md:p-10"
          >
            <Telescope className="w-8 h-8 text-sky-600 mb-4" />
            <h3 className="font-display font-bold text-2xl text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              To be the most loved consumer-first beauty company in India, built on the pillars of innovation, sustainability, and trust.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
