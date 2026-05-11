import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
//import Callus from "@/components/callbtn";
import WhatsAppButton from "@/components/WhatsAppButton";

import bannerImg from "@/assets/About-us-banner.jpg";

import pcosImg1 from "@/assets/Treatments/PCOS.webp";
import pcosImg2 from "@/assets/Treatments/PCOS_1.webp";
import pcosImg3 from "@/assets/Treatments/Fertility-options.webp";
import pcosImg4 from "@/assets/Treatments/Treatment-options-768x768.webp";

const faqs = [
  {
    q: "1. Can PCOS be cured?",
    a: "Currently, there's no cure for PCOS. However, effective treatment options can manage symptoms, improve overall health, and enhance fertility. These strategies focus on regulating hormones, addressing ovulation issues, and promoting a healthy lifestyle.",
  },

  {
    q: "2. How to get pregnant with PCOS?",
    a: (
      <>
        <p className="mb-3">Fertility options:</p>

        <ul className="list-disc pl-5 space-y-2">
          <li>Lifestyle changes</li>
          <li>Medication</li>
          <li>Ovulation induction</li>
          <li>IUI</li>
          <li>IVF (for complex cases)</li>
        </ul>
      </>
    ),
  },

  {
    q: "3. Living with PCOS: Diet and Exercise Tips",
    a: (
      <>
        <p className="mb-3">
          Here are some lifestyle tips to manage PCOS:
        </p>

        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Diet:</strong> Focus on a balanced diet rich in fruits,
            vegetables, and whole grains. Limit processed foods and sugary
            drinks.
          </li>

          <li>
            <strong>Exercise:</strong> Engage in regular physical activity
            (30 minutes most days of the week) to maintain a healthy weight
            and improve insulin sensitivity.
          </li>
        </ul>
      </>
    ),
  },

  {
    q: "4. How is PCOS diagnosed?",
    a: (
      <>
        <p className="mb-3">Diagnosis of PCOS typically involves:</p>

        <ul className="list-disc pl-5 space-y-2">
          <li>Reviewing your medical history and symptoms</li>
          <li>Pelvic exam</li>
          <li>Blood tests to assess hormone levels</li>
          <li>Ultrasound to examine the ovaries for cysts</li>
        </ul>
      </>
    ),
  },

  {
    q: "5. Does insurance cover PCOS treatment?",
    a: "Insurance coverage for PCOS treatment can vary depending on your specific plan. Some plans may cover medications, diagnostic tests, or specific fertility treatments. It's crucial to contact your insurance provider to understand your coverage details for PCOS management.",
  },
];

