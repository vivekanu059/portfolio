import Reveal from "./Reveal";
import Contact from "./Contact";
import Hero from "./Hero";
import Work from "./Work";
import { Counter, Shell, Words } from "./Fx";
import { links, nav, projects, skills, milestones, stats, services } from "./data";

const h2 = "text-4xl font-medium tracking-tight md:text-6xl";
const wrap = "mx-auto w-full max-w-7xl px-6 md:px-10";

export default function Page() {
  const marquee = Object.values(skills).flat();
  return (
    <Shell>
      <main id="main">
        <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/70 backdrop-blur">
          <div className={`${wrap} flex h-16 items-center justify-between`}>
            <a href="#home" className="text-lg font-medium">V<span className="text-mute">/</span>A <span className="ml-2 hidden text-mute sm:inline">Vivek Anurag</span></a>
            <nav className="hidden gap-8 text-sm text-mute md:flex">
              {nav.map((n, i) => (<a key={n} href={`#${n.toLowerCase()}`} className="transition hover:text-paper"><span className="mr-1 text-xs">{String(i + 1).padStart(2, "0")}</span>{n}</a>))}
            </nav>
          </div>
        </header>

        <Hero />

        <div className="overflow-hidden border-y border-line py-6" aria-hidden>
          <div className="marquee flex w-max gap-12 whitespace-nowrap text-2xl text-mute">{[...marquee, ...marquee].map((s, i) => (<span key={i}>{s}</span>))}</div>
        </div>

        <section className={`${wrap} grid gap-10 py-24 sm:grid-cols-2 lg:grid-cols-5`}>
          {stats.map((s) => (
            <Reveal key={s.label}><p className="text-5xl font-medium tabular-nums"><Counter to={s.to} dec={s.dec} suffix={s.suffix} /></p><p className="mt-2 text-mute">{s.label}</p></Reveal>
          ))}
        </section>

        <section id="work" className={`${wrap} py-20`}>
          <h2 className={h2}><Words text="Selected work" /> <span className="text-mute">({String(projects.length).padStart(2, "0")})</span></h2>
          <p className="mt-4 max-w-xl text-mute">Hover for a preview, click for the full story, stack and links.</p>
          <Work />
        </section>

        <section id="about" className={`${wrap} grid gap-16 py-28 md:grid-cols-12`}>
          <Reveal className="md:col-span-4">
            <figure className="overflow-hidden rounded-3xl bg-paper shadow-2xl shadow-black/60">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/vivek.jpg" alt="Portrait of Vivek Anurag" loading="lazy" className="aspect-[4/5] w-full object-cover mix-blend-multiply transition-transform duration-700 hover:scale-105" />
              <figcaption className="flex justify-between px-5 py-4 text-sm text-ink"><span>Vivek Anurag</span><span>Bengaluru, India</span></figcaption>
            </figure>
          </Reveal>
          <Reveal className="md:col-span-8" delay={0.1}>
            <h2 className={h2}>A dual-threat engineer.</h2>
            <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-mute"><p>I am a software engineer and aspiring architect passionate about designing highly distributed systems that seamlessly integrate complex services to eliminate manual effort. Driven by a continuous learning mindset, I intentionally expanded my core development expertise into big data, mastering new technology stacks to handle large-scale data ecosystems. Currently, I am focused on the intersection of these fields: leveraging artificial intelligence to build unified, intelligent platforms that bridge scalable software architecture with robust data pipelines.</p><p>My engineering journey is driven by a deep curiosity to understand how systems scale and a commitment to building products that drastically reduce human friction. While my foundation is in full-stack backend development, architecting asynchronous microservices, event-driven pipelines, and high-performance applications capable of handling thousands of concurrent requests, my interest in system architecture pushed me to look beyond just writing code. I wanted to manage and integrate distinct, distributed domains into unified, automated solutions.</p><p>Recognizing that modern architecture relies entirely on the flow of information, I deliberately expanded my skill set into data engineering and business operations. I thrive on the challenge of learning new stacks, and by diving into data-heavy environments, such as analyzing 100,000+ fulfillment records to isolate operational bottlenecks, I mastered the complexities of data pipelines, KPI governance, and large-scale processing.</p><p>Today, my focus is on convergence. I am actively deepening my expertise in Agentic AI and LLM orchestration tools like LangGraph. Through building systems like my autonomous multi-agent BI platform, DataMind.ai, my ultimate goal is to engineer intelligent architectures that seamlessly bridge the gap between heavy software infrastructure and complex data ecosystems.</p></div>
            <blockquote className="mt-10 border-l-2 border-accent pl-6 text-2xl">I don&apos;t just build software; I build autonomous systems that generate actionable data, and I engineer the analytics pipelines to optimize the business based on that data.</blockquote>
          </Reveal>
        </section>

        <section className={`${wrap} py-20`}>
          <h2 className={h2}><Words text="How can I help?" /></h2>
          <ol className="mt-16 border-t border-line">
            {services.map((s, i) => (
              <Reveal key={s.t}><li className="grid gap-3 border-b border-line py-8 md:grid-cols-12"><span className="text-mute md:col-span-1">{String(i + 1).padStart(2, "0")}</span><h3 className="text-2xl font-medium md:col-span-5 md:text-3xl">{s.t}</h3><p className="text-mute md:col-span-6">{s.d}</p></li></Reveal>
            ))}
          </ol>
        </section>

        <section className={`${wrap} py-20`}>
          <h2 className={h2}><Words text="Technical arsenal" /></h2>
          <div className="mt-16 grid gap-12 md:grid-cols-2">
            {Object.entries(skills).map(([cat, items]) => (
              <Reveal key={cat}><h3 className="mb-4 text-mute">{cat}</h3>
                <ul className="flex flex-wrap gap-2">{items.map((s) => (<li key={s} className="rounded-full border border-line px-4 py-2 text-sm transition hover:border-accent hover:text-accent">{s}</li>))}</ul>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="certifications" className={`${wrap} py-28`}>
          <h2 className={h2}><Words text="Certifications" /></h2>
          <div className="mt-16 border-t border-line">
            {milestones.map((m) => (
              <Reveal key={m.what}>
                <div className="grid gap-2 border-b border-line py-6 transition-colors hover:bg-white/[0.04] md:grid-cols-12 md:px-4">
                  <span className="text-accent md:col-span-2">{m.type}</span>
                  <span className="text-xl md:col-span-6">{m.what}</span>
                  <span className="text-mute md:col-span-4">{m.note}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contact" className={`${wrap} border-t border-line py-28`}>
          <h2 className="text-5xl font-medium tracking-tight md:text-8xl"><Words text="Let's build something great." /></h2>
          <p className="mt-6 text-mute">Open to Software Engineering, AI/Agentic Workflow and Data Operations roles.</p>
          <p className="mt-6 text-lg"><a className="underline underline-offset-4 hover:text-accent" href={`mailto:${links.email}`}>{links.email}</a><span className="mx-3 text-mute">/</span><a className="hover:text-accent" href={`tel:${links.phone.replace(/\s/g, "")}`}>{links.phone}</a></p>
          <Contact />
        </section>

        <footer className={`${wrap} flex justify-between border-t border-line py-8 text-sm text-mute`}>
          <span>© 2026 Vivek Anurag</span>
          <span><a href={links.github} className="hover:text-paper">GitHub</a> &nbsp; <a href={links.linkedin} className="hover:text-paper">LinkedIn</a></span>
        </footer>
      </main>
    </Shell>
  );
}
