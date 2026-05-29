import { useState } from "react";
import { Phone, Mail, ArrowRight } from "lucide-react";
import logo from "@/assets/srijanivf-footer-logo.webp";
import LeadPopup from "@/components/LeadPopup";

const Footer = () => {
    const [showPopup, setShowPopup] = useState(false);

    const pathname = window.location.pathname;

    let phoneNumber = "971 174 8080";

    if (
        pathname.includes("/fb/lp") ||
        pathname.includes("/fb/lp/best-ivf-centre")
    ) {
        phoneNumber = "971 167 5252";
    } else if (
        pathname.includes("/lp") ||
        pathname.includes("/lp/best-ivf-centre")
    ) {
        phoneNumber = "971 167 8282";
    }

    return (
        <>
            {showPopup && <LeadPopup onClose={() => setShowPopup(false)} />}
            <footer
                id="contact"
                className="pt-16 pb-[90px] md:pb-[110px] text-white overflow-hidden"
                style={{
                    background:
                        "linear-gradient(180deg, #e1658a 0%, #db5d86 45%, #cf537f 100%)",
                }}
            >
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-[260px_1fr] gap-10 items-start">
                        <div>
                            <img
                                src={logo}
                                alt="Srijan IVF"
                                className="h-16 w-auto object-contain"
                            />
                        </div>
                        <div>
                            <p className="text-sm leading-relaxed text-white/90 max-w-5xl">
                                <span className="font-semibold text-white">
                                    Disclaimer :
                                </span>{" "}
                                Srijan IVF strictly complies with the PCPNDT Act, 1994 and
                                ART (Regulation) Act, 2021. Gender selection and sex
                                determination are strictly prohibited under Indian law.
                                We do not support or engage in any such practices.
                                All fertility services are provided only at registered
                                clinics by licensed medical professionals as per applicable
                                laws and regulations.
                            </p>
                            <div className="mt-10">

                                <h3 className="text-2xl font-bold mb-6">
                                    Contact Us
                                </h3>

                                <div className="flex flex-col md:flex-row gap-3">

                                    <a
                                        href="mailto:info@srijanivfcentre.com"
                                        className="inline-flex items-center justify-center gap-2 bg-white text-[#e1658a] rounded-full px-4 md:px-6 py-2.5 md:py-3 text-sm md:text-base font-medium hover:scale-[1.02] transition duration-300 shadow-lg w-fit"
                                    >
                                        <Mail className="h-4 w-4 md:h-5 md:w-5" />
                                        info@srijanivfcentre.com
                                    </a>

                                    <a
                                        href={`tel:+91${phoneNumber}`}
                                        className="inline-flex items-center justify-center gap-2 bg-white text-[#e1658a] rounded-full px-4 md:px-6 py-2.5 md:py-3 text-sm md:text-base font-medium hover:scale-[1.02] transition duration-300 shadow-lg w-fit"
                                    >
                                        <Phone className="h-4 w-4 md:h-5 md:w-5" />
                                        +91 {phoneNumber}
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-white/20 mt-14 pt-6 text-center">
                        <p className="text-sm text-white/80">
                            © 2021 - 2026 Srijan IVF. All Rights Reserved.
                        </p>
                    </div>
                </div>

                <div className="hidden md:block fixed bottom-0 left-0 right-0 z-40">

                    <div className="bg-[#f1abcb] border-t border-white/10 backdrop-blur-md">

                        <div className="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-center gap-6">

                            <h3 className="text-white text-xl font-semibold">
                                Pay in Easy EMI
                            </h3>

                            <button
                                onClick={() => setShowPopup(true)}
                                className="h-11 px-7 rounded-xl border border-pink-300 bg-[#e1658a] hover:bg-[#d8527e] text-white font-medium text-sm transition-all duration-300 flex items-center gap-2 shadow-md"
                            >
                                <ArrowRight className="h-4 w-4 rotate-[-45deg]" />

                                Book Appointment
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="fixed bottom-0 left-0 right-0 z-40 flex md:hidden shadow-[0_-2px_12px_rgba(0,0,0,0.15)]">
                <a
                    href={`tel:+91${phoneNumber}`}
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