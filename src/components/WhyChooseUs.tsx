import { WHY_CHOOSE_US } from "@/lib/config";
import FadeIn from "@/components/FadeIn";
import { ShieldCheck, Clock3, BadgeCheck, Sparkles, CalendarClock, PiggyBank } from "lucide-react";

const icons = [BadgeCheck, Clock3, ShieldCheck, Sparkles, CalendarClock, PiggyBank];

const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container-custom section-padding">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-h2 font-bold text-primary mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground text-lg">
              We combine quality, reliability and care in every clean we deliver.
            </p>
          </div>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <FadeIn key={item.title} delay={index * 75}>
                <div className="h-full rounded-2xl bg-background p-8 shadow-card text-center">
                  <div className="w-14 h-14 rounded-full bg-tertiary/10 flex items-center justify-center mx-auto mb-5">
                    <Icon className="h-7 w-7 text-tertiary" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
