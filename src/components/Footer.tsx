import Image from "next/image";
import { Instagram, Navigation } from "lucide-react";
import { navItems, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer moderna-footer">
      <div className="site-shell footer-grid moderna-footer-grid">
        <div>
          <a
            href="#top"
            className="footer-brand moderna-footer-brand"
            aria-label="Ótica Moderna Araguaína, voltar ao início"
          >
            <Image src={site.logoIcon} width={150} height={70} alt="" aria-hidden="true" />
            <span>
              <strong>{site.shortName}</strong>
              <small>Enxergue com estilo</small>
            </span>
          </a>
          <p>
            Óculos de grau, solares, Ray-Ban e consultoria de imagem em uma ótica premium local em Araguaína.
          </p>
        </div>

        <address>
          <strong>Endereço</strong>
          <span>{site.displayAddress}</span>
          <a href={site.mapsRouteUrl} target="_blank" rel="noopener noreferrer">
            <Navigation size={15} aria-hidden="true" />
            Como chegar
          </a>
          <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
            <Instagram size={15} aria-hidden="true" />
            Instagram: {site.instagram}
          </a>
        </address>

        <nav aria-label="Links rápidos do rodapé">
          <strong>Navegação</strong>
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
