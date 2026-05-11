import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
//import Callus from "@/components/callbtn";
import WhatsAppButton from "@/components/WhatsAppButton";
import bannerImg from "@/assets/About-us-banner.jpg";

const testimonialspage = () => {
  return (
    <>
      <Navbar />
      <section className="relative w-full h-[50vh] md:h-[65vh] flex items-center justify-center text-center">
        <img
          src={bannerImg}
          alt="Our Centre"
          className="absolute inset-0 w-full h-full object-cover brightness-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/40 to-black/50" />
        <div className="relative z-10 text-white px-4 max-w-3xl mx-auto">
          <p className="text-xs font-semibold tracking-[4px] uppercase text-pink-300 mb-3 md:mb-4">
            Patient Voices
          </p>

          <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-3 md:mb-5">
            Testimonials
          </h1>

          <p className="text-sm md:text-lg text-white/80">
            Real journeys. Real results. Real happiness.
          </p>        </div>
      </section>
      <Testimonials />
      <Reviews />
      
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default testimonialspage;
