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
    <section className="relative overflow-hidden bg-secondary pt-6 pb-12 sm:pt-8 sm:pb-16 md:pt-10 md:pb-20 lg:pt-12 lg:pb-24">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Subtle geometric dot pattern */}
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(hsl(var(--primary))_1.5px,transparent_1.5px)] [background-size:24px_24px]" />

        {/* Ambient colored glowing blur orbs */}
        <div className="absolute -top-20 -right-20 w-[450px] h-[450px] rounded-full bg-tertiary/15 blur-[100px]" />
        <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -bottom-24 right-1/4 w-[380px] h-[380px] rounded-full bg-tertiary/10 blur-[90px]" />

        {/* Decorative circular vector rings */}
        <svg
          className="absolute top-6 right-8 text-primary/5 w-72 h-72 -rotate-12 hidden md:block"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
          <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1.5" />
        </svg>

        {/* Floating subtle ambient sparkles */}
        <div className="absolute top-12 left-[12%] text-tertiary/35 animate-pulse hidden sm:block">
          <Sparkles className="w-5 h-5" />
        </div>
        <div className="absolute bottom-16 right-[15%] text-primary/25 animate-pulse hidden sm:block">
          <Sparkles className="w-4 h-4" />
        </div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-h1 font-bold text-primary mb-6 text-balance">
              Professional Cleaning Services You Can Trust
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-xl">
              {COMPANY.description} Trusted across {COMPANY.serviceArea} for a spotless,
              high-standard finish every time.
            </p>

            {/* Mobile Hero Image - smoothly integrated with text on mobile */}
            <div className="block lg:hidden my-6">
              <div className="relative rounded-2xl overflow-hidden shadow-card border border-border/40">
                <img
                  src={heroImage}
                  alt="Professional cleaning specialist"
                  className="w-full h-[250px] sm:h-[320px] object-cover object-top"
                />
              </div>
            </div>

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
          {/* Desktop Hero Image - unchanged for desktop */}
          <FadeIn delay={150} className="hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={heroImage}
                alt="Professional cleaner"
                className="w-full h-[420px] md:h-[520px] object-cover object-top"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
