import { MapPin, Phone } from "lucide-react";
import { useLocation } from "react-router-dom";
import delhiCentre from "@/assets/Centre-img-delhi.jpeg";
import indirapuramCentre from "@/assets/Centre-img-indirapuram.jpeg";

const centres = [
  {
    title: "Srijan IVF Fertility Centre in Delhi",
    image: delhiCentre,
    address:
      "Shop No.2, Khasra No. 585, Kalyan Vyas, 202/1, Khichripur Rd, Mayur Vihar Phase I, Kalyan Puri, Delhi, 110091.",
    map: "https://maps.google.com/?q=Shop+No.2,+Khasra+No.+585,+Mayur+Vihar+Phase+1,+Delhi",
  },
  {
    title: "Srijan IVF Fertility Centre in Indirapuram",
    image: indirapuramCentre,
    address:
      "Plot No. 7, Abhay Khand 1, Pocket 2, Abhay Khand, Indirapuram, Ghaziabad, Uttar Pradesh 201020.",
    map: "https://www.google.com/maps/place/Srijan+IVF+%26+Diagnostic+Centre+Pvt+Ltd/@28.6390524,77.3468784,17z/data=!3m1!4b1!4m6!3m5!1s0x390cfbdafeae2c53:0xdd2faeb815f28c5e!8m2!3d28.6390524!4d77.3494533!16s%2Fg%2F11xc_fq_0s?entry=ttu&g_ep=EgoyMDI2MDUxNy4wIKXMDSoASAFQAw%3D%3D",
  },
];

export default function SrijanCentres() {
  const location = useLocation();

  const isFacebookLP =
    location.pathname === "/fb/lp" ||
    location.pathname.includes("/fb/lp");

  const phoneNumber = isFacebookLP
    ? "9711675252"
    : "9711678282";

  const leadSource = isFacebookLP
    ? "Webform-Facebook-Ads"
    : "Webform-Google-Ads";

  return (
    <section className="py-16 md:py-20 bg-white px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <input type="hidden" value={leadSource} />

        <div className="text-center mb-12">
          <p className="text-[11px] font-semibold tracking-[3px] uppercase text-pink-500 mb-3">
            Our Fertility Centres
          </p>

          <h2 className="font-serif text-4xl md:text-5xl text-gray-900">
            Visit Our{" "}
            <span className="text-pink-500">Srijan IVF</span> Centres
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-7">
          {centres.map((centre, index) => (
            <div
              key={index}
              className="bg-white rounded-[24px] overflow-hidden border border-pink-100"
              style={{
                boxShadow: "0 8px 30px rgba(236,72,153,0.08)",
              }}
            >
              <div className="relative h-[320px] overflow-hidden">
                <img
                  src={centre.image}
                  alt={centre.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-5 border border-pink-300 rounded-b-[24px]">
                <h3 className="font-serif text-lg leading-tight text-gray-900 mb-3">
                  {centre.title}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`tel:${phoneNumber}`}
                    className="h-11 bg-pink-600 hover:bg-pink-700 text-white rounded-xl flex items-center justify-center gap-2 font-medium transition"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                  <a
                    href={centre.map}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-11 border border-pink-400 text-pink-600 rounded-xl flex items-center justify-center gap-2 font-medium hover:bg-pink-50 transition"
                  >
                    <MapPin className="w-4 h-4" />
                    Direction
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}