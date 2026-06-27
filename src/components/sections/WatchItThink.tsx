"use client";

import { motion } from "framer-motion";

const STEPS = [
  { num: 1, label: "Planner" },
  { num: 2, label: "Retriever" },
  { num: 3, label: "Synthesizer" },
];

export default function WatchItThink() {
  return (
    <motion.div
      className="rounded-xl border border-[rgba(255,255,255,0.06)] bg-surface p-5"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-[0.6rem] font-medium tracking-[0.1em] text-accent uppercase">
        Interactive Demo
      </span>

      <h2 className="mt-2 font-display text-[1.5rem] font-normal tracking-tight sm:text-[1.8rem]">
        Watch It{" "}
        <em className="font-serif text-accent italic">Think</em>
      </h2>

      <p className="mt-3 max-w-md text-[0.85rem] leading-relaxed text-text/55">
        Ask anything. Watch a real AI agent pipeline reason through it — plan,
        retrieve, synthesize — before the answer streams in.
      </p>

      {/* Pipeline visualization */}
      <div className="mt-6 flex items-center justify-center gap-2 sm:gap-4">
        {STEPS.map((step, i) => (
          <div key={step.label} className="flex items-center gap-2 sm:gap-4">
            <div className="flex flex-col items-center gap-1.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-accent text-[0.85rem] font-medium text-accent">
                {step.num}
              </div>
              <span className="text-[0.7rem] text-text/50">{step.label}</span>
            </div>
            {i < STEPS.length - 1 && (
              <span className="text-text/30">→</span>
            )}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="mt-6">
        <input
          type="text"
          placeholder="Ask me anything about Palak's work, projects, or skills..."
          disabled
          className="w-full rounded-lg border border-[rgba(255,255,255,0.06)] bg-[#111] px-4 py-3 text-[0.85rem] text-text/40 placeholder:text-text/25"
        />
      </div>
    </motion.div>
  );
}
