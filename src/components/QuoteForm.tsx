import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { sendFormEmail } from "@/lib/email";
import { trackLeadConversion } from "@/lib/analytics";
import { CLEANING_SERVICES, SERVICE_AREAS } from "@/lib/config";
import { toast } from "sonner";
import FadeIn from "@/components/FadeIn";
import { useNavigate } from "react-router-dom";

const propertyTypes = [
  "Commercial Office / Retail Store",
  "Industrial Warehouse / Factory",
  "Post-Construction / Renovation Site",
  "Commercial Grounds / Forecourt / Car Park",
  "Hospitality / Public Facility",
  "Other / Custom Facility",
];

const urgencyOptions = [
  { value: "standard", label: "Standard (Flexible / 3-5 days)" },
  { value: "urgent", label: "Urgent (Within 48 hours)" },
  { value: "emergency", label: "Emergency / Immediate" },
];

const initialState = {
  fullName: "",
  phone: "",
  email: "",
  service: "",
  propertyType: "",
  location: "",
  preferredDate: "",
  urgency: "standard",
  message: "",
};

const QuoteForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const update = (field: keyof typeof initialState, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.phone || !formData.service) {
      toast.error("Please fill in your name, phone and service required.");
      return;
    }

    setIsSubmitting(true);

    const selectedService = CLEANING_SERVICES.find((s) => s.slug === formData.service);

    try {
      const notesParts = [
        formData.propertyType && `Property type: ${formData.propertyType}`,
        formData.location && `Town/Location: ${formData.location}`,
        formData.message && `Message: ${formData.message}`,
      ].filter(Boolean);

      const sendResult = await sendFormEmail({
        subject: `New Quote Request: ${formData.fullName} - ${selectedService?.title || formData.service}`,
        replyTo: formData.email,
        data: {
          "Form Type": "Fast Quote Form",
          "Customer Name": formData.fullName,
          "Phone": formData.phone,
          "Email": formData.email || "Not provided",
          "Service": selectedService?.title || formData.service,
          "Property Type": formData.propertyType || "Standard",
          "Location": formData.location || "Ennis / Limerick / Galway",
          "Preferred Date": formData.preferredDate || "Flexible",
          "Urgency": formData.urgency || "standard",
          "Message / Notes": notesParts.join(" | ") || "None",
        },
      });

      if (!sendResult.success) {
        if (sendResult.requiresActivation) {
          toast.error("Notification service requires initial confirmation. Please contact us by phone or WhatsApp.");
        } else {
          toast.error(sendResult.message || "Failed to submit quote request. Please try again.");
        }
        return;
      }

      // Track lead conversion in GA4 only after confirmed successful delivery
      trackLeadConversion({
        form_type: "fast_quote",
        service: selectedService?.title || formData.service,
        currency: "EUR",
        value: 1,
      });

      toast.success("Quote request submitted! We'll be in touch shortly.");
      const submittedName = formData.fullName;
      const submittedService = selectedService?.title || formData.service;
      setFormData(initialState);

      navigate("/thank-you", {
        state: {
          name: submittedName,
          service: submittedService,
          type: "fast_quote",
        },
      });
    } catch (error) {
      console.error("Error submitting quote request:", error);
      toast.error("Network error while submitting. Please check your connection or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="quote" className="py-20 md:py-28 bg-secondary">
      <div className="container-custom section-padding">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-h2 font-bold text-primary mb-4">Request a Free Quote</h2>
            <p className="text-muted-foreground text-lg">
              Tell us about your property and cleaning requirements across Ennis, Limerick & Galway. Fast, no-obligation quote.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={75}>
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-background rounded-2xl shadow-card p-6 sm:p-10 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block font-medium text-primary mb-2">
                  Full Name <span className="text-destructive">*</span>
                </label>
                <Input
                  value={formData.fullName}
                  onChange={(e) => update("fullName", e.target.value)}
                  placeholder="e.g. John Murphy"
                  required
                />
              </div>
              <div>
                <label className="block font-medium text-primary mb-2">
                  Phone Number <span className="text-destructive">*</span>
                </label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="e.g. 087 123 4567"
                  required
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block font-medium text-primary mb-2">Email</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block font-medium text-primary mb-2">
                  Service Required <span className="text-destructive">*</span>
                </label>
                <Select value={formData.service} onValueChange={(v) => update("service", v)}>
                  <SelectTrigger>
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
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block font-medium text-primary mb-2">Property / Facility Type</label>
                <Select value={formData.propertyType} onValueChange={(v) => update("propertyType", v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select property type..." />
                  </SelectTrigger>
                  <SelectContent>
                    {propertyTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block font-medium text-primary mb-2">Town / Location</label>
                <Select value={formData.location} onValueChange={(v) => update("location", v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select area..." />
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

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block font-medium text-primary mb-2">Preferred Date</label>
                <Input
                  type="date"
                  value={formData.preferredDate}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => update("preferredDate", e.target.value)}
                />
              </div>
              <div>
                <label className="block font-medium text-primary mb-2">Urgency</label>
                <Select value={formData.urgency} onValueChange={(v) => update("urgency", v)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {urgencyOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="block font-medium text-primary mb-2">Project Details & Requirements</label>
              <Textarea
                placeholder="Tell us about the property condition, approximate size (e.g. 2-car driveway, 3-storey building facade), or any specific requirements..."
                className="min-h-[120px]"
                value={formData.message}
                onChange={(e) => update("message", e.target.value)}
              />
            </div>

            <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Request My Free Quote"}
            </Button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
};

export default QuoteForm;
