import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Linkedin, ArrowRight } from "lucide-react";
import logo from "@/assets/srijanivf-footer-logo.webp";
import LeadPopup from "@/components/LeadPopup";
import { Link } from "react-router-dom";

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {showPopup && <LeadPopup onClose={() => setShowPopup(false)} />}

      <footer id="contact" className="pt-14 pb-8 text-white" style={{ backgroundColor: "#e1658a" }}>
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center">
              <img src={logo} alt="Srijan IVF" className="h-12 w-auto object-contain" />
            </div>
            <p className="mt-4 text-white/80 text-sm leading-relaxed">
              Delhi couples seeking to build their families find hope at Srijan IVF.
              We offer advanced treatments like IVF, IUI, ICSI and more.
            </p>
            <div className="mt-5 flex gap-3">

              <a
                href="https://www.facebook.com/srijanivfcentre"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/20 hover:bg-white hover:text-[#e1658a] grid place-items-center transition"
              >
                <Facebook className="h-4 w-4" />
              </a>

              <a
                href="https://www.instagram.com/srijan.ivf/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/20 hover:bg-white hover:text-[#e1658a] grid place-items-center transition"
              >
                <Instagram className="h-4 w-4" />
              </a>

              <a
                href="https://www.youtube.com/@srijanfertilitycentre"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/20 hover:bg-white hover:text-[#e1658a] grid place-items-center transition"
              >
                <Youtube className="h-4 w-4" />
              </a>

              <a
                href="https://x.com/srijan_ivf"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/20 hover:bg-white hover:text-[#e1658a] grid place-items-center transition"
              >
                <span className="text-xs font-bold">X</span>
              </a>

              <a
                href="https://www.linkedin.com/in/srijan-ivf"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/20 hover:bg-white hover:text-[#e1658a] grid place-items-center transition"
              >
                <Linkedin className="h-4 w-4" />
              </a>

            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Useful Links</h4>

            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link to="/" className="hover:text-white transition flex items-center gap-2">
                  <span>»</span> Home
                </Link>
              </li>

              <li>
                <Link to="/about-us" className="hover:text-white transition flex items-center gap-2">
                  <span>»</span> About
                </Link>
              </li>

              <li>
                <Link to="/testimonials" className="hover:text-white transition flex items-center gap-2">
                  <span>»</span> Testimonials
                </Link>
              </li>

              <li>
                <Link to="/Blogspage" className="hover:text-white transition flex items-center gap-2">
                  <span>»</span> Blogs
                </Link>
              </li>

              <li>
                <Link to="/contact-us" className="hover:text-white transition flex items-center gap-2">
                  <span>»</span> Contact Us
                </Link>
              </li>

              <li>
                <Link to="/privacy-policy" className="hover:text-white transition flex items-center gap-2">
                  <span>»</span> Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Centres</h4>
            <ul className="space-y-2 text-sm text-white/80">
              {["Delhi", "Indirapuram"].map((l) => (
                <li key={l}>
                  <a
                    href="/our-centres"
                    className="hover:text-white transition flex items-center gap-2"
                  >
                    <span>»</span> {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="font-semibold mb-4 text-sm">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-white shrink-0" />
                Shop No.2, Khasra No. 585, kalyan Vyas, 202/1, Khichripur Rd, Mayur Vihar Phase I, Kalyanvas, Kalyan Puri, Delhi, 110091
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-white shrink-0" />
                <a href="tel:+9197117 48080" className="hover:underline">+91 97117 48080</a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-white shrink-0" />
                info@srijanivfcentre.com
              </li>
            </ul>
          </div>

        </div>

        <div className="container mx-auto border-t border-white/20 mt-12 pt-6 text-center text-sm text-white/70 pb-20 md:pb-0 px-4">

          <p className="mb-3">
            © {new Date().getFullYear()} Srijan IVF. All rights reserved.
          </p>

          <p className="text-xs md:text-sm leading-relaxed max-w-5xl mx-auto text-white/80">
            <span className="font-semibold text-white">
              Disclaimer:
            </span>{" "}
            Srijan IVF strictly complies with the PCPNDT Act, 1994 and ART (Regulation) Act, 2021.
            Gender selection and sex determination are strictly prohibited under Indian law.
            We do not support or engage in any such practices.
            All fertility services are provided only at registered clinics by licensed medical professionals
            as per applicable laws and regulations.
          </p>

        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-40 flex md:hidden shadow-[0_-2px_12px_rgba(0,0,0,0.15)]">
        <a
          href="tel:+9197117 48080"
          className="flex-1 flex items-center justify-center gap-2 font-semibold text-sm py-4 transition active:opacity-80"
          style={{ backgroundColor: "#b5446a", color: "#fff" }}
        >
          <Phone className="h-4 w-4" />
          Call Now
        </a>

        <div className="w-px bg-white/40" />

        <button
          onClick={() => setShowPopup(true)}
          className="flex-1 flex items-center justify-center gap-2 bg-white font-semibold text-sm py-4 transition active:bg-pink-50"
          style={{ color: "#e1658a" }}
        >
          Book Appointment
          <ArrowRight className="h-4 w-4" />
        </button>

      </div>
    </>
  );
};

export default Footer;