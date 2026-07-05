"use client";

import { useEffect, useRef } from "react";

type SmartVideoProps = {
  src: string;
  poster?: string;
  label: string;
  className?: string;
  autoPlayWhenVisible?: boolean;
};

export function SmartVideo({
  src,
  poster,
  label,
  className,
  autoPlayWhenVisible = true,
}: SmartVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !autoPlayWhenVisible) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => undefined);
          return;
        }

        video.pause();
      },
      { threshold: 0.35 },
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, [autoPlayWhenVisible]);

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
      controls={!autoPlayWhenVisible}
    />
  );
}
