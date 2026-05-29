import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import ThankYou from "./pages/ThankYou.tsx";
import About from "./pages/about-us.tsx";
import PallaviSingh from "./pages/doctor/pallavi-singh.tsx";
import Santoshkumar from "./pages/doctor/santosh-kumar.tsx";
import Centre from "./pages/centre.tsx";
import Testimonials from "./pages/testimonials.tsx";
import Contact from "./pages/contact-us.tsx";
import Appointment from "./components/Appointment.tsx";
import BlogsPage from "./pages/Blogspage.tsx";
import BlogDetailPage from "./pages/Blogdetailpage.tsx";
import SuccessStoriesPage from "./pages/success-stories-testimonials.tsx";
import IVF from "./pages/treatments/ivf-treatment.tsx";
import IUI from "./pages/treatments/iui-treatment.tsx";
import ICSI from "./pages/treatments/icsi-treatment.tsx";
import HysteroscopyPage from "./pages/treatments/hysteroscopy.tsx";
import MaleInfertilityPage from "./pages/treatments/male-infertility.tsx";
import TesaPesaPage from "./pages/treatments/tesa-pesa.tsx";
import PICSI from "./pages/treatments/picsi-treatment.tsx";
import PrivacyPolicy from "./pages/privacy-policy.tsx";
import LAH from "./pages/treatments/lah-treatment.tsx";
import ERA from "./pages/treatments/era-treatment.tsx";
import SemenAnalysis from "./pages/treatments/semen-analysis.tsx";
import BlastocystCulture from "./pages/treatments/blastocyst-culture.tsx";
import LaparoscopicGynecology from "./pages/treatments/laparoscopic-gynecology.tsx";
import GeneralGynecology from "./pages/treatments/general-gynecology.tsx";
import RoboticGynecology from "./pages/treatments/robotic-gynecology.tsx";
import AdolescentCare from "./pages/treatments/adolescent-care.tsx";
import MenopauseTreatment from "./pages/treatments/menopause-treatment.tsx";
import PcosTreatment from "./pages/treatments/pcos-treatment.tsx";
import EndometriosisTreatment from "./pages/treatments/endometriosis-treatment.tsx";
import CaesareanSection from "./pages/treatments/caesarean-section.tsx";
import HighRiskPregnancy from "./pages/treatments/high-risk-pregnancy.tsx"
import LowRiskPregnancy from "./pages/treatments/low-risk-pregnancy.tsx";
import NormalDelivery from "./pages/treatments/normal-delivery.tsx";
import BestIvfCentreDelhi from "./pages/best-ivf-centre-delhi.tsx";
import BestIvfCentreIndirapuram from "./pages/best-ivf-centre-indirapuram.tsx";
import Indexlp from "./pages/lp/Index.tsx";
import Indexfb from "./pages/fb/lp/Index.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/about-us" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/doctor/pallavi-singh" element={<PallaviSingh />} />
          <Route path="/doctor/santosh-kumar" element={<Santoshkumar />} />
          <Route path="/centre" element={<Centre/>} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact-us" element={<Contact/>} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/Blogspage" element={<BlogsPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/success-stories-testimonials" element={<SuccessStoriesPage />} />
          <Route path="/ivf-treatment" element={<IVF />} />
          <Route path="/iui-treatment" element={<IUI />} />
          <Route path="/icsi-treatment" element={<ICSI />} />
          <Route path="/hysteroscopy" element={<HysteroscopyPage />} /> 
          <Route path="/male-infertility" element={<MaleInfertilityPage />} />
          <Route path="/tesa-pesa" element={<TesaPesaPage />} />
          <Route path="/picsi-treatment" element={<PICSI />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/lah-treatment" element={<LAH />} />
          <Route path="/era-treatment" element={<ERA />} />
          <Route path="/semen-analysis" element={<SemenAnalysis />} />
          <Route path="/blastocyst-culture" element={<BlastocystCulture />} />
          <Route path="/laparoscopic-gynecology" element={<LaparoscopicGynecology />} />
          <Route path="/general-gynecology" element={<GeneralGynecology />} />
          <Route path="/robotic-gynecology" element={<RoboticGynecology />} />
          <Route path="/adolescent-care" element={<AdolescentCare />} />
          <Route path="/menopause-treatment" element={<MenopauseTreatment />} />
          <Route path="/pcos-treatment" element={<PcosTreatment />} />
          <Route path="/endometriosis-treatment" element={<EndometriosisTreatment />} />
          <Route path="/caesarean-section" element={<CaesareanSection />} />
          <Route path="/high-risk-pregnancy" element={<HighRiskPregnancy/>} />
          <Route path="/low-risk-pregnancy" element={<LowRiskPregnancy/>} />
          <Route path="/normal-delivery" element={<NormalDelivery />} />
          <Route path="/best-ivf-centre-delhi" element={<BestIvfCentreDelhi />} />
          <Route path="/best-ivf-centre-indirapuram" element={<BestIvfCentreIndirapuram />} />
          <Route path="/lp/best-ivf-centre-india" element={<Indexlp />} />
          <Route path="/fb/lp/best-ivf-centre-india" element={<Indexfb />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
