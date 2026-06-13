import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import Callus from "@/components/callbtn";
import WhatsAppButton from "@/components/WhatsAppButton";
import drPallaviImg from "@/assets/Dr pallavi srijanivf.png";
import Reviews from "@/components/Reviews";
import SuccessStories from "@/components/success-stories";

// ── DATA ─────────────────────────────────────────────────────────────────────

const trustHighlights = [
  "Experienced Fertility Specialists",
  "Advanced IVF Laboratory",
  "Personalised Treatment Plans",
  "International Patient Assistance",
  "Affordable IVF Packages",
  "Transparent Pricing",
];

const heroStats = [
  { val: "18,000+", label: "Happy Families" },
  { val: "23+", label: "Years of Excellence" },
  { val: "30+", label: "Countries Served" },
  { val: "75%", label: "Cost Savings vs West" },
];

const whyReasons = [
  {
    icon: "🏆",
    title: "World-Class Technology",
    desc: "Srijan IVF uses advanced embryology equipment, AI-assisted monitoring, and the latest IVF protocols — comparable to the best clinics in Europe and USA.",
  },
  {
    icon: "💰",
    title: "Transparent & Affordable Pricing",
    desc: "No hidden fees. No pressure to over-treat. We provide clear, itemised packages that save international patients 60–75% compared to equivalent treatment in the UK, USA, or Australia.",
  },
  {
    icon: "👩‍⚕️",
    title: "Experienced Specialists",
    desc: "Led by Dr. Pallavi Singh (23+ Years, MBBS, DGO, Gold Medalist), our specialists deliver world-class expertise with genuine compassion for every patient.",
  },
  {
    icon: "🌍",
    title: "Dedicated International Care Team",
    desc: "A dedicated coordinator is assigned to every international patient — managing scheduling, medical records, visa letters, accommodation, and 24/7 WhatsApp support.",
  },
  {
    icon: "✈️",
    title: "End-to-End Travel Support",
    desc: "Airport pickup, hotel guidance, visa invitation letters, and interpreter services — all arranged so you can focus entirely on your treatment.",
  },
  {
    icon: "📱",
    title: "Remote Follow-Up Support",
    desc: "After returning home, our team stays connected via WhatsApp, video calls, and coordination with your local OB-GYN for continuous pregnancy support.",
  },
];

const costTable = [
  { treatment: "IVF (Basic Cycle)", uk: "$6,250–$10,000", usa: "$12,000–$15,000", aus: "$5,200–$7,800", srijan: "$2,000–$2,800", savings: "Save 75%+" },
  { treatment: "ICSI", uk: "$7,500–$11,250", usa: "$13,000–$17,000", aus: "$5,850–$9,100", srijan: "$2,400–$2,900", savings: "Save 70%+" },
  { treatment: "IVF + PGT Genetic Testing", uk: "$11,250–$15,000", usa: "$18,000–$25,000", aus: "$9,100–$11,700", srijan: "$3,200–$3,800", savings: "Save 75%+" },
  { treatment: "Egg Freezing", uk: "$4,375–$6,875", usa: "$7,000–$10,000", aus: "$3,250–$5,200", srijan: "$1,200–$1,800", savings: "Save 70%+" },
  { treatment: "Donor Egg IVF", uk: "$12,500–$18,750", usa: "$25,000–$35,000", aus: "$10,400–$14,300", srijan: "$2,800–$3,800", savings: "Save 85%+" },
];

