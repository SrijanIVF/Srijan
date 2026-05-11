import { useState } from "react";

import img1 from "@/assets/Test-1.jpg";
import img2 from "@/assets/test-2.jpg";
import img3 from "@/assets/test-3.jpg";
import img4 from "@/assets/test-4.jpg";

const videos = [
  {
    thumbnail: img1,
    video: "https://www.youtube.com/embed/zJ_VZNU0G_0",
  },
  {
    thumbnail: img2,
    video: "https://www.youtube.com/embed/LK6pz9ob5-g",
  },
  {
    thumbnail: img3,
    video: "https://www.youtube.com/embed/31JMiGgYN_w",
  },
  {
    thumbnail: img4,
    video: "https://www.youtube.com/embed/S5WvHdA83IQ",
  },
];

const Testimonials = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section
      id="testimonials"
      className="py-16 bg-[#ececec]"
    >
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

          {videos.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveVideo(item.video)}
              className="cursor-pointer bg-white border border-gray-300 shadow-md overflow-hidden"
            >
              <img
                src={item.thumbnail}
                alt="testimonial"
                className="w-full h-[200px] md:h-[250px] lg:h-[250px] object-contain bg-white"
              />
            </div>
          ))}

        </div>

        {activeVideo && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4">

            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-5 text-white text-5xl leading-none"
            >
              ×
            </button>

            <div className="w-full max-w-6xl">
              <iframe
                className="w-full aspect-video"
                src={`${activeVideo}?autoplay=1`}
                title="testimonial-video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default Testimonials;