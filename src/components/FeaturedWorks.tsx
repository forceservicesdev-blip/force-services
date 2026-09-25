import completedBathroom from "@/assets/completed-bathroom.jpg";
import completedKitchen from "@/assets/completed-kitchen.jpg";
import heroGrid1 from "@/assets/hero-grid-1.jpg";
import FadeIn from "@/components/FadeIn";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Driveway & Patio Power Wash",
    description: "Deep pressure cleaning and moss removal restoring natural paving stone.",
    image: heroGrid1,
    slug: "driveway-patio-power-wash",
  },
  {
    title: "Post-Construction Clean",
    description: "After-build sparkle cleaning for turnkey property handover.",
    image: completedKitchen,
    slug: "post-construction-sparkle-clean",
  },
  {
    title: "Commercial & Office Cleaning",
    description: "High-standard sanitization for commercial offices, facilities, and business premises.",
    image: completedBathroom,
    slug: "commercial-office-clean",
  },
];

const FeaturedWorks = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getCardWidth = (index: number) => {
    if (hoveredIndex === null) {
      return index === 0 ? "60%" : "20%";
    }
    return hoveredIndex === index ? "60%" : "20%";
  };

  return (
    <section className="py-20 lg:py-32 bg-primary">
      <div className="container-custom section-padding">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <div>
            <FadeIn>
              <p className="text-tertiary font-medium mb-4 uppercase tracking-wider text-sm">OUR PORTFOLIO</p>
            </FadeIn>
            <FadeIn delay={100}>
              <h2 className="text-white">
                Featured
                <br />
                Recent Projects
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={200}>
            <p className="text-white/80 max-w-xl mt-6 lg:mt-0 text-base leading-relaxed">
              Explore our portfolio of commercial power washing, office cleaning, and post-construction cleaning projects across Ennis, Shannon, Clare, and Limerick. Every job reflects our dedication to quality and detail.
            </p>
          </FadeIn>
        </div>

        {/* Projects Grid */}
        <FadeIn delay={300}>
          <div className="flex flex-col md:flex-row gap-4">
            {projects.map((project, index) => (
              <Link
                to={`/work/${project.slug}`}
                key={index}
                className="relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out block h-80 md:h-96"
                style={{ width: undefined }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-85" />

                {/* Arrow Icon */}
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center">
                    <ArrowUpRight className="h-5 w-5 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-white text-2xl font-bold mb-2">{project.title}</h4>
                  <p className="text-white/80 text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FeaturedWorks;
