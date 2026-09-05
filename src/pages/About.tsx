import cleaningTeam from "@/assets/cleaning-team.jpg";
import CounterAnimation from "@/components/CounterAnimation";
import CTA from "@/components/CTA";
import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { COMPANY, WHY_CHOOSE_US } from "@/lib/config";
import {
  Award,
  CheckCircle,
  Heart,
  Leaf,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { value: 5, suffix: "+", label: "Years in Ireland", decimals: 0 },
  { value: 1000, suffix: "+", label: "Projects Completed", decimals: 0 },
  { value: 100, suffix: "%", label: "Satisfaction Guarantee", decimals: 0 },
  { value: 6, suffix: "", label: "Specialized Services", decimals: 0 },
];

const coreValues = [
  {
    title: "Quality & Attention to Detail",
    description:
      "We take immense pride in every job we complete, paying close attention to every detail to ensure a high-quality finish every single time.",
    icon: Sparkles,
  },
  {
    title: "Professional & Reliable",
    description:
      "We are committed to our customers. We respect your property, arrive on time, communicate clearly, and take every job seriously.",
    icon: ShieldCheck,
  },
  {
    title: "5 Years of Proven Experience",
    description:
      "With 5 years in Ireland, we have developed the specialized knowledge and skills to handle demanding residential, commercial, industrial, and construction cleans.",
    icon: Award,
  },
  {
    title: "High-Performance Materials & Equipment",
    description:
      "We invest in advanced heavy-duty power washers, industrial equipment, and premium cleaning products for maximum efficiency.",
    icon: Zap,
  },
  {
    title: "Fully Insured & Registered",
    description:
      `Book with total peace of mind. Force Services is fully registered (CRO: ${COMPANY.cro}) and insured for domestic and commercial projects.`,
    icon: Wrench,
  },
  {
    title: "Customer Satisfaction First",
    description:
      "Our mission is not simply to clean a property, but to leave every space looking its absolute best and give our customers peace of mind.",
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
            <div className="max-w-3xl mb-12">
              <div className="text-muted-foreground text-sm mb-4">
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <span className="text-primary font-medium">About Us</span>
              </div>
              <FadeIn>
                <h1 className="leading-tight text-foreground font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
                  About {COMPANY.name}
                </h1>
              </FadeIn>
              <FadeIn delay={100}>
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                  {COMPANY.description} Founded 5 years ago in Ireland with a commitment to quality, reliability, and honesty.
                </p>
              </FadeIn>
            </div>
            <FadeIn>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-card">
                  <img
                    src={cleaningTeam}
                    alt="Force Services professional cleaning team"
                    className="w-full h-[320px] md:h-[420px] lg:h-[500px] object-cover"
                  />
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-card rounded-2xl shadow-xl px-6 py-6 w-[90%] md:w-auto border border-border">
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
                        <p className="text-muted-foreground text-xs md:text-sm mt-1 font-medium">
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

        {/* Our Story & Mission Section */}
        <section className="pt-36 pb-20 lg:pt-44 lg:pb-32 bg-background">
          <div className="container-custom section-padding">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary mb-4">
                  <Target className="h-4 w-4" />
                  Our Story & Mission
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Building Long-Lasting Trust Across Ireland
                </h2>
                <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
                  <p>
                    <strong className="text-foreground">{COMPANY.name}</strong> was founded five years ago in Ireland with a simple goal: to provide reliable, professional, and high-quality cleaning services that our customers can truly depend on.
                  </p>
                  <p>
                    What started as a small business has grown through hard work, dedication, and, most importantly, the trust of our customers. Over the years, we have gained valuable experience working with residential properties, commercial spaces, and post-construction projects throughout {COMPANY.serviceArea} and beyond.
                  </p>
                  <p>
                    We take pride in every job we complete and believe that attention to detail, professionalism, and excellent customer service are the foundation of a successful cleaning company.
                  </p>
                  <p className="border-l-4 border-tertiary pl-4 italic text-foreground font-medium">
                    "Our mission is not simply to clean a property, but to leave every space looking its best and give our customers peace of mind knowing the job has been done properly."
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={150}>
                <div className="bg-secondary rounded-3xl p-8 md:p-10 border border-border shadow-sm">
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    Company Highlights
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 mt-1 font-bold">
                        ✓
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground text-lg">Qualified Professionals</h4>
                        <p className="text-muted-foreground text-sm">
                          Trained technicians skilled in power washing, commercial, industrial, and post-construction environments.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 mt-1 font-bold">
                        ✓
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground text-lg">High-Grade Materials & Equipment</h4>
                        <p className="text-muted-foreground text-sm">
                          Heavy-duty pressure washers and specialized sanitization products that achieve superior performance.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 mt-1 font-bold">
                        ✓
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground text-lg">Official Registration & Insurance</h4>
                        <p className="text-muted-foreground text-sm">
                          Company Registration Number: <strong className="text-foreground">{COMPANY.cro}</strong>. Fully insured for complete security.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 mt-1 font-bold">
                        ✓
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground text-lg">Tailored Cleaning Solutions</h4>
                        <p className="text-muted-foreground text-sm">
                          We adapt our services to meet the specific requirements and timeline of every customer and project.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container-custom section-padding">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-primary font-bold mb-3 uppercase tracking-wider text-sm">Our Commitments</p>
              <h2 className="text-foreground text-3xl md:text-4xl lg:text-5xl font-bold">What Sets Us Apart</h2>
              <p className="text-muted-foreground text-lg mt-4">
                Choosing a cleaning company means choosing someone you can trust with your home or business. We provide more than just cleaning — we provide quality, reliability, and peace of mind.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <FadeIn key={index} delay={index * 80}>
                  <div className="bg-card rounded-2xl p-8 border border-border h-full shadow-sm hover:shadow-card transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6">
                      <value.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-card-foreground font-bold text-xl mb-3">
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

        {/* Why Choose Us Grid */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container-custom section-padding">
            <div className="text-center mb-16">
              <p className="text-primary font-bold mb-3 uppercase tracking-wider text-sm">Why Choose Us</p>
              <h2 className="text-foreground text-3xl md:text-4xl lg:text-5xl font-bold">Why Clients Choose {COMPANY.name}</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHY_CHOOSE_US.map((item, index) => (
                <FadeIn key={index} delay={index * 60}>
                  <div className="bg-secondary rounded-2xl p-8 h-full border border-border">
                    <h4 className="font-bold text-primary text-lg mb-2">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/quote">
                <span className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold px-8 py-4 hover:bg-primary/90 transition-colors shadow-sm">
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
