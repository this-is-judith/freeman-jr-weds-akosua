import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Dancing_Script,
  Comic_Neue,
  Lora,
  Imperial_Script,
  Cookie,
} from "next/font/google";
import "./globals.css";
import Header from "./components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const comicNeue = Comic_Neue({
  variable: "--font-comic-neue",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const imperialScript = Imperial_Script({
  variable: "--font-imperial-script",
  subsets: ["latin"],
  weight: ["400"],
});

const cookie = Cookie({
  variable: "--font-cookie",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Tete & Nyame — Wedding",
  description: "Timeless modern elegance. #TeteNyame",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} ${comicNeue.variable} ${lora.variable} ${imperialScript.variable} ${cookie.variable} antialiased bg-off-white text-foreground font-sans`}
      >
        {/* Header */}
        <Header />

        {/* Main */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-navy border-t border-burgundy text-center py-8">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-3xl text-off-white mb-4">#TeteNyame</p>

            <p className="text-sm mb-4">
              Made with ❤️ for Freeman Osei-Tete Jr. & Dr. Akosua Ndwaa Nyamekye
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