const steps = [
  {
    num: "01", phase: "Step 1 · Before You Travel",
    title: "Free Online Consultation",
    desc: "Share your medical history and reports via WhatsApp or email. Dr. Pallavi's team reviews your case and provides a personalised protocol and cost estimate — all before you book a flight.",
    tags: ["WhatsApp Support", "Free Assessment", "Medical Review"],
  },
  {
    num: "02", phase: "Step 2 · Planning Your Visit",
    title: "Visa Letter & Travel Coordination",
    desc: "We issue official medical visa invitation letters, assist with travel scheduling, recommend trusted accommodation near our clinic, and assign your personal international coordinator.",
    tags: ["Visa Letter Issued", "Airport Pickup", "Hotel Recommendations"],
  },
  {
    num: "03", phase: "Step 3 · Day of Arrival",
    title: "Face-to-Face Consultation",
    desc: "Meet Dr. Pallavi personally. An unrushed, thorough consultation covering your complete history, explaining the protocol in plain language, and answering every question you have.",
    tags: ["Personal Meeting", "Full Diagnostics", "Protocol Confirmed"],
  },
  {
    num: "04", phase: "Step 4 · Treatment Cycle",
    title: "IVF Treatment",
    desc: "Your cycle is monitored with precision in our advanced embryology lab. Daily updates are shared with you so you always know what's happening with your embryos.",
    tags: ["IVF / ICSI", "Embryo Monitoring", "Daily Updates"],
  },
  {
    num: "05", phase: "Step 5 · Embryo Transfer",
    title: "Transfer & Implantation Support",
    desc: "Best-quality blastocysts are selected and transferred. You receive full bedside guidance and emotional support from our team throughout the transfer process.",
    tags: ["Blastocyst Transfer", "Embryo Glue", "Counselling Support"],
  },
  {
    num: "06", phase: "Step 6 · After You Return Home",
    title: "Remote Follow-Up & Pregnancy Support",
    desc: "You can return home after the transfer. Our team stays with you via WhatsApp through your pregnancy test and first trimester. We coordinate with your local OB-GYN for a smooth handover.",
    tags: ["Remote Monitoring", "WhatsApp Care", "OB-GYN Coordination"],
  },
];

const treatments = [
  { icon: "🧬", name: "IVF (In Vitro Fertilization)" },
  { icon: "💉", name: "ICSI" },
  { icon: "🔬", name: "IUI" },
  { icon: "❄️", name: "Frozen Embryo Transfer (FET)" },
  { icon: "🌱", name: "Blastocyst Transfer" },
  { icon: "🌸", name: "Fertility Preservation" },
  { icon: "🥚", name: "Egg Freezing" },
  { icon: "🧊", name: "Embryo Freezing" },
  { icon: "👨", name: "Male Infertility Treatment" },
  { icon: "👩", name: "Female Infertility Treatment" },
  { icon: "🧪", name: "Genetic Testing (PGT)" },
];

const travelServices = [
  { icon: "🛂", title: "Medical Visa Letter", desc: "Official invitation letters for Indian Medical Visa applications, processed within 24 hours." },
  { icon: "👤", title: "Personal Coordinator", desc: "One dedicated point of contact for your entire journey — 7 days a week, available via WhatsApp." },
  { icon: "🚗", title: "Airport Transfers", desc: "Complimentary airport pick-up and drop-off for all international patients." },
  { icon: "🏨", title: "Accommodation Support", desc: "Partner hotels and serviced apartments within walking distance of our clinic at negotiated rates." },
  { icon: "🌐", title: "Multilingual Support", desc: "English, Hindi, and Urdu speaking staff. All reports and communications provided in English." },
  { icon: "📅", title: "Appointment Scheduling", desc: "Full scheduling of all diagnostics, monitoring scans, and procedures — no confusion, no gaps." },
];

const testimonials = [
  {
    flag: "🇬🇧", country: "UK",
    text: "After two failed IVF cycles in London, a friend suggested Srijan IVF. Dr. Pallavi explained everything in plain English. Our daughter was born nine months later.",
    name: "Rebecca T.", location: "Manchester, UK",
  },
  {
    flag: "🇦🇺", country: "Australia",
    text: "We saved over A$18,000 compared to quotes in Sydney. The technology felt more advanced than what we were offered at home. We have twin boys now. This clinic changed our lives.",
    name: "Priya & Rajan M.", location: "Melbourne, Australia",
  },
  {
    flag: "🇦🇪", country: "UAE",
    text: "We were looking for the best IVF technology and a team that understands the emotional aspect. Srijan IVF delivered both. Dr. Pallavi and her staff made us feel at home.",
    name: "Aisha M.", location: "Dubai, UAE",
  },
  {
    flag: "🇳🇬", country: "Nigeria",
    text: "We travelled from Lagos with high hopes, and Srijan IVF exceeded them. The coordinator handled our visa and pickup perfectly. We are forever grateful.",
    name: "Ngozi O.", location: "Lagos, Nigeria",
  },
];

