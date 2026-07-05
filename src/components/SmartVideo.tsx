"use client";

import { useEffect, useRef } from "react";

type SmartVideoProps = {
  src: string;
  poster?: string;
  label: string;
  className?: string;
};

export function SmartVideo({ src, poster, label, className }: SmartVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduceMotion.matches) {
      video.pause();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.muted = true;
          video.loop = true;
          void video.play().catch(() => undefined);
          return;
        }

        video.pause();
      },
      { threshold: 0.32 },
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      src={src}
      poster={poster}
      aria-label={label}
      muted
      loop
      playsInline
      preload="metadata"
    />
  );
}