import React from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

type Props = {
    children: React.ReactNode;
    to?: string;            // internal route
    href?: string;          // external link
    onClick?: () => void;
    variant?: Variant;
    size?: Size;
    className?: string;
};

const base =
    "inline-flex items-center justify-center rounded-xl font-medium leading-none " +
    "focus:outline-none focus:ring-2 focus:ring-[var(--ring)] transition";

const sizes: Record<Size, string> = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2.5 text-sm",
    lg: "px-5 py-3 text-base",
};

const variants: Record<Variant, string> = {
    primary:
        "bg-primary-600 text-[var(--on-primary-600)] hover:bg-[#0d7246] border border-transparent",
    outline:
        "border border-white/20 text-[var(--text)] hover:bg-white/10",
    ghost:
        "text-[var(--text)] hover:bg-white/10",
};

export default function Button({
                                   children,
                                   to,
                                   href,
                                   onClick,
                                   variant = "primary",
                                   size = "md",
                                   className = "",
                               }: Props) {
    const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`.trim();

    if (to) return <Link to={to} className={cls}>{children}</Link>;
    if (href) return <a href={href} className={cls}>{children}</a>;
    return <button type="button" onClick={onClick} className={cls}>{children}</button>;
}
