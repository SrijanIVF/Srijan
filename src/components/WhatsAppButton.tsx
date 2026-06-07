import { useEffect, useRef } from "react";

declare global {
  interface Window {
    dt?: any;
  }
}

export default function WhatsAppWidget() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    if (!document.getElementById("dt")) {
      window.dt =
        window.dt ||
        function () {
          (window.dt.q = window.dt.q || []).push(arguments);
        };

      const script = document.createElement("script");
      script.id = "dt";
      script.src = "https://d3r49s2alut4u1.cloudfront.net/js/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
    
    window.dt("init", {
      crmWidgetId: "98c00c27-fe6f-4cc8-9e90-a36bd2546417",
      companyName: "Srijan IVF Centre",
      companyLogoUrl: "",
      phoneNumber: "919711748080",
    });
  }, []);

  return null;
}
