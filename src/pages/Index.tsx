import ArcGalleryHero from "@/components/ArcGalleryHero";
import HowWeWork from "@/components/HowWeWork";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Portfolio from "@/components/Portfolio";

const Index = () => {
  const images = [
    "https://cdn.poehali.dev/projects/9df56395-ba9a-47f6-bf1a-8635f544028b/files/e4bcb2d6-eb5f-4f0f-9136-b27b609a3b49.jpg",
    "https://cdn.poehali.dev/projects/9df56395-ba9a-47f6-bf1a-8635f544028b/files/ccebb266-0add-4ad0-868b-5f9ae13efdf0.jpg",
    "https://cdn.poehali.dev/projects/9df56395-ba9a-47f6-bf1a-8635f544028b/files/a817abb6-9bec-4a09-8b8d-c18f0354f142.jpg",
    "https://cdn.poehali.dev/projects/9df56395-ba9a-47f6-bf1a-8635f544028b/files/19cf7d6b-3cf5-493b-a744-d32c6bf17170.jpg",
    "https://cdn.poehali.dev/projects/9df56395-ba9a-47f6-bf1a-8635f544028b/files/8cb676ef-5ea4-4b4d-ad36-4854041856bc.jpg",
    "https://cdn.poehali.dev/projects/9df56395-ba9a-47f6-bf1a-8635f544028b/files/e4bcb2d6-eb5f-4f0f-9136-b27b609a3b49.jpg",
    "https://cdn.poehali.dev/projects/9df56395-ba9a-47f6-bf1a-8635f544028b/files/ccebb266-0add-4ad0-868b-5f9ae13efdf0.jpg",
    "https://cdn.poehali.dev/projects/9df56395-ba9a-47f6-bf1a-8635f544028b/files/a817abb6-9bec-4a09-8b8d-c18f0354f142.jpg",
    "https://cdn.poehali.dev/projects/9df56395-ba9a-47f6-bf1a-8635f544028b/files/19cf7d6b-3cf5-493b-a744-d32c6bf17170.jpg",
    "https://cdn.poehali.dev/projects/9df56395-ba9a-47f6-bf1a-8635f544028b/files/8cb676ef-5ea4-4b4d-ad36-4854041856bc.jpg",
    "https://cdn.poehali.dev/projects/9df56395-ba9a-47f6-bf1a-8635f544028b/files/e4bcb2d6-eb5f-4f0f-9136-b27b609a3b49.jpg",
  ];

  return (
    <main className="relative min-h-screen bg-background">
      <Header />
      <ArcGalleryHero
        images={images}
        startAngle={20}
        endAngle={160}
        radiusLg={480}
        radiusMd={360}
        radiusSm={260}
        cardSizeLg={120}
        cardSizeMd={100}
        cardSizeSm={80}
        className="pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24"
      />
      <Portfolio />
      <HowWeWork />
      <Pricing />
      <Testimonials />
      <ContactForm />
    </main>
  );
};

export default Index;