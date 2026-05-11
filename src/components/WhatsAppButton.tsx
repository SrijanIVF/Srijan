import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/9197117 48080?text=Hi%2C%20I%20would%20like%20to%20book%20a%20free%20IVF%20consultation."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-16 right-6 z-30 h-14 w-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-glow hover:scale-110 transition-transform animate-pulse-soft"
  >
    <FaWhatsapp className="h-7 w-7 relative z-10" />

    <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
  </a>
);

export default WhatsAppButton;