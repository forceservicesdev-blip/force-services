import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { sendFormEmail } from "@/lib/email";
import { CLEANING_SERVICES, SERVICE_AREAS } from "@/lib/config";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import FadeIn from "@/components/FadeIn";

const propertyTypes = [
  "Residential (House / Patio / Driveway)",
  "Commercial Office / Retail Store",
  "Industrial Warehouse / Factory",
  "Post-Construction / Renovation Site",
  "Forecourt / Car Park / Exterior",
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

      const { error } = await supabase.from("quote_requests").insert({
        full_name: formData.fullName,
        phone: formData.phone,
        email: formData.email || null,
        service_slug: selectedService?.slug || formData.service,
        service_title: selectedService?.title || formData.service,
        complexity_label: `${formData.propertyType || "Standard"} • ${formData.location || "Ennis/Limerick/Galway"}`,
        complexity_multiplier: 1,
        estimated_hours: 1,
        urgency: formData.urgency || "standard",
        base_price: selectedService?.basePrice ?? 0,
        estimated_min: 0,
        estimated_max: 0,
        service_date: formData.preferredDate || null,
        notes: notesParts.join(" | ") || null,
      });

      if (error) throw error;

      // Send email notification to dhalefdnf@outlook.com
      await sendFormEmail({
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

      toast.success("Quote request submitted! We'll be in touch shortly.");
      setFormData(initialState);
    } catch (error) {
      console.error("Error submitting quote request:", error);
      toast.error("Something went wrong. Please try again.");
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
