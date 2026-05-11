import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
//import Callus from "@/components/callbtn";
import WhatsAppButton from "@/components/WhatsAppButton";

import bannerImg from "@/assets/About-us-banner.jpg";

import roboticImg1 from "@/assets/Treatments/Robo-Gynecology.webp";
import roboticImg2 from "@/assets/Treatments/robotic-Gynecology.webp";
import roboticImg3 from "@/assets/Treatments/robotic_Gynecology.webp";
import roboticImg4 from "@/assets/Treatments/Robotic-Gynecology-.webp";

const faqs = [
  {
    q: "1. Recovery Time After Robotic Gynecological Surgery?",
    a: "Recovery: Faster than traditional surgery (minimally invasive). Expect a short hospital stay (1-3 days), discomfort for a few weeks, and a gradual return to normal activities in 4-6 weeks (doctor’s approval).",
  },

  {
    q: "2. Does Robotic Gynecology Reduce Pain?",
    a: "Robotic surgery often involves smaller incisions, which can lead to less post-operative pain compared to traditional open surgery. However, pain management strategies are still crucial during recovery.",
  },

  {
    q: "3. Cost of Robotic Gynecological Surgery Compared to Traditional Surgery?",
    a: "Robotic surgery is typically more expensive than laparoscopy due to the technology.",
  },

  {
    q: "4. Does Insurance Cover Robotic Gynecology?",
    a: "Insurance coverage for robotic surgery can vary depending on your provider and plan. Check with your insurance company to understand specific details about coverage for robotic gynecological procedures and any potential out-of-pocket costs you might incur.",
  },

  {
    q: "5. Risks and Complications of Robotic Gynecological Surgery?",
    a: "Robotic surgery has some potential risks, like infection, bleeding, or organ damage. Discuss these with your doctor.",
  },
];

