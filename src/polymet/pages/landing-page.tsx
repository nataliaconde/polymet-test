import HeroMCP from "@/polymet/components/hero-mcp";
import TrustBar from "@/polymet/components/trust-bar";
import GetStartedSection from "@/polymet/components/get-started-section";
import PainPoints from "@/polymet/components/pain-points";
import HowItWorks from "@/polymet/components/how-it-works";
import Testimonials from "@/polymet/components/testimonials";
import CTASection from "@/polymet/components/cta-section";

export default function LandingPage() {
  return (
    <>
      <HeroMCP />

      <TrustBar />

      <GetStartedSection />

      <PainPoints />

      <HowItWorks />

      <Testimonials />

      <CTASection
        title="Ready to ship real products with vibe-coding speed?"
        subtitle="Let your AI agents build and manage your backend while you focus on creating amazing user experiences."
        primaryButtonText="Create My Free Account"
      />
    </>
  );
}
