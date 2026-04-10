import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import IndustriesSection from "@/components/IndustriesSection";
import WhyChooseUs from "@/components/Why-choose-us";

export default function Home() {
  return (
    <>
      <Hero />
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
