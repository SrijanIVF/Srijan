import { useEffect, useRef, useState } from "react";
import {
  X,
  Heart,
  CheckCircle2,
  Phone,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const STORAGE_KEY = "lead_submitted_time";

const CITIES = [
  "Delhi", "Noida", "Ghaziabad", "Gurgaon", "Faridabad",
  "Meerut", "Lucknow", "Kanpur", "Varanasi", "Patna",
  "Ranchi", "Jaipur", "Mumbai", "Pune", "Bangalore",
  "Hyderabad", "Chennai", "Kolkata", "Ahmedabad", "Bhopal", "Indore",
];

const ONE_DAY = 24 * 60 * 60 * 1000;
const RESHOW_DELAY = 30 * 60 * 1000;

type FormState = {
  name: string;
  phone: string;
  treatment: string;
  city: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

interface LeadPopupProps {
  onClose?: () => void;
}

const LeadPopup = ({ onClose }: LeadPopupProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    treatment: "",
    city: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  // City search state
  const [cityInput, setCityInput] = useState("");        // what user types
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);

  const cityWrapperRef = useRef<HTMLDivElement>(null);
  const cityInputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { toast } = useToast();

  const pathname = window.location.pathname
    .toLowerCase()
    .replace(/^\/|\/$/g, "");

  const isLandingPage =
    pathname.includes("lp") || pathname.includes("fb/lp");

  let phoneNumber = "9711748080";
  if (pathname.includes("fb/lp")) {
    phoneNumber = "9711675252";
  } else if (pathname.includes("lp")) {
    phoneNumber = "9711678282";
  }

  const scheduleReshow = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setOpen(true), RESHOW_DELAY);
  };

  useEffect(() => {
    if (onClose) { setOpen(true); return; }

    const now = Date.now();
    const submittedTime = Number(localStorage.getItem(STORAGE_KEY) || 0);
    if (submittedTime && now - submittedTime < ONE_DAY) return;

    const timer = setTimeout(() => setOpen(true), 3000);
    return () => {
      clearTimeout(timer);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [onClose]);

  // Close dropdown when clicking outside city wrapper
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        cityWrapperRef.current &&
        !cityWrapperRef.current.contains(e.target as Node)
      ) {
        setCityDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClose = () => {
    setOpen(false);
    setErrors({});
    setCityDropdownOpen(false);
    if (onClose) onClose();
    else scheduleReshow();
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (/^[a-zA-Z\s]*$/.test(val)) {
      setForm((prev) => ({ ...prev, name: val }));
      setErrors((prev) => ({ ...prev, name: "" }));
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
    setForm((prev) => ({ ...prev, phone: val }));
    setErrors((prev) => ({ ...prev, phone: "" }));
  };

  const handleTreatmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, treatment: e.target.value }));
  };

  // When user types in city input — show dropdown with filtered results
  const handleCityInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCityInput(val);
    setForm((prev) => ({ ...prev, city: "" })); // clear selected city until picked from list
    setErrors((prev) => ({ ...prev, city: "" }));
    setCityDropdownOpen(true);
  };

  // When user picks a city from dropdown
  const selectCity = (city: string) => {
    setForm((prev) => ({ ...prev, city }));
    setCityInput(city);
    setErrors((prev) => ({ ...prev, city: "" }));
    setCityDropdownOpen(false);
  };

  const filteredCities = CITIES.filter((c) =>
    c.toLowerCase().includes(cityInput.toLowerCase())
  );

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (form.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!form.phone) {
      newErrors.phone = "Phone number is required";
    } else if (form.phone.length !== 10) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    } else if (!/^[6789]/.test(form.phone)) {
      newErrors.phone = "Phone number must start with 6, 7, 8, or 9";
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    localStorage.setItem(STORAGE_KEY, Date.now().toString());

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("mobile", form.phone);

      let sourceName = "Website-Leadpopup";
      if (pathname.startsWith("fb/lp")) {
        sourceName = "Webform-Facebook-Ads";
      } else if (pathname.startsWith("lp") || pathname.includes("/lp/")) {
        sourceName = "Webform-Google-Ads";
      }
      formData.append("source_name", sourceName);

      let cityName = "India";
      if (isLandingPage) {
        cityName = form.city.trim() || cityInput.trim() || "India";
      } else if (pathname.startsWith("best-ivf-centre-")) {
        cityName = pathname
          .replace("best-ivf-centre-", "")
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
      } else if (form.city.trim() || cityInput.trim()) {
        cityName = form.city.trim() || cityInput.trim();
      }
      formData.append("city_name", cityName);

      if (form.treatment) {
        formData.append("treatment", form.treatment);
      }

      if (isLandingPage) {
        setSubmitted(true);
      }

      toast({ title: "Submitted successfully 🎉" });

      fetch("https://api.srijanivfcentre.com/api/v1/lead/generate-lead/", {
        method: "POST",
        body: formData,
      }).catch((err) => console.log(err));

      if (!isLandingPage) {
        setTimeout(() => {
          if (onClose) onClose();
          window.location.href = "/thank-you";
        }, 500);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const ErrMsg = ({ msg }: { msg?: string }): React.ReactElement | null =>
    msg ? (
      <p className="text-[11px] text-red-500 mt-0.5 ml-1">{msg}</p>
    ) : null;

  if (submitted) {
    return (
      <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 backdrop-blur-sm p-4">
        <div className="relative w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden p-8 text-center">
          <button
            onClick={() => {
              setSubmitted(false);
              setOpen(false);
              if (onClose) onClose();
            }}
            aria-label="Close"
            className="absolute top-4 right-4 h-9 w-9 rounded-full bg-gray-100 hover:bg-gray-200 grid place-items-center"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="mx-auto h-20 w-20 rounded-full bg-[#e1658a] grid place-items-center">
            <CheckCircle2 className="h-10 w-10 text-white" />
          </div>

          <h2 className="mt-6 text-3xl font-semibold">Thank You!</h2>

          <p className="mt-4 text-gray-600">
            Your consultation request has been received. One of our care
            coordinators will call you within the next 15 minutes.
          </p>

          <a
            href={`tel:+91${phoneNumber}`}
            className="mt-6 inline-flex items-center justify-center gap-2 bg-[#e1658a] text-white px-6 py-3 rounded-xl font-medium"
          >
            <Phone className="h-4 w-4" />
            Call Us Now
          </a>
        </div>
      </div>
    );
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 backdrop-blur-sm p-4">
      {/* overflow-visible so city dropdown can escape the card boundary */}
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-xl overflow-visible">
        <button
          onClick={handleClose}
          aria-label="Close"
          className="absolute top-4 right-4 h-9 w-9 rounded-full bg-gray-100 hover:bg-gray-200 grid place-items-center z-10"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Pink header — rounded top manually since parent is overflow-visible */}
        <div
          className="p-6 text-white rounded-t-3xl"
          style={{ backgroundColor: "#e1658a" }}
        >
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5" />
            <span className="text-xs uppercase font-semibold">
              Limited Slots
            </span>
          </div>
          <h3 className="mt-3 text-2xl font-semibold">
            Get a Free IVF Consultation
          </h3>
          <p className="text-sm opacity-90 mt-1">
            Speak with expert — No cost, No commitment.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="p-6 space-y-3 rounded-b-3xl bg-white"
        >
          {/* Name */}
          <div>
            <input
              value={form.name}
              onChange={handleNameChange}
              placeholder="Your name"
              className={`w-full px-4 py-3 rounded-xl border outline-none transition focus:ring-2 ${
                errors.name
                  ? "border-red-400 focus:ring-red-200"
                  : "focus:ring-pink-200 focus:border-pink-400"
              }`}
            />
            <ErrMsg msg={errors.name} />
          </div>

          {/* Phone */}
          <div>
            <input
              value={form.phone}
              onChange={handlePhoneChange}
              placeholder="Phone number"
              inputMode="numeric"
              maxLength={10}
              className={`w-full px-4 py-3 rounded-xl border outline-none transition focus:ring-2 ${
                errors.phone
                  ? "border-red-400 focus:ring-red-200"
                  : "focus:ring-pink-200 focus:border-pink-400"
              }`}
            />
            <ErrMsg msg={errors.phone} />
          </div>

          {/* Treatment — only on normal pages (NOT on /lp or /fb/lp) */}
          {!isLandingPage && (
            <select
              value={form.treatment}
              onChange={handleTreatmentChange}
              aria-label="Select treatment"
              className="w-full px-4 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-400 transition"
            >
              <option value="">Select treatment</option>
              <option>IVF</option>
              <option>IUI</option>
              <option>Altruistic Surrogacy</option>
            </select>
          )}

          {/* City — only on landing pages (/lp and /fb/lp) */}
          {isLandingPage && (
          <div ref={cityWrapperRef} className="relative">
            <input
              ref={cityInputRef}
              value={cityInput}
              onChange={handleCityInputChange}
              onFocus={() => setCityDropdownOpen(true)}
              placeholder="Enter your city"
              autoComplete="off"
              className={`w-full px-4 py-3 rounded-xl border outline-none transition focus:ring-2 ${
                errors.city
                  ? "border-red-400 focus:ring-red-200"
                  : cityDropdownOpen
                  ? "border-pink-400 ring-2 ring-pink-200"
                  : "focus:ring-pink-200 focus:border-pink-400"
              }`}
            />
            <ErrMsg msg={errors.city} />

            {/* Dropdown list */}
            {cityDropdownOpen && filteredCities.length > 0 && (
              <ul className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-xl overflow-y-auto z-[9999]"
                style={{ maxHeight: "180px" }}
              >
                {filteredCities.map((city) => (
                  <li
                    key={city}
                    onMouseDown={(e) => {
                      e.preventDefault(); // prevent input blur before selection
                      selectCity(city);
                    }}
                    className={`px-4 py-2.5 text-sm cursor-pointer transition-colors hover:bg-pink-50 hover:text-[#e1658a] ${
                      form.city === city
                        ? "bg-pink-50 text-[#e1658a] font-medium"
                        : "text-gray-700"
                    }`}
                  >
                    {city}
                  </li>
                ))}
              </ul>
            )}

            {/* No result state */}
            {cityDropdownOpen && cityInput.length > 0 && filteredCities.length === 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-xl px-4 py-3 text-sm text-gray-400 z-[9999]">
                No city found
              </div>
            )}
          </div>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-[#e1658a] text-white hover:opacity-90"
          >
            {loading ? "Submitting..." : "Get Free Consultation"}
          </Button>

          <p className="text-xs text-center text-gray-400">
            100% confidential
          </p>
        </form>
      </div>
    </div>
  );
};

export default LeadPopup;