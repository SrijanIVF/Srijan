import aboutImg from "@/assets/About-us-banner.jpg";
import clinicImg from "@/assets/hero-couple.jpg";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import Whyus from "@/components/whyus";
import Footer from "@/components/Footer";
//import Callus from "@/components/callbtn";
import WhatsAppButton from "@/components/WhatsAppButton";


const values = [
  { title: "Compassion", desc: "We provide empathetic and supportive care throughout your fertility journey." },
  { title: "Excellence", desc: "We uphold the highest standards of medical care and continuously improve our services." },
  { title: "Integrity", desc: "We maintain transparency and honesty in all our interactions." },
  { title: "Innovation", desc: "We embrace the latest advancements in fertility medicine to offer the most effective treatments." },
  { title: "Teamwork", desc: "We believe in the power of collaboration to achieve the best outcomes for our patients." },
];

const services = [
  { name: "In Vitro Fertilization (IVF)", desc: "Tailored to each patient's unique needs, utilizing the latest technology and protocols to maximize success rates." },
  { name: "Intracytoplasmic Sperm Injection (ICSI)", desc: "Advanced technique that helps overcome male infertility by injecting a single sperm directly into an egg." },
  { name: "Egg and Sperm Donation", desc: "Donor egg and sperm options for individuals and couples facing specific fertility challenges." },
  { name: "Altruistic Surrogacy", desc: "We assist with surrogacy arrangements, offering hope to those unable to carry a pregnancy." },
  { name: "Fertility Preservation", desc: "Egg and sperm freezing services for those looking to preserve fertility for future family planning." },
  { name: "Preconception Counseling", desc: "Counseling services help patients understand their fertility options and prepare for the journey ahead." },
];

const aims = [
  "Providing comprehensive fertility evaluations and personalized treatment plans.",
  "Utilizing cutting-edge technology to ensure the highest success rates.",
  "Assembling a team of compassionate and experienced fertility specialists.",
  "Offering affordable and accessible fertility care options.",
  "Fostering a supportive and understanding environment for all our patients.",
];

