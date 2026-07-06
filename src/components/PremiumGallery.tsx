"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type GalleryImage = {
  src: string;
  alt: string;
};

export type GalleryGroup = {
  id: string;
  label: string;
  title: string;
  text: string;
  brandLogo?: string;
  images: GalleryImage[];
  fit?: "cover" | "contain";
};

export function PremiumGallery({ groups }: { groups: GalleryGroup[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = groups[activeIndex];
  const fit = active.fit ?? "cover";

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % groups.length);
    }, 5600);

    return () => window.clearInterval(timer);
  }, [groups.length]);

  return (
    <div className="premium-gallery">
      <div className="premium-gallery-tabs" role="tablist" aria-label="Galerias da Ótica Moderna">
        {groups.map((group, index) => (
          <button
            key={group.id}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            className={index === activeIndex ? "is-active" : ""}
            onClick={() => setActiveIndex(index)}
          >
            {group.label}
          </button>
        ))}
      </div>

      <article className={`premium-gallery-panel is-${active.id} fit-${fit}`} aria-live="polite">
        <div className="premium-gallery-copy">
          {active.brandLogo ? (
            <Image src={active.brandLogo} alt="Ray-Ban" width={150} height={58} className="premium-gallery-brand" />
          ) : null}
          <h3>{active.title}</h3>
          <p>{active.text}</p>
        </div>
        <div className="premium-gallery-media">
          <figure className="premium-gallery-main">
            <Image
              src={active.images[0].src}
              alt={active.images[0].alt}
              fill
              sizes="(max-width: 760px) 92vw, 54vw"
              priority={activeIndex === 0}
            />
          </figure>
          <div className="premium-gallery-strip">
            {active.images.slice(1, 5).map((image) => (
              <figure key={image.src}>
                <Image src={image.src} alt={image.alt} fill sizes="(max-width: 760px) 29vw, 14vw" />
              </figure>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
