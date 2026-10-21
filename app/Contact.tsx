"use client";
import { useState } from "react";
import { links } from "./data";
export default function Contact() {
  const [sent, setSent] = useState(false);
  const f = "w-full border-b border-line bg-transparent py-3 text-lg outline-none transition focus:border-paper";
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = `${d.get("message")}\n\n${d.get("name")} (${d.get("email")})`;
    const subject = "Portfolio enquiry from " + d.get("name");
    const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${links.email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const w = window.open(gmail, "_blank");
    if (w) w.opener = null;
    else window.location.href = `mailto:${links.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }
  return (
    <form onSubmit={submit} className="mt-12 grid max-w-2xl gap-8">
      <input name="name" required placeholder="Your name" aria-label="Your name" className={f} />
      <input name="email" type="email" required placeholder="Your email" aria-label="Your email" className={f} />
      <textarea name="message" required rows={4} placeholder="What are we building?" aria-label="Message" className={f} />
      <button className="w-fit rounded-full bg-paper px-8 py-4 font-medium text-ink transition hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">Send message</button>
      {sent && <p className="text-mute" role="status">Gmail opened in a new tab with your message ready. Press Send there to deliver it.</p>}
    </form>
  );
}
