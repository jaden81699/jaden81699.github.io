import React from "react";

type Variant = "solid" | "outline";
type Color = "accent" | "primary";

type Props = React.PropsWithChildren<{
    variant?: Variant;
    color?: Color;
    className?: string;
}>;

export default function Badge({
                                  children,
                                  variant = "solid",
                                  color = "accent",
                                  className = "",
                              }: Props) {
    const base =
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium shadow-sm";

    const solid: Record<Color, string> = {
        accent:
            "bg-[var(--accent-600)]/90 text-[var(--on-accent-light)] border border-white/20 shadow-black/20",
        primary:
            "bg-primary-600 text-[var(--on-primary-600)] border border-white/10 shadow-black/20",
    };

    const outline: Record<Color, string> = {
        accent: "border border-[var(--accent-400)] text-[var(--accent-400)]",
        primary: "border border-primary-400 text-primary-400",
    };

    const tone = variant === "solid" ? solid[color] : outline[color];

    return <span className={`${base} ${tone} ${className}`.trim()}>{children}</span>;
}
