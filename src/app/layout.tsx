import type { Metadata } from 'next';
import { Anek_Latin, Source_Serif_4, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import VigyanHeader from '@/components/layout/VigyanHeader';
import VigyanFooter from '@/components/layout/VigyanFooter';

const anek = Anek_Latin({
  subsets: ['latin'],
  variable: '--font-anek',
  display: 'swap',
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'VigyanSetu — From Research Data to Public Knowledge',
  description: 'Unified scientific archive and outreach platform for Indian ocean and polar research.',
  icons: [
    { rel: 'icon', url: '/favicon.svg', type: 'image/svg+xml' },
    { rel: 'icon', url: '/favicon.ico', sizes: '48x48' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${anek.variable} ${sourceSerif.variable} ${jetbrains.variable} min-h-screen flex flex-col font-sans`}>
        <VigyanHeader />
        <main className="flex-grow">{children}</main>
        <VigyanFooter />
      </body>
    </html>
  );
}
