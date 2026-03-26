import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wenigzeller Werkstätte | Holz. Hand. Werk.",
  description: "High-quality, custom-made furniture and doors. Grounded luxury and regional authenticity from the Austrian countryside.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
