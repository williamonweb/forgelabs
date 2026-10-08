import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perguntas Frequentes — Forge Labs",
  description: "Respostas sobre projetos, serviços, manutenção e o processo da Forge Labs.",
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
