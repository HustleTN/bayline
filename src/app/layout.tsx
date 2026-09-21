import type { Metadata } from "next";
import { Geist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const ltRemark = localFont({
  src: "./fonts/LTRemark-Regular.otf",
  weight: "400",
  style: "normal",
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Bayline",
  description: "Flexible warehousing and fulfillment for growing businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${ltRemark.variable}`}>
        {children}
      </body>
    </html>
  );
}
