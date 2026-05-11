import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
//import Callus from "@/components/callbtn";
import WhatsAppButton from "@/components/WhatsAppButton";

import bannerImg from "@/assets/About-us-banner.jpg";

import picsiImg from "@/assets/Treatments/PICSI-intro.webp";
import stepImg from "@/assets/Treatments/PICSI-step.webp";
import costImg from "@/assets/Treatments/PICSi_Cost.webp";
import compareImg from "@/assets/Treatments/PICSI-Procedure.webp";

const faqs = [
    {
        q: "1. Why Use PICSI?",
        a: "PICSI aims to select healthier sperm for fertilization, potentially improving embryo development and implantation success.",
    },

    {
        q: "2. How Successful is PICSI?",
        a: "The success of PICSI depends on various factors. While some studies suggest potential benefits in terms of fertilization rates and embryo quality, the evidence regarding its impact on pregnancy success rates is still evolving.",
    },

    {
        q: "3. Is PICSI Covered by Insurance?",
        a: "Insurance coverage for PICSI varies widely. There may be partial coverage for IVF, but coverage for add-on procedures like PICSI is less common. It's crucial to check with your specific insurance provider to understand their coverage details.",
    },

    {
        q: "4. Is PICSI Right for My Male Infertility Case?",
        a: (
            <div className="space-y-4">
                <p>PICSI might be beneficial if you have:</p>

                <ul className="list-disc pl-5 space-y-2">
                    <li>Low sperm count</li>
                    <li>Poor sperm motility</li>
                    <li>Concerns about sperm DNA fragmentation</li>
                </ul>

                <p>Talk to your doctor to see if PICSI fits your needs.</p>
            </div>
        ),
    },

    {
        q: "5. Does PICSI Increase Pregnancy Success Rates?",
        a: "The evidence for PICSI's impact on pregnancy success rates is not yet conclusive. Some studies suggest potential benefits, while others haven't shown a significant difference compared to standard ICSI. More research is needed to definitively establish its effectiveness in this area.",
    },
    {
        q: "6. Benefits of PICSI:",
        a: (
            <div className="space-y-4">
                <p>
                    PICSI offers several potential benefits for couples
                    undergoing IVF:
                </p>

                <ul className="list-disc pl-5 space-y-2">
                    <li>
                        <strong>Better Sperm Choice:</strong> PICSI may
                        select sperm with improved fertilization potential.
                    </li>

                    <li>
                        <strong>Potentially Healthier Embryos:</strong>
                        Sperm selected through PICSI could lead to better
                        embryo development.
                    </li>

                    <li>
                        <strong>
                            Possible Benefit for Sperm Quality Issues:
                        </strong>{" "}
                        PICSI might be helpful for men with low sperm
                        motility or morphology.
                    </li>
                </ul>
            </div>
        ),
    },
];

