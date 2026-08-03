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
  metadataBase: new URL("https://autoparts-source.com"),
  applicationName: "Korea-Autoparts",
  title: {
    default: "Korea Autoparts Source | Hyundai Kia Parts From Korea",
    template: "%s | Korea Autoparts Source",
  },
  description:
    "Korea auto parts supplier for Hyundai and Kia parts. Request quotes for retail, workshop, distributor, and wholesale orders with VIN or part number support.",
  keywords: [
    "Korea auto parts supplier",
    "Hyundai parts from Korea",
    "Kia parts from Korea",
    "Korean auto parts",
    "Hyundai Kia parts supplier",
    "auto parts sourcing Korea",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Korea Autoparts Source | Hyundai Kia Parts From Korea",
    description:
      "Request Hyundai and Kia auto parts from Korea for retail and wholesale orders.",
    url: "/",
    siteName: "Korea Autoparts Source",
    type: "website",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Korea Autoparts Source | Hyundai Kia Parts From Korea",
    description:
      "Request Hyundai and Kia auto parts from Korea for retail and wholesale orders.",
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
