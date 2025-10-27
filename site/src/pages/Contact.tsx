import {SITE} from "../config.ts";
import React from "react";

export default function Contact() {
    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        const name = String(data.get("name") || "");
        const message = String(data.get("message") || "");

        const subject = `Website contact from ${name}`;
        window.location.href = `mailto:hello@jadenwalker.dev?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;  // opens the user’s mail client with ONLY the message in the body
    };

    return (
        <section className="section">
            <div className="section-head section-head--center fade-in">
            </div>
            <form className="form form--center" onSubmit={onSubmit} action={`mailto:${SITE.email}`} method="post"
                  encType="text/plain">
                <label>
                    Name
                    <input name="name" type="text" placeholder="Your name" required/>
                </label>

                <label>
                    Message
                    <textarea name="message" rows={6} placeholder="How can I help?"/>
                </label>
                <button className="btn btn-primary" type="submit">Send</button>
            </form>
        </section>
    );
}