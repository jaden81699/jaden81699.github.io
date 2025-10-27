import React from "react";

type Project = {
    title: string;
    summary: string;
    tags: string[];
    links?: { label: string; href: string }[];
};

export default function ProjectCard({title, summary, tags, links}: Project) {
    return (
        <article className="card">
            <h3>{title}</h3>
            <p>{summary}</p>

            {/* Tailwind badges using CSS vars for color */}
            <div className="mt-2 flex flex-wrap gap-2">
                {tags.map((t) => (
                    <span
                        key={t}
                        className="inline-flex items-center rounded-full border border-accent-400/40
             bg-accent-600/90 px-2.5 py-0.5 text-xs font-medium
             text-[var(--on-accent-light)] shadow-sm shadow-black/20"
                    >
  {t}
</span>


                ))}
            </div>

            {links && (
                <div className="actions actions--links">
                    {links.map((l) => (
                        <a key={l.href} href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
                    ))}
                </div>
            )}
        </article>
    );
}
