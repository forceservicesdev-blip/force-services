import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutSection from "@/components/AboutSection";
import BookingProcess from "@/components/BookingProcess";
import QuoteForm from "@/components/QuoteForm";
import ServiceAreas from "@/components/ServiceAreas";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header isDark={false} />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <AboutSection />
        <BookingProcess />
        <QuoteForm />
        <ServiceAreas />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
