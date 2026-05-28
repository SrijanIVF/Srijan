import { useEffect, useRef, useState } from "react";
import { X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { CitySearchSelect } from "./comman/CitySearch"; 

const STORAGE_KEY = "lead_submitted_time";
const ONE_DAY = 24 * 60 * 60 * 1000;
const RESHOW_DELAY = 30 * 60 * 1000;

type FormState = {
  name: string;
  phone: string;
  treatment: string;
  city_name: string; 
};

type FormErrors = Partial<Record<keyof FormState, string>>;

interface LeadPopupProps {
  onClose?: () => void;
}

const LeadPopup = ({ onClose }: LeadPopupProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    treatment: "",
    city_name: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { toast } = useToast();

  const scheduleReshow = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      setOpen(true);
    }, RESHOW_DELAY);
  };

  useEffect(() => {
    if (onClose) {
      setOpen(true);
      return;
    }

    const now = Date.now();
    const submittedTime = Number(localStorage.getItem(STORAGE_KEY) || 0);

    if (submittedTime && now - submittedTime < ONE_DAY) {
      return;
    }

    const timer = setTimeout(() => {
      setOpen(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [onClose]);

  const handleClose = () => {
    setOpen(false);
    setErrors({});
    if (onClose) {
      onClose();
    } else {
      scheduleReshow();
    }
  };

  const pathname = window.location.pathname
    .toLowerCase()
    .replace(/^\/|\/$/g, "");

  const isLandingPage =
    pathname === "lp" ||
    pathname.startsWith("lp/") ||
    pathname === "fb" ||
    pathname.startsWith("fb/") ||
    pathname.startsWith("fp/lp/");

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

    // if (isLandingPage && !form.city_name) {
    //   newErrors.city_name = "Please select your nearest city";
    // }

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
    let sourceName = "WebForm";
    if (pathname === "lp" || pathname.startsWith("lp/")) {
      sourceName = "Webform-Google-Ads";
    } else if (
      pathname === "fb" ||
      pathname.startsWith("fb/") ||
      pathname.startsWith("fp/lp/")
    ) {
      sourceName = "Webform-Facebook-Ads";
    }

    let fallbackCity = "India";
    if (pathname.startsWith("best-ivf-centre-")) {
      fallbackCity = pathname
        .replace("best-ivf-centre-", "")
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    }

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("mobile", form.phone);
      formData.append("source_name", sourceName);
      formData.append("city_name", form.city_name || fallbackCity);

      if (form.treatment) {
        formData.append("treatment", form.treatment);
      }

      await fetch(
        "https://api.srijanivfcentre.com/api/v1/lead/generate-lead/",
        {
          method: "POST",
          body: formData,
        },
      );
      localStorage.setItem(STORAGE_KEY, Date.now().toString());
      setOpen(false);

      toast({
        title: "Submitted successfully 🎉",
      });

      setTimeout(() => {
        if (onClose) {
          onClose();
        }
        window.location.href = "/thank-you";
      }, 500);
    } catch (error) {
      console.error("API error recording lead details:", error);
    } finally {
      setLoading(false);
    }
  };

  const ErrMsg = ({ msg }: { msg?: string }): React.ReactElement | null =>
    msg ? <p className="text-[11px] text-red-500 mt-0.5 ml-1">{msg}</p> : null;

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden">
        <button
          onClick={handleClose}
          aria-label="Close"
          className="absolute top-4 right-4 h-9 w-9 rounded-full bg-gray-100 hover:bg-gray-200 grid place-items-center"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="p-6 text-white" style={{ backgroundColor: "#e1658a" }}>
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

        <form onSubmit={handleSubmit} noValidate className="p-6 space-y-3">
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

          <div>
            <select
              value={form.treatment}
              onChange={handleTreatmentChange}
              aria-label="Select treatment"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-400 transition bg-white"
            >
              <option value="">Select treatment</option>
              <option value="IVF">IVF</option>
              <option value="IUI">IUI</option>
              <option value="Altruistic Surrogacy">Altruistic Surrogacy</option>
            </select>
          </div>

          {isLandingPage && (
            <div>
              <CitySearchSelect
                value={form.city_name}
                error={errors.city_name}
                onChange={(selectedCityName) => {
                  setForm((prev) => ({ ...prev, city_name: selectedCityName }));
                  if (errors.city_name) {
                    setErrors((prev) => ({ ...prev, city_name: "" }));
                  }
                }}
              />
              {/* <ErrMsg msg={errors.city_name} /> */}
            </div>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-[#e1658a] text-white hover:opacity-90 h-12 rounded-xl text-sm font-semibold shadow-xs"
          >
            {loading ? "Submitting..." : "Get Free Consultation"}
          </Button>

          <p className="text-xs text-center text-gray-400">100% confidential</p>
        </form>
      </div>
    </div>
  );
};

export default LeadPopup;
