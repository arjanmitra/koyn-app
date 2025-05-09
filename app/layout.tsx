'use client'
import type { Metadata } from "next";
import Link from "next/link";
import { Home } from "lucide-react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import store from "./store/store";
import ThemeToggle from "./components/DarkModeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadata: Metadata = {
  title: "Koyn",
  description: "Your crypto. All in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-sans h-full" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        <header className="sticky top-0 z-50 bg-stone-400 shadow-md border-none">
          <div className="max-w-7xl mx-auto py-3 flex justify-between items-center">
            <Link href="/" className="text-white-700 hover:text-black">
              <Home className="w-6 h-6" />
            </Link>
            <h1 className="text-3xl">Koyn</h1>
            <ThemeToggle />
          </div>
        </header>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
