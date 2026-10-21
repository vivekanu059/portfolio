"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Words } from "./Fx";
import { links } from "./data";
export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const o = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  return (
    <section id="home" ref={ref} className="relative flex min-h-screen flex-col justify-end overflow-hidden px-6 pb-16 pt-32 md:px-10">
      <div aria-hidden className="pointer-events-none absolute -right-40 top-20 h-[34rem] w-[34rem] rounded-full bg-accent/20 blur-[120px]" />
      <motion.div style={{ y, opacity: o }} className="mx-auto w-full max-w-7xl">
        <div className="mb-6 flex items-center gap-4 text-mute">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/vivek.jpg" alt="" className="h-14 w-14 rounded-full bg-paper object-cover object-top mix-blend-normal" />
          <p>Vivek Anurag / Bengaluru</p>
        </div>
        <h1 className="max-w-6xl text-5xl font-medium leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl"><Words text="Distributed Systems Engineer & AI Data Architect" delay={2} /></h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }} className="mt-8 max-w-2xl text-lg text-mute md:text-xl">Orchestrating autonomous AI agents, engineering high-throughput backend systems, and optimizing business operations through data analytics.</motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.2 }} className="mt-10 flex flex-wrap gap-4">
          <a href="#work" className="rounded-full bg-paper px-8 py-4 font-medium text-ink transition hover:bg-accent">View my work</a>
          <a href="#contact" className="rounded-full border border-line px-8 py-4 transition hover:border-paper">Contact me</a>
          <a href={links.github} target="_blank" rel="noreferrer" className="px-4 py-4 text-mute hover:text-paper">GitHub</a>
          <a href={links.linkedin} target="_blank" rel="noreferrer" className="px-4 py-4 text-mute hover:text-paper">LinkedIn</a>
        </motion.div>
      </motion.div>
    </section>
  );
}
