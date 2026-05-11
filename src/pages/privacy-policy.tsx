import aboutImg from "@/assets/About-us-banner.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
//import Callus from "@/components/callbtn";
import WhatsAppButton from "@/components/WhatsAppButton";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center">
        <img
          src={aboutImg}
          alt="Privacy Policy"
          className="absolute inset-0 w-full h-full object-cover brightness-40"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/40 to-black/50" />

        <div className="relative z-10 text-white px-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-14 md:py-20 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto">

          <p className="text-xs font-semibold tracking-widest uppercase text-pink-400 mb-3">
            Privacy Policy
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">
            Introduction
          </h2>

          <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />

          <p className="text-gray-600 text-sm leading-relaxed mb-5">
            This Privacy Policy describes how Srijan Fertility IVF Clinic
            Private Limits (“we”, “us”, or “our”) collects, uses, and
            discloses your personal information when you use our services.
            It also explains your choices regarding your personal information.
          </p>

          <h3 className="text-lg font-bold text-pink-400 mb-4">
            Definitions
          </h3>

          <ul className="list-disc pl-5 space-y-4">
            <li className="text-gray-600 text-sm leading-relaxed">
              <span className="font-bold text-gray-800">
                Information:
              </span>{" "}
              The data we collect about you, including personal information
              and sensitive personal data.
            </li>

            <li className="text-gray-600 text-sm leading-relaxed">
              <span className="font-bold text-gray-800">
                Personal Information:
              </span>{" "}
              Information that can be used to identify you, such as your
              name, contact details, medical history, and treatment
              information.
            </li>

            <li className="text-gray-600 text-sm leading-relaxed">
              <span className="font-bold text-gray-800">
                Sensitive Personal Data or Information (SPDI):
              </span>{" "}
              A specific category of personal information that requires
              stricter protection under applicable laws.
            </li>

            <li className="text-gray-600 text-sm leading-relaxed">
              <span className="font-bold text-gray-800">
                Authorized Representative:
              </span>{" "}
              A relative, guardian, caretaker, or someone you authorize to
              act on your behalf.
            </li>
          </ul>
        </div>
      </section>

      {/* Information Collected */}
      <section className="py-10 md:py-14 px-4 md:px-10 bg-pink-50">
        <div className="max-w-6xl mx-auto">

          <p className="text-xs font-semibold tracking-widest uppercase text-pink-400 mb-3">
            Information Collection
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">
            Types of Information Collected
          </h2>

          <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />

          <p className="text-gray-600 text-sm leading-relaxed">
            We collect various types of information about you when you use
            our Services. Some of this information may be classified as
            personal information, and we will only collect, process, use,
            transfer, or disclose it for the purposes outlined in this
            Privacy Policy.
          </p>

        </div>
      </section>

      {/* Use of Information */}
      <section className="py-14 md:py-20 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto">

          <p className="text-xs font-semibold tracking-widest uppercase text-pink-400 mb-3">
            Use of Information
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">
            How We Use Information
          </h2>

          <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />

          <p className="text-gray-600 text-sm leading-relaxed mb-5">
            We use your information to provide the Services, including:
          </p>

          <ul className="list-disc pl-5 space-y-3 mb-6">
            <li className="text-gray-600 text-sm leading-relaxed">
              Assessing your eligibility for treatment.
            </li>

            <li className="text-gray-600 text-sm leading-relaxed">
              Providing fertility and in-vitro fertilization treatment.
            </li>

            <li className="text-gray-600 text-sm leading-relaxed">
              Communicating with you about your treatment.
            </li>

            <li className="text-gray-600 text-sm leading-relaxed">
              Sending administrative information.
            </li>
          </ul>

          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            We may also use your information for:
          </p>

          <ul className="list-disc pl-5 space-y-3">
            <li className="text-gray-600 text-sm leading-relaxed">
              Improving our Services.
            </li>

            <li className="text-gray-600 text-sm leading-relaxed">
              Complying with legal and regulatory requirements.
            </li>
          </ul>

        </div>
      </section>

      {/* Sharing + Choices */}
      <section className="py-10 md:py-14 px-4 md:px-10 bg-pink-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">

          {/* Sharing */}
          <div className="bg-white border border-pink-100 rounded-3xl p-8 hover:shadow-lg transition-all duration-300">

            <p className="text-xs font-semibold tracking-widest uppercase text-pink-400 mb-3">
              Sharing Information
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-pink-400 mb-2">
              Sharing of Information
            </h2>

            <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />

            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              We may share your information with third parties, such as:
            </p>

            <ul className="list-disc pl-5 space-y-3 mb-5">
              <li className="text-gray-500 text-sm leading-relaxed">
                Healthcare providers involved in your treatment.
              </li>

              <li className="text-gray-500 text-sm leading-relaxed">
                Laboratories that process your samples.
              </li>

              <li className="text-gray-500 text-sm leading-relaxed">
                Government authorities, as required by law.
              </li>
            </ul>

            <p className="text-gray-500 text-sm leading-relaxed">
              We will only share your information with authorized parties
              who agree to protect your privacy.
            </p>
          </div>

          {/* Choices */}
          <div className="bg-white border border-pink-100 rounded-3xl p-8 hover:shadow-lg transition-all duration-300">

            <p className="text-xs font-semibold tracking-widest uppercase text-pink-400 mb-3">
              Your Rights
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-pink-400 mb-2">
              Your Choices
            </h2>

            <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />

            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              You have choices regarding your personal information:
            </p>

            <ul className="list-disc pl-5 space-y-3 mb-5">
              <li className="text-gray-500 text-sm leading-relaxed">
                Access your personal information.
              </li>

              <li className="text-gray-500 text-sm leading-relaxed">
                Request correction of your personal information.
              </li>

              <li className="text-gray-500 text-sm leading-relaxed">
                Request deletion of your personal information.
              </li>

              <li className="text-gray-500 text-sm leading-relaxed">
                Object to the processing of your personal information.
              </li>
            </ul>

            <p className="text-gray-500 text-sm leading-relaxed">
              We respect your choices subject to applicable laws.
            </p>
          </div>

        </div>
      </section>

      {/* Security + Contact */}
      <section className="py-14 md:py-20 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14">

          {/* Security */}
          <div>

            <p className="text-xs font-semibold tracking-widest uppercase text-pink-400 mb-3">
              Data Security
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">
              Security
            </h2>

            <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />

            <p className="text-gray-600 text-sm leading-relaxed">
              We take steps to protect your information from unauthorized
              access, use, disclosure, alteration, or destruction.
              However, no internet transmission is completely secure.
            </p>
          </div>

          {/* Contact */}
          <div>

            <p className="text-xs font-semibold tracking-widest uppercase text-pink-400 mb-3">
              Contact Information
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">
              Contact Us
            </h2>

            <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />

            <p className="text-gray-600 text-sm leading-relaxed">
              If you have questions regarding this Privacy Policy,
              please contact us at{" "}
              <span className="text-pink-600 font-semibold">
                srijanivf2022@gmail.com
              </span>
            </p>

          </div>

        </div>
      </section>

      {/* Additional Notes + Disclaimer */}
      <section className="py-10 md:py-14 px-4 md:px-10 bg-pink-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">

          {/* Additional Notes */}
          <div className="bg-white border border-pink-100 rounded-3xl p-8 hover:shadow-lg transition-all duration-300">

            <p className="text-xs font-semibold tracking-widest uppercase text-pink-400 mb-3">
              Additional Notes
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-pink-400 mb-2">
              Additional Information
            </h2>

            <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />

            <ul className="list-disc pl-5 space-y-3">
              <li className="text-gray-500 text-sm leading-relaxed">
                This Privacy Policy should be read with the General Consent Form.
              </li>

              <li className="text-gray-500 text-sm leading-relaxed">
                We use Google AdWords and Facebook Ads for remarketing.
              </li>

              <li className="text-gray-500 text-sm leading-relaxed">
                We comply with applicable email marketing laws.
              </li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div className="bg-white border border-pink-100 rounded-3xl p-8 hover:shadow-lg transition-all duration-300">

            <p className="text-xs font-semibold tracking-widest uppercase text-pink-400 mb-3">
              Disclaimer
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-pink-400 mb-2">
              Important Notice
            </h2>

            <div className="w-14 h-0.5 bg-pink-500 rounded-full mb-5" />

            <ul className="list-disc pl-5 space-y-3">
              <li className="text-gray-500 text-sm leading-relaxed">
                Gender selection and determination are illegal in India.
              </li>

              <li className="text-gray-500 text-sm leading-relaxed">
                We do not provide services for commercial surrogacy.
              </li>

              <li className="text-gray-500 text-sm leading-relaxed">
                We provide support services to licensed IVF clinics.
              </li>

              <li className="text-gray-500 text-sm leading-relaxed">
                We do not offer remote genetic counselling services.
              </li>
            </ul>

          </div>

        </div>
      </section>

      
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default PrivacyPolicy;