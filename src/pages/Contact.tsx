import contact from "@/assets/contact-1.png";
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
import { useAuth } from "@/hooks/useAuth";
import { useUserProfile } from "@/hooks/useUserProfile";
import { supabase } from "@/integrations/supabase/client";
import { sendFormEmail } from "@/lib/email";
import { CLEANING_SERVICES, COMPANY } from "@/lib/config";
import { Clock, DollarSign, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "sonner";
import type { QuoteData } from "./QuoteRequest";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us a message anytime",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Serving " + COMPANY.serviceArea,
    value: COMPANY.address,
    href: "https://www.google.com/maps",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: COMPANY.openingHours,
    value: COMPANY.phone,
    href: `tel:${COMPANY.phone}`,
  },
];

const Contact = () => {
  const location = useLocation();
  const { user } = useAuth();
  const { data: profile } = useUserProfile(user?.id);

  const quoteData = location.state?.quoteData as QuoteData | undefined;

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: quoteData?.serviceSlug || "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Pre-fill form with user data when logged in
  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        fullName: profile?.full_name || prev.fullName,
        email: user.email || prev.email,
        phone: profile?.phone || prev.phone,
      }));
    }
  }, [user, profile]);

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
        // Submit quote request to database
        const { error } = await supabase.from("quote_requests").insert({
          full_name: formData.fullName,
          phone: formData.phone,
          email: formData.email || null,
          service_slug: quoteData.serviceSlug,
          service_title: quoteData.serviceTitle,
          complexity_label: quoteData.complexityLabel,
          complexity_multiplier: quoteData.complexityMultiplier,
          estimated_hours: quoteData.estimatedHours,
          urgency: quoteData.urgency,
          base_price: quoteData.basePrice,
          estimated_min: quoteData.estimatedMin,
          estimated_max: quoteData.estimatedMax,
          notes: formData.notes || null,
        });

        if (error) throw error;

        // Send email notification to dhalefdnf@outlook.com
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
        // Regular contact form - save to contacts table
        const { error } = await supabase.from("contacts").insert({
          full_name: formData.fullName,
          phone: formData.phone,
          email: formData.email || null,
          service: formData.service || null,
          notes: formData.notes || null,
        });

        if (error) throw error;

        // Send email notification to dhalefdnf@outlook.com
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

      // Reset form
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        service: "",
        notes: "",
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
      <section className="pt-32 pb-16 px-4">
        <div className="container-custom mx-auto text-center">
          <FadeIn>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-primary">Contact</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {quoteData ? "Request Official Quote" : "Contact Us"}
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {quoteData
                ? "Complete your information below and we'll send you an official quote based on your estimate."
                : `Have a question or want to book a clean? Reach out to the ${COMPANY.name} team and we'll get back to you quickly.`}
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

      {/* Contact Form Section */}
      <section className="pb-20 px-4">
        <div className="container mx-auto section-padding">
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-12 mx-auto">
              {/* Image */}
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={contact}
                  alt="Professional cleaner at work"
                  className="w-full h-full object-cover min-h-[400px]"
                />
              </div>

              {/* Form */}
              <div className="bg-secondary rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  {quoteData ? "Your Information" : "Get In Touch"}
                </h2>

                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div>
                    <label className="block font-medium text-foreground mb-2">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <Input
                      className="bg-background h-12"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-foreground mb-2">
                      Phone <span className="text-destructive">*</span>
                    </label>
                    <Input
                      type="tel"
                      placeholder="Ex. 085 123 4567"
                      className="bg-background border-border h-12"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="bg-background border-border h-12"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  {!quoteData && (
                    <div>
                      <label className="block font-medium text-foreground mb-2">
                        Service
                      </label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) =>
                          setFormData({ ...formData, service: value })
                        }
                      >
                        <SelectTrigger className="bg-background border-border h-12">
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
                    <label className="block font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell us about your cleaning needs..."
                      className="bg-background border-border min-h-[120px]"
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? "Submitting..."
                      : quoteData
                        ? "Submit Quote Request"
                        : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-20 px-4">
        <div className="container-custom section-padding">
          <FadeIn>
            <div className="grid md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-secondary rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
                    <info.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {info.title}
                  </h3>
                  <p className="text-muted-foreground mb-2">{info.description}</p>
                  <a
                    href={info.href}
                    className="font-medium text-primary hover:underline"
                  >
                    {info.value}
                  </a>
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
