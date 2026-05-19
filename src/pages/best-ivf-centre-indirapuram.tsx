import aboutImg from "@/assets/About-us-banner.jpg";
import clinicImg from "@/assets/hero-couple.jpg";
import Navbar from "@/components/Navbar";
import SEOMetaHead from "@/components/SEOMetaHead";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useState } from "react";
import doc1 from "@/assets/Dr.-Pallavisingh.webp";
import doc2 from "@/assets/Dr.-santosh.webp";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import LeadPopup from "@/components/LeadPopup";
import { MapPin, Phone } from "lucide-react";
import centreImg from "@/assets/Centre-img-indirapuram.jpeg";

const doctors = [
    {
        img: doc1,
        name: "Dr. Pallavi Singh",
        role: "Senior IVF Specialist – Indirapuram",
        exp: "23+ Years Experience",
        specialisation:
            "IVF | IUI | PCOS | Male Infertility | Female Infertility | ICSI | PICSI",
        qualification: "MBBS, DGO",
        hospital: "Indirapuram Fertility Centre",
        desc: "A Indirapuram-based infertility specialist empowering couples on their parenthood journey. Tackles complex cases with personalized care ensuring the well-being of both mother and child.",
        profileUrl: "/doctor/pallavi-singh",
    },
    {
        img: doc2,
        name: "Dr. Santosh Kumar Arjun",
        role: "Radiodiagnosis Specialist – Indirapuram",
        exp: "15+ Years Experience",
        specialisation:
            "Radiodiagnosis | Medical Imaging | X-Ray | CT Scan | Ultrasound",
        qualification: "MBBS, DNB (Radiodiagnosis)",
        hospital: "GB Pant Hospital & LBS Hospital",
        desc: "A seasoned radiologist in Indirapuram with expertise in diagnosing and interpreting medical images, ensuring the highest quality patient care through meticulous analysis.",
        profileUrl: "/doctor/santosh-kumar",
    },
];

const whyUsCards = [
    {
        emoji: "🏅",
        title: "23+ Years Experienced Doctors",
        desc: "Our team includes some of Indirapuram's finest infertility specialists with over two decades of experience handling both straightforward and complex infertility cases.",
    },
    {
        emoji: "📈",
        title: "Customised Fertility Plans",
        desc: "Treatment designed around your age, diagnosis, and personal health history — never generic.",
    },
    {
        emoji: "❤️",
        title: "Fertility Counselling",
        desc: "Dedicated emotional and clinical support throughout every stage of your fertility journey.",
    },
    {
        emoji: "🔬",
        title: "Advanced ART Laboratories",
        desc: "NABL-certified embryology labs with time-lapse incubators and vitrification technology.",
    },
    {
        emoji: "💰",
        title: "Transparent Treatment Pricing",
        desc: "No hidden costs. Affordable treatment packages with easy EMI options for all patients.",
    },
    {
        emoji: "🔒",
        title: "Safe & Confidential",
        desc: "ICMR-approved clinical protocols. Your identity and data are always kept fully secure.",
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
        name: "Male Infertility",
        slug: "/treatments/male-infertility",
        desc: "Male infertility is the inability of a man to achieve pregnancy with a fertile female partner after one year of trying.",
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
        name: "Blastocyst Culture",
        slug: "/treatments/blastocyst-culture",
        desc: "Advanced vitrification technique to freeze and preserve eggs, sperm, and embryos for future fertility treatment with excellent survival rates.",
    },
    {
        emoji: "🩻",
        name: "Semen Analysis",
        slug: "/treatments/semen-analysis",
        desc: "A comprehensive test to evaluate sperm count, motility, and morphology, essential for diagnosing male infertility.",
    },
];

const bookingSteps = [
    {
        num: "1",
        title: "Call or WhatsApp Us",
        desc: "Reach our Indirapuram fertility helpline at +91 971 174 8080 or send a WhatsApp enquiry anytime.",
    },
    {
        num: "2",
        title: "Share Your Details",
        desc: "Provide brief information about your fertility concern so our patient care team can guide you to the right specialist.",
    },
    {
        num: "3",
        title: "Choose a Convenient Slot",
        desc: "Pick a date and time that suits your schedule to meet our IVF specialist at our Indirapuram fertility centre.",
    },
    {
        num: "4",
        title: "Begin Your Journey",
        desc: "Visit Srijan IVF Indirapuram and start your personalised parenthood journey with our caring and experienced team.",
    },
];

