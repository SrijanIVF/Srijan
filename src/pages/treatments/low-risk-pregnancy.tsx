import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
//import Callus from "@/components/callbtn";
import WhatsAppButton from "@/components/WhatsAppButton";

import bannerImg from "@/assets/About-us-banner.jpg";

import low1 from "@/assets/Treatments/Low-Risk-Pregnancy.webp";
import low2 from "@/assets/Treatments/L-R-Pregnancy.webp";
import low3 from "@/assets/Treatments/Low-Risk.webp";
import low4 from "@/assets/Treatments/low-risk-preg.webp";

const faqs = [
  {
    q: "1. What prenatal care appointments are essential for a low-risk pregnancy?",
    a: "For a low-risk pregnancy, you should have prenatal appointments every four weeks until 28 weeks, every two weeks until 36 weeks, and weekly after that. These visits monitor your health and the baby’s development.",
  },

  {
    q: "2. Do I need genetic testing for a low-risk pregnancy?",
    a: "Genetic testing is optional for a low-risk pregnancy. It can screen for conditions like Down syndrome. Discuss with your healthcare provider based on your family history and personal preferences.",
  },

  {
    q: "3. Is spotting or light bleeding normal in a low-risk pregnancy?",
    a: "Spotting or light bleeding can be normal, especially in the first trimester. Always inform your healthcare provider to rule out complications, and seek immediate care if bleeding is heavy.",
  },

  {
    q: "4. Can I still travel during a low-risk pregnancy?",
    a: "Travel is generally safe during a low-risk pregnancy, particularly in the second trimester. Consult your healthcare provider before traveling and ensure you stay hydrated, move around, and have access to medical care.",
  },

  {
    q: "5. Sex during low-risk pregnancy: is it safe?",
    a: "Sex is typically safe during a low-risk pregnancy unless advised otherwise by your healthcare provider. Discuss any discomfort or concerns with your provider.",
  },

  {
    q: "6. Do I need ultrasounds for a low-risk pregnancy?",
    a: "Yes, ultrasounds are standard in a low-risk pregnancy. Typically, one is done at 8-12 weeks to confirm the pregnancy and another at 18-22 weeks to check the baby’s development. Additional ultrasounds may be needed based on your healthcare provider's recommendations.",
  },
];

