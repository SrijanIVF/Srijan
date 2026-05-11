import { useState } from "react";
import { Phone, ArrowRight, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-couple.jpg";
import LeadPopup from "@/components/LeadPopup";

const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {showPopup && <LeadPopup onClose={() => setShowPopup(false)} />}

      <section className="block lg:hidden relative overflow-hidden bg-white py-16">
        <div className="relative w-full h-[260px] overflow-hidden">
          <img
            src={heroImg}
            alt="Happy expecting couple"
            className="w-full h-full object-cover object-top"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />

            <span className="text-[11px] font-semibold text-primary whitespace-nowrap">
              Trusted by 10,000+ parents
            </span>
          </div>
        </div>

        <div className="px-4 -mt-4 relative z-10">
          <div className="bg-white rounded-[28px] shadow-xl border border-pink-100 p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-1 text-center">
              Get Free IVF Consultation
            </h2>

            <p className="text-xs md:text-sm text-muted-foreground mb-5 text-center">
              Our expert will call you within 15 minutes
            </p>

            <HeroForm mode="inline" />
          </div>
        </div>
      </section>

      <section
        id="home"
        className="hidden lg:block relative pt-24 pb-20 overflow-hidden gradient-hero"
      >
        <div
          className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
          aria-hidden
        />

        <div
          className="absolute top-40 -left-20 h-80 w-80 rounded-full bg-secondary/20 blur-3xl"
          aria-hidden
        />

        <div className="container mx-auto relative grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-soft text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              Trusted by 10,000+ happy parents
            </span>

            <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05]">
              Your Parenthood <br />
              Journey{" "}
              <span className="text-gradient not-italic">
                Starts Here
              </span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Compassionate, world-class fertility care backed by 20+ years of
              experience and an industry-leading 90% success rate. Let us walk
              this journey with you.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                variant="cta"
                size="xl"
                onClick={() => setShowPopup(true)}
              >
                Book Free Consultation
                <ArrowRight className="ml-1 h-5 w-5" />
              </Button>

              <Button variant="outline" size="xl" asChild>
                <a href="tel:+9197117 48080">
                  <Phone className="mr-1 h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="relative rounded-[2rem] overflow-hidden shadow-glow">
              <img
                src={heroImg}
                alt="Happy expecting couple"
                width={1536}
                height={1024}
                className="w-full h-[480px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-card p-4 flex items-center gap-3 animate-float">
              <div className="h-10 w-10 rounded-xl bg-primary-soft grid place-items-center">
                <Heart className="h-5 w-5 text-primary" />
              </div>

              <div>
                <div className="text-xs text-muted-foreground">
                  This year
                </div>

                <div className="font-semibold">
                  2,400+ Pregnancies
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

type HeroFormState = {
  name: string;
  phone: string;
  treatment: string;
};

type HeroFormErrors = Partial<Record<keyof HeroFormState, string>>;

const initialState: HeroFormState = {
  name: "",
  phone: "",
  treatment: "",
};

const ErrMsg = ({
  msg,
}: {
  msg?: string;
}): React.ReactElement | null =>
  msg ? (
    <p className="text-[11px] text-red-500 mt-0.5 ml-1">
      {msg}
    </p>
  ) : null;

