import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
//import Callus from "@/components/callbtn";
import WhatsAppButton from "@/components/WhatsAppButton";

import bannerImg from "@/assets/About-us-banner.jpg";

import laparoImg1 from "@/assets/Treatments/LaparoscopicGynecology.webp";
import laparoImg2 from "@/assets/Treatments/Laparoscopic-Gynecology.webp";
import laparoImg3 from "@/assets/Treatments/Laparoscopic-cost.webp";
import laparoImg4 from "@/assets/Treatments/surgery.webp";

const faqs = [
  {
    q: "1. Who should undergo Semen Analysis?",
    a: (
      <>
        Semen analysis is useful for:
        <br />
        <br />
        • Couples with fertility issues
        <br />
        <br />
        • Men with pelvic pain
        <br />
        <br />
        • Men with risk factors for infertility
        <br />
        <br />
        • Vasectomy confirmation
      </>
    ),
  },

  {
    q: "2. What does Semen Analysis measure?",
    a: "A semen analysis evaluates several key aspects of a man's semen, including sperm count, motility, morphology, volume, and pH level.",
  },

  {
    q: "3. How is Semen Analysis interpreted?",
    a: "Doctors compare your results to WHO guidelines. Normal results mean all semen parameters are within the normal ranges. Abnormal results require further evaluation.",
  },

  {
    q: "4. What affects Semen Analysis results?",
    a: "Semen analysis results can be affected by lifestyle (smoking, drugs, obesity), health (infections, medications), and environmental factors (toxins, heat).",
  },

  {
    q: "5. How long does Semen Analysis take?",
    a: "The semen analysis itself is a relatively quick process in the lab, typically taking a few hours. However, receiving the results can take 1-2 business days depending on the clinic's processing time.",
  },

  {
    q: "6. What are the next steps after Semen Analysis?",
    a: (
      <>
        The next steps depend on the results:
        <br />
        <br />
        • <strong>Normal results:</strong> Further evaluation might focus on
        the female partner’s fertility.
        <br />
        <br />
        • <strong>Abnormal results:</strong> Repeat testing may be recommended
        to confirm the abnormality. The doctor will discuss potential causes
        and treatment options based on the specific findings. These might
        include lifestyle changes, medications, surgery, or assisted
        reproductive techniques (ART) like IVF or ICSI.
      </>
    ),
  },
];

