import { Phone } from "lucide-react";

const CallButton = () => (
  <a
    href="tel:+9197117 48080"
    aria-label="Call Now"
    className="fixed bottom-32 right-6 z-30 h-14 w-14 rounded-full bg-blue-600 text-white grid place-items-center shadow-lg hover:scale-110 transition-transform animate-pulse"
  >
    <Phone className="h-6 w-6" />
    <span className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-30" />
  </a>
);

export default CallButton;