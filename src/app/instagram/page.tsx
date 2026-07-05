import type { Metadata } from "next";
import Image from "next/image";
import { ChevronRight, Instagram, MapPin, Navigation, Sparkles } from "lucide-react";
import {
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
    icon: Sparkles,
    variant: "light",
  },
  {
    label: "Site completo",
    href: "/",
    icon: ChevronRight,
    variant: "ghost",
  },
] as const;

const bioGallery = [
  internalImages[0],
  internalImages[1],
  internalImages[2],
  rayBanBrunaImages[0],
  rayBanBrunaImages[1],
  rayBanMImages[0],
  rayBanMImages[2],
];

export const metadata: Metadata = {
  title: "Ótica Moderna Araguaína | Links",
  description:
    "Bio premium da Ótica Moderna Araguaína: rota, Instagram, Ray-Ban, galeria e depoimentos.",
  alternates: {
    canonical: "/instagram",
  },
  openGraph: {
    title: "Ótica Moderna Araguaína | Links",
    description: "Enxergue com estilo. Consultoria de imagem, Ray-Ban, solares e armações em Araguaína.",
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
    <main className="instagram-page moderna-bio-page">
      <section className="instagram-hero moderna-bio-hero" aria-labelledby="instagram-title">
        <div className="instagram-shell moderna-bio-shell">
          <Image
            src={site.logoIcon}
            alt="Ótica Moderna Araguaína"
            width={180}
            height={86}
            priority
            className="instagram-logo moderna-bio-logo"
          />
          <h1 id="instagram-title">{site.instagram}</h1>
          <p className="moderna-bio-copy">
            Enxergue com estilo. Consultoria de imagem para óculos, Ray-Ban, solares e armações em Araguaína.
          </p>
          <div className="moderna-bio-proof">Parcelamos em até 10x · Rua Florêncio Machado</div>
          <InstagramGalleryMarquee />
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

      <section className="instagram-shell moderna-bio-rayban" aria-labelledby="bio-rayban-title">
        <div className="instagram-section-heading">
          <h2 id="bio-rayban-title">Ray-Ban na Ótica Moderna</h2>
        </div>
        <div className="moderna-bio-rayban-grid">
          {[rayBanBrunaImages[0], rayBanBrunaImages[2], rayBanMImages[0], rayBanMImages[4]].map((image) => (
            <figure key={image.src}>
              <Image src={image.src} alt={image.alt} fill sizes="44vw" />
            </figure>
          ))}
        </div>
      </section>

      <section className="instagram-testimonials instagram-shell" aria-labelledby="instagram-testimonials-title">
        <div className="instagram-section-heading">
          <h2 id="instagram-testimonials-title">Quem compra, recomenda</h2>
        </div>
        <div className="moderna-bio-testimonials">
          {testimonials.slice(0, 4).map((testimonial) => (
            <article key={testimonial.name}>
              <p>“{testimonial.text}”</p>
              <strong>{testimonial.name}</strong>
            </article>
          ))}
        </div>
      </section>

      <section id="enderecos" className="instagram-contact instagram-shell" aria-labelledby="contact-title">
        <div className="instagram-section-heading">
          <h2 id="contact-title">Localização</h2>
        </div>
        <address className="instagram-contact-list moderna-bio-location">
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

      <footer className="instagram-footer instagram-shell moderna-bio-footer">
        <span>{site.shortName} · Araguaína</span>
      </footer>
    </main>
  );
}

function InstagramGalleryMarquee() {
  return (
    <div className="instagram-photo-marquee moderna-bio-marquee" aria-label="Galeria oficial da Ótica Moderna">
      <div className="instagram-photo-row is-main">
        <div className="instagram-photo-track">
          {Array.from({ length: 2 }).map((_, setIndex) => (
            <div className="instagram-photo-set" key={`bio-gallery-${setIndex}`} aria-hidden={setIndex > 0}>
              {bioGallery.map((item, index) => (
                <div className="instagram-photo-tile" key={`${item.src}-${setIndex}`}>
                  <Image
                    src={item.src}
                    alt={setIndex === 0 ? item.alt : ""}
                    fill
                    sizes="(max-width: 720px) 54vw, 220px"
                    priority={setIndex === 0 && index < 2}
                    loading={setIndex === 0 && index < 2 ? undefined : "lazy"}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
