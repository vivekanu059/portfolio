import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}"],
  theme: { extend: { colors: { ink: "#141414", paper: "#ededed", mute: "#8a8a8a", line: "rgba(255,255,255,0.12)", accent: "#7d96ff" } } },
  plugins: [],
} satisfies Config;
