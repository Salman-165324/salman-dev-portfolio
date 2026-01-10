import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const titleFont = Orbitron({
  variable: "--font-title",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
}); 

export const metadata: Metadata = {
  title: "Salman Sadi - Product-minded frontend engineer with UI-UX & backend capability",
  description: "Salman Sadi is a product-minded frontend engineer with UI-UX & backend capability. He is a frontend engineer with a passion for building products that are not only functional but also beautiful and user-friendly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${titleFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
