// // import { FaWhatsapp } from "react-icons/fa";
// // const WhatsAppButton = () => (
// //   <a
// //     href="https://wa.me/91971 174 8080?text=Hi%2C%20I%20would%20like%20to%20book%20a%20free%20IVF%20consultation."
// //     target="_blank"
// //     rel="noopener noreferrer"
// //     aria-label="Chat on WhatsApp"
// //     className="fixed bottom-[100px] right-6 z-30 h-14 w-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-glow hover:scale-110 transition-transform animate-pulse-soft"  >
// //     <FaWhatsapp className="h-7 w-7 relative z-10" />

// //     <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
// //   </a>
// // );

// // export default WhatsAppButton;

// import { useEffect } from "react";

// declare global {
//   interface Window {
//     dt?: (...args: any[]) => void;
//   }
// }

// const WhatsAppButton = () => {
//   useEffect(() => {
//     const script = document.createElement("script");

//     script.src = "https://d3r49s2alut4u1.cloudfront.net/js/widget.js";
//     script.async = true;

//     script.onload = () => {
//        console.log("Loaded");
//       if (window.dt) {
//         window.dt("init", {
//           crmWidgetId: "98c00c27-fe6f-4cc8-9e90-a36bd2546417",
//           companyName: "Srijan IVF Centre",
//           companyLogoUrl: "",
//           phoneNumber: "919711748080",
//         });
//       }
//     };

//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return null;
// };

// export default WhatsAppButton;

import { useEffect } from "react";

declare global {
  interface Window {
    dt?: any;
  }
}

export default function WhatsAppWidget() {
  useEffect(() => {
    (function (w: any, d: Document, s: string, o: string, f: string) {
      w[o] =
        w[o] ||
        function () {
          (w[o].q = w[o].q || []).push(arguments);
        };

      const js = d.createElement(s) as HTMLScriptElement;
      const fjs = d.getElementsByTagName(s)[0];

      js.id = o;
      js.src = f;
      js.async = true;

      fjs.parentNode?.insertBefore(js, fjs);
    })(
      window,
      document,
      "script",
      "dt",
      "https://d3r49s2alut4u1.cloudfront.net/js/widget.js",
    );

    window.dt("init", {
      crmWidgetId: "98c00c27-fe6f-4cc8-9e90-a36bd2546417",
      companyName: "Srijan IVF Centre",
      companyLogoUrl: "",
      phoneNumber: "919711748080",
    });
  }, []);

  return null;
}