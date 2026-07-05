import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Eye,
  Glasses,
  Instagram,
  MapPin,
  Navigation,
  Sparkles,
  Sun,
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SmartVideo } from "@/components/SmartVideo";
import {
  brandLogos,
  internalImages,
  newsTips,
  proofItems,
  rayBanBrunaImages,
  rayBanMImages,
  site,
  testimonials,
  videos,
} from "@/lib/site";

const consultancyItems = [
  { title: "Formato do rosto", text: "Proporção, linhas e presença para valorizar o rosto." },
  { title: "Estilo pessoal", text: "Modelos que conversam com sua imagem e seu jeito de vestir." },
  { title: "Rotina de uso", text: "Escolhas para trabalho, direção, tela, sol e dia a dia." },
  { title: "Conforto visual", text: "Ajuste, leveza e lentes pensadas para usar melhor." },
  { title: "Combinação com lentes", text: "Tratamentos e armações escolhidos em conjunto." },
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="top" className="moderna-page">
        <Hero />
        <ProofBar />
        <AboutSection />
        <ConsultancySection />
        <InternalGallerySection />
        <RayBanSection />
        <BrandsSection />
        <VideoSection />
        <NewsSection />
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
    <section className="moderna-hero" aria-labelledby="hero-title">
      <div className="site-shell moderna-hero-grid">
        <div className="moderna-hero-copy">
          <Image
            src={site.logoIcon}
            width={220}
            height={104}
            alt="Ótica Moderna Araguaína"
            priority
            className="moderna-hero-logo"
          />
          <p className="eyebrow">Ótica premium local em Araguaína</p>
          <h1 id="hero-title">Enxergue com estilo na Ótica Moderna.</h1>
          <p>
            Óculos de grau, solares, Ray-Ban e consultoria de imagem para escolher a armação certa em Araguaína.
          </p>
          <div className="hero-actions moderna-hero-actions">
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

        <div className="moderna-hero-media" aria-label="Fachada e detalhes da Ótica Moderna">
          <div className="moderna-hero-main-photo">
            <Image src={site.heroImage} alt="Fachada da Ótica Moderna Araguaína" fill priority sizes="(max-width: 900px) 92vw, 640px" />
          </div>
          <div className="moderna-hero-stack">
            <Image src={internalImages[0].src} alt={internalImages[0].alt} fill sizes="(max-width: 900px) 40vw, 220px" />
          </div>
          <div className="moderna-hero-badge">
            <Sparkles size={17} aria-hidden="true" />
            Consultoria de imagem para óculos
          </div>
        </div>
      </div>
    </section>
  );
}

