import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
//import Callus from "@/components/callbtn";
import WhatsAppButton from "@/components/WhatsAppButton";

import bannerImg from "@/assets/About-us-banner.jpg";

import lahImg1 from "@/assets/Treatments/Lah-intro.webp";
import lahImg2 from "@/assets/Treatments/LAH-IVF.webp";
import lahImg3 from "@/assets/Treatments/lah-cost.webp";
import lahImg4 from "@/assets/Treatments/lahlEmbryo.webp";

const faqs = [
    {
        q: "1. Does LAH guarantee successful pregnancy?",
        a: "No, LAH doesn't guarantee a successful pregnancy. While it may improve implantation rates, embryo quality, uterine health, and several other fertility factors also influence success.",
    },

    {
        q: "2. Alternatives to LAH for IVF?",
        a: (
            <>
                There aren't direct alternatives to LAH, but some techniques may help
                depending on the case.
                <br />
                <br />
                <strong> • Blastocyst culture :</strong> Allowing embryos to develop for longer before transfer might result in a thinner zona pellucida, potentially reducing the need for LAH.
                <br />
                <strong> • Selection of embryos :</strong> Choosing embryos with a naturally thinner zona pellucida might eliminate the need for LAH.
                <br />
            </>
        ),
    },

    {
        q: "3. How Does LAH Work?",
        a: "LAH uses a specialized laser to create a small opening in the zona pellucida, the embryo's outer shell. This facilitates the hatching process, allowing the embryo to emerge and implant in the uterine lining.",
    },

    {
        q: "4. Who Can Benefit from LAH?",
        a: (
            <>
                LAH may be helpful for:
                <br />
                <br />
                • Thick zona pellucida <br />
                • Repeated implantation failures<br />
                • Older mothers
                <br />
                However, your doctor will assess your specific situation to determine if LAH is the best approach.
            </>
        ),
    },

    {
        q: "5. Does Insurance Cover LAH Treatment?",
        a: "Insurance coverage for LAH varies widely. It might be partially covered under some IVF plans, but not all. It's crucial to check with your specific insurance provider to understand their coverage details for LAH.",
    },
];

