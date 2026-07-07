"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

type Category = "all" | "ai-ml" | "full-stack" | "data";

interface ProjectDetail {
  tagline: string;
  problem: string;
  role: string;
  techStack: string[];
  decisions: string[];
  outcome: string;
  screenshot?: string;
  github?: string;
  demo?: string;
}

interface Project {
  title: string;
  category: Category;
  categoryLabel: string;
  year: string;
  description: string;
  tags: string[];
  detail: ProjectDetail;
}

const PROJECTS: Project[] = [
  {
    title: "Disinfo Narrative Mutation Tracker",
    category: "ai-ml",
    categoryLabel: "AI/ML",
    year: "2026",
    description: "Kafka + Spark + Sentence-BERT for real-time disinformation detection across social media streams.",
    tags: ["Kafka", "Spark", "BERT", "Python"],
    detail: {
      tagline: "Tracking how disinformation narratives mutate across platforms in real time.",
      problem: "Disinformation doesn't stay static — narratives evolve, get reframed, and jump platforms. Manual tracking can't keep up with the volume or speed of mutation.",
      role: "Designed the streaming pipeline architecture, built the Sentence-BERT embedding layer for semantic similarity, and implemented the narrative clustering algorithm that detects mutations.",
      techStack: ["Apache Kafka", "Apache Spark", "Sentence-BERT", "Python", "PostgreSQL", "Docker"],
      decisions: [
        "Chose Kafka over RabbitMQ for durable, replayable event streams — critical for retroactive analysis of narrative timelines.",
        "Used cosine similarity on BERT embeddings rather than keyword matching to catch paraphrased narratives that preserve meaning but change surface form.",
        "Spark Structured Streaming over batch processing — latency under 30 seconds matters for early detection.",
      ],
      outcome: "Detects narrative mutations with 87% precision. Processing 50k+ posts per hour in real-time. Presented findings at NYU's applied ML showcase.",
      screenshot: "/images/work/disinfo-tracker.png",
      github: "https://github.com/Plk-g",
    },
  },
  {
    title: "Agentic Decision-Making System",
    category: "ai-ml",
    categoryLabel: "AI Systems",
    year: "2025",
    description: "6-agent orchestration with production safety validation, 60% reduction in after-hours support.",
    tags: ["Python", "LangChain", "FastAPI"],
    detail: {
      tagline: "TODO: fill in — one-sentence hook for the project.",
      problem: "TODO: fill in — what problem does this solve and why it matters.",
      role: "TODO: fill in — what you specifically built.",
      techStack: ["Python", "LangChain", "FastAPI", "Redis", "PostgreSQL"],
      decisions: [
        "TODO: fill in — key technical tradeoff #1.",
        "TODO: fill in — key technical tradeoff #2.",
      ],
      outcome: "6-agent orchestration with production safety validation. 60% reduction in after-hours support tickets.",
      screenshot: "/images/work/agentic-decision.png",
      github: "https://github.com/Plk-g",
    },
  },
  {
    title: "Enterprise Ticketing Platform",
    category: "full-stack",
    categoryLabel: "Full-stack",
    year: "2025",
    description: "Built for SAIL, serving 30k+ employees with real-time ticket tracking and escalation workflows.",
    tags: ["Flutter", "Dart", "Firebase"],
    detail: {
      tagline: "TODO: fill in — one-sentence hook for the project.",
      problem: "TODO: fill in — what problem does this solve and why it matters.",
      role: "TODO: fill in — what you specifically built.",
      techStack: ["Flutter", "Dart", "Firebase", "Cloud Functions", "Firestore"],
      decisions: [
        "TODO: fill in — key technical tradeoff #1.",
        "TODO: fill in — key technical tradeoff #2.",
      ],
      outcome: "Serving 30k+ employees at SAIL with real-time ticket tracking and escalation workflows.",
      screenshot: "/images/work/ticketing-platform.png",
      github: "https://github.com/Plk-g",
    },
  },
  {
    title: "PlateRisk NYC",
    category: "data",
    categoryLabel: "Data",
    year: "2025",
    description: "ML system predicting critical restaurant inspection violations across New York City.",
    tags: ["scikit-learn", "Python", "Pandas"],
    detail: {
      tagline: "TODO: fill in — one-sentence hook for the project.",
      problem: "TODO: fill in — what problem does this solve and why it matters.",
      role: "TODO: fill in — what you specifically built.",
      techStack: ["scikit-learn", "Python", "Pandas", "NumPy", "Matplotlib"],
      decisions: [
        "TODO: fill in — key technical tradeoff #1.",
        "TODO: fill in — key technical tradeoff #2.",
      ],
      outcome: "TODO: fill in — metrics, results, or what you learned.",
      screenshot: "/images/work/platerisk.png",
      github: "https://github.com/Plk-g",
    },
  },
];

