import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = { title: "Contato | Forge Labs", description: "Conte sua ideia para a Forge Labs e solicite uma proposta para seu projeto digital." };

export default function Contato() {
  return <main>
    <section className="page-hero contact-hero shell" data-reveal><p className="eyebrow"><i/> Comece seu projeto</p><h1>Conte a ideia.<br/><em>Nós acendemos a forja.</em></h1><p>Responda algumas informações rápidas. Ao enviar, sua mensagem será preparada para continuar pelo WhatsApp.</p></section>
    <section className="contact-layout shell"><div data-reveal><p className="eyebrow"><i/> Fale com a gente</p><h2>Qual será nossa<br/>próxima criação?</h2><p>Mesmo que sua ideia ainda não esteja totalmente pronta, pode mandar. Ajudamos a organizar as possibilidades e encontrar o melhor caminho.</p><div className="contact-note"><span>01</span><p>Você conta a necessidade</p><span>02</span><p>Nós avaliamos a melhor solução</p><span>03</span><p>Você recebe uma proposta clara</p></div></div><div data-reveal><ContactForm/></div></section>
  </main>;
}
