import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { COMPANY } from "@/lib/config";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-12 px-4">
        <div className="container-custom mx-auto section-padding text-center">
          <FadeIn>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <span className="text-primary">Privacy Policy</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground font-medium">
              Last Updated: {new Date().toLocaleDateString("en-IE", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <FadeIn>
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Who We Are</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {COMPANY.name} (“we”, “us” or “our") is a local cleaning services company based in {COMPANY.serviceArea}. This Privacy Policy explains how we collect, use and protect your personal information when you visit our website or request a quote.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may collect your name, phone number, email address, property details and service preferences when you complete our quote form, contact us by phone, email or WhatsApp. We do not collect sensitive personal data unless it is necessary to provide our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">How We Use Your Information</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
                  <li>To respond to your quote request or enquiry.</li>
                  <li>To schedule, confirm and manage cleaning appointments.</li>
                  <li>To send service-related updates or reminders.</li>
                  <li>To improve our website, services and customer experience.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Cookies & Tracking</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may use cookies and similar technologies to understand how visitors use the site and to improve functionality. You can disable cookies in your browser settings at any time.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Data Sharing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell your personal information. We may share your details with our trusted cleaning staff solely for the purpose of delivering your booked service. All staff are bound by confidentiality obligations.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You have the right to access, correct or delete your personal data. To make a request, please contact us using the details below. We will respond within 30 days.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy or how we handle your data, please contact us at {COMPANY.email} or call {COMPANY.phone}.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
