import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";
import { Suspense } from "react";
import Loading from "./loading";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="container mx-auto bg-slate-700 text-slate-50">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
          <Suspense fallback={<Loading />}>
            {children}
        </Suspense>
          </main>
        <Footer />
        </div>
      </body>
    </html>
  );
}
