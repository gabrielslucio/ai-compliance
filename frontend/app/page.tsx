import { PageContainer } from "../components/ui/PageContainer";
import { HeroSection } from "../components/landing/HeroSection";
import {FeaturesSection} from "../components/landing/FeaturesSection";
import {Navbar} from "../components/layout/Navbar";
import {HowItWorksSection} from "../components/landing/HowItWorksSection";
import {CallToActionSection} from "../components/landing/CallToActionSection";
import {Footer} from "../components/layout/Footer";


export default function Home() {
  return (
    <PageContainer>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CallToActionSection />
      <Footer />
    </PageContainer>
  );
}