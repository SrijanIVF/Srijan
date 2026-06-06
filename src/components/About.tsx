import { Award, Users, Baby, Stethoscope } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const stats = [
  { icon: Award, value: "23+", label: "Years Experience" },
  { icon: Stethoscope, value: "90%", label: "Success Rate" },
  { icon: Baby, value: "18,000+", label: "IVF Babies Delivered" },
  { icon: Users, value: "50+", label: "Expert Doctors" },
];

type AboutProps = {
  heading?: string;
  description?: string;
};

const About = ({
  heading = "Srijan IVF Centre: Your Trusted Partner for Fertility Treatment in India",

  description = `For couples who are dreaming of parenthood, Srijan IVF offers personalized and advanced fertility care designed to support every step of your IVF journey. We are recognized for trusted and personalized fertility treatment in India. Our experienced specialist doctorsprovide the advanced procedures including IVF, IUI, ICSI, Laparoscopy, Hysteroscopy, TESA/PESA, and other customized fertility solutions tailored to your unique medical needs.

At Srijan IVF, we combine medical excellence with emotional support to help you move closer to the joy of starting or growing your family.`,
}: AboutProps) => {
  const location = useLocation();

  const pathname = location.pathname
    .toLowerCase()
    .replace(/^\/|\/$/g, "");

  const isLandingPage =
    pathname.startsWith("lp") ||
    pathname.startsWith("fb/lp") ||
    pathname.includes("/lp/");

  return (
    <section id="about" className="py-10 gradient-soft">
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-sm uppercase tracking-[0.2em] text-primary font-semibold">
            About Srijan IVF
          </span>

          <h1 className="mt-4 font-display text-4xl md:text-5xl font-semibold leading-tight">
            {heading}
          </h1>

          <p className="mt-6 text-muted-foreground leading-relaxed whitespace-pre-line">
            {description}
          </p>

          {!isLandingPage && (
            <Link to="/about-us">
              <button className="mt-6 px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-md">
                More Info →
              </button>
            </Link>
          )}
        </div>

        <div className="grid grid-cols-2 gap-5">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="bg-card rounded-3xl p-6 shadow-soft hover:shadow-card transition-all hover:-translate-y-1"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="h-12 w-12 rounded-2xl gradient-primary grid place-items-center mb-4">
                <s.icon className="h-6 w-6 text-primary-foreground" />
              </div>

              <div className="font-display text-3xl font-bold">
                {s.value}
              </div>

              <div className="text-sm text-muted-foreground mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;