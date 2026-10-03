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
  sm: "h-7 sm:h-8 w-auto max-w-[120px]",
  md: "h-8 sm:h-10 w-auto max-w-[150px]",
  lg: "h-9 sm:h-11 md:h-12 w-auto max-w-[170px] sm:max-w-[210px]",
  xl: "h-11 sm:h-14 md:h-16 w-auto max-w-[220px]",
};

const iconSizeClasses: Record<NonNullable<LogoProps["size"]>, string> = {
  sm: "h-7 sm:h-8 w-auto",
  md: "h-8 sm:h-9 w-auto",
  lg: "h-9 sm:h-11 w-auto",
  xl: "h-11 sm:h-14 w-auto",
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
    <div className={`flex items-center shrink-0 select-none ${className}`}>
      <picture className="block shrink-0">
        <source srcSet={webpSrc} type="image/webp" />
        <img
          src={fallbackPngSrc}
          alt={alt || defaultAlt}
          className={`block object-contain transition-all duration-200 hover:opacity-95 ${
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
