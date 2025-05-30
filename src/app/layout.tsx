import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ParticlesBackground from "@/components/ParticlesBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Piyush Raut - Full Stack Developer & ML Enthusiast",
  description: "Portfolio of Piyush Raut - Full Stack Developer and Machine Learning Enthusiast, showcasing projects and skills in web development and AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-[#0a0a0b] via-[#1a1b26] to-[#0a0a0b]`}>
        <ParticlesBackground />
        <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,_rgba(145,94,255,0.1)_0%,_transparent_70%)]" />
        <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,_rgba(240,98,146,0.05)_0%,_transparent_70%)] rotate-180" />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
