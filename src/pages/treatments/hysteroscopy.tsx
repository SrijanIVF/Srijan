import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
//import Callus from "@/components/callbtn";
import WhatsAppButton from "@/components/WhatsAppButton";

import bannerImg from "@/assets/About-us-banner.jpg";

import hysteroImg1 from "@/assets/Treatments/Hysteroscopyv1.webp";
import hysteroImg2 from "@/assets/Treatments/Hysteroscopy-procedure.webp";
import hysteroImg3 from "@/assets/Treatments/Hysteroscopy-procedure (1).webp";
import hysteroImg4 from "@/assets/Treatments/Hysteroscopy-vs-DC.webp";

const faqs = [
    {
        q: "1. Who needs a Hysteroscopy?",
        a: (
            <>
                Hysteroscopy may be recommended for women experiencing:
                <br />
                <br />
                • Abnormal uterine bleeding (heavy, irregular, or bleeding between periods)
                <br />
                • Difficulty getting pregnant (infertility)
                <br />
                • Pelvic pain
                <br />
                • Unexplained vaginal discharge
                <br />
                • Suspected uterine polyps or fibroids
                <br />
                • Postmenopausal bleeding
                <br />
                • Monitoring previously diagnosed conditions like endometriosis
            </>
        ),
    },

    {
        q: "2. What can Hysteroscopy diagnose?",
        a: "Hysteroscopy can diagnose various uterine conditions, including polyps, fibroids, endometriosis, scarring, and abnormalities.",
    },

    {
        q: "3. What are the benefits of Hysteroscopy?",
        a: "Hysteroscopy is minimally invasive, provides accurate diagnosis, allows immediate treatment of some conditions, and usually offers faster recovery compared to traditional surgery.",
    },

    {
        q: "4. What are the risks of Hysteroscopy?",
        a: (
            <>
                Hysteroscopy has some potential risks, although serious complications are uncommon:
                <br />
                <br />

                • <strong>Infection:</strong> There is a small risk of developing an infection after the procedure.
                <br />
                <br />

                • <strong>Bleeding:</strong> Mild bleeding or spotting may occur following hysteroscopy.
                <br />
                <br />

                • <strong>Uterine injury:</strong> Rarely, the hysteroscope or surgical instruments may cause injury to the uterus or cervix.
                <br />
                <br />

                • <strong>Reaction to anesthesia:</strong> Some patients may experience side effects or reactions to anesthesia if it is used.
            </>
        ),
    },
    {
        q: "5. What is the recovery time after Hysteroscopy?",
        a: "Recovery time after hysteroscopy is typically quick. You may experience cramping or discomfort for a day or two. Most women can resume normal activities within 24 hours, although strenuous exercise may be restricted for a short period.",
    },

    {
        q: "6. Is Hysteroscopy painful?",
        a: "Pain during hysteroscopy varies. Local anesthesia is often used to numb the cervix, minimizing discomfort. Some women may experience cramping during the procedure, while others feel minimal pain. If general anesthesia is used, you won't feel any pain during the procedure.",
    },
];

