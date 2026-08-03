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
    "Korea auto parts supplier for Hyundai, Kia, and GM Korea parts. Request quotes with VIN or part number support, transparent Korea shipping costs, and PayPal payment.",
  keywords: [
    "Korea auto parts supplier",
    "Hyundai parts from Korea",
    "Kia parts from Korea",
    "GM Korea parts",
    "Korean auto parts",
    "Hyundai Kia parts supplier",
    "auto parts sourcing Korea",
    "PayPal auto parts Korea",
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
      "Request Hyundai, Kia, and GM Korea auto parts with transparent shipping costs from Korea.",
    url: "/",
    siteName: "Korea Autoparts Source",
    type: "website",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Korea Autoparts Source | Hyundai Kia Parts From Korea",
    description:
      "Request Hyundai, Kia, and GM Korea auto parts with transparent shipping costs from Korea.",
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
