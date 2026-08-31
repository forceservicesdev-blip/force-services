import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CLEANING_SERVICES } from "@/lib/config";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import FadeIn from "@/components/FadeIn";

const propertyTypes = ["House", "Apartment", "Office", "Commercial Unit", "Other"];
const frequencies = ["One-off", "Weekly", "Fortnightly", "Monthly"];

const initialState = {
  fullName: "",
  phone: "",
  email: "",
  service: "",
  propertyType: "",
  preferredDate: "",
  preferredTime: "",
  frequency: "",
  bedrooms: "",
  bathrooms: "",
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
        formData.preferredTime && `Preferred time: ${formData.preferredTime}`,
        formData.bedrooms && `Bedrooms: ${formData.bedrooms}`,
        formData.bathrooms && `Bathrooms: ${formData.bathrooms}`,
        formData.message && `Message: ${formData.message}`,
      ].filter(Boolean);

      const { error } = await supabase.from("quote_requests").insert({
        full_name: formData.fullName,
        phone: formData.phone,
        email: formData.email || null,
        service_slug: selectedService?.slug || formData.service,
        service_title: selectedService?.title || formData.service,
        complexity_label: formData.propertyType || "Standard",
        complexity_multiplier: 1,
        estimated_hours: 1,
        urgency: formData.frequency || "one-off",
        base_price: selectedService?.basePrice ?? 0,
        estimated_min: selectedService?.basePrice ?? 0,
        estimated_max: selectedService?.basePrice ?? 0,
        service_date: formData.preferredDate || null,
        notes: notesParts.join(" | ") || null,
      });

      if (error) throw error;

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
            <h2 className="text-3xl md:text-h2 font-bold text-primary mb-4">Get a Free Quote</h2>
            <p className="text-muted-foreground text-lg">
              Tell us about your space and we'll get back to you with a no-obligation quote.
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
                <Input value={formData.fullName} onChange={(e) => update("fullName", e.target.value)} required />
              </div>
              <div>
                <label className="block font-medium text-primary mb-2">
                  Phone <span className="text-destructive">*</span>
                </label>
                <Input value={formData.phone} onChange={(e) => update("phone", e.target.value)} required />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block font-medium text-primary mb-2">Email</label>
                <Input type="email" value={formData.email} onChange={(e) => update("email", e.target.value)} />
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
                <label className="block font-medium text-primary mb-2">Property Type</label>
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
                <label className="block font-medium text-primary mb-2">Frequency</label>
                <Select value={formData.frequency} onValueChange={(v) => update("frequency", v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="How often?" />
                  </SelectTrigger>
                  <SelectContent>
                    {frequencies.map((freq) => (
                      <SelectItem key={freq} value={freq}>
                        {freq}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block font-medium text-primary mb-2">Preferred Date</label>
                <Input type="date" value={formData.preferredDate} onChange={(e) => update("preferredDate", e.target.value)} />
              </div>
              <div>
                <label className="block font-medium text-primary mb-2">Preferred Time</label>
                <Input type="time" value={formData.preferredTime} onChange={(e) => update("preferredTime", e.target.value)} />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block font-medium text-primary mb-2">Bedrooms</label>
                <Input type="number" min="0" value={formData.bedrooms} onChange={(e) => update("bedrooms", e.target.value)} />
              </div>
              <div>
                <label className="block font-medium text-primary mb-2">Bathrooms</label>
                <Input type="number" min="0" value={formData.bathrooms} onChange={(e) => update("bathrooms", e.target.value)} />
              </div>
            </div>

            <div>
              <label className="block font-medium text-primary mb-2">Message</label>
              <Textarea
                placeholder="Tell us anything else that might help us prepare your quote..."
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