const RoboticGynecology = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <Navbar />

      <section className="relative w-full h-[55vh] overflow-hidden">
        <img
          src={bannerImg}
          alt="Robotic Gynecology"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
            Robotic Gynecology
          </h1>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex justify-center w-full md:w-auto">
            <img
              src={roboticImg1}
              alt="Robotic Gynecology"
              className="w-72 md:w-[430px] object-contain"
            />
          </div>

          <div className="flex-1">

            <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
              What is Robotic Gynecology?
            </h2>

            <div className="w-16 h-0.5 bg-pink-500 mb-6" />

            <p className="text-gray-600 text-sm leading-relaxed">
              <span className="text-pink-600 underline font-semibold">
                Robotic Gynecology
              </span>{" "}
              leverages advanced technology to assist surgeons in performing
              gynecological procedures with enhanced precision and control.
              Imagine a surgeon using a console to operate robotic arms equipped
              with tiny instruments, allowing for minimally invasive surgery
              through small incisions.
            </p>

          </div>

        </div>
      </section>

      <section className="py-14 md:py-20 px-4 md:px-10 bg-pink-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex-1">

            <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
              Robotic Gynecology vs. Laparoscopy
            </h2>

            <div className="w-16 h-0.5 bg-pink-500 mb-6" />

            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Both robotic gynecology and laparoscopy are minimally invasive
              surgical techniques, but there are some key differences:
            </p>

            <ul className="list-disc pl-5 space-y-3 text-gray-600 text-sm leading-relaxed">

              <li>
                <strong>Robotic surgery:</strong> The surgeon operates while
                seated at a console, manipulating robotic arms. This offers
                greater dexterity, improved visualization, and potentially
                faster recovery times.
              </li>

              <li>
                <strong>Laparoscopy:</strong> The surgeon directly manipulates
                laparoscopic instruments through small incisions. This technique
                is well-established and may be a more cost-effective option for
                some procedures.
              </li>

            </ul>

            <p className="text-gray-600 text-sm leading-relaxed mt-6">
              <strong>
                The choice between robotic and laparoscopic surgery depends on
                the specific procedure and your doctor’s expertise.
              </strong>{" "}
              Discussing these options with your doctor can help you determine
              the best approach for your individual needs.
            </p>

          </div>

          <div className="flex justify-center w-full md:w-auto">
            <img
              src={roboticImg2}
              alt="Laparoscopy"
              className="w-72 md:w-[430px] object-contain"
            />
          </div>

        </div>
      </section>

      <section className="py-14 md:py-20 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex justify-center w-full md:w-auto">
            <img
              src={roboticImg3}
              alt="Robotic Surgery Cost"
              className="w-72 md:w-[420px] object-contain"
            />
          </div>

          <div className="flex-1">

            <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
              Robotic Gynecology Surgery Cost
            </h2>

            <div className="w-16 h-0.5 bg-pink-500 mb-6" />

            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              The cost of robotic gynecological surgery in India can vary
              depending on several factors, including hospital type, surgeon
              experience, procedure complexity, and hospital stay. Here’s a
              general range: ₹1,70,000 – ₹4,75,000 (2026).
            </p>

            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              <strong>
                It’s crucial to consult with your chosen hospital and doctor to
                get a personalized cost estimate for your specific situation.
              </strong>{" "}
              Insurance coverage for robotic surgery can also vary, so check
              with your provider for details.
            </p>

            <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
              Benefits of Robotic Gynecology
            </h2>

            <div className="w-16 h-0.5 bg-pink-500 mb-6" />

            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Robotic gynecology offers several potential advantages:
            </p>

            <ul className="list-disc pl-5 space-y-3 text-gray-600 text-sm leading-relaxed">

              <li>
                <strong>Minimally invasive:</strong> Smaller incisions can lead
                to less pain, scarring, and faster recovery times.
              </li>

              <li>
                <strong>Enhanced precision:</strong> Improved visualization and
                robotic arm control can allow for more precise surgical
                movements.
              </li>

              <li>
                <strong>Potential for shorter hospital stays:</strong> Faster
                recovery times may lead to shorter hospital stays.
              </li>

              <li>
                <strong>Improved ergonomics for surgeons:</strong> The
                console-based approach can reduce surgeon fatigue during complex
                procedures.
              </li>

            </ul>

          </div>

        </div>
      </section>

      <section className="py-14 md:py-20 px-4 md:px-10 bg-pink-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex-1">

            <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
              Conditions Treated with Robotic Gynecology Surgery
            </h2>

            <div className="w-16 h-0.5 bg-pink-500 mb-6" />

            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Robotic surgery can be used for various gynecological procedures,
              including:
            </p>

            <ul className="list-disc pl-5 space-y-3 text-gray-600 text-sm leading-relaxed">

              <li>
                <strong>Hysterectomy (removal of the uterus):</strong> For
                benign or cancerous conditions.
              </li>

              <li>
                <strong>Myomectomy (removal of fibroids):</strong> Treating
                uterine fibroids that cause pain or other problems.
              </li>

              <li>
                <strong>Sacrocolpopexy:</strong> Surgical correction of vaginal
                vault prolapse.
              </li>

              <li>
                <strong>Gynecological cancer surgery:</strong> Treating ovarian,
                cervical, or endometrial cancer.
              </li>

              <li>
                <strong>Endometriosis surgery:</strong> Excision of endometrial
                tissue implants.
              </li>

              <li>
                <strong>Ovarian cyst removal:</strong> Removing ovarian cysts
                that are large or suspicious.
              </li>

            </ul>

            <p className="text-gray-600 text-sm leading-relaxed mt-6">
              <strong>Remember:</strong> Robotic gynecology is a technological
              advancement offering minimally invasive surgery options for
              various gynecological conditions. However, it’s not always the
              best approach for every case. Discuss the benefits and potential
              drawbacks with your doctor to determine if robotic surgery is the
              most suitable option for your specific situation.
            </p>

          </div>

          <div className="flex justify-center w-full md:w-auto">
            <img
              src={roboticImg4}
              alt="Conditions"
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
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {faq.a}
                    </p>
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

export default RoboticGynecology;