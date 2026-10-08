"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { href: "/", label: "Início" },
  { href: "/servicos", label: "Serviços" },
  { href: "/projetos", label: "Projetos" },
  { href: "/sobre", label: "Sobre" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 18);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("navigation-open", open);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("navigation-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}${open ? " menu-open" : ""}`}>
      <Link className="brand" href="/" aria-label="Forge Labs — Início" onClick={() => setOpen(false)}>
        <Image src="/forge-mark.png" alt="" width={48} height={48} priority />
        <span><strong>FORGE</strong><small>LABS</small></span>
      </Link>

      <nav className="desktop-nav" aria-label="Navegação principal">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={isActive(item.href) ? "active" : ""}
            aria-current={isActive(item.href) ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <Link className="header-cta" href="/contato">
        Falar sobre um projeto <ArrowUpRight />
      </Link>

      <button
        className="menu-button"
        type="button"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X /> : <Menu />}
      </button>

      {open && (
        <nav className="mobile-nav" aria-label="Navegação móvel">
          <p>Explore a Forge</p>
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(item.href) ? "active" : ""}
              aria-current={isActive(item.href) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              <span>0{navigation.indexOf(item) + 1}</span>{item.label}
            </Link>
          ))}
          <Link className="mobile-nav-cta" href="/contato" onClick={() => setOpen(false)}>
            Falar sobre um projeto <ArrowUpRight />
          </Link>
        </nav>
      )}
    </header>
  );
}
