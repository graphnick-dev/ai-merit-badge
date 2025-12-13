import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CurriculumNav from "./_components/CurriculumNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Merit Badge Curriculum App",
  description: "Step through the AI Merit Badge curriculum interactively.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 dark:bg-black`}>
        <div className="flex min-h-screen">
          <aside className="w-64 bg-white dark:bg-zinc-900 p-4 border-r border-zinc-200 dark:border-zinc-800 hidden md:block">
            <CurriculumNav />
          </aside>
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
