import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
//import Callus from "@/components/callbtn";
import WhatsAppButton from "@/components/WhatsAppButton";

import bannerImg from "@/assets/About-us-banner.jpg";

import iuiImg1 from "@/assets/Treatments/IUI-Vs-IVF-2048x2048.webp";
import iuiImg2 from "@/assets/Treatments/Cost-of-IUI.webp";
import iuiImg3 from "@/assets/Treatments/Intrauterine-Insemination-1.webp";

const faqs = [
    {
        q: "1. Is IUI 100% successful?",
        a: "No, IUI success rates are generally lower than IVF, typically ranging from 10–20% per cycle.",
    },

    {
        q: "2. What is the best age for IUI?",
        a: "Women under 35 typically have higher IUI success rates due to better egg quality.",
    },

    {
        q: "3. Are IUI babies healthy?",
        a: "Yes, there's no evidence suggesting IUI babies have any health problems compared to naturally conceived babies.",
    },

    {
        q: "4. Is IUI painful?",
        a: "IUI itself is generally not considered painful, though some might experience mild discomfort similar to a Pap smear.",
    },

    {
        q: "5. Is IUI better than natural?",
        a: "IUI can be a good option for certain fertility challenges, but it's not necessarily better than natural conception. Your doctor can help you decide if IUI is the right approach for your situation.",
    },
];

const IUIPage = () => {
    const [openFaq, setOpenFaq] = useState<number>(0);

    return (
        <>
            <Navbar />

            <section className="relative w-full h-[60vh] flex items-center justify-center text-center overflow-hidden">
                <img
                    src={bannerImg}
                    alt="IUI Banner"
                    className="absolute inset-0 w-full h-full object-cover brightness-40"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-pink-900/40 to-black/50" />

                <div className="relative z-10 px-4 max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
                        Intrauterine Insemination <br /> (IUI)
                    </h1>
                </div>
            </section>

            <section className="py-8 md:py-12 px-4 md:px-8 bg-white">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 md:gap-10 items-center">

                    <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
                        <img
                            src={iuiImg1}
                            alt="IUI Illustration"
                            className="w-56 md:w-[340px] object-contain"
                        />
                    </div>

                    <div className="flex-1">
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
                                What is Intrauterine Insemination (IUI)
                            </h2>

                            <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-4" />

                            <p className="text-gray-600 text-sm leading-relaxed">
                                Intrauterine insemination (IUI) is a fertility treatment that can help couples struggling with conception. It involves placing healthy sperm directly into the woman’s uterus, bypassing the cervix and increasing the chances of fertilization compared to natural intercourse. While not as complex as IVF, IUI can be a successful option for various fertility challenges.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
            <section className="py-14 md:py-20 px-4 md:px-10 bg-pink-50">
                <div className="max-w-6xl mx-auto bg-white rounded-3xl p-6 md:p-10">

                    <div className="mb-10">
                        <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
                            IUI Procedure Step-by-Step
                        </h2>

                        <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />

                        <p className="text-gray-600 text-sm leading-relaxed">
                            The IUI process typically involves several carefully planned steps to improve the chances of successful fertilization and pregnancy.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-6">

                        <ul className="space-y-4 text-gray-600 text-sm leading-relaxed">
                            <li>
                                <strong className="text-gray-800">
                                    Stimulation & Monitoring:
                                </strong>{" "}
                                In some cases, medications might be used to stimulate ovulation and produce multiple mature eggs, potentially increasing the success rate. This step involves blood tests and ultrasounds to monitor progress.
                            </li>

                            <li>
                                <strong className="text-gray-800">
                                    Sperm Collection:
                                </strong>{" "}
                                The male partner provides a semen sample through masturbation or using a special condom during intercourse. The sample is then processed in a laboratory to separate healthy, motile sperm.
                            </li>

                            <li>
                                <strong className="text-gray-800">
                                    Ovulation Timing:
                                </strong>{" "}
                                Ovulation prediction is crucial for IUI success. This can be done through ovulation predictor kits, basal body temperature tracking, or ultrasound monitoring.
                            </li>
                        </ul>

                        <ul className="space-y-4 text-gray-600 text-sm leading-relaxed">
                            <li>
                                <strong className="text-gray-800">
                                    IUI Procedure:
                                </strong>{" "}
                                The woman lies comfortably during the procedure, similar to a Pap smear. A thin catheter is inserted through the cervix and carefully guided into the uterus. The processed sperm sample is then injected directly into the uterus, bringing the sperm closer to the eggs for fertilization.
                            </li>

                            <li>
                                <strong className="text-gray-800">
                                    Luteal Phase Support:
                                </strong>{" "}
                                After IUI, medications like progesterone supplements might be prescribed to support the uterine lining and improve the chances of embryo implantation.
                            </li>

                            <li>
                                <strong className="text-gray-800">
                                    Pregnancy Testing:
                                </strong>{" "}
                                Approximately two weeks after IUI, a blood test is conducted to detect the presence of the pregnancy hormone (hCG) and confirm pregnancy, if successful.
                            </li>
                        </ul>

                    </div>

                </div>
            </section>

            <section className="py-14 md:py-20 px-4 md:px-10 bg-white">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

                    <div className="flex-1">
                        <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
                            Cost of IUI Procedure in 2026
                        </h2>

                        <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />

                        <p className="text-gray-600 text-sm leading-relaxed mb-5">
                            On average, a single IUI cycle in India in 2026 can range from ₹1,000 to ₹3,000 INR. Medications, if needed, can add another ₹5,000 to ₹10,000 INR to the overall cost. It’s essential to discuss the cost breakdown with your chosen clinic during the consultation process. Some insurance plans might offer partial coverage for IUI, so exploring your options with your insurance provider is recommended.
                            <br />
                            <br />
                            The cost of IUI can vary depending on several factors, including:
                        </p>

                        <ul className="space-y-3 text-gray-600 text-sm leading-relaxed list-disc pl-5">
                            <li>Location of the clinic</li>
                            <li>Medications used</li>
                            <li>Number of IUI cycles performed</li>
                            <li>Additional fertility procedures</li>
                        </ul>
                    </div>

                    <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
                        <img
                            src={iuiImg2}
                            alt="IUI Cost"
                            className="w-64 md:w-[340px] object-contain"
                        />
                    </div>

                </div>
            </section>

            <section className="py-14 md:py-20 px-4 md:px-10 bg-pink-50">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

                    <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
                        <img
                            src={iuiImg3}
                            alt="IUI vs IVF"
                            className="w-64 md:w-[340px] object-contain"
                        />
                    </div>

                    <div className="flex-1">
                        <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
                            IUI Vs IVF
                        </h2>

                        <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />

                        <p className="text-gray-600 text-sm leading-relaxed mb-5">
                            IUI and IVF are both fertility treatments, but they differ in complexity, success rates, and cost. IUI is a less invasive procedure that involves placing washed sperm directly into the uterus, increasing the chances of meeting the egg for fertilization. Success rates are typically lower than IVF, ranging from 10-20% per cycle. IUI is often recommended for mild male infertility, unexplained infertility, or situations where ovulation needs a boost.
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            In contrast, IVF is a multi-step process involving egg retrieval, fertilization outside the body, and embryo transfer. While more complex and expensive, IVF offers significantly higher success rates, especially for women with diminished ovarian reserve or severe male factor infertility. Ultimately, the choice between IUI and IVF depends on individual circumstances and the cause of infertility. Consulting a fertility specialist can help you determine the most suitable approach for your path to parenthood.
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

export default IUIPage;