const PCOS = () => {
  const [openFaq, setOpenFaq] = useState(1);

  return (
    <>
      <Navbar />

      <section className="relative w-full h-[55vh] overflow-hidden">
        <img
          src={bannerImg}
          alt="PCOS"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
            Polycystic Ovary Syndrome (PCOS)
          </h1>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex justify-center w-full md:w-auto">
            <img
              src={pcosImg1}
              alt="PCOS"
              className="w-72 md:w-[420px] object-contain"
            />
          </div>

          <div className="flex-1">

            <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
              What is Polycystic Ovary Syndrome (PCOS)
            </h2>

            <div className="w-16 h-0.5 bg-pink-500 mb-6" />

            <p className="text-gray-600 text-sm leading-relaxed">
              <span className="text-pink-600 underline font-semibold">
                Polycystic Ovary Syndrome PCOS
              </span>{" "}
              is a hormonal imbalance affecting a woman’s reproductive
              system. Common symptoms include irregular periods, excess
              androgen (male hormone) levels, and multiple cysts in the
              ovaries. PCOS can disrupt ovulation, making natural conception
              more challenging.
            </p>

          </div>

        </div>
      </section>

      <section className="py-14 md:py-20 px-4 md:px-10 bg-pink-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex-1">

            <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
              PCOS Treatment Cost 2026
            </h2>

            <div className="w-16 h-0.5 bg-pink-500 mb-6" />

            <p className="text-gray-600 text-sm leading-relaxed">
              In India, as of 2026, the cost of managing PCOS ranges from
              approximately ₹10,000 to ₹50,000 per year. This estimate
              encompasses the varying costs associated with medications,
              which can range significantly based on the type and brand, as
              well as the frequency of doctor visits and the necessity of
              specialized tests. Additionally, some patients may require
              further interventions such as fertility treatments if PCOS is
              affecting their ability to conceive, which can increase costs
              substantially.
            </p>

          </div>

          <div className="flex justify-center w-full md:w-auto">
            <img
              src={pcosImg2}
              alt="PCOS Treatment"
              className="w-72 md:w-[430px] object-contain"
            />
          </div>

        </div>
      </section>

      <section className="py-14 md:py-20 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-start">

          <div className="flex justify-center w-full md:w-auto">
            <img
              src={pcosImg3}
              alt="Fertility Options"
              className="w-72 md:w-[400px] object-contain"
            />
          </div>

          <div className="flex-1">

            <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
              Fertility Options for Women with PCOS
            </h2>

            <div className="w-16 h-0.5 bg-pink-500 mb-6" />

            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Despite the challenges, women with PCOS can still achieve
              pregnancy. Here are some fertility options:
            </p>

            <ul className="list-disc pl-5 space-y-3 text-gray-600 text-sm leading-relaxed">

              <li>
                <strong>Lifestyle modifications:</strong> Maintaining a
                healthy weight, eating a balanced diet, and exercising
                regularly can improve ovulation and overall health.
              </li>

              <li>
                <strong>Medications:</strong> Medications like birth control
                pills can regulate hormones and promote ovulation.
              </li>

              <li>
                <strong>Ovulation induction:</strong> Medications can
                stimulate ovulation and egg release.
              </li>

              <li>
                <strong>Intrauterine insemination (IUI):</strong> Sperm is
                placed directly into the uterus to increase the chance of
                fertilization.
              </li>

              <li>
                <strong>In Vitro Fertilization (IVF):</strong> This advanced
                technique involves egg retrieval, fertilization in a lab, and
                embryo transfer to the uterus.
              </li>

            </ul>

          </div>

        </div>
      </section>

      <section className="py-14 md:py-20 px-4 md:px-10 bg-pink-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-start">

          <div className="flex-1">

            <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
              PCOS and IVF Success Rates
            </h2>

            <div className="w-16 h-0.5 bg-pink-500 mb-6" />

            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              While PCOS can impact fertility, IVF can offer a viable path
              to pregnancy for women with PCOS. Success rates depend on
              various factors like:
            </p>

            <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm leading-relaxed mb-6">

              <li>Age of the woman</li>
              <li>Severity of PCOS</li>
              <li>Overall sperm quality</li>
              <li>Number of healthy embryos available</li>

            </ul>

            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Studies suggest that with proper management and advanced
              reproductive techniques like IVF, pregnancy success rates for
              women with PCOS can be comparable to those without PCOS.
            </p>

            <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
              Treatment options for PCOS
            </h2>

            <div className="w-16 h-0.5 bg-pink-500 mb-6" />

            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              There’s no cure for PCOS, but treatment focuses on managing
              symptoms and preventing complications. Common treatment options
              include:
            </p>

            <ul className="list-disc pl-5 space-y-3 text-gray-600 text-sm leading-relaxed">

              <li>
                <strong>Lifestyle changes:</strong> Healthy diet, regular
                exercises, and weight management are crucial.
              </li>

              <li>
                <strong>Medication:</strong> Medications can regulate
                hormones, address ovulation issues, and manage acne or
                excessive hair growth.
              </li>

              <li>
                <strong>Surgery:</strong> In rare cases, laparoscopic ovarian
                drilling might be an option to improve ovulation.
              </li>

            </ul>

          </div>

          <div className="flex justify-center w-full md:w-auto">
            <img
              src={pcosImg4}
              alt="PCOS IVF"
              className="w-72 md:w-[430px] object-contain"
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

export default PCOS;