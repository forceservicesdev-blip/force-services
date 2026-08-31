import heroPlumber from "@/assets/hero-5.png";
import teamPlumber from "@/assets/hero-51.png";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/config";
import { CheckCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Qualified Professionals",
    description: "Vetted, insured, and experienced cleaning specialists committed to excellence.",
  },
  {
    title: "High-Performance Equipment",
    description: "Industrial pressure washers and heavy degreasing systems for superior cleaning power.",
  },
  {
    title: "5 Years of Proven Reliability",
    description: "Proudly serving residential, commercial, industrial, and building clients across Ireland.",
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 pb-32 relative bg-card">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left - Content */}
          <div>
            <FadeIn delay={100}>
              <p className="text-tertiary mb-3 font-bold uppercase tracking-wider text-sm">
                Why Work With Us
              </p>
            </FadeIn>
            <FadeIn delay={200}>
              <h2 className="text-primary mb-6 text-4xl md:text-5xl font-bold">
                Cleaning & Power Washing Solutions for Every Need
              </h2>
            </FadeIn>
            <FadeIn delay={300}>
              <p className="text-muted-foreground mb-8 text-lg">
                Building client trust through consistently exceptional service, attention to detail, and a proven track record across {COMPANY.serviceArea}.
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

            <a href={`tel:${COMPANY.phone}`}>
              <FadeIn delay={600}>
                <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                  <Phone className="h-4 w-4" />
                  Call {COMPANY.phone}
                </Button>
              </FadeIn>
            </a>
          </div>

          {/* Right - Image */}
          <FadeIn className="h-full">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-card">
                <img
                  src={heroPlumber}
                  alt={`${COMPANY.name} professional cleaning`}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 overflow-hidden rounded-2xl shadow-xl hidden sm:block border-4 border-background">
                <img
                  src={teamPlumber}
                  alt={`${COMPANY.name} cleaning team`}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Solutions;