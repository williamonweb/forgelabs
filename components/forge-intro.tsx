"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

export function ForgeIntro() {
  const [visible, setVisible] = useState<boolean | null>(null);

  useEffect(() => {
    let timer: number | undefined;
    const frame = window.requestAnimationFrame(() => {
      if (sessionStorage.getItem("forge-intro-seen")) {
        setVisible(false);
        return;
      }

      setVisible(true);
      timer = window.setTimeout(() => {
        sessionStorage.setItem("forge-intro-seen", "true");
        setVisible(false);
      }, 2300);
    });

    return () => {
      window.cancelAnimationFrame(frame);
      if (timer) window.clearTimeout(timer);
    };
  }, []);

  const skip = () => {
    sessionStorage.setItem("forge-intro-seen", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="forge-intro" aria-label="Abertura Forge Labs">
      <button className="intro-skip" type="button" onClick={skip}>
        Pular <X />
      </button>
      <div className="intro-rule intro-rule-left" aria-hidden="true" />
      <div className="intro-brand" aria-hidden="true">
        <Image src="/forge-logo.png" alt="" width={320} height={320} priority />
        <span>ESTRATÉGIA · DESENVOLVIMENTO · RESULTADOS</span>
      </div>
      <div className="intro-rule intro-rule-right" aria-hidden="true" />
    </div>
  );
}
