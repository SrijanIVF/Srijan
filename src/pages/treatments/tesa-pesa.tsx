import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
//import Callus from "@/components/callbtn";
import WhatsAppButton from "@/components/WhatsAppButton";

import bannerImg from "@/assets/About-us-banner.jpg";

import tesaImg1 from "@/assets/Treatments/tesa-pesa-intro.webp";
import tesaImg2 from "@/assets/Treatments/pesa-steps.webp";
import tesaImg3 from "@/assets/Treatments/tesa-pesa-options.webp";

const faqs = [
    {
        q: "1. How does TESA differ from PESA?",
        a: (
            <>
                Both TESA and PESA involve retrieving sperm using a needle, but the
                target location differs:
                <br />
                <br />
                • <strong>TESA:</strong> Targets the testicles themselves, aspirating
                sperm directly from the seminiferous tubules where sperm are produced.
                <br />
                <br />
                • <strong>PESA:</strong> Targets the epididymis, the coiled tube that
                stores sperm after production in the testicles. PESA is typically
                preferred if there's a blockage preventing sperm from reaching the
                ejaculate.
            </>
        ),
    },

    {
        q: "2. What are the alternatives to TESA/PESA?",
        a: (
            <>
                Alternatives to TESA/PESA depend on the cause of infertility:
                <br />
                <br />
                • <strong>Medication:</strong> Medications may help improve sperm
                production or motility.
                <br />
                <br />
                • <strong>Surgery:</strong> Procedures like vasectomy reversal can
                address blockages.
                <br />
                <br />
                • <strong>Sperm donation:</strong> This is an option for couples who
                are unable to achieve pregnancy using the male partner’s sperm.
            </>
        ),
    },

    {
        q: "3. What is the success rate of TESA/PESA?",
        a: "Success rates for TESA/PESA vary depending on factors like the cause of infertility and the quality of retrieved sperm. However, studies suggest pregnancy rates can range from 20% to 80% when combined with ICSI (Intracytoplasmic sperm injection), a type of IVF that injects a single sperm directly into an egg.",
    },

    {
        q: "4. Are there any risks associated with TESA/PESA?",
        a: (
            <>
                TESA/PESA are generally safe procedures with minimal risks. However,
                some potential complications include:
                <br />
                <br />
                • Infection
                <br />
                • Bleeding
                <br />
                • Discomfort at the needle insertion site
            </>
        ),
    },

    {
        q: "5. Can TESA/PESA guarantee pregnancy?",
        a: "No, TESA/PESA doesn't guarantee pregnancy. While it increases the chances of conception by retrieving sperm for use in IVF or ICSI, various factors can influence success, including egg quality, female fertility, and embryo development.",
    },

    {
        q: "6. Is TESA/PESA covered by insurance?",
        a: "Insurance coverage for TESA/PESA varies depending on your specific plan. It's important to contact your insurance provider to determine if they cover any portion of the procedure.",
    },
];

