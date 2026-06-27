"use client";

import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

export default function SplineHero() {
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(true);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="spline-wrapper pointer-events-none absolute inset-0 z-0 hidden md:block"
      style={{
        opacity: loaded ? 1 : 0,
        transition: "opacity 0.8s ease",
      }}
    >
      {visible && (
        <Spline
          scene="https://prod.spline.design/wGAbBWL3mx4lFz87/scene.splinecode"
          onLoad={() => setLoaded(true)}
        />
      )}
    </div>
  );
}
