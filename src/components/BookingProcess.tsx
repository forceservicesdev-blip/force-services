import FadeIn from "@/components/FadeIn";
import { CalendarCheck, ClipboardList, Sparkles } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "1. Request a Quote",
    description: "Tell us about your property and cleaning needs using our quick online form or WhatsApp.",
  },
  {
    icon: CalendarCheck,
    title: "2. Book Your Slot",
    description: "We confirm a convenient date and time that fits around your schedule.",
  },
  {
    icon: Sparkles,
    title: "3. Enjoy a Spotless Space",
    description: "Our trained, insured team arrives on time and leaves your space fresh and sparkling clean.",
  },
];

const BookingProcess = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container-custom section-padding">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-h2 font-bold text-primary mb-4">Booking With Us Is Simple</h2>
            <p className="text-muted-foreground text-lg">Three easy steps to a cleaner commercial space or workplace.</p>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 100}>
              <div className="relative rounded-2xl bg-background p-8 shadow-card text-center h-full">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
                  <step.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingProcess;
