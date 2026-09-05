import { Button } from "@/components/ui/button";
import { COMPANY, WHATSAPP_MESSAGE } from "@/lib/config";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const FinalCTA = () => {
  const whatsappNumber = COMPANY.whatsappNumber.replace(/\D/g, "");
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className="py-20 md:py-24 bg-primary">
      <div className="container-custom section-padding text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-h2 font-bold text-primary-foreground mb-4 text-balance">
            A Cleaner Home Starts Here
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Get a free, no-obligation quote today and let us take care of the cleaning while you focus on what
            matters most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <Button size="lg" className="w-full sm:w-auto bg-tertiary text-tertiary-foreground hover:bg-tertiary/90">
                Get a Free Quote
              </Button>
            </Link>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 border-primary text-primary hover:text-primary-foreground">
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </Button>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FinalCTA;
