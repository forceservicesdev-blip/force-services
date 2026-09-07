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
  "industrial-cleaning": Truck,
  "post-construction-cleaning": Home,
  "exterior-cleaning": SprayCan,
  "custom-cleaning": KeyRound,
};

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pb-24 bg-secondary">
        <div className="container-custom section-padding">
          <div className="max-w-3xl">
            <div className="text-muted-foreground text-sm mb-4">
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-primary font-medium">Services</span>
            </div>

            <FadeIn>
              <h1 className="text-foreground font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
                Our Cleaning Services
              </h1>
            </FadeIn>
            <FadeIn delay={100}>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                From high-pressure power washing and building facades to commercial, industrial, and
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
                  <div className="group h-full flex flex-col rounded-2xl bg-card border border-border/70 overflow-hidden shadow-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 hover:border-primary/40">
                    {/* Card Image */}
                    <div className="relative h-56 w-full overflow-hidden bg-muted">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      {/* Floating Price Pill */}
                      <div className="absolute top-3 right-3 z-10">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-black/60 text-white backdrop-blur-md border border-white/20 shadow-sm">
                          From €{service.basePrice}
                        </span>
                      </div>

                      {/* Floating Service Icon */}
                      <div className="absolute bottom-3 left-4 z-10 w-11 h-11 rounded-xl bg-white/95 dark:bg-neutral-900/95 text-primary shadow-md flex items-center justify-center border border-white/30 backdrop-blur-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                        {service.shortDescription}
                      </p>

                      {/* Actions */}
                      <div className="flex items-center gap-3 pt-3 border-t border-border/40">
                        <Link to={`/services/${service.slug}`} className="flex-1">
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full gap-1.5 border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all rounded-lg"
                          >
                            Learn More
                          </Button>
                        </Link>
                        <Link to="/quote" state={{ serviceSlug: service.slug }} className="flex-1">
                          <Button
                            size="sm"
                            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all rounded-lg shadow-sm"
                          >
                            Get a Quote
                          </Button>
                        </Link>
                      </div>
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