const faqs = [
    {
        q: "Is Srijan IVF the best IVF centre in Indrapuram, Ghaziabad?",
        a: "Srijan IVF is one of the most trusted and highly rated fertility centres in Indrapuram and Ghaziabad NCR. With 20+ years of expert doctors, NABL-certified embryology labs, and consistently high IVF success rates, we are the first choice for couples seeking fertility treatment in this region.",
    },
    {
        q: "What is the IVF success rate at Srijan IVF Indrapuram?",
        a: "Our Indrapuram centre maintains an IVF success rate of approximately 80–85% per cycle for women under 35, which is among the highest in Ghaziabad NCR. Success varies based on age, diagnosis, embryo quality, and other clinical factors. Our specialists will give you a personalised success estimate at your first consultation.",
    },
    {
        q: "What is the cost of IVF treatment in Indrapuram?",
        a: "IVF treatment at Srijan IVF Indirapuram starts from ₹90,000 per cycle, with all-inclusive, transparent pricing and no hidden charges. The final cost depends on the specific treatment protocol, diagnostic tests, and medications required. We also offer EMI options to make treatment accessible.",
    },
    {
        q: "Do you serve patients from Vaishali, Raj Nagar Extension, and Kaushambi?",
        a: "Absolutely. Our Indrapuram fertility centre is conveniently accessible for couples from Vaishali, Raj Nagar Extension, Kaushambi, Crossings Republik, Noida Extension, Anand Vihar, and all nearby NCR areas. We also offer teleconsultation for patients who prefer an online first appointment before visiting in person.",
    },
    {
        q: "Can I get a same-day appointment at Srijan IVF Indrapuram?",
        a: "Yes! We offer same-day consultation appointments at our Indrapuram centre, subject to availability. Call us at +91 971 174 8080 or WhatsApp us and our patient care team will do everything possible to accommodate you on the same day, including evenings and Saturdays.",
    },
    {
        q: "What is the difference between IVF, IUI, and ICSI?",
        a: "IUI (Intrauterine Insemination) involves placing processed sperm directly into the uterus and is typically recommended for mild fertility issues. IVF (In Vitro Fertilization) involves fertilising eggs outside the body in a lab. ICSI (Intracytoplasmic Sperm Injection) is a specialized form of IVF where a single sperm is injected directly into an egg, used primarily for male-factor infertility.",
    },
    {
        q: "Is the consultation at Srijan IVF Indrapuram really free?",
        a: "Yes, your first fertility consultation at Srijan IVF Indrapuram is completely free of charge. During this session, our specialist will review your medical history, answer all your questions, and recommend the most appropriate fertility treatment path for your specific situation.",
    },
];
const BestIVFCentreIndirapuram = () => {
    const [showPopup, setShowPopup] = useState(false);


    const [openFaq, setOpenFaq] = useState(null);

    const { toast } = useToast();

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        name: "",
        phone: "",
        treatment: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        phone: "",
        treatment: "",
        success: "",
    });

    const handleSubmit = async (
        e: React.FormEvent
    ) => {

        e.preventDefault();

        const newErrors = {
            name: "",
            phone: "",
            treatment: "",
            success: "",
        };

        if (!form.name.trim()) {

            newErrors.name =
                "Name is required";

        } else if (
            !/^[A-Za-z\s]+$/.test(form.name)
        ) {

            newErrors.name =
                "Only letters are allowed";
        }

        if (!form.phone) {

            newErrors.phone =
                "Phone number is required";

        } else if (
            !/^[6789]/.test(form.phone)
        ) {

            newErrors.phone =
                "Must start with 6,7,8 or 9";

        } else if (
            form.phone.length !== 10
        ) {

            newErrors.phone =
                "Phone number must be 10 digits";
        }

        if (!form.treatment) {

            newErrors.treatment =
                "Please select treatment";
        }

        if (
            newErrors.name ||
            newErrors.phone ||
            newErrors.treatment
        ) {

            setErrors(newErrors);

            return;
        }

        setErrors({
            name: "",
            phone: "",
            treatment: "",
            success: "",
        });

        setLoading(true);

        setErrors({
            name: "",
            phone: "",
            treatment: "",
            success:
                "Thank you! Our fertility team will call you shortly 💖",
        });

        const payload = { ...form };

        setForm({
            name: "",
            phone: "",
            treatment: "",
        });

        setLoading(false);

        try {

            const formData = new FormData();

            formData.append(
                "name",
                payload.name
            );

            formData.append(
                "mobile",
                payload.phone
            );

            formData.append(
                "source_name",
                "Indirapuram Banner Form"
            );

            formData.append(
                "city_name",
                "Indirapuram"
            );

            formData.append(
                "treatment",
                payload.treatment
            );

            fetch(
                "https://api.srijanivfcentre.com/api/v1/lead/generate-lead/",
                {
                    method: "POST",
                    body: formData,
                }
            ).catch(console.log);

        } catch (err) {

            console.log(err);
        }
    };

    return (
        <>
            <SEOMetaHead
                metaData={{
                    meta_title:
                        "Best IVF Centre in Indirapuram | IVF Treatment & Fertility Clinic | Srijan IVF",

                    metaDescription:
                        "Srijan IVF Centre is one of the best IVF & fertility clinics in Indirapuram offering IVF, IUI, ICSI, PCOS, infertility treatment with high success rates and expert fertility specialists.",

                    metaKeyword:
                        "best ivf centre in indirapuram, ivf centre in indirapuram, fertility clinic in indirapuram, ivf treatment, iui treatment, icsi treatment, infertility treatment, best fertility doctor, ivf specialist, pcos treatment, male infertility treatment, female infertility clinic, srijan ivf centre",

                    author: "Srijan IVF Centre",

                    publisher: "Srijan IVF Centre",

                    title:
                        "Best IVF Centre in Indirapuram | Srijan IVF",

                    url:
                        "https://www.srijanivfcentre.com/best-ivf-centre-indirapuram",

                    canonical_url:
                        "https://www.srijanivfcentre.com/best-ivf-centre-indirapuram",

                    og_type: "website",

                    twitter_card: "summary_large_image",

                    is_active: true,

                    robot: {
                        content: "index, follow",
                    },
                }}
            />
            {showPopup && <LeadPopup onClose={() => setShowPopup(false)} />}
            <Navbar />
            <section className="relative overflow-hidden bg-gradient-to-br from-white via-pink-50 to-rose-100 pt-24 md:pt-28 pb-10 md:pb-8 min-h-auto lg:min-h-[620px] flex items-center">

                <div className="absolute top-0 left-0 w-80 h-80 bg-pink-200/40 rounded-full blur-3xl"></div>

                <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl"></div>

                <div className="absolute top-20 right-20 w-32 h-32 rounded-[30px] rotate-12 bg-pink-100 border border-pink-200"></div>

                <div className="absolute bottom-20 left-10 w-24 h-24 rounded-full bg-white shadow-2xl"></div>

                <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">

                    <div className="grid lg:grid-cols-[1fr_380px] gap-10 lg:gap-14 items-center">

                        <div>

                            <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-xl text-pink-700 border border-pink-200 rounded-full px-5 py-2 text-sm font-semibold mb-6 shadow-sm">
                                ✦ Trusted IVF Centre in Indirapuram
                            </span>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-gray-900 mb-5 md:mb-6">
                                Best IVF Centre <br />
                                in <span className="text-pink-600">Indirapuram</span>
                            </h1>

                            <p className="text-gray-600 text-[15px] sm:text-base md:text-lg leading-relaxed max-w-2xl mb-7 md:mb-8">
                                Searching for a trusted fertility clinic near Indrapuram or Indirapuram? Srijan IVF brings world-class reproductive medicine to your neighbourhood in Ghaziabad NCR. With expert doctors, state-of-the-art ART labs, and deeply personalised care — your parenthood journey starts right here.


                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 md:mb-10">

                                <div className="bg-white border border-pink-100 rounded-2xl px-4 py-4 shadow-sm text-center">
                                    <p className="text-2xl font-bold text-pink-600">
                                        23+
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        Years Experience
                                    </p>
                                </div>

                                <div className="bg-white border border-pink-100 rounded-2xl px-4 py-4 shadow-sm text-center">
                                    <p className="text-2xl font-bold text-pink-600">
                                        18K+
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        IVF Babies Delivered
                                    </p>
                                </div>

                                <div className="bg-white border border-pink-100 rounded-2xl px-4 py-4 shadow-sm text-center">
                                    <p className="text-2xl font-bold text-pink-600">
                                        90%
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        IVF Success Rate
                                    </p>
                                </div>
                            </div>
                        </div>
                        <form
                            onSubmit={handleSubmit}
                            className="w-full max-w-full sm:max-w-[420px] lg:max-w-[340px] mx-auto lg:ml-auto bg-white/95 backdrop-blur-xl border border-pink-100 rounded-[24px] md:rounded-[28px] shadow-xl overflow-hidden"
                        >

                            <div className="bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-5 text-white text-center">

                                <p className="uppercase tracking-[2px] text-[10px] text-white/80 mb-1">
                                    Free Consultation
                                </p>

                                <h3 className="text-2xl font-bold">
                                    Book Appointment
                                </h3>
                            </div>

                            <div className="p-4 sm:p-5 space-y-3">
                                <div>

                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        value={form.name}
                                        onChange={(e) => {

                                            const value =
                                                e.target.value;

                                            if (
                                                /^[A-Za-z\s]*$/.test(
                                                    value
                                                )
                                            ) {

                                                setForm({
                                                    ...form,
                                                    name: value,
                                                });
                                            }
                                        }}
                                        className="w-full h-11 rounded-xl border border-pink-100 bg-pink-50 px-4 text-sm outline-none focus:border-pink-400"
                                    />

                                    {errors.name && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>
                                <div>

                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        maxLength={10}
                                        value={form.phone}
                                        onChange={(e) => {

                                            const value =
                                                e.target.value
                                                    .replace(
                                                        /\D/g,
                                                        ""
                                                    )
                                                    .slice(
                                                        0,
                                                        10
                                                    );

                                            setForm({
                                                ...form,
                                                phone: value,
                                            });
                                        }}
                                        className="w-full h-11 rounded-xl border border-pink-100 bg-pink-50 px-4 text-sm outline-none focus:border-pink-400"
                                    />

                                    {errors.phone && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.phone}
                                        </p>
                                    )}
                                </div>

                                <div>

                                    <select
                                        aria-label="select treatment"
                                        value={form.treatment}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                treatment:
                                                    e.target
                                                        .value,
                                            })
                                        }
                                        className="w-full h-11 rounded-xl border border-pink-100 bg-pink-50 px-4 text-sm outline-none focus:border-pink-400 text-gray-600"
                                    >
                                        <option value="">
                                            Select Treatment
                                        </option>

                                        <option>
                                            IVF Treatment
                                        </option>

                                        <option>
                                            IUI Treatment
                                        </option>

                                        <option>
                                            Altruistic Surrogacy
                                        </option>

                                    </select>

                                    {errors.treatment && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.treatment}
                                        </p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full h-11 rounded-xl bg-gradient-to-r from-pink-600 to-rose-500 active:scale-[0.98] md:hover:scale-[1.02] transition-all duration-300 text-white text-sm font-semibold shadow-lg"
                                >
                                    {loading
                                        ? "Submitting..."
                                        : "Request Callback"}
                                </button>

                                {errors.success && (
                                    <div className="bg-green-50 border border-green-200 text-green-700 text-xs rounded-xl px-4 py-3 text-center">
                                        {errors.success}
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <section className="py-14 md:py-20 px-4 sm:px-6 bg-white">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center">
                    <div>
                        <p className="text-xs font-semibold tracking-widest uppercase text-pink-400 mb-3">
                            About Srijan IVF Indirapuram
                        </p>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-5 md:mb-6 leading-snug">
                            Best IVF Centre in Indirapuram:<br />
                            <span className="text-pink-600">Who We Are</span>
                        </h2>
                        <p className="text-gray-500 leading-relaxed mb-4">
                            Are you facing infertility challenges and looking for a trusted fertility clinic near Indrapuram or Indirapuram? You are not alone — and you don't need to travel far. Srijan IVF has brought advanced, compassionate fertility care right to the heart of Ghaziabad NCR.                        </p>
                        <p className="text-gray-500 leading-relaxed mb-4">
                            Located conveniently in Indrapuram, our centre serves couples from across Ghaziabad, Vaishali, Raj Nagar Extension, Crossings Republik, Noida Extension, and nearby areas who seek world-class IVF treatment without the hassle of a long commute to Delhi.                        </p>
                        <p className="text-gray-500 leading-relaxed">
                            With highly experienced IVF specialists, NABL-certified embryology laboratories, and deeply personalised treatment protocols, Srijan IVF Indrapuram is where your dream of parenthood truly begins.                        </p>
                        <div className="mt-6 border-l-4 border-pink-400 bg-pink-50 rounded-r-2xl px-5 py-4">
                            <p className="text-pink-700 text-sm leading-relaxed font-medium">
                                🌱 Srijan IVF Indirapuram:  Bringing Delhi-level IVF expertise to Ghaziabad — with personalised care crafted around your unique health profile, medical history, and parenthood goals.
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-full h-full rounded-[120px_120px_120px_40px] bg-pink-100 -z-10" />
                            <img
                                src={clinicImg}
                                alt="Srijan IVF Clinic Indirapuram"
                                className="w-full max-w-[280px] sm:max-w-sm md:max-w-md object-cover rounded-[80px_80px_80px_30px] md:rounded-[120px_120px_120px_40px] border-[5px] md:border-[6px] border-pink-200 shadow-xl"
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
                            Why Srijan IVF is Indirapuram's Most Trusted Centre
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
                    <div className="mt-10 md:mt-12 text-center">
                        <p className="text-pink-600 font-semibold text-lg mb-5">
                            Your parenthood journey starts with one conversation ❤️
                        </p>

                        <button
                            onClick={() => setShowPopup(true)}
                            className="inline-flex items-center justify-center px-8 h-12 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-semibold shadow-lg hover:scale-[1.02] transition-all duration-300"
                        >
                            Request Call Back
                        </button>
                    </div>
                </div>
            </section>

            <section className="py-14 md:py-20 px-4 sm:px-6 bg-white">
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
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
                            Best IVF Doctors in Indirapuram at Srijan IVF
                        </h2>
                    </div>
                    <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
                        Our expert fertility specialists bring decades of combined experience in reproductive medicine, ensuring you receive world-class care at every stage of your journey.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto">
                        {doctors.map((d, i) => (
                            <div
                                key={i}
                                className="bg-white border border-pink-100 rounded-3xl overflow-hidden hover:shadow-xl hover:border-pink-300 transition-all duration-300"
                            >
                                <div className="h-[280px] sm:h-72 bg-pink-50 overflow-hidden">
                                    <img
                                        src={d.img}
                                        alt={d.name}
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>

                                <div className="p-4 sm:p-6">
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
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

                                    <div className="flex flex-col sm:flex-row gap-3">
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
                    <div className="mt-12 text-center">
                        <p className="text-pink-600 font-semibold text-lg">
                            Meet the experts who make parenthood possible ❤️
                        </p>

                        <button
                            onClick={() => setShowPopup(true)}
                            className="mt-6 px-6 py-3 bg-pink-600 text-white rounded-full font-semibold hover:bg-pink-700 transition"
                        >
                            Book Free IVF Appointment
                        </button>
                    </div>
                </div>
            </section>

            <section className="py-14 md:py-20 px-4 sm:px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-4">
                        <p className="text-xs font-semibold tracking-widest uppercase text-pink-400 mb-2">
                            Our Treatments
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Infertility Services at Srijan IVF Indirapuram
                        </h2>
                    </div>
                    <p className="text-gray-500 text-center max-w-xl mx-auto mb-12">
                        We offer a full spectrum of assisted reproductive technologies and fertility treatments under one roof.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
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

            <section className="py-14 md:py-20 bg-gradient-to-b from-pink-50 to-white px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">

                    <div className="text-center mb-10 md:mb-14">
                        <p className="text-xs font-semibold tracking-[3px] uppercase text-pink-400 mb-3">
                            Our Fertility Centre
                        </p>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            Our Fertility Hospital in Indirapuram with
                            <span className="text-pink-600"> Complete Care</span>
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-center">

                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-full h-full rounded-[28px] bg-pink-100 -z-10"></div>

                            <img
                                src={centreImg}
                                alt="Srijan IVF Indirapuram Centre"
                                className="w-full h-[240px] sm:h-[320px] lg:h-[400px] object-cover rounded-[28px] shadow-lg"
                            />
                        </div>

                        <div>

                            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-xs font-semibold mb-4">
                                <MapPin className="w-4 h-4" />
                                Indirapuram Centre
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-4">
                                Srijan IVF Fertility Centre in Indirapuram
                            </h3>

                            <p className="text-gray-600 text-sm md:text-base leading-7 mb-6">
                                Plot No. 7, Abhay Khand 1, Pocket 2, Abhay Khand,
                                Indirapuram, Ghaziabad, Uttar Pradesh 201020.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-7">

                                <div className="bg-white border border-pink-100 rounded-2xl p-4 shadow-sm">
                                    <p className="text-2xl font-bold text-pink-600 mb-1">
                                        23+
                                    </p>

                                    <p className="text-xs sm:text-sm text-gray-500">
                                        Years Experience
                                    </p>
                                </div>

                                <div className="bg-white border border-pink-100 rounded-2xl p-4 shadow-sm">
                                    <p className="text-2xl font-bold text-pink-600 mb-1">
                                        18K+
                                    </p>

                                    <p className="text-xs sm:text-sm text-gray-500">
                                        Happy Families
                                    </p>
                                </div>

                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">

                                <a
                                    href="tel:+919711748080"
                                    className="flex-1 h-12 rounded-xl bg-pink-600 hover:bg-pink-700 text-white text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-md"
                                >
                                    <Phone className="w-4 h-4" />
                                    Call Now
                                </a>

                                <a
                                    href="https://www.google.com/maps/place/Srijan+IVF+%26+Diagnostic+Centre+Pvt+Ltd/@28.6390524,77.3468784,17z/data=!3m1!4b1!4m6!3m5!1s0x390cfbdafeae2c53:0xdd2faeb815f28c5e!8m2!3d28.6390524!4d77.3494533!16s%2Fg%2F11xc_fq_0s?entry=ttu&g_ep=EgoyMDI2MDUxNy4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 h-12 rounded-xl border border-pink-300 text-pink-600 text-sm font-semibold hover:bg-pink-50 transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    <MapPin className="w-4 h-4" />
                                    Get Direction
                                </a>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* <section className="py-14 md:py-20 px-4 sm:px-6 bg-white">
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

            <section className="py-14 md:py-20 px-4 sm:px-6 bg-[#fafafa] overflow-hidden">

                <div className="max-w-6xl mx-auto">

                    <div className="mb-10 md:mb-12">

                        <p className="text-pink-500 text-xs sm:text-sm font-semibold tracking-[3px] uppercase mb-3">
                            FAQs
                        </p>

                        <div className="w-14 h-[2px] bg-pink-500 mb-5"></div>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            Frequently Asked Questions
                        </h2>

                    </div>

                    <div className="flex flex-col gap-4">

                        {faqs.map((f, i) => (

                            <div
                                key={i}
                                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-pink-200 transition-all duration-300"
                            >

                                <button
                                    onClick={() =>
                                        setOpenFaq(openFaq === i ? null : i)
                                    }
                                    className="w-full flex items-start justify-between gap-4 px-4 sm:px-5 md:px-6 py-4 md:py-5 text-left"
                                >

                                    <span className="text-[14px] sm:text-[15px] md:text-[17px] leading-relaxed font-medium text-pink-500 pr-2">
                                        {i + 1}. {f.q}
                                    </span>

                                    <span
                                        className={`text-pink-500 text-2xl leading-none transition-transform duration-300 shrink-0 mt-0.5 ${openFaq === i
                                            ? "rotate-45"
                                            : ""
                                            }`}
                                    >
                                        +
                                    </span>

                                </button>

                                {openFaq === i && (

                                    <div className="border-t border-gray-200 px-4 sm:px-5 md:px-6 py-4 md:py-5 bg-white">

                                        <p className="text-gray-600 text-sm sm:text-[14px] md:text-base leading-7">
                                            {f.a}
                                        </p>

                                    </div>

                                )}

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            <section className="relative overflow-hidden bg-gradient-to-r from-pink-600 via-pink-500 to-rose-500 py-16 md:py-20 px-4 sm:px-6">

                <div className="absolute inset-0 bg-black/5"></div>

                <div className="max-w-5xl mx-auto relative z-10 text-center">

                    <h2 className="text-2xl sm:text-4xl md:text-4xl font-bold text-white leading-tight mb-6">
                        Begin Your Parenthood Journey Today
                    </h2>

                    <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-10">
                        Join 35,000+ happy families who trusted Srijan IVF Indirapuram for their fertility care.
                        Book your free consultation now.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

                        <a
                            href="tel:+91971 174 8080"
                            className="w-full sm:w-auto min-w-[260px] h-14 bg-white text-pink-600 rounded-xl px-8 flex items-center justify-center gap-3 text-base font-semibold shadow-lg hover:scale-[1.02] transition-all duration-300"
                        >
                            📞 Call 971 174 8080
                        </a>

                        <button
                            onClick={() => setShowPopup(true)}
                            className="w-full sm:w-auto min-w-[260px] h-14 border border-white/70 text-white rounded-xl px-8 text-base font-semibold hover:bg-white hover:text-pink-600 transition-all duration-300"
                        >
                            Book Free Consultation
                        </button>

                    </div>

                </div>

            </section>
            <WhatsAppButton />
            <LeadPopup />
            <Footer />
        </>
    );
};

export default BestIVFCentreIndirapuram;