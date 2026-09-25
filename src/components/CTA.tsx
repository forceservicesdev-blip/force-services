import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { COMPANY, WHATSAPP_MESSAGE } from "@/lib/config";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const whatsappHref = `https://wa.me/${COMPANY.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const CTA = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-secondary">
      <div className="container-custom section-padding">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-primary mb-4">Professional Commercial Cleaning Starts Here</h2>
            <p className="text-foreground/70 text-lg mb-10 max-w-2xl mx-auto">
              Book a professional cleaning team you can trust. Get a fast, no-obligation
              quote and enjoy a spotless commercial facility or workplace across {COMPANY.serviceArea}.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/quote">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full px-8"
                >
                  Get a Free Quote
                </Button>
              </Link>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" data-location="cta_whatsapp">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-tertiary text-tertiary hover:bg-tertiary hover:text-tertiary-foreground font-semibold rounded-full px-8"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default CTA;
