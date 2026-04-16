import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import foundersImg from "@/assets/founders.jpg";

const OurStory = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-accent">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full md:w-1/2"
          >
            <img
              src={foundersImg}
              alt="Honasa founders"
              className="w-full h-auto rounded-2xl rotate-1 shadow-[var(--card-shadow-hover)] object-cover"
              loading="lazy"
              decoding="async"
              width={800}
              height={1000}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="w-full md:w-1/2 space-y-4 md:space-y-6"
          >
            <span className="text-primary uppercase tracking-widest text-xs font-semibold">
              EST. 2016
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
              Our Story
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Born from a vision to build science-backed, consumer-first beauty brands for the modern Indian, Honasa Consumer Ltd. started with Mamaearth — and never stopped. Today, we are India's largest digital-first BPC company with 8 brands, trusted by millions across 750+ districts. We believe beauty should be honest, effective, and sustainable.
            </p>
            <a href="/about" className="inline-block text-primary font-medium text-sm hover:underline">
              Read Our Full Story →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
