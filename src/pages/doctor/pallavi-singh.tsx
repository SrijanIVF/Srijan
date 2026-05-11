import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
//import Callus from "@/components/callbtn";
import WhatsAppButton from "@/components/WhatsAppButton";
import bannerImg from "@/assets/About-us-banner.jpg";
import doctorImg from "@/assets/Dr.-Pallavisingh.webp";

const specializations = [
  { icon: "🧬", title: "IVF / ICSI", desc: "Advanced in-vitro fertilization and intracytoplasmic sperm injection procedures." },
  { icon: "🩺", title: "IUI Treatment", desc: "Intrauterine insemination for couples with unexplained or mild infertility." },
  { icon: "💊", title: "PCOS Management", desc: "Comprehensive care for polycystic ovary syndrome affecting fertility." },
  { icon: "👶", title: "Male Infertility", desc: "Semen analysis and PICSI treatments for male factor infertility." },
  { icon: "🌸", title: "Adolescent Health", desc: "Specialized care for adolescent reproductive health concerns." },
  { icon: "🏥", title: "High-Risk Pregnancy", desc: "Expert management of both high-risk and low-risk pregnancies." },
];

const treatmentTable = [
  { param: "When to do 1st visit?", value: "18th day of Period" },
  { param: "Duration of 1st visit?", value: "1 day for check-up" },
  { param: "When to do 2nd visit (Start Treatment)?", value: "2nd day of Period" },
  { param: "Approx. IVF cost in Delhi", value: "₹75,000 to ₹2,00,000/-" },
  { param: "Total duration of treatment", value: "2-3 Months" },
  { param: "Approx. Success Rates", value: "80-90%" },
];

const achievements = [
  { number: "23+", label: "Years Experience" },
  { number: "10K+", label: "Babies Delivered" },
  { number: "80-90%", label: "Success Rate" },
  { number: "5000+", label: "IVF Cycles Done" },
];

