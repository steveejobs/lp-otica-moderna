import { site } from "@/data/brand";

export {
  brandColors,
  brandLogos,
  brandName,
  frameImages,
  internalImages,
  navItems,
  newsTips,
  proofItems,
  rayBanBrunaImages,
  rayBanMImages,
  site,
  testimonials,
  testimonialsSummary,
  videos,
} from "@/data/brand";

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "OpticalStore",
  name: site.name,
  image: site.logoIcon,
  sameAs: [site.instagramUrl, site.mapsRouteUrl],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.streetAddress,
    addressLocality: site.addressLocality,
    addressRegion: site.addressRegion,
    postalCode: site.postalCode,
    addressCountry: site.postalCountry,
  },
  areaServed: {
    "@type": "City",
    name: site.city,
  },
  url: "/",
  priceRange: "$$",
  description: site.description,
};

