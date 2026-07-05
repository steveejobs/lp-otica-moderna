import type { Metadata, Viewport } from "next";
import { localBusinessJsonLd, site } from "@/lib/site";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ótica Moderna Araguaína | Enxergue com estilo",
  description:
    "Ótica Moderna Araguaína: óculos de grau, solares, Ray-Ban e consultoria de imagem para escolher a armação certa.",
  keywords: [
    "Ótica Moderna Araguaína",
    "ótica em Araguaína",
    "Ray-Ban em Araguaína",
    "consultoria de imagem para óculos",
    "óculos de grau em Araguaína",
    "óculos de sol em Araguaína",
  ],
  icons: {
    icon: [{ url: site.favicon, type: "image/png" }],
    shortcut: site.favicon,
    apple: [{ url: site.favicon, type: "image/png" }],
  },
  openGraph: {
    title: "Ótica Moderna Araguaína | Enxergue com estilo",
    description:
      "Óculos de grau, solares, Ray-Ban e consultoria de imagem em Araguaína.",
    locale: "pt_BR",
    type: "website",
    images: [{ url: site.logoFilled, width: 1200, height: 1200, alt: "Logo da Ótica Moderna Araguaína" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#303090",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      </body>
    </html>
  );
}