import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/config";
import FadeIn from "@/components/FadeIn";
import teamImage from "@/assets/cleaning-team.jpg";
import { Link } from "react-router-dom";
import { HeartHandshake } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src={teamImage}
                alt="Our friendly local cleaning team"
                className="w-full h-[380px] md:h-[460px] object-cover"
              />
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="inline-flex items-center gap-2 rounded-full bg-tertiary/10 px-4 py-2 text-sm font-semibold text-tertiary mb-5">
              <HeartHandshake className="h-4 w-4" />
              A local, family-run business
            </div>
            <h2 className="text-3xl md:text-h2 font-bold text-primary mb-6 text-balance">
              Proudly Serving {COMPANY.serviceArea} With Cleaning You Can Rely On
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              We started {COMPANY.name} with a simple goal: to give homes and businesses across{" "}
              {COMPANY.county} a cleaning service they can trust, delivered by people who genuinely care about the
              details.
            </p>
            <p className="text-muted-foreground text-lg mb-8">
              Every member of our team is trained, insured and vetted, so you can welcome us into your home or
              workplace with total peace of mind.
            </p>
            <Link to="/about">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Learn More About Us
              </Button>
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
