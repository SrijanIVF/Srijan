import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
//import Callus from "@/components/callbtn";
import WhatsAppButton from "@/components/WhatsAppButton";

import bannerImg from "@/assets/About-us-banner.jpg";

import eraImg1 from "@/assets/Treatments/Endometrial-intro.webp";
import eraImg2 from "@/assets/Treatments/IVf-Cost-.webp";
import eraImg3 from "@/assets/Treatments/ERA-Procedure.webp";
import eraImg4 from "@/assets/Treatments/ERA.webp";

const faqs = [
    {
        q: "1. Does a positive ERA test guarantee success?",
        a: "A positive ERA test, indicating optimal endometrial receptivity, increases the chances of successful IVF implantation but doesn't guarantee pregnancy. Other factors like embryo quality and underlying health conditions can also play a role.",
    },

    {
        q: "2. Does insurance cover ERA testing?",
        a: "Insurance coverage for the ERA test varies widely. Some plans may offer partial coverage, while others might not. It's crucial to check with your specific insurance provider to understand their coverage details for the ERA test.",
    },

    {
        q: "3. Can a negative ERA test be improved?",
        a: (
            <>
                If the ERA test indicates a non-receptive window, your doctor might recommend:
                <br />
                <br />
                • <strong>Transfer timing adjustment:</strong> The embryo transfer can
                be scheduled for the window identified as optimal by the ERA test.
                <br />
                <br />
                • <strong>Endometrial treatments:</strong> Certain medications or
                supplements might be used to enhance endometrial receptivity based on
                the specific results.
            </>
        ),
    },

    {
        q: "4. ERA test vs. biopsy: Which is better?",
        a: "Traditional biopsy methods for receptivity testing, like hormone level assessment or endometrial thickness measurement, may not be as accurate as the ERA test. The ERA test analyzes gene expression, providing a more precise picture of endometrial receptivity on a molecular level.",
    },

    {
        q: "5. Is the ERA test painful?",
        a: "The ERA test involves a biopsy, similar to a Pap smear. Local anesthesia is used to minimize discomfort. You may experience some mild, temporary cramping or spotting.",
    },
];

