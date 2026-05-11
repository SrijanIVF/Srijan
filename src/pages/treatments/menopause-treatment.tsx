import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
//import Callus from "@/components/callbtn";
import WhatsAppButton from "@/components/WhatsAppButton";

import bannerImg from "@/assets/About-us-banner.jpg";

import menopauseImg1 from "@/assets/Treatments/Menopause.webp";
import menopauseImg2 from "@/assets/Treatments/Symptoms-1.webp";
import menopauseImg3 from "@/assets/Treatments/Complications-.webp";
import menopauseImg4 from "@/assets/Treatments/Treatment-options.webp";

const faqs = [
  {
    q: "1. When Will You Experience Menopause?",
    a: "Unfortunately, predicting the exact timing of menopause is difficult. The average age for menopause is around 51, but it can occur anywhere from the late 40s to the early 60s. Factors like genetics, family history, lifestyle habits, and certain medical conditions can influence when a woman experiences menopause.",
  },

  {
    q: "2. Can Menopause Cause Weight Gain?",
    a: "Weight gain is a common concern during menopause. While hormonal changes can affect metabolism and fat distribution, other factors like diet, exercise, and age can also play a role. Maintaining a healthy lifestyle with balanced nutrition and regular physical activity can help manage weight gain during this transition.",
  },

  {
    q: "3. Treatments for Hot Flashes During Menopause?",
    a: "Hot flashes: Hormone therapy is most effective, but discuss risks with your doctor. Lifestyle changes (cool environment, stress management, breathable clothing) and dietary adjustments (reduce caffeine, alcohol, spicy foods) may also help.",
  },

  {
    q: "4. Can I Get Tested to Confirm Menopause?",
    a: "There isn't a single definitive test for menopause. However, doctors might use a combination of factors like menopausal symptoms, blood tests to assess hormone levels, and menstrual history to diagnose menopause. A blood test for Follicle Stimulating Hormone (FSH) can be one indicator, but it's not conclusive on its own. If you haven't had a period for 12 months, menopause is typically confirmed.",
  },

  {
    q: "5. Can I Still Get Pregnant During Menopause?",
    a: "Technically, yes, pregnancy is still possible in the early stages of perimenopause (the years leading up to menopause) if ovulation still occurs. However, the chances are very low due to the decline in fertility as a woman approaches menopause. Once menopause is confirmed (no periods for 12 months), pregnancy is not possible naturally.",
  },
];

const Menopause = () => {
  const [openFaq, setOpenFaq] = useState(2);

  return (
    <>
      <Navbar />

      <section className="relative w-full h-[55vh] overflow-hidden">
        <img
          src={bannerImg}
          alt="Menopause"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
            Menopause
          </h1>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex justify-center w-full md:w-auto">
            <img
              src={menopauseImg1}
              alt="Menopause"
              className="w-72 md:w-[420px] object-contain"
            />
          </div>

          <div className="flex-1">

            <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
              What is Menopause?
            </h2>

            <div className="w-16 h-0.5 bg-pink-500 mb-6" />

            <p className="text-gray-600 text-sm leading-relaxed">
              <span className="text-pink-600 underline font-semibold">
                Menopause
              </span>{" "}
              marks the natural end of a woman’s menstrual cycle. It’s
              diagnosed after 12 months without a menstrual period. Typically
              occurring in the late 40s or early 50s, menopause signifies the
              permanent cessation of ovulation (egg release) and a decline in
              estrogen and progesterone production by the ovaries.
            </p>

          </div>

        </div>
      </section>

      <section className="py-14 md:py-20 px-4 md:px-10 bg-pink-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex-1">

            <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
              Menopause Symptoms
            </h2>

            <div className="w-16 h-0.5 bg-pink-500 mb-6" />

            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              The hormonal changes associated with menopause can trigger
              various symptoms, including:
            </p>

            <ul className="list-disc pl-5 space-y-3 text-gray-600 text-sm leading-relaxed">

              <li>
                <strong>
                  Vasomotor symptoms (hot flashes and night sweats):
                </strong>{" "}
                Sudden feelings of warmth, flushing, and sweating, often
                accompanied by heart palpitations.
              </li>

              <li>
                <strong>Vaginal dryness and discomfort:</strong> Reduced
                estrogen levels can cause vaginal dryness, making intercourse
                painful and affecting bladder control.
              </li>

              <li>
                <strong>Irregular periods:</strong> Periods may become lighter,
                heavier, or skip altogether in the years leading up to
                menopause.
              </li>

              <li>
                <strong>Sleep problems:</strong> Difficulty falling asleep,
                staying asleep, or experiencing restless sleep can be common.
              </li>

              <li>
                <strong>Mood changes:</strong> Irritability, anxiety, and mild
                depression can occur due to hormonal fluctuations.
              </li>

              <li>
                <strong>Changes in physical appearance:</strong> Weight gain,
                thinning hair, and dry skin can be associated with menopause.
              </li>

            </ul>

            <p className="text-gray-600 text-sm leading-relaxed mt-5">
              Not all women experience all these symptoms, and the severity can
              vary significantly.
            </p>

          </div>

          <div className="flex justify-center w-full md:w-auto">
            <img
              src={menopauseImg2}
              alt="Symptoms"
              className="w-72 md:w-[430px] object-contain"
            />
          </div>

        </div>
      </section>

      <section className="py-14 md:py-20 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex justify-center w-full md:w-auto">
            <img
              src={menopauseImg3}
              alt="Complications"
              className="w-72 md:w-[400px] object-contain"
            />
          </div>

          <div className="flex-1">

            <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
              Complications After Menopause
            </h2>

            <div className="w-16 h-0.5 bg-pink-500 mb-6" />

            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              While not immediate consequences, menopause can increase the risk
              of certain health concerns over time:
            </p>

            <ul className="list-disc pl-5 space-y-3 text-gray-600 text-sm leading-relaxed">

              <li>
                <strong>Osteoporosis:</strong> Reduced estrogen levels can lead
                to decreased bone density, increasing the risk of osteoporosis
                and fractures.
              </li>

              <li>
                <strong>Heart disease:</strong> The risk of heart disease can
                increase after menopause due to hormonal changes.
              </li>

              <li>
                <strong>Urinary tract infections (UTIs):</strong> Vaginal
                dryness and changes in vaginal flora can make women more
                susceptible to UTIs.
              </li>

            </ul>

          </div>

        </div>
      </section>

      <section className="py-14 md:py-20 px-4 md:px-10 bg-pink-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex-1">

            <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
              Treatment options for Menopause
            </h2>

            <div className="w-16 h-0.5 bg-pink-500 mb-6" />

            <p className="text-gray-600 text-sm leading-relaxed">
              Menopause treatment options include hormone replacement therapy
              (HRT) to alleviate symptoms like hot flashes and night sweats,
              lifestyle changes such as balanced diet and regular exercise, and
              non-hormonal medications like antidepressants for mood swings.
              Additionally, vaginal estrogen can address vaginal dryness, while
              alternative therapies such as acupuncture and herbal supplements
              may provide relief for some women. Regular consultations with a
              healthcare provider are essential to tailor treatment plans to
              individual needs and monitor for potential risks associated with
              certain therapies.
            </p>

          </div>

          <div className="flex justify-center w-full md:w-auto">
            <img
              src={menopauseImg4}
              alt="Treatment"
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

export default Menopause;