import React from "react";
import aboutImg from "@/assets/About-us-banner.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
//import Callus from "@/components/callbtn";
import WhatsAppButton from "@/components/WhatsAppButton";

const videos = [
  {
    id: "7",
    url: "https://www.youtube.com/embed/dNXcAf2GwsQ",
  },
  {
    id: "8",
    url: "https://www.youtube.com/embed/SdslvzarUvE",
  },
  {
    id: "9",
    url: "https://www.youtube.com/embed/UYZLOk_JeBU",
  },
  {
    id: "10",
    url: "https://www.youtube.com/embed/1NKidMdFr4k",
  },
  {
    id: "11",
    url: "https://www.youtube.com/embed/TahDkNL4EEQ",
  },
  {
    id: "12",
    url: "https://www.youtube.com/embed/4WAXn1wjvH0",
  },
    {
    id: "13",
    url: "https://www.youtube.com/embed/sDd7RKUke54",
  },
  {
    id: "14",
    url: "https://www.youtube.com/embed/mNGE9Sarsak",
  },
  {
    id: "15",
    url: "https://www.youtube.com/embed/ZnTO2f0L274",
  },
  {
    id: "16",
    url: "https://www.youtube.com/embed/4C39t775KPw",
  },
  {
    id: "17",
    url: "https://www.youtube.com/embed/lulzcH5592w",
  },
  {
    id: "18",
    url: "https://www.youtube.com/embed/_DUPPHC5M8g",
  },
];

const SuccessStoriesPage = () => {
  return (
    <>
      <Navbar />

      <section className="relative w-full h-[55vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src={aboutImg}
          alt="Success Stories Banner"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/40 to-black/50" />

        <div className="relative z-10 text-white px-4 max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-[4px] uppercase text-pink-300 mb-4">
            Srijan IVF & Fertility Centre
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5">
            Real Success Stories <br />
            From Happy Parents
          </h1>

          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto">
            Watch inspiring journeys of couples who achieved their dream of
            parenthood with expert fertility care at Srijan IVF.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#f8f8f8]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <h3 className="text-3xl md:text-5xl font-bold text-pink-600 leading-tight">
              Patient Video Testimonials
            </h3>

            <p className="text-gray-500 mt-4 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
              Hear directly from our patients about their IVF journey,
              treatment experience, and the happiness of becoming parents with
              Srijan IVF & Fertility Centre.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-pink-100 hover:-translate-y-1"
              >
                <div className="relative w-full aspect-video">
                  <iframe
                    src={video.url}
                    title={`Success Story ${video.id}`}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>

                {/* <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Success Story {video.id}
                  </h3>

                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                    Real patient experience sharing hope, happiness, and the
                    joy of parenthood through IVF treatment.
                  </p>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppButton />
      
      <Footer />
    </>
  );
};

export default SuccessStoriesPage;