const LAHPage = () => {
    const [openFaq, setOpenFaq] = useState<number>(0);

    return (
        <>
            <Navbar />

            <section className="relative w-full h-[60vh] flex items-center justify-center text-center overflow-hidden">
                <img
                    src={bannerImg}
                    alt="LAH Banner"
                    className="absolute inset-0 w-full h-full object-cover brightness-40"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-pink-900/40 to-black/50" />

                <div className="relative z-10 px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
                        Laser Assisted Hatching (LAH)
                    </h1>
                </div>
            </section>

            <section className="py-8 md:py-12 px-4 md:px-8 bg-white">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 md:gap-10 items-center">

                    <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
                        <img
                            src={lahImg1}
                            alt="What is LAH"
                            className="w-56 md:w-[340px] object-contain"
                        />
                    </div>

                    <div className="flex-1">
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
                                What is LAH (Laser Assisted Hatching)?
                            </h2>

                            <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-4" />

                            <p className="text-gray-600 text-sm leading-relaxed mb-5">
                                Laser Assisted Hatching-LAH is a specialized technique used in conjunction with IVF (in vitro fertilization). It involves creating a small opening in the zona pellucida, the outer shell surrounding a blastocyst-stage embryo. The zona pellucida is essential for embryo development but can sometimes be too thick, potentially hindering implantation in the uterus. LAH aims to facilitate hatching, the natural process where the blastocyst breaks free from its shell to attach to the uterine lining.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            <section className="py-14 md:py-20 px-4 md:px-10 bg-pink-50">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

                    <div className="flex-1">
                        <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
                            Financing Options for LAH IVF
                        </h2>

                        <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />

                        <p className="text-gray-600 text-sm leading-relaxed mb-5">
                            The financial aspect of fertility treatments can be a concern. Here are some potential financing options to consider for LAH IVF:
                        </p>

                        <ul className="space-y-4 text-gray-600 text-sm leading-relaxed list-disc pl-5 mb-8">
                            <li>
                                <strong className="text-gray-800">
                                    Fertility clinics :
                                </strong>{" "}
                                Many clinics offer payment plans or financing options for IVF and add-on procedures like LAH..
                            </li>

                            <li>
                                <strong className="text-gray-800">
                                    Medical loans:
                                </strong>{" "}
                                Certain lenders specialize in medical loans, which can help cover fertility treatment costs.
                            </li>

                            <li>
                                <strong className="text-gray-800">
                                    Crowdfunding platforms:
                                </strong>{" "}
                                With proper research and transparency, crowdfunding platforms can be an option to raise funds for treatment.
                            </li>

                        </ul>
                    </div>

                    <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
                        <img
                            src={lahImg2}
                            alt="LAH Financing"
                            className="w-64 md:w-[420px] object-contain"
                        />
                    </div>

                </div>
            </section>

            <section className="py-14 md:py-20 px-4 md:px-10 bg-white">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

                    <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
                        <img
                            src={lahImg3}
                            alt="LAH vs ICSI"
                            className="w-64 md:w-[340px] object-contain"
                        />
                    </div>

                    <div className="flex-1">
                        <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
                            LAH vs. ICSI
                        </h2>

                        <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />

                        <p className="text-gray-600 text-sm leading-relaxed mb-5">
                            Both LAH and ICSI are techniques used in IVF, but they address different challenges:
                        </p>

                        <ul className="space-y-3 text-gray-600 text-sm leading-relaxed list-disc pl-5 mb-8``">
                            <li>
                                <strong className="text-gray-800">LAH:</strong> Focuses on assisting the embryo’s hatching process by creating an opening in the zona pellucida.
                            </li>

                            <li>
                                <strong className="text-gray-800">ICSI:</strong> Injects a single sperm directly into an egg for fertilization, bypassing the natural fertilization process. ICSI is used for male infertility factors like low sperm count or motility.
                            </li>
                        </ul>

                        <h2 className="text-xl md:text-2xl font-bold text-pink-600 mt-10 mb-2">
                            LAH Cost with IVF
                        </h2>

                        <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />

                        <p className="text-gray-600 text-sm leading-relaxed mb-5">
                            The cost of LAH is typically an add-on to the base cost of IVF. In Delhi (2026), LAH can range from ₹10,000 to ₹20,000. However, the exact cost can vary depending on several factors, including:
                        </p>

                        <ul className="space-y-3 text-gray-600 text-sm leading-relaxed list-disc pl-5 mb-8">
                            <li>
                                <strong className="text-gray-800">
                                    Clinic fees:
                                </strong>{" "}
                                The specific fertility clinic you choose may have varying pricing structures for LAH.
                            </li>

                            <li>
                                <strong className="text-gray-800">
                                    Doctor’s expertise:
                                </strong>{" "}
                                The experience and qualifications of the embryologist performing the procedure can influence the cost.
                            </li>
                        </ul>
                        <p>
                            <strong className="text-gray-800">
                                Lab fees:
                            </strong>{" "}
                            The specific equipment and techniques used for LAH can impact the associated lab fees.
                        </p>

                    </div>

                </div>
            </section>

            <section className="py-14 md:py-20 px-4 md:px-10 bg-pink-50 ">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

                    <div className="flex-1">
                        <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
                            Benefits of LAH for Embryo Implantation
                        </h2>

                        <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />

                        <p className="text-gray-600 text-sm leading-relaxed mb-5">
                            LAH offers potential benefits for embryo implantation during IVF:
                        </p>

                        <ul className="space-y-4 text-gray-600 text-sm leading-relaxed mb-8 list-disc pl-5">
                            <li>
                                <strong className="text-gray-800">
                                    Improved hatching:
                                </strong>{" "}
                                Creates an opening in the zona pellucida, potentially facilitating the embryo’s natural hatching process.
                            </li>

                            <li>
                                <strong className="text-gray-800">
                                    Enhanced implantation rates:
                                </strong>{" "}
                                Studies suggest LAH might improve implantation rates, especially for embryos with a thick zona pellucida.
                            </li>

                            <li>
                                <strong className="text-gray-800">
                                    Increased pregnancy chances:
                                </strong>{" "}
                                Improved implantation rates can lead to potentially higher pregnancy success rates with IVF cycles.
                            </li>

                        </ul>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            <strong>  It’s important to discuss LAH with your fertility specialist to determine if it’s suitable for your situation. </strong> They can evaluate your specific needs and explain the potential benefits and limitations of LAH within your personalized IVF treatment plan.
                        </p>
                    </div>

                    <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
                        <img
                            src={lahImg4}
                            alt="LAH Benefits"
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

export default LAHPage;