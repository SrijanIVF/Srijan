import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
//import Callus from "@/components/callbtn";
import WhatsAppButton from "@/components/WhatsAppButton";

import bannerImg from "@/assets/About-us-banner.jpg";

import normal1 from "@/assets/Treatments/normaldelivery.webp";
import normal2 from "@/assets/Treatments/Delivery_Cost.webp";
import normal3 from "@/assets/Treatments/normal_delivery.webp";
import normal4 from "@/assets/Treatments/benefits-normal-delivery.webp";

const faqs = [
    {
        q: "1. What are the signs of labor approaching normal delivery?",
        a: "Common signs include regular contractions, lower back pain, water breaking, pelvic pressure, and the loss of the mucus plug (bloody show).",
    },

    {
        q: "2. When should I go to the hospital during normal delivery?",
        a: (
            <>
                There’s no single answer, but here are some general guidelines:
                <br />
                <br />

                <strong>First-time mothers:</strong> When contractions are regular
                (every 5 minutes) and lasting for at least a minute, or if your
                water breaks.
                <br />
                <br />

                <strong>Mothers who have delivered before:</strong> When
                contractions are strong and uncomfortable, or if your water breaks.
                <br />
                <br />

                <strong>
                    Always consult your doctor for specific instructions based on
                    your situation and birth plan.
                </strong>
            </>
        ),
    },

    {
        q: "3. Can I have a normal delivery after a C-section (VBAC)?",
        a: "Yes, Vaginal Birth After Cesarean (VBAC) is possible for some women. Factors like the reason for the previous C-section and the type of incision made will influence if VBAC is a suitable option. Discuss this possibility with your doctor to understand your individual circumstances.",
    },

    {
        q: "4. What are some things I can do to prepare for a normal delivery?",
        a: (
            <>
                Proactive Preparation for a Smooth Normal Delivery:
                <br />
                <br />

                <strong>Prepare:</strong> Regular checkups, exercise, birthing class.
                <br />
                <br />

                <strong>Plan:</strong> Discuss preferences with your doctor.
                <br />
            </>
        ),
    },

    {
        q: "5. Does insurance cover normal delivery?",
        a: "Most insurance plans cover normal delivery costs, but coverage details can vary. Check with your insurance provider for specific information about your plan and associated costs for childbirth.",
    },
];

