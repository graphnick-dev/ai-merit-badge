import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Merit Badge Curriculum App",
  description: "Step through the AI Merit Badge curriculum interactively.",
};

import CurriculumNav from "./components/CurriculumNav";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Roboto+Slab:wght@500&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-zinc-50 dark:bg-black">
        <div className="flex min-h-screen">
          <aside className="w-64 bg-white dark:bg-zinc-900 p-4 border-r border-zinc-200 dark:border-zinc-800 hidden md:block">
            <CurriculumNav />
          </aside>
          <main className="flex-1">
            {children}</main>
        </div>
      </body>
    </html>
  );
}
