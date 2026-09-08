import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { sendFormEmail } from "@/lib/email";
import { CLEANING_SERVICES, COMPANY, WHATSAPP_MESSAGE } from "@/lib/config";
import {
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import type { QuoteData } from "./QuoteRequest";

const contactAssurances = [
  {
    icon: Clock,
    title: "Fast Response Time",
    description:
      "We respond to phone calls and WhatsApp inquiries promptly, and follow up on email inquiries within 24 hours.",
    highlight: "Average response: < 2 hours",
  },
  {
    icon: MapPin,
    title: "Mid-West Service Coverage",
    description:
      "Our mobile teams cover Ennis, Limerick City, Galway, Shannon, Sixmilebridge, and all across County Clare.",
    highlight: "Mobile teams dispatched daily",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured & Guaranteed",
    description:
      "Comprehensive public and commercial liability insurance with our 24h satisfaction re-clean guarantee.",
    highlight: "100% Peace of Mind",
  },
];

const Contact = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const quoteData = location.state?.quoteData as QuoteData | undefined;

  const whatsappNumber = COMPANY.whatsappNumber.replace(/\D/g, "");
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: quoteData?.serviceSlug || "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (quoteData) {
      setFormData((prev) => ({
        ...prev,
        service: quoteData.serviceSlug,
      }));
    }
  }, [quoteData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      if (quoteData) {
        await sendFormEmail({
          subject: `New Quote Request: ${formData.fullName} - ${quoteData.serviceTitle}`,
          replyTo: formData.email,
          data: {
            "Form Type": "Contact Page (Plan/Quote Inquiry)",
            "Customer Name": formData.fullName,
            "Phone": formData.phone,
            "Email": formData.email || "Not provided",
            "Service": quoteData.serviceTitle,
            "Plan": quoteData.complexityLabel,
            "Base Price": `€${quoteData.basePrice}`,
            "Notes / Message": formData.notes || "None",
          },
        });

        toast.success("Quote request submitted successfully! We'll contact you soon.");
      } else {
        await sendFormEmail({
          subject: `New Contact Message from ${formData.fullName}`,
          replyTo: formData.email,
          data: {
            "Form Type": "General Contact Message (/contact)",
            "Customer Name": formData.fullName,
            "Phone": formData.phone,
            "Email": formData.email || "Not provided",
            "Service Interested In": formData.service || "General Inquiry",
            "Message / Notes": formData.notes || "None",
          },
        });

        toast.success("Message sent successfully! We'll get back to you soon.");
      }

      const submittedName = formData.fullName;
      const submittedService = quoteData?.serviceTitle || formData.service || "General Inquiry";

      // Reset form
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        service: "",
        notes: "",
      });

      navigate("/thank-you", {
        state: {
          name: submittedName,
          service: submittedService,
          type: "contact",
        },
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4">
        <div className="container-custom mx-auto text-center">
          <FadeIn>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-primary font-medium">Contact</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight">
              {quoteData ? "Request Official Quote" : "Get In Touch"}
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              {quoteData
                ? "Complete your information below and we'll send you an official quote based on your estimate."
                : `Have a question or want to book a clean? Reach out to the ${COMPANY.name} team and we'll get back to you promptly.`}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Quote Summary (if coming from quote request) */}
      {quoteData && (
        <section className="pb-8 px-4">
          <div className="container mx-auto section-padding">
            <FadeIn>
              <div className="max-w-4xl mx-auto bg-primary rounded-2xl p-6 text-primary-foreground shadow-md">
                <h3 className="text-xl font-bold mb-4">Your Project Selection</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-accent shrink-0" />
                    <div>
                      <p className="text-sm text-primary-foreground/70">Service</p>
                      <p className="font-medium">{quoteData.serviceTitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-accent shrink-0" />
                    <div>
                      <p className="text-sm text-primary-foreground/70">Property & Location</p>
                      <p className="font-medium">{quoteData.complexityLabel}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-accent shrink-0" />
                    <div>
                      <p className="text-sm text-primary-foreground/70">Urgency</p>
                      <p className="font-medium capitalize">{quoteData.urgency}</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Contact Main Section: Direct Channels Hub + Form */}
      <section className="pb-16 px-4">
        <div className="container-custom mx-auto">
          <FadeIn>
            <div className="grid lg:grid-cols-12 gap-8 items-stretch mx-auto">
              {/* Left Column: Premium Direct Channels & Information Card (No Image) */}
              <div className="lg:col-span-5 relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary text-primary-foreground p-8 sm:p-10 shadow-xl flex flex-col justify-between border border-primary/20">
                {/* Ambient Decorative Blurs */}
                <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-tertiary/25 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-accent/20 blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-6">
                  {/* Status Pill */}
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-white border border-white/15">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Open for Bookings across {COMPANY.serviceArea}</span>
                  </div>

                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
                      Let's Discuss Your Cleaning Needs
                    </h2>
                    <p className="text-primary-foreground/80 text-sm sm:text-base leading-relaxed">
                      Have questions or ready for a quote? Reach out through any of our direct channels or send an online message. We provide free on-site inspections and fixed pricing.
                    </p>
                  </div>

                  {/* Direct Channels Cards */}
                  <div className="space-y-3 pt-2">
                    <a
                      href={`tel:${COMPANY.phone}`}
                      className="group flex items-center gap-4 p-4 rounded-2xl bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/10 transition-all duration-200"
                    >
                      <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs uppercase font-medium tracking-wider text-primary-foreground/70">Phone Direct</p>
                        <p className="text-base sm:text-lg font-bold text-white truncate">{COMPANY.phone}</p>
                        <p className="text-xs text-primary-foreground/60">Mon – Sat: 8:00 AM – 6:00 PM</p>
                      </div>
                    </a>

                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 p-4 rounded-2xl bg-emerald-500/15 hover:bg-emerald-500/25 backdrop-blur-md border border-emerald-400/25 transition-all duration-200"
                    >
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/25 text-emerald-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <MessageCircle className="w-5 h-5 text-emerald-300" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <p className="text-xs uppercase font-medium tracking-wider text-emerald-300">WhatsApp Instant</p>
                          <span className="text-[10px] bg-emerald-500 text-white font-bold px-1.5 py-0.5 rounded">Fastest</span>
                        </div>
                        <p className="text-base sm:text-lg font-bold text-white truncate">Message on WhatsApp</p>
                        <p className="text-xs text-primary-foreground/60">Send photos for rapid quotation</p>
                      </div>
                    </a>

                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="group flex items-center gap-4 p-4 rounded-2xl bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/10 transition-all duration-200"
                    >
                      <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs uppercase font-medium tracking-wider text-primary-foreground/70">Email Us</p>
                        <p className="text-sm sm:text-base font-semibold text-white truncate">{COMPANY.email}</p>
                        <p className="text-xs text-primary-foreground/60">Official inquiries & requests</p>
                      </div>
                    </a>

                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                      <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs uppercase font-medium tracking-wider text-primary-foreground/70">Base Location</p>
                        <p className="text-sm font-semibold text-white">{COMPANY.address}</p>
                        <p className="text-xs text-primary-foreground/60">Serving Ennis, Limerick, Galway & Co. Clare</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Highlights Footer */}
                <div className="relative z-10 pt-6 mt-6 border-t border-white/15 grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-xs font-medium text-primary-foreground/90">
                    <ShieldCheck className="w-4 h-4 text-emerald-300 shrink-0" />
                    <span>Fully Insured Cover</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-primary-foreground/90">
                    <Sparkles className="w-4 h-4 text-emerald-300 shrink-0" />
                    <span>Free Site Survey</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-primary-foreground/90">
                    <Clock className="w-4 h-4 text-emerald-300 shrink-0" />
                    <span>Rapid Callout</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-primary-foreground/90">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                    <span>Quality Guaranteed</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form (7 cols) */}
              <div className="lg:col-span-7 bg-card rounded-3xl p-8 sm:p-10 border border-border/70 shadow-card flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                    <Send className="w-3.5 h-3.5" />
                    <span>Direct Message</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                    {quoteData ? "Your Information" : "Send Us an Inquiry"}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-6">
                    {quoteData
                      ? "Complete your details below to finalize your official quote request."
                      : "Fill in the fields below and our team will get back to you promptly."}
                  </p>

                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                      <label className="block font-medium text-foreground mb-2 text-sm">
                        Full Name <span className="text-destructive">*</span>
                      </label>
                      <Input
                        className="bg-background h-12 rounded-xl"
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-medium text-foreground mb-2 text-sm">
                          Phone <span className="text-destructive">*</span>
                        </label>
                        <Input
                          type="tel"
                          placeholder="e.g. 087 123 4567"
                          className="bg-background border-border h-12 rounded-xl"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          required
                        />
                      </div>

                      <div>
                        <label className="block font-medium text-foreground mb-2 text-sm">
                          Email
                        </label>
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          className="bg-background border-border h-12 rounded-xl"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    {!quoteData && (
                      <div>
                        <label className="block font-medium text-foreground mb-2 text-sm">
                          Service of Interest
                        </label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) =>
                            setFormData({ ...formData, service: value })
                          }
                        >
                          <SelectTrigger className="bg-background border-border h-12 rounded-xl">
                            <SelectValue placeholder="Choose a service..." />
                          </SelectTrigger>
                          <SelectContent>
                            {CLEANING_SERVICES.map((service) => (
                              <SelectItem key={service.slug} value={service.slug}>
                                {service.title}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    <div>
                      <label className="block font-medium text-foreground mb-2 text-sm">
                        Message / Project Details
                      </label>
                      <Textarea
                        placeholder="Tell us about the property, areas to clean, timeline, or any specific requirements..."
                        className="bg-background border-border min-h-[130px] rounded-xl"
                        value={formData.notes}
                        onChange={(e) =>
                          setFormData({ ...formData, notes: e.target.value })
                        }
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full py-6 text-base font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-md transition-all cursor-pointer"
                      disabled={isSubmitting}
                    >
                      {isSubmitting
                        ? "Sending..."
                        : quoteData
                          ? "Submit Quote Request"
                          : "Send Message"}
                    </Button>

                    <p className="text-center text-xs text-muted-foreground pt-1">
                      🔒 Your information is confidential and will never be shared with third parties.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Assurances & Service Pillars Section */}
      <section className="pb-24 px-4">
        <div className="container-custom mx-auto">
          <FadeIn>
            <div className="grid md:grid-cols-3 gap-6">
              {contactAssurances.map((item, index) => (
                <div
                  key={index}
                  className="bg-secondary/70 hover:bg-secondary rounded-2xl p-7 border border-border/60 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-border/50">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      ✓ {item.highlight}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
