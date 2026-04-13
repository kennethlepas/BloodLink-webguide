import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BloodLink User Guide | Kenya's Lifesaving Digital Network",
  description: "Learn how to use BloodLink to donate blood, request blood, and save lives in Kenya. Comprehensive donor and recipient guides.",
  keywords: "BloodLink, Blood Donation Kenya, Blood Request Kenya, Health Services, Lifesaving Network",
  authors: [{ name: "BloodLink Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-full flex flex-col bg-slate-50 text-slate-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
