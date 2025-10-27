import React from "react";
import { Link } from "react-router-dom";

type CTA = {
    label: string;
    to?: string;              // internal route (preferred)
    href?: string;            // external URL or hash
    external?: boolean;
    variant?: "primary" | "glass" | "link";
};

type Props = {
    title: string;
    subtitle: string;
    blurb: string;
    primary: CTA;
    secondary?: CTA;
    cover?: boolean;
    center?: boolean
};

const ctaClasses = {
    primary:
        "inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium " +
        "bg-primary-600 text-[var(--on-primary-600)] border border-transparent " +
        "shadow-sm hover:bg-[#0d7246] focus:outline-none focus:ring-2 focus:ring-[var(--ring)] transition",

    glass:
        "inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium " +
        "border border-white/25 bg-white/10 backdrop-blur text-[var(--text)] " +
        "shadow-sm hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-[var(--ring)] transition",

    link:
        "inline-flex items-center gap-1 text-primary-400 underline decoration-2 underline-offset-4 " +
        "hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-[var(--ring)]",
} as const;

function Cta({ label, to, href, external, variant = "primary" }: CTA) {
    const cls = ctaClasses[variant];
    const content = (
        <>
            <span>{label}</span>
            {/* tiny arrow for affordance */}
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden className="opacity-90">
                <path d="M5 12h14m-6-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
        </>
    );

    if (to) return <Link to={to} className={cls}>{content}</Link>;
    return (
        <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
            {content}
        </a>
    );
}

export default function Hero({ title, subtitle, blurb, primary, secondary, cover, center }: Props) {
    return (
        <header className={`hero ${cover ? "hero-cover" : ""} ${center ? "hero-center" : ""}`} role="banner">
            <p className="eyebrow fade-in">{subtitle}</p>
            <h1 className="hero-title fade-in fade-in-2">{title}</h1>
            <p className="hero-blurb fade-in fade-in-3">{blurb}</p>

            <div className="hero-actions fade-in fade-in-4">
                <Cta {...primary} />
                {secondary && <Cta {...secondary} variant={secondary.variant ?? "glass"}/>}
            </div>

            <div className="hero-bg" aria-hidden="true"/>
        </header>
    );
}
