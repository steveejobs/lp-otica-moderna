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
import { SmartVideo } from "@/components/SmartVideo";
import {
  internalImages,
  rayBanBrunaImages,
  rayBanMImages,
  site,
  testimonials,
  videos,
} from "@/lib/site";

const links = [
  { label: "Como chegar", href: site.mapsRouteUrl, icon: Navigation, variant: "primary" },
  { label: "Ver no Instagram", href: site.instagramUrl, icon: Instagram, variant: "light" },
  { label: "Ray-Ban", href: "/#rayban", icon: Glasses, variant: "light" },
  { label: "Site completo", href: "/", icon: ChevronRight, variant: "ghost" },
] as const;

const storeGallery = [internalImages[2], internalImages[0], internalImages[1], internalImages[3], internalImages[5], internalImages[6]];
const rayBanGallery = [rayBanBrunaImages[1], rayBanBrunaImages[2], rayBanBrunaImages[3], rayBanMImages[4], rayBanMImages[5], rayBanMImages[8]];

export const metadata: Metadata = {
  title: "Ótica Moderna Araguaína | Instagram",
  description: "Enxergue com estilo. Consultoria de imagem, Ray-Ban, solares e armações em Araguaína.",
  alternates: { canonical: "/instagram" },
  openGraph: {
    title: "Ótica Moderna Araguaína | Instagram",
    description: "Consultoria de imagem, Ray-Ban, solares e armações em Araguaína.",
    type: "website",
    images: [{ url: site.logoFilled, width: 1200, height: 1200, alt: "Logo da Ótica Moderna Araguaína" }],
  },
};

export default function InstagramBioPage() {
  return (
    <main className="insta-page">
      <section className="insta-hero" aria-labelledby="instagram-title">
        <div className="insta-shell">
          <div className="insta-brand">
            <Image src={site.logoIcon} alt="Ótica Moderna Araguaína" width={126} height={126} priority className="insta-logo" />
            <h1 id="instagram-title">{site.instagram}</h1>
            <p>Enxergue com estilo. Consultoria de imagem, Ray-Ban, solares e armações em Araguaína.</p>
          </div>
          <div className="insta-proof" aria-label="Diferenciais rápidos">
            <span>Parcelamos em até 10x</span>
            <span>Rua Florêncio Machado</span>
          </div>
          <StoreMarquee images={storeGallery} />
        </div>
      </section>

      <section className="insta-links insta-shell" aria-label="Links principais">
        {links.map((link) => {
          const Icon = link.icon;
          const external = link.href.startsWith("http");
          const className = `insta-link is-${link.variant}`;
          const content = (
            <>
              <span><Icon size={19} aria-hidden="true" /></span>
              <strong>{link.label}</strong>
              <ChevronRight size={17} aria-hidden="true" />
            </>
          );

          return external ? (
            <a key={link.label} href={link.href} className={className} target="_blank" rel="noopener noreferrer">{content}</a>
          ) : (
            <Link key={link.label} href={link.href} className={className}>{content}</Link>
          );
        })}
      </section>

      <section className="insta-feature insta-shell" aria-labelledby="rayban-gallery-title">
        <div className="insta-section-title">
          <h2 id="rayban-gallery-title">Ray-Ban em destaque</h2>
          <Link href="/#rayban">ver seção</Link>
        </div>
        <RayBanGallery images={rayBanGallery} />
      </section>

      <section className="insta-feature insta-shell" aria-labelledby="videos-title">
        <div className="insta-section-title">
          <h2 id="videos-title">Vídeos</h2>
          <span>sem áudio · em loop</span>
        </div>
        <div className="insta-video-grid is-three">
          <figure className="is-main"><SmartVideo {...videos.rayBanBruna} className="smart-video" /></figure>
          <figure><SmartVideo {...videos.rayBanM} className="smart-video" /></figure>
          <figure><SmartVideo {...videos.rayBanBruna} className="smart-video" /></figure>
        </div>
      </section>

      <section className="insta-feature insta-shell" aria-labelledby="reviews-title">
        <div className="insta-section-title">
          <h2 id="reviews-title">Depoimentos</h2>
          <span>Google</span>
        </div>
        <div className="insta-reviews">
          {testimonials.slice(0, 3).map((testimonial) => (
            <article key={testimonial.name}>
              <span>★★★★★</span>
              <p>{testimonial.text}</p>
              <strong>{testimonial.name}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="insta-feature insta-shell" aria-labelledby="location-title">
        <div className="insta-section-title">
          <h2 id="location-title">Localização</h2>
        </div>
        <a href={site.mapsRouteUrl} className="insta-location" target="_blank" rel="noopener noreferrer">
          <MapPin size={18} aria-hidden="true" />
          <span><strong>{site.shortName}</strong><br />{site.displayAddress}</span>
        </a>
      </section>

      <footer className="insta-footer insta-shell">
        <Sparkles size={15} aria-hidden="true" />
        {site.shortName} · Araguaína
      </footer>
    </main>
  );
}

function StoreMarquee({ images }: { images: { src: string; alt: string }[] }) {
  return (
    <div className="insta-marquee is-store" aria-label="Galeria da loja Ótica Moderna">
      <div>
        {[...images, ...images].map((image, index) => (
          <figure key={`${image.src}-${index}`} aria-hidden={index >= images.length}>
            <Image src={image.src} alt={index < images.length ? image.alt : ""} fill sizes="(max-width: 560px) 40vw, 164px" priority={index < 2} />
          </figure>
        ))}
      </div>
    </div>
  );
}

function RayBanGallery({ images }: { images: { src: string; alt: string }[] }) {
  return (
    <div className="insta-rayban-gallery" aria-label="Galeria Ray-Ban da Ótica Moderna">
      {images.map((image, index) => (
        <figure className={index === 0 ? "is-wide" : ""} key={image.src}>
          <Image src={image.src} alt={image.alt} fill sizes="(max-width: 560px) 48vw, 210px" />
        </figure>
      ))}
    </div>
  );
}