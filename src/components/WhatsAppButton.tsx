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

    // IMPORTANT: Script id MUST be "dt" (not anything else)
    if (!document.getElementById("dt")) {
      // Define the queue function exactly as the widget expects
      window.dt =
        window.dt ||
        function () {
          (window.dt.q = window.dt.q || []).push(arguments);
        };

      // Load the script with id="dt"
      const script = document.createElement("script");
      script.id = "dt";
      script.src = "https://d3r49s2alut4u1.cloudfront.net/js/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // Queue the init command (safe – window.dt is now a queue function)
    window.dt("init", {
      crmWidgetId: "98c00c27-fe6f-4cc8-9e90-a36bd2546417",
      companyName: "Srijan IVF Centre",
      companyLogoUrl: "",
      phoneNumber: "919711748080",
    });
  }, []);

  return null;
}
