import type { Metadata } from "next";
import {
  BadgeGrid,
  Container,
  CtaBand,
  LandingHero,
  PillList,
  ProductCardGrid,
  Section,
  SectionHeader,
  StatsGrid,
} from "@/components/services/landing";

export const metadata: Metadata = {
  title: "Plastic Raw Material Supply | AVH Polychem",
  description:
    "Trusted plastic raw material supplier in India. One-stop polymer supply, customer-focused support, and reliable sourcing across industries.",
  alternates: { canonical: "/services/raw-material" },
};

export default function RawMaterialSupplyPage() {
  return (
    <main className="bg-white">
      <LandingHero
        imageSrc="/aboutImg.jpg"
        imageAlt="Polymer raw material supply and industrial logistics"
        title="Trusted Plastic Raw Material Supplier in India"
        subtitle="AVH Polychem is your one-stop polymer supplier for reliable sourcing, responsive support, and consistent supply for manufacturing operations."
        primaryCta={{ label: "Contact us today", href: "/contact" }}
        secondaryCta={{ label: "Get Pricing", href: "/contact" }}
      />

      <Section className="bg-white">
        <Container>
          <SectionHeader
            eyebrow="AVH Polychem"
            title="One-stop polymer supplier, built around reliability"
            subtitle="We help manufacturers source the right materials at the right time—backed by customer-focused service, transparent communication, and stable supply."
          />

          <StatsGrid
            items={[
              { value: "1000+", label: "Customers" },
              { value: "50,000 MT", label: "Per year" },
              { value: "60M+", label: "Revenue" },
              { value: "14+ Years", label: "Experience" },
            ]}
          />
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container>
          <SectionHeader
            eyebrow="Products"
            title="Core polymer raw materials"
            subtitle="Widely used polymer categories supplied for industrial applications and manufacturing needs."
          />

          <ProductCardGrid
            items={[
              {
                title: "Polyethylene",
                description:
                  "Reliable PE supply for packaging, piping, and general manufacturing applications.",
                imageSrc: "/clientImg.jpg",
                imageAlt: "Polyethylene raw material",
              },
              {
                title: "Polypropylene",
                description:
                  "PP materials suitable for molding, extrusion, and multiple industrial uses.",
                imageSrc: "/contactImg.jpg",
                imageAlt: "Polypropylene raw material",
              },
              {
                title: "PVC",
                description:
                  "PVC supply for applications requiring durability, insulation, and stability.",
                imageSrc: "/aboutImg.jpg",
                imageAlt: "PVC raw material",
              },
              {
                title: "EVA",
                description:
                  "EVA used in flexible products and blends—supported with dependable sourcing.",
                imageSrc: "/clientImg.jpg",
                imageAlt: "EVA raw material",
              },
            ]}
          />
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <SectionHeader
            eyebrow="Industries"
            title="Serving multiple manufacturing segments"
            subtitle="Supplying polymer raw materials to businesses across high-demand production categories."
          />

          <PillList
            items={[
              "Agriculture",
              "Food Packaging",
              "Masterbatch",
              "Roto Tanks",
            ]}
          />
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container>
          <SectionHeader
            eyebrow="Certifications"
            title="Trust signals & compliance"
            subtitle="Credentials that support procurement confidence and smoother vendor onboarding."
          />

          <BadgeGrid
            items={[
              "CARE Rating",
              "SME Rating",
              "IndiaMART Trustseal",
              "AEO Certificate",
            ]}
          />
        </Container>
      </Section>

      <CtaBand
        title="Contact us today"
        subtitle="Share your polymer type, grade requirements, quantity, and timeline—our team will reply with availability and pricing."
        cta={{ label: "Get in touch", href: "/contact" }}
      />
    </main>
  );
}
