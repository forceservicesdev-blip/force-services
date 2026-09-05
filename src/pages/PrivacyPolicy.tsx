import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { COMPANY, WHATSAPP_MESSAGE } from "@/lib/config";
import {
  Clock,
  Database,
  Eye,
  FileCheck,
  Globe,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Scale,
  Shield,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const whatsappHref = `https://wa.me/${COMPANY.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const PrivacyPolicy = () => {
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
              <span className="text-primary font-bold">Privacy Policy</span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3.5 py-1 text-xs font-semibold text-primary mb-4">
              <ShieldCheck className="h-4 w-4 text-tertiary" />
              <span>GDPR & Data Protection Compliant (Ireland & EU)</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              How {COMPANY.name} collects, protects, and handles your personal information when you use our website or book our cleaning services.
            </p>
            <p className="text-xs text-muted-foreground mt-3">
              Last Updated: <span className="font-semibold text-foreground">{lastUpdated}</span>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 md:py-24 px-4 flex-1">
        <div className="container mx-auto max-w-4xl">
          <FadeIn>
            <div className="space-y-12 text-foreground">
              {/* 1. Who We Are */}
              <div className="p-8 rounded-2xl bg-card border border-border shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <Globe className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary">1. Who We Are</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>{COMPANY.legalName}</strong> (CRO Registration:{" "}
                  <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded text-sm font-mono">
                    {COMPANY.cro}
                  </code>
                  ), trading as <strong>{COMPANY.name}</strong>, is a registered Irish cleaning and exterior maintenance contractor providing professional power washing, commercial, industrial, and post-construction cleaning throughout {COMPANY.serviceArea} and surrounding counties.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 pt-2 text-sm text-muted-foreground bg-secondary/30 p-4 rounded-xl">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary shrink-0" />
                    <span>{COMPANY.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary shrink-0" />
                    <a href={`mailto:${COMPANY.email}`} className="hover:underline text-foreground font-medium">
                      {COMPANY.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* 2. Information We Collect */}
              <div className="p-8 rounded-2xl bg-card border border-border shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <Database className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary">2. Information We Collect</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  We collect information necessary to provide accurate cleaning quotes, deliver on-site services, and communicate with you effectively:
                </p>
                <ul className="space-y-3 text-muted-foreground leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span>
                      <strong className="text-foreground">Contact Details:</strong> Full name, phone number, email address, and service address.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span>
                      <strong className="text-foreground">Property & Service Information:</strong> Property type (residential, commercial, industrial), service requested (power washing, office cleaning, soft washing, etc.), property size, and specific cleaning instructions or site access details.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span>
                      <strong className="text-foreground">Communications:</strong> Records of messages sent via our quote form, contact form, job application form, direct email, phone call, or WhatsApp chat.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span>
                      <strong className="text-foreground">Job Applications:</strong> CVs, portfolios, LinkedIn profiles, work experience, and contact details submitted through our Careers page.
                    </span>
                  </li>
                </ul>
              </div>

              {/* 3. Legal Basis & How We Use Your Data */}
              <div className="p-8 rounded-2xl bg-card border border-border shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <Scale className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary">3. How We Use Your Information (GDPR Legal Basis)</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Under the General Data Protection Regulation (GDPR) and the Irish Data Protection Act 2018, we process your information under the following lawful bases:
                </p>
                <div className="grid gap-4 mt-4">
                  <div className="p-4 rounded-xl bg-secondary/30 border border-border/50">
                    <h4 className="font-bold text-foreground text-sm">Performance of a Contract</h4>
                    <p className="text-muted-foreground text-xs mt-1">
                      To calculate free quotes, schedule service dates, dispatch our team, complete the cleaning, issue invoices, and fulfill our agreed obligations.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary/30 border border-border/50">
                    <h4 className="font-bold text-foreground text-sm">Legitimate Interests</h4>
                    <p className="text-muted-foreground text-xs mt-1">
                      To follow up on customer satisfaction, improve service quality, ensure site safety, and protect our business against fraudulent activity.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary/30 border border-border/50">
                    <h4 className="font-bold text-foreground text-sm">Consent</h4>
                    <p className="text-muted-foreground text-xs mt-1">
                      When you submit a quote request, job application, or WhatsApp enquiry, you consent to our communication regarding that request.
                    </p>
                  </div>
                </div>
              </div>

              {/* 4. Data Sharing & Third Parties */}
              <div className="p-8 rounded-2xl bg-card border border-border shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <Lock className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary">4. Data Sharing & Confidentiality</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">We never sell, rent, or trade your personal information to third parties.</strong>
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Your information is only accessible to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed text-sm">
                  <li>Authorised {COMPANY.name} cleaning technicians and project supervisors directly assigned to your job.</li>
                  <li>Secure infrastructure providers (such as encrypted email delivery and cloud database services compliant with EU data protection standards).</li>
                  <li>Legal authorities or insurers only where strictly required by Irish law or in the handling of an insurance claim.</li>
                </ul>
              </div>

              {/* 5. Data Retention & Security */}
              <div className="p-8 rounded-2xl bg-card border border-border shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary">5. Data Retention & Security</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  We retain customer records only for as long as necessary to provide warranty/satisfaction support and comply with Irish Revenue and tax audit obligations (typically up to 6 years for financial accounting records).
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We implement industry-standard technical measures including HTTPS encryption (SSL/TLS), strict access controls, and secure email channels to safeguard your data against unauthorised access or disclosure.
                </p>
              </div>

              {/* 6. Your Rights Under GDPR */}
              <div className="p-8 rounded-2xl bg-card border border-border shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <UserCheck className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary">6. Your Data Protection Rights</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  As an individual in Ireland and the European Union, you have rights regarding your personal data:
                </p>
                <div className="grid sm:grid-cols-2 gap-3 text-sm">
                  <div className="p-3 bg-secondary/40 rounded-xl">
                    <strong className="text-foreground">Right of Access:</strong> Request a copy of the data we hold about you.
                  </div>
                  <div className="p-3 bg-secondary/40 rounded-xl">
                    <strong className="text-foreground">Right to Rectification:</strong> Request correction of inaccurate information.
                  </div>
                  <div className="p-3 bg-secondary/40 rounded-xl">
                    <strong className="text-foreground">Right to Erasure:</strong> Request deletion of your data ("Right to be Forgotten").
                  </div>
                  <div className="p-3 bg-secondary/40 rounded-xl">
                    <strong className="text-foreground">Right to Restriction:</strong> Limit how we use your information.
                  </div>
                </div>
                <p className="text-muted-foreground text-sm pt-2">
                  To exercise any of these rights, please email us at{" "}
                  <a href={`mailto:${COMPANY.email}`} className="text-primary font-semibold hover:underline">
                    {COMPANY.email}
                  </a>
                  . We will respond within 30 calendar days at no charge.
                </p>
              </div>

              {/* 7. Contact Us & Data Protection Inquiries */}
              <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-tertiary/10 border border-primary/20 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-1 text-center md:text-left">
                  <h3 className="text-xl font-bold text-foreground">Have Questions About Your Privacy?</h3>
                  <p className="text-sm text-muted-foreground">
                    Get in touch directly with our data controller for any privacy requests or inquiries.
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
                  <a href={`mailto:${COMPANY.email}`}>
                    <Button variant="outline" className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold rounded-full px-5">
                      <Mail className="h-4 w-4" />
                      Email Us
                    </Button>
                  </a>
                  <a href={`tel:${COMPANY.phone}`}>
                    <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full px-6">
                      <Phone className="h-4 w-4" />
                      {COMPANY.phone}
                    </Button>
                  </a>
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

export default PrivacyPolicy;
