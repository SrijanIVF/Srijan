import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
//import Callus from "@/components/callbtn";
import WhatsAppButton from "@/components/WhatsAppButton";

import bannerImg from "@/assets/About-us-banner.jpg";

import gynecologyImg1 from "@/assets/Treatments/General-Gynecology.webp";
import gynecologyImg2 from "@/assets/Treatments/Gynecological-Exam.webp";
import gynecologyImg3 from "@/assets/Treatments/Gynecological.webp";
import gynecologyImg4 from "@/assets/Treatments/Gynecologists.webp";

const faqs = [
  {
    q: "1. When Should I Start Seeing a Gynecologist?",
    a: "It’s generally recommended to schedule your first gynecological exam between the ages of 13 and 15. Even if you haven’t begun menstruating yet, this initial visit allows you to establish a rapport with a gynecologist and discuss any questions or concerns you may have about your reproductive health. Regular checkups are recommended after that, typically annually or as advised by your doctor.",
  },

  {
    q: "2. What Are the Different Types of Birth Control Available?",
    a: "Gynecologists can advise you on various birth control methods, including hormonal pills, patches, rings, and IUDs, barrier methods like condoms, and permanent sterilization options.",
  },

  {
    q: "3. What Should I Expect During a Gynecological Exam?",
    a: "Unfortunately, no. Endometriosis is a chronic condition, but treatments can effectively manage symptoms and improve quality of life.",
  },

  {
    q: "4. Do Gynecologists Handle Pregnancy Care?",
    a: "While some gynecologists offer prenatal care, many focus solely on well-woman exams and gynecological conditions. If you're planning a pregnancy, discuss this with your gynecologist to see if they offer prenatal care or can refer you to an obstetrician specializing in pregnancy care.",
  },

  {
    q: "5. Does Insurance Cover Gynecological Exams?",
    a: "Most insurance plans cover annual gynecological exams and preventive screenings like pap smears. However, coverage details can vary. Check with your insurance provider to understand your specific plan and what services are covered. It's also advisable to inquire about any potential co-pays or out-of-pocket costs associated with gynecological exams.",
  },

  {
    q: "6. Does Endometriosis Affect Fertility?",
    a: "Most insurance plans cover annual gynecological exams and preventive screenings like pap smears.However, coverage details can vary. Check with your insurance provider to understand your specific plan and what services are covered. It's also advisable to inquire about any potential co-pays or out-of-pocket costs associated with gynecological exams.",
  },
];

