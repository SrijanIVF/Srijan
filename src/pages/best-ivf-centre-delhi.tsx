import aboutImg from "@/assets/About-us-banner.jpg";
import clinicImg from "@/assets/hero-couple.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useState } from "react";
import doc1 from "@/assets/Dr.-Pallavisingh.webp";
import doc2 from "@/assets/Dr.-santosh.webp";
import { Link } from "react-router-dom";

const doctors = [
    {
        img: doc1,
        name: "Dr. Pallavi Singh",
        role: "Senior IVF Specialist – Delhi",
        exp: "23+ Years Experience",
        specialisation:
            "IVF | IUI | PCOS | Male Infertility | Female Infertility | ICSI | PICSI",
        qualification: "MBBS, DGO",
        hospital: "Delhi Fertility Centre",
        desc: "A Delhi-based infertility specialist empowering couples on their parenthood journey. Tackles complex cases with personalized care ensuring the well-being of both mother and child.",
        profileUrl: "/doctor/pallavi-singh",
    },
    {
        img: doc2,
        name: "Dr. Santosh Kumar Arjun",
        role: "Radiodiagnosis Specialist – Delhi",
        exp: "15+ Years Experience",
        specialisation:
            "Radiodiagnosis | Medical Imaging | X-Ray | CT Scan | Ultrasound",
        qualification: "MBBS, DNB (Radiodiagnosis)",
        hospital: "GB Pant Hospital & LBS Hospital",
        desc: "A seasoned radiologist in Delhi with expertise in diagnosing and interpreting medical images, ensuring the highest quality patient care through meticulous analysis.",
        profileUrl: "/doctor/santosh-kumar",
    },
];

const whyUsCards = [
    {
        emoji: "🏅",
        title: "20+ Years Experienced Doctors",
        desc: "Our team includes some of Delhi's finest infertility specialists with over two decades of experience handling both straightforward and complex infertility cases.",
    },
    {
        emoji: "📈",
        title: "High IVF Success Rate",
        desc: "Srijan IVF has helped over 35,000 couples realise their dream of parenthood, with a consistently high IVF success rate driven by clinical excellence and lab quality.",
    },
    {
        emoji: "❤️",
        title: "Personalised Care",
        desc: "Every patient's fertility journey is unique. We design treatment plans based on your individual age, health parameters, diagnosis, and medical history.",
    },
    {
        emoji: "🔬",
        title: "Advanced ART Laboratories",
        desc: "Our NABL-certified embryology labs utilise next-generation technology — time-lapse incubators, PGT-A, vitrification — ensuring optimal embryo quality and outcomes.",
    },
    {
        emoji: "💰",
        title: "Transparent Treatment Pricing",
        desc: "We believe world-class fertility care should be accessible. Our pricing is fully transparent with no hidden costs, and flexible EMI options are available for all patients.",
    },
    {
        emoji: "🔒",
        title: "Safe, Trustworthy & Confidential",
        desc: "Your safety and privacy are our highest priorities. Srijan IVF follows rigorously safe clinical protocols and ensures complete confidentiality for every patient.",
    },
];

const aboutFeatures = [
    {
        emoji: "🏆",
        title: "Highly Experienced Fertility Doctors",
        desc: "Over 20 years treating complex and routine infertility cases with precision.",
    },
    {
        emoji: "🧬",
        title: "Customised Fertility Plans",
        desc: "Every patient receives a treatment plan tailored to their specific diagnosis.",
    },
    {
        emoji: "💬",
        title: "Dedicated Fertility Counselling",
        desc: "Emotional and psychological support throughout your fertility journey.",
    },
    {
        emoji: "🔭",
        title: "Advanced ART Laboratories",
        desc: "NABL-accredited labs equipped with cutting-edge embryology technology.",
    },
];


