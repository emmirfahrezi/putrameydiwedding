import type { Metadata } from "next";
import { Inter, Playfair_Display, Great_Vibes, Cinzel } from "next/font/google";
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

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

export const metadata: Metadata = {
  title: "The Wedding of Riky & Meydi",
  description: "Undangan pernikahan Riky Saputra dan Meidy Purnama Ariyani",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} ${greatVibes.variable} ${cinzel.variable} font-sans antialiased bg-[#120B0D]`}
      >
        <div className="relative w-full max-w-[430px] mx-auto min-h-screen shadow-[0_0_60px_rgba(0,0,0,0.7)] overflow-x-clip">
          {/* Fixed background layer tied to the viewport (Crisp 1:1, never stretched or zoomed across 9,700px) */}
          <div className="fixed inset-0 max-w-[430px] mx-auto pointer-events-none z-0">
            <div className="w-full h-full bg-texture" />
          </div>

          {/* Content layer */}
          <div className="relative z-10 w-full bg-transparent">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