const faqs = [
  {
    q: "How do I get started from another country?",
    a: "Simply WhatsApp us at +91-8851762433 or email us with your medical history and reports. Our international team will review your case within 24 hours and schedule a free video consultation with Dr. Pallavi. You do not need to travel until we have confirmed a personalised protocol.",
  },
  {
    q: "How long will I need to stay in India?",
    a: "Most patients need to be in India for 14–21 days for a fresh IVF cycle. For frozen embryo transfer (FET), the stay can be as short as 5–7 days if medication preparation begins at home. We work with your schedule and provide a detailed day-by-day plan before you book travel.",
  },
  {
    q: "Can I get a medical visa for IVF treatment in India?",
    a: "Yes. India issues Medical Visas (MV) specifically for patients coming for treatment. We provide an official invitation letter on clinic letterhead, required for your visa application. Your accompanying partner is eligible for a Medical Attendant Visa (MX). Our team will guide you through the entire process.",
  },
  {
    q: "What reports should I send before consultation?",
    a: "Please share: hormonal reports (AMH, FSH, LH, E2), semen analysis, recent ultrasound reports, and records of any previous fertility treatments. Our team will review these and advise you on any additional tests needed.",
  },
  {
    q: "What happens if the IVF cycle is unsuccessful?",
    a: "Our team provides a full clinical review to determine the best path forward. We discuss alternative protocols, additional diagnostic tests, and all available options. Many of our international patients have succeeded on a subsequent cycle with protocol refinements. We never leave patients without a plan.",
  },
  {
    q: "Is the quality of IVF in India comparable to the UK or USA?",
    a: "Yes — Srijan IVF uses the same embryology equipment and lab protocols as leading clinics in the UK, USA, and Europe. Our NABH and ISO accreditations independently verify our lab and clinical standards.",
  },
  {
    q: "I've been told donor eggs are my only option. Is that true?",
    a: "Please get a second opinion before accepting that. Srijan IVF always attempts your own eggs and sperm first — we believe in your biology. We offer a free second opinion to every patient who has been told options are limited elsewhere.",
  },
];

const flags = ["🇬🇧", "🇺🇸", "🇦🇺", "🇦🇪", "🇸🇦", "🇳🇬", "🇰🇪", "🇨🇦", "🇩🇪", "🇫🇷", "🇿🇦", "🇯🇵", "🇸🇬", "🇲🇾", "🇧🇩", "🇧🇷", "🇮🇹", "🇳🇱", "🇸🇪", "🇨🇭"];

// ── COMPONENT ──────────────────────────────────────────────────────────────

