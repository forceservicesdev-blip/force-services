import { Button } from "@/components/ui/button";
import { CLEANING_SERVICES } from "@/lib/config";
import FadeIn from "@/components/FadeIn";
import { cn } from "@/lib/utils";
import {
  Building2,
  Home,
  KeyRound,
  Sparkles,
  SprayCan,
  Truck,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const SERVICE_ICONS: Record<string, typeof Sparkles> = {
  "power-washing": Sparkles,
  "commercial-cleaning": Building2,
  "industrial-cleaning": Truck,
  "post-construction-cleaning": Home,
  "exterior-cleaning": SprayCan,
  "custom-cleaning": KeyRound,
};

const Services = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container-custom section-padding">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-h2 font-bold text-primary mb-4">Our Cleaning Services</h2>
            <p className="text-muted-foreground text-lg">
              From power washing and commercial maintenance to industrial facilities and post-construction cleans, we have a specialized solution for every property.
            </p>
          </div>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CLEANING_SERVICES.map((service, index) => {
            const Icon = SERVICE_ICONS[service.slug] || Sparkles;
            return (
              <FadeIn key={service.slug} delay={index * 75}>
                <div className="group h-full flex flex-col rounded-2xl bg-card border border-border/70 overflow-hidden shadow-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 hover:border-primary/40">
                  {/* Card Image */}
                  <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-muted">
                    <img
                      src={service.image}
                      alt={service.title}
                      className={cn(
                        "w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105",
                        (service.slug === "power-washing" || service.slug === "exterior-cleaning") && "object-bottom"
                      )}
                      style={{
                        objectPosition: (service.slug === "power-washing" || service.slug === "exterior-cleaning") ? "center 75%" : undefined
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

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
                          <ArrowRight className="h-3.5 w-3.5" />
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
  );
};

export default Services;
