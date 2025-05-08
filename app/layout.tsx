import type { Metadata } from "next";
import Link from "next/link";
import { Home, User } from "lucide-react";
import { Geist, Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Koyn",
  description: "Your crypto. All in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark:bg-black dark:text-white">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="sticky top-0 z-50 bg-stone-400 shadow-md border-none rounded-2xl">
          <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            <Link href="/" className="text-white-700 hover:text-black">
              <Home className="w-6 h-6" />
            </Link>
            <h1 className="text-3xl">Koyn</h1>
            <Link href="/profile" className="text-white-700">
              <User className="w-6 h-6" />
            </Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
