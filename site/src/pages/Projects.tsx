import ProjectCard from "../components/ProjectCard";
import {SITE} from "../config.ts";

export default function Projects({compact = false}: { compact?: boolean }) {
    const data = [
        {
            title: "AI‑Assisted Programming Platform",
            summary:
                "Research web app with experiment vs control groups, Monaco editor, and qualitative pre/post assessments.",
            tags: ["React", "TypeScript", "Monaco", "Django"],
            links: [
                {label: "GitHub", href: `${SITE.links.github}`},
            ],
        },
        {
            title: "Generative AI Initiatives (Cigna)",
            summary:
                "Internal tool to track initiatives; FastAPI + SQLAlchemy + Postgres + Alembic with CI/CD.",
            tags: ["FastAPI", "SQLAlchemy", "Postgres", "CI/CD"],
            links: [],
        },
        {
            title: "Personal Site",
            summary:
                "This site: Massively‑inspired layout, dark theme, accessible components, automatic GitHub Pages deploy.",
            tags: ["Vite", "React", "TypeScript", "GitHub Actions"],
            links: [
                {label: "Source", href: "https://github.com/jaden81699/jaden81699.github.io"},
            ],
        },
    ];

    return (
        <section className="section fade-in">
            <div className="section-head">
                <h2>Selected Projects</h2>
                {!compact && <p className="muted">A few highlights from recent work.</p>}
            </div>
            <div className="grid">
                {data.map((p) => (
                    <ProjectCard key={p.title} {...p} />
                ))}
            </div>
        </section>
    );
}