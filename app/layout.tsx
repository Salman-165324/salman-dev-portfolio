import type { Metadata } from "next";
import  {Montserrat, Orbitron, Outfit } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";
import styles from "@/components/Background.module.css";



const normalText = Outfit({
  variable: "--font-normal-text",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const titleFont = Orbitron({
  variable: "--font-title",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "Salman Sadi - Product-minded frontend engineer with UI-UX & backend capability",
  description:
    "Salman Sadi is a product-minded frontend engineer with UI-UX & backend capability. He is a frontend engineer with a passion for building products that are not only functional but also beautiful and user-friendly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${titleFont.variable} ${normalText.variable} antialiased ${styles.siteBackground}`}
      >
        <Background />
        {children}
      </body>
    </html>
  );
}
