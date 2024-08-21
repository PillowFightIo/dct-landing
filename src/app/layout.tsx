import type { Metadata } from "next";
import { Inter, PT_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dragon Care Tarot",
  description: "A cozy virtual pet game with divination. Brought to you by Pillow Fight.",
  themeColor: '#012b41',
  icons: {
    apple: {
      sizes: '180x180',
      url: '/apple-touch-icon.png'
    },
    other: [
    {
      url: '/favicon-32x32.png',
      type: 'image/png',
      rel: 'icon',
      sizes: '32x32',
    },
    {
      url: '/favicon-16x16.png',
      type: 'image/png',
      rel: 'icon',
      sizes: '16x16',
    },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
