// src/app/layout.tsx
import { ProductsProvider } from "@/contexts/ProductsContext";  // Importe o ProductsProvider
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Carregando as fontes
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata exportado corretamente como um componente de servidor
export const metadata: Metadata = {
  title: "PedeFood",
  description: "Seu cardápio online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Este log será chamado uma única vez após a montagem
  console.log("RootLayout rendered");
  console.log("ProductsProvider initialized in RootLayout");

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ProductsProvider>
          {children}
        </ProductsProvider>
      </body>
    </html>
  );
}
