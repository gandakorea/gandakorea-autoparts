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
  title: "GANDAKOREA / Korea-Autoparts | Hyundai Kia All Parts From Korea",
  description:
    "Source Hyundai and Kia genuine parts from Korea for individual, workshop, distributor, and wholesale export orders.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "GANDAKOREA / Korea-Autoparts",
    description:
      "Korean auto parts sourcing for global Hyundai and Kia buyers.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "GANDAKOREA / Korea-Autoparts",
    description:
      "Korean auto parts sourcing for global Hyundai and Kia buyers.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
