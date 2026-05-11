import React from "react";
import { Link } from "react-router-dom";

const videos = [
  {
    id: "1",
    url: "https://www.youtube.com/embed/zJ_VZNU0G_0",
  },
  {
    id: "2",
    url: "https://www.youtube.com/embed/LK6pz9ob5-g",
  },
  {
    id: "3",
    url: "https://www.youtube.com/embed/31JMiGgYN_w",
  },
  {
    id: "4",
    url: "https://www.youtube.com/embed/7xCdY3mbOtQ",
  },
  {
    id: "5",
    url: "https://www.youtube.com/embed/S5WvHdA83IQ",
  },
  {
    id: "6",
    url: "https://www.youtube.com/embed/Pp5Jo_1hnWQ",
  },
];

const SuccessStories = () => {
  return (
    <section className="py-16 md:py-24 bg-[#f5f5f5]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-pink-600 leading-tight">
            Our Patient’s Real Success Stories
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Hear directly from our happy patients who achieved their dream of
            parenthood with Srijan IVF & Fertility Centre.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-pink-100"
            >
              <div className="relative w-full aspect-video">
                <iframe
                  src={video.url}
                  title={`Success Story ${video.id}`}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            to="/success-stories-testimonials"
            className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          >
            View More Success Stories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;