const NormalDelivery = () => {
    const [openFaq, setOpenFaq] = useState(1);

    return (
        <>
            <Navbar />

            <section className="relative w-full h-[55vh] overflow-hidden">
                <img
                    src={bannerImg}
                    alt="Normal Delivery"
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                    <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
                        Normal Delivery
                    </h1>
                </div>
            </section>

            <section className="py-14 md:py-20 px-4 md:px-10 bg-white">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

                    <div className="flex justify-center w-full md:w-auto">
                        <img
                            src={normal1}
                            alt="Normal Delivery"
                            className="w-72 md:w-[370px] object-contain"
                        />
                    </div>

                    <div className="flex-1">

                        <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
                            What is Normal Delivery?
                        </h2>

                        <div className="w-16 h-0.5 bg-pink-500 mb-6" />

                        <p className="text-gray-600 text-sm leading-relaxed mb-5">
                            A{" "}
                            <span className="text-pink-600 underline">
                                normal delivery
                            </span>
                            , also known as vaginal delivery, is the natural process of
                            childbirth where the baby exits the mother’s body through
                            the vagina. It typically involves three stages:
                        </p>

                        <ul className="list-disc pl-5 space-y-3 text-gray-600 text-sm leading-relaxed">

                            <li>
                                <strong>Dilation:</strong> The cervix (opening of the
                                uterus) widens and thins to allow the baby to pass
                                through.
                            </li>

                            <li>
                                <strong>Expulsion:</strong> The baby is pushed out of the
                                uterus through the vagina.
                            </li>

                            <li>
                                <strong>Placental delivery:</strong> The placenta (organ
                                that nourished the baby) is delivered after the baby.
                            </li>

                        </ul>

                    </div>

                </div>
            </section>

            <section className="py-14 md:py-20 px-4 md:px-10 bg-pink-50">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

                    <div className="flex-1">

                        <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
                            Normal Delivery Cost in Delhi (2025)
                        </h2>

                        <div className="w-16 h-0.5 bg-pink-500 mb-6" />

                        <p className="text-gray-600 text-sm leading-relaxed mb-5">
                            The cost of a normal delivery in Delhi varies depending on
                            factors like hospital type (private vs public), room
                            category, doctor’s expertise, and medications used. Expect
                            to pay ₹50,000–₹1,00,000 at public hospitals and
                            ₹1,00,000–₹2,00,000 at private hospitals (2026).
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed font-semibold">
                            It’s crucial to consult with your chosen hospital and doctor
                            to get a personalized cost estimate for your specific
                            situation.
                        </p>

                    </div>

                    <div className="flex justify-center w-full md:w-auto">
                        <img
                            src={normal2}
                            alt="Normal Delivery Cost"
                            className="w-72 md:w-[360px] object-contain"
                        />
                    </div>

                </div>
            </section>

            <section className="py-14 md:py-20 px-4 md:px-10 bg-white">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

                    <div className="flex justify-center w-full md:w-auto">
                        <img
                            src={normal3}
                            alt="Recovery Time"
                            className="w-72 md:w-[360px] object-contain"
                        />
                    </div>

                    <div className="flex-1">

                        <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
                            Recovery Time After a Normal Delivery
                        </h2>

                        <div className="w-16 h-0.5 bg-pink-500 mb-6" />

                        <p className="text-gray-600 text-sm leading-relaxed mb-5">
                            Recovery time after a normal delivery can vary depending on
                            the individual and the complexity of the delivery.
                            Generally, it takes 4-6 weeks for the body to fully recover.
                            Here’s a breakdown of the recovery process:
                        </p>

                        <ul className="list-disc pl-5 space-y-3 text-gray-600 text-sm leading-relaxed mb-8">

                            <li>
                                <strong>First few days:</strong> Focus on rest, pain
                                management, and bonding with the baby.
                            </li>

                            <li>
                                <strong>1–2 weeks:</strong> Expect some discomfort and
                                vaginal bleeding.
                            </li>

                            <li>
                                <strong>4–6 weeks:</strong> Most women regain their
                                pre-pregnancy energy levels.
                            </li>

                            <li>
                                <strong>6–8 weeks:</strong> Resume strenuous activities
                                with doctor’s approval.
                            </li>

                        </ul>

                    </div>

                </div>
            </section>

            <section className="py-14 md:py-20 px-4 md:px-10 bg-pink-50">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

                    <div className="flex-1">

                        <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
                            Benefits of a Normal Delivery for Mom and Baby
                        </h2>

                        <div className="w-16 h-0.5 bg-pink-500 mb-6" />

                        <p className="text-gray-600 text-sm leading-relaxed mb-5">
                            A normal delivery offers several potential benefits for both
                            mother and baby:
                        </p>

                        <h3 className="text-lg font-semibold text-gray-700 mb-4">
                            Benefits for Mom:
                        </h3>

                        <ul className="list-disc pl-5 space-y-3 text-gray-600 text-sm leading-relaxed mb-8">

                            <li>
                                <strong>Shorter hospital stay:</strong> Typically shorter
                                compared to a cesarean section.
                            </li>

                            <li>
                                <strong>Faster recovery:</strong> Women generally recover
                                quicker from a normal delivery.
                            </li>

                            <li>
                                <strong>Reduced risk of surgical complications:</strong>
                                Avoids potential risks associated with surgery.
                            </li>

                            <li>
                                <strong>Potential for breastfeeding:</strong> May be
                                easier to initiate breastfeeding after a normal delivery.
                            </li>

                        </ul>

                        <h3 className="text-lg font-semibold text-gray-700 mb-4">
                            Benefits for Baby:
                        </h3>

                        <ul className="list-disc pl-5 space-y-3 text-gray-600 text-sm leading-relaxed mb-8">

                            <li>
                                <strong>Exposure to beneficial bacteria:</strong>
                                Exposure to vaginal bacteria during birth can benefit the
                                baby’s gut health.
                            </li>

                            <li>
                                <strong>Faster breathing adaptation:</strong> Babies born
                                vaginally may adapt to breathing outside the womb more
                                easily.
                            </li>

                            <li>
                                <strong>Reduced risk of respiratory problems:</strong>
                                Studies suggest a lower risk of respiratory issues in
                                babies born vaginally.
                            </li>

                        </ul>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            <strong>It’s important to remember that every birth is
                                unique.</strong> Discuss delivery options with your doctor
                            to determine the safest and most suitable birthing method
                            for you and your baby based on your individual circumstances
                            and medical history.
                        </p>

                    </div>

                    <div className="flex justify-center w-full md:w-auto">
                        <img
                            src={normal4}
                            alt="Benefits of Normal Delivery"
                            className="w-72 md:w-[360px] object-contain"
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

export default NormalDelivery;