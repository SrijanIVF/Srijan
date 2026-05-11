import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
//import Callus from "@/components/callbtn";
import WhatsAppButton from "@/components/WhatsAppButton";

import bannerImg from "@/assets/About-us-banner.jpg";

import maleImg1 from "@/assets/Treatments/Male-Infertility-1-1.webp";
import maleImg2 from "@/assets/Treatments/Male-Infertility-Treatment-1.webp";
import maleImg3 from "@/assets/Treatments/Male_Infertility.webp";
import maleImg4 from "@/assets/Treatments/male-infertility-last.webp";

const faqs = [
  {
    q: "1. What causes Male Infertility?",
    a: "Male infertility can stem from sperm issues, blockages, hormonal imbalances, medical conditions, or lifestyle factors.",
  },

  {
    q: "2. What are the signs of Male Infertility?",
    a: (
      <>
        While there may not always be symptoms, difficulty conceiving after a
        year of trying is a key sign.
        <br />
        <br />
        • Small testicles
        <br />
        • Abnormal hair growth patterns
        <br />
        • Erectile dysfunction
        <br />
        • Pain or swelling in the testicles
      </>
    ),
  },

  {
    q: "3. How does age affect Male Infertility?",
    a: "Sperm quality can decline with age in men, just as female fertility decreases with age. While men can still father children well into their later years, sperm count, motility, and morphology may decrease over time, potentially impacting fertility.",
  },

  {
    q: "4. What is the success rate of Male Infertility treatments?",
    a: "Treatment success varies. Lifestyle changes and medications can sometimes improve sperm health. Surgery for blockages can also be effective. ART like ICSI has varying success rates, but can be promising. A doctor can offer a personalized estimate.",
  },

  {
    q: "5. When should I see a doctor for Male Infertility?",
    a: "Consider seeing a doctor after a year of trying to conceive (6 months for older couples).",
  },

  {
    q: "6. Can Male Infertility treatment guarantee pregnancy?",
    a: "No infertility treatment guarantees pregnancy, but many options can significantly increase the chances of conception. Talk to your doctor about your specific situation.",
  },
];

