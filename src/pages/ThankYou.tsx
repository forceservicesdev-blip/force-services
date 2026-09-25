import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/config";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Clock,
  Home,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface ThankYouState {
  name?: string;
  service?: string;
  type?: string;
}

const ThankYou = () => {
  const location = useLocation();
  const state = (location.state as ThankYouState) || {};

  const whatsappHref = `https://wa.me/${COMPANY.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hi ${COMPANY.name}, I just submitted a request on your website${state.name ? ` (Name: ${state.name})` : ""}. Could you confirm you received it?`
  )}`;

  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">
      <Header />

      <main className="flex-1 pt-28 pb-20">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center">
            {/* Animated Success Badge */}
            <div className="inline-flex items-center justify-center p-4 bg-emerald-50 text-emerald-600 rounded-full mb-6 ring-8 ring-emerald-50/50 animate-bounce">
              <CheckCircle2 className="w-16 h-16 sm:w-20 sm:h-20" />
            </div>

            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
              Request Successfully Received
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
              {state.name ? `Thank you, ${state.name}!` : "Thank You For Reaching Out!"}
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              We have received your enquiry
              {state.service && (
                <span className="font-semibold text-primary"> for {state.service}</span>
              )}
              . One of our specialists will review your requirements and get in touch with you shortly.
            </p>

            {/* What Happens Next Card */}
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 text-left shadow-sm mb-10">
              <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                What happens next?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col gap-2 p-4 rounded-xl bg-secondary/50 border border-border/50">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary font-bold flex items-center justify-center text-base">
                    1
                  </div>
                  <h3 className="font-semibold text-foreground">Review & Assessment</h3>
                  <p className="text-xs text-muted-foreground">
                    Our team examines your project requirements and location across Clare, Limerick or Galway.
                  </p>
                </div>

                <div className="flex flex-col gap-2 p-4 rounded-xl bg-secondary/50 border border-border/50">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary font-bold flex items-center justify-center text-base">
                    2
                  </div>
                  <h3 className="font-semibold text-foreground">Fast Quote Provided</h3>
                  <p className="text-xs text-muted-foreground">
                    We prepare a transparent, competitive quote with no hidden charges or surprise fees.
                  </p>
                </div>

                <div className="flex flex-col gap-2 p-4 rounded-xl bg-secondary/50 border border-border/50">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary font-bold flex items-center justify-center text-base">
                    3
                  </div>
                  <h3 className="font-semibold text-foreground">Date Scheduled</h3>
                  <p className="text-xs text-muted-foreground">
                    Once approved, our vetted cleaning technicians arrive equipped and ready to deliver top results.
                  </p>
                </div>
              </div>

              {/* Guarantees Bar */}
              <div className="mt-8 pt-6 border-t border-border grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary shrink-0" />
                  <span>Response usually within a few hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                  <span>Fully Insured & Registered</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarCheck className="w-4 h-4 text-primary shrink-0" />
                  <span>Flexible 7-day scheduling</span>
                </div>
              </div>
            </div>

            {/* Need Urgent Help Section */}
            <div className="bg-primary/5 border border-primary/15 rounded-2xl p-6 sm:p-8 mb-10">
              <h3 className="text-lg font-bold text-foreground mb-2">
                Need an immediate answer or emergency service?
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Feel free to call our direct phone line or drop us a quick WhatsApp message.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-full hover:bg-primary/90 transition-all shadow-sm"
                >
                  <PhoneCall className="w-4 h-4" />
                  Call {COMPANY.phone}
                </a>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#20bd5a] transition-all shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Navigation Actions */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/">
                <Button variant="outline" className="rounded-full gap-2 px-6">
                  <Home className="w-4 h-4" />
                  Return to Home
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="ghost" className="rounded-full gap-2 px-6">
                  Browse All Services
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou;
