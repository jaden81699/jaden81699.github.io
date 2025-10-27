// src/AnimatedRoutes.tsx
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import App from "./App";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

const Page: React.FC<React.PropsWithChildren> = ({ children }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        style={{ willChange: "opacity" }}
    >
        {children}
    </motion.div>
);

export default function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<App />}>
                    <Route index element={<Page><Home /></Page>} />
                    <Route path="projects" element={<Page><Projects /></Page>} />
                    <Route path="about" element={<Page><About /></Page>} />
                    <Route path="contact" element={<Page><Contact /></Page>} />
                    <Route path="*" element={<Page><Home /></Page>} />
                </Route>
            </Routes>
        </AnimatePresence>
    );
}
