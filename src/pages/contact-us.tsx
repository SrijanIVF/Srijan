import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Appointments from "@/components/Appointment";
import LeadPopup from "@/components/LeadPopup";
import contactBanner from "@/assets/contact-banner.png";

const contactCards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    heading: "How we can help you?",
    sub: "Send us an email",
    href: "mailto:info@srijanivf.com",
    color: "from-pink-500 to-rose-500",
    lightBg: "bg-pink-50",
    borderColor: "border-pink-200",
    accentColor: "text-pink-600",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    heading: "Feel free to get in touch?",
    sub: "Give us a call",
    href: "tel:+919711748080",
    color: "from-violet-500 to-purple-600",
    lightBg: "bg-violet-50",
    borderColor: "border-violet-200",
    accentColor: "text-violet-600",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3h10.5a2.25 2.25 0 012.25 2.25v13.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 18.75V5.25A2.25 2.25 0 016.75 3zM9 7.5h6M9 12h6m-6 4.5h3" />
      </svg>
    ),
    heading: "Book an appointment?",
    sub: "Send your query",
    href: "#appointment",
    color: "from-rose-500 to-pink-600",
    lightBg: "bg-rose-50",
    borderColor: "border-rose-200",
    accentColor: "text-rose-600",
  },
];

const ContactPage = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <Navbar />

      {/* HERO BANNER */}
      <section className="relative h-[450px] md:h-[550px] overflow-hidden">
        {/* Background Image */}
        <img
          src={contactBanner}
          alt="Contact Srijan IVF"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/80 via-pink-800/60 to-transparent" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-2xl text-white">
              <span className="inline-block bg-pink-500/20 border border-pink-300/30 px-4 py-2 rounded-full text-sm font-medium mb-5">
                Srijan IVF Fertility Centre
              </span>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                Contact Our <br />
                Fertility Experts
              </h1>

              <p className="text-lg text-white/90 mb-8">
                We’re here 24×7 to assist you and answer every query you might have.
                Our specialists are always ready to guide you on your parenthood journey.
              </p>

              <a
                href="#appointment"
                className="inline-flex items-center bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full font-semibold transition-all"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#faf3f6] py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactCards.map((card, index) => {
            const isEnquiry = index === 2;

            const CardContent = (
              <div
                className={`group relative bg-white rounded-[28px] border ${card.borderColor}
          overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2
          transition-all duration-500 h-full`}
              >
                <div
                  className={`h-1.5 bg-gradient-to-r ${card.color}`}
                />

                <div className="p-8">
                  <div
                    className={`w-20 h-20 rounded-3xl ${card.lightBg}
              flex items-center justify-center mb-6
              ${card.accentColor}`}
                  >
                    {card.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {card.heading}
                  </h3>

                  <p
                    className={`font-semibold text-lg ${card.accentColor}`}
                  >
                    {card.sub}
                  </p>
                </div>
              </div>
            );

            if (isEnquiry) {
              return (
                <button
                  key={index}
                  onClick={() => setShowPopup(true)}
                  className="text-left"
                >
                  {CardContent}
                </button>
              );
            }

            return (
              <a
                key={index}
                href={card.href}
                className="block"
              >
                {CardContent}
              </a>
            );
          })}
        </div>
      </section>

      <Appointments />

      <section className="w-full h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7001.157043539854!2d77.3071838!3d28.6218356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa0c438cacb11b56b%3A0x82a5a66ac7d91b82!2sSrijan%20Fertility!5e0!3m2!1sen!2sin!4v1710000000000"
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
        />
      </section>

      {showPopup && (
        <LeadPopup onClose={() => setShowPopup(false)} />
      )}
      <LeadPopup />
     
      <Footer />
    </>
  );
};

export default ContactPage;




