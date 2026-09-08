import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dipti Kumari - Full Stack Developer',
  description: 'Portfolio of Dipti Kumari, Full Stack Developer specializing in React.js and Node.js. Check out my featured projects and experience.',
  openGraph: {
    title: 'Dipti Kumari - Full Stack Developer',
    description: 'Portfolio of Dipti Kumari, Full Stack Developer specializing in React.js and Node.js.',
    url: 'https://diptikumari.com',
    siteName: 'Dipti Kumari Portfolio',
    images: [
      {
        url: '/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Dipti Kumari Portfolio',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
