import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
//import Callus from "@/components/callbtn";
import WhatsAppButton from "@/components/WhatsAppButton";
import bannerImg from "@/assets/About-us-banner.jpg";
import ivfImg1 from "@/assets/Treatments/vitro.webp";
import ivfImg2 from "@/assets/Treatments/IVF-treatment.webp";
import ivfImg3 from "@/assets/Treatments/Financing_IVF-300x300.webp";

const ivfJourneySteps = [
  { title: "Consultation & Evaluation:", desc: "Discuss fertility, medical history, and undergo tests." },
  { title: "Stimulation & Monitoring:", desc: "Medications stimulate egg production, monitored by blood tests and ultrasounds." },
  { title: "Egg Retrieval:", desc: "Mature eggs are retrieved from the ovaries using a guided needle." },
  { title: "Sperm Collection:", desc: "Semen sample is provided by the male partner." },
  { title: "Fertilization:", desc: "Sperm and eggs are combined for fertilization (conventional or ICSI)." },
  { title: "Embryo Development:", desc: "Fertilized eggs (embryos) develop in a controlled environment." },
  { title: "Embryo Selection:", desc: "The healthiest embryos are chosen for transfer." },
  { title: "Embryo Transfer:", desc: "Selected embryos are transferred into the uterus." },
  { title: "Luteal Phase Support:", desc: "Medications support the uterine lining for implantation." },
  { title: "Pregnancy Testing:", desc: "A blood test checks for pregnancy hormone." },
  { title: "Prenatal Care:", desc: "Regular checkups ensure a healthy pregnancy (if confirmed)." },
  { title: "The rest of your response is excellent and does not require edits.", desc: "" },
];

const faqs = [
  {
    q: "1. What are the IVF medication costs?",
    a: "IVF medication costs can vary depending on the specific medications used, dosage, and duration of treatment. On average, medication for a single IVF cycle can range from $3,000 to $5,000 USD (₹30,000 to ₹50,000 INR in 2024). It's important to discuss medication costs with your fertility clinic during the consultation process.",
  },
  {
    q: "2. What are the IVF success rates by age?",
    a: (
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>Women under 35:</strong> Highest success rates,
          typically around 40-50%
        </li>

        <li>
          <strong>Women 35-37:</strong> Success rates start to decline,
          ranging from 30-40%
        </li>

        <li>
          <strong>Women 38-40:</strong> Success rates drop further,
          typically around 20-30%
        </li>

        <li>
          <strong>Women over 40:</strong> Success rates fall below 10%
        </li>
      </ul>
    ),
  },
]

