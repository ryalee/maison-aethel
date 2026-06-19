import type { Metadata } from "next";
import { Quicksand, Bodoni_Moda, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aethel | Estética",
  description: description:
  "Clínica de estética especializada em tratamentos faciais e corporais que valorizam sua beleza natural. Protocolos personalizados, tecnologia avançada e uma experiência exclusiva voltada ao bem-estar e à confiança.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorantGaramond.variable} ${quicksand.variable}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#FDFBF8]">{children}</body>
    </html>
  );
}
