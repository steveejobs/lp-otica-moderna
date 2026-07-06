export const brandName = "Ótica Moderna Araguaína";

export const brandColors = {
  blue: "#303090",
  blueDark: "#20205F",
  yellow: "#FFF000",
  white: "#FFFFFF",
  paper: "#F7F8FC",
  ink: "#111436",
  muted: "#5F6380",
  rayBan: "#D71920",
};

const assetBase = "/assets/otica-moderna";

export const site = {
  brandName,
  name: brandName,
  shortName: "Ótica Moderna",
  city: "Araguaína",
  region: "TO",
  displayAddress: "Rua Florêncio Machado, Araguaína - TO, 77803-020",
  streetAddress: "Rua Florêncio Machado",
  addressLocality: "Araguaína",
  addressRegion: "TO",
  postalCode: "77803-020",
  postalCountry: "BR",
  instagram: "@oticamodernato",
  instagramUrl: "https://www.instagram.com/oticamodernato/",
  mapsRouteUrl: "https://maps.app.goo.gl/8rAjyZD5fDfzyhz69",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Rua%20Flor%C3%AAncio%20Machado%2C%20Aragua%C3%ADna%20-%20TO%2C%2077803-020&output=embed",
  logoIcon: `${assetBase}/logo-completa-com-fundo.png`,
  logoTransparent: `${assetBase}/logo-completa-sem-fundo.png`,
  logoFilled: `${assetBase}/logo-completa-com-fundo.png`,
  favicon: `${assetBase}/favicon.png`,
  heroImage: `${assetBase}/fachada.png`,
  promise: "Enxergue com estilo.",
  description:
    "Óculos de grau, solares, Ray-Ban e consultoria de imagem para escolher a armação certa em Araguaína.",
};

export const navItems = [
  { label: "Escolha guiada", href: "#consultoria" },
  { label: "Coleções", href: "#galeria" },
  { label: "Por dentro", href: "#sobre" },
  { label: "Ray-Ban", href: "#rayban" },
  { label: "Localização", href: "#localizacao" },
];

export const proofItems = [
  { title: "Consultoria de imagem", detail: "Escolha guiada para rosto, estilo e rotina." },
  { title: "Parcelamos em até 10x", detail: "Condições para óculos, lentes e armações." },
  { title: "Ray-Ban", detail: "Modelos selecionados para grau e sol." },
  { title: "Rua Florêncio Machado", detail: "Atendimento presencial em Araguaína." },
];

export const internalImages = [
  { src: `${assetBase}/interno-01.png`, alt: "Interior da Ótica Moderna Araguaína" },
  { src: `${assetBase}/interno-02.png`, alt: "Ambiente interno da Ótica Moderna" },
  { src: `${assetBase}/fachada.png`, alt: "Fachada da Ótica Moderna Araguaína" },
  { src: `${assetBase}/loja-galeria-01.jpg`, alt: "Atendimento dentro da Ótica Moderna" },
  { src: `${assetBase}/loja-galeria-02.jpg`, alt: "Área de atendimento da Ótica Moderna" },
  { src: `${assetBase}/loja-galeria-05.jpg`, alt: "Balcão da Ótica Moderna" },
  { src: `${assetBase}/loja-galeria-06.jpg`, alt: "Ambiente real da loja Ótica Moderna" },
  { src: `${assetBase}/loja-galeria-09.jpg`, alt: "Espaço de escolha de óculos na Ótica Moderna" },
  { src: `${assetBase}/loja-galeria-10.jpg`, alt: "Produtos e atendimento na Ótica Moderna" },
  { src: `${assetBase}/loja-galeria-12.jpg`, alt: "Detalhe interno da Ótica Moderna" },
];

export const frameImages = [
  { src: `${assetBase}/loja-galeria-03.jpg`, alt: "Vitrine de armações e solares da Ótica Moderna" },
  { src: `${assetBase}/loja-galeria-04.jpg`, alt: "Armações expostas na Ótica Moderna" },
  { src: `${assetBase}/loja-galeria-07.jpg`, alt: "Modelos de óculos selecionados" },
  { src: `${assetBase}/loja-galeria-08.jpg`, alt: "Seleção de armações da Ótica Moderna" },
  { src: `${assetBase}/loja-galeria-11.jpg`, alt: "Mostruário de óculos da Ótica Moderna" },
];

