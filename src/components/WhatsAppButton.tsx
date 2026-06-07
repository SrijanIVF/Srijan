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

    // Ensure window.dt is a queue function before calling init
    if (typeof window.dt !== "function") {
      window.dt = function () {
        (window.dt.q = window.dt.q || []).push(arguments);
      } as any;
    }

    window.dt("init", {
      crmWidgetId: "98c00c27-fe6f-4cc8-9e90-a36bd2546417",
      companyName: "Srijan IVF Centre",
      companyLogoUrl: "",
      phoneNumber: "919711748080",
    });

    if (!document.getElementById("dt-widget-script")) {
      const script = document.createElement("script");
      script.id = "dt-widget-script";
      script.src = "https://d3r49s2alut4u1.cloudfront.net/js/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return null;
}
