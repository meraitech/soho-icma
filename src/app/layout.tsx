import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cmaindonesia.org"),
  title: {
    default: "CMA Indonesia | Certified Management Accountants",
    template: "%s | CMA Indonesia",
  },
  description:
    "ICMA Indonesia Branch — Certified Management Accountants. Education programmes, membership, events and professional development in Indonesia.",
  icons: {
    icon: "/icma/mark.jpg",
    apple: "/icma/mark.jpg",
  },
  openGraph: {
    type: "website",
    siteName: "CMA Indonesia",
    title: "CMA Indonesia | Certified Management Accountants",
    description:
      "ICMA Indonesia Branch — Certified Management Accountants. Education programmes, membership, events and professional development in Indonesia.",
    images: [
      {
        url: "/icma/mark.jpg",
        width: 1200,
        height: 630,
        alt: "CMA Indonesia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CMA Indonesia | Certified Management Accountants",
    description:
      "ICMA Indonesia Branch — Certified Management Accountants. Education programmes, membership, events and professional development in Indonesia.",
    images: ["/icma/mark.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full font-sans antialiased`}>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground antialiased">
        <SiteHeader />
        <main className="flex flex-1 flex-col">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