const LaparoscopicGynecology = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <Navbar />

      <section className="relative w-full h-[55vh] overflow-hidden">
        <img
          src={bannerImg}
          alt="Laparoscopic Gynecology"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
            Laparoscopic Gynecology
          </h1>
        </div>
      </section>

      <section className="py-10 md:py-16 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
            <img
              src={laparoImg1}
              alt="Laparoscopic Gynecology"
              className="w-72 md:w-[430px] object-contain"
            />
          </div>

          <div className="flex-1">

            <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
              What is Laparoscopic Gynecology?
            </h2>

            <div className="w-16 h-0.5 bg-pink-500 rounded-full mb-6" />

            <p className="text-gray-600 text-sm leading-relaxed">
              Laparoscopic gynecology is a minimally invasive surgical approach
              used to diagnose and treat a wide range of gynecological
              conditions. It utilizes a laparoscope, a thin, lighted instrument
              with a camera, inserted through a small incision in the abdomen.
              The camera transmits images to a monitor, allowing the surgeon to
              visualize the pelvic organs and perform procedures without large
              abdominal cuts.
            </p>

          </div>

        </div>
      </section>

      <section className="py-14 md:py-20 px-4 md:px-10 bg-pink-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex-1">

            <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
              Laparoscopic Gynecology Procedures List
            </h2>

            <div className="w-16 h-0.5 bg-pink-500 rounded-full mb-6" />

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Laparoscopy is a versatile technique used for various
              gynecological procedures. Here are some common examples:
            </p>

            <p className="font-semibold text-gray-800 mb-4">Diagnosis:</p>

            <ul className="list-disc pl-5 space-y-3 text-gray-600 text-sm leading-relaxed mb-8">
              <li>Pelvic pain evaluation</li>
              <li>Endometriosis diagnosis</li>
              <li>Uterine fibroid evaluation</li>
              <li>Ovarian cyst evaluation</li>
              <li>Pelvic inflammatory disease (PID) diagnosis</li>
            </ul>

            <p className="font-semibold text-gray-800 mb-4">Treatment:</p>

            <ul className="list-disc pl-5 space-y-3 text-gray-600 text-sm leading-relaxed">
              <li>Endometriosis ablation or excision</li>
              <li>Uterine fibroid removal (myomectomy)</li>
              <li>Ovarian cyst removal (cystectomy)</li>
              <li>Tubal ligation (sterilization)</li>
              <li>Ectopic pregnancy removal</li>
              <li>Pelvic adhesions removal</li>
              <li>
                Hysterectomy (uterine removal) with or without ovaries and
                cervix
              </li>
            </ul>

          </div>

          <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
            <img
              src={laparoImg2}
              alt="Procedures"
              className="w-72 md:w-[420px] object-contain"
            />
          </div>

        </div>
      </section>

      <section className="py-14 md:py-20 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
            <img
              src={laparoImg3}
              alt="Cost"
              className="w-72 md:w-[460px] object-contain"
            />
          </div>

          <div className="flex-1">

            <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
              Laparoscopic Gynecology Cost 2026
            </h2>

            <div className="w-16 h-0.5 bg-pink-500 rounded-full mb-6" />

            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Due to the variability in factors affecting the cost of
              laparoscopic gynecological procedures, obtaining a definitive cost
              estimate can be challenging.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              To get a more accurate idea of the out-of-pocket expense,
              consulting with a doctor or healthcare provider in your area is
              crucial. However, to provide a general reference, a laparoscopic
              gynecological procedure in India in 2026 might range from ₹50,000
              to ₹200,000.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed">
              In addition to consulting with a doctor, you can also try
              contacting your insurance provider to determine if they cover any
              portion of a laparoscopic gynecological procedure. Knowing your insurance coverage beforehand can help you budget for the procedure.
            </p>

            <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mt-10 mb-3">
              Laparoscopic Gynecology for Infertility
            </h2>

            <div className="w-16 h-0.5 bg-pink-500 rounded-full mb-6" />

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Laparoscopy can be a valuable tool in diagnosing and treating
              infertility causes in women. Here’s how it can be helpful:
            </p>

            <ul className="list-disc pl-5 space-y-3 text-gray-600 text-sm leading-relaxed">
              <li>
                <strong>Identifying blockages:</strong>  Laparoscopy can help identify blockages in the fallopian tubes that prevent eggs and sperm from meeting.
              </li>

              <li>
                <strong>Treating endometriosis:</strong> Endometriosis can contribute to infertility. Laparoscopy can be used to diagnose and remove or ablate endometrial tissue implants.
              </li>

              <li>
                <strong>Adhesions removal:</strong> Pelvic adhesions can scar tissue that can impair fertility. Laparoscopy can remove these adhesions to improve tubal function.
              </li>
            </ul>

          </div>

        </div>
      </section>

      <section className="py-14 md:py-20 px-4 md:px-10 bg-pink-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex-1">

            <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
              Laparoscopic Gynecology vs Traditional Surgery
            </h2>

            <div className="w-16 h-0.5 bg-pink-500 rounded-full mb-6" />

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Laparoscopy offers several advantages over traditional open
              abdominal surgery:
            </p>

            <ul className="list-disc pl-5 space-y-4 text-gray-600 text-sm leading-relaxed mb-8">
              <li>
                <strong>Smaller incisions:</strong> Less scarring and quicker
                recovery time.
              </li>

              <li>
                <strong>Reduced pain:</strong> Typically less post-operative
                pain compared to open surgery.
              </li>

              <li>
                <strong>Shorter hospital stay:</strong> Many laparoscopic
                procedures are outpatient or require only a brief
                hospitalization.
              </li>

              <li>
                <strong>Faster recovery:</strong> Patients can return to normal
                activities sooner.
              </li>
            </ul>

            <p className="text-gray-600 text-sm leading-relaxed">
              However, laparoscopy may not be suitable for all cases. The
              surgeon will assess your specific situation and determine if
              laparoscopy is the most appropriate approach.
            </p>

          </div>

          <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
            <img
              src={laparoImg4}
              alt="Traditional Surgery"
              className="w-72 md:w-[400px] object-contain"
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

export default LaparoscopicGynecology;