import AnimatedSection from "./AnimatedSection";
import { Star } from "lucide-react";

const testimonials = [
  { quote: "Mamaearth's Vitamin C serum literally transformed my skin in 3 weeks. The glow is unreal!", name: "Priya S.", location: "Mumbai", initials: "PS", bg: "bg-rose-200" },
  { quote: "BBlunt serum is the only thing that controls my frizz in the Chennai humidity.", name: "Ravi K.", location: "Chennai", initials: "RK", bg: "bg-sky-200" },
  { quote: "Dr. Sheth's Ceramide sunscreen is so lightweight. I've repurchased it 4 times!", name: "Ananya M.", location: "Bangalore", initials: "AM", bg: "bg-amber-200" },
  { quote: "Aqualogica moisturizer is perfect for oily skin. No white cast, no breakouts.", name: "Sneha R.", location: "Delhi", initials: "SR", bg: "bg-emerald-200" },
  { quote: "Staze 9 to 9 lipstick actually lasts all day. Finally a desi brand that delivers!", name: "Fatima A.", location: "Hyderabad", initials: "FA", bg: "bg-violet-200" },
  { quote: "Derma Co serum cleared my hormonal acne in a month. I'm obsessed.", name: "Meera T.", location: "Pune", initials: "MT", bg: "bg-pink-200" },
  { quote: "The Onion Hair Oil from Mamaearth reduced my hair fall drastically in 2 months.", name: "Arjun P.", location: "Kolkata", initials: "AP", bg: "bg-teal-200" },
  { quote: "Aqualogica's sunscreen gel is my holy grail for summer. Super light and no residue!", name: "Kavya N.", location: "Jaipur", initials: "KN", bg: "bg-orange-200" },
];

const TestimonialCard = ({ t }: { t: (typeof testimonials)[0] }) => (
  <div className="flex-shrink-0 w-[280px] bg-card border border-border rounded-2xl p-5 mx-2 hover:-translate-y-2 hover:shadow-[var(--card-shadow-hover)] transition-all duration-300">
    <div className={`w-12 h-12 rounded-full ${t.bg} flex items-center justify-center mx-auto mb-3`}>
      <span className="text-sm font-bold text-foreground/70">{t.initials}</span>
    </div>
    <div className="flex justify-center gap-0.5 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
      ))}
    </div>
    <p className="text-muted-foreground text-xs italic leading-relaxed mb-3 text-center">"{t.quote}"</p>
    <p className="text-sm font-bold text-foreground text-center">{t.name}</p>
    <p className="text-xs text-muted-foreground text-center">{t.location}</p>
  </div>
);

const row1 = testimonials;
const row2 = [...testimonials].reverse();

const Testimonials = () => (
  <section className="py-16 md:py-24 bg-background overflow-hidden">
    <AnimatedSection className="container mx-auto px-4 mb-10">
      <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground text-center">
        What Our Customers Say
      </h2>
    </AnimatedSection>

    <div className="space-y-4 pause-on-hover">
      {/* Row 1 - left */}
      <div className="flex animate-marquee-left" style={{ width: "max-content" }}>
        {[...row1, ...row1].map((t, i) => (
          <TestimonialCard key={`r1-${i}`} t={t} />
        ))}
      </div>
      {/* Row 2 - right */}
      <div className="flex animate-marquee-right" style={{ width: "max-content" }}>
        {[...row2, ...row2].map((t, i) => (
          <TestimonialCard key={`r2-${i}`} t={t} />
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
