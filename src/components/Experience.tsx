import cleaningTeam from "@/assets/cleaning-team.jpg";
import CounterAnimation from "@/components/CounterAnimation";
import FadeIn from "@/components/FadeIn";
import { COMPANY } from "@/lib/config";
import { Link } from "react-router-dom";

const stats = [
  {
    number: 5,
    suffix: "+",
    label: "Years in Ireland",
    decimals: 0,
  },
  {
    number: 1,
    suffix: "k+",
    label: "Jobs Completed",
    decimals: 0,
  },
  {
    number: 100,
    suffix: "%",
    label: "Satisfaction Rate",
    decimals: 0,
  },
];

const Experience = () => {
  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="container-custom section-padding">
        {/* Top Text */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <FadeIn>
            <p className="text-primary font-bold mb-4 uppercase tracking-wider text-sm">
              Welcome to {COMPANY.name}
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="text-foreground font-bold text-4xl md:text-5xl">
              Professional Cleaning, Power Washing & Facility Maintenance Across {COMPANY.serviceArea}
            </h2>
          </FadeIn>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <FadeIn delay={200}>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-card max-h-[500px]">
                <img
                  src={cleaningTeam}
                  alt={`${COMPANY.name} team on site`}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </FadeIn>

          {/* Right - Text Content */}
          <div>
            <FadeIn delay={300}>
              <h3 className="text-foreground font-bold text-3xl mb-6">
                We focus on customer satisfaction, reliability, and pristine results
              </h3>
            </FadeIn>
            <FadeIn delay={400}>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Founded 5 years ago in Ireland, our team of skilled professionals is dedicated to providing superior power washing, commercial, industrial, and post-construction cleaning services. We treat every property with respect and meticulous care.
              </p>
            </FadeIn>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <FadeIn key={index} delay={500 + index * 100}>
                  <div>
                    <div className="text-4xl md:text-5xl font-bold mb-1 text-primary">
                      <CounterAnimation
                        target={stat.number}
                        decimals={stat.decimals}
                        suffix={stat.suffix}
                        duration={2000}
                        suffixClassName="text-tertiary"
                      />
                    </div>
                    <p className="text-foreground text-sm font-semibold">{stat.label}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
            <Link to="/about">
              <FadeIn delay={800}>
                <span className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold px-8 py-4 hover:bg-primary/90 transition-colors shadow-sm">
                  Learn More About Us
                </span>
              </FadeIn>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;