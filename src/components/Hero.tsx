import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { COMPANY, WHATSAPP_MESSAGE } from "@/lib/config";
import {
  ShieldCheck,
  Clock,
  Sparkles,
  BadgeCheck,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import FadeIn from "@/components/FadeIn";

// Showcase images from servicesimages
import serviceImg3 from "@/assets/servicesimages/29135CF5-C3C9-4AEA-9FC7-03EC069FC362.JPG";
import serviceImg4 from "@/assets/servicesimages/339F02F5-130C-403D-9753-305EFD401A49.JPG";
import serviceImg5 from "@/assets/servicesimages/4a9514f2-b6a5-4430-831a-87e9378bb396.JPG";
import serviceImg6 from "@/assets/servicesimages/7DCC728B-3B09-4558-B11C-7DFC84FF5FE9.JPG";
import serviceImg7 from "@/assets/servicesimages/9a6116ae-c085-4131-99cd-8358d8281764.JPG";
import serviceImg8 from "@/assets/servicesimages/A4AFA8BF-E6B6-4A81-920C-9A0A26483CDF.JPG";
import serviceImg9 from "@/assets/servicesimages/a21e7b71-a5cf-40d8-b244-2b29387c877d.JPG";
import serviceImg10 from "@/assets/servicesimages/b54edaf1-6bad-4a1b-9de9-0a1b2923cd5b.JPG";
import serviceImg11 from "@/assets/servicesimages/b760514f-d69b-40b7-a559-9366f13c8736.JPG";
import serviceImg12 from "@/assets/servicesimages/d5036617-31ab-42dd-8cea-0d72f76bee06.JPG";

const badges = [
  { icon: ShieldCheck, label: "Fully Insured" },
  { icon: BadgeCheck, label: "Reliable & Professional" },
  { icon: Clock, label: "Flexible Scheduling" },
  { icon: Sparkles, label: "Satisfaction Guaranteed" },
];

const heroImages = [
  serviceImg3,
  serviceImg4,
  serviceImg5,
  serviceImg6,
  serviceImg7,
  serviceImg8,
  serviceImg9,
  serviceImg10,
  serviceImg11,
  serviceImg12,
];

interface HeroImageSliderProps {
  currentSlide: number;
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
  isPaused: boolean;
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}

const HeroImageSlider = ({
  currentSlide,
  setCurrentSlide,
  setIsPaused,
  className = "",
}: HeroImageSliderProps) => {
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div
      className={`group relative rounded-2xl overflow-hidden shadow-card border border-border/40 select-none bg-neutral-900 ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {heroImages.map((image, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <img
              src={image}
              alt="Commercial cleaning showcase"
              style={{ transitionDuration: "4000ms" }}
              className={`w-full h-full object-cover object-center transform transition-transform ease-out ${
                isActive ? "scale-105" : "scale-100"
              }`}
            />
          </div>
        );
      })}

      {/* Manual Navigation Controls (appear on hover / active) */}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          prevSlide();
        }}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          nextSlide();
        }}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Next image"
      >
        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>

      {/* Bottom Indicator Dots */}
      <div className="absolute bottom-3 sm:bottom-4 inset-x-0 z-20 flex justify-center pointer-events-none px-2">
        <div className="flex items-center gap-1.5 pointer-events-auto bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 max-w-[95%] overflow-x-auto no-scrollbar">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 flex-shrink-0 ${
                idx === currentSlide
                  ? "w-4 sm:w-5 bg-white shadow-sm"
                  : "w-1.5 bg-white/40 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const whatsappNumber = COMPANY.whatsappNumber.replace(/\D/g, "");
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className="relative overflow-hidden bg-secondary pt-6 pb-12 sm:pt-8 sm:pb-16 md:pt-10 md:pb-20 lg:pt-12 lg:pb-24">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
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
              Professional Commercial Cleaning in Clare &amp; Limerick
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-xl">
              Commercial, industrial and post-construction cleaning for businesses across Ennis, Shannon, Limerick and surrounding areas.
            </p>

            {/* Mobile Hero Image Slider - smoothly integrated with text on mobile */}
            <div className="block lg:hidden my-6">
              <HeroImageSlider
                currentSlide={currentSlide}
                setCurrentSlide={setCurrentSlide}
                isPaused={isPaused}
                setIsPaused={setIsPaused}
                className="w-full h-[260px] sm:h-[340px]"
              />
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

          {/* Desktop Hero Image Slider */}
          <FadeIn delay={150} className="hidden lg:block">
            <HeroImageSlider
              currentSlide={currentSlide}
              setCurrentSlide={setCurrentSlide}
              isPaused={isPaused}
              setIsPaused={setIsPaused}
              className="w-full h-[440px] md:h-[520px]"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
