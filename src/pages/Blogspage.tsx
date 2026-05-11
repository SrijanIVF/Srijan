import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
//import Callus from "@/components/callbtn";
import WhatsAppButton from "@/components/WhatsAppButton";
import bannerImg from "@/assets/About-us-banner.jpg";
import { blogs } from "@/blogs";

// ─── To add a new blog: create a file in src/blogs/ and add it to src/blogs/index.ts ───

// const categoryColors: Record<BlogCategory, string> = {
//   IVF: "bg-pink-100 text-pink-600",
//   IUI: "bg-orange-100 text-orange-600",
//   Doctors: "bg-purple-100 text-purple-600",
//   "Women's Health": "bg-rose-100 text-rose-600",
//   "Male Infertility": "bg-blue-100 text-blue-600",
// };

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
          <p className="text-xs font-semibold tracking-[4px] uppercase text-pink-300 mb-3 md:mb-4">
            Knowledge & Insights
          </p>
          <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-3 md:mb-5">Our Blog</h1>
          <p className="text-sm md:text-lg text-white/80">
            Expert articles on fertility, IVF, and your path to parenthood.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col gap-10 md:gap-12">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="border border-gray-200 rounded-3xl overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="w-full bg-pink-50 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-auto block hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5 md:p-8">
                {/* <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[blog.category]
                      }`}
                  >
                    {blog.category}
                  </span>
                  <span className="text-xs text-gray-400">{blog.date}</span>
                </div> */}

                <h2 className="text-lg md:text-xl font-bold text-pink-600 mb-3 leading-snug">
                  {blog.title}
                </h2>

                <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">
                  {blog.intro}
                </p>

                <Link
                  to={`/blog/${blog.id}`}
                  className="inline-block bg-pink-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-pink-700 transition-colors duration-200"
                >
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default BlogsPage;