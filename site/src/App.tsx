// src/App.tsx
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import React from "react";
import { SITE } from "./config";
import PageHeader from "./components/PageHeader.tsx";
import Hero from "./components/Hero.tsx";

export default function App() {
    const location = useLocation();
    const isHome = location.pathname === "/";

    const [showIntro, setShowIntro] = React.useState(true);
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY || document.documentElement.scrollTop;
            setShowIntro(isHome && y < 140);
            setScrolled(y > 2);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [isHome]);

    React.useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location.pathname]);

    // Map inner routes to compact headers
    const headers: Record<string, { title: string; eyebrow?: string; blurb?: string }> = {
        "/projects": { title: "Selected Projects", eyebrow: "Work", blurb: "A few highlights from recent work." },
        "/about":    { title: "About", blurb: "Front-end craftsmanship, accessible UX, and AI-assisted dev tools." },
        "/contact":  { title: "Contact", blurb: "Best way to reach me is email. I read everything." },
    };
    const header = headers[location.pathname];

    return (
        <div className={`shell ${isHome ? "is-home" : "is-inner"}`}>
            <div className={`intro ${showIntro ? "show" : "hide"}`} role="note">
                <strong>This is Jaden Walker</strong> — software engineer crafting clean, fast UIs.
            </div>

            <header className={`header ${scrolled ? "header--elevated" : ""}`}>
                <Link to="/" className="brand">Jaden Walker</Link>
                <nav className="nav">
                    <NavLink to="/" className={({isActive}) => isActive ? "navlink active" : "navlink"}>Home</NavLink>
                    <NavLink to="/projects" className={({isActive}) => isActive ? "navlink active" : "navlink"}>Projects</NavLink>
                    <NavLink to="/about" className={({isActive}) => isActive ? "navlink active" : "navlink"}>About</NavLink>
                    <NavLink to="/contact" className={({isActive}) => isActive ? "navlink active" : "navlink"}>Contact</NavLink>

                </nav>
            </header>

            {/* Top band: Hero on Home, PageHeader elsewhere */}
            {isHome ? (
                <Hero
                    cover
                    center
                    subtitle="Software Engineer"
                    title="Jaden Walker"
                    blurb="I build clean, accessible interfaces and AI-assisted developer tools. TECDP @ The Cigna Group."
                    primary={{ label: "View Projects", href: "#/projects" }}
                    secondary={{ label: "View / Download Résumé", href: `${SITE.links.resumeURL}`, external: true }}
                />
            ) : header ? (
                <PageHeader {...header} size="sm" />
            ) : null}

            <main className="content">
                <Outlet />
            </main>

            <footer className="footer">
                <div className="footer-grid">
                    <section>
                        <h3>Contact</h3>
                        <ul className="list-plain">
                            <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
                            <li><a href={SITE.links.github} target="_blank" rel="noreferrer">GitHub</a></li>
                            <li><a href={SITE.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
                        </ul>
                    </section>
                    <section>
                        <h3>Location</h3>
                        <p>Hartford, CT • EST</p>
                    </section>
                    <section>
                        <h3>Elsewhere</h3>
                        <p className="muted">Open to speaking about React, accessibility, and AI-assisted dev tools.</p>
                    </section>
                </div>
                <small>© {new Date().getFullYear()} Jaden Walker • Built with React + Vite</small>
            </footer>
        </div>
    );
}
