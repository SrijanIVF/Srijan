import { useEffect, useState, useRef } from "react";
import { Menu, X, Phone, ChevronDown, ChevronRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/srijanivf_logoNew.webp";

const treatmentCategories = [
  {
    title: "IVF & Infertility",
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
    items: [
      { name: "Laparoscopic Gynecology", slug: "laparoscopic-gynecology" },
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
    items: [
      { name: "Caesarean Section", slug: "caesarean-section" },
      { name: "High-Risk Pregnancy", slug: "high-risk-pregnancy" },
      { name: "Low-Risk Pregnancy", slug: "low-risk-pregnancy" },
      { name: "Normal Delivery", slug: "normal-delivery" },
    ],
  },
];

const doctors = [
  { name: "Dr. Pallavi Singh", slug: "pallavi-singh", title: "IVF Specialist" },
  { name: "Dr. Santosh Kumar Arjun", slug: "santosh-kumar", title: "Reproductive Medicine" },
];

const centres = [
  { name: "Delhi", slug: "best-ivf-centre-delhi" },
  { name: "Indirapuram", slug: "best-ivf-centre-indirapuram" },
];

const TreatmentsDropdown = () => {
  const [activeCategory, setActiveCategory] = useState(treatmentCategories[0].title);

  return (
    <div
      className="
        absolute left-1/2 -translate-x-1/2 top-full mt-4
        w-[680px] bg-white rounded-2xl shadow-2xl border border-[#F8BBD9]
        opacity-0 invisible group-hover:opacity-100 group-hover:visible
        transition-all duration-200 overflow-hidden z-50
      "
    >
      <div className="bg-[#FDF2F6] px-6 py-3 border-b border-[#F8BBD9]">
        <p className="text-xs font-semibold tracking-widest text-[#C2185B] uppercase">
          Our Specialisations
        </p>
      </div>

      <div className="flex">
        <div className="w-52 border-r border-[#F8BBD9] py-3">
          {treatmentCategories.map((cat) => (
            <button
              key={cat.title}
              onMouseEnter={() => setActiveCategory(cat.title)}
              className={`
                w-full text-left px-5 py-3 text-sm font-medium flex items-center justify-between
                transition-colors duration-150
                ${activeCategory === cat.title
                  ? "bg-[#FDF2F6] text-[#C2185B]"
                  : "text-[#4A1942] hover:bg-[#FDF2F6] hover:text-[#C2185B]"
                }
              `}
            >
              {cat.title}
              <ChevronRight className="h-3.5 w-3.5 opacity-50" />
            </button>
          ))}
        </div>

        <div className="flex-1 p-5">
          <div className="grid grid-cols-2 gap-x-4 gap-y-1">
            {treatmentCategories
              .find((c) => c.title === activeCategory)
              ?.items.map((item) => (
                <Link
                  key={item.slug}
                  to={`/${item.slug}`}
                  className="
                    px-3 py-2.5 text-sm text-gray-600 rounded-lg
                    hover:bg-[#FDF2F6] hover:text-[#C2185B]
                    transition-colors duration-150 flex items-center gap-2 group/item
                  "
                >
                  <span
                    className="
                      h-1.5 w-1.5 rounded-full bg-[#F8BBD9]
                      group-hover/item:bg-[#C2185B] transition-colors flex-shrink-0
                    "
                  />
                  {item.name}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const SmallDropdown = ({
  items,
}: {
  items: { label: string; href: string; sub?: string }[];
}) => (
  <div
    className="
      absolute left-1/2 -translate-x-1/2 top-full mt-4
      w-60 bg-white rounded-2xl shadow-2xl border border-[#F8BBD9]
      opacity-0 invisible group-hover:opacity-100 group-hover:visible
      transition-all duration-200 overflow-hidden z-50
    "
  >
    {items.map((item, i) => (
      <Link
        key={item.href}
        to={item.href}
        className={`
          flex flex-col px-5 py-3.5 text-sm
          hover:bg-[#FDF2F6] hover:text-[#C2185B] transition-colors
          ${i > 0 ? "border-t border-[#F8BBD9]" : ""}
        `}
      >
        <span className="font-medium text-[#4A1942]">{item.label}</span>
        {item.sub && (
          <span className="text-xs text-gray-400 mt-0.5">{item.sub}</span>
        )}
      </Link>
    ))}
  </div>
);

const MobileAccordion = ({
  label,
  children,
  isOpen,
  onToggle,
}: {
  label: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className="border-b border-[#F8BBD9]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-sm font-semibold text-[#4A1942]"
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 text-[#C2185B] transition-transform duration-200 ${isOpen ? "rotate-180" : ""
            }`}
        />
      </button>
      {isOpen && <div className="pb-3">{children}</div>}
    </div>
  );
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileTreatmentCat, setMobileTreatmentCat] = useState<string | null>(null);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 inset-x-0 h-0.5 bg-gradient-to-r from-[#F8BBD9] via-[#C2185B] to-[#F8BBD9] z-50" />

      <header
        className={`
          fixed top-0.5 inset-x-0 z-40 transition-all duration-300
          ${scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_4px_24px_rgba(194,24,91,0.08)]"
            : "bg-white/80 backdrop-blur-md"
          }
        `}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between h-16 px-5 lg:px-8">

          <Link to="/" className="flex-shrink-0">
            <img
              src={logo}
              alt="Srijan IVF"
              className="h-10 w-auto object-contain"
            />
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {/* <li>
              <Link
                to="/"
                className="px-4 py-2 text-sm font-medium text-[#4A1942] hover:text-[#C2185B] rounded-lg hover:bg-[#FDF2F6] transition-all"
              >
                Home
              </Link>
            </li> */}

            <li className="relative group">
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-[#4A1942] hover:text-[#C2185B] rounded-lg hover:bg-[#FDF2F6] transition-all">
                Our Services
                <ChevronDown className="h-3.5 w-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <TreatmentsDropdown />
            </li>

            <li className="relative group">
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-[#4A1942] hover:text-[#C2185B] rounded-lg hover:bg-[#FDF2F6] transition-all">
                Our Doctors
                <ChevronDown className="h-3.5 w-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <SmallDropdown
                items={doctors.map((d) => ({
                  label: d.name,
                  href: `/doctor/${d.slug}`,
                  sub: d.title,
                }))}
              />
            </li>

            <li className="relative group">
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-[#4A1942] hover:text-[#C2185B] rounded-lg hover:bg-[#FDF2F6] transition-all">
                Our Centres
                <ChevronDown className="h-3.5 w-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <SmallDropdown
                items={centres.map((c) => ({
                  label: c.name,
                  href: `/${c.slug}`,
                }))}
              />
            </li>

            {[
              { label: "Testimonials", href: "/testimonials" },
              { label: "Blogs", href: "/blogs" },
              // { label: "Contact Us", href: "/contact-us" },
            ].map((l) => (
              <li key={l.label}>
                <Link
                  to={l.href}
                  className="px-4 py-2 text-sm font-medium text-[#4A1942] hover:text-[#C2185B] rounded-lg hover:bg-[#FDF2F6] transition-all"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919711748080"
              className="flex items-center gap-2 text-sm font-medium text-[#C2185B] hover:text-[#4A1942] transition-colors"
            >
              <Phone className="h-4 w-4" />
              971 174 8080
            </a>
            <a
              href="/contact-us"
              className="
                relative flex items-center gap-2 bg-[#C2185B] hover:bg-[#a0154d]
                text-white text-sm font-semibold px-5 py-2.5 rounded-full
                shadow-[0_4px_16px_rgba(194,24,91,0.35)]
                hover:shadow-[0_6px_20px_rgba(194,24,91,0.45)]
                transition-all duration-200 group/cta overflow-hidden
              "
            >
              <Heart className="h-4 w-4 fill-white/30 group-hover/cta:fill-white/60 transition-all" />
              Book Consultation
            </a>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:+919711748080"
              className="flex items-center gap-1.5 bg-[#FDF2F6] border border-[#F8BBD9] px-3 py-2 rounded-full"
            >
              <Phone className="h-4 w-4 text-[#C2185B]" />
              <span className="text-sm font-semibold text-[#C2185B]">971 174 8080</span>
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="h-10 w-10 flex items-center justify-center rounded-xl bg-[#FDF2F6] border border-[#F8BBD9]"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="h-5 w-5 text-[#4A1942]" />
              ) : (
                <Menu className="h-5 w-5 text-[#4A1942]" />
              )}
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-[#F8BBD9] max-h-[85vh] overflow-y-auto">
            <div className="max-w-7xl mx-auto px-5 py-4 space-y-0">
              {/* <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="block py-4 text-sm font-semibold text-[#4A1942] border-b border-[#F8BBD9]"
              >
                Home
              </Link> */}

              <MobileAccordion
                label="Our Services"
                isOpen={openAccordion === "services"}
                onToggle={() =>
                  setOpenAccordion(
                    openAccordion === "services" ? null : "services"
                  )
                }
              >                
              <div className="space-y-2 mt-1">
                  {treatmentCategories.map((cat) => (
                    <div key={cat.title} className="rounded-xl overflow-hidden border border-[#F8BBD9]">
                      <button
                        onClick={() =>
                          setMobileTreatmentCat(
                            mobileTreatmentCat === cat.title ? null : cat.title
                          )
                        }
                        className="w-full flex items-center justify-between px-4 py-3 bg-[#FDF2F6] text-sm font-semibold text-[#4A1942]"
                      >
                        {cat.title}
                        <ChevronDown
                          className={`h-4 w-4 text-[#C2185B] transition-transform duration-200 ${mobileTreatmentCat === cat.title ? "rotate-180" : ""
                            }`}
                        />
                      </button>
                      {mobileTreatmentCat === cat.title && (
                        <div className="bg-white grid grid-cols-2 gap-px p-3">
                          {cat.items.map((item) => (
                            <Link
                              key={item.slug}
                              to={`/${item.slug}`}
                              onClick={() => setMobileOpen(false)}
                              className="px-3 py-2.5 text-xs text-gray-600 rounded-lg hover:bg-[#FDF2F6] hover:text-[#C2185B] transition-colors"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </MobileAccordion>

              <MobileAccordion
                label="Our Doctors"
                isOpen={openAccordion === "doctors"}
                onToggle={() =>
                  setOpenAccordion(
                    openAccordion === "doctors" ? null : "doctors"
                  )
                }
              >                
              <div className="rounded-xl overflow-hidden border border-[#F8BBD9]">
                  {doctors.map((d, i) => (
                    <Link
                      key={d.slug}
                      to={`/doctor/${d.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className={`flex flex-col px-5 py-3.5 hover:bg-[#FDF2F6] hover:text-[#C2185B] transition-colors ${i > 0 ? "border-t border-[#F8BBD9]" : ""
                        }`}
                    >
                      <span className="text-sm font-medium text-[#4A1942]">{d.name}</span>
                      <span className="text-xs text-gray-400 mt-0.5">{d.title}</span>
                    </Link>
                  ))}
                </div>
              </MobileAccordion>

              <MobileAccordion
                label="Our Centres"
                isOpen={openAccordion === "centres"}
                onToggle={() =>
                  setOpenAccordion(
                    openAccordion === "centres" ? null : "centres"
                  )
                }
              >
                <div className="rounded-xl overflow-hidden border border-[#F8BBD9]">
                  {centres.map((c, i) => (
                    <Link
                      key={c.slug}
                      to={`/${c.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-5 py-3.5 text-sm font-medium text-[#4A1942] hover:bg-[#FDF2F6] hover:text-[#C2185B] transition-colors ${i > 0 ? "border-t border-[#F8BBD9]" : ""
                        }`}
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              </MobileAccordion>

              {[
                { label: "Testimonials", href: "/testimonials" },
                { label: "Blogs", href: "/blogs" },
                // { label: "Contact Us", href: "/contact-us" },
              ].map((l) => (
                <Link
                  key={l.label}
                  to={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-4 text-sm font-semibold text-[#4A1942] border-b border-[#F8BBD9]"
                >
                  {l.label}
                </Link>
              ))}

              <div className="pt-4 pb-2">
                <a
                  href="/contact-us"
                  className="flex items-center justify-center gap-2 w-full bg-[#C2185B] text-white text-sm font-semibold py-3.5 rounded-full shadow-[0_4px_16px_rgba(194,24,91,0.35)]"
                >
                  <Heart className="h-4 w-4 fill-white/40" />
                  Book a Consultation
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
      <div className="h-[66px]" />
    </>
  );
};

export default Navbar;