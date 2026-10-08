import { Clock3, MapPin, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "Contato — Forge Labs",
  description: "Conte sua ideia e inicie um novo projeto com a Forge Labs.",
};

export default function ContactPage() {
  return (
    <main className="inner-page">
      <PageHero
        index="04"
        eyebrow="Iniciar projeto"
        title="Conte o problema."
        highlight=" A gente pensa na solução."
        description="Você não precisa chegar com tudo definido. Explique a ideia, a rotina ou o ponto que precisa melhorar — começamos a partir daí."
      />

      <section className="contact-route">
        <aside>
          <p className="section-kicker">Conversa direta</p>
          <h2>Sem formulário infinito. Sem resposta genérica.</h2>
          <div className="contact-facts">
            <span><MessageCircle /><strong>Primeiro contato</strong>Briefing preparado no WhatsApp</span>
            <span><Clock3 /><strong>Retorno</strong>Assim que analisarmos o contexto</span>
            <span><MapPin /><strong>Base</strong>Gravataí · Rio Grande do Sul</span>
          </div>
        </aside>
        <ContactForm />
      </section>
    </main>
  );
}