const HysteroscopyPage = () => {
    const [openFaq, setOpenFaq] = useState<number>(0);

    return (
        <>
            <Navbar />

            <section className="relative w-full h-[60vh] flex items-center justify-center text-center overflow-hidden">
                <img
                    src={bannerImg}
                    alt="Hysteroscopy Banner"
                    className="absolute inset-0 w-full h-full object-cover brightness-40"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-pink-900/40 to-black/50" />

                <div className="relative z-10 px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
                        Hysteroscopy
                    </h1>
                </div>
            </section>

            <section className="py-8 md:py-12 px-4 md:px-8 bg-white">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 md:gap-10 items-center">

                    <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
                        <img
                            src={hysteroImg1}
                            alt="Hysteroscopy"
                            className="w-56 md:w-[340px] object-contain"
                        />
                    </div>

                    <div className="flex-1">
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
                                What is Hysteroscopy?
                            </h2>

                            <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-4" />

                            <p className="text-gray-600 text-sm leading-relaxed">
                                Hysteroscopy is a minimally invasive procedure that allows a
                                healthcare provider to examine the inside of the uterus (womb)
                                and cervix (the opening to the uterus). A thin, lighted
                                instrument called a hysteroscope is inserted through the vagina
                                to visualize the uterine cavity and diagnose or treat various
                                conditions.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            <section className="py-14 md:py-20 px-4 md:px-10 bg-pink-50">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

                    <div className="flex-1">
                        <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
                            Hysteroscopy procedure step-by-step
                        </h2>

                        <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />

                        <p className="text-gray-600 text-sm leading-relaxed mb-5">
                            A hysteroscopy typically involves these steps:
                        </p>

                        <ul className="space-y-4 text-gray-600 text-sm leading-relaxed">
                            <li>
                                <strong className="text-gray-800">
                                    Preparation:
                                </strong>{" "}
                                You may be asked to empty your bladder and avoid eating or
                                drinking anything for a few hours beforehand.
                            </li>

                            <li>
                                <strong className="text-gray-800">
                                    Positioning:
                                </strong>{" "}
                                You’ll be placed in a position similar to a Pap smear exam.
                            </li>

                            <li>
                                <strong className="text-gray-800">
                                    Cervical dilation:
                                </strong>{" "}
                                The cervix may be gently dilated to allow the hysteroscope to
                                pass through.
                            </li>

                            <li>
                                <strong className="text-gray-800">
                                    Fluid introduction:
                                </strong>{" "}
                                Sterile fluid (saline solution) may be inserted into the uterus
                                to expand it for better visualization.
                            </li>

                            <li>
                                <strong className="text-gray-800">
                                    Hysteroscope insertion:
                                </strong>{" "}
                                The thin, lighted hysteroscope is inserted through the vagina
                                and cervix into the uterus.
                            </li>

                            <li>
                                <strong className="text-gray-800">
                                    Examination or treatment:
                                </strong>{" "}
                                The doctor can examine the uterine lining, take tissue samples
                                (biopsy) if needed, or perform procedures like removing polyps
                                or fibroids.
                            </li>

                            <li>
                                <strong className="text-gray-800">
                                    Instrument removal:
                                </strong>{" "}
                                The hysteroscope and other instruments are removed.
                            </li>

                            <li>
                                <strong className="text-gray-800">
                                    Recovery:
                                </strong>{" "}
                                You’ll be monitored for a short period before being discharged.
                            </li>
                        </ul>
                    </div>

                    <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
                        <img
                            src={hysteroImg2}
                            alt="Hysteroscopy Procedure"
                            className="w-64 md:w-[420px] object-contain"
                        />
                    </div>

                </div>
            </section>

            <section className="py-14 md:py-20 px-4 md:px-10 bg-white">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

                    <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
                        <img
                            src={hysteroImg3}
                            alt="Hysteroscopy Cost"
                            className="w-64 md:w-[340px] object-contain"
                        />
                    </div>

                    <div className="flex-1">
                        <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
                            Hysteroscopy procedure cost 2026
                        </h2>

                        <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />

                        <p className="text-gray-600 text-sm leading-relaxed mb-8">
                            The cost of a hysteroscopy varies depending on procedure type,
                            facility fees, physician’s fees, anesthesia type, and location.
                            Diagnostic procedures typically cost less than operative
                            procedures. Hospitals generally have higher costs than outpatient
                            centers. In India (2026), a diagnostic hysteroscopy might range
                            from ₹20,000 to ₹50,000, while an operative hysteroscopy could
                            cost anywhere from ₹40,000 to ₹100,000 or more. Consult your
                            doctor and insurance company for cost estimates specific to your
                            situation.
                        </p>

                        <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
                            Hysteroscopy for infertility treatment
                        </h2>

                        <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />

                        <p className="text-gray-600 text-sm leading-relaxed mb-5">
                            Hysteroscopy can be a valuable tool in diagnosing and treating
                            some causes of infertility in women. Here’s how it can help:
                        </p>

                        <ul className="space-y-4 text-gray-600 text-sm leading-relaxed">
                            <li>
                                <strong className="text-gray-800">
                                    Identifying abnormalities:
                                </strong>{" "}
                                Hysteroscopy can reveal uterine polyps, fibroids, scar tissue
                                (adhesions), or congenital abnormalities that may hinder
                                implantation.
                            </li>

                            <li>
                                <strong className="text-gray-800">
                                    Removing blockages:
                                </strong>{" "}
                                Blockages in the fallopian tubes can sometimes be opened using a
                                hysteroscope.
                            </li>

                            <li>
                                <strong className="text-gray-800">
                                    Biopsy for diagnosis:
                                </strong>{" "}
                                Tissue samples (biopsies) can be obtained during a hysteroscopy
                                to diagnose conditions like endometriosis.
                            </li>
                        </ul>
                    </div>

                </div>
            </section>

            <section className="py-14 md:py-20 px-4 md:px-10 bg-pink-50">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

                    <div className="flex-1">
                        <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
                            Hysteroscopy vs D&C (Dilation and Curettage)
                        </h2>

                        <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />

                        <p className="text-gray-600 text-sm leading-relaxed mb-5">
                            Both hysteroscopy and D&C involve accessing the inside of the
                            uterus. However, there are key differences:
                        </p>

                        <ul className="space-y-4 text-gray-600 text-sm leading-relaxed">
                            <li>
                                <strong className="text-gray-800">
                                    Purpose:
                                </strong>{" "}
                                Hysteroscopy is primarily for visualization and diagnosis, while
                                D&C is often used for removing tissue (e.g., after a miscarriage
                                or for heavy bleeding).
                            </li>

                            <li>
                                <strong className="text-gray-800">
                                    Procedure:
                                </strong>{" "}
                                D&C typically uses a curette, a scraping tool, to remove tissue.
                                Hysteroscopy may use other instruments besides visualization.
                            </li>

                            <li>
                                <strong className="text-gray-800">
                                    Anesthesia:
                                </strong>{" "}
                                D&C often requires general anesthesia, while hysteroscopy may
                                use local anesthesia or none at all.
                            </li>
                        </ul>

                        <p className="text-gray-600 text-sm leading-relaxed mt-5">
                            Ultimately, the best procedure for you depends on your specific
                            situation. Consulting with a healthcare provider can help
                            determine if hysteroscopy is the right course of action for your
                            needs.
                        </p>
                    </div>

                    <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
                        <img
                            src={hysteroImg4}
                            alt="Hysteroscopy vs D&C"
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

export default HysteroscopyPage;