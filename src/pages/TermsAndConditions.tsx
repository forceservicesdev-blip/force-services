import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { COMPANY, WHATSAPP_MESSAGE } from "@/lib/config";
import {
  AlertCircle,
  Calendar,
  CheckCircle2,
  Clock,
  CreditCard,
  FileCheck,
  FileText,
  HelpCircle,
  Mail,
  MapPin,
  Phone,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const whatsappHref = `https://wa.me/${COMPANY.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const TermsAndConditions = () => {
  const lastUpdated = "September 2026";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/30 via-background to-background relative overflow-hidden border-b border-border/40">
        <div className="absolute top-10 left-1/3 w-[500px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container-custom mx-auto section-padding text-center relative z-10">
          <FadeIn>
            <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-primary font-bold">Terms & Conditions</span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3.5 py-1 text-xs font-semibold text-primary mb-4">
              <FileCheck className="h-4 w-4 text-tertiary" />
              <span>Service Agreement & Operating Standards</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight mb-4">
              Terms & Conditions
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Please read these terms and conditions carefully before booking or using any cleaning services provided by {COMPANY.name}.
            </p>
            <p className="text-xs text-muted-foreground mt-3">
              Last Updated: <span className="font-semibold text-foreground">{lastUpdated}</span> • CRO: {COMPANY.cro}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 md:py-24 px-4 flex-1">
        <div className="container mx-auto max-w-4xl">
          <FadeIn>
            <div className="space-y-12 text-foreground">
              {/* 1. Agreement & Company Details */}
              <div className="p-8 rounded-2xl bg-card border border-border shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <Scale className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary">1. Agreement to Terms</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms and Conditions constitute a legally binding agreement between you (the "Client", "Customer", or "You") and{" "}
                  <strong>{COMPANY.legalName}</strong> (CRO Registration:{" "}
                  <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded text-sm font-mono">
                    {COMPANY.cro}
                  </code>
                  ), trading as <strong>{COMPANY.name}</strong> (“we”, “us”, or “our”).
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By booking our cleaning services, accepting a quotation, or using our website, you acknowledge that you have read, understood, and agreed to be bound by these terms.
                </p>
              </div>

              {/* 2. Scope of Services */}
              <div className="p-8 rounded-2xl bg-card border border-border shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary">2. Scope of Services</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {COMPANY.name} provides professional exterior and interior cleaning services across {COMPANY.serviceArea} and surrounding counties, including but not limited to:
                </p>
                <div className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                  <div className="p-3 bg-secondary/30 rounded-xl flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span><strong>Power Washing & Pressure Cleaning:</strong> Driveways, patios, paving, stonework, roofs, facades, and decking.</span>
                  </div>
                  <div className="p-3 bg-secondary/30 rounded-xl flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span><strong>Commercial & Office Cleaning:</strong> Contract cleaning, sanitization, retail stores, and workspaces.</span>
                  </div>
                  <div className="p-3 bg-secondary/30 rounded-xl flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span><strong>Industrial & Warehouse Cleaning:</strong> Heavy-duty floor scrubbing, high-level dusting, and factory grounds.</span>
                  </div>
                  <div className="p-3 bg-secondary/30 rounded-xl flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span><strong>Post-Construction Cleaning:</strong> Builders cleans, fine dust extraction, window detailing, and handover sparkle cleans.</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Any additional work requested on-site outside the original agreed quote will be priced and agreed upon before execution.
                </p>
              </div>

              {/* 3. Quotations & Pricing */}
              <div className="p-8 rounded-2xl bg-card border border-border shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <CreditCard className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary">3. Quotations, Pricing & Payments</h2>
                </div>
                <ul className="space-y-3 text-muted-foreground leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span>
                      <strong className="text-foreground">Free Estimates:</strong> Initial online, phone, or WhatsApp quotes are estimates based on client-provided details and photos. We reserve the right to verify dimensions and surface conditions upon physical inspection prior to commencing work.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span>
                      <strong className="text-foreground">Payment Terms:</strong> Payment is due immediately upon completion of the service and customer inspection, unless a formal 30-day commercial credit agreement has been established in writing for contract corporate clients.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span>
                      <strong className="text-foreground">Accepted Methods:</strong> We accept electronic bank transfers (EFT / SEPA), major debit/credit cards, and cash upon signed invoice delivery.
                    </span>
                  </li>
                </ul>
              </div>

              {/* 4. Client Obligations & Site Access */}
              <div className="p-8 rounded-2xl bg-card border border-border shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary">4. Site Access & Utility Requirements</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To ensure safe and efficient execution, the client agrees to:
                </p>
                <ul className="space-y-2 text-muted-foreground text-sm leading-relaxed">
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>Provide clear and unobstructed access to the areas to be cleaned during the scheduled appointment.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>Provide access to an external water supply (standard garden outdoor tap / bib) with adequate water pressure, and where applicable, a standard electrical outlet.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>Secure all pets, sensitive potted plants, vehicles, garden furniture, or delicate items away from high-pressure washing zones.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>Ensure all windows, exterior vents, and doors in the work area are fully closed and securely latched prior to power washing.</span>
                  </li>
                </ul>
              </div>

              {/* 5. Cancellation & Rescheduling */}
              <div className="p-8 rounded-2xl bg-card border border-border shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary">5. Cancellations & Weather Conditions</h2>
                </div>
                <div className="space-y-3 text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">Client Cancellation:</strong> We understand scheduling changes occur. We request at least <strong>24 hours' notice</strong> for cancelling or rescheduling an appointment so we can reallocate our staff.
                  </p>
                  <p>
                    <strong className="text-foreground">Weather Contingencies:</strong> High-pressure washing and roof cleaning can be safely conducted in light rain. However, in cases of severe storms, gale-force winds, sub-zero frost, or hazardous lightning conditions, we reserve the right to reschedule the job for the safety of our operatives and your property.
                  </p>
                </div>
              </div>

              {/* 6. Insurance & Satisfaction Guarantee */}
              <div className="p-8 rounded-2xl bg-card border border-border shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary">6. Insurance & 100% Satisfaction Guarantee</h2>
                </div>
                <div className="space-y-3 text-muted-foreground leading-relaxed">
                  <p>
                    <strong>Public & Commercial Liability:</strong> {COMPANY.name} is fully insured for public liability and property damage under comprehensive Irish business insurance cover (CRO: {COMPANY.cro}).
                  </p>
                  <p>
                    <strong>Satisfaction Guarantee:</strong> We pride ourselves on the highest standards. If you notice any area that was overlooked or unsatisfactory, please notify us within <strong>24 hours</strong> of job completion. We will return to inspect and re-clean the affected area at no additional charge.
                  </p>
                </div>
              </div>

              {/* 7. Limitation of Liability */}
              <div className="p-8 rounded-2xl bg-card border border-border shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <ShieldAlert className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary">7. Limitations of Liability</h2>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  While our technicians exercise utmost professional care, {COMPANY.name} cannot be held liable for:
                </p>
                <ul className="list-disc list-inside space-y-1.5 text-muted-foreground text-xs leading-relaxed">
                  <li>Pre-existing structural defects, cracked masonry, loose rendering, degraded joint sand, rotted timber, or unsealed brickwork prior to cleaning.</li>
                  <li>Water ingress caused by unclosed windows, faulty weather seals, unsealed cable entry holes, or damaged door frames.</li>
                  <li>Pre-existing stains (such as deep motor oil penetration, chemical corrosion, or permanent acid burns) that have permanently bonded with the stone substrate.</li>
                </ul>
              </div>

              {/* 8. Governing Law & Contact */}
              <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-tertiary/10 border border-primary/20 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-1 text-center md:text-left">
                  <h3 className="text-xl font-bold text-foreground">Questions About Our Terms?</h3>
                  <p className="text-sm text-muted-foreground">
                    These Terms are governed by the laws of the Republic of Ireland. Contact us anytime for clarifications.
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
                  <Link to="/contact">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold rounded-full px-6">
                      Contact Us
                    </Button>
                  </Link>
                  <Link to="/quote">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full px-6">
                      Get a Free Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
