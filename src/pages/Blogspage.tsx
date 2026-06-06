import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import bannerImg from "@/assets/About-us-banner.jpg";
import { blogs } from "@/blogs";
import LeadPopup from "@/components/LeadPopup";

const BlogsPage = () => {
  return (
    <>
      <Navbar />

      <section className="relative w-full h-[50vh] md:h-[65vh] flex items-center justify-center text-center">
        <img
          src={bannerImg}
          alt="Blogs"
          className="absolute inset-0 w-full h-full object-cover brightness-40"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/40 to-black/50" />

        <div className="relative z-10 text-white px-4 max-w-3xl mx-auto">
          <p className="text-xs md:text-sm font-semibold tracking-[4px] uppercase text-pink-300 mb-3">
            Knowledge & Insights
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Our Blog
          </h1>

          <p className="text-sm md:text-lg text-white/80">
            Expert articles on fertility, IVF, and your path to parenthood.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="group bg-[#f3e2d0] rounded-[22px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <Link
                  to={`/blogs/${blog.id}`}
                  className="block"
                >
                  <div className="h-[200px] bg-[#f8f3ed] flex items-center justify-center overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </Link>

                <div className="p-5">

                  <Link to={`/blogs/${blog.id}`}>
                    <h2 className="text-[20px] md:text-[22px] font-bold text-gray-900 leading-tight line-clamp-2 hover:text-pink-600 transition-colors">
                      {blog.title}
                    </h2>
                  </Link>

                  <p className="mt-3 text-gray-600 text-[15px] leading-relaxed line-clamp-2">
                    {blog.intro}
                  </p>

                  <Link
                    to={`/blogs/${blog.id}`}
                    className="mt-5 inline-flex items-center gap-2 text-pink-600 font-semibold hover:text-pink-700 transition-colors"
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>

                </div>
              </article>
            ))}

          </div>

        </div>
      </section>

      <WhatsAppButton />
      <LeadPopup />
      <Footer />
    </>
  );
};

export default BlogsPage;