"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, animate, motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Lenis from "lenis";

export function Words({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <span className={className} aria-label={text}>
      {text.split(" ").map((w, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.12em] align-bottom">
          <motion.span className="inline-block" initial={{ y: "110%" }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: delay + i * 0.06, ease: [0.22, 1, 0.36, 1] }}>{w}&nbsp;</motion.span>
        </span>
      ))}
    </span>
  );
}

export function Counter({ to, dec, suffix }: { to: number; dec: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView || !ref.current) return;
    const el = ref.current;
    const c = animate(0, to, { duration: 2, ease: "easeOut", onUpdate: (v) => (el.textContent = v.toLocaleString("en-IN", { minimumFractionDigits: dec, maximumFractionDigits: dec }) + suffix) });
    return () => c.stop();
  }, [inView, to, dec, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

export function Shell({ children }: { children: React.ReactNode }) {
  const [n, setN] = useState(0);
  const [done, setDone] = useState(false);
  const x = useMotionValue(-100), y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40 }), sy = useSpring(y, { stiffness: 500, damping: 40 });
  const [big, setBig] = useState(false);
  useEffect(() => {
    const l = new Lenis({ duration: 1.2 });
    let r = 0; const raf = (t: number) => { l.raf(t); r = requestAnimationFrame(raf); }; r = requestAnimationFrame(raf);
    const iv = setInterval(() => setN((v) => { if (v >= 100) { clearInterval(iv); setTimeout(() => setDone(true), 250); return 100; } return v + 4; }), 55);
    const mv = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); setBig(!!(e.target as HTMLElement).closest("a,button,[data-cursor]")); };
    window.addEventListener("mousemove", mv);
    return () => { cancelAnimationFrame(r); l.destroy(); clearInterval(iv); window.removeEventListener("mousemove", mv); };
  }, [x, y]);
  return (
    <>
      <AnimatePresence>
        {!done && (
          <motion.div exit={{ y: "-100%" }} transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }} className="fixed inset-0 z-[100] flex items-end justify-between bg-ink p-6 md:p-10">
            <span className="text-mute">VA / Portfolio, loading</span>
            <span className="text-7xl font-medium tabular-nums md:text-9xl">{String(n).padStart(3, "0")}</span>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div aria-hidden style={{ x: sx, y: sy }} animate={{ scale: big ? 3.2 : 1 }} className="pointer-events-none fixed left-0 top-0 z-[90] -ml-2 -mt-2 hidden h-4 w-4 rounded-full bg-white mix-blend-difference [@media(pointer:fine)]:block" />
      {children}
    </>
  );
}
