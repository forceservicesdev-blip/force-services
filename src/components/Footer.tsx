import Logo from "@/components/Logo";
import { CLEANING_SERVICES, COMPANY, SERVICE_AREAS, WHATSAPP_MESSAGE } from "@/lib/config";
import {
  ExternalLink,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

const whatsappHref = `https://wa.me/${COMPANY.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const GoogleIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
    />
  </svg>
);

const socialLinks = [
  { icon: Facebook, href: COMPANY.social.facebook, label: "Facebook" },
  { icon: Instagram, href: COMPANY.social.instagram, label: "Instagram" },
].filter((s) => s.href && s.href !== "#" && s.href.trim() !== "");

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container-custom section-padding">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <Logo isDark size="lg" />
            <p className="text-primary-foreground/70 mt-4 mb-5 max-w-sm text-sm leading-relaxed">
              {COMPANY.description}
            </p>

            {/* Google Business Profile & Review Buttons */}
            <div className="flex flex-col gap-2.5 mb-6 max-w-xs">
              <a
                href={COMPANY.googleBusinessProfile}
                target="_blank"
                rel="noopener noreferrer"
                data-location="footer_google_profile_btn"
                className="inline-flex items-center justify-between gap-2.5 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all text-left shadow-sm group"
              >
                <span className="flex items-center gap-2">
                  <GoogleIcon className="h-4 w-4 shrink-0" />
                  <span>View us on Google</span>
                </span>
                <ExternalLink className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100 transition-opacity shrink-0" />
              </a>

              <a
                href={COMPANY.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-location="footer_google_review_btn"
                className="inline-flex items-center justify-between gap-2.5 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-tertiary hover:bg-tertiary/90 text-tertiary-foreground transition-all text-left shadow-sm group"
              >
                <span className="flex items-center gap-2">
                  <Star className="h-4 w-4 shrink-0 fill-current" />
                  <span>Leave a Google Review</span>
                </span>
                <ExternalLink className="h-3.5 w-3.5 opacity-70 group-hover:opacity-100 transition-opacity shrink-0" />
              </a>
            </div>

            {socialLinks.length > 0 && (
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-tertiary transition-colors"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Services */}
          <div>
            <h6 className="font-semibold mb-4">Services</h6>
            <ul className="space-y-3">
              {CLEANING_SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h6 className="font-semibold mb-4">Service Areas</h6>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {SERVICE_AREAS.map((area) => (
                <span key={area} className="text-primary-foreground/70 text-sm">
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h6 className="font-semibold mb-4">Contact</h6>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-tertiary flex-shrink-0 mt-0.5" />
                <a href={`tel:${COMPANY.phone}`} data-location="footer_phone" className="text-primary-foreground/70 text-sm hover:underline">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="h-5 w-5 text-tertiary flex-shrink-0 mt-0.5" />
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-location="footer_whatsapp"
                  className="text-primary-foreground/70 text-sm hover:underline"
                >
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-tertiary flex-shrink-0 mt-0.5" />
                <a href={`mailto:${COMPANY.email}`} className="text-primary-foreground/70 text-sm">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-tertiary flex-shrink-0 mt-0.5" />
                <a
                  href={COMPANY.googleBusinessProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 text-sm hover:underline"
                >
                  {COMPANY.address}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm text-center md:text-left">
              © {COMPANY.year} {COMPANY.name}. All Rights Reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              <a
                href={COMPANY.googleBusinessProfile}
                target="_blank"
                rel="noopener noreferrer"
                data-location="footer_bottom_google"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors inline-flex items-center gap-1.5"
              >
                View us on Google
              </a>
              <Link
                to="/privacy-policy"
                className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-and-conditions"
                className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
