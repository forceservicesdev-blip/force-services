import { TESTIMONIALS, COMPANY } from "@/lib/config";
import FadeIn from "@/components/FadeIn";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container-custom section-padding">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-h2 font-bold text-primary mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground text-lg">
              Real feedback from happy homes and businesses across {COMPANY.serviceArea}.
            </p>
          </div>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={index * 75}>
              <div className="h-full flex flex-col rounded-2xl bg-secondary p-8 shadow-card">
                <Quote className="h-8 w-8 text-tertiary mb-4" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-tertiary text-tertiary" />
                  ))}
                </div>
                <p className="text-foreground mb-6 flex-1">"{testimonial.text}"</p>
                <p className="font-bold text-primary">{testimonial.name}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
