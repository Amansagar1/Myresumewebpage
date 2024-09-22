import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Myresume from "./myresume/page"
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Kumar Aman Sagar Resume",
  description: "Generated by Kumar Aman Sagar",
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
        <Myresume/>
        {children}
      </body>
    </html>
  );
}
