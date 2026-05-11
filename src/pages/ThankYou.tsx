import { CheckCircle2, ArrowLeft, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ThankYou = () => (
  <main className="min-h-screen gradient-hero grid place-items-center p-6">
    <div className="bg-card rounded-[2rem] shadow-glow p-10 md:p-14 max-w-xl text-center animate-scale-in">
      <div className="mx-auto h-20 w-20 rounded-full gradient-primary grid place-items-center shadow-soft">
        <CheckCircle2 className="h-10 w-10 text-primary-foreground" />
      </div>
      <h1 className="mt-6 font-display text-4xl md:text-5xl font-semibold">Thank you!</h1>
      <p className="mt-4 text-muted-foreground">
        Your consultation request has been received. One of our care coordinators will call you within the next <span className="text-primary font-semibold">15 minutes</span> to confirm your appointment.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button variant="cta" size="lg" asChild>
          <a href="tel:+9197117 48080"><Phone className="mr-2 h-4 w-4" /> Call Us Now</a>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link to="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Home</Link>
        </Button>
      </div>
    </div>
  </main>
);

export default ThankYou;
