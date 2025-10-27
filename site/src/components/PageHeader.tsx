import React from "react";

type Props = {
    title: string;
    eyebrow?: string;
    blurb?: string;
    size?: "sm" | "md";   // tweak height
    align?: "left" | "center";
};

export default function PageHeader({
                                       title,
                                       eyebrow,
                                       blurb,
                                       size = "sm",
                                       align = "center",
                                   }: Props) {
    return (
        <header
            className={[
                "page-header",
                size === "sm" ? "page-header--sm" : "page-header--md",
                align === "center" ? "page-header--center" : "",
            ].join(" ")}
            role="banner"
        >
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h1 className="page-title">{title}</h1>
            {blurb && <p className="page-blurb">{blurb}</p>}
            <div className="hero-bg" aria-hidden="true"/>
        </header>
    );
}
