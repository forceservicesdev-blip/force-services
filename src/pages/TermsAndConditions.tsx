import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { COMPANY } from "@/lib/config";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-12 px-4">
        <div className="container-custom mx-auto section-padding text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-primary">Terms & Conditions</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
            Terms & Conditions
          </h1>
          <p className="text-muted-foreground font-medium">
            Last Updated: {new Date().toLocaleDateString("en-IE", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </section>

      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to {COMPANY.name}. These Terms & Conditions govern the use of our website and the cleaning services we provide. By booking a service or using this website, you agree to these terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">2. Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                We provide domestic and commercial cleaning services across {COMPANY.serviceArea}. All services are carried out by trained, insured and vetted cleaners. The scope of each clean is agreed in advance and may be tailored to your requirements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">3. Quotes & Bookings</h2>
              <p className="text-muted-foreground leading-relaxed">
                Quotes provided are estimates based on the information supplied. Final pricing may vary if the scope of work changes. Bookings are confirmed once a date, time and price are agreed by both parties.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Cancellations</h2>
              <p className="text-muted-foreground leading-relaxed">
                We understand plans change. Please provide at least 24 hours' notice for cancellations or rescheduling. Cancellations made with less notice may be subject to a fee.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Liability & Insurance</h2>
              <p className="text-muted-foreground leading-relaxed">
                {COMPANY.name} is fully insured for public liability and damage caused during cleaning. We ask that valuables, fragile items and pets are secured before our team arrives.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">6. Satisfaction Guarantee</h2>
              <p className="text-muted-foreground leading-relaxed">
                We take pride in our work. If you are not satisfied with any aspect of the clean, please contact us within 24 hours and we will return to address the issue at no extra cost.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">7. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms & Conditions, please contact us at {COMPANY.email} or call {COMPANY.phone}.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
