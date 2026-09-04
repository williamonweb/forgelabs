import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Projetos | Forge Labs", description: "Conheça projetos e soluções digitais desenvolvidos pela Forge Labs." };
const projects = [
  { n: "01", name: "Onda Animal", type: "Site institucional & plataforma", tag: "Veterinária", desc: "Um ecossistema digital para clínica veterinária, serviços, adoção responsável e relacionamento com tutores.", url: "https://www.onda-animal.com.br" },
  { n: "02", name: "Vetcore", type: "Software de gestão", tag: "SaaS", desc: "Agenda e operação clínica desenhadas para reduzir cliques, organizar equipes e agilizar o atendimento.", url: null },
  { n: "03", name: "Eterniza", type: "Plataforma de homenagens", tag: "Plataforma", desc: "Experiências digitais que preservam histórias, afetos e memórias em páginas únicas e compartilháveis.", url: "https://www.eternizas.com.br" },
  { n: "04", name: "Gataria", type: "E-commerce", tag: "E-commerce", desc: "Loja virtual com identidade marcante, catálogo, estoque, pagamentos e experiência de compra completa.", url: "https://www.lojagataria.com.br" },
];

export default function Projetos() {
  return <main>
    <section className="page-hero shell" data-reveal><p className="eyebrow"><i/> Trabalhos selecionados</p><h1>Projetos feitos para<br/><em>resolver e permanecer.</em></h1><p>Cada projeto parte de um problema real e ganha uma solução própria — sem fórmulas prontas.</p></section>
    <section className="projects-grid shell">{projects.map((project, index) => <article key={project.name} className={`project-card project-${index + 1}`} data-reveal style={{ "--delay": `${(index % 2) * 100}ms` } as CSSProperties}>
      <div className="project-top"><span>{project.n}</span><b>{project.tag}</b></div>
      <div className="site-window"><div className="browser-bar"><span/><span/><span/><small>{project.url?.replace("https://", "") || "vetcore • sistema de gestão"}</small></div><div className="site-viewport">{project.url ? <><iframe src={project.url} title={`Prévia do site ${project.name}`} loading="lazy" tabIndex={-1}/><a href={project.url} target="_blank" rel="noreferrer" aria-label={`Abrir o site ${project.name}`}/></> : <div className="vetcore-preview"><div className="vetcore-side">V</div><div><small>PAINEL VETCORE</small><h3>Boa tarde, equipe.</h3><div className="vetcore-slots"><i/><i/><i/></div></div></div>}</div></div>
      <div className="project-info"><div><p>{project.type}</p><h2>{project.name}</h2><p className="project-desc">{project.desc}</p></div>{project.url ? <a className="visit-site" href={project.url} target="_blank" rel="noreferrer">Visitar projeto ↗</a> : <span className="project-status">Em desenvolvimento</span>}</div>
    </article>)}</section>
    <section className="contact shell" data-reveal><div><p className="eyebrow"><i/> O próximo pode ser o seu</p><h2>Vamos construir algo<br/><em>que tenha a sua cara.</em></h2></div><Link className="contact-button" href="/contato">Iniciar projeto <span>↗</span></Link></section>
  </main>;
}
