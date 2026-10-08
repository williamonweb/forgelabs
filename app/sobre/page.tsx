import { ArrowUpRight, Fingerprint, Focus, Hammer, RefreshCw } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { processSteps } from "@/lib/site-data";

export const metadata = {
  title: "Sobre — Forge Labs",
  description: "A história, o propósito e a forma de trabalhar da Forge Labs.",
};

export default function AboutPage() {
  return (
    <main className="inner-page">
      <PageHero
        index="03"
        eyebrow="Sobre a Forge"
        title="Tecnologia feita"
        highlight=" para ser útil."
        description="A Forge Labs nasceu da vontade de construir ferramentas digitais que resolvem problemas de verdade — com proximidade, identidade e espaço para evoluir."
      />

      <section className="about-origin">
        <div className="origin-mark"><Hammer /></div>
        <div>
          <p className="section-kicker">A origem</p>
          <h2>Antes de existir uma empresa, existiam problemas pedindo solução.</h2>
        </div>
        <div className="origin-copy">
          <p>
            A Forge nasceu na prática: observando rotinas, identificando gargalos
            e construindo sistemas que tornassem o trabalho mais simples.
          </p>
          <p>
            William Ribeiro Gomes criou a marca para reunir sites, sistemas e
            produtos digitais sob uma mesma ideia: tecnologia próxima de quem usa.
          </p>
        </div>
      </section>

      <section className="principles">
        <article><span>01</span><Focus /><h3>Clareza antes da complexidade</h3><p>A solução precisa ser entendida por quem vai usar, não apenas por quem desenvolve.</p></article>
        <article><span>02</span><Fingerprint /><h3>Identidade antes do template</h3><p>Cada negócio tem uma história e uma necessidade. O projeto deve refletir isso.</p></article>
        <article><span>03</span><RefreshCw /><h3>Evolução antes do abandono</h3><p>Uma boa base continua útil, recebe melhorias e acompanha o crescimento.</p></article>
      </section>

      <section className="process-route">
        <div className="process-route-head">
          <p className="section-kicker">Nosso processo</p>
          <h2>Você sabe o que está acontecendo em cada etapa.</h2>
        </div>
        <ol>
          {processSteps.map((step) => (
            <li key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="route-cta">
        <Hammer />
        <div><p className="section-kicker">Próximo projeto</p><h2>Tem uma ideia que precisa ganhar forma?</h2></div>
        <Link href="/contato">Conversar com a Forge <ArrowUpRight /></Link>
      </section>
    </main>
  );
}
