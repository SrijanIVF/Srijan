import { Award, Users, Baby, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom"; //

const stats = [
  { icon: Award, value: "23+", label: "Years Experience" },
  { icon: Stethoscope, value: "90%", label: "Success Rate" },
  { icon: Baby, value: "18,000+", label: "IVF Babies Delivered" },
  { icon: Users, value: "50+", label: "Expert Doctors" },
];

const About = () => (
  <section id="about" className="py-10 gradient-soft">
    <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <span className="text-sm uppercase tracking-[0.2em] text-primary font-semibold">
          About Srijan IVF
        </span>

        <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold leading-tight">
          Srijan IVF:{" "}
          <span className="text-gradient not-italic">
            Your Trusted Partner for Fertility in Delhi
          </span>
        </h2>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          Delhi couples seeking to build their families, find hope at Srijan IVF.
          We are a leading fertility clinic offering advanced procedures like IVF,
          IUI, ICSI, Laparoscopy, Hysteroscopy, TESA/PESA, and various other
          treatment options tailored to your individual needs.
        </p>

        <Link to="/about-us">
          <button className="mt-6 px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-md">
            More Info →
          </button>
        </Link>
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
            <div className="font-display text-3xl font-bold">{s.value}</div>
            <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;