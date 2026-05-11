import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
//import Callus from "@/components/callbtn";
import WhatsAppButton from "@/components/WhatsAppButton";

import bannerImg from "@/assets/About-us-banner.jpg";

import blastImg1 from "@/assets/Treatments/Blastocyst-intro.webp";
import blastImg2 from "@/assets/Treatments/Blastocyst-2.webp";
import blastImg3 from "@/assets/Treatments/Blastocyst-Culture-cost.webp";
import blastImg4 from "@/assets/Treatments/Benefits-Blastocyst.webp";
import blastImg5 from "@/assets/Treatments/Blastocyst-Culture.webp";

const faqs = [
  {
    q: "1. Does blastocyst culture guarantee success?",
    a: "No, blastocyst culture does not guarantee pregnancy success. However, it may improve implantation chances by selecting stronger embryos.",
  },

  {
    q: "2. Is blastocyst culture right for everyone undergoing IVF?",
    a: (
      <>
        Not necessarily. Blastocyst culture may not be suitable for everyone.
        Here’s why:
        <br />
        <br />
        • Embryo development: Not all embryos develop well enough to reach the
        blastocyst stage.
        <br />
        <br />
        • Number of embryos: If there are few embryos, reaching blastocyst stage
        might not be feasible.
        <br />
        <br />
        • Risk of arrest: Some embryos might stop developing before reaching
        blastocyst.
        <br />
        <br />
        Your doctor will assess your situation and advise if blastocyst culture
        is the best option.
      </>
    ),
  },

  {
    q: "3. Can I get pregnant with a day 3 embryo transfer?",
    a: "Yes, pregnancy is possible with a day 3 embryo transfer. Your fertility specialist will recommend the best embryo transfer stage depending on embryo quality and your medical condition.",
  },

  {
    q: "4. Who is a good candidate for blastocyst culture?",
    a: (
      <>
        Blastocyst culture might be beneficial for individuals with:
        <br />
        <br />
        • Good quality embryos
        <br />
        <br />
        • No risk of low embryo development beyond cleavage stage
        <br />
        <br />
        • Favorable number of embryos for transfer
      </>
    ),
  },

  {
    q: "5. Is blastocyst culture covered by insurance?",
    a: "Insurance coverage for blastocyst culture depends on your insurance provider and policy. It is best to check directly with your provider for exact details.",
  },
];