const DrPallaviPage = () => {
  return (
    <>
      <Navbar />
      <section className="relative w-full h-[65vh] flex items-center justify-center text-center">
        <img src={bannerImg} alt="Dr. Pallavi Singh" className="absolute inset-0 w-full h-full object-cover brightness-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/40 to-black/50" />
        <div className="relative z-10 text-white px-4 max-w-3xl mx-auto">
          <p className="text-xs font-semibold tracking-[4px] uppercase text-pink-300 mb-4">Meet Our Expert</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5">
            Dr. Pallavi Singh<br />
            <span className="text-pink-300 text-3xl md:text-4xl font-semibold">IVF Specialist — MBBS, DGO</span>
          </h1>
          <p className="text-base md:text-lg text-white/80">
            23+ years of compassionate fertility care, helping thousands of families across Delhi NCR achieve parenthood.
          </p>
        </div>
      </section>

      <section className="relative w-full bg-gradient-to-br from-pink-50 via-white to-pink-100 py-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-pink-100 opacity-40 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-pink-200 opacity-30 translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center relative z-10">
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-full h-full rounded-[50%_50%_50%_30%] bg-pink-200 -z-10 opacity-60" />
              <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-full bg-pink-400 opacity-20 -z-10" />
              <img
                src={doctorImg}
                alt="Dr. Pallavi Singh"
                className="w-72 h-72 md:w-96 md:h-96 object-cover object-top rounded-[50%_50%_50%_30%] border-[6px] border-white shadow-2xl"
              />
              <div className="absolute bottom-4 right-0 bg-white border border-pink-200 rounded-2xl px-4 py-3 shadow-lg">
                <p className="text-pink-600 font-bold text-sm">23+ Years</p>
                <p className="text-gray-500 text-xs">of Excellence</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[4px] uppercase text-pink-400 mb-3">Meet Our Expert</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Dr. Pallavi Singh</h1>
            <div className="w-16 h-1 bg-pink-500 rounded-full mb-5" />

            <div className="flex flex-col gap-2 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-pink-500 font-semibold text-sm">Speciality:</span>
                <span className="bg-pink-100 text-pink-700 text-sm font-semibold px-3 py-1 rounded-full">IVF Specialist</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-pink-500 font-semibold text-sm">Experience:</span>
                <span className="bg-pink-100 text-pink-700 text-sm font-semibold px-3 py-1 rounded-full">23+ Years</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-pink-500 font-semibold text-sm">Qualification:</span>
                <span className="bg-pink-100 text-pink-700 text-sm font-semibold px-3 py-1 rounded-full">MBBS, DGO</span>
              </div>
            </div>

            <p className="text-gray-500 leading-relaxed mb-4 text-sm">
              Dr. Pallavi Singh, a Delhi-based infertility specialist, empowers couples on their parenthood journey. Her 23+ years of experience (MBBS, DGO) and success with complex cases (IVF, IUI, PCOS, male/female infertility) make her a trusted choice. Dr. Pallavi Singh tackles even challenging situations, including failed IVF cycles and past conception struggles.
            </p>
            <p className="text-gray-500 leading-relaxed text-sm mb-6">
              She provides personalized care in Adolescent Health, Menopause, and conditions like Polycystic Ovary Syndrome (PCOS). Dr. Singh is well-versed in managing both high-risk and low-risk pregnancies, ensuring the well-being of both mother and child.
            </p>

            <div className="flex gap-3 flex-wrap">
              <button className="bg-pink-600 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-pink-700 transition-colors duration-200 shadow-md">
                Book Consultation
              </button>
              <button className="border border-pink-300 text-pink-600 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-pink-50 transition-colors duration-200">
                Call Us Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-pink-600 py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((a, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white mb-1">{a.number}</p>
              <p className="text-pink-200 text-sm font-medium">{a.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-pink-400 mb-2">Expertise & Skills</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Areas of Specialization</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {specializations.map((s, i) => (
              <div key={i} className="flex gap-4 items-start bg-pink-50 border border-pink-100 rounded-2xl p-6 hover:shadow-md hover:border-pink-300 transition-all duration-200 group">
                <div className="w-12 h-12 rounded-xl bg-white border border-pink-200 flex items-center justify-center text-xl shrink-0 group-hover:bg-pink-100 transition-colors duration-200">
                  {s.icon}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">{s.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-pink-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div className="bg-white border border-pink-100 rounded-3xl p-8 hover:shadow-lg transition-all duration-300">
            <div className="text-3xl mb-4">👩‍⚕️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">About Dr. Pallavi Singh</h3>
            <p className="text-gray-500 leading-relaxed mb-4 text-sm">
              Her expertise extends to male infertility issues, offering services such as Semen Analysis and Physiological Intra-Cytoplasmic Sperm Injection (PICSI). Additionally, she provides comprehensive fertility treatments including In vitro fertilization (IVF), Intrauterine Insemination (IUI), and Intracytoplasmic Sperm Injection (ICSI).
            </p>
            <p className="text-gray-500 leading-relaxed text-sm">
              Dr. Singh's compassionate approach and dedication to staying at the forefront of reproductive medicine ensure that every patient receives the most advanced and personalized care possible. Her commitment to patient well-being has helped thousands of families achieve their dream of parenthood.
            </p>
          </div>

          <div className="bg-pink-600 rounded-3xl p-10 text-white flex flex-col gap-4">
            <p className="text-pink-200 text-sm font-semibold uppercase tracking-widest">Why Choose Dr. Pallavi</p>
            <h3 className="text-2xl md:text-3xl font-bold leading-snug">
              Trusted by Thousands of Families Across Delhi NCR
            </h3>
            <ul className="flex flex-col gap-3 mt-2">
              {[
                "23+ years of specialized fertility expertise",
                "High success rates in complex IVF cases",
                "Personalized treatment plans for every patient",
                "Expert in failed IVF cycle management",
                "Compassionate & transparent care approach",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-pink-400 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="text-pink-100 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-pink-400 mb-2">Treatment Section</p>
            <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-2">Low Cost IVF Cost in Delhi</h2>
            <div className="w-12 h-1 bg-pink-500 rounded-full mb-6" />
            <p className="text-gray-500 leading-relaxed mb-8 text-sm">
              If you're looking for an IVF center in Delhi NCR that offers top-notch medical services and competitive pricing, look no further! SrijanIVF provides personalized IVF treatments designed to fit your budget. The average cost of IVF in Delhi can vary, but we strive to make it accessible. Explore flexible payment options, including easy EMI financing, to make your dream of parenthood a reality without financial stress.
            </p>

            <div className="border border-pink-100 rounded-2xl overflow-hidden shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-pink-50">
                    <th className="text-left px-5 py-3 font-bold text-gray-800 border-b border-pink-100">Parameters</th>
                    <th className="text-left px-5 py-3 font-bold text-gray-800 border-b border-pink-100">IVF / ICSI</th>
                  </tr>
                </thead>
                <tbody>
                  {treatmentTable.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-pink-50/40"}>
                      <td className="px-5 py-3 text-gray-600 border-b border-pink-50">{row.param}</td>
                      <td className="px-5 py-3 text-gray-800 font-medium border-b border-pink-50">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-pink-100 rounded-[60%_40%_40%_60%] opacity-40 scale-110" />
              <div className="relative z-10 bg-white border border-pink-100 rounded-3xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-3">🤱</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Start Your Journey</h3>
                  <p className="text-gray-500 text-sm">Affordable, accessible fertility care for every family</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-pink-50 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-pink-600">EMI</p>
                    <p className="text-xs text-gray-500 mt-1">Easy Financing</p>
                  </div>
                  <div className="bg-pink-50 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-pink-600">FREE</p>
                    <p className="text-xs text-gray-500 mt-1">Consultation</p>
                  </div>
                </div>
                <button className="w-full mt-5 bg-pink-600 text-white py-3 rounded-xl font-semibold text-sm hover:bg-pink-700 transition-colors duration-200">
                  Book Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Reviews />
      
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default DrPallaviPage;