import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
//import Callus from "@/components/callbtn";
import WhatsAppButton from "@/components/WhatsAppButton";
import { blogs } from "@/blogs";
import { renderContent } from "@/lib/rendercontent";
import bannerImg from "@/assets/About-us-banner.jpg";

// const categoryColors: Record<BlogCategory, string> = {
//   IVF: "bg-pink-100 text-pink-600",
//   IUI: "bg-orange-100 text-orange-600",
//   Doctors: "bg-purple-100 text-purple-600",
//   "Women's Health": "bg-rose-100 text-rose-600",
//   "Male Infertility": "bg-blue-100 text-blue-600",
// };

const BlogDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const blog = blogs.find((b) => b.id === slug);

  if (!blog) {
    return (
      <>
        <Navbar />
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
          <div className="text-6xl mb-4">😔</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-3">Blog Not Found</h1>
          <p className="text-gray-500 mb-6 text-sm">
            The blog post you're looking for doesn't exist or may have been removed.
          </p>
          <Link
            to="/Blogspage"
            className="bg-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-pink-700 transition-colors duration-200 text-sm"
          >
            ← Back to All Blogs
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const related = blogs
    .filter((b) => b.id !== blog.id)
    .slice(0, 2);

  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <Navbar />

      <section className="relative w-full h-[40vh] md:h-[55vh] flex items-end justify-center">
        <img
          src={bannerImg}
          alt={blog.title}
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/65" />
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 pb-8 md:pb-10">
          <Link
            to="/Blogspage"
            className="inline-flex items-center gap-2 text-pink-300 text-xs font-semibold tracking-widest uppercase mb-4 hover:text-pink-200 transition-colors"
          >
            ← Back to Blogs
          </Link>
          {/* <div className="flex flex-wrap items-center gap-3 mb-3">
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full bg-pink-600 text-white`}
            >
              {blog.category}
            </span>
            <span className="text-white/60 text-xs">{blog.date}</span>
          </div> */}
          <h1 className="text-xl md:text-4xl font-bold text-white leading-snug">
            {blog.title}
          </h1>
        </div>
      </section>

      <section className="py-10 md:py-16 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
          <article className="flex-1 min-w-0 lg:max-w-[calc(100%-390px)]">            <div>{renderContent(blog.content)}</div>

            <div className="mt-10 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
              <Link
                to="/Blogspage"
                className="inline-flex items-center gap-2 text-pink-600 font-semibold text-sm hover:text-pink-800 transition-colors"
              >
                ← All Blogs
              </Link>
              <div className="flex items-center gap-3">
                <span className="text-gray-400 text-xs">Share:</span>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(
                    blog.title + " " + window.location.href
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on WhatsApp"
                  className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold hover:bg-green-600 transition-colors"
                >
                  W
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    window.location.href
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Facebook"
                  className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold hover:bg-blue-700 transition-colors"
                >
                  f
                </a>
              </div>
            </div>
          </article>

          <aside className="w-full md:w-[300px] shrink-0 flex flex-col gap-4 md:sticky md:top-24 self-start">

            <div className="bg-pink-200 rounded-[24px] p-3 shadow-sm">
              <div className="bg-white rounded-[20px] p-4">

                {!submitted ? (
                  <>
                    <h3 className="text-[20px] leading-tight font-bold text-pink-500 text-center mb-3">
                      Book Free IVF Consultation
                    </h3>

                    <form
                      onSubmit={async (e) => {
                        e.preventDefault();

                        const form = e.currentTarget;
                        const formData = new FormData(form);

                        const name = formData.get("name")?.toString().trim() || "";
                        const phone = formData.get("phone")?.toString().trim() || "";
                        const treatment = formData.get("treatment")?.toString().trim() || "";

                        if (!/^[A-Za-z\s]+$/.test(name)) {
                          alert("Name should contain only alphabets");
                          return;
                        }

                        if (name.length < 3) {
                          alert("Please enter a valid name");
                          return;
                        }

                        if (!/^[789]\d{9}$/.test(phone)) {
                          alert(
                            "Phone number must be 10 digits and start with 7, 8, or 9"
                          );
                          return;
                        }

                        if (!treatment) {
                          alert("Please select a treatment");
                          return;
                        }

                        try {
                          const apiFormData = new FormData();

                          apiFormData.append("name", name);
                          apiFormData.append("mobile", phone);
                          apiFormData.append("source_name", "BlogForm");
                          apiFormData.append("city_name", "Delhi");

                          const response = await fetch(
                            "https://api.srijanivfcentre.com/api/v1/lead/generate-lead/",
                            {
                              method: "POST",
                              body: apiFormData,
                            }
                          );

                          const data = await response.json();

                          console.log(data);

                          if (response.ok) {
                            setSubmitted(true);
                            form.reset();
                          } else {
                            alert("Something went wrong");
                          }
                        } catch (error) {
                          console.log(error);
                          alert("Server Error");
                        }
                      }}
                      className="space-y-2.5"
                    >

                      <input
                        type="text"
                        name="name"
                        placeholder="Name*"
                        required
                        minLength={3}
                        maxLength={30}
                        pattern="[A-Za-z\s]+"
                        title="Only alphabets are allowed"
                        onInput={(e) => {
                          e.currentTarget.value = e.currentTarget.value.replace(
                            /[^A-Za-z\s]/g,
                            ""
                          );
                        }}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-xs outline-none focus:border-pink-400"
                      />

                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone*"
                        required
                        maxLength={10}
                        pattern="[789]{1}[0-9]{9}"
                        title="Enter valid 10-digit mobile number"
                        onInput={(e) => {
                          e.currentTarget.value = e.currentTarget.value
                            .replace(/\D/g, "")
                            .slice(0, 10);
                        }}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-xs outline-none focus:border-pink-400"
                      />

                      <select
                        required
                        name="treatment"
                        aria-label="Choose Treatment"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-xs text-gray-500 outline-none focus:border-pink-400"
                      >
                        <option value="">--Choose Treatment--</option>
                        <option value="IVF">IVF</option>
                        <option value="IUI">IUI</option>
                        <option value="Altruistic Surrogacy">
                          Altruistic Surrogacy
                        </option>
                      </select>

                      <textarea
                        name="message"
                        placeholder="Message"
                        rows={2}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-xs outline-none focus:border-pink-400 resize-none"
                      />

                      <button
                        type="submit"
                        className="bg-pink-500 hover:bg-pink-600 text-white text-xs font-semibold px-6 py-2 rounded-full mx-auto block transition-colors"
                      >
                        Submit
                      </button>

                    </form>
                  </>
                ) : (
                  <div className="text-center py-6">

                    <div className="text-4xl mb-2">💖</div>

                    <h3 className="text-xl font-bold text-pink-600 mb-2">
                      Thank You!
                    </h3>

                    <p className="text-gray-600 text-xs leading-relaxed">
                      Your consultation request has been submitted successfully.
                      Our team will contact you shortly.
                    </p>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 bg-pink-500 hover:bg-pink-600 text-white text-xs font-semibold px-5 py-2 rounded-full transition-colors"
                    >
                      Call us : +91 97117 48080
                    </button>

                  </div>
                )}

              </div>
            </div>

            {related.length > 0 && (
              <div className="border border-pink-100 rounded-2xl p-5 bg-white">
                <h3 className="font-bold text-gray-800 mb-4 text-xs uppercase tracking-wider">
                  Related Posts
                </h3>

                <div className="flex flex-col gap-4">
                  {related.map((r) => (
                    <Link
                      key={r.id}
                      to={`/blog/${r.id}`}
                      className="flex gap-3 group"
                    >
                      <img
                        src={r.image}
                        alt={r.title}
                        className="w-16 h-14 object-cover rounded-xl shrink-0"
                      />

                      <div>
                        <p className="text-xs font-semibold text-gray-700 leading-snug group-hover:text-pink-600 transition-colors line-clamp-2">
                          {r.title}
                        </p>

                        {/* <p className="text-xs text-gray-400 mt-1">
                          {r.date}
                        </p> */}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* <div className="border border-pink-100 rounded-2xl p-5 bg-white">
              <h3 className="font-bold text-gray-800 mb-4 text-xs uppercase tracking-wider">
                Categories
              </h3>

              <div className="flex flex-wrap gap-2">
                {(Object.keys(categoryColors) as BlogCategory[]).map((cat) => (
                  <Link
                    key={cat}
                    to="/Blogspage"
                    className={`text-xs font-semibold px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity ${categoryColors[cat]}`}
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div> */}

            <div className="border border-pink-100 rounded-2xl p-5 bg-white">
              <h3 className="font-bold text-gray-800 mb-4 text-xs uppercase tracking-wider">
                All Blogs
              </h3>

              <div className="flex flex-col gap-3">
                {blogs
                  .filter((b) => b.id !== blog.id)
                  .slice(0, 5)
                  .map((b) => (
                    <Link
                      key={b.id}
                      to={`/blog/${b.id}`}
                      className="text-xs text-gray-600 hover:text-pink-600 transition-colors leading-snug line-clamp-2 border-b border-gray-50 pb-2 last:border-0"
                    >
                      → {b.title}
                    </Link>
                  ))}
              </div>
            </div>

          </aside>
        </div>
      </section>

      
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default BlogDetailPage;