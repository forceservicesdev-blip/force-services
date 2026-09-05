import { useState, useEffect, useCallback, useRef } from "react";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  ChevronLeft,
  ChevronRight,
  Expand,
  MapPin,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

// Direct image imports from src/assets/images/
import service01 from "@/assets/images/service-01.jpeg";
import service02 from "@/assets/images/service-02.jpeg";
import service03 from "@/assets/images/service-03.jpeg";
import service04 from "@/assets/images/service-04.jpeg";
import service05 from "@/assets/images/service-05.jpeg";
import service06 from "@/assets/images/service-06.jpeg";
import service07 from "@/assets/images/service-07.jpeg";
import service08 from "@/assets/images/service-08.jpeg";
import service09 from "@/assets/images/service-09.jpeg";

/**
 * List of showcase projects (9 images located in src/assets/images/).
 * All images are displayed in standard 16:9 widescreen format.
 */
export const SHOWCASE_SERVICES = [
  {
    id: "01",
    image: service01,
    title: "High-Pressure Driveway & Kerb Washing",
    category: "Driveway Wash",
    location: "Ennis, Co. Clare",
    description: "Deep pressure washing stripping away years of heavy moss, lichen, and weather grime.",
    highlights: ["Deep moss removal", "Kerb & border detail", "Uniform streak-free finish"],
  },
  {
    id: "02",
    image: service02,
    title: "Commercial Forecourt & Pavement Clean",
    category: "Commercial",
    location: "Co. Clare Commercial Site",
    description: "Large-scale surface cleaning restoring safety, slip resistance, and clean business appeal.",
    highlights: ["High PSI hot wash", "Oil & stain mitigation", "Zero surface damage"],
  },
  {
    id: "03",
    image: service03,
    title: "Patio & Paving Slab Revitalisation",
    category: "Patio & Paving",
    location: "Residential Garden",
    description: "Revival of natural paving stone colors, washing away slippery algae and embedded soil.",
    highlights: ["Joint-safe wash", "Natural stone revival", "Anti-fungal treatment"],
  },
  {
    id: "04",
    image: service04,
    title: "Stone Wall & Perimeter Restoration",
    category: "Masonry Wash",
    location: "Private Residence",
    description: "Specialized pressure and chemical treatment bringing out the natural beauty of stone boundaries.",
    highlights: ["Organic stain removal", "Masonry preservation", "Clean finish"],
  },
  {
    id: "05",
    image: service05,
    title: "Exterior Wall Soft Washing & Facade",
    category: "Facade Care",
    location: "Domestic Property",
    description: "Low-pressure softwash treatment removing red and green algae without damaging paint or render.",
    highlights: ["Render safe", "Long-lasting biocide", "Immediate curb appeal"],
  },
  {
    id: "06",
    image: service06,
    title: "Commercial Property Grounds Wash",
    category: "Industrial",
    location: "Business Yard",
    description: "Heavy-duty cleaning for car parks, loading bays, and commercial concrete surfaces.",
    highlights: ["Heavy-duty equipment", "Fast turnaround", "Commercial grade"],
  },
  {
    id: "07",
    image: service07,
    title: "Block Paving & Pathway Renewal",
    category: "Surface Cleaning",
    location: "Residential Pathway",
    description: "Targeted jet washing clearing weeds, dirt, and built-up grime between pavers.",
    highlights: ["Weed eradication", "Deep surface clean", "Smooth even finish"],
  },
  {
    id: "08",
    image: service08,
    title: "Roof & Gutter Deep Clearance",
    category: "Roof & Gutter",
    location: "County Clare",
    description: "Removal of heavy moss growth, unclogging gutters, and pressure rinsing exterior fascia.",
    highlights: ["Full moss scrape", "Downpipe clearing", "Overflow prevention"],
  },
  {
    id: "09",
    image: service09,
    title: "Decking & Timber Exterior Wash",
    category: "Timber Care",
    location: "Private Garden Deck",
    description: "Gentle yet effective pressure treatment restoring wood grain without splintering.",
    highlights: ["Non-destructive wash", "Algae removal", "Slip prevention"],
  },
];

const AUTOPLAY_INTERVAL = 5000; // 5 seconds per slide

