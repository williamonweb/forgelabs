import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Check, ExternalLink } from "lucide-react";
import { getProjectBySlug, getProjects } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.name} — Projetos Forge Labs`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  const projects = await getProjects();
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="case-page" style={{ "--case-color": project.color } as React.CSSProperties}>
      <section className="case-hero">
        <Link className="back-link" href="/projetos"><ArrowLeft /> Todos os projetos</Link>
        <div className="case-title">
          <p>{project.category}</p>
          <h1>{project.name}</h1>
          <strong>{project.phrase}</strong>
          {project.website && (
            <a className="case-website-link" href={project.website} target="_blank" rel="noreferrer">
              Visitar o site <ExternalLink />
            </a>
          )}
        </div>
        {project.image ? (
          <a className="case-site-preview" href={project.website ?? undefined} target="_blank" rel="noreferrer">
            <div className="site-browser-frame">
              <div className="site-browser-bar">
                <span><i /><i /><i /></span>
                <small>{project.websiteLabel}</small>
              </div>
              <Image
                src={project.image}
                alt={`Página inicial do projeto ${project.name}`}
                width={1600}
                height={1000}
                sizes="(max-width: 760px) 90vw, 52vw"
                priority
              />
            </div>
          </a>
        ) : (
          <div className="case-art">
            <span>{project.name.charAt(0)}</span>
            <i className="case-orbit orbit-a" />
            <i className="case-orbit orbit-b" />
            <em>{project.index}</em>
          </div>
        )}
      </section>

      <section className="case-overview">
        <p className="case-summary">{project.summary}</p>
        <div className="case-facts">
          <span><small>Projeto</small>{project.name}</span>
          <span><small>Categoria</small>{project.category}</span>
          <span><small>Criação</small>Forge Labs</span>
        </div>
      </section>

      <section className="case-story">
        <article>
          <span>01</span>
          <p className="section-kicker">O desafio</p>
          <h2>{project.challenge}</h2>
        </article>
        <article>
          <span>02</span>
          <p className="section-kicker">A solução</p>
          <h2>{project.solution}</h2>
        </article>
      </section>

      <section className="case-modules">
        <p className="section-kicker">O que faz parte</p>
        <div>
          {project.modules.map((module) => (
            <span key={module}><Check /> {module}</span>
          ))}
        </div>
      </section>

      <section className="next-case">
        <span>Próximo projeto</span>
        <Link href={`/projetos/${nextProject.slug}`}>
          {nextProject.name} <ArrowUpRight />
        </Link>
      </section>
    </main>
  );
}