const ERA = () => {
    const [openFaq, setOpenFaq] = useState<number>(2);

    return (
        <>
            <Navbar />

            <section className="relative w-full h-[55vh] overflow-hidden">
                <img
                    src={bannerImg}
                    alt="ERA Banner"
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                    <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
                        Endometrial Receptivity Array (ERA)
                    </h1>
                </div>
            </section>

            <section className="py-8 md:py-12 px-4 md:px-8 bg-white">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 md:gap-10 items-center">

                    <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
                        <img
                            src={eraImg1}
                            alt="What is ERA"
                            className="w-56 md:w-[340px] object-contain"
                        />
                    </div>

                    <div className="flex-1">
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
                                What is Endometrial Receptivity Array (ERA)
                            </h2>

                            <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-4" />

                            <p className="text-gray-600 text-sm leading-relaxed">
                                <span className="text-pink-600 underline">
                                    Endometrial Receptivity Array (ERA)
                                </span>{" "}
                                is a specialized test used in conjunction with IVF to assess a
                                woman’s uterine lining receptivity for embryo implantation. By
                                analyzing gene expression in the endometrium (uterine lining),
                                the ERA test helps identify the ideal window for embryo
                                transfer, potentially increasing the chances of successful
                                pregnancy during IVF cycles.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            <section className="py-14 md:py-20 px-4 md:px-10 bg-pink-50">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

                    <div className="flex-1">
                        <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
                            ERA Test Cost for IVF in Delhi (2026)
                        </h2>

                        <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />

                        <p className="text-gray-600 text-sm leading-relaxed mb-5">
                            The cost of the ERA test in Delhi can vary depending on several
                            factors, including:
                        </p>

                        <ul className="space-y-4 text-gray-600 text-sm leading-relaxed list-disc pl-5">
                            <li>
                                <strong className="text-gray-800">
                                    Facility fees:
                                </strong>{" "}
                                The specific clinic or hospital performing the test can have
                                varying pricing structures.
                            </li>

                            <li>
                                <strong className="text-gray-800">
                                    Doctor’s fees:
                                </strong>{" "}
                                The consulting physician’s fees may influence the overall cost.
                            </li>

                            <li>
                                <strong className="text-gray-800">
                                    Lab fees:
                                </strong>{" "}
                                The processing and analysis involved in the ERA test can impact
                                the associated lab fees.
                            </li>
                        </ul>

                        <p className="text-gray-600 text-sm leading-relaxed mt-6">
                            In Delhi (2026), the ERA test might range from ₹35,000 to ₹50,000 or more.  It’s advisable to consult with your chosen fertility clinic to get a specific cost estimate for their services.  Additionally, some insurance plans might offer partial coverage for the ERA test.  Checking with your insurance provider can help you understand your coverage details.
                        </p>
                    </div>

                    <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
                        <img
                            src={eraImg2}
                            alt="ERA Cost"
                            className="w-64 md:w-[420px] object-contain"
                        />
                    </div>

                </div>
            </section>

            <section className="py-14 md:py-20 px-4 md:px-10 bg-white">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

                    <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
                        <img
                            src={eraImg3}
                            alt="ERA Procedure"
                            className="w-64 md:w-[340px] object-contain"
                        />
                    </div>

                    <div className="flex-1">
                        <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
                            ERA Procedure Step-by-Step
                        </h2>

                        <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />

                        <p className="text-gray-600 text-sm leading-relaxed mb-5">
                            The ERA test involves these general steps:
                        </p>

                        <ul className="space-y-4 text-gray-600 text-sm leading-relaxed list-disc pl-5">
                            <li>
                                <strong className="text-gray-800">
                                    Timed endometrial biopsy:
                                </strong>{" "}
                                During a menstrual cycle, a small tissue sample is collected
                                from the endometrium at a specific time point determined by your
                                doctor based on your typical cycle.
                            </li>

                            <li>
                                <strong className="text-gray-800">
                                    Sample processing:
                                </strong>{" "}
                                The endometrial tissue sample is sent to a specialized
                                laboratory for analysis.
                            </li>

                            <li>
                                <strong className="text-gray-800">
                                    Gene expression analysis:
                                </strong>{" "}
                                Advanced technology is used to analyze the activity of specific
                                genes in the endometrial tissue.
                            </li>

                            <li>
                                <strong className="text-gray-800">
                                    Results interpretation:
                                </strong>{" "}
                                The lab results will indicate the specific window of endometrial
                                receptivity considered most favorable for embryo implantation.
                            </li>
                        </ul>
                    </div>

                </div>
            </section>

            <section className="py-14 md:py-20 px-4 md:px-10 bg-pink-50">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

                    <div className="flex-1">

                        <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
                            ERA vs. Receptivity Testing
                        </h2>

                        <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />

                        <p className="text-gray-600 text-sm leading-relaxed mb-5">
                            While both ERA and other endometrial receptivity tests aim to
                            assess uterine lining receptivity, there are key differences:
                        </p>

                        <ul className="space-y-4 text-gray-600 text-sm leading-relaxed list-disc pl-5 mb-8">
                            <li>
                                <strong className="text-gray-800">ERA:</strong> Analyzes gene
                                expression to identify the ideal window for implantation.
                            </li>

                            <li>
                                <strong className="text-gray-800">
                                    Other tests:
                                </strong>{" "}
                                May measure hormone levels or endometrial thickness, which may
                                not always accurately predict optimal implantation timing.
                            </li>
                        </ul>

                        <p className="text-gray-600 text-sm leading-relaxed mb-8">
                            ERA offers a more precise approach by analyzing the endometrial
                            lining’s readiness on a molecular level.
                        </p>

                        <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
                            Benefits of ERA Test Before IVF Transfer
                        </h2>

                        <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />

                        <p className="text-gray-600 text-sm leading-relaxed mb-5">
                            The ERA test offers potential benefits for couples undergoing IVF:
                        </p>

                        <ul className="space-y-4 text-gray-600 text-sm leading-relaxed list-disc pl-5 mb-8">
                            <li>
                                Improved success rates: Identifying the optimal window for
                                embryo transfer may lead to higher pregnancy success rates in
                                IVF cycles.
                            </li>

                            <li>
                                Reduced failed transfers: Performing the transfer at the most
                                receptive time could decrease the likelihood of failed
                                implantation.
                            </li>

                            <li>
                                Personalized approach: The ERA test provides personalized
                                information to tailor the IVF transfer timing for each patient.
                            </li>
                        </ul>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            <strong>
                                It’s important to discuss the ERA test with your fertility
                                specialist to understand if it’s suitable for your situation.
                            </strong>{" "}
                            They can explain the potential benefits and limitations based on
                            your individual medical history and specific needs within your IVF
                            treatment plan.
                        </p>

                    </div>

                    <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
                        <img
                            src={eraImg4}
                            alt="ERA Benefits"
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

export default ERA;