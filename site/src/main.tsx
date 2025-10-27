import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./assets/styles.css";
import AnimatedRoutes from "./AnimatedRoutes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <HashRouter>
            <AnimatedRoutes/>
        </HashRouter>
    </React.StrictMode>
);
