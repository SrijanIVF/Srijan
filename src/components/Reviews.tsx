import { useEffect, useRef } from "react";

const reviews = [
  {
    name: "Himanshu Sharma",
    time: "1 year ago",
    text: "Dr. Pallavi is best doctor and treatment is good also staff is very supportive.",
  },
  {
    name: "Mohd Aasim",
    time: "1 year ago",
    text: "Very good doctor and clinic. Highly recommended.",
  },
  {
    name: "Pooja Kumari",
    time: "1 year ago",
    text: "I conceived after 3.5 years of marriage because of Dr Pallavi.",
  },
  {
    name: "Anand Pandey",
    time: "1 year ago",
    text: "Excellent services and well behaved staff. Best in business.",
  },
  {
    name: "Ritika Singh",
    time: "2 years ago",
    text: "Very professional doctors and smooth process.",
  },
  {
    name: "Rahul Verma",
    time: "8 months ago",
    text: "Best IVF centre. Staff is very helpful and kind.",
  },
];

const avatarColors = [
  "bg-[#4285F4]",
  "bg-[#EA4335]",
  "bg-[#34A853]",
  "bg-[#FBBC04]",
];

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#FBBC04">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const Testimonials = () => {
  const scrollRef = useRef(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    let scrollAmount = 0;
    const interval = setInterval(() => {
      if (pausedRef.current) return;
      scrollAmount += 0.5;
      if (scrollAmount >= container.scrollWidth / 2) scrollAmount = 0;
      container.scrollLeft = scrollAmount;
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">

        <h2 className="text-center text-4xl font-semibold text-pink-500 mb-2">
          What Our Patients Say
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">Reviews from Google</p>

        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="text-5xl font-medium text-gray-800">4.9</span>
          <div className="flex flex-col gap-1">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
            </div>
            <span className="text-xs text-gray-500">Based on 6 reviews</span>
          </div>
        </div>

        <hr className="mb-6 border-gray-200" />

        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto"
          style={{ scrollbarWidth: "none" }}
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
          {[...reviews, ...reviews].map((r, i) => (
            <div
              key={i}
              className="min-w-[280px] max-w-[280px] bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex-shrink-0"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <div
                  className={`h-9 w-9 rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0 ${
                    avatarColors[i % avatarColors.length]
                  }`}
                >
                  {r.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800 truncate">{r.name}</p>
                  <p className="text-xs text-gray-400">{r.time}</p>
                </div>
                <GoogleIcon />
              </div>

              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, j) => <StarIcon key={j} />)}
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-1.5 mt-5 text-xs text-gray-400">
          <GoogleIcon />
          <span>Powered by Google Reviews</span>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;