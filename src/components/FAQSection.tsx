import { FAQS } from "@/lib/config";
import FadeIn from "@/components/FadeIn";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FAQSection = () => {
  const featuredFaqs = FAQS.slice(0, 5);

  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container-custom section-padding">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-h2 font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">Answers to the questions we hear most often.</p>
          </div>
        </FadeIn>
        <FadeIn delay={75}>
          <div className="max-w-3xl mx-auto rounded-2xl bg-background p-4 sm:p-8 shadow-card">
            <Accordion type="single" collapsible className="w-full">
              {featuredFaqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeIn>
        <FadeIn delay={150}>
          <div className="text-center mt-8">
            <Link
              to="/faq"
              className="inline-flex items-center gap-1 font-semibold text-primary hover:text-tertiary transition-colors"
            >
              View All FAQs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FAQSection;
