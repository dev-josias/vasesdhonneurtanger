import Link from "next/link";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "coral" | "turquoise";
  className?: string;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  const variants = {
    primary:
      "bg-linear-to-r from-[#DBC05E] to-[#C9A648] text-white hover:shadow-lg",
    secondary:
      "border-2 border-[#DBC05E] text-[#DBC05E] hover:bg-[#DBC05E] hover:text-white",
    coral:
      "bg-linear-to-r from-[#ff6b6b] to-[#ff8e8e] text-white hover:shadow-lg",
    turquoise:
      "bg-linear-to-r from-[#4ecdc4] to-[#6eddd6] text-white hover:shadow-lg",
  };

  return (
    <Link
      href={href}
      className={`inline-block px-8 py-4 rounded-full font-semibold transition-all duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
