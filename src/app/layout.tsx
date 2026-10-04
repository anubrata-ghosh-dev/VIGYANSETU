import type { Metadata } from "next";
import "./globals.css";
import VigyanHeader from "@/components/layout/VigyanHeader";
import VigyanFooter from "@/components/layout/VigyanFooter";

export const metadata: Metadata = {
  title: "VIGYANSETU | Unified Scientific Archive & Outreach Platform",
  description: "From Research Data to Public Knowledge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-vigyan-background text-vigyan-body font-noto">
        <VigyanHeader />
        <main className="flex-grow">
          {children}
        </main>
        <VigyanFooter />
      </body>
    </html>
  );
}
