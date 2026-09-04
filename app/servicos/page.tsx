import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Serviços | Forge Labs", description: "Sites, sistemas, lojas virtuais, automações e manutenção digital sob medida." };

const items = [
  ["01", "Sites profissionais", "Landing pages, sites institucionais e portais com identidade própria, desempenho e experiência impecável em qualquer tela.", ["Design responsivo", "SEO e velocidade", "Integração com WhatsApp", "Publicação e domínio"]],
  ["02", "Sistemas sob medida", "Soluções criadas ao redor da sua rotina: gestão, agendamentos, painéis, relatórios, automações e muito mais.", ["Painéis administrativos", "Banco de dados", "Controle de usuários", "Relatórios inteligentes"]],
  ["03", "Lojas virtuais", "Estruturas completas para vender online, organizar produtos e receber pagamentos com segurança.", ["Catálogo e estoque", "Carrinho e checkout", "Pagamentos online", "Gestão de pedidos"]],
  ["04", "Automação e integrações", "Conectamos serviços e eliminamos trabalhos repetitivos para sua equipe ganhar tempo e controle.", ["APIs e webhooks", "WhatsApp e e-mail", "Pagamentos", "Fluxos automáticos"]],
  ["05", "Evolução e suporte", "Cuidamos do que já está no ar com melhorias, correções, novas funções e acompanhamento próximo.", ["Manutenção contínua", "Novas funcionalidades", "Monitoramento", "Suporte humano"]],
];

export default function Servicos() {
  return <main>
    <section className="page-hero shell" data-reveal><p className="eyebrow"><i/> Nossas especialidades</p><h1>Tecnologia que trabalha<br/><em>a favor do seu negócio.</em></h1><p>Da presença digital à operação interna, construímos soluções que fazem sentido para o seu momento e seus objetivos.</p></section>
    <section className="route-visual shell" data-reveal><img src="/forge-services.webp" alt="Metal forjado se transformando em tecnologia"/><div><span>ESTRATÉGIA</span><i/><span>DESIGN</span><i/><span>TECNOLOGIA</span></div></section>
    <section className="route-section shell"><div className="service-list">{items.map((item, index) => <article key={item[0] as string} data-reveal style={{ "--delay": `${index * 70}ms` } as CSSProperties}><span>{item[0]}</span><div><h2>{item[1]}</h2><p>{item[2]}</p></div><ul>{(item[3] as string[]).map(value => <li key={value}>✦ {value}</li>)}</ul><Link href="/contato">Solicitar proposta ↗</Link></article>)}</div></section>
    <section className="contact shell" data-reveal><div><p className="eyebrow"><i/> Precisa de algo diferente?</p><h2>Se existe uma necessidade,<br/><em>podemos forjar a solução.</em></h2></div><Link className="contact-button" href="/contato">Falar com a Forge <span>↗</span></Link></section>
  </main>;
}
