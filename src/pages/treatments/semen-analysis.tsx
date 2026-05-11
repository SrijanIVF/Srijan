import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
//import Callus from "@/components/callbtn";
import WhatsAppButton from "@/components/WhatsAppButton";

import bannerImg from "@/assets/About-us-banner.jpg";

import semenImg1 from "@/assets/Treatments/Semen_analysis-1.webp";
import semenImg2 from "@/assets/Treatments/Semenanalysis-labcost.webp";
import semenImg3 from "@/assets/Treatments/sementreatment-2048x2048.webp";

const faqs = [
    {
        q: "1. Who should undergo Semen Analysis?",
        a: (
            <>
                Semen analysis is recommended for men experiencing:
                <br />
                <br />
                • Difficulty conceiving with a partner (after a year of trying for
                non-older couples and 6 months for older couples)
                <br />
                <br />
                • Unexplained pelvic pain
                <br />
                <br />
                • Known risk factors for infertility (e.g., undescended testicles,
                varicocele)
                <br />
                <br />
                • Prior vasectomy to confirm its success
            </>
        ),
    },

    {
        q: "2. What does Semen Analysis measure?",
        a: (
            <>
                A semen analysis evaluates several key aspects of a man's semen:
                <br />
                <br />
                • <strong>Sperm count:</strong> The total number of sperm present in a milliliter (ml) of semen.
                <br />
                <br />
                • <strong>Sperm motility:</strong> The percentage of sperm that move actively and with a purpose.
                <br />
                <br />
                • <strong>Sperm morphology:</strong> The size and shape of the sperm, with normal shape being crucial for fertilization.
                <br />
                <br />
                • <strong>Semen volume:</strong> The total amount of fluid ejaculated.
                <br />
                <br />
                • <strong>pH level:</strong> The acidity or alkalinity of the semen, which should be slightly alkaline for optimal sperm health.
                <br />
                <br />
                • <strong>Other factors:</strong> Additionally, the presence of white blood cells or other abnormalities might be examined.
            </>
        ),
    },

    {
        q: "3. How is Semen Analysis interpreted?",
        a: (
            <>
                The World Health Organization (WHO) has established guidelines for semen analysis parameters. A doctor will interpret your results based on these guidelines. Here's a general overview:
                <br />
                <br />
                • <strong>Normal:</strong> Values fall within the WHO's reference ranges for sperm count, motility, morphology, volume, and pH.
                <br />
                <br />
                • <strong>Abnormal:</strong> One or more parameters fall below the reference ranges. The severity and specific abnormality will determine the next steps.
            </>
        ),
    },

    {
        q: "4. What affects Semen Analysis results?",
        a: (
            <>
                Several factors can influence semen analysis results:
                <br />
                <br />
                • <strong>Recent ejaculation frequency:</strong> Abstinence for too long or too short a period can impact results.
                <br />
                <br />
                • <strong>Lifestyle habits:</strong> Smoking, excessive alcohol intake, drug use, and obesity can negatively affect sperm health.
                <br />
                <br />
                • <strong>Medical conditions:</strong> Undescended testicles, varicocele (enlarged veins in the scrotum), infections, and certain medications can impact sperm.
                <br />
                <br />
                • <strong>Environmental factors:</strong> Exposure to toxins, pesticides, or extreme heat can affect sperm production.
            </>
        ),
    },

    {
        q: "5. How long does Semen Analysis take?",
        a: (
            <>
                The semen analysis itself takes a relatively short time to perform in the lab, typically a few hours.
                <br />
                <br />
                However, receiving the results can take 1-2 business days depending on the clinic's processing time.
            </>
        ),
    },

    {
        q: "6. What are the next steps after Semen Analysis?",
        a: (
            <>
                The next steps depend on the results:
                <br />
                <br />
                • <strong>Normal results:</strong> Further evaluation might focus on the female partner's fertility.
                <br />
                <br />
                • <strong>Abnormal results:</strong> Repeat testing may be recommended to confirm the abnormality. The doctor will discuss potential causes and treatment options based on the specific findings. These might include lifestyle changes, medications, surgery, or assisted reproductive techniques (ART) like IVF or ICSI.
            </>
        ),
    },
];