const IVFTreatmentPage = () => {
  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <>
      <Navbar />
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center">
        <img
          src={bannerImg}
          alt="IVF Treatment"
          className="absolute inset-0 w-full h-full object-cover brightness-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/40 to-black/50" />
        <div className="relative z-10 text-white px-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5">In Vitro Fertilization<br /> (IVF)</h1>
        </div>
      </section>
      <section className="py-14 md:py-20 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
            <img
              src={ivfImg1}
              alt="In Vitro Fertilization illustration"
              className="w-64 md:w-[380px] object-contain"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
              What is In Vitro Fertilization (IVF)
            </h2>
            <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              In vitro fertilization, commonly referred to as IVF, is a beacon of hope for many couples
              facing infertility. As a type of assisted reproductive technology (ART), IVF helps individuals
              and couples achieve parenthood by fertilizing eggs with sperm outside the body (in vitro) and
              then transferring the resulting embryos to the uterus for implantation and pregnancy.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
              The IVF Journey: A Step-by-Step Guide
            </h2>
            <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />
            <p className="text-gray-600 text-sm leading-relaxed">
              The IVF journey, a path to parenthood for many couples struggling with infertility, can be
              broken down into several key stages. The first step involves a consultation and evaluation with
              a fertility specialist. During this initial meeting, you'll have the opportunity to discuss
              your fertility concerns, medical history, and desired outcomes. The specialist will likely
              recommend a battery of tests for both partners to assess your individual fertility potential.
              These tests may include blood tests to check hormone levels and sperm quality, and ultrasounds
              for the woman to evaluate ovulation and uterine health.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-12 px-4 md:px-10 bg-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-3">
            {ivfJourneySteps.map((step, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0 mt-2" />
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.title && (
                    <span className="font-bold text-gray-800">{step.title} </span>
                  )}
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex-1 order-2 md:order-1">
            <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
              Cost of IVF Procedure 2026
            </h2>
            <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              The cost of IVF treatment in India can vary significantly depending on several factors,
              including the chosen clinic, location, and specific procedures required. In 2026, a single
              IVF cycle in India typically ranges from ₹1,00,000 to ₹3,50,000 (approximately $1,200 to
              $4,200 USD). This cost excludes medication, which can add another ₹30,000 to ₹50,000
              (approximately $360 to $600 USD). Additional services like intracytoplasmic sperm injection
              (ICSI), preimplantation genetic testing (PGT), or embryo freezing can further increase the
              overall expense.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-10">
              Understanding the cost structure is essential for planning your IVF journey. At Srijan IVF,
              we believe in financial transparency. We provide you with a detailed breakdown of costs upfront
              and explore various payment options to suit your needs. We can also help you navigate any
              potential insurance coverage or financial assistance programs you might qualify for. Remember,
              the cumulative cost of multiple cycles can be substantial, so careful planning and exploring
              all financial options are crucial.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
              IVF Success Rates and Factors
            </h2>
            <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />
            <p className="text-gray-600 text-sm leading-relaxed">
              The success rates of in vitro fertilization (IVF) can vary widely depending on numerous
              factors. Generally, the live birth rate per IVF cycle ranges from 35% to 50%, but individual
              success can be influenced by age, with younger women typically experiencing higher success
              rates. Other critical factors include the underlying causes of infertility, embryo quality,
              and the experience of the fertility clinic. Lifestyle factors such as smoking, alcohol
              consumption, and weight also play a significant role. Additionally, the use of advanced
              techniques like preimplantation genetic testing (PGT) can improve outcomes by ensuring the
              transfer of genetically viable embryos.
            </p>
          </div>

          <div className="flex-shrink-0 flex justify-center order-1 md:order-2 w-full md:w-auto">
            <img
              src={ivfImg2}
              alt="IVF Treatment cost illustration"
              className="w-64 md:w-[340px] object-contain"
            />
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 px-4 md:px-10 bg-pink-50 mx-2 md:mx-6 rounded-3xl mb-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
            <img
              src={ivfImg3}
              alt="Financing IVF Treatment"
              className="w-48 md:w-64 object-contain"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
              Financing options for IVF Treatment
            </h2>
            <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Facing the financial burden of IVF shouldn't prevent you from building your family. At Srijan
              IVF, we understand this. We offer a variety of financing options to make your IVF journey more
              accessible. This includes flexible payment plans, partnerships with third-party lenders, and
              even bundled packages that reduce the cost per cycle.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              We also recognize that some situations require extra support. Srijan IVF may offer financial
              assistance programs or discounts for specific groups like military personnel, healthcare
              workers, or those facing financial hardship. Don't hesitate to discuss your options with us.
              Our goal is to help you achieve parenthood, and finding the right financial approach is an
              important part of that journey.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-pink-600 mb-2">FAQs</h2>
          <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-8" />

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between px-5 py-4 bg-gray-50 hover:bg-pink-50 transition-colors duration-200 text-left"
                >
                  <span className="text-pink-600 font-semibold text-sm md:text-base pr-4">
                    {faq.q}
                  </span>
                  <span className="text-pink-500 font-bold text-xl shrink-0">
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-5 py-5 bg-white border-t border-gray-100">
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
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

export default IVFTreatmentPage;