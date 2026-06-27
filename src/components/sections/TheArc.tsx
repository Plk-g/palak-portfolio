"use client";

import { motion } from "framer-motion";

const NODES = [
  { label: "High school", sub: "School captain" },
  { label: "VIT '24", sub: "B.Tech CS" },
  { label: "NYC", sub: "The move" },
  { label: "NYU '26", sub: "MS CS" },
  { label: "Now", sub: "Building", current: true },
];

export default function TheArc() {
  return (
    <section className="mb-20">
      <p className="mb-8 text-[0.7rem] font-medium tracking-[0.15em] text-accent uppercase">
        The arc
      </p>

      <div className="flex items-center gap-0 overflow-x-auto pb-4">
        {NODES.map((node, i) => (
          <motion.div
            key={node.label}
            className="flex shrink-0 items-center"
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="flex flex-col items-center">
              <div
                className={`h-2.5 w-2.5 rounded-full ${
                  node.current
                    ? "bg-text shadow-[0_0_12px_rgba(206,140,248,0.5)]"
                    : "bg-accent"
                }`}
              />
              <p className="mt-2 text-[0.85rem] font-medium text-text">
                {node.label}
              </p>
              <p className="text-[0.7rem] text-text/40">
                {node.sub}
              </p>
            </div>

            {i < NODES.length - 1 && (
              <div className="mx-4 h-px w-12 bg-gradient-to-r from-accent to-transparent sm:mx-6 sm:w-20" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
