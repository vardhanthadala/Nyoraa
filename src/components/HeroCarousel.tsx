import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroBrands from "@/assets/hero-brands.jpg";
import heroHair from "@/assets/hero-hairserum.jpg";
import heroSkincare from "@/assets/hero-skincare.jpg";
import heroNewdrops from "@/assets/hero-newdrops.jpg";

const slides = [
  {
    id: 1,
    type: "brands" as const,
    heading: "Our Brands",
    sub: "India's largest digital-first beauty company with 8 unique brands.",
    image: heroBrands,
    badges: ["Mamaearth", "The Derma Co", "Aqualogica", "BBlunt"],
  },
  {
    id: 2,
    type: "split-right" as const,
    image: heroSkincare,
    productName: "Detan Smoothie Face Wash",
    badge: "New Drop",
    badgeColor: "bg-primary text-primary-foreground",
    description:
      "Powered by Cherry Tomato & Papaya AHA — gently exfoliates, brightens, and deep cleanses for visibly radiant skin every morning.",
    cta: "Shop Now",
  },
  {
    id: 3,
    type: "split-left" as const,
    image: heroHair,
    productName: "BBlunt High Shine Serum",
    badge: "Bestseller",
    badgeColor: "bg-indigo-600 text-primary-foreground",
    description:
      "Salon-grade shine in every drop. Tames frizz, adds luminosity, and protects against heat damage for effortlessly styled hair.",
    cta: "Explore Now",
  },
  {
    id: 4,
    type: "split-right" as const,
    image: heroSkincare,
    productName: "The Derma Co 2% Salicylic Acid Serum",
    badge: "Dermatologist Tested",
    badgeColor: "bg-teal-600 text-primary-foreground",
    description:
      "Clinically proven formula to unclog pores, fight acne, and reveal clearer skin — dermatologist tested for all skin types.",
    cta: "Shop Now",
  },
  {
    id: 5,
    type: "dark" as const,
    heading: "NEW DROPS. NEXT-LEVEL RESULTS",
    image: heroNewdrops,
    cta: "View Collection",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [isPaused, next]);

  const slide = slides[current];

  return (
    <section
      className="relative w-full h-[280px] sm:h-[360px] md:h-[480px] lg:h-[580px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          {slide.type === "brands" && <BrandsSlide slide={slide} />}
          {slide.type === "split-right" && <SplitSlide slide={slide} imageLeft />}
          {slide.type === "split-left" && <SplitSlide slide={slide} imageLeft={false} />}
          {slide.type === "dark" && <DarkSlide slide={slide} />}
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background-pure/80 backdrop-blur flex items-center justify-center shadow-md hover:bg-background-pure transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 text-foreground" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background-pure/80 backdrop-blur flex items-center justify-center shadow-md hover:bg-background-pure transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 text-foreground" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current ? "bg-primary w-6" : "bg-foreground/20"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

const BrandsSlide = ({ slide }: { slide: (typeof slides)[0] }) => (
  <div className="relative w-full h-full bg-background-pure flex items-center justify-center overflow-hidden">
    <div className="absolute top-10 right-10 w-60 h-60 rounded-full bg-highlight/30 blur-3xl" />
    <div className="container mx-auto px-4 flex flex-col items-center text-center gap-4 md:gap-6 z-10">
      <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground">
        {slide.heading}
      </h1>
      <p className="text-muted-foreground text-sm md:text-base max-w-lg">{slide.sub}</p>
      <img
        src={slide.image}
        alt="Our brands"
        className="w-full max-w-xl h-auto object-contain animate-float"
        width={1200}
        height={700}
        decoding="async"
      />
      <div className="flex flex-wrap gap-2 justify-center">
        {slide.badges?.map((b) => (
          <span key={b} className="px-3 py-1 rounded-full bg-highlight text-highlight-foreground text-xs font-medium">
            {b}
          </span>
        ))}
      </div>
    </div>
  </div>
);

interface SplitSlideProps {
  slide: (typeof slides)[number];
  imageLeft: boolean;
}

const SplitSlide = ({ slide, imageLeft }: SplitSlideProps) => (
  <div className={`w-full h-full flex flex-col ${imageLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
    <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
      <img
        src={slide.image}
        alt={slide.productName || "Product"}
        className="w-full h-full object-cover"
        width={800}
        height={900}
        decoding="async"
      />
    </div>
    <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center bg-background-pure">
      <div className="px-6 md:px-10 lg:px-16 py-4 md:py-0 space-y-3 md:space-y-4">
        {"badge" in slide && slide.badge && (
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${slide.badgeColor}`}>
            {slide.badge}
          </span>
        )}
        <h2 className="font-display font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground">
          {slide.productName}
        </h2>
        <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed line-clamp-3 md:line-clamp-none">
          {slide.description}
        </p>
        <motion.button
          whileHover={{ scale: 1.03 }}
          className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          {slide.cta}
        </motion.button>
      </div>
    </div>
  </div>
);

const DarkSlide = ({ slide }: { slide: (typeof slides)[number] }) => (
  <div className="relative w-full h-full">
    <img
      src={slide.image}
      alt="New drops"
      className="w-full h-full object-cover"
      width={1200}
      height={700}
      decoding="async"
    />
    <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
      <div className="text-center space-y-4 md:space-y-6 px-4">
        <div className="absolute top-4 right-4 md:top-8 md:right-8 w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-background-pure flex items-center justify-center">
          <span className="text-background-pure text-[9px] md:text-xs font-bold text-center leading-tight">
            Freshly<br />Dropped
          </span>
        </div>
        <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-background-pure">
          {slide.heading}
        </h2>
        <motion.button
          whileHover={{ scale: 1.03 }}
          className="px-6 py-2.5 rounded-full bg-background-pure text-foreground text-sm font-medium hover:bg-background transition-colors"
        >
          {slide.cta}
        </motion.button>
      </div>
    </div>
  </div>
);

export default HeroCarousel;
