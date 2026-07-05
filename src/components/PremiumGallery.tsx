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
  eyebrow: string;
  title: string;
  text: string;
  images: GalleryImage[];
};

export function PremiumGallery({ groups }: { groups: GalleryGroup[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = groups[activeIndex];

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

      <article className="premium-gallery-panel" aria-live="polite">
        <div className="premium-gallery-copy">
          <span>{active.eyebrow}</span>
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
            {active.images.slice(1, 4).map((image) => (
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