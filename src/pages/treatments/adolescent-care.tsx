import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
//import Callus from "@/components/callbtn";
import WhatsAppButton from "@/components/WhatsAppButton";

import bannerImg from "@/assets/About-us-banner.jpg";

import adolescentImg1 from "@/assets/Treatments/Adolescent.webp";
import adolescentImg2 from "@/assets/Treatments/Adolescent-Health.webp";
import adolescentImg3 from "@/assets/Treatments/Health-Specialists.webp";
import adolescentImg4 from "@/assets/Treatments/Care.webp";

const faqs = [
    {
        q: "1. How Can Adolescent Problems Be Managed?",
        a: "Support, guidance, healthy habits, and professional help when needed can effectively address adolescent challenges.",
    },
    {
        q: "2. Common Health Issues in Teenagers",
        a: (
            <>
                Teenagers can face a variety of health issues, both physical and emotional:
                <br />
                <br />
                • Physical: Acne, growth issues, chronic illnesses, injuries.
                <br />
                <br />
                • Mental/emotional: Anxiety, depression, eating disorders, substance abuse, self-esteem.
                <br />
                <br />
                • Sexual/reproductive: STIs, menstrual issues, sexual development questions.
                <br />
                <br />
                • Social: Bullying, peer pressure, social anxiety, relationship difficulties.
            </>
        ),
    },

    {
        q: "3. What Happens When a Girl Has Her Period?",
        a: "During menstruation, the lining of the uterus (endometrium) sheds as the body prepares for a potential pregnancy. This shedding causes bleeding, which typically lasts 3-7 days.Symptoms: Cramps, bloating, mood swings, and fatigue can occur before or during menstruation.",

    },

    {
        q: "4. Average Age for Puberty in Girls.",
        a: "The average age for girls to begin puberty is around 10-14 years old, but there can be variations. Puberty involves physical changes like breast development, growth spurts, and the onset of menstruation.",
    },
];

const AdolescentCare = () => {
    const [openFaq, setOpenFaq] = useState(0);

    return (
        <>
            <Navbar />

            <section className="relative w-full h-[55vh] overflow-hidden">
                <img
                    src={bannerImg}
                    alt="Adolescent Care"
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                    <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
                        Adolescent Care
                    </h1>
                </div>
            </section>

            <section className="py-12 md:py-16 px-4 md:px-10 bg-white">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

                    <div className="flex justify-center w-full md:w-auto">
                        <img
                            src={adolescentImg1}
                            alt="Adolescent Care"
                            className="w-72 md:w-[430px] object-contain"
                        />
                    </div>

                    <div className="flex-1">

                        <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
                            What is Adolescent Care?
                        </h2>

                        <div className="w-16 h-0.5 bg-pink-500 mb-6" />

                        <p className="text-gray-600 text-sm leading-relaxed">
                            <span className="text-pink-600 underline font-semibold">
                                Adolescent care
                            </span>{" "}
                            refers to healthcare services tailored to meet the unique needs
                            of teenagers, typically between the ages of 12 and 18 years old.
                            It encompasses a range of services aimed at promoting physical,
                            emotional, and social well-being during the transitional period
                            from childhood to adulthood. Adolescent care often includes
                            preventive health measures, education on healthy lifestyle habits,
                            screening for developmental issues, and guidance on reproductive
                            health and sexuality.
                        </p>

                    </div>

                </div>
            </section>

            <section className="py-14 md:py-20 px-4 md:px-10 bg-pink-50">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

                    <div className="flex-1">

                        <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
                            Adolescent Physical Checkups
                        </h2>

                        <div className="w-16 h-0.5 bg-pink-500 mb-6" />

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Adolescent physical checkups are routine medical examinations
                            designed to assess the overall health and development of
                            teenagers. These checkups typically include measurements of
                            height, weight, blood pressure, and heart rate, as well as
                            discussions about medical history, lifestyle behaviors, and any
                            concerns or symptoms the adolescent may have. Screening for
                            common adolescent health issues such as acne, menstrual
                            irregularities, mental health disorders, and substance abuse may
                            also be part of the examination.
                        </p>

                    </div>

                    <div className="flex justify-center w-full md:w-auto">
                        <img
                            src={adolescentImg2}
                            alt="Physical Checkups"
                            className="w-72 md:w-[430px] object-contain"
                        />
                    </div>

                </div>
            </section>

            <section className="py-14 md:py-20 px-4 md:px-10 bg-white">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

                    <div className="flex justify-center w-full md:w-auto">
                        <img
                            src={adolescentImg3}
                            alt="Specialists"
                            className="w-72 md:w-[430px] object-contain"
                        />
                    </div>

                    <div className="flex-1">

                        <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
                            Treatments Provided by Adolescent Health Specialists
                        </h2>

                        <div className="w-16 h-0.5 bg-pink-500 mb-6" />

                        <ul className="list-disc pl-5 space-y-4 text-gray-600 text-sm leading-relaxed">

                            <li>
                                <strong>Physical health:</strong>

                                <ul className="list-circle pl-5 mt-2 space-y-2">
                                    <li>
                                        Management of chronic illnesses like asthma, diabetes, or
                                        epilepsy.
                                    </li>

                                    <li>
                                        Treatment of acute illnesses like strep throat or injuries.
                                    </li>

                                    <li>
                                        Sports medicine and injury prevention.
                                    </li>

                                    <li>
                                        Addressing growth and development concerns, including
                                        puberty-related issues.
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <strong>Mental and emotional health:</strong>

                                <ul className="list-circle pl-5 mt-2 space-y-2">
                                    <li>
                                        Screening and treatment for mental health conditions like
                                        anxiety, depression, or eating disorders.
                                    </li>

                                    <li>
                                        Counseling and support for emotional challenges like stress,
                                        bullying, or peer pressure.
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <strong>Sexual and reproductive health:</strong>

                                <ul className="list-circle pl-5 mt-2 space-y-2">
                                    <li>
                                        Education and guidance on sexual development,
                                        contraception options, and healthy relationships.
                                    </li>

                                    <li>
                                        Sexually transmitted infection (STI) testing and treatment.
                                    </li>

                                    <li>
                                        Gynecological care for young women, including menstrual
                                        concerns and pap smears.
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <strong>Social well-being:</strong>

                                <ul className="list-circle pl-5 mt-2 space-y-2">
                                    <li>
                                        Addressing issues like substance abuse, risky behaviors,
                                        and social adjustment difficulties.
                                    </li>

                                    <li>
                                        Guidance on developing healthy coping mechanisms and life
                                        skills.
                                    </li>
                                </ul>
                            </li>

                        </ul>

                    </div>

                </div>
            </section>

            <section className="py-14 md:py-20 px-4 md:px-10 bg-pink-50">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

                    <div className="flex-1">

                        <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-3">
                            Adolescent health specialists:
                        </h2>

                        <div className="w-16 h-0.5 bg-pink-500 mb-6" />

                        <ul className="list-disc pl-5 space-y-4 text-gray-600 text-sm leading-relaxed">

                            <li>
                                Collaborate with other healthcare professionals like therapists,
                                nutritionists, or specialists to provide a holistic approach to
                                care.
                            </li>

                            <li>
                                Promote preventive care by encouraging healthy habits like
                                balanced diet, regular exercise, and adequate sleep.
                            </li>

                            <li>
                                Partner with adolescents and their families to create a
                                supportive environment for healthy development.
                            </li>

                        </ul>

                    </div>

                    <div className="flex justify-center w-full md:w-auto">
                        <img
                            src={adolescentImg4}
                            alt="Adolescent Specialists"
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

export default AdolescentCare;