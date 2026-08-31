import { useRef, useState } from "react";
import FadeIn from "@/components/FadeIn";
import kitchenImage from "@/assets/cleaning-kitchen.jpg";
import bathroomImage from "@/assets/cleaning-bathroom.jpg";
import { MoveHorizontal } from "lucide-react";

interface SliderProps {
  beforeSrc: string;
  afterSrc: string;
  label: string;
}

const CompareSlider = ({ beforeSrc, afterSrc, label }: SliderProps) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  };

  return (
    <div>
      <div
        ref={containerRef}
        className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden select-none shadow-card cursor-ew-resize"
        onMouseMove={(e) => e.buttons === 1 && updatePosition(e.clientX)}
        onTouchMove={(e) => updatePosition(e.touches[0].clientX)}
      >
        <img src={afterSrc} alt={`${label} after cleaning`} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
          <img
            src={beforeSrc}
            alt={`${label} before cleaning`}
            className="h-full object-cover"
            style={{ width: containerRef.current?.clientWidth ?? "100%", maxWidth: "none" }}
          />
        </div>
        <div
          className="absolute top-0 bottom-0 w-1 bg-background shadow-lg"
          style={{ left: `calc(${position}% - 2px)` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background shadow-lg flex items-center justify-center">
            <MoveHorizontal className="h-4 w-4 text-primary" />
          </div>
        </div>
        <span className="absolute top-3 left-3 rounded-full bg-primary/80 px-3 py-1 text-xs font-semibold text-primary-foreground">
          Before
        </span>
        <span className="absolute top-3 right-3 rounded-full bg-tertiary/90 px-3 py-1 text-xs font-semibold text-tertiary-foreground">
          After
        </span>
      </div>
      <p className="text-center text-sm text-muted-foreground mt-3">{label}</p>
    </div>
  );
};

const BeforeAfter = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container-custom section-padding">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-h2 font-bold text-primary mb-4">
              See the Difference a Professional Clean Makes
            </h2>
            <p className="text-muted-foreground text-lg">
              Drag the slider to compare. Real results from our recent jobs.
            </p>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-10">
          <FadeIn>
            <CompareSlider beforeSrc={kitchenImage} afterSrc={kitchenImage} label="Kitchen Deep Clean" />
          </FadeIn>
          <FadeIn delay={100}>
            <CompareSlider beforeSrc={bathroomImage} afterSrc={bathroomImage} label="Bathroom Deep Clean" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
