import { Button } from "@/components/ui/button";
import { SERVICE_AREAS, COMPANY } from "@/lib/config";
import FadeIn from "@/components/FadeIn";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceAreas = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container-custom section-padding">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-h2 font-bold text-primary mb-4">Areas We Cover in County Clare &amp; Limerick</h2>
            <p className="text-muted-foreground text-lg">
              Delivering trusted commercial cleaning in Limerick, commercial cleaning in Ennis, and industrial cleaning in Shannon. We serve businesses, builders cleans, and facilities across County Clare and surrounding areas.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={75}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {SERVICE_AREAS.map((town) => (
              <div
                key={town}
                className="flex items-center gap-2 rounded-xl bg-secondary px-4 py-4 font-medium text-primary"
              >
                <MapPin className="h-5 w-5 text-tertiary flex-shrink-0" />
                <span>{town}</span>
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={150}>
          <div className="text-center">
            <p className="text-muted-foreground mb-4">Don't see your area listed? Get in touch — we may still be able to help.</p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Contact Us
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ServiceAreas;
