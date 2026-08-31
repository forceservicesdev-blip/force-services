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
import { CLEANING_SERVICES } from "@/lib/config";
import {
  Bath,
  BedDouble,
  Calculator,
  Calendar,
  Check,
  Clock,
  DollarSign,
  Home,
  Repeat,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export interface QuoteData {
  serviceSlug: string;
  serviceTitle: string;
  complexityLabel: string;
  complexityMultiplier: number;
  estimatedHours: number;
  urgency: "standard" | "urgent" | "emergency";
  basePrice: number;
  estimatedMin: number;
  estimatedMax: number;
  propertyType: string;
  bedrooms: number;
  bathrooms: number;
  frequency: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}

const PROPERTY_TYPES = [
  "Apartment",
  "Terraced / Semi-Detached House",
  "Detached House",
  "Office / Commercial Unit",
];

const FREQUENCIES = [
  { value: "one-off", label: "One-Off", multiplier: 1 },
  { value: "weekly", label: "Weekly", multiplier: 0.8 },
  { value: "fortnightly", label: "Fortnightly", multiplier: 0.88 },
  { value: "monthly", label: "Monthly", multiplier: 0.95 },
];

const URGENCY_MULTIPLIER: Record<string, number> = {
  standard: 1,
  urgent: 1.15,
  emergency: 1.3,
};

const QuoteCalculator = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const preselectedSlug = location.state?.serviceSlug as string | undefined;

  const [selectedService, setSelectedService] = useState<string>(
    preselectedSlug || ""
  );
  const [propertyType, setPropertyType] = useState<string>(PROPERTY_TYPES[0]);
  const [bedrooms, setBedrooms] = useState<number>(2);
  const [bathrooms, setBathrooms] = useState<number>(1);
  const [frequency, setFrequency] = useState<string>("one-off");
  const [preferredDate, setPreferredDate] = useState<string>("");
  const [preferredTime, setPreferredTime] = useState<string>("");
  const [urgency, setUrgency] = useState<"standard" | "urgent" | "emergency">(
    "standard"
  );
  const [notes, setNotes] = useState<string>("");

  const service = CLEANING_SERVICES.find((s) => s.slug === selectedService);
  const frequencyOption =
    FREQUENCIES.find((f) => f.value === frequency) || FREQUENCIES[0];

  const calculateEstimate = () => {
    if (!service) return { min: 0, max: 0 };

    const roomsAddOn = bedrooms * 15 + bathrooms * 10;
    const subtotal = (service.basePrice + roomsAddOn) * frequencyOption.multiplier;
    const total = subtotal * URGENCY_MULTIPLIER[urgency];

    return {
      min: Math.round(total * 0.9),
      max: Math.round(total * 1.1),
    };
  };

  const estimate = calculateEstimate();

  const handleRequestQuote = () => {
    if (!service) return;

    const quoteData: QuoteData = {
      serviceSlug: service.slug,
      serviceTitle: service.title,
      complexityLabel: `${propertyType}, ${bedrooms} bed / ${bathrooms} bath, ${frequencyOption.label}`,
      complexityMultiplier: frequencyOption.multiplier,
      estimatedHours: bedrooms + bathrooms,
      urgency,
      basePrice: service.basePrice,
      estimatedMin: estimate.min,
      estimatedMax: estimate.max,
      propertyType,
      bedrooms,
      bathrooms,
      frequency: frequencyOption.label,
      preferredDate,
      preferredTime,
      notes,
    };

    navigate("/contact", { state: { quoteData } });
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
              <span className="text-primary font-medium">Quote Calculator</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Get Your Free Estimate
            </h1>

            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Tell us about your property and cleaning needs to get an instant
              price estimate. No obligation, no hidden fees.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-background">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calculator Form */}
            <FadeIn>
              <div className="bg-secondary sticky top-6 h-max rounded-2xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">
                    Quote Calculator
                  </h2>
                </div>

                <div className="space-y-8">
                  {/* Service Selection */}
                  <div className="space-y-3">
                    <Label className="text-base font-medium text-foreground">
                      Service Required
                    </Label>
                    <Select value={selectedService} onValueChange={setSelectedService}>
                      <SelectTrigger className="h-14 text-base bg-background">
                        <SelectValue placeholder="Choose a service..." />
                      </SelectTrigger>
                      <SelectContent>
                        {CLEANING_SERVICES.map((s) => (
                          <SelectItem key={s.slug} value={s.slug} className="text-base">
                            <div className="flex items-center gap-3">
                              <span>{s.title}</span>
                              <span className="text-muted-foreground">
                                (from €{s.basePrice})
                              </span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {service && (
                    <>
                      {/* Property Type */}
                      <FadeIn>
                        <div className="space-y-3">
                          <Label className="text-base font-medium text-foreground">
                            <Home className="w-4 h-4 inline mr-2" />
                            Property Type
                          </Label>
                          <Select value={propertyType} onValueChange={setPropertyType}>
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
                      </FadeIn>

                      {/* Bedrooms & Bathrooms */}
                      <FadeIn delay={100}>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <Label className="text-base font-medium text-foreground">
                              <BedDouble className="w-4 h-4 inline mr-2" />
                              Bedrooms
                            </Label>
                            <Input
                              type="number"
                              min={0}
                              max={10}
                              value={bedrooms}
                              onChange={(e) =>
                                setBedrooms(Math.max(0, Number(e.target.value)))
                              }
                              className="h-14 text-base bg-background"
                            />
                          </div>
                          <div className="space-y-3">
                            <Label className="text-base font-medium text-foreground">
                              <Bath className="w-4 h-4 inline mr-2" />
                              Bathrooms
                            </Label>
                            <Input
                              type="number"
                              min={0}
                              max={10}
                              value={bathrooms}
                              onChange={(e) =>
                                setBathrooms(Math.max(0, Number(e.target.value)))
                              }
                              className="h-14 text-base bg-background"
                            />
                          </div>
                        </div>
                      </FadeIn>

                      {/* Frequency */}
                      <FadeIn delay={150}>
                        <div className="space-y-3">
                          <Label className="text-base font-medium text-foreground">
                            <Repeat className="w-4 h-4 inline mr-2" />
                            Frequency
                          </Label>
                          <div className="grid grid-cols-2 gap-3">
                            {FREQUENCIES.map((f) => (
                              <button
                                key={f.value}
                                type="button"
                                onClick={() => setFrequency(f.value)}
                                className={`p-4 rounded-xl border-2 text-left transition-all ${
                                  frequency === f.value
                                    ? "border-primary bg-primary/5"
                                    : "border-border hover:border-primary/50"
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <p className="font-semibold text-foreground">
                                    {f.label}
                                  </p>
                                  {frequency === f.value && (
                                    <Check className="w-4 h-4 text-primary" />
                                  )}
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      </FadeIn>

                      {/* Preferred Date & Time */}
                      <FadeIn delay={200}>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <Label className="text-base font-medium text-foreground">
                              <Calendar className="w-4 h-4 inline mr-2" />
                              Preferred Date
                            </Label>
                            <Input
                              type="date"
                              value={preferredDate}
                              onChange={(e) => setPreferredDate(e.target.value)}
                              min={new Date().toISOString().split("T")[0]}
                              className="h-14 text-base bg-background"
                            />
                          </div>
                          <div className="space-y-3">
                            <Label className="text-base font-medium text-foreground">
                              <Clock className="w-4 h-4 inline mr-2" />
                              Preferred Time
                            </Label>
                            <Input
                              type="time"
                              value={preferredTime}
                              onChange={(e) => setPreferredTime(e.target.value)}
                              className="h-14 text-base bg-background"
                            />
                          </div>
                        </div>
                      </FadeIn>

                      {/* Urgency Selection */}
                      <FadeIn delay={250}>
                        <div className="space-y-3">
                          <Label className="text-base font-medium text-foreground">
                            Urgency
                          </Label>
                          <div className="grid grid-cols-3 gap-3">
                            {(["standard", "urgent", "emergency"] as const).map(
                              (level) => (
                                <button
                                  key={level}
                                  type="button"
                                  onClick={() => setUrgency(level)}
                                  className={`p-4 rounded-xl border-2 text-center transition-all capitalize ${
                                    urgency === level
                                      ? "border-primary bg-primary/5"
                                      : "border-border hover:border-primary/50"
                                  }`}
                                >
                                  <Clock className="w-5 h-5 mx-auto mb-2 text-muted-foreground" />
                                  <p className="font-semibold text-sm text-foreground">
                                    {level}
                                  </p>
                                </button>
                              )
                            )}
                          </div>
                        </div>
                      </FadeIn>

                      {/* Additional Notes */}
                      <FadeIn delay={300}>
                        <div className="space-y-3">
                          <Label className="text-base font-medium text-foreground">
                            Additional Notes
                          </Label>
                          <Textarea
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder="Anything specific we should know?"
                            className="min-h-[100px] bg-background"
                          />
                        </div>
                      </FadeIn>
                    </>
                  )}
                </div>
              </div>
            </FadeIn>

            {/* Estimate Display */}
            <FadeIn delay={100}>
              <div className="lg:sticky lg:top-32 space-y-6">
                <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                      <DollarSign className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold">Your Estimate</h2>
                  </div>

                  {service ? (
                    <div className="space-y-6">
                      <div>
                        <p className="text-primary-foreground/70 mb-2">
                          Estimated Cost Range
                        </p>
                        <p className="text-5xl md:text-6xl font-bold">
                          €{estimate.min} - €{estimate.max}
                        </p>
                      </div>

                      <div className="border-t border-primary-foreground/20 pt-6 space-y-4">
                        <div className="flex items-center gap-3">
                          <Sparkles className="w-5 h-5 text-accent" />
                          <div>
                            <p className="font-medium">{service.title}</p>
                            <p className="text-sm text-primary-foreground/70">
                              {propertyType}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <BedDouble className="w-5 h-5 text-accent" />
                          <p className="font-medium">
                            {bedrooms} bed / {bathrooms} bath
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Repeat className="w-5 h-5 text-accent" />
                          <p className="font-medium">{frequencyOption.label}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-accent" />
                          <p className="font-medium capitalize">{urgency} service</p>
                        </div>
                      </div>

                      <div className="pt-4">
                        <Button
                          variant="accent"
                          size="lg"
                          className="w-full rounded-full text-lg py-6"
                          onClick={handleRequestQuote}
                        >
                          Request Official Quote
                        </Button>
                        <p className="text-center text-sm text-primary-foreground/60 mt-3">
                          *This is an estimate. Final pricing is confirmed after a
                          quick chat with our team.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Calculator className="w-16 h-16 mx-auto mb-4 text-primary-foreground/30" />
                      <p className="text-xl font-medium text-primary-foreground/70">
                        Select a service to see your estimate
                      </p>
                    </div>
                  )}
                </div>

                {/* Service Price List */}
                <div className="bg-secondary rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-4 text-foreground">
                    Base Prices
                  </h3>
                  <div className="space-y-3">
                    {CLEANING_SERVICES.map((s) => (
                      <div
                        key={s.slug}
                        className={`flex items-center justify-between p-3 rounded-lg transition-all ${
                          selectedService === s.slug
                            ? "bg-primary/10"
                            : "hover:bg-primary/10"
                        }`}
                      >
                        <span className="text-sm font-medium text-foreground">
                          {s.title}
                        </span>
                        <span className="text-sm font-bold text-primary">
                          From €{s.basePrice}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-secondary">
        <div className="container-custom section-padding">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                How Our Pricing Works
              </h2>
              <p className="text-muted-foreground text-lg mb-12">
                Our estimates are based on the service type, property size, how
                often you need us, and urgency level.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={100}>
              <div className="bg-card h-full rounded-2xl p-8 text-center border border-border">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">
                  Service Type
                </h3>
                <p className="text-muted-foreground">
                  Each service has a base price depending on scope and products
                  required.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="bg-card h-full rounded-2xl p-8 text-center border border-border">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">
                  Property Size
                </h3>
                <p className="text-muted-foreground">
                  Bedrooms and bathrooms affect time and effort required for a
                  thorough clean.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="bg-card h-full rounded-2xl p-8 text-center border border-border">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Repeat className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">
                  Frequency
                </h3>
                <p className="text-muted-foreground">
                  Regular cleans (weekly, fortnightly, monthly) come with
                  discounted rates.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default QuoteCalculator;
