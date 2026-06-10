import { useState } from "react";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin, ArrowRight, Plus, Minus } from "lucide-react";
import logo from "@/assets/srijanivf-footer-logo.webp";
import LeadPopup from "@/components/LeadPopup";
import { Link } from "react-router-dom";

const AccordionSection = ({
  title,
  children,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="border-b border-white/20">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left text-white text-sm font-semibold"
      >
        {title}
        {isOpen ? (
          <Minus className="h-4 w-4 shrink-0 opacity-80" />
        ) : (
          <Plus className="h-4 w-4 shrink-0 opacity-80" />
        )}
      </button>

      {isOpen && <div className="pb-4">{children}</div>}
    </div>
  );
};

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const services = [
    { label: "IVF Treatment", to: "/treatments/ivf-treatment" },
    { label: "IUI Treatment", to: "/treatments/iui-treatment" },
    { label: "ICSI Treatment", to: "/treatments/icsi-treatment" },
    { label: "PICSI Treatment", to: "/treatments/picsi-treatment" },
    { label: "Laparoscopy", to: "/treatments/laparoscopic-gynecology" },
    { label: "Hysteroscopy", to: "/treatments/hysteroscopy" },
    { label: "LAH Treatment", to: "/treatments/lah-treatment" },
    { label: "ERA Treatment", to: "/treatments/era-treatment" },
  ];

  const problems = [
    { label: "Male Infertility", to: "/treatments/male-infertility" },
    { label: "PCOS", to: "/treatments/pcos-treatment" },
    { label: "Endometriosis", to: "/treatments/endometriosis-treatment" },
    { label: "High Risk Pregnancy", to: "/treatments/high-risk-pregnancy" },
    { label: "Menopause", to: "/treatments/menopause-treatment" },
    { label: "Adolescent Care", to: "/treatments/adolescent-care" },
  ];

  const quickLinks = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about-us" },
    { label: "Testimonials", to: "/testimonials" },
    { label: "Success Stories", to: "/success-stories-testimonials" },
    { label: "Blogs", to: "/blogs" },
    { label: "Contact Us", to: "/contact-us" },
    { label: "Privacy Policy", to: "/privacy-policy" },
    { label: "Terms & Conditions", to: "/termsandconditions" },
  ];

  const LinkList = ({ items }) => (
    <ul className="space-y-2.5 text-sm text-white/80 pb-1">
      {items.map((item) => (
        <li key={item.to}>
          <Link to={item.to} className="hover:text-white transition">{item.label}</Link>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {showPopup && <LeadPopup onClose={() => setShowPopup(false)} />}

      {/* pb-[130px] on mobile ensures content never hides behind fixed bottom bar */}
      <footer
        id="contact"
        className="text-white overflow-hidden pb-[130px] md:pb-[80px]"
        style={{ backgroundColor: "#e1658a" }}
      >

        {/* Top: logo + socials */}
        <div className="container mx-auto px-4 pt-8 pb-6 flex flex-col md:flex-row items-center justify-between gap-5 border-b border-white/20">
          <img src={logo} alt="Srijan IVF" className="h-12 md:h-14 w-auto object-contain" />
          <div className="flex gap-3">
            {[
              { href: "https://www.facebook.com/srijanfertility/", Icon: Facebook },
              { href: "https://www.instagram.com/srijan.ivfcentre/", Icon: Instagram },
              { href: "https://www.youtube.com/@srijanfertilitycentre", Icon: Youtube },
            ].map(({ href, Icon }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/20 hover:bg-white hover:text-[#e1658a] text-white grid place-items-center transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
            <a href="https://x.com/srijan_ivf" target="_blank" rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-white/20 hover:bg-white hover:text-[#e1658a] text-white grid place-items-center transition">
              <span className="text-xs font-bold">X</span>
            </a>
            <a href="https://www.linkedin.com/company/srijan-ivf-centre/" target="_blank" rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-white/20 hover:bg-white hover:text-[#e1658a] text-white grid place-items-center transition">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* ── DESKTOP: 5-column grid (unchanged) ── */}
        <div className="hidden md:grid md:grid-cols-5 gap-6 container mx-auto px-4 pt-8 pb-6">
          <div>
            <h4 className="font-semibold text-sm mb-4">Our Services</h4>
            <LinkList items={services} />
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Infertility Problems</h4>
            <LinkList items={problems} />
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Srijan IVF Centres</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="/best-ivf-centre-delhi" className="hover:text-white transition">IVF Centre Delhi</a></li>
              <li><a href="/best-ivf-centre-indirapuram" className="hover:text-white transition">IVF Centre Indirapuram</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Quick Links</h4>
            <LinkList items={quickLinks} />
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Need help? Talk to our fertility experts</h4>
            <ul className="space-y-3 text-sm text-white/80 mb-5">
              <li className="flex gap-2 items-start">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-white" />
                <span>info@srijanivfcentre.com</span>
              </li>
              <li className="flex gap-2 items-center">
                <Phone className="h-4 w-4 shrink-0 text-white" />
                <a href="tel:+919711748080" className="hover:text-white transition">+91 971 174 8080</a>
              </li>
              <li className="flex gap-2 items-start">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-white" />
                <span>Plat No. 7, Abhay Khand 1, Pocket 2, Abhay Khand, Indirapuram, Ghaziabad, Uttar Pradesh 201020.</span>
              </li>
            </ul>
            <button onClick={() => setShowPopup(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#e1658a] text-sm font-medium hover:bg-white/90 transition">
              Book Appointment
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* ── MOBILE: accordion sections ── */}
        <div className="md:hidden container mx-auto px-4 pt-2">
          <AccordionSection
            title="Our Services"
            isOpen={activeAccordion === "services"}
            onToggle={() =>
              setActiveAccordion(
                activeAccordion === "services" ? null : "services"
              )
            }
          >
            <LinkList items={services} />
          </AccordionSection>

          <AccordionSection
            title="Infertility Problems"
            isOpen={activeAccordion === "problems"}
            onToggle={() =>
              setActiveAccordion(
                activeAccordion === "problems" ? null : "problems"
              )
            }
          >
            <LinkList items={problems} />
          </AccordionSection>

          <AccordionSection
            title="Srijan IVF Centers"
            isOpen={activeAccordion === "centers"}
            onToggle={() =>
              setActiveAccordion(
                activeAccordion === "centers" ? null : "centers"
              )
            }
          >
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <a href="/best-ivf-centre-delhi">IVF Centre Delhi</a>
              </li>
              <li>
                <a href="/best-ivf-centre-indirapuram">IVF Centre Indirapuram</a>
              </li>
            </ul>
          </AccordionSection>

          <AccordionSection
            title="Quick Links"
            isOpen={activeAccordion === "quicklinks"}
            onToggle={() =>
              setActiveAccordion(
                activeAccordion === "quicklinks" ? null : "quicklinks"
              )
            }
          >
            <LinkList items={quickLinks} />
          </AccordionSection>

          {/* Contact — always visible, no accordion */}
          <div className="pt-5">
            <h4 className="font-semibold text-sm mb-4 text-white">Need help? Talk to our fertility experts</h4>
            <ul className="space-y-3 text-sm text-white/80 mb-5">
              <li className="flex gap-2 items-start">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-white" />
                <span>info@srijanivfcentre.com</span>
              </li>
              <li className="flex gap-2 items-center">
                <Phone className="h-4 w-4 shrink-0 text-white" />
                <a href="tel:+919711748080" className="hover:text-white transition">+91 971 174 8080</a>
              </li>
              <li className="flex gap-2 items-start">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-white" />
                <span>Plat No. 7, Abhay Khand 1, Pocket 2, Abhay Khand, Indirapuram, Ghaziabad, Uttar Pradesh 201020.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="container mx-auto px-4 border-t border-white/20 pt-6 pb-2 text-center text-xs text-white/70">
          <p className="mb-2">© 2026 Srijan IVF. All rights reserved.</p>
          <p className="max-w-5xl mx-auto leading-relaxed">
            <span className="font-semibold text-white">Disclaimer: </span>
            Srijan IVF strictly complies with the PCPNDT Act, 1994 and ART (Regulation) Act, 2021.
            Gender selection and sex determination are strictly prohibited under Indian law.
            We do not support or engage in any such practices.
            All fertility services are provided only at registered clinics by licensed medical professionals
            as per applicable laws and regulations.
          </p>
        </div>

        {/* Desktop sticky bar */}
        <div className="hidden md:block fixed bottom-0 left-0 right-0 z-40">
          <div className="bg-[#f1abcb] border-t border-white/10 shadow-[0_-4px_18px_rgba(0,0,0,0.15)]">
            <div className="max-w-7xl mx-auto px-6 h-[64px] flex items-center justify-center gap-6">
              <h3 className="text-white text-lg font-semibold">Pay in Easy EMI @ 0% Interest Rate</h3>
              <button onClick={() => setShowPopup(true)}
                className="h-11 px-6 rounded-xl border border-pink-500 bg-white text-pink-600 hover:bg-pink-400 hover:text-white font-medium text-sm transition-all duration-300 flex items-center gap-2">
                <ArrowRight className="h-4 w-4 rotate-[-45deg]" />
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 flex md:hidden shadow-[0_-2px_12px_rgba(0,0,0,0.15)]">
        <a href="tel:+919711748080"
          className="flex-1 flex items-center justify-center gap-2 font-semibold text-sm py-4 transition active:opacity-80"
          style={{ backgroundColor: "#b5446a", color: "#fff" }}>
          <Phone className="h-4 w-4" />
          Call Now
        </a>
        <div className="w-px bg-white/40" />
        <button onClick={() => setShowPopup(true)}
          className="flex-1 flex items-center justify-center gap-2 bg-white font-semibold text-sm py-4 transition active:bg-pink-50"
          style={{ color: "#e1658a" }}>
          Book Appointment
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </>
  );
};

export default Footer;