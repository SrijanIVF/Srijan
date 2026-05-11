import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
//import Callus from "@/components/callbtn";
import WhatsAppButton from "@/components/WhatsAppButton";

import bannerImg from "@/assets/About-us-banner.jpg";

import endoImg1 from "@/assets/Treatments/What-is-Endometriosis.webp";
import endoImg2 from "@/assets/Treatments/Endometriosis_2.webp";
import endoImg3 from "@/assets/Treatments/Endometriosis-Pain.webp";

const faqs = [
  {
    q: "1. How is Endometriosis Diagnosed?",
    a: (
      <>
        <p className="mb-4">
          Teenagers can face a variety of health issues, both physical and emotional:
        </p>

        <ul className="list-disc pl-5 space-y-2">
          <li>Physical: Acne, growth issues, chronic illnesses, injuries</li>
          <li>Mental/emotional: Anxiety, depression, eating disorders, substance abuse, self-esteem</li>
          <li>Sexual/reproductive: STIs, menstrual issues, sexual development questions.</li>
          <li>Social: Bullying, peer pressure, social anxiety, relationship difficulties.</li>
        </ul>
      </>
    ),
  },

  {
    q: "2. Treatment Options for Endometriosis?",
    a: "Treatment: Medication, surgery, or both can manage pain, regulate periods, and improve quality of life.",
  },

  {
    q: "3. Can Endometriosis Be Cured?",
    a: "Unfortunately, no. Endometriosis is a chronic condition, but treatments can effectively manage symptoms and improve quality of life.",
  },

  {
    q: "4. Can I Get Pregnant with Endometriosis?",
    a: "Yes, pregnancy is possible with endometriosis, but it may be more challenging. Discuss fertility concerns with your doctor. Treatment options may improve your chances of getting pregnant.",
  },

  {
    q: "5. Does Insurance Cover Endometriosis Treatment?",
    a: "Insurance coverage for endometriosis treatment can vary depending on your plan. Most plans cover diagnostic procedures and some medications. Surgery might require pre-approval or have out-of-pocket costs. Check with your insurance provider for specific details about your coverage.",
  },

  {
    q: "6. Does Endometriosis Affect Fertility?",
    a: "Endometriosis can affect fertility in some women by impacting ovulation, fertilization, or implantation. However, many women with endometriosis can still get pregnant. Early diagnosis and treatment can improve your chances of conception. Discuss your fertility concerns with your doctor to explore options that might be suitable for you.",
  },
];

