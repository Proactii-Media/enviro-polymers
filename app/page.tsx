import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import IndustriesSection from "@/components/IndustriesSection";
import WhyChooseUs from "@/components/Why-choose-us";
import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  return (
    <>
      <Hero />
      <HeroSlider />
      <ServicesPreview />
      <WhyChooseUs />
      <IndustriesSection />
    </>
  );
}
export const metadata = {
  title: "Enviro Polymers - Sustainable Solutions",
  description: "Leading environmental polymer innovation",
};
