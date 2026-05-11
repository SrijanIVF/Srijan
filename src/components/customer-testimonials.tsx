import { useEffect, useState, useRef } from "react";

import nehaSharma from "@/assets/Neha-Sharma.webp";
import rituSaw from "@/assets/Ritu-Saw.webp";
import rituDhillon from "@/assets/Ritu-Dhillon.webp";
import mohammadYaseen from "@/assets/Mohammad-Yaseen.webp";
import priyankaMaurya from "@/assets/Priyanka-Maurya.webp";
import krishanKumar from "@/assets/Krishan-Kumar.webp";

const reviews = [
  { image: nehaSharma, initials: "NS", name: "Neha Sharma", city: "Ghaziabad", text: "Dr. Pallavi Singh is an excellent doctor I have ever met. She has magic in her hands. She listens patiently and satisfies every query. I got pregnant and I am enjoying my pregnancy because of her. Her staff is also very cooperative and caring." },
  { image: rituSaw, initials: "RS", name: "Ritu Saw", city: "Delhi", text: "Dr. Pallavi is the best infertility specialist I ever met. She takes great care during pregnancy and is very soft spoken. It is rare to find a doctor with such personal care and outstanding medical quality. Staff members are also very supportive." },
  { image: rituDhillon, initials: "RD", name: "Ritu Dhillon", city: "Gurugram", text: "I am very thankful to Dr. Pallavi Singh and all the staff. Everyone is generous, helpful and friendly. The doctor is excellent in her field and we received the best treatment and guidance throughout the journey." },
  { image: mohammadYaseen, initials: "MY", name: "Mohammad Yaseen", city: "Noida", text: "We came here for infertility treatment after failing at many places. Everyone suggested IVF but we got success in the first attempt only with medicines. Thank you so much for bringing happiness into our life." },
  { image: priyankaMaurya, initials: "PM", name: "Priyanka Maurya", city: "Delhi", text: "I have no words to express my gratitude towards Dr. Pallavi. After years of depression and failed treatments elsewhere, she gave me hope and confidence. Even with low AMH, she made the impossible possible in the first attempt." },
  { image: krishanKumar, initials: "KK", name: "Krishan Kumar", city: "Meerut", text: "After 3 failed IVF attempts at other centres, my wife conceived twins in the very first attempt at Srijan Fertility Centre. We are forever grateful for the care and support provided by the entire team." },
];

const DURATION = 4000;

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const autoRef = useRef(null);
  const progRef = useRef(null);
  const pausedRef = useRef(false);

  const resetProgress = (isPaused = false) => {
    clearInterval(progRef.current);
    setProgress(0);
    if (isPaused) return;
    const step = 100 / (DURATION / 100);
    let val = 0;
    progRef.current = setInterval(() => {
      val = Math.min(100, val + step);
      setProgress(Math.round(val));
    }, 100);
  };

  const startAuto = () => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      if (!pausedRef.current) {
        setActive((prev) => (prev + 1) % reviews.length);
        resetProgress();
      }
    }, DURATION);
  };

  const goTo = (idx) => {
    clearInterval(autoRef.current);
    setActive(((idx % reviews.length) + reviews.length) % reviews.length);
    resetProgress(pausedRef.current);
    startAuto();
  };

  useEffect(() => {
    pausedRef.current = paused;
    if (paused) {
      clearInterval(autoRef.current);
      clearInterval(progRef.current);
    } else {
      resetProgress();
      startAuto();
    }
  }, [paused]);

  useEffect(() => {
    resetProgress();
    startAuto();
    return () => {
      clearInterval(autoRef.current);
      clearInterval(progRef.current);
    };
  }, []);

  const review = reviews[active];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">

        <h4 className="text-center text-4xl md:text-5xl font-bold text-[#df5f8d] mb-2">
          Customer Testimonials
        </h4>
        <p className="text-center text-gray-500 text-base mb-8">
          Real stories from real families
        </p>

        {/* Progress bar */}
        {/* <div className="w-full h-[3px] bg-pink-200 rounded-full overflow-hidden mb-5">
          <div
            className="h-full bg-[#df5f8d] rounded-full"
            style={{ width: `${progress}%`, transition: "width 0.12s linear" }}
          />
        </div> */}

        <div
          className="bg-[#f3edf1] rounded-[40px] px-6 md:px-20 py-10 relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {reviews.map((r, i) => (
            <div
              key={i}
              className={`transition-all duration-500 ${
                i === active
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2 absolute inset-0 pointer-events-none"
              }`}
            >
              <div className="flex justify-center mb-5">
                <div
                  className={`w-[88px] h-[88px] rounded-full overflow-hidden border-[3px] transition-colors duration-300 ${
                    paused ? "border-[#df5f8d]" : "border-pink-200"
                  } bg-pink-50 flex items-center justify-center`}
                >
                  <img
                    src={r.image}
                    alt={r.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      (e.currentTarget.nextSibling as HTMLElement).style.display = "block";
                    }}
                  />
                  <span className="text-[22px] font-medium text-[#993556] hidden">
                    {r.initials}
                  </span>
                </div>
              </div>

              <h3 className="text-center text-lg font-medium text-[#df5f8d]">
                {r.name}
              </h3>
              <p className="text-center text-sm text-gray-500 mt-1 mb-3">
                {r.city}
              </p>
              <p className="text-center text-[#df5f8d] tracking-widest text-sm mb-5">
                ★★★★★
              </p>

              <div className="relative max-w-4xl mx-auto px-8">
                <span className="absolute top-[-10px] left-0 text-[52px] leading-none text-pink-200 font-serif" aria-hidden="true">
                  "
                </span>
                <p className="text-center text-gray-600 text-base md:text-lg leading-relaxed">
                  {r.text}
                </p>
                <span className="absolute bottom-[-28px] right-0 text-[52px] leading-none text-pink-200 font-serif" aria-hidden="true">
                  "
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8 items-center">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? "w-7 bg-[#df5f8d]" : "w-2 bg-pink-200"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;