const Endometriosis = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <Navbar />

      <section className="relative w-full h-[55vh] overflow-hidden">
        <img
          src={bannerImg}
          alt="Endometriosis"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
            Endometriosis
          </h1>
        </div>
      </section>

      <section className="py-14 md:py-20 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex justify-center w-full md:w-auto">
            <img
              src={endoImg1}
              alt="Endometriosis"
              className="w-72 md:w-[500px] object-contain"
            />
          </div>

          <div className="flex-1">

            <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
              What is Endometriosis?
            </h2>

            <div className="w-16 h-0.5 bg-pink-500 mb-6" />

            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              <span className="text-pink-600 underline font-semibold">
                Endometriosis
              </span>{" "}
              is a condition where tissue similar to the lining of the uterus
              (endometrium) grows outside the uterus. This misplaced tissue
              can be found on the ovaries, fallopian tubes, intestines, or
              other pelvic tissues. Endometriosis can cause pain,
              especially during menstruation, and may also lead to fertility
              issues.
            </p>

            <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
              Causes of Endometriosis
            </h2>

            <div className="w-16 h-0.5 bg-pink-500 mb-6" />

            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              The exact cause of endometriosis is still unknown, but several
              theories exist, including:
            </p>

            <ul className="list-disc pl-5 space-y-3 text-gray-600 text-sm leading-relaxed">

              <li>
                <strong>Retrograde Menstruation –</strong> When menstrual
                blood flows backward into the pelvic cavity instead of
                exiting the body.
              </li>

              <li>
                <strong>Genetic Factors –</strong> Women with a family
                history of endometriosis are at a higher risk of developing
                the condition.
              </li>

              <li>
                <strong>Immune System Dysfunction –</strong> A weakened
                immune system may fail to detect and eliminate
                endometrial-like tissue outside the uterus.
              </li>

              <li>
                <strong>Hormonal Influence –</strong> Estrogen plays a key
                role in the growth of endometrial tissue outside the uterus.
              </li>

              <li>
                <strong>Surgical Scarring –</strong> Previous surgeries,
                such as a C-section, may allow endometrial cells to implant
                and grow outside the uterus.
              </li>

            </ul>

          </div>

        </div>
      </section>

      <section className="py-14 md:py-20 px-4 md:px-10 bg-pink-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex-1">

            <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
              Symptoms of Endometriosis:
            </h2>

            <div className="w-16 h-0.5 bg-pink-500 mb-6" />

            <ul className="list-disc pl-5 space-y-3 text-gray-600 text-sm leading-relaxed mb-6">

              <li>
                Pelvic pain, especially during menstruation (pain may worsen
                over time)
              </li>

              <li>Pain during intercourse</li>

              <li>
                Pain during bowel movements or urination (especially during
                menstruation)
              </li>

              <li>Heavy or irregular periods</li>

              <li>Difficulty getting pregnant</li>

              <li>Fatigue</li>

              <li>Bloating</li>

              <li>Diarrhea or constipation</li>

            </ul>

            <p className="text-gray-600 text-sm leading-relaxed">
              <strong>
                It’s important to note that not all women with
                endometriosis experience all of these symptoms.
              </strong>{" "}
              The severity of symptoms can also vary significantly from woman
              to woman.
            </p>

          </div>

          <div className="flex justify-center w-full md:w-auto">
            <img
              src={endoImg2}
              alt="Symptoms"
              className="w-72 md:w-[450px] object-contain"
            />
          </div>

        </div>
      </section>

      <section className="py-14 md:py-20 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex justify-center w-full md:w-auto">
            <img
              src={endoImg3}
              alt="Treatment"
              className="w-72 md:w-[420px] object-contain"
            />
          </div>

          <div className="flex-1">

            <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
              Treatment Options for Endometriosis Pain:
            </h2>

            <div className="w-16 h-0.5 bg-pink-500 mb-6" />

            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              There is no cure for endometriosis, but treatments can
              effectively manage pain and improve quality of life. Common
              treatment options include:
            </p>

            <ul className="list-disc pl-5 space-y-3 text-gray-600 text-sm leading-relaxed mb-8">

              <li>
                <strong>Hormonal therapy:</strong> Birth control pills,
                progestin-only pills, or injections can regulate hormones
                and reduce endometrial tissue growth.
              </li>

              <li>
                <strong>Pain medication:</strong> Over-the-counter pain
                relievers, prescription pain medication, or nerve blockers
                can help manage discomfort.
              </li>

            </ul>

            <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
              Endometriosis Treatment Cost in Delhi (2026)
            </h2>

            <div className="w-16 h-0.5 bg-pink-500 mb-6" />

            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              <strong>
                Treatment costs vary depending on severity, type (surgery
                more expensive), hospital type, and surgeon experience.
              </strong>
            </p>

            <ul className="list-disc pl-5 space-y-3 text-gray-600 text-sm leading-relaxed mb-6">

              <li>Medication: ₹5,000 – ₹20,000 per year</li>

              <li>Laparoscopic surgery: ₹1,00,000 – ₹3,00,000</li>

            </ul>

            <p className="text-gray-600 text-sm leading-relaxed">
              <strong>
                It’s crucial to consult with your chosen doctor or hospital
                to get a personalized cost estimate for your specific
                situation.
              </strong>{" "}
              Insurance coverage for endometriosis treatment can also vary,
              so check with your provider for details.
            </p>

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

export default Endometriosis;