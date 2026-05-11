import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const locations = [
  {
    title: "Delhi",
    desc: "Shop No.2, Khasra No. 585, kalyan Vyas, 202/1, Khichripur Rd, Mayur Vihar Phase I, Kalyanvas, Kalyan Puri, Delhi, 110091.",
  },
  {
    title: "Indirapuram",
    desc: "Shop No.2, Khasra No. 585, kalyan Vyas, 202/1, Khichripur Rd, Mayur Vihar Phase I, Kalyanvas, Kalyan Puri, Delhi, 110091.",
  },
  {
    title: "Varanasi",
    desc: "Heiwel Hospital, National Highway 56, Airport Road, near Sant Atulanand, Gilat Bazar, Chotta Chuppepur, Varanasi, Uttar Pradesh 221002.",
  },
  {
    title: "Srinagar",
    desc: "The Kidney and Urological Diseases Research Centre, Sonwar Bagh, opposite Amar Singh Club, Srinagar 190001.",
  },
];

const today = new Date().toISOString().split("T")[0];

type FormState = {
  name: string;
  phone: string;
  email: string;
  treatment: string;
  doctor: string;
  date: string;
  message: string;
};

type ErrorState = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  name: "",
  phone: "",
  email: "",
  treatment: "",
  doctor: "",
  date: "",
  message: "",
};

const Appointment = () => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<ErrorState>({});
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setSuccess(false);
  };

  const validate = (): ErrorState => {
    const newErrors: ErrorState = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]{2,}$/.test(form.name.trim())) {
      newErrors.name =
        "Name must contain letters only (min 2 characters)";
    }

    const rawPhone = form.phone
      .replace(/[\s\-\+]/g, "")
      .replace(/^91/, "");

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(rawPhone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    } else if (!/^[6789]/.test(rawPhone)) {
      newErrors.phone =
        "Phone number must start with 6, 7, 8, or 9";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    ) {
      newErrors.email =
        "Please enter a valid email (e.g. you@email.com)";
    }

    if (!form.date) {
      newErrors.date = "Date is required";
    } else if (form.date < today) {
      newErrors.date =
        "Please select today's or a future date";
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

    try {
      const formData = new FormData();

      formData.append("name", form.name);
      formData.append("mobile", form.phone);
      formData.append("source_name", "WebForm");
      formData.append("city_name", "Delhi");

      const response = await fetch(
        "https://api.srijanivfcentre.com/api/v1/lead/generate-lead/",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      console.log(data);

      if (response.ok) {
        setSuccess(true);

        setForm(initialForm);

        setErrors({});
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  };

  const inputCls = (err?: string) =>
    `w-full border rounded-xl px-4 py-2.5 text-sm text-gray-700 outline-none transition ${err
      ? "border-red-400 focus:border-red-400"
      : "border-gray-200 focus:border-pink-400"
    }`;

  return (
    <section
      id="appointment"
      className="py-16 md:py-24 bg-gradient-to-br from-pink-50 to-rose-50"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-pink-600">
            Book Appointment
          </h2>

          <p className="text-gray-400 mt-3 text-sm md:text-base">
            We're here for you — reach out at any of our centres
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {locations.map((loc) => (
                <div
                  key={loc.title}
                  className="bg-white border border-pink-100 rounded-2xl p-4 md:p-5 flex flex-col gap-2 hover:shadow-md hover:border-pink-300 transition-all duration-200"
                >
                  <div className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-pink-50 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-pink-500" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm">
                      {loc.title}
                    </h3>

                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                      {loc.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              <div className="bg-white border border-pink-100 rounded-2xl p-4 md:p-5 flex gap-3 items-center hover:shadow-md hover:border-pink-300 transition-all duration-200">
                <div className="w-9 h-9 rounded-xl bg-pink-50 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-pink-500" />
                </div>

                <div>
                  <p className="text-xs text-gray-400 font-medium">
                    Call Us
                  </p>

                  <a
                    href="tel:+9197117 48080"
                    className="text-sm font-semibold text-pink-600 mt-0.5 block hover:underline"
                  >
                    +91-97117 48080
                  </a>
                </div>
              </div>

              <div className="bg-white border border-pink-100 rounded-2xl p-4 md:p-5 flex gap-3 items-center hover:shadow-md hover:border-pink-300 transition-all duration-200">
                <div className="w-9 h-9 rounded-xl bg-pink-50 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-pink-500" />
                </div>

                <div>
                  <p className="text-xs text-gray-400 font-medium">
                    Email Us
                  </p>

                  <p className="text-sm font-semibold text-pink-600 mt-0.5 break-all">
                    info@srijanivfcentre.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-pink-100 rounded-3xl p-5 md:p-8 shadow-lg flex flex-col">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-5 md:mb-6">
              Fill in your details
            </h3>

            {success && (
              <div className="mb-4 px-4 py-3 bg-green-50 border border-green-200 text-green-700 rounded-xl text-sm font-medium">
                Appointment booked successfully! We'll contact you soon.
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-3 md:gap-4 flex-1"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="name"
                    className="text-xs text-gray-400 font-medium"
                  >
                    Name *
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={(e) => {
                      const val = e.target.value;

                      if (/^[a-zA-Z\s]*$/.test(val)) {
                        handleChange(e);
                      }
                    }}
                    placeholder="Your name"
                    className={inputCls(errors.name)}
                  />

                  {errors.name && (
                    <p className="text-xs text-red-500">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="phone"
                    className="text-xs text-gray-400 font-medium"
                  >
                    Phone *
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={(e) => {
                      const val = e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 10);

                      handleChange({
                        ...e,
                        target: {
                          ...e.target,
                          name: "phone",
                          value: val,
                        },
                      });
                    }}
                    placeholder="XXXXXXXXXX"
                    inputMode="numeric"
                    maxLength={10}
                    className={inputCls(errors.phone)}
                  />

                  {errors.phone && (
                    <p className="text-xs text-red-500">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="email"
                    className="text-xs text-gray-400 font-medium"
                  >
                    Email *
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    className={inputCls(errors.email)}
                  />

                  {errors.email && (
                    <p className="text-xs text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="treatment"
                    className="text-xs text-gray-400 font-medium"
                  >
                    Treatment
                  </label>

                  <select
                    id="treatment"
                    name="treatment"
                    value={form.treatment}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-500 outline-none focus:border-pink-400 transition bg-white"
                  >
                    <option value="">-- Choose Treatment --</option>
                    <option>IVF</option>
                    <option>IUI</option>
                    <option>Altruistic Surrogacy</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="doctor"
                    className="text-xs text-gray-400 font-medium"
                  >
                    Doctor
                  </label>

                  <select
                    id="doctor"
                    name="doctor"
                    value={form.doctor}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-500 outline-none focus:border-pink-400 transition bg-white"
                  >
                    <option value="">-- Choose Doctor --</option>
                    <option>Dr. Pallavi Singh</option>
                    <option>Dr. Santosh Kumar Arjun</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="date"
                    className="text-xs text-gray-400 font-medium"
                  >
                    Date *
                  </label>

                  <input
                    id="date"
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    min={today}
                    className={inputCls(errors.date)}
                  />

                  {errors.date && (
                    <p className="text-xs text-red-500">
                      {errors.date}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-1 flex-1">
                <label
                  htmlFor="message"
                  className="text-xs text-gray-400 font-medium"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Any additional information..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-pink-400 transition resize-none min-h-[80px] flex-1"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-xl transition shadow-md shadow-pink-100 text-sm md:text-base"
              >
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;