const BeforeAfter = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Touch and Drag swipe refs for Lightbox
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const mouseStartX = useRef<number | null>(null);
  const isMouseDown = useRef<boolean>(false);
  const lastWheelTime = useRef<number>(0);

  // Update slide count and current index from embla
  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Autoplay functionality with smooth pause on hover and when lightbox is open
  useEffect(() => {
    if (!api || isHovered || lightboxIndex !== null) {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
      return;
    }

    autoplayTimerRef.current = setInterval(() => {
      api.scrollNext();
    }, AUTOPLAY_INTERVAL);

    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    };
  }, [api, isHovered, lightboxIndex]);

  // Keyboard navigation for Lightbox
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;

      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % SHOWCASE_SERVICES.length : 0));
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + SHOWCASE_SERVICES.length) % SHOWCASE_SERVICES.length : 0
        );
      }
    },
    [lightboxIndex]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Touch swipe handlers for Lightbox
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 45) {
      // Swiped left -> next
      setLightboxIndex((prev) => (prev !== null ? (prev + 1) % SHOWCASE_SERVICES.length : 0));
    } else if (distance < -45) {
      // Swiped right -> prev
      setLightboxIndex((prev) =>
        prev !== null ? (prev - 1 + SHOWCASE_SERVICES.length) % SHOWCASE_SERVICES.length : 0
      );
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Mouse drag handlers for Lightbox
  const handleMouseDown = (e: React.MouseEvent) => {
    isMouseDown.current = true;
    mouseStartX.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isMouseDown.current || mouseStartX.current === null) return;
    const distance = mouseStartX.current - e.clientX;
    if (distance > 50) {
      setLightboxIndex((prev) => (prev !== null ? (prev + 1) % SHOWCASE_SERVICES.length : 0));
    } else if (distance < -50) {
      setLightboxIndex((prev) =>
        prev !== null ? (prev - 1 + SHOWCASE_SERVICES.length) % SHOWCASE_SERVICES.length : 0
      );
    }
    isMouseDown.current = false;
    mouseStartX.current = null;
  };

  // Mouse wheel scroll navigation inside Lightbox
  const handleWheel = (e: React.WheelEvent) => {
    const now = Date.now();
    if (now - lastWheelTime.current < 350) return; // Debounce wheel
    if (e.deltaY > 25 || e.deltaX > 25) {
      setLightboxIndex((prev) => (prev !== null ? (prev + 1) % SHOWCASE_SERVICES.length : 0));
      lastWheelTime.current = now;
    } else if (e.deltaY < -25 || e.deltaX < -25) {
      setLightboxIndex((prev) =>
        prev !== null ? (prev - 1 + SHOWCASE_SERVICES.length) % SHOWCASE_SERVICES.length : 0
      );
      lastWheelTime.current = now;
    }
  };

  const activeItem = lightboxIndex !== null ? SHOWCASE_SERVICES[lightboxIndex] : null;

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background via-secondary/15 to-background relative overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[350px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[300px] bg-tertiary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container-custom section-padding relative z-10">
        {/* Header with Title & Navigation Controls */}
        <FadeIn>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl lg:text-h2 font-bold text-primary tracking-tight">
                See the Difference a Professional Clean Makes
              </h2>
              <p className="text-muted-foreground text-base md:text-lg mt-3">
                Explore our recent domestic, commercial, and exterior restoration projects across Clare & surrounding areas.
              </p>
            </div>

            {/* Slide Navigation & Counter Controls */}
            <div className="flex items-center gap-3 self-start lg:self-end bg-card/90 backdrop-blur-md p-2 rounded-2xl border border-border shadow-sm">
              {/* Progress counter */}
              <div className="flex items-center gap-1 text-sm font-semibold px-2 py-1">
                <span className="text-primary font-bold text-base">
                  {String(current || 1).padStart(2, "0")}
                </span>
                <span className="text-muted-foreground/60 text-xs">/</span>
                <span className="text-muted-foreground text-xs">
                  {String(count || SHOWCASE_SERVICES.length).padStart(2, "0")}
                </span>
              </div>

              <div className="h-5 w-px bg-border mx-0.5" />

              {/* Next / Prev Buttons */}
              <div className="flex items-center gap-1.5">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 rounded-xl border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                  onClick={() => api?.scrollPrev()}
                  aria-label="Previous project"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 rounded-xl border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                  onClick={() => api?.scrollNext()}
                  aria-label="Next project"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Carousel Presentation Slider with 16:9 Standard Ratio */}
        <FadeIn delay={100}>
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative"
          >
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4 md:-ml-6 py-4">
                {SHOWCASE_SERVICES.map((item, index) => (
                  <CarouselItem
                    key={item.id}
                    className="pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3"
                  >
                    <div
                      onClick={() => setLightboxIndex(index)}
                      className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer select-none"
                    >
                      {/* Standardized 16:9 Aspect Ratio Container */}
                      <div className="relative aspect-video w-full overflow-hidden bg-neutral-950">
                        {/* Ambient blurred backdrop for photos of any orientation */}
                        <img
                          src={item.image}
                          alt=""
                          aria-hidden="true"
                          className="absolute inset-0 w-full h-full object-cover filter blur-lg scale-125 opacity-40 pointer-events-none"
                        />

                        {/* Standardized crisp foreground image (16:9 framed) */}
                        <img
                          src={item.image}
                          alt={item.title}
                          className="relative z-10 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                          loading="lazy"
                        />

                        {/* Vignette & Gradient Overlay */}
                        <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/85 via-black/20 to-black/10 opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 right-3 z-30 flex items-center justify-between pointer-events-none">
                          <span className="rounded-full bg-black/70 backdrop-blur-md px-2.5 py-0.5 text-[11px] font-bold text-white border border-white/20 tracking-wider shadow-xs">
                            #{item.id}
                          </span>
                          <span className="rounded-full bg-primary/95 backdrop-blur-md px-3 py-0.5 text-[11px] font-semibold text-primary-foreground shadow-xs">
                            {item.category}
                          </span>
                        </div>

                        {/* Bottom Image Info Banner */}
                        <div className="absolute bottom-3 left-3 right-3 z-30 flex items-center justify-between text-white/90">
                          <div className="flex items-center gap-1.5 text-[11px] font-medium bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10">
                            <MapPin className="h-3 w-3 text-tertiary" />
                            <span>{item.location}</span>
                          </div>

                          {/* Zoom prompt icon */}
                          <div className="p-1.5 rounded-full bg-white/20 backdrop-blur-md text-white group-hover:bg-primary group-hover:text-primary-foreground transition-colors shadow-md">
                            <Expand className="h-3.5 w-3.5" />
                          </div>
                        </div>
                      </div>

                      {/* Card Details & Content */}
                      <div className="p-5 flex-1 flex flex-col justify-between gap-3">
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-1">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground text-xs sm:text-sm mt-1.5 line-clamp-2 leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        {/* Highlights pills */}
                        <div className="pt-2.5 border-t border-border/70 flex flex-wrap gap-1.5">
                          {item.highlights.slice(0, 2).map((h) => (
                            <span
                              key={h}
                              className="text-[11px] font-medium bg-secondary text-secondary-foreground px-2 py-0.5 rounded-md"
                            >
                              ✓ {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Interactive Thumbnails Navigation Strip */}
          <div className="mt-8 flex items-center justify-center gap-2 overflow-x-auto py-2 px-1 scrollbar-none">
            {SHOWCASE_SERVICES.map((item, idx) => {
              const isActive = current === idx + 1;
              return (
                <button
                  key={item.id}
                  onClick={() => api?.scrollTo(idx)}
                  className={`group relative rounded-lg overflow-hidden transition-all duration-300 flex-shrink-0 cursor-pointer ${
                    isActive
                      ? "ring-2 ring-primary ring-offset-2 ring-offset-background scale-105 opacity-100 shadow-md"
                      : "opacity-45 hover:opacity-90"
                  }`}
                  aria-label={`Jump to slide ${idx + 1}: ${item.title}`}
                >
                  <div className="w-14 h-8 sm:w-16 sm:h-9 bg-neutral-900 aspect-video">
                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <span className="absolute bottom-0 inset-x-0 bg-black/80 text-[9px] font-bold text-white text-center py-0.5 leading-none">
                    #{item.id}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Bottom Conversion Banner - Clean & Fully Responsive */}
          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-primary/10 via-primary/5 to-tertiary/10 border border-primary/20 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 w-full box-border">
            <div className="space-y-1.5 text-center md:text-left max-w-xl">
              <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold text-primary uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4 text-tertiary" />
                <span>Quality Guaranteed Across Every Project</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-foreground">
                Want similar sparkling results for your property?
              </h4>
              <p className="text-sm text-muted-foreground">
                Request an official free quote online in less than 2 minutes. No hidden fees or obligations.
              </p>
            </div>

            <div className="w-full md:w-auto flex justify-center md:justify-end flex-shrink-0">
              <Link to="/quote" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full px-8 py-6 text-base shadow-md transition-all hover:shadow-lg"
                >
                  Get a Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Fullscreen High-Resolution Lightbox Modal with Scroll/Swipe Support */}
      {activeItem && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200 select-none"
          onClick={() => setLightboxIndex(null)}
          onWheel={handleWheel}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) =>
                prev !== null ? (prev - 1 + SHOWCASE_SERVICES.length) % SHOWCASE_SERVICES.length : 0
              );
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all cursor-pointer backdrop-blur-md"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) =>
                prev !== null ? (prev + 1) % SHOWCASE_SERVICES.length : 0
              );
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all cursor-pointer backdrop-blur-md"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Lightbox Container with interactive swipe / drag / wheel scrolling */}
          <div
            className="max-w-4xl w-full bg-card rounded-3xl overflow-hidden shadow-2xl border border-border/40 flex flex-col max-h-[92vh] touch-pan-y"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
          >
            {/* Main Stage with Standardized 16:9 Frame */}
            <div className="relative w-full aspect-video overflow-hidden bg-neutral-950 flex items-center justify-center cursor-grab active:cursor-grabbing">
              {/* Blurred atmospheric backdrop */}
              <img
                src={activeItem.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover filter blur-2xl scale-125 opacity-35 pointer-events-none"
              />

              {/* Standardized crisp foreground image in exact 16:9 */}
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="relative z-10 w-full h-full object-cover object-center pointer-events-none transition-transform duration-300"
              />

              {/* Tags overlay */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 pointer-events-none">
                <span className="rounded-full bg-black/75 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-white border border-white/20">
                  {activeItem.id} of {SHOWCASE_SERVICES.length}
                </span>
                <span className="rounded-full bg-primary px-3.5 py-1 text-xs font-semibold text-primary-foreground">
                  {activeItem.category}
                </span>
              </div>

              {/* Swipe/Scroll Hint Badge */}
              <div className="absolute bottom-3 right-4 z-20 hidden sm:flex items-center gap-1.5 text-[11px] font-medium bg-black/60 backdrop-blur-md text-white/80 px-2.5 py-1 rounded-full border border-white/10 pointer-events-none">
                <span>Swipe / Scroll / Arrows to browse</span>
              </div>
            </div>

            {/* Scrollable In-Modal Thumbnail Bar */}
            <div className="bg-neutral-950/80 px-4 py-2.5 border-t border-border/40 flex items-center justify-center gap-2 overflow-x-auto scrollbar-none">
              {SHOWCASE_SERVICES.map((item, idx) => {
                const isActive = lightboxIndex === idx;
                return (
                  <button
                    key={item.id}
                    onClick={() => setLightboxIndex(idx)}
                    className={`group relative rounded-md overflow-hidden transition-all duration-200 flex-shrink-0 cursor-pointer ${
                      isActive
                        ? "ring-2 ring-primary ring-offset-1 ring-offset-background scale-105 opacity-100"
                        : "opacity-40 hover:opacity-85"
                    }`}
                    aria-label={`Show project ${idx + 1}`}
                  >
                    <div className="w-12 h-7 sm:w-14 sm:h-8 bg-neutral-900 aspect-video">
                      <img
                        src={item.image}
                        alt=""
                        className="w-full h-full object-cover object-center pointer-events-none"
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom Details Footer */}
            <div className="p-5 sm:p-6 bg-card border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-tertiary" />
                  <span>{activeItem.location}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">
                  {activeItem.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm max-w-2xl line-clamp-2">
                  {activeItem.description}
                </p>
              </div>

              <div className="flex items-center gap-3 flex-shrink-0">
                <Link to="/quote" onClick={() => setLightboxIndex(null)}>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full px-6 shadow-md">
                    Request Quote For This
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BeforeAfter;
