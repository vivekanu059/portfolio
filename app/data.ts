export const links = { github: "https://github.com/vivekanu059", linkedin: "https://www.linkedin.com/in/vivek-anurag-519021279/", email: "anuragvvk@gmail.com", phone: "+91 8969390599" };
export const nav = ["Home", "Work", "About", "Certifications", "Contact"];
const gh = (r: string) => `https://github.com/vivekanu059/${r}`;
export type Project = { title: string; tag: string; kind: string; stack: string[]; text: string; points: string[]; github: string; live?: string; images?: string[] };
export const projects: Project[] = [
  { title: "DataMind.ai", tag: "Autonomous Multi-Agent BI Platform", kind: "agents", stack: ["LangGraph", "DuckDB", "PostgreSQL", "React", "TypeScript"], text: "Upload a CSV, ask a question, get a dashboard. Specialist AI agents profile the data, plan the analysis and write the SQL.", points: ["Profiler, strategist and SQL-engineer agents orchestrated with LangGraph on DuckDB", "Self-healing execution loop recovers automatically from failed queries", "Two-level dashboard filters: global (from CSV columns) and per chart"], github: links.github, live: "https://data-mind-ai-pi.vercel.app/" },
  { title: "AssetFlow", tag: "Event-Driven AI Backend-as-a-Service", kind: "queue", stack: ["Node.js", "Redis", "PostgreSQL", "MongoDB", "MinIO/S3", "Docker", "Next.js", "Gemini 2.5 Flash"], text: "A document-processing pipeline and API gateway that ingests large media files and processes them asynchronously on worker nodes.", points: ["5,000+ concurrent requests handled; latency reduced by ~35%", "Signed direct-to-storage uploads, SHA-256 hashed API keys, Redis sliding-window rate limits", "Webhook retries with exponential backoff and a MongoDB dead-letter queue"], github: gh("assetflow-baas"), live: "https://assetflow-baas.vercel.app" },
  { title: "ClipVerse", tag: "Video Streaming Platform", kind: "video", stack: ["MongoDB", "Express", "React", "Node.js", "Redis", "BullMQ", "FFmpeg", "MinIO"], text: "A YouTube-style platform with an end-to-end transcoding pipeline for adaptive HTTP Live Streaming.", points: ["BullMQ workers run FFmpeg to produce HLS renditions", "MinIO object storage keeps media separate from application logic", "Role-based access, protected routes, public and private videos"], github: gh("ClipVerse-") },
  { title: "AnomalyGuard", tag: "Engineering Major Project: Real-Time Anomaly Detection", kind: "anomaly", stack: ["Node.js", "Express", "React", "REST APIs", "MongoDB/SQL"], text: "Full-stack system that ingests time-series data, flags abnormal behaviour and shows it on a live monitoring dashboard.", points: ["Threshold, pattern-deviation and time-window detection, built to plug in ML models later", "Stores readings and anomaly events behind a REST API", "Dashboard highlights live and historical anomalies"], github: gh("AnomalyGuard") },
  { title: "E-Commerce Revenue Drop Analysis", tag: "SQL + Python + Interactive Dashboard", kind: "chart", stack: ["SQL Server", "Python", "Pandas", "Seaborn", "HTML/JS", "Draw.io"], text: "Is growth driven by loyal customers or constant acquisition? 100K+ orders across 9 tables, modelled into a star schema.", points: ["~97.8% successful deliveries, but only ~5-7% of customers returned after month one", "Cohort retention analysis in Python; KPI dashboard with interactive filters", "Raw ERD and analytics star schema designed from scratch"], github: gh("Ecom-Revenue-Drop-Analysis"), images: ["https://github.com/vivekanu059/Ecom-Revenue-Drop-Analysis/raw/main/diagrams/raw_erd.png", "https://github.com/vivekanu059/Ecom-Revenue-Drop-Analysis/raw/main/diagrams/analyticsStarSchema.png"] },
  { title: "Fulfillment & Workforce Analytics", tag: "Data Operations", kind: "pipeline", stack: ["T-SQL", "MS SQL Server", "Apache Airflow", "Tableau"], text: "Operational analytics on high-volume fulfillment and workforce data.", points: ["Analyzed 100,000+ records in T-SQL to isolate throughput bottlenecks", "Enterprise Airflow and Tableau pipelines cut manual reporting by 40%"], github: links.github },
  { title: "Employee Info: SQL & Tableau", tag: "Workforce Analytics", kind: "table", stack: ["T-SQL", "Tableau"], text: "Employee data modelled and queried in T-SQL, visualized in Tableau.", points: ["Relational queries feeding Tableau dashboards"], github: gh("employee_info-Sql-and-tableau---") },
  { title: "E-Commerce Management System", tag: "Data & Operations: E-Commerce Database and Analytics", kind: "erd", stack: ["MS SQL Server", "T-SQL"], text: "Database for small clothing sellers to sell online: ER design, schema, queries, stored procedures and triggers.", points: ["Functions and procedures for cost filters and seller stats", "INSTEAD OF triggers auto-create carts and compute payment totals"], github: gh("Ecommerce-Management-System-") },
];
export const stats = [
  { to: 8.72, dec: 2, suffix: "", label: "CGPA, B.Tech ECE" },
  { to: 5000, dec: 0, suffix: "+", label: "Concurrent requests handled" },
  { to: 35, dec: 0, suffix: "%", label: "Latency reduction" },
  { to: 100000, dec: 0, suffix: "+", label: "Records analyzed" },
  { to: 40, dec: 0, suffix: "%", label: "Less manual reporting" },
];
export const services = [
  { t: "AI & Agentic Systems", d: "Multi-agent pipelines with ReAct and LangGraph, structured outputs with Zod, and self-healing execution loops." },
  { t: "Backend & Cloud", d: "Event-driven microservices on Node.js, Redis queues, PostgreSQL, MongoDB and S3-compatible storage, shipped in Docker." },
  { t: "Data & Analytics", d: "T-SQL, DuckDB and Python analysis, Airflow pipelines and Tableau dashboards that point at the next decision." },
  { t: "Frontend Experiences", d: "Responsive React and Next.js interfaces with TypeScript, Tailwind and purposeful motion." },
];
export const skills: Record<string, string[]> = {
  "AI & Orchestration": ["Agentic AI (ReAct, LangGraph)", "LLM Orchestration", "Prompt Engineering", "Zod (Structured Outputs)"],
  "Backend & Cloud": ["Node.js", "Express.js", "Redis", "BullMQ", "PostgreSQL", "MongoDB", "MinIO/S3", "Docker"],
  Frontend: ["TypeScript", "React.js", "Next.js", "Tailwind CSS"],
  "Data & Analytics": ["SQL (T-SQL, MS SQL Server)", "DuckDB", "Python (Pandas, NumPy)", "Tableau", "Apache Airflow"],
};
export const milestones = [
  { type: "Certification", what: "Business Analysis Process Modelling & Requirements Gathering", note: "SkillUp / Coursera, Nov 2025" },
  { type: "Certification", what: "Business Analysis", note: "IBM / Coursera, Sep 2025" },
  { type: "Certification", what: "SQL (Intermediate)", note: "HackerRank, Sep 2025" },
];
