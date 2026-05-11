import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
//import Callus from "@/components/callbtn";
import WhatsAppButton from "@/components/WhatsAppButton";

import bannerImg from "@/assets/About-us-banner.jpg";

import csection1 from "@/assets/Treatments/Cesarean.webp";
import csection2 from "@/assets/Treatments/Cesarean-c-section.webp";
import csection3 from "@/assets/Treatments/c_section.webp";
import csection4 from "@/assets/Treatments/normal-delivery.webp";

const faqs = [
  {
    q: "1. What to Expect During a C-Section?",
    a: (
      <>
        <p className="mb-4">
          Here are points to Expect During a C-Section:
        </p>

        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Preparation:</strong> Gown, IV, anesthesia.
          </li>

          <li>
            <strong>Surgery:</strong> Incision, delivery, placenta removal.
          </li>

          <li>
            <strong>Recovery:</strong> Monitoring, pain meds, incision care.
          </li>
        </ul>
      </>
    ),
  },

  {
    q: "2. Normal Delivery vs. C-Section: Benefits and Risks?",
    a: "Normal delivery generally has faster recovery and fewer surgical risks, while a C-section may be safer in complicated pregnancies but involves longer recovery and surgery-related risks.",
  },

  {
    q: "3. Can I Have a Normal Delivery After a C-Section (VBAC)?",
    a: "Yes, Vaginal Birth After Cesarean (VBAC) is a possibility for some women. Factors like the reason for the previous C-section and the type of incision made will influence if VBAC is a suitable option. Discuss this possibility with your doctor to understand your individual circumstances.",
  },

  {
    q: "4. C-Section Cost Compared to Normal Delivery?",
   a: (
      <>
        <p className="mb-4">
          Generally, C-sections are more expensive than normal deliveries in Delhi (2024):
        </p>

        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Normal Delivery: </strong> ₹50,000 - ₹1,00,000 (public) ₹1,00,000 - ₹2,00,000 (private)
          </li>

          <li>
            <strong>C-Section: </strong> ₹1,50,000 - ₹3,00,000 (public) ₹3,00,000 - ₹6,00,000 (private)
          </li>
        </ul>
      </>
    ),  },

  {
    q: "5. Does Insurance Cover a C-Section?",
    a: "Most insurance plans cover C-sections, but coverage details can vary. Check with your insurance provider for specific information about your plan and associated costs for childbirth, including C-sections.",
  },
];

