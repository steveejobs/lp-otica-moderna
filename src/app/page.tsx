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
  { title: "Formato do rosto", text: "Proporção, encaixe e equilíbrio visual.", icon: Eye },
  { title: "Trabalho em telas", text: "Conforto para rotina digital e leitura.", icon: Monitor },
  { title: "Usar no sol", text: "Solares para proteção, conforto e estilo.", icon: Sun },
  { title: "Encontrar Ray-Ban", text: "Clássicos e novidades com curadoria da loja.", icon: Glasses },
];

const galleryGroups: GalleryGroup[] = [
  {
    id: "armacoes",
    label: "Armações e solares",
    title: "Armações e solares.",
    text: "Formatos e acabamentos para comparar com calma.",
    images: frameImages,
    fit: "contain",
  },
];

const rayBanShowcaseImages = [...rayBanBrunaImages.slice(1), ...rayBanMImages.slice(0, 2)];

const detailImages = [
  rayBanMImages[4],
  rayBanMImages[3],
  rayBanMImages[5],
  rayBanMImages[6],
  rayBanMImages[7],
  rayBanMImages[8],
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
        <RayBanSection />
        <BrandsSection />
        <VideoExperience />
        <TipsSection />
        <DetailsSection />
        <TestimonialsSection />
        <LocationSection />
        <FinalCta />
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
          <p>Óculos de grau, solares, Ray-Ban e consultoria para escolher a armação certa em Araguaína.</p>
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
        <p>Orientação para encontrar óculos que combinam com você, não só com a vitrine.</p>
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
          <h2 id="gallery-title">Modelos, marcas e detalhes para comparar melhor.</h2>
        </div>
        <p>Veja armações, solares e Ray-Ban em seleções visuais feitas para facilitar sua escolha.</p>
      </div>
      <div className="site-shell">
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
          <p>Um espaço para experimentar, comparar e escolher seus óculos com calma.</p>
          <a href={site.mapsRouteUrl} className="button button-primary" target="_blank" rel="noopener noreferrer">
            <MapPin size={18} aria-hidden="true" />
            Visitar a loja
          </a>
        </div>
      </div>
    </section>
  );
}

function RayBanSection() {
  return (
    <section id="rayban" className="section rayban-section" aria-labelledby="rayban-title">
      <div className="site-shell section-head-row">
        <div className="section-heading compact">
          <h2 id="rayban-title">Ray-Ban na Ótica Moderna.</h2>
        </div>
        <p>Modelos clássicos e atuais para quem quer presença, estilo e acabamento.</p>
      </div>
      <div className="site-shell rayban-editorial">
        {rayBanShowcaseImages.map((image, index) => (
          <figure key={image.src} className={index === 0 ? "rayban-editorial-main" : undefined}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={index === 0 ? "(max-width: 640px) 92vw, 48vw" : "(max-width: 640px) 44vw, 24vw"}
            />
          </figure>
        ))}
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
          <h2 id="brands-title">Marcas que trabalhamos</h2>
          <p>Uma seleção discreta de marcas reconhecidas, escolhidas para diferentes estilos.</p>
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
          <h2 id="video-title">Veja os modelos em movimento.</h2>
          <p>Detalhes de proporção, acabamento e estilo aparecem melhor quando os óculos estão em uso.</p>
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
        <p>Dicas rápidas para escolher armações, lentes e solares com mais segurança.</p>
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

function DetailsSection() {
  return (
    <section className="section details-section" aria-labelledby="details-title">
      <div className="site-shell section-head-row">
        <div className="section-heading compact">
          <h2 id="details-title">Detalhes que ajudam na escolha.</h2>
        </div>
        <p>Acabamentos, formatos e estilos para comparar antes de visitar a loja.</p>
      </div>
      <div className="site-shell details-gallery">
        {detailImages.map((image, index) => (
          <figure
            key={image.src}
            className={index === 0 ? "details-main" : index === detailImages.length - 1 ? "details-wide" : undefined}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={index === 0 ? "(max-width: 640px) 92vw, 48vw" : "(max-width: 640px) 44vw, 24vw"}
            />
          </figure>
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
        <p>Clientes destacam a variedade, o cuidado na escolha e a experiência de compra.</p>
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
          <h2 id="location-title">Visite a Ótica Moderna em Araguaína.</h2>
          <p>Estamos na Rua Florêncio Machado, com atendimento presencial para você escolher com calma.</p>
          <div className="hero-actions">
            <a href={site.mapsRouteUrl} className="button button-primary" target="_blank" rel="noopener noreferrer">
              <Navigation size={18} aria-hidden="true" />
              Como chegar
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

function FinalCta() {
  return (
    <section className="section final-cta-section" aria-labelledby="final-cta-title">
      <div className="site-shell final-cta-card">
        <div className="section-heading">
          <h2 id="final-cta-title">Escolha seus próximos óculos com estilo e orientação certa.</h2>
          <p>Veja modelos no Instagram ou trace a rota para visitar a Ótica Moderna.</p>
        </div>
        <div className="hero-actions">
          <a href={site.instagramUrl} className="button button-primary" target="_blank" rel="noopener noreferrer">
            <Instagram size={18} aria-hidden="true" />
            Ver Instagram
          </a>
          <a href={site.mapsRouteUrl} className="button button-secondary" target="_blank" rel="noopener noreferrer">
            <Navigation size={18} aria-hidden="true" />
            Como chegar
          </a>
        </div>
      </div>
    </section>
  );
}
