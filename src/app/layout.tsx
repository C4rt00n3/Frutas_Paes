"use serve";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frutas Paes",
  keywords: [
    "Frutas Paes",
    "Frutas em Livramento De Nossa Senhora",
    "Manga",
    "Maracuja",
    "Comercio de frutas",
    "Comercio de frutas em Livramneto",
    "Levramento De Nossa Senhora",
  ],
  authors: [{ name: "Frutas Paes", url: "www.frutaspaes.com.br" }],
  description:
    "Frutas Paes - Venda online de manga e maracujá. Localizado em Livramento de Nossa Senhora, oferecemos produtos de alta qualidade e atendimento excepcional. Entregamos para todo o Brasil. Descubra o sabor fresco e a praticidade de comprar frutas conosco.",
  icons: [{ rel: "icon", url: "./public/assets/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