const MaleInfertilityPage = () => {
  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <>
      <Navbar />

      <section className="relative w-full h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src={bannerImg}
          alt="Male Infertility Banner"
          className="absolute inset-0 w-full h-full object-cover brightness-40"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/40 to-black/50" />

        <div className="relative z-10 px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            Male Infertility
          </h1>
        </div>
      </section>

      <section className="py-8 md:py-12 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 md:gap-10 items-center">

          <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
            <img
              src={maleImg1}
              alt="Male Infertility"
              className="w-56 md:w-[340px] object-contain"
            />
          </div>

          <div className="flex-1">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
                About Male Infertility
              </h2>

              <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-4" />

              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Male infertility is the inability of a man to achieve pregnancy
                with a fertile female partner after one year of trying. It’s a
                common concern affecting roughly 10-15% of couples globally.
                Various factors can play a role, including problems with sperm
                production, blockages in the male reproductive system, hormonal
                imbalances, medical conditions, and even lifestyle choices like
                smoking or excessive alcohol consumption.
              </p>

              <p className="text-gray-600 text-sm leading-relaxed">
                If you're facing challenges conceiving, a urologist or fertility
                specialist can help diagnose the cause of infertility and
                recommend suitable treatment options, ranging from lifestyle
                modifications and medications to surgery or assisted
                reproductive techniques like ICSI, to help you and your partner
                build a family.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="py-14 md:py-20 px-4 md:px-10 bg-pink-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
              Best Treatment for Male Infertility
            </h2>

            <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />

            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              There’s no single “best” treatment for male infertility. The most
              suitable approach depends on the underlying cause of infertility.
              Here’s a breakdown of some common treatment options:
            </p>

            <ul className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <li>
                <strong className="text-gray-800">
                  Lifestyle modifications:
                </strong>{" "}
                Maintaining a healthy weight, quitting smoking, reducing alcohol
                intake, and managing stress can improve sperm health in some
                cases.
              </li>

              <li>
                <strong className="text-gray-800">
                  Medications:
                </strong>{" "}
                Certain medications can stimulate sperm production, treat
                infections, or address hormonal imbalances.
              </li>

              <li>
                <strong className="text-gray-800">
                  Surgery:
                </strong>{" "}
                Procedures like varicocele repair or correcting blockages in the
                vas deferens can improve sperm quality or delivery.
              </li>

              <li>
                <strong className="text-gray-800">
                  Assisted reproductive techniques (ART):
                </strong>{" "}
                When other treatments fail, ART procedures like ICSI or
                surgical sperm retrieval (TESA/PESA) can help achieve pregnancy
                using the male partner’s sperm.
              </li>
            </ul>
          </div>

          <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
            <img
              src={maleImg2}
              alt="Male Infertility Treatment"
              className="w-64 md:w-[420px] object-contain"
            />
          </div>

        </div>
      </section>

      <section className="py-14 md:py-20 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
            <img
              src={maleImg3}
              alt="Male Infertility Cost"
              className="w-64 md:w-[340px] object-contain"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
              Cost of Male Infertility Treatment in Delhi
            </h2>

            <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />

            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              The cost of male infertility treatment in Delhi varies depending
              on the type of treatment, doctor’s fees, facility fees,
              medications, and case complexity. Here’s a general range (2026):
            </p>

            <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <li>
                <strong className="text-gray-800">
                  Semen analysis:
                </strong>{" "}
                ₹700 – ₹2,000
              </li>

              <li>
                <strong className="text-gray-800">
                  Medications:
                </strong>{" "}
                ₹1,000 – ₹5,000 per month
              </li>

              <li>
                <strong className="text-gray-800">
                  Varicocele repair surgery:
                </strong>{" "}
                ₹50,000 – ₹1,00,000
              </li>

              <li>
                <strong className="text-gray-800">
                  ICSI:
                </strong>{" "}
                ₹1,00,000 – ₹2,00,000 per cycle
              </li>
            </ul>

            <p className="text-gray-600 text-sm leading-relaxed mt-5">
              Consult a urologist for a personalized plan and cost estimate.
              Many clinics offer financial options.
            </p>
          </div>

        </div>
      </section>

      <section className="py-14 md:py-20 px-4 md:px-10 bg-pink-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
              Surgery for Male Infertility
            </h2>

            <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />

            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Surgery for male infertility is a viable option when blockages or
              other anatomical abnormalities are identified as the cause of
              infertility. Here are some common surgical procedures for male
              infertility:
            </p>

            <ul className="space-y-4 text-gray-600 text-sm leading-relaxed mb-8">
              <li>
                <strong className="text-gray-800">
                  Varicocele repair:
                </strong>{" "}
                This minimally invasive procedure corrects enlarged veins in the
                scrotum that can impair sperm production. By improving blood
                flow, varicocele repair can potentially improve sperm quality.
              </li>

              <li>
                <strong className="text-gray-800">
                  Vasectomy reversal:
                </strong>{" "}
                This microsurgical procedure attempts to reconnect the vas
                deferens, which were intentionally cut during a vasectomy
                sterilization surgery. A successful vasectomy reversal can
                restore sperm flow and allow for natural conception.
              </li>

              <li>
                <strong className="text-gray-800">
                  Microsurgical procedures for blockages:
                </strong>{" "}
                Blockages in the vas deferens or epididymis (the coiled tube
                that stores sperm) can be microsurgically repaired. These
                delicate procedures involve using magnification and specialized
                instruments to reconnect the blocked tubes. Microsurgical repair
                offers the possibility of natural conception without the need
                for assisted reproductive techniques (ART).
              </li>
            </ul>

            <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
              ICSI for Male Infertility
            </h2>

            <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />

            <p className="text-gray-600 text-sm leading-relaxed">
              ICSI (intracytoplasmic sperm injection) is a specialized form of
              IVF (in vitro fertilization) used when severe male infertility is
              a factor. During ICSI, a single healthy sperm is injected directly
              into an egg to achieve fertilization. This technique bypasses the
              need for sperm to fertilize the egg naturally and can be helpful
              for men with low sperm count, poor sperm motility, or blockages.
            </p>
          </div>

          <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
            <img
              src={maleImg4}
              alt="Male Infertility Surgery"
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

export default MaleInfertilityPage;