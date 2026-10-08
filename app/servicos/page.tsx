import { ArrowUpRight, Check, Flame } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { services } from "@/lib/site-data";

export const metadata = {
  title: "Serviços — Forge Labs",
  description: "Sites, sistemas e automações construídos sob medida.",
};

export default function ServicesPage() {
  return (
    <main className="inner-page">
      <PageHero
        index="01"
        eyebrow="Serviços"
        title="Tecnologia que resolve."
        highlight=" Sem receita pronta."
        description="Da presença digital à operação interna: desenhamos a solução em torno do problema, da equipe e do resultado que precisa acontecer."
      />

      <section className="service-detail-list">
        {services.map((service) => (
          <article className="service-detail" id={service.slug} key={service.slug}>
            <div className="service-detail-head">
              <span>{service.number}</span>
              <p>{service.eyebrow}</p>
            </div>
            <div className="service-detail-body">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <ul>
                {service.deliverables.map((item) => (
                  <li key={item}><Check /> {item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="route-cta">
        <Flame />
        <div>
          <p className="section-kicker">Não encontrou um pacote?</p>
          <h2>Melhor. A Forge começa pelo seu problema.</h2>
        </div>
        <Link href="/contato">Explicar minha ideia <ArrowUpRight /></Link>
      </section>
    </main>
  );
}
