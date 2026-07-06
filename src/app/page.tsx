import Image from "next/image";
import {
  BadgeCheck,
  Eye,
  Glasses,
  Instagram,
  MapPin,
  Monitor,
  Navigation,
  Sparkles,
  Sun,
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PremiumGallery, type GalleryGroup } from "@/components/PremiumGallery";
import { SmartVideo } from "@/components/SmartVideo";
import { TestimonialsMarquee } from "@/components/TestimonialsMarquee";
import {
  brandLogos,
  frameImages,
  internalImages,
  newsTips,
  proofItems,
  rayBanBrunaImages,
  rayBanMImages,
  site,
  testimonials,
  videos,
} from "@/lib/site";

const guidedChoices = [
  { title: "Renovar o estilo", text: "Armações com presença, sem exagero.", icon: Sparkles },
  { title: "Formato do rosto", text: "Proporção e encaixe com orientação.", icon: Eye },
  { title: "Trabalho em telas", text: "Lentes e conforto para rotina digital.", icon: Monitor },
  { title: "Usar no sol", text: "Solares com proteção e acabamento.", icon: Sun },
  { title: "Encontrar Ray-Ban", text: "Curadoria para grau, sol e estilo.", icon: Glasses },
];

const galleryGroups: GalleryGroup[] = [
  {
    id: "bruna",
    label: "Ray-Ban Bruna",
    title: "Ray-Ban Bruna.",
    text: "Retratos e detalhes da campanha.",
    brandLogo: "/assets/otica-moderna/logo-rayban-vermelho.jpg",
    images: rayBanBrunaImages.slice(1),
    fit: "contain",
  },
  {
    id: "rayban",
    label: "Ray-Ban",
    title: "Ray-Ban em campanha.",
    text: "Modelos e detalhes em uma seleção editorial.",
    brandLogo: "/assets/otica-moderna/logo-rayban-vermelho.jpg",
    images: rayBanMImages.slice(0, 3),
    fit: "contain",
  },
  {
    id: "armacoes",
    label: "Armações",
    title: "Modelos sem misturar com loja ou Ray-Ban.",
    text: "Produtos, solares e armações organizados como vitrine editorial.",
    images: frameImages.slice(0, 4),
    fit: "cover",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="top" className="premium-page">
        <Hero />
        <ProofBar />
        <GuidedChoice />
        <InsideStore />
        <GallerySection />
        <BrandsSection />
        <VideoExperience />
        <TipsSection />
        <TestimonialsSection />
        <LocationSection />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section className="premium-hero" aria-labelledby="hero-title">
      <div className="site-shell premium-hero-grid">
        <div className="premium-hero-copy">
          <h1 id="hero-title">Enxergue com estilo na Ótica Moderna.</h1>
          <p>Óculos de grau, solares, Ray-Ban e consultoria de imagem para escolher a armação certa em Araguaína.</p>
          <div className="hero-actions">
            <a href={site.instagramUrl} className="button button-primary" target="_blank" rel="noopener noreferrer">
              <Instagram size={18} aria-hidden="true" />
              Ver modelos no Instagram
            </a>
            <a href={site.mapsRouteUrl} className="button button-secondary" target="_blank" rel="noopener noreferrer">
              <Navigation size={18} aria-hidden="true" />
              Como chegar
            </a>
          </div>
        </div>
        <div className="premium-hero-media" aria-label="Curadoria de óculos da Ótica Moderna">
          <figure className="hero-photo hero-photo-main">
            <Image src={rayBanBrunaImages[0].src} alt={rayBanBrunaImages[0].alt} fill priority sizes="(max-width: 900px) 92vw, 640px" />
          </figure>
          <figure className="hero-photo hero-photo-product">
            <Image src={rayBanMImages[9].src} alt={rayBanMImages[9].alt} fill sizes="(max-width: 900px) 44vw, 240px" />
          </figure>
          <div className="hero-badge">
            <BadgeCheck size={16} aria-hidden="true" />
            Consultoria de imagem · até 10x
          </div>
        </div>
      </div>
    </section>
  );
}

