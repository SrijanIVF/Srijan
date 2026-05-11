import { useEffect, useRef, useState } from "react";
import { X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const STORAGE_KEY = "lead_submitted_time";
const ONE_DAY = 24 * 60 * 60 * 1000;
const RESHOW_DELAY = 15 * 1000; // 15 seconds

type FormState = { name: string; phone: string };
type FormErrors = Partial<Record<keyof FormState, string>>;

const LeadPopup = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormState>({ name: "", phone: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { toast } = useToast();

  const scheduleReshow = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setOpen(true), RESHOW_DELAY);
  };

  useEffect(() => {
    const now = Date.now();
    const submittedTime = Number(localStorage.getItem(STORAGE_KEY) || 0);

    if (submittedTime && now - submittedTime < ONE_DAY) return;

    const timer = setTimeout(() => setOpen(true), 3000);
    return () => {
      clearTimeout(timer);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleClose = () => {
    setOpen(false);
    setErrors({});
    scheduleReshow();
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
    } else if (!/^[789]/.test(form.phone)) {
      newErrors.phone = "Phone number must start with 7, 8, or 9";
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    if (timerRef.current) clearTimeout(timerRef.current);
    localStorage.setItem(STORAGE_KEY, Date.now().toString());

    toast({ title: "Submitted successfully 🎉" });

    setTimeout(() => {
      setOpen(false);
      setLoading(false);
      window.location.href = "/thank-you";
    }, 800);
  };

  const ErrMsg = ({ msg }: { msg?: string }) =>
    msg ? <p className="text-[11px] text-red-500 mt-0.5 ml-1">{msg}</p> : null;

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden">

        <button
          onClick={handleClose}
          title="Close popup"
          aria-label="Close popup"
          className="absolute top-4 right-4 h-9 w-9 rounded-full bg-gray-100 hover:bg-gray-200 grid place-items-center"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="p-6 text-white" style={{ backgroundColor: "#e1658a" }}>
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5" />
            <span className="text-xs uppercase font-semibold">Limited Slots</span>
          </div>
          <h3 className="mt-3 text-2xl font-semibold">Get a Free IVF Consultation</h3>
          <p className="text-sm opacity-90 mt-1">Speak with expert — No cost, No commitment.</p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="p-6 space-y-3">

          <div>
            <input
              value={form.name}
              onChange={handleNameChange}
              placeholder="Your name"
              className={`w-full px-4 py-3 rounded-xl border outline-none transition focus:ring-2
                ${errors.name ? "border-red-400 focus:ring-red-200" : "focus:ring-pink-200 focus:border-pink-400"}`}
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
              className={`w-full px-4 py-3 rounded-xl border outline-none transition focus:ring-2
                ${errors.phone ? "border-red-400 focus:ring-red-200" : "focus:ring-pink-200 focus:border-pink-400"}`}
            />
            <ErrMsg msg={errors.phone} />
          </div>

          <select aria-label="Select treatment" className="w-full px-4 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-400 transition">
            <option>Select treatment</option>
            <option>IVF</option>
            <option>IUI</option>
            <option>Altruistic Surrogacy</option>
          </select>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-[#e1658a] text-white hover:opacity-90"
          >
            {loading ? "Submitting..." : "Get Free Consultation"}
          </Button>

          <p className="text-xs text-center text-gray-400">100% confidential</p>
        </form>
      </div>
    </div>
  );
};