const CaesareanSection = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <Navbar />

      <section className="relative w-full h-[55vh] overflow-hidden">
        <img
          src={bannerImg}
          alt="Caesarean Section"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
            Caesarean Section
          </h1>
        </div>
      </section>

      <section className="py-14 md:py-20 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex justify-center w-full md:w-auto">
            <img
              src={csection1}
              alt="C Section"
              className="w-72 md:w-[480px] object-contain"
            />
          </div>

          <div className="flex-1">

            <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
              What is a Caesarean Section (C-section)?
            </h2>

            <div className="w-16 h-0.5 bg-pink-500 mb-6" />

            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              A C-section, also known as cesarean delivery, is a surgical
              procedure where the baby is delivered through an incision made
              in the mother’s abdomen and uterus. It’s typically performed
              when a vaginal delivery is not considered safe for the mother,
              baby, or both.
            </p>

            <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
              C-Section Recovery Time
            </h2>

            <div className="w-16 h-0.5 bg-pink-500 mb-6" />

            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Recovery after a{" "}
              <span className="text-pink-600 underline">
                C-section
              </span>{" "}
              typically takes longer compared to a normal delivery. Here’s a
              breakdown of the recovery process:
            </p>

            <ul className="list-disc pl-5 space-y-3 text-gray-600 text-sm leading-relaxed">

              <li>
                <strong>Hospital stay:</strong> Expect to stay in the
                hospital for 3–5 days after the surgery.
              </li>

              <li>
                <strong>First few weeks:</strong> Focus on pain management,
                rest, and incision care.
              </li>

              <li>
                <strong>4–6 weeks:</strong> Gradual increase in activity and
                improvement in energy levels.
              </li>

              <li>
                <strong>6–8 weeks:</strong> Most women regain their
                pre-pregnancy energy levels, and strenuous activities can be
                resumed with doctor’s approval.
              </li>

            </ul>

          </div>

        </div>
      </section>

      <section className="py-14 md:py-20 px-4 md:px-10 bg-pink-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex-1">

            <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
              C-Section Cost in Delhi (2026)
            </h2>

            <div className="w-16 h-0.5 bg-pink-500 mb-6" />

            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              The cost of a C-section in Delhi can vary depending on several
              factors. Public hospitals are generally less expensive than
              private hospitals. Choosing a private room will also increase
              the cost. The experience and qualifications of the surgeon can
              influence the cost, as can the type of anesthesia used
              (general vs. spinal). Additional medications or specific
              equipment used during the surgery can also affect the overall
              cost.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Here’s a general range to consider for C-section costs in Delhi
              (2026):
            </p>

            <ul className="list-disc pl-5 space-y-3 text-gray-600 text-sm leading-relaxed mb-6">

              <li>
                <strong>Public hospitals:</strong> ₹1,00,000 – ₹1,50,000
              </li>

              <li>
                <strong>Private hospitals:</strong> ₹1,50,000 – ₹2,50,000
                or more
              </li>

            </ul>

            <p className="text-gray-600 text-sm leading-relaxed">
              It’s crucial to consult with your chosen hospital and doctor
              to get a personalized cost estimate for your specific
              situation.
            </p>

          </div>

          <div className="flex justify-center w-full md:w-auto">
            <img
              src={csection2}
              alt="Cost"
              className="w-72 md:w-[500px] object-contain"
            />
          </div>

        </div>
      </section>

      <section className="py-14 md:py-20 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex justify-center w-full md:w-auto">
            <img
              src={csection3}
              alt="Reasons"
              className="w-72 md:w-[450px] object-contain"
            />
          </div>

          <div className="flex-1">

            <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
              Reasons for a C-Section
            </h2>

            <div className="w-16 h-0.5 bg-pink-500 mb-6" />

            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              There are various reasons why a C-section might be recommended
              by your doctor:
            </p>

            <ul className="list-disc pl-5 space-y-3 text-gray-600 text-sm leading-relaxed mb-6">

              <li>
                <strong>Fetal distress:</strong> If the baby shows signs of
                distress during labor, a C-section might be necessary for a
                safe delivery.
              </li>

              <li>
                <strong>Breech position:</strong> If the baby is positioned
                feet-first or sideways in the birth canal, a C-section may
                be safer.
              </li>

              <li>
                <strong>Placenta previa:</strong> When the placenta covers
                the cervix, a C-section is essential for safe delivery.
              </li>

              <li>
                <strong>Multiple pregnancy:</strong> In some cases of twins,
                triplets, or more babies, a C-section might be recommended.
              </li>

              <li>
                <strong>Previous C-section:</strong> If you’ve had a
                previous C-section, the type of incision made and your
                doctor’s assessment will determine if a vaginal birth (VBAC)
                is possible or if a C-section is recommended.
              </li>

              <li>
                <strong>Maternal health concerns:</strong> Certain
                pre-existing medical conditions in the mother might
                necessitate a C-section for a safe delivery.
              </li>

            </ul>

            <p className="text-gray-600 text-sm leading-relaxed">
              <strong>Remember:</strong> A C-section is a major surgery.
              While it’s a safe and effective option for childbirth in
              certain situations, discussing all birthing options with your
              doctor and understanding the reasons behind a recommended
              C-section is crucial for making informed decisions about your
              delivery.
            </p>

          </div>

        </div>
      </section>

      <section className="py-14 md:py-20 px-4 md:px-10 bg-pink-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex-1">

            <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
              Benefits of a Normal Delivery for Mom and Baby
            </h2>

            <div className="w-16 h-0.5 bg-pink-500 mb-6" />

            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              A normal delivery offers several potential benefits for both
              mother and baby:
            </p>

            <p className="font-semibold text-gray-700 mb-4">
              Benefits for Mom:
            </p>

            <ul className="list-disc pl-5 space-y-3 text-gray-600 text-sm leading-relaxed mb-8">

              <li>
                <strong>Shorter hospital stay:</strong> Typically shorter
                compared to a cesarean section.
              </li>

              <li>
                <strong>Faster recovery:</strong> Women generally recover
                quicker from a normal delivery.
              </li>

              <li>
                <strong>Reduced risk of surgical complications:</strong>
                Avoids potential risks associated with surgery.
              </li>

              <li>
                <strong>Potential for breastfeeding:</strong> May be easier
                to initiate breastfeeding after a normal delivery.
              </li>

            </ul>

            <p className="font-semibold text-gray-700 mb-4">
              Benefits for Baby:
            </p>

            <ul className="list-disc pl-5 space-y-3 text-gray-600 text-sm leading-relaxed mb-8">

              <li>
                <strong>Exposure to beneficial bacteria:</strong> Exposure
                to vaginal bacteria during birth can benefit the baby’s gut
                health.
              </li>

              <li>
                <strong>Faster breathing adaptation:</strong> Babies born
                vaginally may adapt to breathing outside the womb more
                easily.
              </li>

              <li>
                <strong>Reduced risk of respiratory problems:</strong>
                Studies suggest a lower risk of respiratory issues in babies
                born vaginally.
              </li>

            </ul>

            <p className="text-gray-600 text-sm leading-relaxed">
              <strong>
                It’s important to remember that every birth is unique.
              </strong>{" "}
              Discuss delivery options with your doctor to determine the
              safest and most suitable birthing method for you and your baby
              based on your individual circumstances and medical history.
            </p>

          </div>

          <div className="flex justify-center w-full md:w-auto">
            <img
              src={csection4}
              alt="Benefits"
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

export default CaesareanSection;