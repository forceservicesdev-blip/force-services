import Logo from "@/components/Logo";
import { CLEANING_SERVICES, COMPANY, SERVICE_AREAS, WHATSAPP_MESSAGE } from "@/lib/config";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

const whatsappHref = `https://wa.me/${COMPANY.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

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
            <p className="text-primary-foreground/70 mt-4 mb-6 max-w-sm text-sm">
              {COMPANY.description}
            </p>
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
                <span className="text-primary-foreground/70 text-sm">{COMPANY.address}</span>
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
            <div className="flex gap-6">
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