const TABS: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "AI / ML", value: "ai-ml" },
  { label: "Full-stack", value: "full-stack" },
  { label: "Data", value: "data" },
];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const d = project.detail;

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <motion.div
        className="relative z-10 max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#181618] shadow-2xl"
        initial={{ scale: 0.95, y: 16 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 16 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {/* macOS-style title bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between rounded-t-2xl border-b border-[rgba(255,255,255,0.06)] bg-[#181618] px-5 py-3.5">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
            <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
            <span className="h-3 w-3 rounded-full bg-[#28C840]" />
          </div>
          <button onClick={onClose} className="text-text/40 transition-colors hover:text-text">
            <X size={18} />
          </button>
        </div>

        <div className="p-6">
          {/* Screenshot */}
          <div className="mb-6 h-[200px] w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#1C1A1C] to-[#2a2230]">
            {d.screenshot && (
              <Image
                src={d.screenshot}
                alt={`${project.title} screenshot`}
                width={600}
                height={200}
                className="h-full w-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
            )}
          </div>

          <span className="text-[0.6rem] font-medium tracking-[0.1em] text-accent uppercase">
            {project.categoryLabel} · {project.year}
          </span>
          <h2 className="mt-1 text-[1.5rem] font-bold text-text">{project.title}</h2>
          <p className="mt-1 text-[0.9rem] text-text/60 italic">{d.tagline}</p>

          <div className="mt-6 space-y-5">
            <div>
              <h3 className="text-[0.7rem] font-medium tracking-[0.1em] text-accent uppercase">Problem</h3>
              <p className="mt-1.5 text-[0.85rem] leading-relaxed text-text/60">{d.problem}</p>
            </div>

            <div>
              <h3 className="text-[0.7rem] font-medium tracking-[0.1em] text-accent uppercase">My Role</h3>
              <p className="mt-1.5 text-[0.85rem] leading-relaxed text-text/60">{d.role}</p>
            </div>

            <div>
              <h3 className="text-[0.7rem] font-medium tracking-[0.1em] text-accent uppercase">Tech Stack</h3>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {d.techStack.map((t) => (
                  <span key={t} className="rounded-[20px] bg-[rgba(206,140,248,0.1)] px-2.5 py-0.5 text-[0.65rem] text-accent">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[0.7rem] font-medium tracking-[0.1em] text-accent uppercase">Key Decisions</h3>
              <ul className="mt-2 space-y-1.5">
                {d.decisions.map((dec, i) => (
                  <li key={i} className="text-[0.8rem] leading-relaxed text-text/50">
                    <span className="mr-1.5 text-accent/60">→</span>{dec}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[0.7rem] font-medium tracking-[0.1em] text-accent uppercase">Outcome</h3>
              <p className="mt-1.5 text-[0.85rem] leading-relaxed text-text/60">{d.outcome}</p>
            </div>
          </div>

          {/* Links */}
          <div className="mt-6 flex gap-3">
            {d.github && (
              <a
                href={d.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-[rgba(255,255,255,0.1)] px-4 py-2 text-[0.8rem] text-text/70 transition-colors hover:border-accent/30 hover:text-accent"
              >
                GitHub →
              </a>
            )}
            {d.demo && (
              <a
                href={d.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-accent/15 px-4 py-2 text-[0.8rem] text-accent transition-colors hover:bg-accent/25"
              >
                Live Demo →
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectGrid() {
  const [filter, setFilter] = useState<Category>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleClose = useCallback(() => setSelectedProject(null), []);

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
              onClick={() => setSelectedProject(project)}
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

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={handleClose} />
        )}
      </AnimatePresence>
    </section>
  );
}
