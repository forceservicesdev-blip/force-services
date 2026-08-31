import cleaningTeam from "@/assets/cleaning-team.jpg";
import CounterAnimation from "@/components/CounterAnimation";
import CTA from "@/components/CTA";
import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { COMPANY, WHY_CHOOSE_US } from "@/lib/config";
import {
  Heart,
  Leaf,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { value: 10, suffix: "+", label: "Years Experience", decimals: 0 },
  { value: 5000, suffix: "+", label: "Happy Clients", decimals: 0 },
  { value: 30, suffix: "+", label: "Cleaners", decimals: 0 },
  { value: 6, suffix: "", label: "Services Offered", decimals: 0 },
];

const coreValues = [
  {
    title: "Trusted Team",
    description:
      "Every member of our cleaning team is vetted, trained and trusted to work in your home or business.",
    icon: Users,
  },
  {
    title: "Reliable Service",
    description:
      "We show up on time, every time, and deliver a consistent standard of clean you can count on.",
    icon: ShieldCheck,
  },
  {
    title: "Attention to Detail",
    description:
      "From skirting boards to light switches, we don't miss the small details that make a big difference.",
    icon: Sparkles,
  },
  {
    title: "Eco-Friendly Products",
    description:
      "We use environmentally responsible cleaning products that are safe for your family, pets and staff.",
    icon: Leaf,
  },
  {
    title: "Fully Insured",
    description:
      "Book with total confidence knowing our team is fully insured for domestic and commercial work.",
    icon: Wrench,
  },
  {
    title: "Customer First",
    description:
      "Your satisfaction is our priority. We listen, adapt and go the extra mile on every clean.",
    icon: Heart,
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-24 lg:pb-32 bg-secondary">
          <div className="container-custom section-padding">
            <FadeIn>
              <div className="flex lg:flex-row w-full flex-col gap-8 items-end justify-between mb-12">
                <h1 className="leading-tight text-foreground font-bold text-4xl md:text-5xl lg:text-6xl">
                  Ireland&apos;s Trusted<br />Cleaning Partner
                </h1>
                <div className="flex max-w-[468px] items-center">
                  <p className="text-muted-foreground">
                    {COMPANY.name} has been keeping homes and businesses across{" "}
                    {COMPANY.serviceArea} spotless for over a decade. Local,
                    reliable and fully insured — we treat every property like
                    our own.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden">
                  <img
                    src={cleaningTeam}
                    alt="Our professional cleaning team"
                    className="w-full h-[320px] md:h-[420px] lg:h-[500px] object-cover"
                  />
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-card rounded-2xl shadow-xl px-6 py-6 w-[90%] md:w-auto">
                  <div className="flex flex-wrap justify-center divide-x divide-border">
                    {stats.map((stat, index) => (
                      <div
                        key={index}
                        className="px-4 md:px-6 first:pl-0 last:pr-0 text-center"
                      >
                        <div className="flex items-baseline justify-center gap-0.5 text-3xl md:text-5xl font-bold mb-1 text-primary">
                          <CounterAnimation
                            target={stat.value}
                            decimals={stat.decimals}
                            suffix={stat.suffix}
                            duration={2000}
                          />
                        </div>
                        <p className="text-muted-foreground text-xs md:text-sm mt-1">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-background">
          <div className="container-custom section-padding">
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              <div>
                <p className="text-primary font-bold mb-4">Why Choose Us</p>
                <h2 className="text-foreground">Our Core Values</h2>
              </div>
              <div className="flex items-center">
                <p className="text-muted-foreground">
                  We believe cleaning is about more than tidiness — it&apos;s
                  about trust. That&apos;s why every job is backed by our
                  commitment to reliability, care and quality.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((value, index) => (
                <FadeIn key={index} delay={index * 100}>
                  <div className="bg-card rounded-2xl p-8 border border-border h-full">
                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-6">
                      <value.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-card-foreground font-bold mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container-custom section-padding">
            <div className="text-center mb-16">
              <p className="text-primary font-bold mb-4">What Sets Us Apart</p>
              <h2 className="text-foreground">Why Clients Choose {COMPANY.name}</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHY_CHOOSE_US.map((item, index) => (
                <FadeIn key={index} delay={index * 80}>
                  <div className="bg-card rounded-2xl p-6 h-full border border-border">
                    <h4 className="font-bold text-card-foreground mb-2">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/quote">
                <span className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold px-8 py-4 hover:bg-primary/90 transition-colors">
                  Get Your Free Quote
                </span>
              </Link>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default About;
