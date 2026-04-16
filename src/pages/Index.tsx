import PageLayout from "@/components/PageLayout";
import HeroCarousel from "@/components/HeroCarousel";
import StatsSection from "@/components/StatsSection";
import OurStory from "@/components/OurStory";
import Testimonials from "@/components/Testimonials";

const Index = () => (
  <PageLayout>
    <HeroCarousel />
    <StatsSection />
    <OurStory />
    <Testimonials />
  </PageLayout>
);

export default Index;
