import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

interface Props {
  to: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost" | "secondary";
  className?: string;
}

export function CtaButton({ to, children, variant = "primary", className = "" }: Props) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 text-sm tracking-wide transition-all";
  const variants: Record<string, string> = {
    primary: "bg-primary text-primary-foreground hover:opacity-90",
    outline: "border border-foreground/30 text-foreground hover:bg-foreground hover:text-background",
    ghost: "text-foreground hover:text-primary underline-offset-4 hover:underline",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/70",
  };
  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      <ArrowUpRight className="size-4" />
    </Link>
  );
}
