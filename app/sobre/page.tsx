import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Sobre | Forge Labs", description: "Conheça a Forge Labs e nosso jeito de transformar necessidades reais em soluções digitais." };
const values = [["01", "Proximidade", "Você fala com quem pensa e constrói o projeto."], ["02", "Clareza", "Processo transparente, comunicação direta e decisões explicadas."], ["03", "Identidade", "Cada solução nasce com a personalidade do negócio."], ["04", "Evolução", "Construímos para crescer junto, não para ficar parado."]];

export default function Sobre() {
  return <main>
    <section className="page-hero shell" data-reveal><p className="eyebrow"><i/> Quem somos</p><h1>Não fabricamos páginas.<br/><em>Forjamos possibilidades.</em></h1><p>A Forge Labs une estratégia, design e tecnologia para transformar ideias em ferramentas digitais úteis, fortes e memoráveis.</p></section>
    <section className="story shell" data-reveal><div className="story-emblem"><img src="/forge-story.webp" alt="Bancada de criação da Forge Labs"/><div className="story-badge"><img src="/forge-labs-logo.png" alt="Brasão Forge Labs"/></div></div><div className="story-copy"><span>Nossa essência</span><h2>Nascemos da necessidade de criar melhor.</h2><p>A Forge surgiu construindo soluções para problemas que vivíamos de perto. Foi assim que aprendemos que um bom sistema não precisa ser complicado — precisa entender quem vai usá-lo.</p><p>Essa proximidade continua guiando cada projeto. Ouvimos antes de desenhar, questionamos antes de programar e entregamos somente quando a solução realmente faz sentido.</p><blockquote>“Tecnologia forte é aquela que simplifica a vida sem perder a personalidade.”</blockquote></div></section>
    <section className="values shell">{values.map((value, index) => <article key={value[0]} data-reveal style={{ "--delay": `${index * 80}ms` } as CSSProperties}><span>{value[0]}</span><h3>{value[1]}</h3><p>{value[2]}</p></article>)}</section>
    <section className="contact shell" data-reveal><div><p className="eyebrow"><i/> Vamos conversar</p><h2>Tem uma ideia<br/><em>martelando por aí?</em></h2></div><Link className="contact-button" href="/contato">Conte para nós <span>↗</span></Link></section>
  </main>;
}
