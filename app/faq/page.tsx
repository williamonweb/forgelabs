"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questions = [
  ["A Forge trabalha apenas com sites?", "Não. A Forge desenvolve sites, sistemas personalizados, plataformas, automações, integrações e produtos digitais próprios."],
  ["O projeto é feito a partir de um template?", "A estrutura técnica pode reutilizar bases confiáveis, mas identidade, conteúdo, experiência e regras são adaptados ao projeto. O resultado não é apenas uma troca de logo e cores."],
  ["Consigo atualizar o conteúdo depois?", "Sim. Quando o projeto precisa de autonomia, entregamos um painel de conteúdo com permissões adequadas para a equipe."],
  ["A Forge oferece manutenção?", "Sim. Manutenção, hospedagem, suporte e evolução podem fazer parte da proposta conforme a necessidade do projeto."],
  ["Como começa um orçamento?", "Começa com uma conversa sobre o problema, o objetivo, as funções necessárias e o prazo. Depois disso o escopo e o investimento são apresentados com clareza."],
];

export default function FAQPage() {
  return (
    <main className="inner-page">
      <PageHero
        index="05"
        eyebrow="Perguntas frequentes"
        title="Antes de começar,"
        highlight=" vale saber."
        description="Respostas diretas sobre o jeito da Forge trabalhar, desenvolver e acompanhar cada projeto."
      />
      <section className="faq-list">
        <Accordion type="single" collapsible>
          {questions.map(([question, answer], index) => (
            <AccordionItem value={`item-${index}`} key={question}>
              <AccordionTrigger><span>0{index + 1}</span>{question}</AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
      <section className="faq-cta">
        <h2>A sua pergunta não está aqui?</h2>
        <Link href="/contato">Falar com a Forge <ArrowUpRight /></Link>
      </section>
    </main>
  );
}
