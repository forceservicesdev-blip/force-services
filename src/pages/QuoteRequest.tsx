import CTA from "@/components/CTA";
import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { sendFormEmail } from "@/lib/email";
import { trackLeadConversion } from "@/lib/analytics";
import { CLEANING_SERVICES, COMPANY, SERVICE_AREAS, WHATSAPP_MESSAGE } from "@/lib/config";
import {
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Truck,
  Waves,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";

export interface QuoteData {
  serviceSlug: string;
  serviceTitle: string;
  complexityLabel: string;
  complexityMultiplier?: number;
  estimatedHours?: number;
  urgency: string;
  basePrice?: number;
  estimatedMin?: number;
  estimatedMax?: number;
  propertyType?: string;
  location?: string;
  preferredDate?: string;
  preferredTime?: string;
  notes?: string;
}

const PROPERTY_TYPES = [
  "Commercial Office / Retail Store",
  "Industrial Warehouse / Factory",
  "Post-Construction / Renovation Site",
  "Commercial Grounds / Forecourt / Car Park",
  "Hospitality / Public Facility",
  "Other / Custom Facility",
];

const TIME_SLOTS = [
  "Morning (8:00 AM – 12:00 PM)",
  "Afternoon (12:00 PM – 4:00 PM)",
  "Evening / After-Hours (Flexible)",
];

const URGENCY_OPTIONS = [
  { value: "standard", label: "Standard (Next Available)", desc: "Normal scheduling within 3-5 days" },
  { value: "urgent", label: "Urgent (Within 48h)", desc: "Priority slot needed soon" },
  { value: "emergency", label: "Emergency / Fast Callout", desc: "Urgent same-day or next-day requirement" },
];

const TRUST_POINTS = [
  {
    icon: ShieldCheck,
    title: "Fully Insured & Certified",
    desc: "Comprehensive public & commercial liability coverage for every project.",
  },
  {
    icon: Sparkles,
    title: "100% Satisfaction Guarantee",
    desc: "We don't consider the project finished until you are completely satisfied.",
  },
  {
    icon: Truck,
    title: "Free On-Site Survey",
    desc: "We visit your property to evaluate requirements with no hidden fees or obligations.",
  },
  {
    icon: Waves,
    title: "Industrial-Grade Equipment",
    desc: "Heavy-duty pressure washers, hot water systems, and eco-friendly products.",
  },
];

const QuoteRequest = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const preselectedSlug = location.state?.serviceSlug as string | undefined;

  const [selectedService, setSelectedService] = useState<string>(
    preselectedSlug || CLEANING_SERVICES[0]?.slug || ""
  );
  const [propertyType, setPropertyType] = useState<string>(PROPERTY_TYPES[0]);
  const [selectedArea, setSelectedArea] = useState<string>(SERVICE_AREAS[0] || "Ennis");
  const [urgency, setUrgency] = useState<string>("standard");
  const [preferredDate, setPreferredDate] = useState<string>("");
  const [preferredTime, setPreferredTime] = useState<string>(TIME_SLOTS[0]);
  const [fullName, setFullName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const activeService = CLEANING_SERVICES.find((s) => s.slug === selectedService);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !phone || !selectedService) {
      toast.error("Please fill in your name, phone number, and service required.");
      return;
    }

    setIsSubmitting(true);

    try {
      const notesArray = [
        `Property/Site: ${propertyType}`,
        `Location: ${selectedArea}`,
        preferredTime ? `Time: ${preferredTime}` : "",
        notes ? `Details: ${notes}` : "",
      ].filter(Boolean);

      const sendResult = await sendFormEmail({
        subject: `New Detailed Quote Request: ${fullName} - ${activeService?.title || selectedService}`,
        replyTo: email,
        data: {
          "Form Type": "Detailed Quote Request (/quote)",
          "Customer Name": fullName,
          "Phone": phone,
          "Email": email || "Not provided",
          "Service": activeService?.title || selectedService,
          "Property Type": propertyType,
          "Location / Area": selectedArea,
          "Preferred Date": preferredDate || "Flexible",
          "Preferred Time": preferredTime || "Anytime",
          "Urgency": urgency,
          "Details / Notes": notesArray.join(" | ") || "None",
        },
      });

      if (!sendResult.success) {
        if (sendResult.requiresActivation) {
          toast.error("Notification service requires initial confirmation. Please contact us by phone or WhatsApp.");
        } else {
          toast.error(sendResult.message || "Could not submit quote request. Please try again.");
        }
        return;
      }

      // Track lead conversion in GA4 only after confirmed successful delivery
      trackLeadConversion({
        form_type: "detailed_quote",
        service: activeService?.title || selectedService,
        currency: "EUR",
        value: 1,
      });

      setIsSuccess(true);
      toast.success("Quote request received! We will contact you shortly.");

      navigate("/thank-you", {
        state: {
          name: fullName,
          service: activeService?.title || selectedService,
          type: "detailed_quote",
        },
      });
    } catch (err) {
      console.error("Error submitting quote request:", err);
      toast.error("Network error while submitting. Please check your connection or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateWhatsAppHref = () => {
    const serviceName = activeService?.title || "Cleaning / Power Washing";
    const text = `Hi ${COMPANY.name}, I would like to request a free quote.\n\n*Service:* ${serviceName}\n*Property:* ${propertyType}\n*Location:* ${selectedArea}\n*Urgency:* ${urgency}\n*Name:* ${fullName || "(Provided in chat)"}\n*Phone:* ${phone || "(Provided in chat)"}${notes ? `\n*Details:* ${notes}` : ""}`;
    return `https://wa.me/${COMPANY.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container-custom section-padding text-center">
          <FadeIn>
            <div className="flex items-center justify-center gap-2 text-sm mb-6">
              <Link to="/" className="text-muted-foreground hover:text-foreground">
                Home
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-primary font-medium">Request a Quote</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Request a Free Quote & Assessment
            </h1>

            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Get in touch with Force Services for expert power washing, commercial, industrial, and post-construction cleaning across Ennis, Limerick & Galway.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* WhatsApp Quick-Contact Banner */}
      <section className="py-6 bg-[#25D366]">
        <div className="container-custom section-padding">
          <FadeIn>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-lg leading-tight">Prefer a faster response?</p>
                  <p className="text-white/90 text-sm">Skip the form — message us on WhatsApp and we'll reply straight away.</p>
                </div>
              </div>
              <a
                href={`https://wa.me/${COMPANY.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                target="_blank"
                rel="noopener noreferrer"
                data-location="quote_hero_whatsapp"
                className="shrink-0 inline-flex items-center gap-2 bg-white text-[#25D366] font-bold px-7 py-3.5 rounded-full hover:bg-white/90 transition-all shadow-md text-base whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Divider with label */}
      <div className="flex items-center gap-4 container-custom section-padding pt-12 pb-0">
        <div className="flex-1 h-px bg-border" />
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground px-2">or fill out the form below</span>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Form & Info Section */}
      <section className="py-12 bg-background">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Side: Quote Request Form */}
            <div className="lg:col-span-7">
              <FadeIn>
                <div className="bg-secondary rounded-3xl p-6 sm:p-10 shadow-sm border border-border">
                  {isSuccess ? (
                    <div className="text-center py-12 space-y-6">
                      <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h2 className="text-3xl font-bold text-foreground">
                        Quote Request Received!
                      </h2>
                      <p className="text-muted-foreground max-w-md mx-auto text-base">
                        Thank you, <strong className="text-foreground">{fullName}</strong>. Our team will review your project details and get in touch with you shortly.
                      </p>
                      <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                          href={generateWhatsAppHref()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#20bd5a] transition-all"
                        >
                          <MessageCircle className="w-5 h-5" />
                          Chat on WhatsApp
                        </a>
                        <Button
                          variant="outline"
                          className="rounded-full px-6 py-3"
                          onClick={() => setIsSuccess(false)}
                        >
                          Submit Another Request
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div>
                        <h2 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
                          <Sparkles className="w-6 h-6 text-primary" />
                          Tell Us About Your Project
                        </h2>
                        <p className="text-muted-foreground text-sm">
                          Fill out the details below for a quick, no-obligation quote or free on-site survey.
                        </p>
                      </div>

                      {/* Step 1: Service Required */}
                      <div className="space-y-3">
                        <Label className="text-base font-semibold text-foreground">
                          1. Service Required <span className="text-destructive">*</span>
                        </Label>
                        <Select
                          value={selectedService}
                          onValueChange={setSelectedService}
                        >
                          <SelectTrigger className="h-14 text-base bg-background">
                            <SelectValue placeholder="Choose a service..." />
                          </SelectTrigger>
                          <SelectContent>
                            {CLEANING_SERVICES.map((s) => (
                              <SelectItem key={s.slug} value={s.slug} className="text-base">
                                {s.title}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Step 2: Property & Location */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="space-y-3">
                          <Label className="text-base font-semibold text-foreground">
                            2. Property / Site Type
                          </Label>
                          <Select
                            value={propertyType}
                            onValueChange={setPropertyType}
                          >
                            <SelectTrigger className="h-14 text-base bg-background">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {PROPERTY_TYPES.map((type) => (
                                <SelectItem key={type} value={type}>
                                  {type}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-3">
                          <Label className="text-base font-semibold text-foreground">
                            3. Location / Town
                          </Label>
                          <Select
                            value={selectedArea}
                            onValueChange={setSelectedArea}
                          >
                            <SelectTrigger className="h-14 text-base bg-background">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {SERVICE_AREAS.map((area) => (
                                <SelectItem key={area} value={area}>
                                  {area}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Step 3: Urgency & Scheduling */}
                      <div className="space-y-3">
                        <Label className="text-base font-semibold text-foreground">
                          4. How Soon Do You Need the Service?
                        </Label>
                        <div className="grid sm:grid-cols-3 gap-3">
                          {URGENCY_OPTIONS.map((opt) => (
                            <button
                              key={opt.value}
                              type="button"
                              onClick={() => setUrgency(opt.value)}
                              className={`p-3.5 rounded-xl border-2 text-left transition-all ${
                                urgency === opt.value
                                  ? "border-primary bg-primary/5 shadow-xs"
                                  : "border-border hover:border-primary/40 bg-background"
                              }`}
                            >
                              <div className="font-semibold text-sm text-foreground">
                                {opt.label}
                              </div>
                              <div className="text-xs text-muted-foreground mt-1">
                                {opt.desc}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Preferred Date & Time */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="space-y-3">
                          <Label className="text-base font-semibold text-foreground">
                            Preferred Date (Optional)
                          </Label>
                          <div className="relative">
                            <Input
                              type="date"
                              value={preferredDate}
                              onChange={(e) => setPreferredDate(e.target.value)}
                              min={new Date().toISOString().split("T")[0]}
                              className="h-14 text-base bg-background"
                            />
                          </div>
                        </div>
                        <div className="space-y-3">
                          <Label className="text-base font-semibold text-foreground">
                            Preferred Time Slot
                          </Label>
                          <Select
                            value={preferredTime}
                            onValueChange={setPreferredTime}
                          >
                            <SelectTrigger className="h-14 text-base bg-background">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {TIME_SLOTS.map((slot) => (
                                <SelectItem key={slot} value={slot}>
                                  {slot}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Step 4: Contact Information */}
                      <div className="space-y-4 pt-2 border-t border-border">
                        <h3 className="font-bold text-lg text-foreground">
                          Your Contact Information
                        </h3>

                        <div className="grid sm:grid-cols-2 gap-5">
                          <div className="space-y-2">
                            <Label className="text-sm font-medium text-foreground">
                              Full Name <span className="text-destructive">*</span>
                            </Label>
                            <Input
                              value={fullName}
                              onChange={(e) => setFullName(e.target.value)}
                              placeholder="e.g. John Murphy"
                              className="h-12 bg-background"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label className="text-sm font-medium text-foreground">
                              Phone Number <span className="text-destructive">*</span>
                            </Label>
                            <Input
                              type="tel"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="e.g. 087 123 4567"
                              className="h-12 bg-background"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label className="text-sm font-medium text-foreground">
                            Email Address (Optional)
                          </Label>
                          <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your.email@example.com"
                            className="h-12 bg-background"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label className="text-sm font-medium text-foreground">
                            Project Details / Notes (Optional)
                          </Label>
                          <Textarea
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder="Tell us about the property condition, approximate size (e.g. 2-car driveway, 3-storey facade), or any specific requirements..."
                            className="min-h-[110px] bg-background"
                          />
                        </div>
                      </div>

                      {/* Submit Actions */}
                      <div className="space-y-3 pt-2">
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full h-14 rounded-full text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-md"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Submitting Request..." : "Request Free Quote & Assessment"}
                        </Button>

                        <div className="text-center">
                          <span className="text-xs text-muted-foreground">or connect immediately:</span>
                        </div>

                        <a
                          href={generateWhatsAppHref()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full h-12 rounded-full border-2 border-tertiary text-tertiary font-semibold flex items-center justify-center gap-2 hover:bg-tertiary/10 transition-colors"
                        >
                          <MessageCircle className="w-5 h-5" />
                          Send Details via WhatsApp
                        </a>
                      </div>
                    </form>
                  )}
                </div>
              </FadeIn>
            </div>

            {/* Right Side: Quick Contact, Guarantee & Trust Highlights */}
            <div className="lg:col-span-5 space-y-8">
              {/* Direct Contact Card */}
              <FadeIn delay={100}>
                <div className="bg-primary text-primary-foreground rounded-3xl p-8 shadow-md space-y-6">
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-accent">
                      Fast Direct Response
                    </span>
                    <h3 className="text-2xl font-bold mt-1">Prefer to Talk to Us Directly?</h3>
                    <p className="text-primary-foreground/80 text-sm mt-2 leading-relaxed">
                      Call our team or message us on WhatsApp for fast inquiries, emergencies, or commercial tender proposals.
                    </p>
                  </div>

                  <div className="space-y-4 pt-2">
                    <a
                      href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`}
                      data-location="quote_sidebar_phone"
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 hover:bg-white/15 transition-all text-primary-foreground"
                    >
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-xs text-primary-foreground/70">Call Us Directly</div>
                        <div className="font-bold text-lg">{COMPANY.phone}</div>
                      </div>
                    </a>

                    <a
                      href={`https://wa.me/${COMPANY.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-location="quote_sidebar_whatsapp"
                      className="flex items-center gap-4 p-4 rounded-2xl bg-[#25D366]/20 hover:bg-[#25D366]/30 transition-all text-white border border-[#25D366]/40"
                    >
                      <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0">
                        <MessageCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-xs text-white/80">WhatsApp Chat</div>
                        <div className="font-bold text-lg">+353 87 494 5684</div>
                      </div>
                    </a>

                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 hover:bg-white/15 transition-all text-primary-foreground"
                    >
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs text-primary-foreground/70">Email Inquiries</div>
                        <div className="font-bold text-sm truncate">{COMPANY.email}</div>
                      </div>
                    </a>
                  </div>

                  <div className="border-t border-primary-foreground/20 pt-4 text-xs text-primary-foreground/75 space-y-1">
                    <p className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 shrink-0 text-accent" />
                      Serving {COMPANY.serviceArea}
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* Trust & Guarantee Cards */}
              <FadeIn delay={200}>
                <div className="bg-secondary rounded-3xl p-6 sm:p-8 border border-border shadow-sm space-y-6">
                  <h4 className="text-xl font-bold text-foreground">
                    Why Choose Force Services?
                  </h4>

                  <div className="space-y-4">
                    {TRUST_POINTS.map((item, idx) => (
                      <div key={idx} className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h5 className="font-bold text-sm text-foreground">{item.title}</h5>
                          <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-secondary">
        <div className="container-custom section-padding">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-bold text-tertiary uppercase tracking-wider">
                Coverage Area
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                Serving Ennis, Limerick, Galway & Surrounding Areas
              </h2>
              <p className="text-muted-foreground text-base">
                We provide mobile, fully-equipped power washing and professional cleaning teams across the entire Mid-West region.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {SERVICE_AREAS.map((town) => (
                <div
                  key={town}
                  className="bg-background rounded-xl p-4 text-center border border-border hover:border-primary/50 transition-all"
                >
                  <MapPin className="w-4 h-4 text-tertiary mx-auto mb-1.5" />
                  <span className="font-semibold text-sm text-foreground">{town}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default QuoteRequest;
