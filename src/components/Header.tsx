"use client";

import Image from "next/image";
import { Instagram, Menu, Navigation, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, site } from "@/lib/site";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header moderna-header ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="site-shell header-inner moderna-header-inner">
        <a
          href="#top"
          className="brand-mark moderna-brand-mark"
          aria-label="Ótica Moderna Araguaína, voltar ao início"
        >
          <Image src={site.logoIcon} width={154} height={72} alt="" priority />
          <span className="brand-copy">
            <strong>{site.shortName}</strong>
            <small>Araguaína - TO</small>
          </span>
        </a>

        <nav className="header-nav moderna-nav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions moderna-header-actions">
          <a
            href={site.instagramUrl}
            className="header-social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir Instagram da Ótica Moderna: ${site.instagram}`}
          >
            <Instagram size={17} aria-hidden="true" />
          </a>

          <a
            href={site.mapsRouteUrl}
            className="button header-route moderna-route-button"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Como chegar na Ótica Moderna Araguaína"
          >
            <Navigation size={17} aria-hidden="true" />
            Como chegar
          </a>
        </div>

        <button
          type="button"
          className="menu-button"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      {isOpen ? (
        <div className="mobile-menu moderna-mobile-menu">
          <nav className="site-shell" aria-label="Menu mobile">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            ))}
            <a
              href={site.instagramUrl}
              className="button header-route mobile-route"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              <Instagram size={17} aria-hidden="true" />
              Instagram
            </a>
            <a
              href={site.mapsRouteUrl}
              className="button header-route mobile-route"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              <Navigation size={17} aria-hidden="true" />
              Como chegar
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
