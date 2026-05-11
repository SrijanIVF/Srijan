import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
//import Callus from "@/components/callbtn";
import WhatsAppButton from "@/components/WhatsAppButton";
import bannerImg from "@/assets/About-us-banner.jpg";
import Appointments from "@/components/Appointment";
import Reviews from "@/components/Reviews.tsx";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Form submitted ✅");
  };

  return (
    <>
      <Navbar />
      <section className="relative w-full h-[60vh] md:h-[75vh] flex items-center justify-center text-center">
        <img
          src={bannerImg}
          alt="Contact Srijan IVF"
          className="absolute inset-0 w-full h-full object-cover brightness-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/40 to-black/50" />

        <div className="relative z-10 text-white px-4 max-w-3xl mx-auto">
          <p className="text-xs font-semibold tracking-[4px] uppercase text-pink-300 mb-3">
            Get in Touch
          </p>

          <h1 className="text-3xl md:text-6xl font-bold mb-4">
            Contact Srijan IVF
          </h1>

          <p className="text-sm md:text-lg text-white/80">
            We’re here to support you at every step of your fertility journey. Reach out to our experts today.
          </p>
        </div>
      </section>
      <Appointments />

      <section className="w-full h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7001.157043539854!2d77.3071838!3d28.6218356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa0c438cacb11b56b%3A0x82a5a66ac7d91b82!2sSrijan%20Fertility!5e0!3m2!1sen!2sin!4v1710000000000"
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </section>
      <Reviews />
      
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default ContactPage;