function ProofBar() {
  return (
    <section className="moderna-proof" aria-label="Diferenciais rápidos">
      <div className="site-shell moderna-proof-strip">
        {proofItems.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="sobre" className="section moderna-about" aria-labelledby="about-title">
      <div className="site-shell moderna-about-grid">
        <div className="section-heading compact">
          <p className="eyebrow">Sobre</p>
          <h2 id="about-title">Uma ótica moderna, feita para escolher com calma.</h2>
          <p>
            Ambiente acolhedor, atendimento próximo e orientação para encontrar óculos que combinem com seu rosto, rotina e estilo.
          </p>
        </div>
        <div className="moderna-about-media">
          <div className="moderna-about-main">
            <Image src={internalImages[1].src} alt={internalImages[1].alt} fill sizes="(max-width: 900px) 92vw, 650px" />
          </div>
          <div className="moderna-about-side">
            <Image src={internalImages[0].src} alt={internalImages[0].alt} fill sizes="(max-width: 900px) 44vw, 260px" />
          </div>
          <div className="moderna-about-side">
            <Image src={internalImages[2].src} alt={internalImages[2].alt} fill sizes="(max-width: 900px) 44vw, 260px" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ConsultancySection() {
  return (
    <section id="consultoria" className="section moderna-consultancy" aria-labelledby="consultancy-title">
      <div className="site-shell">
        <div className="moderna-section-row">
          <div className="section-heading compact">
            <p className="eyebrow">Consultoria de imagem</p>
            <h2 id="consultancy-title">Consultoria de imagem para escolher seus óculos.</h2>
          </div>
          <p>
            Uma escolha mais visual, prática e segura: a armação deixa de ser tentativa e passa a fazer parte da sua imagem.
          </p>
        </div>
        <div className="moderna-consultancy-grid">
          {consultancyItems.map((item, index) => (
            <article className="moderna-consultancy-card" key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function InternalGallerySection() {
  return (
    <section id="galeria" className="section moderna-internal-gallery" aria-labelledby="internal-gallery-title">
      <div className="site-shell">
        <div className="section-heading compact">
          <p className="eyebrow">Galeria interna</p>
          <h2 id="internal-gallery-title">Por dentro da Ótica Moderna.</h2>
          <p>Fotos reais da loja, atendimento, fachada, balcão e detalhes do ambiente.</p>
        </div>
        <div className="moderna-editorial-grid">
          {internalImages.slice(2, 12).map((image, index) => (
            <figure className={`moderna-editorial-tile tile-${index + 1}`} key={image.src}>
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 760px) 88vw, 32vw" loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function RayBanSection() {
  return (
    <section id="rayban" className="section moderna-rayban" aria-labelledby="rayban-title">
      <div className="site-shell">
        <div className="moderna-rayban-heading">
          <div>
            <p className="eyebrow">Ray-Ban</p>
            <h2 id="rayban-title">Ray-Ban na Ótica Moderna.</h2>
            <p>Produto em primeiro plano, galeria separada da loja e curadoria visual limpa.</p>
          </div>
          <Image src="/assets/otica-moderna/logo-rayban-vermelho.jpg" alt="Ray-Ban" width={180} height={68} />
        </div>
        <RayBanCollection title="Ray-Ban Bruna" text="Modelos Ray-Ban com presença, acabamento e estilo para experimentar com orientação." images={rayBanBrunaImages} />
        <RayBanCollection title="Coleção Ray-Ban M" text="Outra seleção Ray-Ban disponível, com produto como protagonista e fotos próprias." images={rayBanMImages} large />
      </div>
    </section>
  );
}

function RayBanCollection({
  title,
  text,
  images,
  large = false,
}: {
  title: string;
  text: string;
  images: typeof rayBanBrunaImages;
  large?: boolean;
}) {
  return (
    <article className={`moderna-rayban-collection${large ? " is-large" : ""}`}>
      <div className="moderna-rayban-copy">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div className="moderna-rayban-grid">
        {images.slice(0, large ? 8 : 4).map((image, index) => (
          <figure className={index === 0 ? "is-featured" : ""} key={image.src}>
            <Image src={image.src} alt={image.alt} fill sizes="(max-width: 760px) 82vw, 28vw" loading="lazy" />
          </figure>
        ))}
      </div>
    </article>
  );
}

function BrandsSection() {
  return (
    <section className="section moderna-brands" aria-labelledby="brands-title">
      <div className="site-shell moderna-brands-panel">
        <div className="section-heading compact">
          <p className="eyebrow">Marcas</p>
          <h2 id="brands-title">Modelos selecionados e marcas reconhecidas.</h2>
        </div>
        <div className="moderna-brand-logo-grid">
          {brandLogos.map((logo) => (
            <div className={logo.featured ? "is-featured" : ""} key={logo.src}>
              <Image src={logo.src} alt={logo.alt} width={170} height={70} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section className="section moderna-videos" aria-labelledby="videos-title">
      <div className="site-shell moderna-video-grid">
        <div className="section-heading compact">
          <p className="eyebrow">Vídeos</p>
          <h2 id="videos-title">Produto e loja em movimento, sem excesso.</h2>
          <p>Um vídeo principal ativo e apoios menores para manter ritmo visual sem poluir a página.</p>
        </div>
        <div className="moderna-video-main">
          <SmartVideo {...videos.rayBanBruna} className="moderna-video" />
          <span>Ray-Ban Bruna em destaque</span>
        </div>
        <div className="moderna-video-side">
          <SmartVideo {...videos.rayBanM} className="moderna-video" autoPlayWhenVisible={false} />
          <div>
            <BadgeCheck size={18} aria-hidden="true" />
            Vídeo de apoio com controle manual
          </div>
        </div>
      </div>
    </section>
  );
}

function NewsSection() {
  return (
    <section className="section moderna-news" aria-labelledby="news-title">
      <div className="site-shell">
        <div className="section-heading compact">
          <p className="eyebrow">Dicas</p>
          <h2 id="news-title">Conteúdo para escolher melhor.</h2>
          <p>Formato editorial interno, sem notícias datadas inventadas.</p>
        </div>
        <div className="moderna-news-grid">
          {newsTips.map((item) => (
            <article key={item.title}>
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
    <section className="section moderna-testimonials" aria-labelledby="testimonials-title">
      <div className="site-shell">
        <div className="section-heading compact">
          <p className="eyebrow">Depoimentos</p>
          <h2 id="testimonials-title">Atendimento, consultoria e qualidade em destaque.</h2>
        </div>
        <div className="moderna-testimonial-grid">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name}>
              <span>★★★★★</span>
              <p>“{testimonial.text}”</p>
              <strong>{testimonial.name}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  return (
    <section id="localizacao" className="section moderna-location" aria-labelledby="location-title">
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
    <section className="section moderna-final" aria-labelledby="final-title">
      <div className="site-shell moderna-final-panel">
        <div>
          <p className="eyebrow">Ótica Moderna Araguaína</p>
          <h2 id="final-title">Escolha seus próximos óculos com estilo e orientação certa.</h2>
          <p>Veja modelos no Instagram ou trace a rota para visitar a Ótica Moderna em Araguaína.</p>
        </div>
        <div className="hero-actions">
          <a href={site.instagramUrl} className="button button-light" target="_blank" rel="noopener noreferrer">
            <Instagram size={18} aria-hidden="true" />
            Ver no Instagram
          </a>
          <a href={site.mapsRouteUrl} className="button button-red" target="_blank" rel="noopener noreferrer">
            <ArrowRight size={18} aria-hidden="true" />
            Como chegar
          </a>
        </div>
        <div className="moderna-final-icons" aria-hidden="true">
          <Glasses />
          <Eye />
          <Sun />
        </div>
      </div>
    </section>
  );
}