const AboutPage = () => {
  return (
    <>
      <Navbar /> 
      <section className="relative w-full h-[65vh] flex items-center justify-center text-center">
        <img src={aboutImg} alt="IVF Clinic" className="absolute inset-0 w-full h-full object-cover brightness-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/40 to-black/50" />
        <div className="relative z-10 text-white px-4 max-w-3xl mx-auto">
          <p className="text-xs font-semibold tracking-[4px] uppercase text-pink-300 mb-4">Welcome to Srijan IVF Centre</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5">
            Premier IVF & Fertility<br />Clinic in Delhi NCR
          </h1>
          <p className="text-base md:text-lg text-white/80">
            Helping you achieve the dream of parenthood with advanced fertility care.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-pink-400 mb-3">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
              Srijan IVF Centre:<br />
              <span className="text-pink-600">Who We Are</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Welcome to Srijan IVF & Fertility Centre, the best IVF centre in Delhi NCR, where we are dedicated to providing the highest quality fertility treatments and personalized care. Our state-of-the-art facility, experienced team of specialists, and advanced reproductive technologies make us a trusted choice for couples and individuals seeking fertility solutions.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              At Srijan IVF, we understand the emotional and physical challenges of infertility and are committed to helping you achieve your dream of parenthood.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Our experienced and compassionate team of fertility specialists guides you through personalized treatment plans, maximizing your chances of achieving a successful pregnancy. Schedule a free consultation today and turn your dream of parenthood into a beautiful reality.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full rounded-[120px_120px_120px_40px] bg-pink-100 -z-10" />
              <img
                src={clinicImg}
                alt="Clinic"
                className="w-full max-w-md object-cover rounded-[120px_120px_120px_40px] border-[6px] border-pink-200 shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-pink-400 mb-2">What Drives Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Mission & Vision</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-pink-100 rounded-3xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center mb-5">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-500 leading-relaxed">
                Our mission at Srijan IVF Centre is to offer comprehensive, compassionate, and personalized fertility care. We strive to support and guide our patients through their fertility journey with the highest level of expertise and care. Our goal is to maximize your chances of successful pregnancy through individualized treatment plans and advanced medical techniques.
              </p>
            </div>
            <div className="bg-white border border-pink-100 rounded-3xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center mb-5">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-500 leading-relaxed">
                Our vision is to be recognized as the leading IVF and fertility clinic in India, known for our innovative treatments, exceptional patient care, and high success rates. We aim to continuously advance our knowledge and technology to provide cutting-edge solutions that make the dream of parenthood a reality for more families.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-pink-400 mb-2">What We Stand For</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <div key={i} className="flex gap-4 items-start bg-pink-50 border border-pink-100 rounded-2xl p-6 hover:shadow-md hover:border-pink-300 transition-all duration-200">
                <div className="w-10 h-10 rounded-xl bg-pink-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">{v.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <p className="text-xs font-semibold tracking-widest uppercase text-pink-400 mb-2">Meet the Team</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
          </div>
          <p className="text-gray-500 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            The success of Srijan IVF & Fertility Centre is driven by our team of highly skilled and experienced fertility specialists. Led by <span className="text-pink-600 font-semibold">Dr. Pallavi Singh</span>, a renowned IVF specialist in Delhi, our team includes top-tier embryologists, andrologists, nurses, and support staff dedicated to providing personalized care.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <p className="text-xs font-semibold tracking-widest uppercase text-pink-400 mb-2">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Comprehensive Fertility Services</h2>
          </div>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
            Srijan IVF & Fertility Centre offers a wide range of fertility treatments designed to address various reproductive challenges.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <div key={i} className="border border-pink-100 rounded-2xl p-6 hover:shadow-lg hover:border-pink-300 transition-all duration-200 group">
                <div className="w-10 h-10 rounded-xl bg-pink-50 group-hover:bg-pink-100 flex items-center justify-center mb-4 transition-colors duration-200">
                  <span className="text-pink-500 font-bold text-sm">0{i + 1}</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">{s.name}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-pink-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="bg-white border border-pink-100 rounded-3xl p-7 hover:shadow-lg transition-all duration-300">
            <div className="text-3xl mb-4">🏥</div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">State-of-the-Art Facilities</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Srijan IVF & Fertility Centre is equipped with advanced facilities designed to provide the highest level of care. Our cutting-edge embryology lab meets international standards, ensuring optimal conditions for embryo development and other fertility treatments. We adhere to strict quality control measures to ensure safety and effectiveness in all our procedures.
            </p>
          </div>
          <div className="bg-white border border-pink-100 rounded-3xl p-7 hover:shadow-lg transition-all duration-300">
            <div className="text-3xl mb-4">💬</div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Success Stories & Patient Testimonials</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              The success stories of our patients are a testament to the quality of care we provide. Many families have achieved their dreams of parenthood through our centre, and their testimonials highlight the positive impact of our services. Our high success rates and patient satisfaction underscore our commitment to excellence in fertility care.
            </p>
          </div>
          <div className="bg-white border border-pink-100 rounded-3xl p-7 hover:shadow-lg transition-all duration-300">
            <div className="text-3xl mb-4">🏆</div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Commitment to Excellence</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              At Srijan IVF & Fertility Centre, we are dedicated to maintaining the highest standards of excellence in all aspects of our care. We continually invest in the latest research, technology, and training to offer the most effective and innovative treatments available. Our commitment to excellence has made us a trusted name in fertility care in Delhi NCR and beyond.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-pink-400 mb-3">Our Purpose</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Aim</h2>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Our primary aim is to empower couples on their journey to parenthood. We achieve this by:
            </p>
            <ul className="flex flex-col gap-3">
              {aims.map((aim, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="text-gray-500 text-sm leading-relaxed">{aim}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-pink-600 rounded-3xl p-10 text-white flex flex-col gap-4">
            <p className="text-pink-200 text-sm font-semibold uppercase tracking-widest">Together</p>
            <h3 className="text-2xl md:text-3xl font-bold leading-snug">
              We aim to break down barriers and make the dream of parenthood a reality for more families in Delhi.
            </h3>
            <p className="text-pink-100 text-sm leading-relaxed mt-2">
              If you are considering fertility treatment, trust Srijan IVF & Fertility Centre to provide you with the best possible care. Contact us today to learn more about our services and take the first step towards realizing your dream of parenthood with India's No. 1 IVF centre.
            </p>
          </div>
        </div>
      </section>
      <Whyus />
      <Reviews />
      
      <WhatsAppButton />
      <Footer />

    </>
  );
};

export default AboutPage;