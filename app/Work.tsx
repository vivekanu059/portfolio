"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import Cover from "./Cover";
import { projects, type Project } from "./data";

export default function Work() {
  const [hover, setHover] = useState<number | null>(null);
  const [open, setOpen] = useState<Project | null>(null);
  const x = useMotionValue(0), y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 30 }), sy = useSpring(y, { stiffness: 250, damping: 30 });
  useEffect(() => {
    const mv = (e: MouseEvent) => { x.set(e.clientX + 24); y.set(e.clientY - 100); };
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("mousemove", mv); window.addEventListener("keydown", esc);
    return () => { window.removeEventListener("mousemove", mv); window.removeEventListener("keydown", esc); };
  }, [x, y]);
  return (
    <>
      <ul className="mt-16 border-t border-line">
        {projects.map((p, i) => (
          <li key={p.title} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}>
            <button data-cursor onClick={() => setOpen(p)} className="group grid w-full gap-3 border-b border-line py-8 text-left transition-colors hover:bg-white/[0.04] md:grid-cols-12 md:px-4">
              <span className="text-mute md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-2xl font-medium transition-transform duration-500 group-hover:translate-x-3 md:col-span-6 md:text-4xl">{p.title}</span>
              <span className="text-mute md:col-span-4">{p.tag}</span>
              <span className="hidden text-right text-mute transition group-hover:text-accent md:col-span-1 md:block">View</span>
              <div className="md:hidden aspect-[400/260] overflow-hidden rounded-xl"><Cover kind={p.kind} title={p.title} /></div>
            </button>
          </li>
        ))}
      </ul>
      <motion.div aria-hidden style={{ x: sx, y: sy }} animate={{ opacity: hover === null ? 0 : 1, scale: hover === null ? 0.8 : 1 }} className="pointer-events-none fixed left-0 top-0 z-40 hidden aspect-[400/260] w-72 overflow-hidden rounded-2xl border border-line shadow-2xl md:block">
        {hover !== null && <Cover kind={projects[hover].kind} title={projects[hover].title} />}
      </motion.div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(null)} className="fixed inset-0 z-[80] overflow-y-auto bg-black/80 p-4 backdrop-blur md:p-10" role="dialog" aria-modal="true" aria-label={open.title}>
            <motion.div initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 60, opacity: 0 }} transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.6 }} onClick={(e) => e.stopPropagation()} className="mx-auto max-w-4xl rounded-3xl border border-line bg-ink p-6 md:p-10">
              <div className="flex items-start justify-between gap-4">
                <div><h3 className="text-3xl font-medium md:text-5xl">{open.title}</h3><p className="mt-2 text-mute">{open.tag}</p></div>
                <button onClick={() => setOpen(null)} className="rounded-full border border-line px-4 py-2 text-sm hover:border-paper" autoFocus>Close</button>
              </div>
              <div className="mt-8 aspect-[400/260] overflow-hidden rounded-2xl"><Cover kind={open.kind} title={open.title} /></div>
              {open.images && <div className="mt-4 grid gap-4 md:grid-cols-2">{open.images.map((s) => (/* eslint-disable-next-line @next/next/no-img-element */ <img key={s} src={s} alt={`${open.title} diagram`} loading="lazy" className="w-full rounded-xl border border-line bg-white/5 object-contain" />))}</div>}
              <p className="mt-8 text-xl leading-relaxed">{open.text}</p>
              <ul className="mt-6 space-y-3 text-mute">{open.points.map((t) => <li key={t} className="border-l-2 border-accent pl-4">{t}</li>)}</ul>
              <ul className="mt-8 flex flex-wrap gap-2">{open.stack.map((s) => <li key={s} className="rounded-full border border-line px-4 py-2 text-sm">{s}</li>)}</ul>
              <div className="mt-8 flex flex-wrap gap-4">
                {open.live && <a href={open.live} target="_blank" rel="noreferrer" className="rounded-full bg-paper px-6 py-3 font-medium text-ink hover:bg-accent">Live demo</a>}
                <a href={open.github} target="_blank" rel="noreferrer" className="rounded-full border border-line px-6 py-3 hover:border-paper">Source on GitHub</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
