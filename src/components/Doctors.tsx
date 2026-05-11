import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Building2,
  Star,
} from "lucide-react";

import doc1 from "@/assets/Dr.-Pallavisingh.webp";
import doc2 from "@/assets/Dr.-santosh.webp";

const doctors = [
  {
    img: doc1,
    name: "Dr. Pallavi Singh",
    exp: "23+ Years Experience",
    qualifications: "MBBS, DGO",
    hospital: "Delhi Fertility Centre",
    specializations: [
      "IVF",
      "IUI",
      "PCOS",
      "Male Infertility",
      "Female Infertility",
      "ICSI",
      "PICSI",
    ],
    treats: [
      "Failed IVF Cycles",
      "Adolescent Health",
      "Menopause",
      "High-Risk Pregnancy",
      "Semen Analysis",
    ],
    desc: "A Delhi-based infertility specialist empowering couples on their parenthood journey. Tackles complex cases with personalized care ensuring the well-being of both mother and child.",
  },
  {
    img: doc2,
    name: "Dr. Santosh Kumar Arjun",
    exp: "15+ Years Experience",
    qualifications: "MBBS, DNB (Radiodiagnosis)",
    hospital: "GB Pant Hospital & LBS Hospital",
    specializations: [
      "Radiodiagnosis",
      "Medical Imaging",
      "X-Ray",
      "CT Scan",
      "Ultrasound",
    ],
    treats: [
      "Complex Diagnoses",
      "Scan Interpretation",
      "Treatment Planning",
    ],
    desc: "A seasoned radiologist in Delhi with expertise in diagnosing and interpreting medical images, ensuring the highest quality patient care through meticulous analysis.",
  },
];

const Doctors = () => {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? doctors.length - 1 : c - 1));

  const next = () =>
    setCurrent((c) => (c === doctors.length - 1 ? 0 : c + 1));

  const d = doctors[current];

  return (
    <section id="doctors" className="py-16 sm:py-24 bg-pink-50">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600 text-center mb-10 sm:mb-16">
          Meet Our Doctors
        </h2>

        <div className="bg-white rounded-3xl sm:rounded-[40px] shadow-lg border border-pink-100 flex flex-col lg:flex-row overflow-hidden">
          <div className="lg:w-[38%] w-full h-[260px] sm:h-[320px] lg:h-auto bg-pink-100 overflow-hidden">
            <img
              src={d.img}
              alt={d.name}
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="flex-1 flex flex-col">
            <div className="px-4 sm:px-8 pt-5 sm:pt-8 pb-4 border-b border-pink-50">
              <p className="text-[10px] sm:text-xs font-semibold text-pink-400 uppercase tracking-widest mb-1">
                Our Specialist
              </p>

              <h3 className="text-lg sm:text-2xl font-bold text-gray-800">
                {d.name}
              </h3>

              <div className="flex flex-wrap gap-2 sm:gap-3 mt-2 sm:mt-3">
                <span className="bg-pink-50 border border-pink-200 text-pink-600 text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full">
                  ⭐ {d.exp}
                </span>

                <span className="bg-purple-50 border border-purple-100 text-purple-600 text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                  <GraduationCap className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  {d.qualifications}
                </span>
              </div>
            </div>

            <div className="px-4 sm:px-8 py-4 sm:py-5 flex flex-col gap-4 sm:gap-5">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-pink-50 flex items-center justify-center rounded-lg shrink-0">
                  <Building2 className="w-4 h-4 text-pink-500" />
                </div>

                <div>
                  <p className="text-[10px] sm:text-xs text-gray-400">
                    Hospital
                  </p>

                  <p className="text-sm font-semibold text-gray-700">
                    {d.hospital}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-pink-50 flex items-center justify-center rounded-lg shrink-0">
                  <Star className="w-4 h-4 text-pink-500" />
                </div>

                <p className="text-sm text-gray-500 leading-relaxed">
                  {d.desc}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-400 mb-2">
                  Specializations
                </p>

                <div className="flex flex-wrap gap-2">
                  {d.specializations.map((s, i) => (
                    <span
                      key={i}
                      className="bg-pink-50 text-pink-700 text-[11px] px-2.5 py-1 rounded-full border border-pink-100"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-400 mb-2">
                  Also Treats
                </p>

                <div className="flex flex-wrap gap-2">
                  {d.treats.map((t, i) => (
                    <span
                      key={i}
                      className="bg-rose-50 text-rose-600 text-[11px] px-2.5 py-1 rounded-full border border-rose-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10">
          <button
            type="button"
            title="Previous Doctor"
            aria-label="Previous Doctor"
            onClick={prev}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-pink-300 flex items-center justify-center text-pink-600 hover:bg-pink-100 transition"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div className="flex gap-2">
            {doctors.map((doctor, i) => (
              <button
                key={i}
                type="button"
                title={`Go to ${doctor.name}`}
                aria-label={`Go to ${doctor.name}`}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${
                  i === current
                    ? "w-6 sm:w-8 bg-pink-600"
                    : "w-2 bg-pink-200"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            title="Next Doctor"
            aria-label="Next Doctor"
            onClick={next}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-pink-300 flex items-center justify-center text-pink-600 hover:bg-pink-100 transition"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Doctors;