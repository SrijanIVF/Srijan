import {
  HeartPulse,
  IndianRupee,
  BadgeCheck,
  Stethoscope,
  ScanLine,
  CreditCard,
} from "lucide-react";
import benefitsImg from "@/assets/banefits-newV8.webp";

const benefits = [
  { icon: HeartPulse, title: "Expert Care" },
  { icon: IndianRupee, title: "Affordable Solutions" },
  { icon: BadgeCheck, title: "Affordable IVF Packages" },
  { icon: Stethoscope, title: "Free Doctor Consultation" },
  { icon: CreditCard, title: "0% EMI Options" },
  { icon: ScanLine, title: "Free Ultrasound & TVS Scan" },
];

const Benefits = () => {
  return (
    <section className="py-16 sm:py-20 bg-pink-50">
      <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-6xl">

        <div className="flex justify-center relative order-1 lg:order-none">
          <img
            src={benefitsImg}
            alt="Benefits"
            className="w-full max-w-[260px] sm:max-w-[320px] md:max-w-[380px] object-cover rounded-[120px_120px_120px_40px] border-[6px] sm:border-[7px] border-pink-200"
          />

          <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-6 bg-pink-600 text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-full shadow-md">
            Trusted by 10,000+ Families
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 order-2 lg:order-none">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-pink-100 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 flex items-center gap-3 sm:gap-4 hover:shadow-lg hover:shadow-pink-100 hover:border-pink-300 transition-all duration-200"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-pink-50 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600" />
              </div>

              <span className="text-sm sm:text-base font-semibold text-pink-900 leading-snug">
                {item.title}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Benefits;