import { Button } from "@/components/ui/button";
import { COMPANY, WHATSAPP_MESSAGE } from "@/lib/config";
import heroImage from "@/assets/cleaning-hero.jpg";
import { ShieldCheck, Clock, Sparkles, BadgeCheck, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import FadeIn from "@/components/FadeIn";

const badges = [
  { icon: ShieldCheck, label: "Fully Insured" },
  { icon: BadgeCheck, label: "Reliable & Professional" },
  { icon: Clock, label: "Flexible Scheduling" },
  { icon: Sparkles, label: "Satisfaction Guaranteed" },
];

const Hero = () => {
  const whatsappNumber = COMPANY.whatsappNumber.replace(/\D/g, "");
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className="relative overflow-hidden bg-secondary pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-h1 font-bold text-primary mb-6 text-balance">
              Professional Cleaning Services You Can Trust
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              {COMPANY.description} Trusted by homes and businesses across {COMPANY.serviceArea} for a spotless,
              healthier space every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link to="/quote">
                <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
                  Get a Free Quote
                </Button>
              </Link>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Us
                </Button>
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {badges.map((badge) => (
                <div key={badge.label} className="flex items-center gap-2 rounded-lg bg-background/70 p-3 shadow-sm">
                  <badge.icon className="h-5 w-5 text-tertiary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{badge.label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={heroImage}
                alt="Professional cleaner tidying a bright, spotless home"
                className="w-full h-[420px] md:h-[520px] object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
