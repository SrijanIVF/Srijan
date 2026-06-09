import Navbar from "@/components/Navbar";
import SEOMetaHead from "@/components/SEOMetaHead";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Treatments from "@/components/Treatments";
import Reviews from "@/components/Reviews.tsx";
import Appointment from "@/components/Appointment";
import Doctors from "@/components/Doctors";
import Testimonials from "@/components/customer-testimonials";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LeadPopup from "@/components/LeadPopup";
import Benefits from "@/components/Benefits";
import WhyChoose from "@/components/whyus";
import SuccessStories from "@/components/success-stories";
import CentreCard from "@/components/centre-card";

const Index = () => (
  <main className="min-h-screen bg-background">
    <SEOMetaHead
      metaData={{
        meta_title:
          "Srijan IVF: Best IVF Centre in India, Top Fertility Treatment Clinic",

        metaDescription:
          "Best IVF Clinic in India: Srijan IVF Centres is one of the Most Trusted Fertility Chain with the best Fertility Doctors in India, Which are equipped with latest and modern technology. Book your free appointment now.",

        metaKeyword:
          "best ivf centre in india, ivf clinic in india, fertility treatment clinic, ivf centre in delhi ncr, fertility doctors in india, ivf treatment, iui treatment, icsi treatment, infertility treatment, test tube baby centre, fertility clinic, srijan ivf centre",

        author: "Srijan IVF",
        publisher: "Srijan IVF",

        title:
          "Srijan IVF: Best IVF Centre in India, Top Fertility Treatment Clinic",

        url: "https://srijanivfcentre.com/",
        canonical_url: "https://srijanivfcentre.com/",

        og_type: "website",

        og_title:
          "Srijan IVF: Best IVF Centre in India, Top Fertility Treatment Clinic",

        og_description:
          "Best IVF Clinic in India: Srijan IVF Centres is one of the Most Trusted Fertility Chain with the best Fertility Doctors in India, Which are equipped with latest and modern technology. Book your free appointment now.",

        og_url: "https://srijanivfcentre.com/",

        og_image:
          "https://srijanivfcentre.com/assets/hero-couple-CogizvDF.jpg",

        twitter_card: "summary",

        twitter_title:
          "Srijan IVF: Best IVF Centre in India, Top Fertility Treatment Clinic",

        twitter_description:
          "Best IVF Clinic in India: Srijan IVF Centres is one of the Most Trusted Fertility Chain with the best Fertility Doctors in India, Which are equipped with latest and modern technology. Book your free appointment now.",

        twitter_site: "@srijan_ivf",

        twitter_image:
          "https://srijanivfcentre.com/assets/hero-couple-CogizvDF.jpg",

        twitter_image_alt: "IVF Centre in India",

        is_active: true,

        robot: {
          content: "index, follow",
        },

        schema: {
          "@context": "http://schema.org/",
          "@type": "LocalBusiness",
          name: "Srijan IVF",
          image:
            "https://srijanivfcentre.com/assets/srijanivf_logoNew-B96NTA5h.webp",
          priceRange: "$$$",
          telephone: "+919711748080",
          url: "https://srijanivfcentre.com/",

          address: {
            "@type": "PostalAddress",
            streetAddress:
              "Plot No. 7, Abhay Khand 1, Pocket 2, Abhay Khand, Indirapuram",
            addressLocality: "Ghaziabad",
            addressRegion: "Uttar Pradesh",
            postalCode: "201020",
            addressCountry: "India",
          },

          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "09:00",
              closes: "18:00",
            },
          ],

          sameAs: [
            "https://www.facebook.com/srijanfertility/",
            "https://www.instagram.com/srijan.ivfcentre/",
            "https://www.linkedin.com/company/srijan-ivf-centre/",
            "https://x.com/srijan_ivf",
            "https://www.youtube.com/@srijanfertilitycentre",
          ],
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
    <CentreCard />
    <Reviews />
    <SuccessStories />
    <Testimonials />
    <Appointment />
    <Footer />
    <LeadPopup />
  </main>
);

export default Index;