const TesaPesaPage = () => {
    const [openFaq, setOpenFaq] = useState<number>(0);

    return (
        <>
            <Navbar />

            <section className="relative w-full h-[60vh] flex items-center justify-center text-center overflow-hidden">
                <img
                    src={bannerImg}
                    alt="TESA PESA Banner"
                    className="absolute inset-0 w-full h-full object-cover brightness-40"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-pink-900/40 to-black/50" />

                <div className="relative z-10 px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
                        TESA/PESA
                    </h1>
                </div>
            </section>

            <section className="py-8 md:py-12 px-4 md:px-8 bg-white">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 md:gap-10 items-center">

                    <div className="flex-shrink-0 flex justify-center w-full md:w-1/2">
                        <img
                            src={tesaImg1}
                            alt="TESA PESA"
                            className="w-56 md:w-[340px] object-contain"
                        />
                    </div>

                    <div className="w-full md:w-1/2">

                        <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
                            What is TESA/PESA?
                        </h2>

                        <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-4" />

                        <p className="text-gray-600 text-sm leading-relaxed mb-5">
                            TESA (Testicular Sperm Aspiration) and PESA (Percutaneous
                            Epididymal Sperm Aspiration) are minimally invasive surgical
                            procedures used to retrieve sperm for assisted reproductive
                            techniques (ART) like In Vitro Fertilization (IVF) in men with
                            infertility. Both procedures involve extracting sperm directly
                            from the testicles or epididymis, the coiled tube that stores
                            sperm.
                        </p>

                        <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
                            <li>
                                <strong className="text-gray-800">TESA:</strong> A thin needle
                                is inserted into the testicles to aspirate sperm directly.
                            </li>

                            <li>
                                <strong className="text-gray-800">PESA:</strong> A needle is
                                inserted into the epididymis to collect sperm.
                            </li>
                        </ul>

                    </div>

                </div>
            </section>

            <section className="pb-12 md:pb-16 px-4 md:px-8 bg-white">
                <div className="max-w-6xl mx-auto">

                    <div className="bg-pink-50 border border-pink-100 rounded-3xl p-6 md:p-8">

                        <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
                            TESA procedure cost 2026
                        </h2>

                        <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />

                        <p className="text-gray-600 text-sm leading-relaxed mb-5">
                            The cost of TESA can vary depending on several factors,
                            including:
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">

                            <div className="bg-white rounded-2xl border border-pink-100 px-4 py-4">
                                <p className="text-gray-700 text-sm font-medium">
                                    Location of the clinic
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl border border-pink-100 px-4 py-4">
                                <p className="text-gray-700 text-sm font-medium">
                                    Physician’s fees
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl border border-pink-100 px-4 py-4">
                                <p className="text-gray-700 text-sm font-medium">
                                    Anesthesia fees
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl border border-pink-100 px-4 py-4">
                                <p className="text-gray-700 text-sm font-medium">
                                    Lab fees
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl border border-pink-100 px-4 py-4">
                                <p className="text-gray-700 text-sm font-medium">
                                    Medications
                                </p>
                            </div>

                        </div>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            <strong className="text-gray-800">
                                It’s important to consult with a fertility clinic to get a
                                specific cost estimate.
                            </strong>{" "}
                            However, a general range for TESA in 2026 might be between
                            $3,000 and $8,000. Insurance coverage can vary, so check with
                            your provider to see if they cover any portion of the
                            procedure.
                        </p>

                    </div>

                </div>
            </section>

            <section className="py-14 md:py-20 px-4 md:px-10 bg-pink-50">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

                    <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
                        <img
                            src={tesaImg2}
                            alt="PESA Procedure"
                            className="w-64 md:w-[420px] object-contain"
                        />
                    </div>

                    <div className="flex-1">
                        <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
                            PESA procedure steps-by-step
                        </h2>

                        <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />

                        <p className="text-gray-600 text-sm leading-relaxed mb-5">
                            While both procedures are minimally invasive, here’s a general
                            overview of the PESA steps:
                        </p>

                        <ul className="space-y-4 text-gray-600 text-sm leading-relaxed">
                            <li>
                                • Local anesthesia is administered to numb the area.
                            </li>

                            <li>
                                • A thin needle is inserted through the skin into the
                                epididymis.
                            </li>

                            <li>
                                • Suction is applied to collect sperm.
                            </li>

                            <li>
                                • The collected sperm is prepared for use in IVF or other ART
                                procedures.
                            </li>
                        </ul>

                        <p className="text-gray-600 text-sm leading-relaxed mt-6">
                            <strong className="text-gray-800">
                                It’s important to note that this is a simplified explanation,
                                and the exact procedure may vary depending on the specific
                                circumstances.
                            </strong>
                        </p>
                    </div>

                </div>
            </section>

            <section className="py-14 md:py-20 px-4 md:px-10 bg-white">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

                    <div className="flex-1">
                        <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
                            Financing options for TESA/PESA
                        </h2>

                        <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />

                        <p className="text-gray-600 text-sm leading-relaxed mb-5">
                            The cost of fertility treatments can be a burden. Here are some
                            ways to finance TESA/PESA:
                        </p>

                        <ul className="space-y-4 text-gray-600 text-sm leading-relaxed mb-8">
                            <li>
                                <strong className="text-gray-800">
                                    Insurance:
                                </strong>{" "}
                                Check with your insurance provider to see if they cover any
                                portion of the procedure.
                            </li>

                            <li>
                                <strong className="text-gray-800">
                                    Fertility loans:
                                </strong>{" "}
                                Several lenders offer loans specifically for fertility
                                treatments.
                            </li>

                            <li>
                                <strong className="text-gray-800">
                                    Payment plans:
                                </strong>{" "}
                                Some fertility clinics offer payment plans to help make
                                treatment more affordable.
                            </li>

                            <li>
                                <strong className="text-gray-800">
                                    Grants and programs:
                                </strong>{" "}
                                Certain organizations offer grants or programs to help finance
                                fertility treatments.
                            </li>
                        </ul>

                        <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
                            TESA after failed IVF
                        </h2>

                        <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />

                        <p className="text-gray-600 text-sm leading-relaxed mb-5">
                            If traditional IVF using sperm ejaculated naturally has been
                            unsuccessful, TESA/PESA may be an option to retrieve sperm
                            directly for another IVF attempt. This approach can be helpful in
                            cases of:
                        </p>

                        <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
                            <li>• Blockages in the vas deferens, the tubes that carry sperm from the testicles.</li>
                            <li>• Low sperm count.</li>
                            <li>• Poor sperm quality.</li>
                        </ul>
                    </div>

                    <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
                        <img
                            src={tesaImg3}
                            alt="TESA IVF"
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

export default TesaPesaPage;