interface FormFieldsProps {
  form: HeroFormState;
  errors: HeroFormErrors;
  loading: boolean;
  onName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPhone: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onTreatment: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const FormFields = ({
  form,
  errors,
  loading,
  onName,
  onPhone,
  onTreatment,
}: FormFieldsProps) => (
  <>
    <div className="mb-2">
      <input
        value={form.name}
        onChange={onName}
        placeholder="Your name"
        className={`w-full px-3 py-2 rounded-xl border bg-background text-sm outline-none transition ${
          errors.name
            ? "border-red-400 focus:border-red-400"
            : "border-input focus:border-primary"
        }`}
      />

      <ErrMsg msg={errors.name} />
    </div>

    <div className="mb-2">
      <input
        value={form.phone}
        onChange={onPhone}
        placeholder="Phone number"
        maxLength={10}
        inputMode="numeric"
        className={`w-full px-3 py-2 rounded-xl border bg-background text-sm outline-none transition ${
          errors.phone
            ? "border-red-400 focus:border-red-400"
            : "border-input focus:border-primary"
        }`}
      />

      <ErrMsg msg={errors.phone} />
    </div>

    <select
      value={form.treatment}
      onChange={onTreatment}
      aria-label="Select Treatment"
      className="w-full px-3 py-2 rounded-xl border border-input bg-background text-sm mb-3 outline-none focus:border-primary transition"
    >
      <option value="">Select Treatment</option>
      <option>IVF</option>
      <option>IUI</option>
      <option>Altruistic Surrogacy</option>
    </select>

    <Button
      variant="cta"
      size="sm"
      className="w-full"
      disabled={loading}
    >
      {loading ? "Submitting..." : "Request Callback"}
    </Button>
  </>
);

const HeroForm = ({
  mode,
}: {
  mode: "floating" | "inline";
}) => {
  const [form, setForm] =
    useState<HeroFormState>(initialState);

  const [errors, setErrors] =
    useState<HeroFormErrors>({});

  const [submitted, setSubmitted] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const handleNameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const val = e.target.value;

    if (/^[a-zA-Z\s]*$/.test(val)) {
      setForm((prev) => ({
        ...prev,
        name: val,
      }));

      setErrors((prev) => ({
        ...prev,
        name: "",
      }));
    }
  };

  const handlePhoneChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const val = e.target.value
      .replace(/\D/g, "")
      .slice(0, 10);

    setForm((prev) => ({
      ...prev,
      phone: val,
    }));

    setErrors((prev) => ({
      ...prev,
      phone: "",
    }));
  };

  const handleTreatmentChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      treatment: e.target.value,
    }));

    setErrors((prev) => ({
      ...prev,
      treatment: "",
    }));
  };

  const validate = (): HeroFormErrors => {
    const newErrors: HeroFormErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (form.name.trim().length < 2) {
      newErrors.name =
        "Name must be at least 2 characters";
    }

    if (!form.phone) {
      newErrors.phone = "Phone number is required";
    } else if (form.phone.length !== 10) {
      newErrors.phone =
        "Phone number must be exactly 10 digits";
    } else if (!/^[6789]/.test(form.phone)) {
      newErrors.phone =
        "Phone number must start with 6, 7, 8, or 9";
    }

    return newErrors;
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    const payload = {
      name: form.name,
      phone: form.phone,
      treatment: form.treatment,
    };

    setSubmitted(true);

    setForm(initialState);

    setErrors({});

    try {
      const formData = new FormData();

      formData.append("name", payload.name);
      formData.append("mobile", payload.phone);
      formData.append("source_name", "HeroForm");
      formData.append("city_name", "Delhi");

      if (payload.treatment) {
        formData.append("treatment", payload.treatment);
      }

      fetch(
        "https://api.srijanivfcentre.com/api/v1/lead/generate-lead/",
        {
          method: "POST",
          body: formData,
        }
      ).catch((err) => {
        console.log(err);
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const baseCardCls =
    "bg-card/95 backdrop-blur rounded-2xl shadow-card p-5 border border-border/50";

  const floatingCls = `absolute -bottom-16 lg:-bottom-12 right-0 lg:-right-6 w-72 ${baseCardCls}`;

  const inlineCls = `w-full ${baseCardCls}`;

  const wrapperCls =
    mode === "floating"
      ? floatingCls
      : inlineCls;

  if (submitted) {
    return (
      <div className={`${wrapperCls} text-center`}>
        <div className="text-green-600 font-semibold text-lg mb-2">
          Thank You!
        </div>

        <p className="text-sm text-muted-foreground mb-3">
          Our agent will contact you within{" "}
          <b>15 minutes</b>.
        </p>

        <a
          href="tel:+9197117 48080"
          className="block w-full bg-primary text-white py-2 rounded-xl text-sm font-medium hover:opacity-90 transition"
        >
          Call Now: 97117 48080
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={wrapperCls}
    >
      <FormFields
        form={form}
        errors={errors}
        loading={loading}
        onName={handleNameChange}
        onPhone={handlePhoneChange}
        onTreatment={handleTreatmentChange}
      />
    </form>
  );
};

export default Hero;