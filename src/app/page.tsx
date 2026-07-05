import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
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
import { SmartVideo } from "@/components/SmartVideo";
import {
  TestimonialsColumn,
  TestimonialsMobileMarquee,
} from "@/components/ui/testimonials-columns-1";
import {
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
  {
    title: "Para renovar o estilo",
    text: "Armações que atualizam a imagem sem perder sua personalidade.",
    icon: Sparkles,
  },
  {
    title: "Para escolher pelo formato do rosto",
    text: "Proporção, linhas e presença para valorizar o rosto.",
    icon: Eye,
  },
  {
    title: "Para trabalhar em telas",
    text: "Lentes e armações pensadas para conforto em rotina digital.",
    icon: Monitor,
  },
  {
    title: "Para usar no sol",
    text: "Solares com proteção, acabamento e encaixe para o dia a dia.",
    icon: Sun,
  },
  {
    title: "Para encontrar seu Ray-Ban",
    text: "Curadoria Ray-Ban com orientação para grau, sol e estilo.",
    icon: Glasses,
  },
];

const featuredCollections = [
  {
    eyebrow: "Armações e solares",
    title: "Modelos para grau, sol e rotina.",
    text: "Produto em primeiro plano, apoio visual e copy direta para escolher melhor.",
    images: frameImages,
    href: site.instagramUrl,
    variant: "is-duo",
  },
  {
    eyebrow: "Ray-Ban Bruna",
    title: "Ray-Ban separado da galeria interna.",
    text: "Fotos próprias da coleção Ray-Ban Bruna, com produto como protagonista e acabamento em destaque.",
    images: rayBanBrunaImages,
    href: "#rayban",
    variant: "is-airy",
  },
  {
    eyebrow: "Outra Ray-Ban",
    title: "Outra coleção Ray-Ban em vitrine editorial.",
    text: "A segunda coleção Ray-Ban fica em bloco próprio, sem misturar com loja, balcão ou fachada.",
    images: rayBanMImages,
    href: "#rayban",
    variant: "is-duo",
  },
  {
    eyebrow: "Galeria interna",
    title: "Fotos reais da loja e atendimento.",
    text: "Fachada, ambiente, balcão e atendimento presencial aparecem em uma coleção separada.",
    images: internalImages,
    href: "#sobre",
    variant: "is-airy",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="top" className="moderna-reference-page">
        <Hero />
        <ProofBar />
        <GuidedChoice />
        <FeaturedCollections />
        <InsideStore />
        <RayBanSection />
        <VideoExperience />
        <TrendsSection />
        <TestimonialsSection />
        <LocationSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section className="hero-section moderna-reference-hero" aria-labelledby="hero-title">
      <div className="site-shell hero-grid moderna-reference-hero-grid">
        <div className="hero-copy">
          <Image
            src={site.logoIcon}
            width={220}
            height={104}
            alt="Ótica Moderna Araguaína"
            priority
            className="moderna-hero-logo"
          />
          <p className="eyebrow">Ótica boutique em Araguaína</p>
          <h1 id="hero-title">
            Enxergue com estilo na <span>Ótica Moderna.</span>
          </h1>
          <p>
            Óculos de grau, solares, Ray-Ban e consultoria de imagem para escolher a armação certa em Araguaína.
          </p>
          <div className="hero-actions">
            <a href={site.instagramUrl} className="button button-red" target="_blank" rel="noopener noreferrer">
              <Instagram size={18} aria-hidden="true" />
              Ver modelos no Instagram
            </a>
            <a href={site.mapsRouteUrl} className="button button-ghost" target="_blank" rel="noopener noreferrer">
              <Navigation size={18} aria-hidden="true" />
              Como chegar
            </a>
          </div>
        </div>

        <div className="moderna-hero-showcase" aria-label="Fachada, loja e óculos da Ótica Moderna">
          <figure className="moderna-hero-photo is-main">
            <Image src={site.heroImage} alt="Fachada da Ótica Moderna Araguaína" fill priority sizes="(max-width: 900px) 92vw, 620px" />
          </figure>
          <figure className="moderna-hero-photo is-top">
            <Image src={frameImages[0].src} alt={frameImages[0].alt} fill sizes="(max-width: 900px) 44vw, 240px" />
          </figure>
          <figure className="moderna-hero-photo is-bottom">
            <Image src={rayBanBrunaImages[1].src} alt={rayBanBrunaImages[1].alt} fill sizes="(max-width: 900px) 44vw, 240px" />
          </figure>
          <div className="hero-brand-signal moderna-hero-signal">
            <span>Consultoria de imagem</span>
            <span>Ray-Ban</span>
            <span>Até 10x</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProofBar() {
  return (
    <section className="hero-proof-section" aria-label="Provas rápidas">
      <dl className="site-shell hero-proof-bar">
        {proofItems.map((item, index) => (
          <div className="hero-proof-item" key={item.title}>
            {index > 0 ? <span className="hero-proof-separator" aria-hidden="true" /> : null}
            <dt>{item.title}</dt>
            <dd>{item.detail}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function GuidedChoice() {
  return (
    <section id="consultoria" className="section moderna-guided-section" aria-labelledby="guided-title">
      <div className="site-shell">
        <div className="section-heading compact">
          <p className="eyebrow">Escolha guiada</p>
          <h2 id="guided-title">Uma experiência boutique para escolher seus óculos.</h2>
          <p>
            Orientação por momento de uso, rosto, estilo e rotina.
          </p>
        </div>
        <div className="olhar-choice-grid moderna-choice-grid">
          {guidedChoices.map((item) => {
            const Icon = item.icon;

            return (
              <article className="olhar-choice-card" key={item.title}>
                <Icon size={22} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
                  Ver modelos <ArrowRight size={15} aria-hidden="true" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeaturedCollections() {
  return (
    <section id="galeria" className="featured-collections-section moderna-featured-section" aria-labelledby="collections-title">
      <div className="site-shell featured-collections-shell">
        <div className="featured-collections-header">
          <div className="section-heading featured-collections-heading">
            <p className="eyebrow">Galerias e coleções</p>
            <h2 id="collections-title">Vitrines fortes, separadas por assunto.</h2>
            <p>
              Blocos grandes, mídia protagonista e coleções com contexto.
            </p>
          </div>
        </div>
        <div className="featured-collections-carousel moderna-featured-list">
          <div className="featured-collections-viewport">
            <div className="featured-collections-track">
              {featuredCollections.map((collection) => (
                <CollectionPanel key={collection.title} {...collection} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CollectionPanel({
  eyebrow,
  title,
  text,
  images,
  href,
  variant,
}: {
  eyebrow: string;
  title: string;
  text: string;
  images: typeof internalImages;
  href: string;
  variant: string;
}) {
  const supports = images.slice(1, 3);

  return (
    <article className={`featured-collection-slide ${variant}`}>
      <figure className="featured-collection-media is-dominant is-image">
        <Image src={images[0].src} alt={images[0].alt} fill sizes="(max-width: 760px) 92vw, 48vw" className="featured-collection-image" />
      </figure>
      <div className="featured-collection-supports">
        {supports.map((image, index) => (
          <figure className={`featured-collection-media is-image support-${index + 1}`} key={image.src}>
            <Image src={image.src} alt={image.alt} fill sizes="(max-width: 760px) 44vw, 18vw" className="featured-collection-image" />
          </figure>
        ))}
      </div>
      <div className="featured-collection-copy">
        <span>{eyebrow}</span>
        <h3>{title}</h3>
        <p>{text}</p>
        <a href={href} className="button button-ghost" target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
          Explorar <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

function InsideStore() {
  return (
    <section id="sobre" className="section moderna-inside-section" aria-labelledby="inside-title">
      <div className="site-shell olhar-gallery-layout moderna-inside-layout">
        <div className="olhar-gallery-media">
          <figure className="olhar-gallery-main">
            <Image src={internalImages[0].src} alt={internalImages[0].alt} fill sizes="(max-width: 900px) 92vw, 52vw" />
          </figure>
          <div className="olhar-gallery-supports">
            {internalImages.slice(1, 3).map((image) => (
              <figure className="olhar-gallery-small" key={image.src}>
                <Image src={image.src} alt={image.alt} fill sizes="(max-width: 900px) 44vw, 18vw" />
              </figure>
            ))}
          </div>
        </div>
        <div className="section-heading compact olhar-gallery-copy">
          <p className="eyebrow">Por dentro da loja</p>
          <h2 id="inside-title">Por dentro da Ótica Moderna.</h2>
          <p>Ambiente moderno, atendimento próximo e consultoria para escolher óculos com calma.</p>
          <a href={site.mapsRouteUrl} className="button button-red" target="_blank" rel="noopener noreferrer">
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
    <section id="rayban" className="section moderna-rayban-section" aria-labelledby="rayban-title">
      <div className="site-shell">
        <div className="moderna-rayban-title-row">
          <div className="section-heading compact">
            <p className="eyebrow">Ray-Ban</p>
            <h2 id="rayban-title">Ray-Ban na Ótica Moderna.</h2>
            <p>Ray-Ban aparece como seção própria, sem misturar com fotos internas da loja.</p>
          </div>
          <Image src="/assets/otica-moderna/logo-rayban-vermelho.jpg" alt="Ray-Ban" width={190} height={72} className="moderna-rayban-logo" />
        </div>
        <div className="moderna-rayban-split">
          <RayBanCollection title="Ray-Ban Bruna" images={rayBanBrunaImages} />
          <RayBanCollection title="Outra coleção Ray-Ban" images={rayBanMImages.slice(0, 6)} />
        </div>
      </div>
    </section>
  );
}

function RayBanCollection({ title, images }: { title: string; images: typeof rayBanBrunaImages }) {
  return (
    <article className="moderna-rayban-card">
      <div>
        <span>coleção</span>
        <h3>{title}</h3>
      </div>
      <div className="moderna-rayban-gallery">
        {images.slice(0, 4).map((image, index) => (
          <figure className={index === 0 ? "is-large" : ""} key={image.src}>
            <Image src={image.src} alt={image.alt} fill sizes="(max-width: 760px) 44vw, 22vw" />
          </figure>
        ))}
      </div>
    </article>
  );
}

function VideoExperience() {
  return (
    <section className="section moderna-video-experience" aria-labelledby="video-title">
      <div className="site-shell olhar-experience-layout">
        <div className="section-heading compact">
          <p className="eyebrow">Experiência editorial</p>
          <h2 id="video-title">Vídeos com ritmo premium e visual editorial.</h2>
          <p>Um vídeo principal e dois apoios visuais, sem autoplay múltiplo pesado.</p>
          <div className="olhar-experience-list">
            <div className="olhar-experience-item">
              <BadgeCheck size={18} aria-hidden="true" />
              <span>Ray-Ban em primeiro plano</span>
            </div>
            <div className="olhar-experience-item">
              <BriefcaseBusiness size={18} aria-hidden="true" />
              <span>Atendimento presencial e virtual</span>
            </div>
          </div>
        </div>
        <div className="olhar-experience-video-card moderna-video-card">
          <div className="olhar-experience-video-frame">
            <SmartVideo {...videos.rayBanBruna} className="moderna-video" />
          </div>
          <div className="moderna-video-supports">
            <figure>
              <SmartVideo {...videos.rayBanM} className="moderna-video" autoPlayWhenVisible={false} />
            </figure>
            <figure>
              <Image src={rayBanMImages[2].src} alt={rayBanMImages[2].alt} fill sizes="(max-width: 900px) 42vw, 220px" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrendsSection() {
  return (
    <section className="section moderna-trends-section" aria-labelledby="trends-title">
      <div className="site-shell">
        <div className="section-heading compact">
          <p className="eyebrow">Notícias e tendências</p>
          <h2 id="trends-title">Conteúdo para escolher melhor.</h2>
        </div>
        <div className="moderna-trends-grid">
          {newsTips.map((item) => (
            <article key={item.title}>
              <span>Ótica Moderna</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="testimonials-section moderna-testimonials-section" aria-labelledby="testimonials-title">
      <div className="site-shell testimonials-shell">
        <div className="section-heading testimonials-heading">
          <p className="eyebrow">Depoimentos reais</p>
          <h2 id="testimonials-title">Atendimento, consultoria e qualidade.</h2>
        </div>
        <div className="testimonials-summary">
          <span>★★★★★</span>
          <strong>Google</strong>
          <small>Clientes da Ótica Moderna</small>
        </div>
      </div>
      <div className="site-shell testimonials-columns-wrap">
        <TestimonialsColumn className="testimonials-column" testimonials={testimonials.slice(0, 3)} duration={34} />
        <TestimonialsColumn className="testimonials-column" testimonials={testimonials.slice(3)} duration={38} />
      </div>
      <TestimonialsMobileMarquee testimonials={testimonials} />
    </section>
  );
}

function LocationSection() {
  return (
    <section id="localizacao" className="section moderna-location-section" aria-labelledby="location-title">
      <div className="site-shell moderna-location-grid">
        <div className="section-heading compact">
          <p className="eyebrow">Localização</p>
          <h2 id="location-title">Visite a Ótica Moderna em Araguaína.</h2>
          <address>
            <MapPin size={20} aria-hidden="true" />
            <span>{site.displayAddress}</span>
          </address>
          <a href={site.mapsRouteUrl} className="button button-red" target="_blank" rel="noopener noreferrer">
            <Navigation size={18} aria-hidden="true" />
            Como chegar
          </a>
        </div>
        <div className="moderna-map">
          <iframe src={site.mapsEmbedUrl} title="Mapa da Ótica Moderna Araguaína" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="final-section moderna-final-section" aria-labelledby="final-title">
      <div className="site-shell final-panel">
        <div>
          <p className="eyebrow">Ótica Moderna Araguaína</p>
          <h2 id="final-title">Escolha seus próximos óculos com estilo e orientação certa.</h2>
          <p>Veja modelos no Instagram ou trace a rota para visitar a Ótica Moderna em Araguaína.</p>
        </div>
        <div className="final-actions">
          <a href={site.instagramUrl} className="button button-light" target="_blank" rel="noopener noreferrer">
            <Instagram size={18} aria-hidden="true" />
            Ver no Instagram
          </a>
          <a href={site.mapsRouteUrl} className="button button-red" target="_blank" rel="noopener noreferrer">
            <Navigation size={18} aria-hidden="true" />
            Como chegar
          </a>
        </div>
      </div>
    </section>
  );
}