import Link from "next/link";

export function SiteHeader(){
  return <header className="nav shell">
    <Link className="brand" href="/" aria-label="Forge Labs — início"><img src="/forge-labs-logo.png" alt="Forge Labs"/><span>FORGE <b>LABS</b></span></Link>
    <nav aria-label="Navegação principal"><Link href="/servicos">Serviços</Link><Link href="/projetos">Projetos</Link><Link href="/sobre">Sobre</Link><Link href="/contato">Contato</Link></nav>
    <details className="mobile-nav"><summary aria-label="Abrir menu"><span/><span/></summary><div><Link href="/">Início</Link><Link href="/servicos">Serviços</Link><Link href="/projetos">Projetos</Link><Link href="/sobre">Sobre</Link><Link href="/contato">Contato</Link></div></details>
    <Link className="mini-cta" href="/contato">Iniciar projeto <span>↗</span></Link>
  </header>
}

export function SiteFooter(){
  return <footer className="shell"><Link className="brand" href="/"><img src="/forge-labs-logo.png" alt=""/><span>FORGE <b>LABS</b></span></Link><p>© 2026 Forge Labs. Ideias forjadas para durar.</p><div className="footer-links"><Link href="/servicos">Serviços</Link><Link href="/projetos">Projetos</Link><Link href="/contato">Contato</Link></div></footer>
}
