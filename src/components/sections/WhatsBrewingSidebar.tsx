"use client";

import { motion } from "framer-motion";

const PROJECTS = [
  {
    label: "IN PROGRESS",
    title: "AI Design Agent v2",
    sub: "Teaching agents to have opinions about typography...",
  },
  {
    label: "IN PROGRESS",
    title: "PlateRisk NYC",
    sub: "What if health inspections had a prediction layer?",
  },
  {
    label: "EXPLORING",
    title: "Session Memory Layer",
    sub: "Context that follows you without a login...",
  },
];

export default function WhatsBrewingSidebar() {
  return (
    <div>
      <p className="mb-4 text-[0.7rem] font-medium tracking-[0.15em] text-accent uppercase">
        What&apos;s brewing
      </p>

      <div className="flex flex-col gap-2">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.title}
            className="overflow-hidden rounded-xl border border-[rgba(255,255,255,0.06)] bg-surface"
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            {/* Small image placeholder */}
            <div className="h-[60px] w-full bg-gradient-to-br from-surface to-[#2a2230]" />

            <div className="p-3.5">
              <span className="text-[0.55rem] font-medium tracking-[0.1em] text-accent uppercase">
                {project.label}
              </span>
              <p className="mt-1 text-[0.85rem] font-semibold text-text">
                {project.title}
              </p>
              <p className="mt-0.5 text-[0.7rem] text-text/40">
                {project.sub}
              </p>
            </div>
          </motion.div>
        ))}

        {/* Loading card */}
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-[rgba(206,140,248,0.2)] px-4 py-8">
          <span className="animate-pulse-dots text-xl tracking-[0.3em] text-accent/40">
            · · ·
          </span>
          <span className="mt-2 text-[0.7rem] text-text/25">
            something&apos;s always next
          </span>
        </div>
      </div>
    </div>
  );
}