const SemenAnalysis = () => {
    const [openFaq, setOpenFaq] = useState(0);

    return (
        <>
            <Navbar />

            <section className="relative w-full h-[55vh] overflow-hidden">
                <img
                    src={bannerImg}
                    alt="Semen Analysis Banner"
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                    <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
                        Semen Analysis
                    </h1>
                </div>
            </section>

            <section className="py-8 md:py-12 px-4 md:px-8 bg-white">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 md:gap-10 items-center">

                    <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
                        <img
                            src={semenImg1}
                            alt="What is Semen Analysis"
                            className="w-72 md:w-[460px] object-contain"
                        />
                    </div>

                    <div className="flex-1">

                        <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
                            What is Semen Analysis?
                        </h2>

                        <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />

                        <p className="text-gray-600 text-sm leading-relaxed mb-5">
                            A semen analysis is a test that evaluates various aspects of a
                            man’s semen, providing insights into sperm health and fertility.
                            It analyses factors like:
                        </p>

                        <ul className="space-y-3 text-gray-600 text-sm leading-relaxed list-disc pl-5 mb-8">
                            <li>
                                <strong className="text-gray-800">Sperm count:</strong> The
                                total number of sperm in a sample.
                            </li>

                            <li>
                                <strong className="text-gray-800">Sperm motility:</strong> The
                                percentage of sperm that move actively.
                            </li>

                            <li>
                                <strong className="text-gray-800">Sperm morphology:</strong>{" "}
                                The size and shape of sperm.
                            </li>

                            <li>
                                <strong className="text-gray-800">Semen volume:</strong> The
                                total amount of fluid ejaculated.
                            </li>

                            <li>
                                <strong className="text-gray-800">pH level:</strong> The
                                acidity or alkalinity of the semen.
                            </li>
                        </ul>

                        <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
                            Semen analysis procedure step-by-step
                        </h2>

                        <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />

                        <p className="text-gray-600 text-sm leading-relaxed mb-5">
                            A semen analysis typically involves a simple process:
                        </p>

                        <ul className="space-y-3 text-gray-600 text-sm leading-relaxed list-disc pl-5">
                            <li>
                                <strong className="text-gray-800">
                                    Sample collection:
                                </strong>{" "}
                                You’ll be asked to produce a semen sample, often through masturbation, into a sterile container at home or a designated collection room at a clinic.
                            </li>

                            <li>
                                <strong className="text-gray-800">
                                    Abstinence period:
                                </strong>{" "}
                                You may be advised to abstain from ejaculation for a specific period before producing the sample, usually 2-7 days.
                            </li>

                            <li>
                                <strong className="text-gray-800">
                                    Sample delivery:
                                </strong>{" "}
                                The sample needs to be delivered to the lab within a short timeframe, following specific instructions for temperature maintenance.
                            </li>

                            <li>
                                <strong className="text-gray-800">Lab analysis:</strong>The semen sample is analyzed in a laboratory to assess the various parameters mentioned earlier.
                            </li>

                            <li>
                                <strong className="text-gray-800">Results:</strong> A doctor
                                will interpret the results and discuss them with you.
                            </li>
                        </ul>

                    </div>
                </div>
            </section>

            <section className="py-14 md:py-20 px-4 md:px-10 bg-pink-50">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

                    <div className="flex-1">

                        <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
                            Semen analysis cost 2026
                        </h2>

                        <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />

                        <p className="text-gray-600 text-sm leading-relaxed mb-5">
                            The cost of a semen analysis can vary depending on several
                            factors, including:
                        </p>

                        <ul className="space-y-3 text-gray-600 text-sm leading-relaxed list-disc pl-5 mb-8">
                            <li>Location of the clinic or lab</li>
                            <li>Physician’s fees</li>
                            <li>Lab fees</li>
                        </ul>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            <strong className="text-gray-800">
                                A general range for a semen analysis in 2026 in India might be
                                between ₹700 and ₹2,000.
                            </strong>{" "}
                            Insurance coverage can vary, so check with your provider to see
                            if they cover any portion of the test.
                        </p>

                    </div>

                    <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
                        <img
                            src={semenImg2}
                            alt="Semen Cost"
                            className="w-64 md:w-[420px] object-contain"
                        />
                    </div>

                </div>
            </section>

            <section className="py-14 md:py-20 px-4 md:px-10 bg-white">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

                    <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
                        <img
                            src={semenImg3}
                            alt="Semen Treatments"
                            className="w-72 md:w-[520px] object-contain"
                        />
                    </div>

                    <div className="flex-1">

                        <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
                            Abnormal semen analysis treatment options
                        </h2>

                        <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />

                        <p className="text-gray-600 text-sm leading-relaxed mb-5">
                            An abnormal semen analysis doesn’t necessarily mean infertility.
                            Treatment options for abnormal results depend on the specific
                            cause:
                        </p>

                        <ul className="space-y-3 text-gray-600 text-sm leading-relaxed list-disc pl-5 mb-8">
                            <li>
                                <strong className="text-gray-800">
                                    Lifestyle changes:
                                </strong>{" "}
                                Maintaining a healthy weight, reducing stress, and avoiding
                                smoking can improve sperm health.
                            </li>

                            <li>
                                <strong className="text-gray-800">Medications:</strong> Certain
                                medications may help improve sperm production or motility.
                            </li>

                            <li>
                                <strong className="text-gray-800">Surgery:</strong> In some
                                cases, surgery may be necessary to correct anatomical blockages.
                            </li>

                            <li>
                                <strong className="text-gray-800">
                                    Assisted reproductive techniques (ART):
                                </strong>{" "}
                                If sperm quality is a significant barrier to conception, options like IVF or ICSI (intracytoplasmic sperm injection) may be explored.
                            </li>
                        </ul>

                        <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
                            Semen analysis and fertility treatments
                        </h2>

                        <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />

                        <p className="text-gray-600 text-sm leading-relaxed mb-5">
                            A semen analysis is often one of the first steps in a fertility
                            evaluation for couples struggling to conceive.
                        </p>

                        <ul className="space-y-3 text-gray-600 text-sm leading-relaxed list-disc pl-5 mb-8">
                            <li>
                                <strong className="text-gray-800">
                                    Normal semen analysis:
                                </strong>{" "}
                                May indicate further evaluation might be needed for the female
                                partner.
                            </li>

                            <li>
                                <strong className="text-gray-800">
                                    Abnormal semen analysis:
                                </strong>{" "}
                                May suggest additional testing and potential treatment options.
                            </li>
                        </ul>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            <strong className="text-gray-800">
                                It’s important to remember that a semen analysis provides a snapshot of sperm health at a specific point in time. Repeat testing may be recommended to confirm results.
                            </strong>{" "}
                            Consulting a urologist or fertility specialist can help interpret the semen analysis results and determine the best course of action for your individual situation.
                        </p>

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

export default SemenAnalysis;