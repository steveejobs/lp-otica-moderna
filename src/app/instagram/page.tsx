import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Glasses,
  Instagram,
  MapPin,
  Navigation,
  Sparkles,
} from "lucide-react";
import {
  frameImages,
  internalImages,
  rayBanBrunaImages,
  rayBanMImages,
  site,
  testimonials,
} from "@/lib/site";

const links = [
  {
    label: "Como chegar",
    href: site.mapsRouteUrl,
    icon: Navigation,
    variant: "primary",
  },
  {
    label: "Ver no Instagram",
    href: site.instagramUrl,
    icon: Instagram,
    variant: "light",
  },
  {
    label: "Ray-Ban",
    href: "/#rayban",
    icon: Glasses,
    variant: "light",
  },
  {
    label: "Site completo",
    href: "/",
    icon: ChevronRight,
    variant: "ghost",
  },
] as const;

const showcaseImages = [
  frameImages[0],
  rayBanBrunaImages[1],
  internalImages[0],
  frameImages[2],
  rayBanMImages[2],
  internalImages[2],
  frameImages[3],
  rayBanBrunaImages[2],
];

export const metadata: Metadata = {
  title: "Ótica Moderna Araguaína | Instagram",
  description:
    "Enxergue com estilo. Consultoria de imagem, Ray-Ban, solares e armações em Araguaína.",
  alternates: {
    canonical: "/instagram",
  },
  openGraph: {
    title: "Ótica Moderna Araguaína | Instagram",
    description:
      "Consultoria de imagem, Ray-Ban, solares e armações em Araguaína.",
    type: "website",
    images: [
      {
        url: site.logoFilled,
        width: 1200,
        height: 1200,
        alt: "Logo da Ótica Moderna Araguaína",
      },
    ],
  },
};

export default function InstagramBioPage() {
  return (
    <main className="instagram-page moderna-instagram-page">
      <section className="instagram-hero" aria-labelledby="instagram-title">
        <div className="instagram-shell">
          <div className="instagram-brand-lockup">
            <Image
              src={site.logoIcon}
              alt="Ótica Moderna Araguaína"
              width={118}
              height={118}
              priority
              className="instagram-logo"
            />
            <h1 id="instagram-title">{site.instagram}</h1>
            <p>Ótica Moderna Araguaína</p>
          </div>

          <p className="instagram-intro">
            Enxergue com estilo. Consultoria de imagem, Ray-Ban, solares e armações em Araguaína.
          </p>

          <div className="instagram-proof moderna-instagram-proof">
            <div>
              <strong>Até 10x</strong>
              <span>Parcelamos suas escolhas</span>
            </div>
            <div>
              <strong>Rua Florêncio Machado</strong>
              <span>Araguaína - TO</span>
            </div>
          </div>

          <InstagramShowcase />
        </div>
      </section>

      <section className="instagram-links instagram-shell" aria-label="Links principais">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <a
              key={link.label}
              href={link.href}
              className={`instagram-main-link is-${link.variant}`}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              <span className="instagram-main-link-icon">
                <Icon size={20} aria-hidden="true" />
              </span>
              <span>{link.label}</span>
              <ChevronRight size={18} aria-hidden="true" />
            </a>
          );
        })}
      </section>

      <section className="instagram-featured instagram-shell" aria-labelledby="inside-title">
        <div className="instagram-section-heading">
          <h2 id="inside-title">Veja por dentro da Ótica Moderna</h2>
          <Link href="/#sobre">ver loja</Link>
        </div>
        <div className="instagram-featured-grid moderna-inside-mini">
          {internalImages.slice(0, 3).map((image) => (
            <article className="instagram-featured-card" key={image.src}>
              <div className="instagram-featured-image">
                <Image src={image.src} alt={image.alt} fill sizes="(max-width: 560px) 29vw, 120px" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="instagram-featured instagram-shell" aria-labelledby="rayban-mini-title">
        <div className="instagram-section-heading">
          <h2 id="rayban-mini-title">Ray-Ban na Ótica Moderna</h2>
          <Link href="/#rayban">ver seção</Link>
        </div>
        <div className="instagram-featured-grid moderna-rayban-mini">
          {[rayBanBrunaImages[1], rayBanBrunaImages[2], rayBanMImages[2]].map((image) => (
            <article className="instagram-featured-card" key={image.src}>
              <div className="instagram-featured-image">
                <Image src={image.src} alt={image.alt} fill sizes="(max-width: 560px) 29vw, 120px" />
              </div>
              <div className="instagram-featured-copy">
                <Sparkles size={14} aria-hidden="true" />
                <strong>Ray-Ban</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="instagram-testimonials instagram-shell" aria-labelledby="instagram-testimonials-title">
        <div className="instagram-section-heading">
          <h2 id="instagram-testimonials-title">Quem compra, recomenda</h2>
        </div>
        <div className="moderna-instagram-reviews">
          {testimonials.slice(0, 4).map((testimonial) => (
            <article key={testimonial.name}>
              <span>★★★★★</span>
              <p>“{testimonial.text}”</p>
              <strong>{testimonial.name}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="instagram-contact instagram-shell" aria-labelledby="contact-title">
        <div className="instagram-section-heading">
          <h2 id="contact-title">Localização</h2>
        </div>
        <address className="instagram-contact-list">
          <a href={site.mapsRouteUrl} target="_blank" rel="noopener noreferrer" aria-label="Abrir rota para a Ótica Moderna Araguaína">
            <MapPin size={18} aria-hidden="true" />
            <span>
              <strong>{site.shortName}</strong>
              <br />
              {site.displayAddress}
            </span>
          </a>
        </address>
      </section>

      <footer className="instagram-footer instagram-shell">
        <span>{site.shortName} · Enxergue com estilo · Araguaína</span>
      </footer>
    </main>
  );
}

function InstagramShowcase() {
  return (
    <div className="instagram-showcase" aria-label="Vitrine da Ótica Moderna">
      <div className="instagram-showcase-main">
        <div className="instagram-showcase-track">
          {Array.from({ length: 2 }).map((_, setIndex) =>
            showcaseImages.map((image, index) => (
              <div className="instagram-showcase-card" key={`${image.src}-${setIndex}-${index}`} aria-hidden={setIndex > 0}>
                <Image
                  src={image.src}
                  alt={setIndex === 0 ? image.alt : ""}
                  fill
                  sizes="(max-width: 560px) 42vw, 170px"
                  priority={setIndex === 0 && index < 2}
                />
              </div>
            )),
          )}
        </div>
      </div>
      <div className="instagram-showcase-floating">
        <div className="instagram-showcase-floating-track">
          {Array.from({ length: 2 }).map((_, setIndex) =>
            [rayBanBrunaImages[1], frameImages[1], internalImages[1], rayBanMImages[3]].map((image, index) => (
              <div className="instagram-showcase-mini-card" key={`${image.src}-mini-${setIndex}-${index}`} aria-hidden={setIndex > 0}>
                <Image src={image.src} alt={setIndex === 0 ? image.alt : ""} fill sizes="90px" />
              </div>
            )),
          )}
        </div>
      </div>
    </div>
  );
}