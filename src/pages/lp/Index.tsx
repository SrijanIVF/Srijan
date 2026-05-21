import Navbar from "@/components/Navlp";
import SEOMetaHead from "@/components/SEOMetaHead";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Treatments from "@/components/Treatments";
import Reviews from "@/components/Reviews.tsx"
import Appointment from "@/components/Appointment";
import Doctors from "@/components/Doctors";
import Testimonials from "@/components/customer-testimonials";
import Footer from "@/components/Footerlp";
import WhatsAppButton from "@/components/WhatsAppButton";
// import CallButton from "@/components/callbtn";
import LeadPopup from "@/components/LeadPopup";
import Benefits from "@/components/Benefits";
import WhyChoose from "@/components/whyus";
import SuccessStories from "@/components/success-stories";

const Index = () => (
  <main className="min-h-screen bg-background">
    <SEOMetaHead
      metaData={{
        meta_title: "Best IVF Centre in Delhi | IVF Treatment & Fertility Clinic | Srijan IVF",
        metaDescription:
          "Srijan IVF Centre is one of the best IVF & fertility clinics in Delhi offering IVF, IUI, ICSI, PCOS, infertility treatment with high success rates and expert fertility specialists.",
        metaKeyword:
          "best ivf centre in delhi, ivf centre in delhi, fertility clinic in delhi, ivf treatment, iui treatment, icsi treatment, infertility treatment, best fertility doctor, ivf specialist, pcos treatment, male infertility treatment, female infertility clinic, srijan ivf centre",
        author: "Srijan IVF Centre",
        publisher: "Srijan IVF Centre",
        title: "Best IVF Centre in Delhi | Srijan IVF",
        url: "https://www.srijanivfcentre.com/lp",
        canonical_url: "https://www.srijanivfcentre.com/lp",
        og_type: "website",
        twitter_card: "summary_large_image",
        is_active: true,
        robot: {
          content: "index, follow",
        },
      }}
    />
    <Navbar />
    <Hero />
    <About />
    <Benefits />
    <WhyChoose />
    <Doctors />
    <Treatments />
    <Reviews />
    <SuccessStories />
    <Testimonials />
    <Appointment />
    <Footer />
    <WhatsAppButton />
    <LeadPopup />
  </main>
);

export default Index;