const LowRiskPregnancy = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <Navbar />

      <section className="relative w-full h-[55vh] overflow-hidden">
        <img
          src={bannerImg}
          alt="Low Risk Pregnancy"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
            Low-Risk Pregnancy
          </h1>
        </div>
      </section>

      <section className="py-14 md:py-20 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex justify-center w-full md:w-auto">
            <img
              src={low1}
              alt="Low Risk Pregnancy"
              className="w-72 md:w-[350px] object-contain"
            />
          </div>

          <div className="flex-1">

            <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
              About Low-Risk Pregnancy
            </h2>

            <div className="w-16 h-0.5 bg-pink-500 mb-6" />

            <p className="text-gray-600 text-sm leading-relaxed">
              A{" "}
              <span className="text-pink-600 underline">
                low-risk pregnancy
              </span>{" "}
              is one where you and your developing baby are generally
              healthy, and there are no major complications anticipated.
              This doesn’t mean there won’t be any challenges, but it
              indicates a smoother pregnancy journey with a lower chance
              of needing interventions.
            </p>

          </div>

        </div>
      </section>

      <section className="py-14 md:py-20 px-4 md:px-10 bg-pink-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex-1">

            <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
              Common Discomforts in a Low-Risk Pregnancy
            </h2>

            <div className="w-16 h-0.5 bg-pink-500 mb-6" />

            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Even in a low-risk pregnancy, some discomforts are common:
            </p>

            <ul className="list-disc pl-5 space-y-3 text-gray-600 text-sm leading-relaxed">

              <li>
                <strong>Morning sickness:</strong> Nausea and vomiting,
                usually in the first trimester.
              </li>

              <li>
                <strong>Fatigue:</strong> Feeling tired during the first
                trimester and again in the third.
              </li>

              <li>
                <strong>Frequent urination:</strong> As the uterus grows,
                it puts pressure on the bladder.
              </li>

              <li>
                <strong>Backache:</strong> Hormonal changes and weight
                gain can contribute to back pain.
              </li>

              <li>
                <strong>Breast tenderness:</strong> Changes in preparation
                for breastfeeding can cause breast soreness.
              </li>

              <li>
                <strong>Mood swings:</strong> Hormonal fluctuations can
                affect mood and emotions.
              </li>

            </ul>

          </div>

          <div className="flex justify-center w-full md:w-auto">
            <img
              src={low2}
              alt="Pregnancy Discomforts"
              className="w-72 md:w-[370px] object-contain"
            />
          </div>

        </div>
      </section>

      <section className="py-14 md:py-20 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex justify-center w-full md:w-auto">
            <img
              src={low3}
              alt="Low Risk vs High Risk"
              className="w-72 md:w-[380px] object-contain"
            />
          </div>

          <div className="flex-1">

            <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
              Low-Risk vs High-Risk Pregnancy
            </h2>

            <div className="w-16 h-0.5 bg-pink-500 mb-6" />

            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              <strong>Low-risk:</strong> Healthy mom and baby, typical
              development, minimal complications expected.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              <strong>High-risk:</strong> Pre-existing conditions
              (diabetes), pregnancy complications (placenta previa),
              requiring closer monitoring and potentially specialized
              care.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-pink-600 mb-3">
              Signs of Labor in a Low-Risk Pregnancy
            </h3>

            <div className="w-16 h-0.5 bg-pink-500 mb-6" />

            <ul className="list-disc pl-5 space-y-3 text-gray-600 text-sm leading-relaxed mb-8">

              <li>
                <strong>Regular contractions:</strong> Coming at regular
                intervals and increasing in intensity.
              </li>

              <li>
                <strong>Bloody show:</strong> Loss of mucus plug with some
                blood, indicating the cervix is dilating.
              </li>

              <li>
                <strong>Water breaking:</strong> Amniotic sac ruptures,
                releasing fluid.
              </li>

              <li>
                <strong>Increased pressure or pelvic pain:</strong> Baby’s
                head pushing down on the cervix.
              </li>

            </ul>

            <p className="text-gray-600 text-sm leading-relaxed">
              <strong>Important Note:</strong> Even in a low-risk
              pregnancy, it’s crucial to attend regular prenatal checkups
              with your doctor to monitor your health and the baby’s
              development.
            </p>

          </div>

        </div>
      </section>

      <section className="py-14 md:py-20 px-4 md:px-10 bg-pink-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex-1">

            <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
              Low-Risk Pregnancy Cost in Delhi (2026)
            </h2>

            <div className="w-16 h-0.5 bg-pink-500 mb-6" />

            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Costs vary depending on factors like doctor’s experience,
              hospital type, and birthing options.
            </p>

            <ul className="list-disc pl-5 space-y-3 text-gray-600 text-sm leading-relaxed mb-8">

              <li>
                <strong>Prenatal care (doctor visits, tests):</strong>
                ₹50,000 – ₹1,00,000
              </li>

              <li>
                <strong>Delivery (vaginal, low-intervention):</strong>
                ₹50,000 – ₹1,50,000
              </li>

            </ul>

            <p className="text-gray-600 text-sm leading-relaxed mb-10">
              <strong>Remember:</strong> This is a general range. Get a
              personalized cost estimate from your chosen doctor or
              hospital based on your specific needs and birthing plan.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-pink-600 mb-3">
              Additional Tips:
            </h3>

            <div className="w-16 h-0.5 bg-pink-500 mb-6" />

            <ul className="list-disc pl-5 space-y-3 text-gray-600 text-sm leading-relaxed">

              <li>
                <strong>Prenatal education:</strong> Classes can help you
                prepare for childbirth and parenthood.
              </li>

              <li>
                <strong>Healthy lifestyle:</strong> Eat a balanced diet,
                exercise regularly, and get adequate sleep.
              </li>

              <li>
                <strong>Support system:</strong> Lean on your partner,
                family, and friends for emotional support.
              </li>

            </ul>

          </div>

          <div className="flex justify-center w-full md:w-auto">
            <img
              src={low4}
              alt="Low Risk Pregnancy Cost"
              className="w-72 md:w-[360px] object-contain"
            />
          </div>

        </div>
      </section>

      <section className="py-14 md:py-20 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-3">
            FAQs
          </h2>

          <div className="w-16 h-0.5 bg-pink-500 mb-8" />

          <div className="space-y-4">

            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? -1 : index)
                  }
                  className="w-full flex items-center justify-between px-5 py-5 bg-gray-50 text-left"
                >
                  <span className="text-pink-600 font-semibold text-base">
                    {faq.q}
                  </span>

                  <span className="text-pink-500 text-2xl font-bold">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>

                {openFaq === index && (
                  <div className="px-5 py-5 bg-white border-t border-gray-200">
                    <div className="text-gray-600 text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                )}

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

export default LowRiskPregnancy;