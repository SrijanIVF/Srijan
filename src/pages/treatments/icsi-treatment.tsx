import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
//import Callus from "@/components/callbtn";
import WhatsAppButton from "@/components/WhatsAppButton";

import bannerImg from "@/assets/About-us-banner.jpg";

import icsiImg1 from "@/assets/Treatments/icsi.webp";
import icsiImg2 from "@/assets/Treatments/ICSI_Cost.webp";
import icsiImg3 from "@/assets/Treatments/ICSI-1.webp";
import icsiImg4 from "@/assets/Treatments/Intracytoplasmic-Sperm-Injection.webp";

const faqs = [
  {
    q: "1. ICSI vs IVF: Which is better?",
    a: (
      <>
        There isn't necessarily a "better" option between ICSI and IVF. The
        most suitable technique depends on the specific situation of the couple.
        Here's a breakdown:
        <br />
        <br />
        • <strong>ICSI:</strong> This is recommended for male factor
        infertility, such as low sperm count, poor motility, or blockages
        preventing sperm from reaching the egg.
        <br />
        <br />
        • <strong>IVF:</strong> This is a broader infertility treatment suitable
        for various situations, including female factor infertility,
        unexplained infertility, or issues with fertilization in previous
        cycles.
      </>
    ),
  },

  {
    q: "2. Can ICSI be done with donor sperm?",
    a: "Yes, ICSI can be successfully performed using donor sperm. This can be an option for couples with male factor infertility where the male partner cannot provide healthy sperm for fertilization.",
  },

  {
    q: "3. Is ICSI success rate higher than IVF?",
    a: "ICSI can have a higher fertilization rate compared to conventional IVF, particularly in cases with severe male factor infertility. However, it's important to remember that fertilization is just one step in the IVF process. Overall success rates (pregnancy and live birth) depend on various factors like egg quality, embryo development, and the woman's age and health.",
  },

  {
    q: "4. What are the alternatives to ICSI?",
    a: "There are alternative treatments like IUI (insemination) or ovulation medication, depending on the cause of infertility. Your doctor can advise on the most suitable option.",
  },
];

