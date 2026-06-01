import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/srijanivf_logoNew.webp";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    const pathname = window.location.pathname
        .toLowerCase()
        .replace(/^\/|\/$/g, "");

    let phoneNumber = "971 174 8080";

    if (pathname.startsWith("fb/lp")) {
        phoneNumber = "971 167 5252";
    } else if (
        pathname.startsWith("lp") ||
        pathname.includes("/lp/")
    ) {
        phoneNumber = "971 167 8282";
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener(
                "scroll",
                handleScroll
            );
    }, []);

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/90 backdrop-blur-lg shadow-md"
                    : "bg-transparent"
                }`}
        >
            <nav className="container mx-auto flex items-center justify-between py-3 px-4">

                <div className="flex items-center">
                    <img
                        src={logo}
                        alt="Srijan IVF"
                        className="h-9 sm:h-11 w-auto object-contain"
                    />
                </div>

                <div className="flex items-center gap-3 lg:hidden">
                    <a
                        href={`tel:+91${phoneNumber}`}
                        className="flex items-center gap-2 bg-pink-50 border border-pink-100 px-4 py-2.5 rounded-full"
                    >
                        <Phone className="h-4 w-4 text-pink-600" />

                        <span className="text-sm font-semibold text-pink-600 leading-none">
                            {phoneNumber.replace(
                                /(\d{3})(\d{3})(\d{4})/,
                                "$1 $2 $3"
                            )}
                        </span>
                    </a>
                </div>

                <div className="hidden lg:flex items-center gap-3">
                    <a
                        href={`tel:+91${phoneNumber}`}
                        className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md transition-all duration-300"
                    >
                        <Phone className="h-4 w-4" />

                        {phoneNumber.replace(
                            /(\d{3})(\d{3})(\d{4})/,
                            "$1 $2 $3"
                        )}
                    </a>
                </div>

            </nav>
        </header>
    );
};

export default Navbar;