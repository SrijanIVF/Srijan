import { useState } from "react";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
//import Callus from "@/components/callbtn";
import WhatsAppButton from "@/components/WhatsAppButton";
import bannerImg from "@/assets/About-us-banner.jpg";
import doctorImg from "@/assets/Dr.-santosh.webp";
import radiologistImg from "@/assets/Radiologist.webp";
import pregnancyImg from "@/assets/Pregnancy.webp";
import gynecologyImg from "@/assets/Gynecology-2.webp";

const pregnancyServices = [
  "Early pregnancy scan",
  "NT Scan",
  "Anomaly Scan",
  "Fetal echo Scan",
  "Interval growth Scan",
  "BPP Scan",
];

const gynecologyServices = [
  "Pelvic Scan",
  "Follicular Scan",
  "Pediatric:",
  "Abdominal Scan",
  "Hip scan",
  "Cranium scan",
  "Kub Scan",
  "2D echocardiography",
];

const faqs = [
  {
    q: "1. What is Radiology?",
    a: "Radiology is a significant type of medical disciple. It utilises the process of medical imaging in diagnosing issues. On Srijan IVF, expecting mothers, new mothers, and the entire women population will find the best Radiology services along with the best Radiologists in New Delhi. On Srijan IVF, we also ensure absolutely safe practices of Radiology to ensure least to no exposure in any imaging examination to the mother or the child, also, if the diagnosis is for pediatric or gynecological purposes, Srijan IVF is spot-on based on which our specialists provide the best solutions to our customers.",
  },
  {
    q: "2. What are the Radiology service provided on Srijan IVF?",
    a: "Radiology tests and services provided on Srijan IVF are: Pregnancy: Early pregnancy scan, NT Scan, Anomaly Scan, Fetal echo Scan, Interval growth Scan, BPP Scan. Gynecology: Pelvic Scan, Follicular Scan. Pediatric: Abdominal Scan, Hip scan, Cranium scan. Kub Scan, 2D echocardiography.",
  },
  {
    q: "3. What is the role of a Radiologist on Srijan IVF?",
    a: "The role of a Radiologist is crucial as they help diagnose issues in women, children or check the state of the unborn child in the various trimesters utilising the procedures of medical imaging such as Ultrasound, mammography, x-ray exams, computed tomography (CT) exams, positron emission tomography (PET) exams, ultrasound exams, and some more. On Srijan IVF, mothers or would-be-mothers will be offered several kinds of high-quality services of imaging which include X-rays, CT, Nuclear medicine, Ultrasound during pregnancy or for gynecological issues for women in the city of New Delhi.",
  },
  {
    q: "4. What are the most common reasons to visit and consult a Radiologist?",
    a: "A couple in general visits a Radiologist when that is recommended by their doctor. The physicians who refer the patients to visit a Radiologist can be a general primary care doctor or an orthopedist. People also visit a Radiologist when they need an x-ray test, or a CT scan or PET scan, etc. On Srijan IVF in New Delhi, we have the top Radiologists from the country who are regarded well experienced and most trusted. Srijan IVF offers safe Radiology performances to make sure that you and your baby are safe.",
  },
  {
    q: "5. What kinds of tests fall under Radiology?",
    a: "There are several distinct kinds of tests like foetal scans and more that fall under Radiology. They are evaluated as follows: X-ray exams which are utilised in getting a closer and better look at the bones, cavities, etc. CT exams help in providing a cross-sectional image of the body. Some other important exams under Radiology include ultrasound, nuclear medicine, MRI, etc. On Srijan IVF in the city of New Delhi, new moms or would-be-moms will be provided with all of the above Radiology exams which are performed with utmost safety.",
  },
  {
    q: "6. How long does the process of the x-ray exam take?",
    a: "X-ray exams are one of the most common Radiology tests that have been around for a long period of time now. Different kinds of x-rays take a different amount of time. For example, a full chest x-ray will take about fifteen minutes approximately. On Srijan IVF, you will get the country’s best x-ray services for the mother and child in New Delhi. On Srijan IVF, the safety of the mother and her baby always comes first.",
  },
  {
    q: "7. Are there risk factors associated with having routine x-ray exams?",
    a: "X-rays utilise very little amounts of radiation to ultimately compose images of a human body. The amount of radiation exposure can be considered safe for adults mostly, however, it is not safe for a developing baby. Srijan IVF, in the city of New Delhi, has the country’s safest and most trusted Radiology department and its primary focus lies on the safety of its patients. Thus, on Srijan IVF we use the best and safest equipment and processes for any kind of Radiology test for the safety of the mother and the child.",
  },
  {
    q: "8. What is a radiologic technologist?",
    a: "Radiologic technologists are healthcare professionals who are specialised in the process of imaging the entire human anatomy to diagnose and treat pathology. They are also known as x-ray technicians. They work in both public and private healthcare centers. On Srijan IVF, would-be-moms or new moms will find the most experienced radiologic technologists to provide them with the safest radiological services and Mothercare experience in the city of New Delhi.",
  },
  {
    q: "9. What is a CT scan?",
    a: "CT scan or computerized tomography includes a list of x-ray pictures that are captured from various angles all-around a human body and utilises computer p[rocessing in creating cross-sectional pictures of the bones, soft tissues, blood vessels, etc within the human body. It provides better information in comparison to x-rays. On Srijan IVF, we have the best pieces of equipment for the process of CT scan in the city of New Delhi which are safe for the mother and her child as on Srijan IVF the safety of mother and child always come first.",
  },
  {
    q: "10. What is an ultrasound scan?",
    a: "Ultrasound is a technique of diagnostic imaging. It is also known as diagnostic sonography at some places. It is used to compose an image of internal human body structures. For example structures like body muscles, blood vessels, tendons, and several internal organs of a human body. The process to examine a pregnant woman with the help of ultrasound is termed obstetric ultrasound. Srijan IVF New Delhi has the most advanced ultrasound equipment for would-be- mothers.",
  },
];