const InternationalPatientPage = () => {
  const [openFaq, setOpenFaq] = useState<number>(-1);

  return (
    <>
      <Navbar />
<section className="bg-gradient-to-br from-pink-50 via-white to-pink-100 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-12">
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

      {/* Left Content */}
      <div>
        <div className="inline-flex items-center gap-2 bg-white border border-pink-200 rounded-full px-4 py-2 text-xs text-pink-600 font-semibold shadow-sm mb-4">
          ✦ Trusted by 10,000+ Happy Parents Across 30+ Countries
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          Your Journey to
          <span className="block text-pink-600">
            Parenthood Begins
          </span>
          in India
        </h1>

        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 max-w-xl">
          World-class fertility care, advanced IVF technology,
          experienced specialists, and personalized support for
          international patients — all at affordable costs.
        </p>

        <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
          {trustHighlights.map((h, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-xs md:text-sm text-gray-600"
            >
              <span className="text-pink-500 font-bold">✓</span>
              {h}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mb-6">
          <a
            href="https://wa.me/918851762433"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-pink-700 transition-all duration-300 shadow-md text-sm"
          >
            Book Online Consultation →
          </a>

          <a
            href="https://wa.me/918851762433"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-full hover:border-pink-500 hover:text-pink-600 transition-all duration-300 text-sm"
          >
            📞 Talk to Coordinator
          </a>
        </div>

        <div className="flex flex-wrap gap-6 pt-5 border-t border-pink-100">
          {heroStats.map((s, i) => (
            <div key={i}>
              <p className="text-xl md:text-2xl font-extrabold text-pink-600">
                {s.val}
              </p>
              <p className="text-xs text-gray-500">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div className="relative">
        <div className="overflow-hidden rounded-[32px] shadow-xl">
          <img
            src={drPallaviImg}
            alt="Dr. Pallavi Singh — IVF Specialist"
            className="w-full h-[320px] md:h-[420px] object-cover object-top"
          />
        </div>

        <div className="absolute bottom-4 left-4 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-lg">
            ❤️
          </div>

          <div>
            <p className="text-xs text-gray-400">
              This Year
            </p>
            <p className="text-sm font-bold text-gray-900">
              2,400+ Pregnancies
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      <section className="py-16 md:py-20 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[4px] uppercase text-pink-400 mb-2">Why Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why International Patients Choose Srijan IVF
            </h2>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed">
              At Srijan IVF Centre, we understand that travelling abroad for fertility treatment is a life-changing decision. Our dedicated international patient program ensures a smooth, comfortable, and stress-free experience from your first consultation to your successful treatment journey.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyReasons.map((r, i) => (
              <div key={i} className="flex gap-4 items-start bg-pink-50 border border-pink-100 rounded-2xl p-6 hover:shadow-md hover:border-pink-300 transition-all duration-200">
                <div className="w-11 h-11 rounded-xl bg-white border border-pink-200 flex items-center justify-center text-xl shrink-0 shadow-sm">{r.icon}</div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">{r.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 md:px-10 bg-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[4px] uppercase text-pink-400 mb-2">Transparent Pricing</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Quality Care at a Fraction of the Cost</h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">Compare IVF treatment costs around the world. Srijan IVF delivers equal — or superior — outcomes at dramatically lower prices.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl shadow-sm border border-pink-100">
            <table className="w-full text-sm bg-white">
              <thead>
                <tr className="bg-pink-600 text-white">
                  <th className="text-left px-5 py-4 font-semibold">Treatment</th>
                  <th className="text-center px-4 py-4 font-semibold">🇬🇧 UK</th>
                  <th className="text-center px-4 py-4 font-semibold">🇺🇸 USA</th>
                  <th className="text-center px-4 py-4 font-semibold">🇦🇺 Australia</th>
                  <th className="text-center px-4 py-4 font-semibold text-yellow-200">Srijan IVF 🇮🇳</th>
                  <th className="text-center px-4 py-4 font-semibold text-green-200">Savings</th>
                </tr>
              </thead>
              <tbody>
                {costTable.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-pink-50/50"}>
                    <td className="px-5 py-3.5 font-semibold text-gray-800 border-b border-pink-50">{row.treatment}</td>
                    <td className="px-4 py-3.5 text-center text-gray-500 border-b border-pink-50">{row.uk}</td>
                    <td className="px-4 py-3.5 text-center text-gray-500 border-b border-pink-50">{row.usa}</td>
                    <td className="px-4 py-3.5 text-center text-gray-500 border-b border-pink-50">{row.aus}</td>
                    <td className="px-4 py-3.5 text-center font-bold text-pink-600 border-b border-pink-50">{row.srijan}</td>
                    <td className="px-4 py-3.5 text-center border-b border-pink-50">
                      <span className="bg-green-100 text-green-700 font-semibold text-xs px-2.5 py-1 rounded-full">{row.savings}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4 text-center">*Prices are indicative. A personalised quote is provided after initial consultation.</p>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[4px] uppercase text-pink-400 mb-2">Your Journey</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">From First Message to Your First Miracle</h2>
          </div>
          <div className="flex flex-col gap-5">
            {[0, 2, 4].map((pairStart) => (
              <div key={pairStart} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {steps.slice(pairStart, pairStart + 2).map((step) => (
                  <div key={step.num} className="relative border border-pink-100 rounded-3xl p-6 hover:shadow-lg hover:border-pink-300 transition-all duration-200 bg-white group overflow-hidden">
                    {/* Watermark number */}
                    <div className="absolute top-3 right-5 text-7xl font-extrabold text-pink-50 select-none pointer-events-none group-hover:text-pink-100 transition-colors duration-200 leading-none">
                      {step.num}
                    </div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-pink-400 mb-2">{step.phase}</p>
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 pr-12">{step.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-5">{step.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.tags.map((tag, t) => (
                        <span key={t} className="text-xs bg-pink-50 text-pink-600 font-semibold px-3 py-1 rounded-full border border-pink-100">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 md:px-10 bg-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[4px] uppercase text-pink-400 mb-2">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Fertility Treatments Available</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {treatments.map((t, i) => (
              <div key={i} className="bg-white border border-pink-100 rounded-2xl p-5 flex items-center gap-3 hover:shadow-md hover:border-pink-300 transition-all duration-200">
                <span className="text-2xl shrink-0">{t.icon}</span>
                <p className="text-sm font-semibold text-gray-700 leading-snug">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[4px] uppercase text-pink-400 mb-2">Why India</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose India for IVF?</h2>
            <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-6" />
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              India has emerged as one of the leading destinations for fertility treatment worldwide. Srijan IVF combines all these advantages with compassionate, personalized care.
            </p>
            <div className="flex flex-col gap-3">
              {[
                "High-quality fertility care at international standards",
                "Advanced IVF technology and embryology labs",
                "Experienced fertility specialists (23+ years)",
                "Significantly lower treatment costs vs Western countries",
                "Minimal waiting times — start treatment within days",
                "Personalized patient care and continuous support",
                "English-speaking team for seamless communication",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</span>
                  <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-pink-50 border border-pink-100 rounded-3xl p-8">
            <p className="text-sm font-bold text-gray-800 mb-5">Families have come to us from</p>
            <div className="flex flex-wrap gap-3 mb-5">
              {flags.map((flag, i) => (
                <span key={i} className="text-2xl">{flag}</span>
              ))}
            </div>
            <p className="text-xs text-gray-400">30+ countries and counting</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 md:px-10 bg-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[4px] uppercase text-pink-400 mb-2">We Handle Everything</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Travel & Accommodation Assistance</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {travelServices.map((s, i) => (
              <div key={i} className="bg-white border border-pink-100 rounded-2xl p-6 hover:shadow-lg hover:border-pink-300 transition-all duration-200 group">
                <div className="w-12 h-12 rounded-xl bg-pink-50 group-hover:bg-pink-100 flex items-center justify-center text-2xl mb-4 transition-colors duration-200">{s.icon}</div>
                <h4 className="font-bold text-gray-800 mb-2 text-sm">{s.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[4px] uppercase text-pink-400 mb-2">Our Expert</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Meet Our International Care Lead</h2>
          </div>
          <div className="bg-pink-50 border border-pink-100 rounded-3xl overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-80 shrink-0">
              <img src={drPallaviImg} alt="Dr. Pallavi Singh" className="w-full h-72 md:h-full object-cover object-top" />
            </div>
            <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-pink-600 mb-1">Dr. Pallavi Singh</h3>
              <p className="text-gray-500 text-sm mb-4">Sr. IVF Specialist · MBBS, DGO · Gold Medalist</p>
              <div className="w-14 h-0.5 bg-pink-400 rounded-full mb-5" />
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Dr. Pallavi Singh, a Delhi-based infertility specialist with 23+ years of experience, personally leads every international patient case. Her expertise covers IVF, ICSI, IUI, PCOS, male and female infertility, and high-risk pregnancy care. Her compassionate approach ensures every patient feels heard, supported, and confident throughout their journey.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-white border border-pink-200 rounded-xl px-4 py-2.5">
                  <span>📱</span>
                  <span className="text-sm font-semibold text-gray-700">WhatsApp: +91-971 174 8080</span>
                </div>
                <div className="flex items-center gap-2 bg-white border border-pink-200 rounded-xl px-4 py-2.5">
                  <span>✉️</span>
                  <span className="text-sm font-semibold text-gray-700">info@srijanivfcentre.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 md:px-10 bg-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[4px] uppercase text-pink-400 mb-2">Success Stories</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">10,000+ Families. One Dream.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white border border-pink-100 rounded-3xl p-7 hover:shadow-lg transition-all duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{t.flag}</span>
                  <span className="text-xs font-semibold text-pink-500 bg-pink-50 px-3 py-1 rounded-full border border-pink-100">{t.country}</span>
                  <div className="ml-auto text-yellow-400 text-sm">★★★★★</div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                <div>
                  <p className="font-bold text-gray-800 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SuccessStories />
      <Reviews />
      <section className="py-16 md:py-20 px-4 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[4px] uppercase text-pink-400 mb-2">Questions</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Questions International Patients Ask Us Most</h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between px-5 py-4 bg-gray-50 hover:bg-pink-50 transition-colors duration-200 text-left"
                >
                  <span className="text-pink-600 font-semibold text-sm md:text-base pr-4">{faq.q}</span>
                  <span className="text-pink-500 font-bold text-2xl shrink-0">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <div className="px-5 py-5 bg-white border-t border-gray-100">
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-10 bg-pink-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Parenthood Journey?
          </h2>
          <p className="text-pink-100 text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Connect with our fertility experts today and receive a personalised treatment plan tailored to your needs — before you book your flight.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="https://wa.me/919711748080" target="_blank" rel="noopener noreferrer"
              className="bg-white text-pink-600 font-bold px-8 py-3 rounded-full hover:bg-pink-50 transition-colors text-sm shadow-md">
              Schedule Online Consultation →
            </a>
            <a href="https://wa.me/919711748080" target="_blank" rel="noopener noreferrer"
              className="border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-pink-700 transition-colors text-sm">
              💬 WhatsApp Us Now
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-pink-100 text-sm">
            <span>📞 +91-971 174 8080</span>
            <span>✉ info@srijanivfcentre.com</span>
          </div>
        </div>
      </section>

      {/* <Callus /> */}
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default InternationalPatientPage;