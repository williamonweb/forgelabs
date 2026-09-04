import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import MotionEnhancer from "@/components/motion-enhancer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forge Labs | Sites e Sistemas Sob Medida",
  description: "Criamos sites profissionais, lojas virtuais e sistemas sob medida para transformar ideias em negócios digitais.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased"><MotionEnhancer/><SiteHeader/>{children}<SiteFooter/></body>
    </html>
  );
}
