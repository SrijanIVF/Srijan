import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
//import Callus from "@/components/callbtn";
import WhatsAppButton from "@/components/WhatsAppButton";

import bannerImg from "@/assets/About-us-banner.jpg";

import risk1 from "@/assets/Treatments/high-risk-pregnancy-292x300.webp";
import risk2 from "@/assets/Treatments/Risk-Factors.webp";
import risk3 from "@/assets/Treatments/pregnancy_signs.webp";
import risk4 from "@/assets/Treatments/pregnancy-specialist.webp";
import risk5 from "@/assets/Treatments/Pregnancy-1.webp";

const faqs = [
  {
    q: "1. What are some factors that can make a pregnancy high-risk?",
    a: (
      <>
        <p className="mb-4">
          Here are some reasons a pregnancy might be considered high-risk:
        </p>

        <ul className="list-disc pl-5 space-y-3">
          <li>
            Health conditions (diabetes, high blood pressure)
          </li>

          <li>
            Age (younger than 17 or older than 35)
          </li>

          <li>
            Multiple pregnancy (twins, triplets)
          </li>

          <li>
            Fetal concerns (birth defects, growth problems)
          </li>

          <li>
            Unhealthy habits (smoking, drugs, infections)
          </li>
        </ul>
      </>
    ),
  },

  {
    q: "2. How can I prepare for a high-risk pregnancy?",
    a: "To prepare for a high-risk pregnancy, consult your healthcare provider regularly, follow prescribed treatments, maintain a healthy diet, manage stress, avoid harmful substances, stay active with approved exercises, and educate yourself about your specific risks and necessary precautions.",
  },

  {
    q: "3. Can I still have a healthy baby with a high-risk pregnancy?",
    a: "Absolutely! Early identification of a high-risk pregnancy allows for proactive management, significantly increasing the chances of a healthy baby. Following your doctor's recommendations and receiving specialized care from an MFM specialist are crucial.",
  },

  {
    q: "4. What are the additional steps for a high-risk pregnancy?",
    a: "Closer monitoring and care: More frequent checkups, specialized tests, medication management, and potential hospitalization might be needed.",
  },

  {
    q: "5. Does insurance cover High-risk Pregnancy treatment?",
    a: "Insurance coverage varies, but many plans cover prenatal care, tests, and some complications. Check your provider for details.",
  },
];

