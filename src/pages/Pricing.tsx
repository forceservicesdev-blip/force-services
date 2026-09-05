import CTA from "@/components/CTA";
import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { COMPANY, FAQS } from "@/lib/config";
import { Check, Phone, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface Plan {
  name: string;
  price: number;
  unit: string;
  description: string;
  features: string[];
  recommended: boolean;
}

const pricingPlans: Record<"commercial" | "powerWashing", Plan[]> = {
  commercial: [
    {
      name: "Office & Retail Regular",
      price: 65,
      unit: "per visit / from",
      description: "Weekly or daily maintenance for offices and storefronts.",
      features: [
        "Workstations, desks & phones sanitized",
        "Staff kitchen & breakroom cleaning",
        "Restroom sanitizing & consumable restocking",
        "Commercial floor vacuuming & mopping",
        "Trash & recycling disposal",
        "Flexible after-hours scheduling",
      ],
      recommended: false,
    },
    {
      name: "Commercial Comprehensive",
      price: 150,
      unit: "per visit / from",
      description: "Full facility hygiene for multi-room offices, clinics, and showrooms.",
      features: [
        "All Office Regular features included",
        "Internal glass & partition streak-free polish",
        "High-touch point anti-bacterial fogging",
        "Deep carpet cleaning & hard floor buffing",
        "Dedicated supervisor inspection",
        "Emergency callout priority",
      ],
      recommended: true,
    },
    {
      name: "Industrial & Warehouse",
      price: 250,
      unit: "Starting from",
      description: "Heavy-duty factory, warehouse, and workshop degreasing.",
      features: [
        "Industrial floor machine scrubbing",
        "Heavy oil, tyre & grease removal",
        "High-level dust & rafter extraction",
        "Loading bay & roller shutter cleans",
        "Health & Safety compliance verification",
        "Hazardous waste clearance assistance",
      ],
      recommended: false,
    },
  ],
  powerWashing: [
    {
      name: "Driveway & Patio Refresh",
      price: 80,
      unit: "Starting from",
      description: "High-pressure clean for residential driveways and garden patios.",
      features: [
        "Concrete, paving & tarmac power wash",
        "Moss, algae & weed removal",
        "Sandstone & natural stone detailing",
        "Eco-friendly anti-fungal wash",
        "Free surface condition survey",
      ],
      recommended: false,
    },
    {
      name: "Full Exterior Package",
      price: 180,
      unit: "Starting from",
      description: "Complete home exterior makeover: driveway, patio, walls & decking.",
      features: [
        "Driveway + front & rear patio washing",
        "Timber decking gentle clean & algae strip",
        "Exterior wall & render soft-wash",
        "Footpaths & perimeter washdown",
        "Long-lasting moss prevention treatment",
      ],
      recommended: true,
    },
    {
      name: "Post-Construction Clean",
      price: 220,
      unit: "Starting from",
      description: "After-build sparkle cleaning for renovations and new constructions.",
      features: [
        "Rough debris & fine drywall dust removal",
        "Paint overspray & silicone removal",
        "Window glass, frame & sill detailing",
        "Kitchen & sanitary ware sparkle polish",
        "100% Move-in handover ready",
      ],
      recommended: false,
    },
  ],
};

const FAQItem = ({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof FAQS)[0];
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div
      className={`rounded-2xl mb-4 border transition-all duration-300 ${
        isOpen ? "bg-secondary border-primary/30" : "bg-card border-border"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between text-left"
      >
        <span className="font-bold text-lg md:text-xl text-foreground">
          {faq.question}
        </span>
        <div className="flex-shrink-0 ml-4">
          <span
            className={`flex h-8 w-8 items-center justify-center rounded-full text-lg font-bold transition-transform ${
              isOpen ? "bg-primary text-primary-foreground rotate-45" : "bg-secondary text-primary"
            }`}
          >
            +
          </span>
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-1 text-muted-foreground leading-relaxed text-base">
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
};

const Pricing = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"commercial" | "powerWashing">(
    "powerWashing"
  );
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const handleSelectPlan = (plan: Plan) => {
    navigate("/contact", {
      state: {
        planData: {
          planName: plan.name,
          planType: activeTab,
          price: plan.price,
        },
      },
    });
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
              <span className="text-primary font-medium">Pricing Plans</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Transparent, Competitive Pricing
            </h1>

            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Reliable, professional cleaning packages tailored to your property across Ennis, Limerick, and Galway. No hidden fees.
            </p>
          </FadeIn>

          {/* Toggle */}
          <FadeIn delay={100}>
            <div className="inline-flex bg-background rounded-full p-1.5 mt-8 border border-border shadow-sm">
              <button
                onClick={() => setActiveTab("powerWashing")}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeTab === "powerWashing"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Power Washing & Builders
              </button>
              <button
                onClick={() => setActiveTab("commercial")}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeTab === "commercial"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Commercial & Industrial
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container-custom section-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans[activeTab].map((plan, index) => {
              const isRecommended = plan.recommended;
              return (
                <FadeIn key={plan.name} delay={index * 100} className="h-full">
                  <div className="relative h-full">
                    {isRecommended && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                        <span className="bg-tertiary text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div
                      className={`rounded-2xl p-8 h-full flex flex-col border ${
                        isRecommended
                          ? "bg-primary text-primary-foreground border-primary shadow-xl"
                          : "bg-secondary border-border"
                      }`}
                    >
                      <h3
                        className={`text-xl font-bold ${
                          isRecommended ? "text-primary-foreground" : "text-foreground"
                        }`}
                      >
                        {plan.name}
                      </h3>

                      <p
                        className={`text-sm mt-2 mb-6 ${
                          isRecommended ? "text-primary-foreground/80" : "text-muted-foreground"
                        }`}
                      >
                        {plan.description}
                      </p>

                      <div className="mt-auto mb-6 pb-6 border-b border-border/40">
                        <span
                          className={`text-xs uppercase font-semibold block mb-1 ${
                            isRecommended ? "text-primary-foreground/70" : "text-muted-foreground"
                          }`}
                        >
                          {plan.unit}
                        </span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl md:text-5xl font-bold">€{plan.price}</span>
                          <span
                            className={`text-sm ${
                              isRecommended ? "text-primary-foreground/70" : "text-muted-foreground"
                            }`}
                          >
                            + VAT / estimate
                          </span>
                        </div>
                      </div>

                      <div className="mb-8 flex-1">
                        <h4
                          className={`font-bold text-sm uppercase tracking-wider mb-4 ${
                            isRecommended ? "text-tertiary" : "text-primary"
                          }`}
                        >
                          What's included:
                        </h4>

                        <ul className="space-y-3">
                          {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm">
                              <div
                                className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                                  isRecommended ? "bg-tertiary text-white" : "bg-primary text-primary-foreground"
                                }`}
                              >
                                <Check className="w-3 h-3" />
                              </div>
                              <span
                                className={
                                  isRecommended
                                    ? "text-primary-foreground/90 font-medium"
                                    : "text-foreground"
                                }
                              >
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-auto">
                        <Button
                          onClick={() => handleSelectPlan(plan)}
                          className={`w-full py-6 rounded-xl font-bold ${
                            isRecommended
                              ? "bg-tertiary text-white hover:bg-tertiary/90"
                              : "bg-primary text-primary-foreground hover:bg-primary/90"
                          }`}
                        >
                          Get Started / Book
                        </Button>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container-custom section-padding">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-lg">
                Have questions about pricing or service terms? Find answers below.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="max-w-4xl mx-auto">
              {FAQS.slice(0, 6).map((faq, index) => (
                <FAQItem
                  key={index}
                  faq={faq}
                  isOpen={openFAQ === index}
                  onToggle={() => setOpenFAQ(openFAQ === index ? null : index)}
                />
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

export default Pricing;