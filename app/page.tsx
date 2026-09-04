// Internal workspace sites can read the authenticated OpenAI user from the
// forwarded request headers:
//
// import { headers } from "next/headers";
//
// export default async function Home() {
//   const requestHeaders = await headers();
//   const email = requestHeaders.get("oai-authenticated-user-email");
//   const encodedFullName = requestHeaders.get("oai-authenticated-user-full-name");
//   const fullName =
//     encodedFullName &&
//     requestHeaders.get("oai-authenticated-user-full-name-encoding") ===
//       "percent-encoded-utf-8"
//       ? decodeURIComponent(encodedFullName)
//       : null;
//   const displayName = fullName ?? email;
//   // ...
// }

const services = [
  { icon: "◇", title: "Sites profissionais", text: "Presença digital rápida, responsiva e pensada para transformar visitas em contatos." },
  { icon: "⬡", title: "Sistemas sob medida", text: "Ferramentas criadas para organizar sua operação, reduzir tarefas e ganhar produtividade." },
  { icon: "◆", title: "Lojas virtuais", text: "Sua marca pronta para vender online com uma experiência simples e segura." },
  { icon: "⌁", title: "Automação e integrações", text: "Conectamos processos, pagamentos, bancos de dados e serviços para tudo fluir melhor." },
];

const process = [
  ["01", "A ideia", "Entendemos seu negócio, seu público e o resultado que você busca."],
  ["02", "A forja", "Desenhamos e desenvolvemos a solução com identidade e propósito."],
  ["03", "O lançamento", "Testamos, publicamos e acompanhamos seu projeto no ar."],
];

export default function Home() {
  return <main>
    <section className="hero shell" id="inicio">
      <div className="hero-copy" data-reveal>
        <p className="eyebrow"><i /> Tecnologia forjada para o seu negócio</p>
        <h1>Ideias fortes.<br/><em>Soluções digitais</em><br/>que deixam marca.</h1>
        <p className="lead">Criamos sites, sistemas e experiências digitais sob medida para negócios que não querem ser apenas mais um.</p>
        <div className="actions"><a className="primary" href="/contato">Quero tirar minha ideia do papel <span>↗</span></a><a className="secondary" href="/servicos">Conhecer serviços →</a></div>
        <div className="proof"><span><b>100%</b> sob medida</span><span><b>Design</b> com propósito</span><span><b>Suporte</b> de verdade</span></div>
      </div>
      <div className="hero-visual" data-reveal aria-hidden="true">
        <img className="hero-scene" src="/forge-hero.webp" alt=""/>
        <div className="hero-crest"><img src="/forge-labs-logo.png" alt=""/></div>
        <span className="orbit orbit-one"/><span className="orbit orbit-two"/>
        <i className="spark spark-1"/><i className="spark spark-2"/><i className="spark spark-3"/><i className="spark spark-4"/><i className="spark spark-5"/>
        <p>Estratégia <span>×</span> Design <span>×</span> Tecnologia</p>
      </div>
    </section>

    <div className="forge-marquee" aria-hidden="true"><div><span>Sites profissionais</span><b>✦</b><span>Sistemas sob medida</span><b>✦</b><span>Experiências digitais</span><b>✦</b><span>Automação inteligente</span><b>✦</b><span>Sites profissionais</span><b>✦</b><span>Sistemas sob medida</span><b>✦</b><span>Experiências digitais</span><b>✦</b><span>Automação inteligente</span><b>✦</b></div></div>

    <section className="section shell" id="servicos" data-reveal>
      <div className="section-heading"><div><p className="eyebrow"><i /> O que forjamos</p><h2>Do conceito ao digital.</h2></div><p>Não entregamos apenas código. Criamos ferramentas que resolvem problemas reais e ajudam negócios a crescer.</p></div>
      <div className="services">{services.map((s, i)=><article key={s.title} data-reveal style={{"--delay":`${i * 90}ms`} as React.CSSProperties}><span className="service-number">0{i+1}</span><div className="service-icon">{s.icon}</div><h3>{s.title}</h3><p>{s.text}</p><a href="/contato" aria-label={`Falar sobre ${s.title}`}>Vamos conversar <span>↗</span></a></article>)}</div>
    </section>

    <section className="forge-feature shell" data-reveal>
      <div className="feature-image"><img src="/forge-services.webp" alt="Metal sendo forjado com circuitos luminosos"/></div>
      <div className="feature-copy"><p className="eyebrow"><i/> Tecnologia com presença</p><h2>Um projeto forte começa muito antes do código.</h2><p>Estratégia, identidade e experiência trabalham juntas para criar algo bonito por fora e inteligente por dentro.</p><a href="/projetos">Ver projetos selecionados <span>↗</span></a></div>
    </section>

    <section className="about" id="sobre"><div className="shell about-grid" data-reveal>
      <div className="quote-mark">F</div>
      <div><p className="eyebrow"><i /> Sobre a Forge</p><h2>Construímos como quem forja:<br/><em>com intenção em cada detalhe.</em></h2></div>
      <div className="about-text"><p>A Forge Labs nasceu da vontade de transformar necessidades reais em soluções digitais inteligentes, bonitas e fáceis de usar.</p><p>Aqui, cada projeto é único. Escutamos, pensamos e construímos junto com você — sem pacotes engessados e sem complicação.</p><div className="signature">FORGE LABS <span>•</span> SOFTWARE & DESIGN</div></div>
    </div></section>

    <section className="section shell" id="processo" data-reveal><div className="section-heading"><div><p className="eyebrow"><i /> Como trabalhamos</p><h2>Da faísca ao lançamento.</h2></div><p>Um processo claro, próximo e sem mistério. Você acompanha cada etapa da construção.</p></div>
      <div className="process">{process.map((p)=><article key={p[0]}><span>{p[0]}</span><div/><h3>{p[1]}</h3><p>{p[2]}</p></article>)}</div>
    </section>

    <section className="contact shell" id="contato" data-reveal><div><p className="eyebrow"><i /> Vamos criar juntos</p><h2>Sua ideia pode ser o<br/><em>nosso próximo projeto.</em></h2><p>Conte o que você tem em mente. A gente ajuda a dar forma, estratégia e vida digital.</p></div><a className="contact-button" href="/contato">Começar agora <span>↗</span></a></section>
  </main>;
}