const GeneralGynecology = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <Navbar />

      <section className="relative w-full h-[55vh] overflow-hidden">
        <img
          src={bannerImg}
          alt="General Gynecology"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
            General Gynecology
          </h1>
        </div>
      </section>

      <section className="py-10 md:py-16 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
            <img
              src={gynecologyImg1}
              alt="General Gynecology"
              className="w-72 md:w-[430px] object-contain"
            />
          </div>

          <div className="flex-1">

            <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
              What is General Gynecology?
            </h2>

            <div className="w-16 h-0.5 bg-pink-500 rounded-full mb-6" />

            <p className="text-gray-600 text-sm leading-relaxed">
              General gynecology focuses on the overall health of the female
              reproductive system. It encompasses preventive care, diagnosis,
              and treatment of various conditions affecting the uterus,
              ovaries, fallopian tubes, vagina, vulva, and breasts.
            </p>

          </div>

        </div>
      </section>

      <section className="py-14 md:py-20 px-4 md:px-10 bg-pink-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex-1">

            <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
              Cost of Annual Gynecological Exam
            </h2>

            <div className="w-16 h-0.5 bg-pink-500 rounded-full mb-6" />

            <p className="text-gray-600 text-sm leading-relaxed">
              In India, the cost of an annual gynecological exam can vary
              depending on factors such as the location, healthcare provider,
              and specific services included. On average, a routine
              gynecological exam typically ranges from ₹500 to ₹2,000.
              However, this cost may vary based on additional tests or
              procedures recommended during the examination. It’s advisable to
              consult with your healthcare provider for precise pricing details
              and to inquire about any insurance coverage options available.
            </p>

          </div>

          <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
            <img
              src={gynecologyImg2}
              alt="Cost"
              className="w-72 md:w-[400px] object-contain"
            />
          </div>

        </div>
      </section>

      <section className="py-14 md:py-20 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
            <img
              src={gynecologyImg3}
              alt="Conditions"
              className="w-72 md:w-[430px] object-contain"
            />
          </div>

          <div className="flex-1">

            <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
              Common Gynecological Conditions
            </h2>

            <div className="w-16 h-0.5 bg-pink-500 rounded-full mb-6" />

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              <span className="text-pink-600 underline">
                General gynecology
              </span>{" "}
              addresses a wide range of conditions, including:
            </p>

            <ul className="list-disc pl-5 space-y-3 text-gray-600 text-sm leading-relaxed">

              <li>
                <strong>Menstrual irregularities:</strong> Heavy bleeding,
                irregular periods, painful periods (dysmenorrhea)
              </li>

              <li>
                <strong>Vaginal infections:</strong> Yeast infections,
                bacterial vaginosis
              </li>

              <li>
                <strong>Sexually transmitted infections (STIs):</strong> Human
                papillomavirus (HPV), Chlamydia, Gonorrhea
              </li>

              <li>
                <strong>Endometriosis:</strong> Tissue growth outside the
                uterus causing pain and fertility issues
              </li>

              <li>
                <strong>Uterine fibroids:</strong> Non-cancerous tumors in the
                uterus
              </li>

              <li>
                <strong>Ovarian cysts:</strong> Fluid-filled sacs in the
                ovaries, usually benign
              </li>

              <li>
                <strong>Pelvic inflammatory disease (PID):</strong> Infection
                of the reproductive organs
              </li>

              <li>
                <strong>Menopause:</strong> Natural end of menstrual cycles and
                hormonal changes
              </li>

              <li>
                <strong>Vulvovaginal atrophy:</strong> Thinning of vaginal
                tissues after menopause
              </li>

              <li>
                <strong>Breast concerns:</strong> Lumps, cysts, breast cancer
                screening
              </li>

            </ul>

          </div>

        </div>
      </section>

      <section className="py-14 md:py-20 px-4 md:px-10 bg-pink-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex-1">

            <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
              Services Do Gynecologists Provide
            </h2>

            <div className="w-16 h-0.5 bg-pink-500 rounded-full mb-6" />

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Gynecologists offer a comprehensive range of services to promote
              and maintain women’s health, including:
            </p>

            <ul className="list-disc pl-5 space-y-3 text-gray-600 text-sm leading-relaxed">

              <li>
                <strong>Annual well-woman exams:</strong> Evaluations to assess
                overall health and detect potential issues.
              </li>

              <li>
                <strong>Pap smears and HPV testing:</strong> Screening for
                cervical cancer and pre-cancerous changes.
              </li>

              <li>
                <strong>Sexually transmitted infection (STI) testing and treatment:</strong>
                {" "}Diagnosis and management of STIs.
              </li>

              <li>
                <strong>Birth control counseling and prescription:</strong>
                {" "}Providing various birth control options for family planning.
              </li>

              <li>
                <strong>Management of menstrual problems:</strong> Addressing
                heavy bleeding, irregular periods, and pain.
              </li>

              <li>
                <strong>Diagnosis and treatment of gynecological conditions:</strong>
                {" "}Fibroids, cysts, endometriosis, and other concerns.
              </li>

              <li>
                <strong>Preconception counseling:</strong> Preparing women for
                a healthy pregnancy.
              </li>

              <li>
                <strong>Menopause management:</strong> Addressing symptoms and
                treatment options for a smoother transition.
              </li>

            </ul>

          </div>

          <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
            <img
              src={gynecologyImg4}
              alt="Services"
              className="w-72 md:w-[420px] object-contain"
            />
          </div>

        </div>
      </section>

      <section className="py-14 md:py-20 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-3">
            FAQs
          </h2>

          <div className="w-16 h-0.5 bg-pink-500 rounded-full mb-8" />

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

export default GeneralGynecology;