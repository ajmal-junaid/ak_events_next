import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import SEO from '@/components/SEO';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import GallerySection from '@/components/GallerySection';
import OtherBusinessesSection from '@/components/OtherBusinessesSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';

interface HomePageProps {
  seoData: {
    title: string;
    description: string;
    keywords: string[];
  };
}

const HomePage: NextPage<HomePageProps> = ({ seoData }) => {
  return (
    <>
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        url="/"
      />
      <Layout>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <OtherBusinessesSection />
        <AboutSection />
        <ContactSection />
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      seoData: {
        title: "AK Events Deli - Premium Event Rentals in Kasaragod | Firoz Padinhar",
        description: "AK Events Deli by Firoz Padinhar - Leading event management company in Kasaragod, Kerala. Premium furniture rentals, sound systems by Shalimar Sounds. Luxury wedding & ceremony rentals in Melparamba.",
        keywords: [
          "AK Events Deli",
          "Firoz Padinhar",
          "Melparamba events",
          "Shalimar Sounds",
          "Shalimar Events",
          "Kasaragod event management",
          "Kerala event rentals",
          "luxury furniture rental Kasaragod",
          "wedding planners Kerala",
          "event management Kerala",
          "premium event rentals",
          "fancy furniture rental",
          "buffet counter rental",
          "cooling fan rental",
          "event decorations Kasaragod",
          "marriage hall decorations",
          "ear piercing ceremony arrangements",
          "corporate events Kerala",
          "birthday party decorations",
          "sound system rental Kasaragod",
          "professional DJ services",
          "event photography Kerala",
          "wedding decorators Kasaragod",
          "party organizers Kerala",
          "luxury event planning",
          "premium wedding rentals",
          "event management services",
          "celebration planners Kerala",
          "festive decorations",
          "traditional ceremony arrangements"
        ]
      }
    },
    revalidate: 86400, // Revalidate every 24 hours
  };
};

export default HomePage;
