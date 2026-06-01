import Navbar from "@/components/lp/Navlp";
import SEOMetaHead from "@/components/SEOMetaHead";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Treatments from "@/components/Treatments";
import Reviews from "@/components/Reviews.tsx"
import Appointment from "@/components/Appointment";
import Doctors from "@/components/Doctors";
import Testimonials from "@/components/customer-testimonials";
import Footer from "@/components/lp/Footerlp";
import WhatsAppButton from "@/components/WhatsAppButton";
// import CallButton from "@/components/callbtn";
import LeadPopup from "@/components/LeadPopup";
import Benefits from "@/components/Benefits";
import WhyChoose from "@/components/whyus";
import SuccessStories from "@/components/success-stories";
import CentreCard from "@/components/centre-card";

const Index = () => (
  <main className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <About />
    <Benefits />
    <WhyChoose />
    <Doctors />
    <Treatments />
    <CentreCard />
    <Reviews />
    {/* <SuccessStories /> */}
    <Testimonials />
    {/* <Appointment /> */}
    <Footer />
    <WhatsAppButton />
    <LeadPopup />
  </main>
);

export default Index;