const achievements = [
  { number: "15+", label: "Years Experience" },
  { number: "GB Pant", label: "Hospital Trained" },
  { number: "LBS", label: "Hospital Trained" },
  { number: "100%", label: "Safe Practices" },
];

const DrSantoshPage = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <Navbar />
      <section className="relative w-full h-[50vh] md:h-[65vh] flex items-center justify-center text-center">
        <img src={bannerImg} alt="Dr. Santosh Kumar Arjun" className="absolute inset-0 w-full h-full object-cover brightness-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/40 to-black/50" />
        <div className="relative z-10 text-white px-4 max-w-3xl mx-auto">
          <p className="text-xs font-semibold tracking-[4px] uppercase text-pink-300 mb-3 md:mb-4">Meet Our Expert</p>
          <h1 className="text-2xl md:text-6xl font-bold leading-tight mb-3 md:mb-5">
            Dr. Santosh Kumar Arjun<br />
            <span className="text-pink-300 text-lg md:text-4xl font-semibold">Radiologist — MBBS, DNB</span>
          </h1>
          <p className="text-sm md:text-lg text-white/80">
            15+ years of expertise in diagnostic radiology and fetal imaging services in New Delhi.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-20 px-4 md:px-6 bg-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white border border-pink-100 rounded-3xl p-6 md:p-12 flex flex-col md:flex-row gap-8 md:gap-10 items-center shadow-sm">
            {/* Doctor Image */}
            <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
              <div className="relative">
                <div className="absolute inset-0 rounded-[60%_40%_60%_40%] bg-pink-200 scale-110 -z-10 opacity-60" />
                <img
                  src={doctorImg}
                  alt="Dr. Santosh Kumar Arjun"
                  className="w-44 h-52 md:w-64 md:h-72 object-cover object-top rounded-[60%_40%_60%_40%] border-[5px] border-white shadow-xl"
                />
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-2xl md:text-4xl font-bold text-pink-600 mb-2 text-center md:text-left">Dr. Santosh Kumar Arjun</h2>
              <div className="w-14 h-1 bg-pink-500 rounded-full mb-5 mx-auto md:mx-0" />

              <div className="flex flex-col gap-2 mb-5">
                <p className="text-sm">
                  <span className="text-pink-600 font-bold">Speciality : </span>
                  <span className="text-pink-500 font-semibold">Radiologist</span>
                </p>
                <p className="text-sm">
                  <span className="text-pink-600 font-bold">Experience : </span>
                  <span className="text-pink-500 font-semibold">15+ years</span>
                </p>
                <p className="text-sm">
                  <span className="text-pink-600 font-bold">Qualification : </span>
                  <span className="text-pink-500 font-semibold">MBBS, DNB (RADIODIAGNOSIS) Radiologist</span>
                </p>
              </div>

              <p className="text-gray-500 leading-relaxed text-sm mb-4">
                Dr. Santosh Kumar Arjun, a seasoned radiologist in Delhi, offers over 15 years of experience and expertise in diagnosing and interpreting medical images. Holding qualifications in MBBS and DNB (Radiodiagnosis), Dr. Arjun leverages his impressive background at esteemed institutions like GB Pant Hospital and LBS Hospital to ensure the highest quality patient care.
              </p>
              <p className="text-gray-500 leading-relaxed text-sm">
                Through his meticulous analysis of scans and X-rays, Dr. Arjun plays a vital role in pinpointing medical concerns and guiding effective treatment plans. His dedication to precision and patient well-being makes him a valuable asset in the field of radiology.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-pink-600 py-8 md:py-10 px-4 md:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {achievements.map((a, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl md:text-4xl font-bold text-white mb-1">{a.number}</p>
              <p className="text-pink-200 text-xs md:text-sm font-medium">{a.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-14 items-center">
          <div className="flex-1 order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-bold text-pink-600 mb-2 leading-snug">
              Best Radiologist and Best Fetal Imaging Services In New Delhi
            </h2>
            <div className="w-14 h-1 bg-pink-500 rounded-full mb-5" />
            <p className="text-gray-500 leading-relaxed text-sm">
              Bringing a baby into the world is a joyous experience, but pregnancy concerns can sometimes overshadow this happiness. Monitoring your baby's growth with fetal imaging is essential for prenatal care. If you're expecting in New Delhi, Srijan IVF offers comprehensive care for both mother and baby. Enjoy every moment of your pregnancy while we provide top-notch medical support with our leading radiology center and fetal medicine specialists. Rest assured, Srijan IVF is here to ensure you and your baby receive the best possible care.
            </p>
          </div>
          <div className="flex-shrink-0 flex justify-center order-1 md:order-2">
            <img
              src={radiologistImg}
              alt="Radiologist with patient"
              className="w-80 md:w-[500px]"
            />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 md:px-8 bg-pink-100 mx-2 md:mx-6 rounded-3xl mb-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-3xl font-bold text-pink-600 mb-2">
            Top Radiology Services provided on Srijan IVF New Delhi
          </h2>
          <div className="w-14 h-1 bg-pink-500 rounded-full mb-10" />

          <div className="hidden md:grid grid-cols-[1fr_1fr_1fr_1fr] gap-0 items-start">
            <div className="flex justify-center items-end pt-4">
              <img src={pregnancyImg} alt="Pregnancy" className="w-72 md:w-[350px] object-contain" />
            </div>
            <div className="px-4 pt-4">
              <h3 className="text-2xl font-bold text-pink-600 mb-2">Pregnancy</h3>
              <div className="w-10 h-0.5 bg-pink-500 rounded-full mb-5" />
              <ul className="flex flex-col gap-3">
                {pregnancyServices.map((s, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />{s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center items-end pt-4">
              <img src={gynecologyImg} alt="Gynecology" className="w-64 md:w-[320px] object-contain" />
            </div>
            <div className="px-4 pt-4">
              <h3 className="text-2xl font-bold text-pink-600 mb-2">Gynecology</h3>
              <div className="w-10 h-0.5 bg-pink-500 rounded-full mb-5" />
              <ul className="flex flex-col gap-3">
                {gynecologyServices.map((s, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />{s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-8 md:hidden">
            <div className="flex flex-col items-center gap-4">
              <img src={pregnancyImg} alt="Pregnancy" className="w-48 object-contain" />
              <div className="w-full">
                <h3 className="text-xl font-bold text-pink-600 mb-2">Pregnancy</h3>
                <div className="w-10 h-0.5 bg-pink-500 rounded-full mb-4" />
                <ul className="flex flex-col gap-2">
                  {pregnancyServices.map((s, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />{s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <img src={gynecologyImg} alt="Gynecology" className="w-40 object-contain" />
              <div className="w-full">
                <h3 className="text-xl font-bold text-pink-600 mb-2">Gynecology</h3>
                <div className="w-10 h-0.5 bg-pink-500 rounded-full mb-4" />
                <ul className="flex flex-col gap-2">
                  {gynecologyServices.map((s, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />{s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Reviews />
      <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-pink-600 mb-2">FAQs</h2>
          <div className="w-14 h-1 bg-pink-500 rounded-full mb-8" />

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between px-4 md:px-6 py-4 bg-gray-50 hover:bg-pink-50 transition-colors duration-200 text-left"
                >
                  <span className="text-pink-600 font-semibold text-sm md:text-base pr-3">{faq.q}</span>
                  <span className="text-pink-500 font-bold text-xl shrink-0">
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-4 md:px-6 py-5 bg-white border-t border-gray-100">
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
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

export default DrSantoshPage;