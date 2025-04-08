import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flex Card",
  description: "Pay for what you owe",
  robots: "index, follow",
  generator: "Flex Card",
  applicationName: "Flex Card",
  authors: [{ name: "Flex Card", url: "https://flexcard.app" }],
  openGraph: {
    title: "Flex Card",
    description: "Pay for what you owe",
    url: "https://flexcard.app",
    siteName: "Flex Card",
    locale: "en_UK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@flexcard",
    title: "Flex Card",
    description: "Pay for what you owe",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
