import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
const font = Inter_Tight({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Vivek Anurag | Distributed Systems Engineer & AI Data Architect",
  description: "Autonomous AI agents, high-throughput backends and operations analytics.",
  themeColor: "#141414",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className={font.className}>{children}</body></html>);
}
