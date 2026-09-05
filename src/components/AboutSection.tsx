import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/config";
import FadeIn from "@/components/FadeIn";
import teamImage from "@/assets/cleaning-team.jpg";
import { Link } from "react-router-dom";
import { CheckCircle2, ShieldCheck, Sparkles, Star } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-card">
                <img
                  src={teamImage}
                  alt="Force Services cleaning team at work"
                  className="w-full h-[380px] md:h-[460px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 bg-primary text-primary-foreground p-5 rounded-2xl shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-tertiary text-white font-bold text-xl">
                  5+
                </div>
                <div>
                  <p className="font-bold text-sm">Years of Experience</p>
                  <p className="text-xs text-primary-foreground/70">Across Ireland</p>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="inline-flex items-center gap-2 rounded-full bg-tertiary/10 px-4 py-2 text-sm font-semibold text-tertiary mb-5">
              <Star className="h-4 w-4 fill-tertiary" />
              Trusted Cleaning Company in Ireland
            </div>
            <h2 className="text-3xl md:text-h2 font-bold text-primary mb-6 text-balance">
              Quality Work, Reliable Service & Peace of Mind
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              Founded 5 years ago in Ireland, <strong className="text-primary">{COMPANY.name}</strong> was built on a simple goal: to provide reliable, professional, and high-quality cleaning services our customers can truly depend on.
            </p>
            <p className="text-muted-foreground text-base mb-6">
              Over the years, we have gained valuable hands-on experience delivering superior power washing, commercial, industrial, and post-construction cleaning projects across {COMPANY.serviceArea} and surrounding regions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <CheckCircle2 className="h-5 w-5 text-tertiary flex-shrink-0" />
                <span>Qualified & Vetted Professionals</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <CheckCircle2 className="h-5 w-5 text-tertiary flex-shrink-0" />
                <span>High-Performance Equipment</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <CheckCircle2 className="h-5 w-5 text-tertiary flex-shrink-0" />
                <span>Fully Insured & Certified</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <CheckCircle2 className="h-5 w-5 text-tertiary flex-shrink-0" />
                <span>100% Satisfaction Guaranteed</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/about">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Read Our Full Story
                </Button>
              </Link>
              <Link to="/quote">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Get a Free Quote
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
