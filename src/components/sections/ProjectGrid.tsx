"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Category = "all" | "ai-ml" | "full-stack" | "data";

interface Project {
  title: string;
  category: Category;
  categoryLabel: string;
  year: string;
  description: string;
  tags: string[];
}

const PROJECTS: Project[] = [
  {
    title: "Disinfo Narrative Mutation Tracker",
    category: "ai-ml",
    categoryLabel: "AI/ML",
    year: "2026",
    description: "Kafka + Spark + Sentence-BERT for real-time disinformation detection across social media streams.",
    tags: ["Kafka", "Spark", "BERT", "Python"],
  },
  {
    title: "Agentic Decision-Making System",
    category: "ai-ml",
    categoryLabel: "AI Systems",
    year: "2025",
    description: "6-agent orchestration with production safety validation, 60% reduction in after-hours support.",
    tags: ["Python", "LangChain", "FastAPI"],
  },
  {
    title: "Enterprise Ticketing Platform",
    category: "full-stack",
    categoryLabel: "Full-stack",
    year: "2025",
    description: "Built for SAIL, serving 30k+ employees with real-time ticket tracking and escalation workflows.",
    tags: ["Flutter", "Dart", "Firebase"],
  },
  {
    title: "PlateRisk NYC",
    category: "data",
    categoryLabel: "Data",
    year: "2025",
    description: "ML system predicting critical restaurant inspection violations across New York City.",
    tags: ["scikit-learn", "Python", "Pandas"],
  },
];

const TABS: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "AI / ML", value: "ai-ml" },
  { label: "Full-stack", value: "full-stack" },
  { label: "Data", value: "data" },
];

export default function ProjectGrid() {
  const [filter, setFilter] = useState<Category>("all");

  const filtered = filter === "all"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter);

  return (
    <section>
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-display text-[2rem] font-normal tracking-tight sm:text-[2.8rem] lg:text-[3.5rem]">
          Selected{" "}
          <em className="font-serif text-accent italic">work.</em>
        </h1>
        <p className="mt-3 text-[1rem] text-text/60">
          Things I&apos;ve built that I&apos;m not embarrassed to show you.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="mb-8 flex gap-6 border-b border-[rgba(255,255,255,0.06)] pb-0">
        {TABS.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setFilter(tab.value)}
            className={`pb-3 text-[0.85rem] transition-colors duration-200 ${
              filter === tab.value
                ? "border-b-2 border-accent text-accent"
                : "text-text/50 hover:text-text/80"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer overflow-hidden rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(206,140,248,0.2)]"
            >
              {/* Image placeholder */}
              <div className="h-[200px] w-full bg-gradient-to-br from-surface to-[#2a2230]" />

              <div className="p-5">
                <div className="flex items-center gap-2">
                  <span className="text-[0.6rem] font-medium tracking-[0.1em] text-accent uppercase">
                    {project.categoryLabel}
                  </span>
                  <span className="text-[0.6rem] text-text/30">·</span>
                  <span className="text-[0.6rem] text-text/30">
                    {project.year}
                  </span>
                </div>

                <h3 className="mt-1.5 text-[1.05rem] font-semibold text-text">
                  {project.title}
                </h3>

                <p className="mt-2 text-[0.8rem] leading-relaxed text-text/50">
                  {project.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-[20px] bg-[rgba(206,140,248,0.1)] px-2.5 py-0.5 text-[0.65rem] text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