const HighRiskPregnancy = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <Navbar />

      <section className="relative w-full h-[55vh] overflow-hidden">
        <img
          src={bannerImg}
          alt="High Risk Pregnancy"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
            High-Risk Pregnancy
          </h1>
        </div>
      </section>

      <section className="py-14 md:py-20 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex justify-center w-full md:w-auto">
            <img
              src={risk1}
              alt="High Risk Pregnancy"
              className="w-72 md:w-[380px] object-contain"
            />
          </div>

          <div className="flex-1">

            <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
              About High-Risk Pregnancy
            </h2>

            <div className="w-16 h-0.5 bg-pink-500 mb-6" />

            <p className="text-gray-600 text-sm leading-relaxed">
              A{" "}
              <span className="text-pink-600 underline">
                high-risk pregnancy
              </span>{" "}
              is one that carries an increased chance of complications for
              the mother, baby, or both. These complications can arise from
              pre-existing medical conditions, pregnancy-related factors, or
              a combination of both.
            </p>

          </div>

        </div>
      </section>

      <section className="py-14 md:py-20 px-4 md:px-10 bg-pink-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex-1">

            <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
              Risk Factors of High-Risk Pregnancy
            </h2>

            <div className="w-16 h-0.5 bg-pink-500 mb-6" />

            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Several factors can contribute to a high-risk pregnancy,
              including:
            </p>

            <ul className="list-disc pl-5 space-y-3 text-gray-600 text-sm leading-relaxed">

              <li>
                <strong>Maternal health conditions:</strong> Chronic
                conditions like diabetes, high blood pressure, autoimmune
                diseases, or previous pregnancy complications can increase
                risks.
              </li>

              <li>
                <strong>Age:</strong> Being very young (under 17) or older
                (over 35) during pregnancy can be a risk factor.
              </li>

              <li>
                <strong>Multiple pregnancy:</strong> Carrying twins,
                triplets, or more babies increases the risk of
                complications.
              </li>

              <li>
                <strong>Fetal concerns:</strong> Birth defects,
                chromosomal abnormalities, or poor fetal growth can elevate
                risk.
              </li>

              <li>
                <strong>Lifestyle factors:</strong> Smoking, drug use, or
                untreated infections can negatively impact pregnancy health.
              </li>

            </ul>

          </div>

          <div className="flex justify-center w-full md:w-auto">
            <img
              src={risk2}
              alt="Risk Factors"
              className="w-72 md:w-[400px] object-contain"
            />
          </div>

        </div>
      </section>

      <section className="py-14 md:py-20 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex justify-center w-full md:w-auto">
            <img
              src={risk3}
              alt="Pregnancy Signs"
              className="w-72 md:w-[350px] object-contain"
            />
          </div>

          <div className="flex-1">

            <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
              High-Risk Pregnancy Signs
            </h2>

            <div className="w-16 h-0.5 bg-pink-500 mb-6" />

            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              While some high-risk factors might not have noticeable
              symptoms, some potential signs to be aware of include:
            </p>

            <ul className="list-disc pl-5 space-y-3 text-gray-600 text-sm leading-relaxed mb-8">

              <li>Vaginal bleeding or cramping</li>

              <li>Severe or persistent abdominal pain</li>

              <li>Sudden or excessive swelling</li>

              <li>Changes in vision or headaches</li>

              <li>Decreased fetal movement</li>

              <li>Urinary tract infections (UTIs)</li>

            </ul>

            <p className="text-gray-600 text-sm leading-relaxed">
              <strong>
                It’s important to remember that experiencing some of these
                symptoms doesn’t necessarily mean you have a high-risk
                pregnancy, but it’s crucial to consult your doctor for
                evaluation.
              </strong>
            </p>

          </div>

        </div>
      </section>

      <section className="py-14 md:py-20 px-4 md:px-10 bg-pink-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex-1">

            <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
              Benefits of Seeing a High-Risk Pregnancy Specialist
            </h2>

            <div className="w-16 h-0.5 bg-pink-500 mb-6" />

            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              A high-risk pregnancy specialist, also known as a
              maternal-fetal medicine (MFM) specialist, has additional
              training and expertise in managing complex pregnancies. They
              can offer several benefits:
            </p>

            <ul className="list-disc pl-5 space-y-3 text-gray-600 text-sm leading-relaxed mb-8">

              <li>
                <strong>Personalized care plan:</strong> Develop a
                comprehensive plan to optimize your health and your baby’s
                development.
              </li>

              <li>
                <strong>Advanced monitoring:</strong> Utilize specialized
                tests and monitoring techniques to closely track your health
                and the baby’s well-being.
              </li>

              <li>
                <strong>Collaboration with other specialists:</strong> Work
                with other healthcare professionals as needed to manage any
                pre-existing medical conditions.
              </li>

              <li>
                <strong>Reduced risk of complications:</strong> Early
                identification and proactive management of potential issues
                can help reduce the risk of complications.
              </li>

              <li>
                <strong>Improved pregnancy outcomes:</strong> Proper care
                from an MFM specialist can lead to a healthier pregnancy
                and delivery.
              </li>

            </ul>

            <p className="text-gray-600 text-sm leading-relaxed">
              Studies suggest that with proper management and advanced
              reproductive techniques like IVF, pregnancy success rates for
              women with PCOS can be comparable to those without PCOS.
            </p>

          </div>

          <div className="flex justify-center w-full md:w-auto">
            <img
              src={risk4}
              alt="Specialist"
              className="w-72 md:w-[420px] object-contain"
            />
          </div>

        </div>
      </section>

      <section className="py-14 md:py-20 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex justify-center w-full md:w-auto">
            <img
              src={risk5}
              alt="Additional Costs"
              className="w-72 md:w-[350px] object-contain"
            />
          </div>

          <div className="flex-1">

            <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
              Additional Costs Associated with a High-Risk Pregnancy
            </h2>

            <div className="w-16 h-0.5 bg-pink-500 mb-6" />

            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              High-risk pregnancies often involve additional medical care,
              which can translate to higher costs. Here are some potential
              cost factors:
            </p>

            <ul className="list-disc pl-5 space-y-3 text-gray-600 text-sm leading-relaxed mb-8">

              <li>More frequent doctor visits and prenatal tests</li>

              <li>Hospitalization for monitoring or treatment</li>

              <li>Specialized medications or procedures</li>

              <li>Fetal monitoring equipment</li>

            </ul>

            <p className="text-gray-600 text-sm leading-relaxed">
              Open communication with your doctor and understanding your
              insurance coverage is key to managing the financial aspects
              of a high-risk pregnancy.
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

export default HighRiskPregnancy;