const ICSIPage = () => {
  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <>
      <Navbar />

      <section className="relative w-full h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src={bannerImg}
          alt="ICSI Banner"
          className="absolute inset-0 w-full h-full object-cover brightness-40"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/40 to-black/50" />

        <div className="relative z-10 px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            Intracytoplasmic sperm injection <br /> (ICSI)
          </h1>
        </div>
      </section>

      <section className="py-8 md:py-12 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 md:gap-10 items-center">

          <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
            <img
              src={icsiImg1}
              alt="ICSI Illustration"
              className="w-56 md:w-[340px] object-contain"
            />
          </div>

          <div className="flex-1">
            <div className="mb-10">
              <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
                What is Intracytoplasmic Sperm Injection (ICSI)
              </h2>

              <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-4" />

              <p className="text-gray-600 text-sm leading-relaxed">
                Intracytoplasmic sperm injection (ICSI), pronounced
                ik-see, is a specialized technique used during in vitro
                fertilization (IVF) to improve the chances of fertilization.
                Unlike conventional IVF where sperm fertilizes the egg naturally,
                ICSI injects a single healthy sperm directly into the mature
                egg’s cytoplasm.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
                ICSI Procedure Step-by-Step
              </h2>

              <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />

              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                ICSI is a precise procedure typically performed by a highly
                skilled embryologist:
              </p>

              <ul className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <li>
                  <strong className="text-gray-800">
                    Sperm Selection:
                  </strong>{" "}
                  A healthy sperm with good motility is chosen using
                  microscopic techniques.
                </li>

                <li>
                  <strong className="text-gray-800">
                    Egg Preparation:
                  </strong>{" "}
                  Mature eggs are retrieved from the woman’s ovaries through a
                  minor surgical procedure.
                </li>

                <li>
                  <strong className="text-gray-800">
                    Injection:
                  </strong>{" "}
                  Using a microscopic needle, the chosen sperm is carefully
                  injected directly into the cytoplasm of the egg.
                </li>

                <li>
                  <strong className="text-gray-800">
                    Fertilization Observation:
                  </strong>{" "}
                  The eggs are monitored for fertilization to occur.
                </li>

                <li>
                  <strong className="text-gray-800">
                    Embryo Development:
                  </strong>{" "}
                  If fertilization is successful, the fertilized eggs (embryos)
                  continue to develop in a controlled laboratory environment.
                </li>

                <li>
                  <strong className="text-gray-800">
                    Embryo Transfer:
                  </strong>{" "}
                  After a designated period, the healthiest embryo(s) are
                  selected for transfer back into the woman’s uterus.
                </li>

                <li>
                  <strong className="text-gray-800">
                    Pregnancy Testing:
                  </strong>{" "}
                  After a waiting period, a blood test is conducted to confirm
                  pregnancy.
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      <section className="py-14 md:py-20 px-4 md:px-10 bg-pink-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
              ICSI Cost per Cycle in 2026
            </h2>

            <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />

            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              The cost of ICSI can vary depending on several factors,
              including:
            </p>

            <ul className="space-y-3 text-gray-600 text-sm leading-relaxed list-disc pl-5 mb-5">
              <li>Location of the fertility clinic</li>
              <li>Medications used during the IVF cycle</li>
              <li>Number of ICSI attempts required</li>
              <li>Additional procedures needed (e.g., egg retrieval)</li>
            </ul>

            <p className="text-gray-600 text-sm leading-relaxed">
              On average, the cost of an ICSI cycle in India in 2026 can range
              from ₹2,10,000 to ₹2,60,000 INR. It’s important to note that this
              is a general estimate, and the actual cost may differ. Discussing
              the cost breakdown with your chosen fertility clinic during the
              consultation process is essential. Some clinics might offer
              bundled packages that include ICSI, or they may have financing
              options available.
            </p>
          </div>

          <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
            <img
              src={icsiImg2}
              alt="ICSI Cost"
              className="w-64 md:w-[340px] object-contain"
            />
          </div>

        </div>
      </section>

      <section className="py-14 md:py-20 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
            <img
              src={icsiImg3}
              alt="ICSI Financing"
              className="w-64 md:w-[380px] object-contain"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
              Financing Options for ICSI
            </h2>

            <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />

            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Similar to IVF, ICSI can be a significant financial investment.
              Here are some financing options to consider for your ICSI journey:
            </p>

            <ul className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <li>
                <strong className="text-gray-800">
                  Personal loans:
                </strong>{" "}
                Many banks offer personal loans specifically for medical
                procedures, including ICSI. This can be a flexible option, but
                be mindful of interest rates and repayment terms.
              </li>

              <li>
                <strong className="text-gray-800">
                  Fertility loans:
                </strong>{" "}
                Some lenders offer specialized loans specifically for fertility
                treatments like ICSI. These might have lower interest rates than
                personal loans, but they may also have stricter eligibility
                requirements.
              </li>

              <li>
                <strong className="text-gray-800">
                  Grants and programs:
                </strong>{" "}
                Certain organizations offer grants or financial assistance
                programs to help couples struggling with infertility afford
                ICSI.
              </li>

              <li>
                <strong className="text-gray-800">
                  Medical credit cards:
                </strong>{" "}
                Some medical credit cards offer introductory periods with 0%
                interest, which can be helpful for managing upfront costs.
              </li>

              <li>
                <strong className="text-gray-800">
                  Savings plans:
                </strong>{" "}
                Planning ahead and saving for ICSI can significantly ease the
                financial burden.
              </li>

              <li>
                <strong className="text-gray-800">
                  Clinic financing options:
                </strong>{" "}
                Discuss financing options with your chosen fertility clinic.
                They may offer payment plans or bundled packages.
              </li>
            </ul>
          </div>

        </div>
      </section>

      <section className="py-14 md:py-20 px-4 md:px-10 bg-pink-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
              ICSI with TESE/PESA
            </h2>

            <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />

            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              ICSI can be particularly beneficial when combined with sperm
              retrieval techniques like Testicular Sperm Aspiration (TESA) or
              Percutaneous Epididymal Sperm Aspiration (PESA). Here's a
              breakdown of this approach:
            </p>

            <div className="space-y-5 text-gray-600 text-sm leading-relaxed">

              <div>
                <p>
                  <strong className="text-gray-800">
                    When is it Used?
                  </strong>
                  <br />
                  This combination is often recommended for men with severe male
                  factor infertility. Conditions like low sperm count, poor
                  motility, or blockages preventing sperm from reaching the
                  ejaculate can be addressed.
                </p>
              </div>

              <div>
                <p>
                  <strong className="text-gray-800">
                    Process:
                  </strong>
                  <br />
                  <strong className="text-gray-800">
                    Sperm Retrieval:
                  </strong>{" "}
                  A urologist performs TESE or PESA to extract sperm directly
                  from the testicles or epididymis.
                  <br />
                  <strong className="text-gray-800">
                    ICSI Procedure:
                  </strong>{" "}
                  The retrieved sperm is then used for ICSI, where a single
                  healthy sperm is injected directly into the egg for
                  fertilization.
                  <br />
                  <strong className="text-gray-800">
                    Remaining Steps:
                  </strong>{" "}
                  The remaining steps of ICSI, such as embryo development,
                  transfer, and pregnancy testing, remain the same.
                </p>
              </div>

              <div>
                <p>
                  <strong className="text-gray-800">
                    Benefits:
                  </strong>
                  <br />
                  Combining ICSI with TESE/PESA allows couples with severe male
                  factor infertility to achieve fertilization and potentially
                  pregnancy, even when sperm is not present in the ejaculate.
                </p>
              </div>

            </div>
          </div>

          <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
            <img
              src={icsiImg4}
              alt="ICSI with TESE/PESA"
              className="w-64 md:w-[420px] object-contain"
            />
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
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
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

export default ICSIPage;