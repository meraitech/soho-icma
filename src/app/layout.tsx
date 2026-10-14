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
  title: {
    default: "CMA Indonesia | Certified Management Accountants",
    template: "%s | CMA Indonesia",
  },
  description:
    "ICMA Indonesia Branch — Certified Management Accountants. Education programmes, membership, events and professional development in Indonesia.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full font-sans antialiased`}>
      <body className="flex min-h-full flex-col bg-white font-sans text-[#222222] antialiased">
        <SiteHeader />
        <main className="flex flex-1 flex-col">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