const BlastocystCulture = () => {
  const [openFaq, setOpenFaq] = useState(1);

  return (
    <>
      <Navbar />

      <section className="relative w-full h-[55vh] overflow-hidden">
        <img
          src={bannerImg}
          alt="Blastocyst Culture Banner"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
            Blastocyst Culture
          </h1>
        </div>
      </section>

      <section className="py-8 md:py-12 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 md:gap-10 items-center">

          <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
            <img
              src={blastImg1}
              alt="Blastocyst Culture"
              className="w-72 md:w-[420px] object-contain"
            />
          </div>

          <div className="flex-1">

            <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
              What is Blastocyst Culture
            </h2>

            <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />

            <p className="text-gray-600 text-sm leading-relaxed">
              <span className="text-pink-600 underline">
                Blastocyst Culture
              </span>{" "}
              is a technique used in IVF (in vitro fertilization) where embryos
              are allowed to develop for an extended period in the lab,
              reaching the blastocyst stage. A blastocyst is a more mature stage
              of embryo development compared to a cleavage-stage embryo,
              potentially offering advantages for implantation success.
            </p>

          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 px-4 md:px-10 bg-pink-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex-1">

            <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
              Blastocyst Hatching vs. Non-Hatching Embryos
            </h2>

            <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />

            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              During implantation, the blastocyst hatches from its outer shell
              (zona pellucida) to attach to the uterine lining. Assisted
              hatching techniques can be used to create a small opening in the
              zona pellucida to potentially aid implantation.
            </p>

            <ul className="space-y-4 text-gray-600 text-sm leading-relaxed list-disc pl-5">
              <li>
                <strong className="text-gray-800">
                  Blastocyst Hatching:
                </strong>{" "}
                May be considered for embryos with a thicker zona pellucida that
                might hinder implantation.
              </li>

              <li>
                <strong className="text-gray-800">
                  Non-Hatching Embryos:
                </strong>{" "}
                For embryos with a thinner zona pellucida, natural hatching
                might be sufficient.
              </li>
            </ul>

            <p className="text-gray-600 text-sm leading-relaxed mt-6">
              The decision on assisted hatching is typically made by the
              embryologist based on the specific characteristics of each embryo.
            </p>

          </div>

          <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
            <img
              src={blastImg2}
              alt="Blastocyst Hatching"
              className="w-64 md:w-[400px] object-contain"
            />
          </div>

        </div>
      </section>

      <section className="py-14 md:py-20 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
            <img
              src={blastImg3}
              alt="Blastocyst Cost"
              className="w-72 md:w-[460px] object-contain"
            />
          </div>

          <div className="flex-1">

            <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
              Blastocyst Culture Cost (2026)
            </h2>

            <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />

            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              The cost of blastocyst culture varies widely depending on several
              factors including clinic fees, doctor’s fees, and laboratory
              fees.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              In Delhi, as of 2026, opting for blastocyst culture typically
              adds an additional ₹20,000 to ₹40,000 to the base cost of IVF.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed">
              For a precise and personalized estimate, it is advisable to
              consult directly with your chosen clinic.
            </p>

          </div>

        </div>
      </section>

      <section className="py-14 md:py-20 px-4 md:px-10 bg-pink-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex-1">

            <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
              Blastocyst vs. Cleavage Stage Embryo Transfer
            </h2>

            <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />

            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Traditionally, embryo transfer in IVF happened at the cleavage
              stage (3–5 days after egg retrieval). Blastocyst culture allows
              for transfer at a later stage (5–6 days).
            </p>

            <p className="text-gray-700 text-sm font-semibold mb-4">
              Blastocyst Transfer: Offers potential advantages like:
            </p>

            <ul className="space-y-4 text-gray-600 text-sm leading-relaxed list-disc pl-5 mb-8">
              <li>
                Selection of more developed and potentially stronger embryos.
              </li>

              <li>
                Improved synchronization with the natural implantation window in
                the uterus.
              </li>
            </ul>

            <p className="text-gray-700 text-sm font-semibold mb-4">
              Cleavage Stage Transfer: May be preferred in certain situations:
            </p>

            <ul className="space-y-4 text-gray-600 text-sm leading-relaxed list-disc pl-5">
              <li>
                Risk of low embryo quality or development arrest beyond the
                cleavage stage.
              </li>

              <li>
                Limited number of embryos available for transfer.
              </li>

              <li>
                Your doctor will recommend the most suitable transfer stage
                based on your individual circumstances.
              </li>
            </ul>

          </div>

          <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
            <img
              src={blastImg4}
              alt="Embryo Transfer"
              className="w-72 md:w-[520px] object-contain"
            />
          </div>

        </div>
      </section>

      <section className="py-14 md:py-20 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
            <img
              src={blastImg5}
              alt="Benefits"
              className="w-72 md:w-[420px] object-contain"
            />
          </div>

          <div className="flex-1">

            <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
              Benefits of Blastocyst Culture
            </h2>

            <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />

            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Blastocyst culture offers several potential advantages for couples
              undergoing IVF:
            </p>

            <ul className="space-y-4 text-gray-600 text-sm leading-relaxed list-disc pl-5">
              <li>
                <strong className="text-gray-800">
                  Improved embryo selection:
                </strong>{" "}
                Allows the selection of embryos that have successfully reached a
                more advanced stage of development.
              </li>

              <li>
                <strong className="text-gray-800">
                  Increased implantation rates:
                </strong>{" "}
                Blastocysts may have a higher chance of successful implantation
                compared to cleavage-stage embryos.
              </li>

              <li>
                <strong className="text-gray-800">
                  Reduced risk of multiple pregnancy:
                </strong>{" "}
                Since blastocysts are more developed, fewer embryos may be
                needed for transfer.
              </li>
            </ul>

          </div>

        </div>
      </section>

      <section className="py-12 md:py-16 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-bold text-pink-600 mb-2">
            FAQs
          </h2>

          <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-8" />

          <div className="flex flex-col gap-3">

            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? -1 : index)
                  }
                  className="w-full flex items-center justify-between px-5 py-4 bg-gray-50 hover:bg-pink-50 transition-colors duration-200 text-left"
                >
                  <span className="text-pink-600 font-semibold text-sm md:text-base pr-4">
                    {faq.q}
                  </span>

                  <span className="text-pink-500 font-bold text-2xl shrink-0">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>

                {openFaq === index && (
                  <div className="px-5 py-5 bg-white border-t border-gray-100">
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

export default BlastocystCulture;