import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import IndustriesSection from "@/components/IndustriesSection";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/Why-choose-us";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <IndustriesSection />
      <Footer />
    </main>
  );
}
export const metadata = {
  title: "Enviro Polymers - Sustainable Solutions",
  description: "Leading environmental polymer innovation",
};
