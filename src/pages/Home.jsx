import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import AboutSection from '../components/AboutSection';
import FeaturedPrograms from '../components/FeaturedPrograms';
import TestimonialsSection from '../components/TestimonialsSection';
import AcceleratorSection from '../components/AcceleratorSection';
import ToolkitsSection from '../components/ToolkitsSection';
import StrategySection from '../components/StrategySection';
import ConsultingSection from '../components/ConsultingSection';
import CommunitySection from '../components/CommunitySection';
import FinalCTA from '../components/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <AboutSection />
      <FeaturedPrograms />
      <TestimonialsSection />
      <AcceleratorSection />
      <ToolkitsSection />
      <StrategySection />
      <ConsultingSection />
      <CommunitySection />
      <FinalCTA />
    </>
  );
}
