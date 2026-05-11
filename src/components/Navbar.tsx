import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Phone,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/srijanivf_logoNew.webp";

const links = [
  { href: "/", label: "Home" },
  { href: "#", label: "Treatments" },
  { href: "/doctors", label: "Doctors" },
  { href: "/centre", label: "Centre" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/Blogspage", label: "Blog" },
  { href: "/contact-us", label: "Contact Us" },
];

const treatmentCategories = [
  {
    title: "IVF & Infertility",
    slug: "#",
    items: [
      { name: "IVF", slug: "ivf-treatment" },
      { name: "IUI", slug: "iui-treatment" },
      { name: "ICSI", slug: "icsi-treatment" },
      { name: "Hysteroscopy", slug: "hysteroscopy" },
      { name: "Male Infertility", slug: "male-infertility" },
      { name: "TESA/PESA", slug: "tesa-pesa" },
      { name: "PICSI", slug: "picsi-treatment" },
      { name: "LAH", slug: "lah-treatment" },
      { name: "ERA", slug: "era-treatment" },
      { name: "Semen Analysis", slug: "semen-analysis" },
      { name: "Blastocyst Culture", slug: "blastocyst-culture" },
    ],
  },
  {
    title: "Gynecology",
    slug: "#",
    items: [
      {
        name: "Laparoscopic Gynecology",
        slug: "laparoscopic-gynecology",
      },
      { name: "General Gynecology", slug: "general-gynecology" },
      { name: "Robotic Gynecology", slug: "robotic-gynecology" },
      { name: "Adolescent Care", slug: "adolescent-care" },
      { name: "Menopause", slug: "menopause-treatment" },
      { name: "PCOS", slug: "pcos-treatment" },
      { name: "Endometriosis", slug: "endometriosis-treatment" },
    ],
  },
  {
    title: "Obstetrics",
    slug: "#",
    items: [
      { name: "Caesarean Section", slug: "caesarean-section" },
      { name: "High-Risk Pregnancy", slug: "high-risk-pregnancy" },
      { name: "Low-Risk Pregnancy", slug: "low-risk-pregnancy" },
      { name: "Normal Delivery", slug: "normal-delivery" },
    ],
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [showTreatments, setShowTreatments] =
    useState(false);

  const [openCategory, setOpenCategory] = useState<
    string | null
  >(null);

  const [showDoctors, setShowDoctors] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll);

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/90 backdrop-blur-lg shadow-md"
        : "bg-transparent"
        }`}
    >
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Srijan IVF"
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label} className="relative group">
              {l.label === "Treatments" ? (
                <>
                  <span className="text-sm font-medium text-gray-700 hover:text-pink-600 cursor-pointer transition-colors">
                    Treatments
                  </span>

                  <div className="absolute left-0 top-full mt-3 w-[320px] bg-white border border-pink-100 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">

                    {treatmentCategories.map((category) => (
                      <div
                        key={category.title}
                        className="relative group/submenu"
                      >
                        <div
                          className="flex items-center justify-between px-5 py-4 text-sm font-semibold text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-all cursor-default"
                        >
                          {category.title}

                          <ChevronRight className="h-4 w-4" />
                        </div>
                        <div className="absolute left-full top-0 w-[280px] bg-white border border-pink-100 rounded-2xl shadow-2xl opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-300 overflow-hidden">

                          {category.items.map((item) => (
                            <Link
                              key={item.slug}
                              to={`/treatments/${item.slug}`}
                              className="block px-5 py-3 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-all"
                            >
                              {item.name}
                            </Link>
                          ))}

                        </div>
                      </div>
                    ))}

                  </div>
                </>
              ) : l.label === "Doctors" ? (
                <>
                  <span className="text-sm font-medium text-gray-700 hover:text-pink-600 cursor-pointer transition-colors">
                    Doctors
                  </span>

                  <div className="absolute left-0 top-full mt-3 w-64 bg-white border border-pink-100 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">

                    <Link
                      to="/doctor/pallavi-singh"
                      className="block px-5 py-4 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                    >
                      Dr. Pallavi Singh
                    </Link>

                    <Link
                      to="/doctor/santosh-kumar"
                      className="block px-5 py-4 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                    >
                      Dr. Santosh Kumar Arjun
                    </Link>

                  </div>
                </>
              ) : (
                <Link
                  to={l.href}
                  className="text-sm font-medium text-gray-700 hover:text-pink-600 transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-pink-600 after:transition-all hover:after:w-full"
                >
                  {l.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+9197117 48080"
            className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md transition-all duration-300"
          >
            <Phone className="h-4 w-4" />
            97117 48080
          </a>
        </div>

        <button
          className="lg:hidden p-2 rounded-xl hover:bg-pink-50"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-white border-t border-pink-100 max-h-[90vh] overflow-y-auto">
          <div className="container mx-auto py-4 px-4">

            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="block py-3"
            >
              Home
            </Link>

            <div className="border-b border-pink-100 py-2">
              <button
                onClick={() =>
                  setShowTreatments(!showTreatments)
                }
                className="w-full flex items-center justify-between py-3"
              >
                <span className="text-sm font-semibold text-gray-800">
                  Treatments
                </span>

                <ChevronDown
                  className={`h-4 w-4 transition-transform ${showTreatments ? "rotate-180" : ""
                    }`}
                />
              </button>

              {showTreatments && (
                <div className="mt-2 space-y-3">

                  {treatmentCategories.map((category, index) => (
                    <div
                      key={category.title}
                      className="border border-pink-100 rounded-2xl overflow-hidden"
                    >
                      <button
                        onClick={() =>
                          setOpenCategory(
                            openCategory === category.title
                              ? null
                              : category.title
                          )
                        }
                        className="w-full flex items-center justify-between px-4 py-4 bg-pink-50"
                      >
                        <span className="text-sm font-semibold text-gray-800">
                          {category.title}
                        </span>

                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${openCategory === category.slug
                            ? "rotate-180"
                            : ""
                            }`}
                        />
                      </button>

                      {openCategory === category.title && (
                        <div className="bg-white py-2">

                          {category.items.map((item) => (
                            <Link
                              key={item.slug}
                              to={`/treatments/${item.slug}`}
                              onClick={() => setOpen(false)}
                              className="block px-5 py-3 text-sm text-gray-600 hover:bg-pink-50 hover:text-pink-600"
                            >
                              {item.name}
                            </Link>
                          ))}

                        </div>
                      )}
                    </div>
                  ))}

                </div>
              )}
            </div>

            <div className="border-b border-pink-100 py-2">
              <button
                onClick={() =>
                  setShowDoctors(!showDoctors)
                }
                className="w-full flex items-center justify-between py-3"
              >
                <span className="text-sm font-semibold text-gray-800">
                  Doctors
                </span>

                <ChevronDown
                  className={`h-4 w-4 transition-transform ${showDoctors ? "rotate-180" : ""
                    }`}
                />
              </button>

              {showDoctors && (
                <div className="mt-2 border border-pink-100 rounded-2xl overflow-hidden">

                  <Link
                    to="/doctor/pallavi-singh"
                    onClick={() => setOpen(false)}
                    className="block px-5 py-4 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                  >
                    Dr. Pallavi Singh
                  </Link>

                  <Link
                    to="/doctor/santosh-kumar"
                    onClick={() => setOpen(false)}
                    className="block px-5 py-4 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 border-t border-pink-100"
                  >
                    Dr. Santosh Kumar Arjun
                  </Link>

                </div>
              )}
            </div>

            <Link
              to="/centre"
              onClick={() => setOpen(false)}
              className="block py-3"
            >
              Centre
            </Link>

            <Link
              to="/testimonials"
              onClick={() => setOpen(false)}
              className="block py-3"
            >
              Testimonials
            </Link>

            <Link
              to="/Blogspage"
              onClick={() => setOpen(false)}
              className="block py-3"
            >
              Blog
            </Link>

            <Link
              to="/contact-us"
              onClick={() => setOpen(false)}
              className="block py-3"
            >
              Contact Us
            </Link>

            <div className="pt-5">
              <a
                href="tel:+9197117 48080"
                className="flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300"
              >
                <Phone className="h-4 w-4" />
                97117 48080
              </a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;