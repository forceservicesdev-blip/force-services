import CTA from "@/components/CTA";
import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { CLEANING_SERVICES, COMPANY } from "@/lib/config";
import {
  Building2,
  Home,
  KeyRound,
  Sparkles,
  SprayCan,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";

const SERVICE_ICONS: Record<string, typeof Home> = {
  "power-washing": Sparkles,
  "commercial-cleaning": Building2,
  "industrial-cleaning": Building2,
  "post-construction-cleaning": Building2,
  "custom-cleaning": SprayCan,
};

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pb-24 bg-secondary">
        <div className="container-custom section-padding">
          <div className="text-muted-foreground text-sm mb-4">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary">Services</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <FadeIn>
              <h1 className="text-foreground font-bold text-4xl md:text-5xl lg:text-6xl">
                Our Cleaning Services
              </h1>
            </FadeIn>
            <FadeIn delay={100}>
              <p className="text-muted-foreground text-lg lg:pt-4">
                From high-pressure power washing to commercial, industrial, and
                post-construction cleaning, {COMPANY.name} offers a full range of
                professional cleaning services across {COMPANY.serviceArea}.
                Fully insured, fully trusted, and tailored to you.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Service Cards Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container-custom section-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CLEANING_SERVICES.map((service, index) => {
              const Icon = SERVICE_ICONS[service.slug] || Sparkles;
              return (
                <FadeIn key={service.slug} delay={index * 100}>
                  <div className="group flex flex-col h-full rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:bg-primary hover:border-primary">
                    <div className="w-14 h-14 rounded-full bg-primary/10 group-hover:bg-primary-foreground/10 flex items-center justify-center mb-6 transition-colors duration-300">
                      <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-card-foreground group-hover:text-primary-foreground transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-primary-foreground/80 mb-6 flex-1 transition-colors duration-300">
                      {service.shortDescription}
                    </p>
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-bold text-primary group-hover:text-primary-foreground transition-colors duration-300">
                        From €{service.basePrice}
                      </span>
                      <Link to="/quote" state={{ serviceSlug: service.slug }}>
                        <Button
                          size="sm"
                          variant="outline"
                          className="rounded-full group-hover:bg-primary-foreground group-hover:text-primary group-hover:border-primary-foreground"
                        >
                          Get a Quote
                        </Button>
                      </Link>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default Services;
