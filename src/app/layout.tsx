import type { Metadata } from "next";
import { Anek_Latin, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import VigyanHeader from "@/components/layout/VigyanHeader";
import VigyanFooter from "@/components/layout/VigyanFooter";

const anek = Anek_Latin({ subsets: ["latin"], variable: "--font-anek" });
const sourceSerif = Source_Serif_4({ subsets: ["latin"], variable: "--font-source-serif" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: "VigyanSetu",
  description: "From Research Data to Public Knowledge",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '48x48' }
    ],
    apple: '/favicon-180.png',
  },
  themeColor: "#12264A",
  manifest: "/site.webmanifest"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className={`${anek.variable} ${sourceSerif.variable} ${jetbrains.variable} min-h-screen flex flex-col font-sans bg-hawa text-neel transition-colors`}>
        <VigyanHeader />
        <main className="flex-grow">
          {children}
        </main>
        <VigyanFooter />
      </body>
    </html>
  );
}
