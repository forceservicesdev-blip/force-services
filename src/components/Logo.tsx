import { COMPANY } from "@/lib/config";

interface LogoProps {
  isDark?: boolean;
  className?: string;
  imgClassName?: string;
  iconOnly?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  alt?: string;
}

const sizeClasses: Record<NonNullable<LogoProps["size"]>, string> = {
  sm: "h-8",
  md: "h-10",
  lg: "h-11 md:h-12",
  xl: "h-14 md:h-16",
};

const iconSizeClasses: Record<NonNullable<LogoProps["size"]>, string> = {
  sm: "h-8 w-auto",
  md: "h-9 w-auto",
  lg: "h-11 w-auto",
  xl: "h-14 w-auto",
};

const Logo = ({
  isDark = false,
  className = "",
  imgClassName = "",
  iconOnly = false,
  size = "md",
  alt,
}: LogoProps) => {
  const defaultAlt = COMPANY.name || "Force Services";
  const webpSrc = isDark
    ? iconOnly
      ? "/logo-icon-white.png"
      : "/logo-white.webp"
    : iconOnly
    ? "/logo-icon.png"
    : "/logo.webp";

  const fallbackPngSrc = isDark
    ? iconOnly
      ? "/logo-icon-white.png"
      : "/logo-white.png"
    : iconOnly
    ? "/logo-icon.png"
    : "/logo.png";

  return (
    <div className={`flex items-center select-none ${className}`}>
      <picture>
        <source srcSet={webpSrc} type="image/webp" />
        <img
          src={fallbackPngSrc}
          alt={alt || defaultAlt}
          className={`object-contain transition-all duration-200 hover:opacity-95 ${
            iconOnly ? iconSizeClasses[size] : sizeClasses[size]
          } ${imgClassName}`}
          loading="eager"
          decoding="async"
        />
      </picture>
    </div>
  );
};

export default Logo;