const treatments = [
    {
        emoji: "🧪",
        name: "In Vitro Fertilization (IVF)",
        slug: "/treatments/ivf-treatment",
        desc: "Eggs are retrieved from the ovaries, fertilised with sperm in an advanced embryology lab, and the resulting embryo is transferred to the uterus.",
    },
    {
        emoji: "💉",
        name: "Intrauterine Insemination (IUI)",
        slug: "/treatments/iui-treatment",
        desc: "Processed sperm is placed directly inside the uterus during the fertile window, significantly increasing the chances of natural conception.",
    },
    {
        emoji: "🔬",
        name: "ICSI Treatment",
        slug: "/treatments/icsi-treatment",
        desc: "A single healthy sperm is directly injected into a mature egg — the most effective treatment for severe male-factor infertility.",
    },
    {
        emoji: "🤝",
        name: "Donor Programme",
        slug: "/treatments/donor-programme",
        desc: "Comprehensive egg, sperm, and embryo donation services for couples where conventional treatment may not be the best path forward.",
    },
    {
        emoji: "🩺",
        name: "Laparoscopy",
        slug: "/treatments/laparoscopic-gynecology",
        desc: "A minimally invasive surgical procedure to diagnose and treat conditions causing infertility, including blocked tubes, PCOS, and endometriosis.",
    },
    {
        emoji: "🔍",
        name: "Hysteroscopy",
        slug: "/treatments/hysteroscopy",
        desc: "A diagnostic and surgical procedure to examine and treat issues inside the uterus, including fibroids, polyps, and adhesions affecting fertility.",
    },
    {
        emoji: "❄️",
        name: "Cryopreservation",
        slug: "/treatments/blastocyst-culture",
        desc: "Advanced vitrification technique to freeze and preserve eggs, sperm, and embryos for future fertility treatment with excellent survival rates.",
    },
    {
        emoji: "🩻",
        name: "HSG Test",
        slug: "/treatments/semen-analysis",
        desc: "An X-ray procedure using contrast dye to assess the condition of the fallopian tubes and uterine cavity, a key diagnostic step in infertility evaluation.",
    },
];

const bookingSteps = [
    {
        num: "1",
        title: "Call or WhatsApp Us",
        desc: "Reach our Delhi fertility helpline at +91 971 174 8080 or send a WhatsApp enquiry anytime.",
    },
    {
        num: "2",
        title: "Share Your Details",
        desc: "Provide brief information about your fertility concern so our patient care team can guide you to the right specialist.",
    },
    {
        num: "3",
        title: "Choose a Convenient Slot",
        desc: "Pick a date and time that suits your schedule to meet our IVF specialist at our Delhi fertility centre.",
    },
    {
        num: "4",
        title: "Begin Your Journey",
        desc: "Visit Srijan IVF Delhi and start your personalised parenthood journey with our caring and experienced team.",
    },
];

const locations = [
    { name: "Delhi", active: true },
    { name: "Noida", active: false },
    { name: "Gurgaon", active: false },
    { name: "Lucknow", active: false },
    { name: "Kanpur", active: false },
    { name: "Patna", active: false },
];

