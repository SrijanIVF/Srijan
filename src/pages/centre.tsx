import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
//import Callus from "@/components/callbtn";
import WhatsAppButton from "@/components/WhatsAppButton";
import bannerImg from "@/assets/About-us-banner.jpg";
import centreImg from "@/assets/our_center.webp";

const whyChoose = [
  {
    title: "Success You Can Trust:",
    desc: "We boast high success rates, giving you peace of mind and confidence throughout your treatment.",
  },
  {
    title: "Personalized Care Plans:",
    desc: "Our experienced fertility specialists tailor treatment plans to your unique needs and medical history, maximizing your chances of success.",
  },
  {
    title: "Advanced Technologies:",
    desc: "We leverage cutting-edge technology to ensure the most effective and up-to-date treatment options are available to you.",
  },
  {
    title: "Affordable Solutions:",
    desc: "We understand the financial burden of fertility treatment. We offer transparent pricing and explore various financing options to make your journey more accessible.",
  },
];

const centres = [
  {
    city: "Delhi",
    address:
      "Mayur Vihar Phase 2 – Shop No.2, Khasra No. 585, Kalyan Vyas, 202/1, Khichripur Rd, Mayur Vihar Phase I, Kalyanvas, Kalyan Puri, Delhi, 110091",
    phone: "+91-97117 48080",
    email: "info@srijanivfcentre.com",
  },
  {
    city: "Indirapuram",
    address:
      "Plot Number – 7, Abhay Khand 1, Indirapuram, Ghaziabad, Uttar Pradesh 201014",
    phone: "+91-97117 48080",
    email: "info@srijanivfcentre.com",
  },
  {
    city: "Varanasi",
    address:
      "Heiwel Hospital, National Highway 56, Airport Road, near Sant Atulanand, Gilat Bazar, Chotta Chuppepur, Varanasi, Uttar Pradesh 221002.",
    phone: "+91-97117 48080",
    email: "info@srijanivfcentre.com",
  },
  {
    city: "Srinagar",
    address:
      "The Kidney and Urological Diseases Research Centre, Sonwar Bagh, opposite Amar Singh Club, Srinagar 190001.",
    phone: "+91-97117 48080",
    email: "info@srijanivfcentre.com",
  },
];

const OurCentrePage = () => {
  return (
    <>
      <Navbar />

      <section className="relative w-full h-[50vh] md:h-[65vh] flex items-center justify-center text-center">
        <img
          src={bannerImg}
          alt="Our Centre"
          className="absolute inset-0 w-full h-full object-cover brightness-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/40 to-black/50" />
        <div className="relative z-10 text-white px-4 max-w-3xl mx-auto">
          <p className="text-xs font-semibold tracking-[4px] uppercase text-pink-300 mb-3 md:mb-4">
            Welcome to Srijan IVF Centre
          </p>
          <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-3 md:mb-5">
            Our Centre
          </h1>
          <p className="text-sm md:text-lg text-white/80">
            Advanced fertility care with compassion — helping you build the family you dream of.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-2xl md:text-3xl font-bold text-pink-600 mb-3">
            Srijan IVF: Your Trusted Partner for Fertility in Delhi
          </h2>
          <div className="w-14 h-1 bg-pink-500 rounded-full mx-auto mb-6" />

          <p className="text-gray-500 leading-relaxed text-sm md:text-base mb-4">
            Delhi couples seeking to build their families, find hope at Srijan IVF. We are a leading fertility clinic offering advanced procedures like IVF, IUI, ICSI, Laparoscopy, Hysteroscopy, TESA/PESA, and various other treatment options tailored to your individual needs.
          </p>

          <p className="text-gray-500 leading-relaxed text-sm md:text-base">
            Our experienced and compassionate team of fertility specialists guides you through personalized treatment plans, maximizing your chances of achieving a successful pregnancy. Schedule a free consultation today and turn your dream of parenthood into a beautiful reality.
          </p>

        </div>
      </section>


      <section className="py-12 md:py-20 px-4 md:px-6 bg-pink-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          <div className="flex-1">

            <h3 className="text-xl md:text-2xl font-bold text-pink-600 mb-4">
              Why Choose Srijan IVF for Your Fertility Journey?
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              At Srijan IVF, we understand the emotional and physical challenges of infertility. We're dedicated to providing compassionate care and advanced treatments to help you achieve your dream of parenthood.
            </p>

            <ul className="flex flex-col gap-4 mb-6">
              {whyChoose.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gray-500 shrink-0 mt-1.5" />
                  <p className="text-gray-600 text-sm leading-relaxed">
                    <span className="font-bold text-gray-800">{item.title}</span>{" "}
                    {item.desc}
                  </p>
                </li>
              ))}
            </ul>

            <p className="text-gray-500 text-sm leading-relaxed">
              Srijan IVF isn't just a fertility clinic; we're your trusted partner on your path to parenthood.
            </p>
          </div>

          <div className="flex-shrink-0 flex justify-center w-full md:w-1/2">
            <img
              src={centreImg}
              alt="Fertility Care Illustration"
              className="w-full max-w-[420px] md:max-w-[520px] object-contain"
            />
          </div>

        </div>
      </section>
      <Reviews />
      <section className="py-12 md:py-20 px-4 md:px-6 bg-pink-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-pink-600 text-center mb-10 md:mb-12">
            Our Fertility Centres in Delhi NCR
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {centres.map((centre, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-200"
              >
                <div className="mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-pink-400"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.083 3.997-5.223 3.997-9.327 0-4.947-4.03-8.956-9-8.956s-9 4.009-9 8.956c0 4.104 2.053 7.244 3.997 9.327a19.58 19.58 0 002.683 2.282 16.975 16.975 0 001.144.742zM12 13.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3">{centre.city}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{centre.address}</p>
                <a
                  href={`tel:${centre.phone}`}
                  className="text-pink-500 font-semibold text-sm hover:text-pink-700 transition-colors duration-200 mb-1"
                >
                  {centre.phone}
                </a>
                <a
                  href={`mailto:${centre.email}`}
                  className="text-pink-500 font-semibold text-sm hover:text-pink-700 transition-colors duration-200"
                >
                  {centre.email}
                </a>
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

export default OurCentrePage;