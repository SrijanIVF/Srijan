import { useState } from "react";
import { CheckCircle } from "lucide-react";
import LeadPopup from "@/components/LeadPopup";

const points = [
  {
    title: "High Success Rates",
    desc: "Proven track record of successful pregnancies.",
  },
  {
    title: "Expert Team",
    desc: "Experienced fertility specialists & embryologists.",
  },
  {
    title: "Advanced Technology",
    desc: "Cutting-edge lab facilities & latest IVF techniques.",
  },
  {
    title: "Affordable Treatment",
    desc: "Transparent pricing with financing options.",
  },
  {
    title: "Personalized Care",
    desc: "Customized treatment plans tailored for you.",
  },
  {
    title: "Comprehensive Services",
    desc: "IVF, ICSI, IUI, Egg Freezing, and more.",
  },
];

const WhyChoose = () => {
  const [showMore, setShowMore] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {showPopup && <LeadPopup onClose={() => setShowPopup(false)} />}

      <section className="py-20 bg-gradient-to-b from-white to-pink-50">
        <div className="container mx-auto px-4">

          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-pink-600">
              Why Srijan IVF?
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Srijan IVF is renowned as the <span className="font-semibold">best IVF centre in Delhi NCR</span>.
            </p>

            {showMore && (
              <div className="mt-4 text-gray-600 space-y-3">
                <p>
                  Led by 23+ years experienced specialist <span className="font-semibold">Dr. Pallavi Singh</span>.
                </p>

              <p>
                From IVF, ICSI, IUI to advanced fertility preservation techniques, our expert team ensures a compassionate and supportive journey.
              </p>

              <p>
                Your partner in building a family. We offer advanced fertility treatments, personalized plans, and compassionate care — all under one roof.
              </p>
              </div>
            )}

            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-4 text-pink-600 font-semibold hover:underline"
            >
              {showMore ? "Show Less ↑" : "Read More ↓"}
            </button>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {points.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-pink-200 rounded-xl p-5 hover:shadow-lg transition"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-pink-500 w-5 h-5 mt-1" />

                  <div>
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Personalized Plan",
            "Advanced ART Laboratory",
            "Affordable & Transparent Pricing",
            "Compassionate Support",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-pink-100 text-pink-600 font-semibold text-center py-5 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              {item}
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <p className="text-pink-600 font-semibold text-lg">
              Your journey to parenthood starts here! ❤️
            </p>

            <button
              onClick={() => setShowPopup(true)}
              className="mt-6 px-6 py-3 bg-pink-600 text-white rounded-full font-semibold hover:bg-pink-700 transition"
            >
              Book Free Consultation
            </button>
          </div>

        </div>
      </section>
    </>
  );
};

export default WhyChoose;