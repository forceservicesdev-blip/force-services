import { Button } from "@/components/ui/button";
import { CLEANING_SERVICES } from "@/lib/config";
import FadeIn from "@/components/FadeIn";
import {
  Home,
  Sparkles,
  KeyRound,
  Building2,
  Truck,
  Settings2,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const icons = [Home, Sparkles, KeyRound, Building2, Truck, Settings2];

const Services = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container-custom section-padding">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-h2 font-bold text-primary mb-4">Our Cleaning Services</h2>
            <p className="text-muted-foreground text-lg">
              From regular tidy-ups to deep cleans, we have a service to fit every home and business.
            </p>
          </div>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLEANING_SERVICES.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <FadeIn key={service.slug} delay={index * 75}>
                <div className="h-full flex flex-col rounded-2xl bg-secondary p-8 shadow-card transition-transform hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-1">{service.shortDescription}</p>
                  <div className="flex flex-wrap gap-3">
                    <Link to={`/services/${service.slug}`}>
                      <Button variant="outline" size="sm" className="gap-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Link to="/quote">
                      <Button size="sm" className="bg-tertiary text-tertiary-foreground hover:bg-tertiary/90">
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
  );
};

export default Services;
