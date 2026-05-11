import { useState } from "react";
import { Sparkles, HeartPulse, Baby } from "lucide-react";

const treatmentCategories = [
  {
    title: "IVF & Infertility",
    icon: Sparkles,
    items: [
      "IVF",
      "IUI",
      "ICSI",
      "Hysteroscopy",
      "Male Infertility",
      "TESA/PESA",
      "PICSI",
      "LAH",
      "ERA",
      "Semen Analysis",
      "Blastocyst Culture",
    ],
  },
  {
    title: "Gynecology",
    icon: HeartPulse,
    items: [
      "Laparoscopic Gynecology",
      "General Gynecology",
      "Robotic Gynecology",
      "Adolescent Care",
      "Menopause",
      "PCOS",
      "Endometriosis",
    ],
  },
  {
    title: "Obstetrics",
    icon: Baby,
    items: [
      "Caesarean Section",
      "High-Risk Pregnancy",
      "Low-Risk Pregnancy",
      "Normal Delivery",
    ],
  },
];

const Treatments = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold">
            Our <span className="text-pink-500 not-italic">Treatments</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-500">
            Personalized care designed for your journey to parenthood.
          </p>
        </div>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {treatmentCategories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                onClick={() => setActive(index)}
                className={`cursor-pointer group p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border text-center transition-all duration-300
                ${
                  active === index
                    ? "bg-pink-500 text-white shadow-xl scale-[1.02]"
                    : "bg-white hover:bg-pink-500 hover:text-white hover:shadow-lg"
                }`}
              >
                <div className="mx-auto mb-3 sm:mb-4 h-12 w-12 sm:h-14 sm:w-14 rounded-xl sm:rounded-2xl bg-pink-100 group-hover:bg-white/20 flex items-center justify-center transition">
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-pink-500 group-hover:text-white" />
                </div>

                <h3 className="text-base sm:text-lg lg:text-xl font-semibold">
                  {cat.title}
                </h3>
              </div>
            );
          })}
        </div>

        <div className="mt-12 sm:mt-16 p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-white shadow-lg border">
          <h3 className="text-lg sm:text-2xl font-semibold mb-6 sm:mb-8 text-pink-500 text-center">
            {treatmentCategories[active].title}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-6">
            {treatmentCategories[active].items.map((item) => (
              <div
                key={item}
                className="group p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border bg-white hover:bg-pink-500 hover:text-white hover:shadow-md transition-all"
              >
                <p className="text-sm sm:text-base font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Treatments;