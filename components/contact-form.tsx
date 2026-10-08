"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      "Olá! Quero conversar sobre um projeto com a Forge Labs.",
      "",
      `Nome: ${form.get("nome")}`,
      `Empresa/projeto: ${form.get("empresa") || "Não informado"}`,
      `Tipo: ${form.get("tipo")}`,
      `Ideia: ${form.get("mensagem")}`,
    ].join("\n");

    setSent(true);
    window.open(`https://wa.me/5551985845457?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="field-grid">
        <label>
          Seu nome
          <input name="nome" required placeholder="Como podemos chamar você?" />
        </label>
        <label>
          Empresa ou projeto
          <input name="empresa" placeholder="Opcional" />
        </label>
      </div>
      <label>
        O que você precisa?
        <select name="tipo" defaultValue="Site profissional">
          <option>Site profissional</option>
          <option>Sistema personalizado</option>
          <option>Automação ou integração</option>
          <option>Manutenção e evolução</option>
          <option>Ainda não sei</option>
        </select>
      </label>
      <label>
        Conte um pouco da ideia
        <textarea
          name="mensagem"
          required
          rows={6}
          placeholder="Qual problema você quer resolver e como funciona hoje?"
        />
      </label>
      <button className="form-submit" type="submit">
        {sent ? <><Check /> Mensagem preparada</> : <>Preparar no WhatsApp <ArrowUpRight /></>}
      </button>
      <p className="form-note">
        A mensagem será preparada no seu WhatsApp. Você revisa antes de enviar.
      </p>
    </form>
  );
}