function ProofBar() {
  return (
    <section className="proof-section" aria-label="Diferenciais rápidos">
      <div className="site-shell proof-grid">
        {proofItems.map((item) => (
          <article key={item.title}>
            <strong>{item.title}</strong>
            <span>{item.detail}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function GuidedChoice() {
  return (
    <section id="consultoria" className="section guided-section" aria-labelledby="guided-title">
      <div className="site-shell section-head-row">
        <div className="section-heading compact">
          <h2 id="guided-title">Escolha por rosto, rotina e estilo.</h2>
        </div>
        <p>Menos tentativa, mais orientação. Cada indicação parte do seu uso real.</p>
      </div>
      <div className="site-shell guided-grid">
        {guidedChoices.map((item) => {
          const Icon = item.icon;
          return (
            <article className="guided-card" key={item.title}>
              <Icon size={20} aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section id="galeria" className="section gallery-section" aria-labelledby="gallery-title">
      <div className="site-shell section-head-row">
        <div className="section-heading compact">
          <h2 id="gallery-title">Produtos em destaque, depois do ambiente.</h2>
        </div>
        <p>Ray-Ban, armações e solares em galerias próprias, sem misturar imagens da loja.</p>
      </div>
      <div id="rayban" className="site-shell">
        <PremiumGallery groups={galleryGroups} />
      </div>
    </section>
  );
}

function InsideStore() {
  return (
    <section id="sobre" className="section inside-section" aria-labelledby="inside-title">
      <div className="site-shell inside-grid">
        <div className="inside-media">
          <figure className="inside-main"><Image src={internalImages[0].src} alt={internalImages[0].alt} fill sizes="(max-width: 900px) 92vw, 50vw" /></figure>
          <figure><Image src={internalImages[6].src} alt={internalImages[6].alt} fill sizes="(max-width: 900px) 44vw, 18vw" /></figure>
          <figure><Image src={internalImages[8].src} alt={internalImages[8].alt} fill sizes="(max-width: 900px) 44vw, 18vw" /></figure>
        </div>
        <div className="section-heading compact">
          <h2 id="inside-title">Ambiente moderno, atendimento próximo.</h2>
          <p>Um espaço pensado para experimentar, comparar e escolher óculos com calma, com atendimento presencial e consultoria.</p>
          <a href={site.mapsRouteUrl} className="button button-primary" target="_blank" rel="noopener noreferrer">
            <MapPin size={18} aria-hidden="true" />
            Visitar a loja
          </a>
        </div>
      </div>
    </section>
  );
}

const prominentBrandNames = new Set(["Ana Hickmann", "Atitude Eyewear", "Tommy Hilfiger"]);

function BrandsSection() {
  return (
    <section className="brands-section" aria-labelledby="brands-title">
      <div className="site-shell brands-panel">
        <div className="section-heading compact">
          <p className="eyebrow">Marcas que trabalhamos</p>
          <h2 id="brands-title">Seleção discreta, curada pela loja.</h2>
        </div>
        <div className="brands-strip">
          {brandLogos.map((logo) => (
            <figure
              key={logo.src}
              className={prominentBrandNames.has(logo.alt) ? "is-prominent" : ""}
              tabIndex={0}
            >
              <Image src={logo.src} alt={logo.alt} width={180} height={76} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoExperience() {
  return (
    <section className="section video-section" aria-labelledby="video-title">
      <div className="site-shell video-grid">
        <div className="section-heading compact">
          <h2 id="video-title">Vídeos rodando juntos, só quando visíveis.</h2>
          <p>Todos sem áudio, em loop, com pausa automática fora da viewport.</p>
        </div>
        <div className="video-composition">
          <figure className="video-main">
            <SmartVideo src={videos.rayBanBruna.src} label={videos.rayBanBruna.label} className="smart-video" />
          </figure>
          <figure>
            <SmartVideo src={videos.rayBanM.src} label={videos.rayBanM.label} className="smart-video" />
          </figure>
        </div>
      </div>
    </section>
  );
}

function TipsSection() {
  return (
    <section className="section tips-section" aria-labelledby="tips-title">
      <div className="site-shell section-head-row">
        <div className="section-heading compact">
          <h2 id="tips-title">Conteúdo curto para decidir melhor.</h2>
        </div>
      </div>
      <div className="site-shell tips-list">
        {newsTips.slice(0, 4).map((item) => (
          <article key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="section testimonials-section" aria-labelledby="testimonials-title">
      <div className="site-shell section-head-row">
        <div className="section-heading compact">
          <h2 id="testimonials-title">Atendimento, consultoria e qualidade.</h2>
        </div>
        <p>Duas linhas contínuas, compactas e acessíveis, inspiradas no ritmo original da referência.</p>
      </div>
      <TestimonialsMarquee testimonials={testimonials} />
    </section>
  );
}

function LocationSection() {
  return (
    <section id="localizacao" className="section location-section" aria-labelledby="location-title">
      <div className="site-shell location-card">
        <div className="section-heading compact">
          <h2 id="location-title">Rua Florêncio Machado, Araguaína.</h2>
          <p>{site.displayAddress}</p>
          <div className="hero-actions">
            <a href={site.mapsRouteUrl} className="button button-primary" target="_blank" rel="noopener noreferrer">
              <Navigation size={18} aria-hidden="true" />
              Como chegar
            </a>
            <a href={site.instagramUrl} className="button button-secondary" target="_blank" rel="noopener noreferrer">
              <Instagram size={18} aria-hidden="true" />
              Ver Instagram
            </a>
          </div>
        </div>
        <div className="map-frame">
          <iframe src={site.mapsEmbedUrl} title="Mapa da Ótica Moderna Araguaína" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
        </div>
      </div>
    </section>
  );
}