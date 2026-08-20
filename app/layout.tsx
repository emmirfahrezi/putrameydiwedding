import type { Metadata } from "next";
import { Inter, Playfair_Display, Great_Vibes } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: "The Wedding of Putra & Intan",
  description: "Undangan pernikahan Putra dan Intan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} ${greatVibes.variable} font-sans antialiased bg-[#1A1A1A]`}
      >
        <div className="relative w-full max-w-[430px] mx-auto min-h-screen bg-texture shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
          {/* Floral Frame Overlay scoped to mobile container */}
          <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
            <img 
              src="/bunga/floral-frame.png" 
              alt="Floral Frame" 
              className="w-full h-full object-cover opacity-90" 
            />
          </div>
          
          <div className="relative z-10 w-full bg-transparent">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