export const rayBanBrunaImages = [
  { src: `${assetBase}/rayban-bruna-04.jpg`, alt: "Modelo usando Ray-Ban" },
  { src: `${assetBase}/rayban-bruna-05.jpg`, alt: "Óculos Ray-Ban em destaque" },
  { src: `${assetBase}/rayban-bruna-06.jpg`, alt: "Armação Ray-Ban em detalhe" },
  { src: `${assetBase}/rayban-bruna-07.jpg`, alt: "Produto Ray-Ban na Ótica Moderna" },
];

export const rayBanMImages = [
  { src: `${assetBase}/rayban-m-01.jpg`, alt: "Produto Ray-Ban na Ótica Moderna" },
  { src: `${assetBase}/rayban-m-02.jpg`, alt: "Modelo usando Ray-Ban" },
  { src: `${assetBase}/rayban-m-03.jpg`, alt: "Armação Ray-Ban em detalhe" },
  { src: `${assetBase}/rayban-m-04.jpg`, alt: "Armação em detalhe" },
  { src: `${assetBase}/rayban-m-05.jpg`, alt: "Óculos Ray-Ban em destaque" },
  { src: `${assetBase}/rayban-m-06.jpg`, alt: "Produto Ray-Ban da Ótica Moderna" },
  { src: `${assetBase}/rayban-m-07.jpg`, alt: "Solares em destaque" },
  { src: `${assetBase}/rayban-m-08.jpg`, alt: "Modelo usando óculos Ray-Ban" },
  { src: `${assetBase}/rayban-m-09.jpg`, alt: "Acabamento de óculos Ray-Ban" },
  { src: `${assetBase}/rayban-m-10.jpg`, alt: "Óculos Ray-Ban em destaque" },
];

export const videos = {
  rayBanBruna: {
    src: `${assetBase}/rayban-bruna-04.mp4`,
    poster: `${assetBase}/rayban-bruna-05.jpg`,
    label: "Vídeo editorial Ray-Ban Bruna na Ótica Moderna",
  },
  rayBanM: {
    src: `${assetBase}/rayban-m-01.mp4`,
    poster: `${assetBase}/rayban-m-03.jpg`,
    label: "Vídeo editorial de outra coleção Ray-Ban na Ótica Moderna",
  },
};

export const brandLogos = [
  { src: `${assetBase}/logo-rayban-vermelho.jpg`, alt: "Ray-Ban", featured: true },
  { src: `${assetBase}/marca-ana-hickmann.png`, alt: "Ana Hickmann" },
  { src: `${assetBase}/marca-atitude.png`, alt: "Atitude Eyewear" },
  { src: `${assetBase}/marca-hb.png`, alt: "HB Hot Buttered" },
  { src: `${assetBase}/marca-tommy-hilfiger.png`, alt: "Tommy Hilfiger" },
  { src: `${assetBase}/marca-vogue.png`, alt: "Vogue Eyewear" },
];

export type Testimonial = {
  name: string;
  text: string;
  source: "Google";
};

export const testimonials: Testimonial[] = [
  { name: "Henrique Gomes", text: "Melhor atendimento que eu já vi na vida e o preço excelente. Muito satisfeito com o Ray-Ban.", source: "Google" },
  { name: "Bruna Alves", text: "Atendimento excelente, desde o virtual ao presencial. Gostei bastante do ambiente e peças de qualidade.", source: "Google" },
  { name: "Lindaura Janes Cunha", text: "Fiz meu óculos de grau com blue protection, anti-reflexo e ficou maravilhoso.", source: "Google" },
  { name: "Mayara Freitas", text: "Melhor atendimento da cidade! Variedade em lentes e armações de excelente qualidade.", source: "Google" },
  { name: "Fabiana Dias de Sousa", text: "Ambiente aconchegante, óculos com designs modernos para todos os estilos.", source: "Google" },
  { name: "Tiago Gomes Bezerra", text: "Melhor ótica de Araguaína. Consultoria de imagem completa e qualidade excelente.", source: "Google" },
];

export const newsTips = [
  { title: "Como escolher pelo formato do rosto", text: "O encaixe certo valoriza proporções e deixa o uso mais natural." },
  { title: "Consultoria de imagem para óculos", text: "A armação certa conversa com seu estilo, rotina e presença." },
  { title: "Blue protection no grau", text: "Tratamentos de lente ajudam no conforto em telas e luz intensa." },
  { title: "Ray-Ban para grau e sol", text: "Clássicos ganham força quando combinam lente, ajuste e acabamento." },
];

export const testimonialsSummary = {
  source: "Google",
};