const faqs = [
    {
        q: "What is the success rate of IVF at Srijan IVF Delhi?",
        a: "Srijan IVF Delhi maintains one of the highest IVF success rates in the city — approximately 80–85% per cycle for women under 35. Success rates vary based on age, diagnosis, and medical history. Our fertility specialists will give you a personalised estimate after an initial evaluation.",
    },
    {
        q: "How much does IVF treatment cost at Srijan IVF in Delhi?",
        a: "IVF treatment at Srijan IVF Delhi starts from ₹90,000 per cycle, with all-inclusive, transparent pricing and no hidden charges. The final cost depends on the specific treatment protocol, diagnostic tests, and medications required. We also offer EMI options to make treatment accessible.",
    },
    {
        q: "How many IVF cycles will I need?",
        a: "Many couples achieve success in the first or second IVF cycle. The number of cycles needed depends on individual factors such as age, egg quality, sperm parameters, uterine health, and embryo quality. Our doctors provide a detailed prognosis based on your specific case.",
    },
    {
        q: "Is IVF treatment safe at Srijan IVF Delhi?",
        a: "Yes, IVF is a safe and well-established medical procedure. At Srijan IVF, we follow strict clinical protocols approved by the ICMR (Indian Council of Medical Research). Our medical team carefully monitors every patient throughout the stimulation, retrieval, and transfer stages to minimise any risks.",
    },
    {
        q: "Can I consult online with a Srijan IVF doctor in Delhi?",
        a: "Absolutely. Srijan IVF offers both in-clinic and online video consultations with our Delhi fertility specialists. You can book a teleconsultation by calling our helpline or submitting an enquiry through our website. It's a convenient first step, particularly if you're from outside Delhi.",
    },
    {
        q: "What is the difference between IVF, IUI, and ICSI?",
        a: "IUI (Intrauterine Insemination) involves placing processed sperm directly into the uterus and is typically recommended for mild fertility issues. IVF (In Vitro Fertilization) involves fertilising eggs outside the body in a lab. ICSI (Intracytoplasmic Sperm Injection) is a specialized form of IVF where a single sperm is injected directly into an egg, used primarily for male-factor infertility.",
    },
];
const BestIVFCentreDelhi = () => {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <>
            <Navbar />

            <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
                <img
                    src={aboutImg}
                    alt="Best IVF Centre in Delhi"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#2b0b18]/90 via-[#3b1020]/80 to-[#611638]/60" />

                <div className="relative z-10 max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-[1.1fr_420px] gap-10 items-center">

                        <div className="text-white">
                            <p className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 text-xs md:text-sm font-semibold tracking-wide text-pink-200 mb-6">
                                ✦ Trusted by 10,000+ Parents
                            </p>

                            <h1 className="text-4xl md:text-6xl leading-tight font-bold mb-6">
                                Best IVF Centre <br />
                                in <span className="text-pink-400">Delhi </span>
                            </h1>

                            <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mb-8">
                                Struggling with infertility? You are not alone. Millions of couples in India face this journey. At Srijan IVF, we combine 20+ years of expertise with cutting-edge ART technology to personalise every step of your parenthood journey — from consultation to your baby's first cry.
                            </p>

                            {/* <div className="flex flex-wrap gap-4">
                                <a
                                    href="tel:+919711748080"
                                    className="bg-pink-600 hover:bg-pink-700 text-white px-7 py-4 rounded-2xl text-sm font-semibold transition-all duration-300 shadow-xl"
                                >
                                    Call Now
                                </a>

                                <a
                                    href="https://wa.me/919711748080"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-7 py-4 rounded-2xl text-sm font-semibold transition-all duration-300"
                                >
                                    WhatsApp Us
                                </a>
                            </div> */}
                        </div>

                        <div className="bg-white rounded-[28px] shadow-2xl border border-pink-100 overflow-hidden max-w-[360px] mx-auto w-full">

                            <div className="bg-gradient-to-r from-pink-600 to-rose-500 px-6 py-5 text-white text-center">
                                <p className="text-[11px] font-medium text-white/80 mb-1 uppercase tracking-wider">
                                    Free Consultation
                                </p>

                                <h3 className="text-2xl font-bold">
                                    Book Appointment
                                </h3>
                            </div>

                            <div className="p-5">
                                <form className="space-y-3">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full h-12 rounded-xl border border-pink-100 bg-pink-50/40 px-4 text-sm outline-none focus:border-pink-400 transition-all"
                                    />

                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="w-full h-12 rounded-xl border border-pink-100 bg-pink-50/40 px-4 text-sm outline-none focus:border-pink-400 transition-all"
                                    />

                                    <select aria-label="Select Treatment" className="w-full h-12 rounded-xl border border-pink-100 bg-pink-50/40 px-4 text-sm outline-none focus:border-pink-400 transition-all text-gray-600">
                                        <option>Select Treatment</option>
                                        <option>IVF Treatment</option>
                                        <option>IUI Treatment</option>
                                        <option>ICSI Treatment</option>
                                        <option>Male Infertility</option>
                                    </select>

                                    <button
                                        type="submit"
                                        className="w-full h-12 rounded-xl bg-gradient-to-r from-pink-600 to-rose-500 hover:from-pink-700 hover:to-rose-600 text-white text-sm font-semibold transition-all duration-300"
                                    >
                                        Request Callback
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
                    <div>
                        <p className="text-xs font-semibold tracking-widest uppercase text-pink-400 mb-3">
                            About Srijan IVF Delhi
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
                            Best IVF Centre in Delhi:<br />
                            <span className="text-pink-600">Who We Are</span>
                        </h2>
                        <p className="text-gray-500 leading-relaxed mb-4">
                            Are you facing infertility challenges? Does the dream of having a child feel distant? You are not alone. Across India and the world, countless couples share this journey. But there is hope — advanced IVF treatment in Delhi is helping thousands of families become complete.
                        </p>
                        <p className="text-gray-500 leading-relaxed mb-4">
                            Srijan IVF, recognised as one of the best IVF centres in Delhi, has been transforming lives by providing personalised, evidence-based fertility care. We stand by your side from the very first consultation through to post-recovery and beyond.
                        </p>
                        <p className="text-gray-500 leading-relaxed">
                            With state-of-the-art ART laboratory technology, decades of clinical experience, and a deeply compassionate team of fertility specialists, we craft each IVF journey uniquely for every couple.
                        </p>
                        <div className="mt-6 border-l-4 border-pink-400 bg-pink-50 rounded-r-2xl px-5 py-4">
                            <p className="text-pink-700 text-sm leading-relaxed font-medium">
                                🌱 Srijan IVF Delhi: Where science meets compassion. Our personalised fertility protocols are designed around your unique health profile, age, and medical history — not a one-size-fits-all approach.
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-full h-full rounded-[120px_120px_120px_40px] bg-pink-100 -z-10" />
                            <img
                                src={clinicImg}
                                alt="Srijan IVF Clinic Delhi"
                                className="w-full max-w-md object-cover rounded-[120px_120px_120px_40px] border-[6px] border-pink-200 shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 bg-pink-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <p className="text-xs font-semibold tracking-widest uppercase text-pink-400 mb-2">
                            What Sets Us Apart
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Why Srijan IVF is Delhi's Most Trusted Centre
                        </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                        {aboutFeatures.map((f, i) => (
                            <div
                                key={i}
                                className="flex items-start gap-4 bg-white border border-pink-100 rounded-2xl p-6 hover:shadow-md hover:border-pink-300 transition-all duration-200"
                            >
                                <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center text-2xl shrink-0">
                                    {f.emoji}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 mb-1">{f.title}</h4>
                                    <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-xs font-semibold tracking-widest uppercase text-pink-400 mb-2">
                            Why Srijan IVF
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            Why Choose Srijan IVF for Your Fertility Journey?
                        </h2>
                        <p className="text-gray-500 max-w-xl mx-auto">
                            We are more than a fertility clinic — we are your partners in building the family you have always dreamed of.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {whyUsCards.map((c, i) => (
                            <div
                                key={i}
                                className="flex gap-4 items-start bg-pink-50 border border-pink-100 rounded-2xl p-6 hover:shadow-md hover:border-pink-300 transition-all duration-200"
                            >
                                <div className="w-10 h-10 rounded-xl bg-pink-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                                    {String(i + 1).padStart(2, "0")}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 mb-1">{c.title}</h4>
                                    <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-pink-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-4">
                        <p className="text-xs font-semibold tracking-widest uppercase text-pink-400 mb-2">
                            Meet Our Specialists
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Best IVF Doctors in Delhi at Srijan IVF
                        </h2>
                    </div>
                    <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
                        Our expert fertility specialists bring decades of combined experience in reproductive medicine, ensuring you receive world-class care at every stage of your journey.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {doctors.map((d, i) => (
                            <div
                                key={i}
                                className="bg-white border border-pink-100 rounded-3xl overflow-hidden hover:shadow-xl hover:border-pink-300 transition-all duration-300"
                            >
                                <div className="h-72 bg-pink-50 overflow-hidden">
                                    <img
                                        src={d.img}
                                        alt={d.name}
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>

                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                        {d.name}
                                    </h3>

                                    <p className="text-pink-600 text-sm font-semibold mb-3">
                                        {d.role}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="inline-flex items-center gap-1 text-xs bg-pink-50 border border-pink-200 text-pink-600 font-semibold px-3 py-1 rounded-full">
                                            ✦ {d.exp}
                                        </span>

                                        <span className="inline-flex items-center gap-1 text-xs bg-purple-50 border border-purple-200 text-purple-600 font-semibold px-3 py-1 rounded-full">
                                            {d.qualification}
                                        </span>
                                    </div>

                                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                                        {d.desc}
                                    </p>

                                    <div className="mb-5">
                                        <p className="text-xs font-semibold text-gray-700 mb-2">
                                            Specialisation
                                        </p>

                                        <p className="text-xs text-gray-500 leading-relaxed">
                                            {d.specialisation}
                                        </p>
                                    </div>

                                    <div className="mb-6">
                                        <p className="text-xs font-semibold text-gray-700 mb-2">
                                            Hospital
                                        </p>

                                        <p className="text-xs text-gray-500">
                                            {d.hospital}
                                        </p>
                                    </div>

                                    <div className="flex gap-3">
                                        <a
                                            href="tel:+91971 174 8080"
                                            className="flex-1 bg-pink-600 hover:bg-pink-700 text-white text-sm font-semibold py-3 rounded-xl transition-colors text-center"
                                        >
                                            Call Now
                                        </a>

                                        <Link
                                            to={d.profileUrl}
                                            className="flex-1 border border-pink-300 text-pink-600 text-sm font-semibold py-3 rounded-xl hover:bg-pink-50 transition-colors text-center"
                                        >
                                            View Profile
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-4">
                        <p className="text-xs font-semibold tracking-widest uppercase text-pink-400 mb-2">
                            Our Treatments
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Infertility Services at Srijan IVF Delhi
                        </h2>
                    </div>
                    <p className="text-gray-500 text-center max-w-xl mx-auto mb-12">
                        We offer a full spectrum of assisted reproductive technologies and fertility treatments under one roof.
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {treatments.map((t, i) => (
                            <div
                                key={i}
                                className="border border-pink-100 rounded-2xl p-5 hover:shadow-lg hover:border-pink-300 transition-all duration-200 group"
                            >
                                <div className="w-10 h-10 rounded-xl bg-pink-50 group-hover:bg-pink-100 flex items-center justify-center mb-4 transition-colors duration-200">
                                    <span className="text-pink-500 font-bold text-sm">0{i + 1}</span>
                                </div>
                                <h4 className="font-bold text-gray-800 mb-2 text-sm">{t.name}</h4>
                                <p className="text-xs text-gray-500 leading-relaxed mb-4">{t.desc}</p>
                                <Link
                                    to={t.slug}
                                    className="text-xs font-semibold text-pink-500 hover:text-pink-700 transition-colors"
                                >
                                    Learn More →
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-pink-50">
                <div className="max-w-5xl mx-auto text-center">
                    <p className="text-xs font-semibold tracking-widest uppercase text-pink-400 mb-2">
                        Getting Started
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        How to Book an Appointment at Srijan IVF Delhi?
                    </h2>
                    <p className="text-gray-500 mb-16 max-w-xl mx-auto">
                        Booking a consultation at Srijan IVF is simple, quick, and completely stress-free. Our team is here to guide you every step of the way.
                    </p>

                    <div className="relative flex flex-col md:flex-row justify-between items-start gap-10">
                        <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-0.5 bg-pink-200" />
                        {bookingSteps.map((s, i) => (
                            <div key={i} className="relative flex-1 flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-pink-600 text-white flex items-center justify-center text-xl font-bold mb-5 z-10 shadow-lg shadow-pink-200">
                                    {s.num}
                                </div>
                                <h4 className="font-bold text-gray-900 mb-2 text-sm">{s.title}</h4>
                                <p className="text-xs text-gray-500 leading-relaxed max-w-[160px]">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <p className="text-xs font-semibold tracking-widest uppercase text-pink-400 mb-2">
                        Our Locations
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        Srijan IVF Centres Across India
                    </h2>
                    <p className="text-gray-500 mb-10 max-w-lg">
                        Find a Srijan IVF fertility centre near you. We are expanding our network to bring expert fertility care closer to you.
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {locations.map((loc, i) => (
                            <div
                                key={i}
                                className={`rounded-2xl p-5 border transition-all duration-200 ${loc.active
                                    ? "bg-pink-50 border-pink-300"
                                    : "bg-white border-pink-100 hover:shadow-md hover:border-pink-300"
                                    }`}
                            >
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-pink-500 text-lg">📍</span>
                                    <h4 className="font-bold text-gray-900">{loc.name}</h4>
                                </div>
                                {loc.active ? (
                                    <p className="text-pink-600 text-xs font-semibold">✦ Currently Viewing</p>
                                ) : (
                                    <a href="#" className="text-pink-500 text-xs font-semibold hover:underline">
                                        → View Centre
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            <section className="py-20 px-6 bg-pink-50">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-xs font-semibold tracking-widest uppercase text-pink-400 mb-2">
                        FAQ
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-500 mb-12">
                        Get answers to the most common questions about IVF treatment in Delhi.
                    </p>

                    <div className="flex flex-col gap-3 text-left">
                        {faqs.map((f, i) => (
                            <div key={i} className="bg-white border border-pink-100 rounded-2xl overflow-hidden">
                                <button
                                    className="w-full flex items-center justify-between px-6 py-5 text-sm font-semibold text-gray-800 hover:bg-pink-50 transition-colors"
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                >
                                    {f.q}
                                    <span
                                        className={`text-pink-500 text-xl font-bold transition-transform duration-200 inline-block ${openFaq === i ? "rotate-45" : ""
                                            }`}
                                    >
                                        +
                                    </span>
                                </button>
                                {openFaq === i && (
                                    <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-t border-pink-50 pt-4">
                                        Please contact our team or book a free consultation for a detailed personalised answer to this question.
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

export default BestIVFCentreDelhi;