import CTA from "@/components/CTA";
import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { COMPANY } from "@/lib/config";
import { Link } from "react-router-dom";

import work1 from "@/assets/work-1.png";
import work2 from "@/assets/work-2.png";
import work3 from "@/assets/work-3.png";
import work4 from "@/assets/work-4.png";
import work5 from "@/assets/work-5.png";
import work6 from "@/assets/work-6.png";

export const works = [
  {
    slug: "driveway-patio-power-wash",
    image: work1,
    title: "Driveway & Patio Power Wash",
    location: "Ennis, Co. Clare",
    category: "Power Washing",
    description:
      "Deep power washing of extensive residential driveway and patio paving. Eliminated years of embedded moss, black lichen, and slippery algae, restoring the original vibrant stone finish.",
  },
  {
    slug: "commercial-office-clean",
    image: work2,
    title: "Commercial Office Sanitization",
    location: "Limerick City",
    category: "Commercial Cleaning",
    description:
      "Comprehensive multi-story corporate office deep clean and ongoing sanitization contract. Includes workstation hygiene, boardroom detailing, glass partition buffing, and floor care.",
  },
  {
    slug: "warehouse-industrial-degreasing",
    image: work3,
    title: "Warehouse Floor Scrubbing & Degreasing",
    location: "Shannon Industrial Estate",
    category: "Industrial Cleaning",
    description:
      "Heavy-duty industrial scrub and degreasing of a 15,000 sq ft logistics facility. Removed tyre marks, machinery oil residues, and high-level structural dust.",
  },
  {
    slug: "post-construction-sparkle-clean",
    image: work4,
    title: "Post-Construction Builders Clean",
    location: "Galway Development",
    category: "Builders Clean",
    description:
      "Full after-build sparkle clean for a newly constructed residential complex. Complete dust extraction, window paint removal, sanitary ware polishing, and move-in handover ready.",
  },
  {
    slug: "building-facade-softwash",
    image: work5,
    title: "Commercial Building Facade Restoration",
    location: "Ennis, Co. Clare",
    category: "Exterior Cleaning",
    description:
      "Soft-washing and exterior facade pressure clean of a commercial building. Removed red atmospheric algae staining and environmental pollutants with zero damage to render.",
  },
  {
    slug: "residential-move-in-clean",
    image: work6,
    title: "Residential Deep & Move-In Clean",
    location: "Newmarket-on-Fergus",
    category: "Residential Deep Clean",
    description:
      "Total top-to-bottom sanitization of a 4-bedroom family home before moving in. Detailed kitchen oven degrease, bathroom limescale treatment, and carpet extraction.",
  },
];

const Work = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container-custom section-padding">
          <div className="text-muted-foreground text-sm mb-4">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary font-medium">Completed Projects</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-foreground text-4xl md:text-5xl lg:text-6xl font-bold">
                Featured Projects
              </h1>
              <p className="text-muted-foreground max-w-xl text-lg mt-3">
                Proven results across Ennis, Limerick, and Galway. See how {COMPANY.name} transforms residential, commercial, and industrial properties.
              </p>
            </div>
            <Link to="/quote">
              <span className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold px-8 py-4 hover:bg-primary/90 transition-colors shadow-sm">
                Get a Quote for Your Project
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Work Cards Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container-custom section-padding">
          <div className="grid md:grid-cols-2 gap-10 gap-y-16">
            {works.map((work, index) => (
              <FadeIn key={work.slug} delay={index * 100}>
                <Link to={`/work/${work.slug}`} className="group block">
                  <div className="overflow-hidden rounded-2xl mb-6 shadow-card bg-secondary relative">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-[360px] md:h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3.5 py-1.5 rounded-full text-xs font-semibold">
                      {work.category}
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="text-foreground text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                      {work.title}
                    </h3>
                  </div>
                  <p className="text-xs font-semibold text-tertiary uppercase tracking-wider mb-2">
                    📍 {work.location}
                  </p>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {work.description}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default Work;
