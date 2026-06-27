"use client";

import { Suspense, Component, type ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import SplineHero from "@/components/SplineHero";

class SplineErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

const CARDS = [
  {
    label: "FEATURED PROJECT",
    title: "Disinfo Tracker",
    subtitle: "Kafka, Spark, Sentence-BERT — real-time narrative detection",
    link: "/work",
    gradient: "from-[#1C1A1C] to-[#2a2230]",
  },
  {
    label: "LIFESTYLE",
    title: "NYU × NYC",
    subtitle: "Grad school, city life, and too much coffee",
    link: "/about",
    gradient: "from-[#1C1A1C] to-[#2a2528]",
  },
  {
    label: "INTERACTIVE",
    title: "Watch It Think",
    subtitle: "Live AI agent demo — see reasoning in real time",
    link: "/lab",
    gradient: "from-[#1C1A1C] to-[#22202a]",
  },
  {
    label: "LET'S PLAY",
    title: "Roast or Toast",
    subtitle: "Rate this portfolio. Be honest. I can take it.",
    link: "/lab",
    gradient: "from-[#1C1A1C] to-[#2a2230]",
  },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-0 w-full flex-1 flex-col overflow-hidden pt-16">
      <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col gap-8 px-6 py-8 md:px-10 lg:flex-row lg:gap-10 lg:py-0 xl:px-14">
        {/* LEFT — Headline area */}
        <motion.div
          className="relative z-10 flex flex-1 flex-col justify-center lg:max-w-[58%]"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            className="font-display text-[2rem] leading-[1.12] font-normal tracking-tight sm:text-[2.8rem] lg:text-[3.5rem] xl:text-[4rem]"
            variants={fadeUp}
          >
            Ideas are cheap.
            <br />
            <em className="font-serif text-accent italic">
              Products aren&apos;t.
            </em>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-lg text-[0.95rem] leading-relaxed text-text/65 md:text-[1.05rem]"
            variants={fadeUp}
          >
            I build products that solve real problems, from backend
            infrastructure to intelligent systems. Currently at Symbolic
            Systems, based in New York.
          </motion.p>

          <motion.div
            className="mt-6 flex flex-wrap items-center gap-2 text-[0.8rem] text-text/45"
            variants={fadeUp}
          >
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4ade80] opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#4ade80]" />
            </span>
            <span>Open to opportunities · NYC · NYU &apos;26</span>
          </motion.div>
        </motion.div>

        {/* Spline 3D — behind left content */}
        <SplineErrorBoundary>
          <Suspense
            fallback={
              <div className="absolute inset-0 z-0 bg-[#0A0A0A]" />
            }
          >
            <SplineHero />
          </Suspense>
        </SplineErrorBoundary>

        {/* RIGHT — Card sidebar */}
        <div className="relative z-10 flex shrink-0 flex-col gap-3 pb-4 lg:w-[42%] lg:justify-center lg:pb-0">
          <div className="flex gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-2 md:overflow-visible md:pb-0 lg:flex lg:flex-col">
            {CARDS.map((card, i) => (
              <Link key={card.title} href={card.link}>
                <motion.div
                  className="group flex min-w-[260px] cursor-pointer items-start gap-3.5 rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-surface p-4 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-0.5 hover:border-[rgba(206,140,248,0.2)] md:min-w-0"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + i * 0.08,
                    ease: "easeOut" as const,
                  }}
                >
                  {/* Thumbnail */}
                  <div
                    className={`h-12 w-12 shrink-0 rounded-[10px] bg-gradient-to-br ${card.gradient}`}
                  />

                  {/* Text */}
                  <div className="min-w-0 flex-1">
                    <span className="text-[0.6rem] font-medium tracking-[0.1em] text-accent uppercase">
                      {card.label}
                    </span>
                    <p className="text-[0.95rem] font-semibold text-text">
                      {card.title}
                    </p>
                    <p className="mt-0.5 text-[0.8rem] leading-snug text-text/40">
                      {card.subtitle}
                    </p>
                    <span className="mt-1 inline-block text-[0.7rem] text-accent/50">
                      → {card.link}
                    </span>
                  </div>

                  {/* Arrow */}
                  <ArrowUpRight
                    size={16}
                    className="mt-1 shrink-0 text-text opacity-30 transition-opacity duration-200 group-hover:opacity-80"
                  />
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
