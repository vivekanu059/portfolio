const L = "#7d96ff", G = "#5eead4", R = "#ff6b6b";
const box = (x: number, y: number, w: number, h: number, t: string, c = L) => (<g key={t + x}><rect x={x} y={y} width={w} height={h} rx="8" fill="none" stroke={c} strokeWidth="1.5" /><text x={x + w / 2} y={y + h / 2 + 4} fill="#fff" fontSize="11" textAnchor="middle">{t}</text></g>);
const dash = (d: string, c = L) => (<path d={d} stroke={c} strokeWidth="1.5" fill="none" strokeDasharray="6 6"><animate attributeName="stroke-dashoffset" from="24" to="0" dur="1.2s" repeatCount="indefinite" /></path>);
const art: Record<string, React.ReactNode> = {
  agents: (<>{dash("M90 90 L190 50 L290 90 L190 160 Z")}{[[90, 90, "Profiler"], [190, 50, "Strategist"], [290, 90, "SQL Agent"], [190, 160, "Self-heal"]].map(([x, y, t]) => (<g key={t as string}><circle cx={x as number} cy={y as number} r="24" fill="#0d0f1a" stroke={G} strokeWidth="1.5" /><text x={x as number} y={(y as number) + 4} fill="#fff" fontSize="9" textAnchor="middle">{t}</text></g>))}</>),
  queue: (<>{["Client", "Gateway", "Redis", "Worker", "Mongo"].map((t, i) => box(14 + i * 76, 90, 64, 40, t, i === 2 ? G : L))}{dash("M78 110 H90 M154 110 H166 M230 110 H242 M306 110 H318")}</>),
  video: (<><rect x="50" y="30" width="300" height="130" rx="10" fill="#0d0f1a" stroke={L} /><polygon points="190,70 190,120 232,95" fill="#fff" /><rect x="60" y="145" width="280" height="4" rx="2" fill="#333" /><rect x="60" y="145" width="150" height="4" rx="2" fill={R}><animate attributeName="width" from="10" to="280" dur="4s" repeatCount="indefinite" /></rect>{[20, 35, 55, 80].map((h, i) => <rect key={i} x={250 + i * 22} y={190 - h} width="14" height={h} fill={L} opacity={0.4 + i * 0.2} />)}</>),
  anomaly: (<><polyline points="20,150 70,140 110,150 150,130 190,140 230,40 270,135 320,145 380,130" fill="none" stroke={L} strokeWidth="2" strokeDasharray="600"><animate attributeName="stroke-dashoffset" from="600" to="0" dur="2.5s" repeatCount="indefinite" /></polyline><circle cx="230" cy="40" r="6" fill={R}><animate attributeName="r" values="5;12;5" dur="1.4s" repeatCount="indefinite" /></circle></>),
  chart: (<>{[60, 80, 70, 110, 130, 120, 160].map((h, i) => <rect key={i} x={30 + i * 50} y={200 - h} width="32" height={h} rx="4" fill={L} opacity="0.75"><animate attributeName="height" from="0" to={h} dur="1.2s" fill="freeze" /></rect>)}<polyline points="46,150 96,120 146,130 196,90 246,70 296,80 346,40" fill="none" stroke={G} strokeWidth="2" /></>),
  pipeline: (<>{box(20, 60, 80, 40, "T-SQL")}{box(160, 60, 80, 40, "Airflow", G)}{box(300, 60, 80, 40, "Tableau")}{dash("M100 80 H160 M240 80 H300")}{[0, 1, 2, 3].map((i) => <rect key={i} x={30 + i * 90} y={140 + (i % 2) * 14} width="70" height="8" rx="4" fill={L} opacity="0.5" />)}</>),
  table: (<>{[0, 1, 2, 3, 4].map((r) => [0, 1, 2, 3].map((c) => <rect key={r + "" + c} x={30 + c * 88} y={30 + r * 30} width="80" height="22" rx="4" fill={r === 0 ? L : "#1d2342"} opacity={r === 0 ? 0.8 : 1} />))}</>),
  erd: (<>{box(30, 40, 90, 50, "Customer")}{box(155, 20, 90, 50, "Cart", G)}{box(280, 40, 90, 50, "Product")}{box(155, 120, 90, 50, "Payment")}{dash("M120 65 H155 M245 45 H280 M200 70 V120")}</>),
};
export default function Cover({ kind, title }: { kind: string; title: string }) {
  return (
    <svg viewBox="0 0 400 260" className="h-full w-full" role="img" aria-label={title}>
      <defs><linearGradient id={"g" + kind} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#1b2140" /><stop offset="1" stopColor="#0d0f1a" /></linearGradient></defs>
      <rect width="400" height="260" fill={`url(#g${kind})`} />
      {art[kind]}
      <text x="20" y="244" fill="#fff" fontSize="13" fontWeight="600">{title}</text>
    </svg>
  );
}
