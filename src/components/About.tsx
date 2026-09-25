import plumberTeam from "@/assets/hero-4.png";
import plumberTeam1 from "@/assets/hero-41.png";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/config";
import { CheckCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Qualified Professionals",
    description: "Our team consists of vetted, insured, and highly trained cleaning technicians.",
  },
  {
    title: "Comprehensive Solutions",
    description: "From commercial power washing to industrial plant cleans, we handle every job with expertise.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-card">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left - Image */}
          <FadeIn>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-card">
                <img
                  src={plumberTeam}
                  alt={`${COMPANY.name} professional team`}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 overflow-hidden rounded-2xl shadow-xl hidden sm:block border-4 border-background">
                <img
                  src={plumberTeam1}
                  alt={`${COMPANY.name} cleaning team`}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </FadeIn>

          {/* Right - Content */}
          <div>
            <FadeIn delay={100}>
              <p className="text-tertiary mb-3 font-bold uppercase tracking-wider text-sm">
                Who We Are
              </p>
            </FadeIn>
            <FadeIn delay={200}>
              <h2 className="text-primary mb-6 text-4xl md:text-5xl font-bold">
                Trusted Cleaning Company in Ireland
              </h2>
            </FadeIn>
            <FadeIn delay={300}>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                For over 5 years, {COMPANY.name} has been providing exceptional cleaning and power washing services across {COMPANY.serviceArea}. Our commitment to quality and customer satisfaction sets us apart.
              </p>
            </FadeIn>

            {/* Features */}
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <FadeIn key={index} delay={400 + index * 100}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-tertiary" />
                    </div>
                    <div>
                      <h4 className="text-primary text-xl mb-1 font-bold">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
            <a href={`tel:${COMPANY.phone}`} data-location="about_phone">
              <FadeIn delay={600}>
                <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                  <Phone className="h-4 w-4" />
                  Call {COMPANY.phone}
                </Button>
              </FadeIn>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;