import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-identity">
          <Link className="brand footer-brand" href="/">
            <Image src="/forge-mark.png" alt="" width={56} height={56} />
            <span><strong>FORGE</strong><small>LABS</small></span>
          </Link>
          <p>Tecnologia forjada para resolver.</p>
          <span>Gravataí · Rio Grande do Sul</span>
        </div>

        <nav className="footer-navigation" aria-label="Navegação do rodapé">
          <p>Navegação</p>
          <Link href="/">Início</Link>
          <Link href="/servicos">Serviços</Link>
          <Link href="/projetos">Projetos</Link>
          <Link href="/sobre">Sobre</Link>
        </nav>

        <div className="footer-invitation">
          <p>Tem uma ideia que precisa ganhar forma?</p>
          <Link className="footer-contact" href="/contato">
            Iniciar um projeto <ArrowUpRight />
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Forge Labs. Todos os direitos reservados.</span>
        <nav aria-label="Links legais">
          <Link href="/faq">FAQ</Link>
          <Link href="/termos">Termos</Link>
          <Link href="/privacidade">Privacidade</Link>
        </nav>
      </div>
    </footer>
  );
}
