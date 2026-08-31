import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { TESTIMONIALS } from "@/lib/config";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const Reviews = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container-custom section-padding">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-sm text-muted-foreground mb-4 flex items-center justify-center gap-2">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <span className="text-primary">Reviews</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              What Our Customers Say
            </h1>
            <p className="text-muted-foreground">
              Trusted by homeowners and businesses across [SERVICE AREA] for reliable, professional cleaning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-soft border border-border hover:shadow-card transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-fresh-green text-fresh-green" />
                  ))}
                </div>
                <p className="text-foreground mb-6 text-base leading-relaxed">
                  "{review.text}"
                </p>
                <p className="font-semibold text-primary">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Reviews;
