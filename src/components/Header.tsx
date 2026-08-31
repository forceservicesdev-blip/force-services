import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useUserProfile } from "@/hooks/useUserProfile";
import { COMPANY, WHATSAPP_MESSAGE } from "@/lib/config";
import {
  ChevronDown,
  LayoutDashboard,
  LogOut,
  Menu,
  MessageCircle,
  User,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Reviews", href: "/reviews" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

const whatsappHref = `https://wa.me/${COMPANY.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const { data: profile } = useUserProfile(user?.id);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-tertiary hover:text-tertiary/80 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>

            <Link to="/quote">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full px-6">
                Get a Free Quote
              </Button>
            </Link>

            {!user ? (
              <Button
                variant="outline"
                className="rounded-full"
                onClick={() => navigate("/auth")}
              >
                Sign In
              </Button>
            ) : (
              <HoverCard openDelay={0}>
                <HoverCardTrigger asChild>
                  <div className="group relative flex items-center gap-0.5 rounded-xl cursor-pointer">
                    <div className="size-9">
                      <div className="flex size-full items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                        {user.email?.slice(0, 2).toUpperCase() || "U"}
                      </div>
                    </div>
                    <div className="flex h-full min-h-9 items-center rounded-sm group-hover:bg-secondary">
                      <ChevronDown className="size-4 text-foreground" />
                    </div>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent
                  side="bottom"
                  align="end"
                  className="min-w-64 rounded-lg border border-border bg-primary p-2 shadow-lg"
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-3 rounded-[10px] p-2">
                      <div className="bg-primary-foreground text-primary flex size-10 min-h-10 min-w-10 items-center justify-center rounded-full font-semibold">
                        {user.email?.slice(0, 2).toUpperCase() || "U"}
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="max-w-40 truncate font-medium text-primary-foreground">
                          {profile?.full_name || user.user_metadata?.full_name || user.email?.split("@")[0]}
                        </span>
                        <span className="max-w-40 truncate text-sm text-primary-foreground/70">
                          {user.email}
                        </span>
                      </div>
                    </div>
                    <div className="m-[1.5px] h-px w-full bg-primary-foreground/20" />
                    <Link
                      to="/dashboard"
                      className="flex items-center gap-2 rounded-[10px] p-2 hover:bg-primary-foreground/10"
                    >
                      <LayoutDashboard className="h-4 w-4 text-primary-foreground" />
                      <span className="text-sm text-primary-foreground">Dashboard</span>
                    </Link>
                    <Link
                      to="/dashboard/profile"
                      className="flex items-center gap-2 rounded-[10px] p-2 hover:bg-primary-foreground/10"
                    >
                      <User className="h-4 w-4 text-primary-foreground" />
                      <span className="text-sm text-primary-foreground">Profile</span>
                    </Link>
                    <div className="m-[1.5px] h-px w-full bg-primary-foreground/20" />
                    <button
                      className="flex items-center gap-2 rounded-[10px] p-2 hover:bg-primary-foreground/10"
                      onClick={handleSignOut}
                    >
                      <LogOut className="h-4 w-4 text-primary-foreground" />
                      <span className="text-sm text-primary-foreground">Logout</span>
                    </button>
                  </div>
                </HoverCardContent>
              </HoverCard>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium py-2"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border border-tertiary text-tertiary font-semibold py-2.5"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Us
                </a>
                <Link to="/quote" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full">
                    Get a Free Quote
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
