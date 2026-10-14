import './globals.css';
import { Cormorant_Garamond, Great_Vibes, Poppins } from 'next/font/google';
import config from '@/lib/data';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});
const script = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-greatvibes',
  display: 'swap',
});
const body = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
  display: 'swap',
});

const __jsonld = {"@context":"https://schema.org","@type":"WebSite","name":"Undangan Pernikahan Digital — Raka & Sinta","description":"Contoh undangan pernikahan digital: hitung mundur, galeri, peta, RSVP, ucapan, dan musik latar.","inLanguage":"id"};

export const metadata = {
  metadataBase: new URL("https://undangan-wedding.pintuweb.id"),
  title: "Undangan Pernikahan Digital — Raka & Sinta",
  description: "Undangan pernikahan digital elegan: countdown, galeri, peta lokasi, RSVP, dan ucapan. Bagikan momen bahagia Raka & Sinta secara online.",
  applicationName: "Undangan Digital",
  keywords: ["undangan pernikahan digital", "undangan online", "undangan nikah", "e-invitation", "undangan digital elegan"],
  authors: [{ name: "Undangan Digital" }],
  creator: "Undangan Digital",
  publisher: "Undangan Digital",
  alternates: { canonical: "https://undangan-wedding.pintuweb.id" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://undangan-wedding.pintuweb.id",
    siteName: "Undangan Digital",
    title: "Undangan Pernikahan Digital — Raka & Sinta",
    description: "Undangan pernikahan digital elegan: countdown, galeri, peta lokasi, RSVP, dan ucapan. Bagikan momen bahagia Raka & Sinta secara online.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Undangan Pernikahan Digital — Raka & Sinta" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Undangan Pernikahan Digital — Raka & Sinta",
    description: "Undangan pernikahan digital elegan: countdown, galeri, peta lokasi, RSVP, dan ucapan. Bagikan momen bahagia Raka & Sinta secara online.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export const viewport = {
  themeColor: '#a87768',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${display.variable} ${script.variable} ${body.variable}`}>
      <body className="antialiased">{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