const PICSI = () => {
    const [openFaq, setOpenFaq] = useState<number>(0);

    return (
        <>
            <Navbar />

            <section className="relative w-full h-[45vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
                <img
                    src={bannerImg}
                    alt="PICSI Banner"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/40" />

                <div className="relative z-10 text-center px-4">
                    <h1 className="text-white text-3xl md:text-6xl font-bold leading-tight">
                        Physiological Intra-Cytoplasmic
                        <br />
                        Sperm Injection (PICSI)
                    </h1>
                </div>
            </section>

            <section className="py-10 md:py-14 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    <div className="flex justify-center">
                        <img
                            src={picsiImg}
                            alt="PICSI"
                            className="w-full max-w-md object-contain"
                        />
                    </div>

                    <div>
                        <h2 className="text-[#e45b8c] text-xl md:text-2xl font-bold leading-tight">
                            What is Physiological Intra-Cytoplasmic Sperm Injection (PICSI)
                        </h2>

                        <div className="w-20 h-[2px] bg-[#e45b8c] mt-4 mb-6" />

                        <p className="text-gray-600 text-sm leading-relaxed">
                            <span className="font-semibold text-[#e45b8c] underline">
                                Physiological Intra Cytoplasmic Sperm Injection PICSI
                            </span>{" "}
                            is an advanced sperm selection technique used in conjunction with IVF
                            (In vitro fertilization). It aims to choose the healthiest sperm for
                            fertilization, potentially improving the chances of successful
                            implantation and pregnancy.
                        </p>
                    </div>

                </div>
            </section>

            <section className="bg-[#fde8ef] py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-4 md:px-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                        <div>
                            <h2 className="text-[#e45b8c] text-xl md:text-2xl font-bold leading-tight">
                                PICSI Procedure Step-by-Step
                            </h2>

                            <div className="w-20 h-[2px] bg-[#e45b8c] mt-4 mb-6" />

                            <div className="space-y-3 text-gray-600 text-sm leading-relaxed">

                                <p>PICSI involves these general steps:</p>

                                <p>
                                    <strong>• Semen collection and preparation:</strong> Similar to
                                    standard IVF, a semen sample is collected.
                                </p>

                                <p>
                                    <strong>• Sperm selection:</strong> The semen is processed, and
                                    sperm cells are placed in a specialized dish containing a solution
                                    with hyaluronic acid (a substance naturally present in the egg’s
                                    surrounding area).
                                </p>

                                <p>
                                    <strong>• Motile sperm binding:</strong> Only mature sperm with good
                                    motility are attracted to and bind with the hyaluronic acid.
                                </p>

                                <p>
                                    <strong>• Selection of bound sperm:</strong> These bound sperm are
                                    considered potentially healthier and more likely to successfully
                                    fertilize an egg.
                                </p>

                                <p>
                                    <strong>• ICSI:</strong> The selected sperm are then used for ICSI,
                                    where a single sperm is injected directly into an egg for
                                    fertilization.
                                </p>

                            </div>
                        </div>

                        <div className="flex justify-center">
                            <img
                                src={stepImg}
                                alt="PICSI Steps"
                                className="w-full max-w-lg object-contain"
                            />
                        </div>

                    </div>

                </div>
            </section>

            <section className="py-12 md:py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 md:px-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                        <div>
                            <h2 className="text-[#e45b8c] text-xl md:text-2xl font-bold leading-tight">
                                Cost of PICSI Treatment (2026)
                            </h2>

                            <div className="w-20 h-[2px] bg-[#e45b8c] mt-4 mb-6" />

                            <div className="space-y-5 text-gray-600 text-sm leading-relaxed">

                                <p>
                                    In 2026, Physiological Intracytoplasmic Sperm Injection (PICSI)
                                    treatment typically ranges between ₹100,000 and ₹230,000 in addition
                                    to the base cost of in vitro fertilization (IVF), which itself can
                                    range from ₹800,000 to ₹1,000,000 per cycle.
                                </p>

                                <p>
                                    PICSI is an advanced reproductive technology used in conjunction
                                    with IVF to select sperm based on their ability to bind to
                                    hyaluronic acid, aiming to increase the likelihood of successful
                                    fertilization and embryo development.
                                </p>

                                <p>
                                    While this technique can add a notable expense to the overall cost of fertility treatment, many couples consider it a worthwhile investment for its potential to enhance fertility outcomes.
                                </p>

                            </div>
                        </div>

                        <div className="flex justify-center">
                            <img
                                src={costImg}
                                alt="PICSI Cost"
                                className="w-full max-w-md object-contain"
                            />
                        </div>

                    </div>

                </div>
            </section>

            <section className="bg-[#fde8ef] py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-4 md:px-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                        <div className="flex justify-center">
                            <img
                                src={compareImg}
                                alt="PICSI vs ICSI"
                                className="w-full max-w-md object-contain"
                            />
                        </div>

                        <div>

                            <h2 className="text-[#e45b8c] text-xl md:text-2xl font-bold leading-tight">
                                PICSI vs ICSI
                            </h2>

                            <div className="w-20 h-[2px] bg-[#e45b8c] mt-4 mb-6" />

                            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">

                                <p>
                                    Both PICSI and ICSI are techniques used in IVF, but they serve
                                    different purposes:
                                </p>

                                <p>
                                    <strong>• ICSI:</strong> Bypasses the natural fertilization process by injecting a single sperm directly into an egg. ICSI is helpful for various male infertility factors like low sperm count or poor motility.
                                </p>

                                <p>
                                    <strong>• PICSI:</strong>  Focuses on selecting the healthiest sperm within a semen sample before ICSI. PICSI aims to improve the quality of sperm used for fertilization, potentially leading to better embryo development and implantation.
                                </p>

                            </div>

                            <h3 className="text-[#e45b8c] text-lg md:text-2xl font-bold mt-10 leading-tight">
                                Benefits of PICSI for Miscarriage Prevention
                            </h3>

                            <div className="w-20 h-[2px] bg-[#e45b8c] mt-4 mb-6" />

                            <p className="text-gray-600 text-sm leading-relaxed">
                                The theory behind PICSI is that selecting sperm with better maturity and motility may lead to healthier embryos with a lower risk of miscarriage. However, more research is needed to definitively establish PICSI’s effectiveness in preventing miscarriages. While some studies suggest potential benefits,  conclusive evidence is still emerging.
                            </p>

                        </div>

                    </div>

                </div>
            </section>

            <section className="py-12 md:py-16 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">

                    <h2 className="text-[#e45b8c] text-2xl md:text-3xl font-bold">
                        FAQs
                    </h2>

                    <div className="w-20 h-[2px] bg-[#e45b8c] mt-4 mb-8" />

                    <div className="space-y-0">

                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 border-b-0 last:border-b"
                            >

                                <button
                                    onClick={() =>
                                        setOpenFaq(openFaq === index ? -1 : index)
                                    }
                                    className="w-full flex items-center justify-between px-4 md:px-6 py-4 bg-[#fafafa] text-left"
                                >
                                    <span className="text-[#e45b8c] font-semibold text-sm md:text-base">
                                        {faq.q}
                                    </span>

                                    <span className="text-[#e45b8c] text-2xl font-bold">
                                        {openFaq === index ? "−" : "+"}
                                    </span>
                                </button>

                                {openFaq === index && (
                                    <div className="px-4 md:px-6 py-5 bg-white">
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

export default PICSI;