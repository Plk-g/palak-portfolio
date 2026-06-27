import styles from "./Marquee.module.css";

const ROW_1 = [
  "AI Systems Engineer",
  "Python since day 1",
  "SQL",
  "ships to prod, not just Jupyter",
  "NYU '26",
  "VIT → NYC pipeline",
  "6 agents, 1 orchestrator",
];

const ROW_2 = [
  "coffee ftw",
  "24h Screen Time",
  "gym before git push",
  "skincare routine > deployment pipeline",
  "reads CS papers for fun (don't judge)",
  "watches sunsets and dogs",
  "bookmarked 47 recipes, made 3",
  "has opinions about TV finales",
  "wrote poetry once, chose Python instead",
];

const ACCENT_ROW_1 = new Set(["AI Systems Engineer", "NYU '26", "6 agents, 1 orchestrator"]);
const ACCENT_ROW_2 = new Set(["gym before git push", "reads CS papers for fun (don't judge)", "wrote poetry once, chose Python instead"]);

function Pill({ label, accent }: { label: string; accent: boolean }) {
  return (
    <span
      className={`shrink-0 rounded-full border px-4 py-2 text-xs whitespace-nowrap md:px-5 md:py-2.5 md:text-sm ${
        accent
          ? "border-transparent bg-[#CE8CF8] text-[#0A0A0A] font-medium"
          : "border-[rgba(255,255,255,0.08)] bg-[#1C1A1C] text-[#F5EFEC]"
      }`}
    >
      {label}
    </span>
  );
}

function MarqueeRow({
  items,
  accentSet,
  direction,
}: {
  items: string[];
  accentSet: Set<string>;
  direction: "left" | "right";
}) {
  const doubled = [...items, ...items];

  return (
    <div className={`group flex overflow-hidden ${styles.maskEdges}`}>
      <div
        className={`flex gap-3 md:gap-4 ${
          direction === "left" ? styles.scrollLeft : styles.scrollRight
        } group-hover:[animation-play-state:paused]`}
      >
        {doubled.map((label, i) => (
          <Pill key={`${label}-${i}`} label={label} accent={accentSet.has(label)} />
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="flex flex-col gap-3 py-6 md:gap-4 md:py-8">
      <MarqueeRow items={ROW_1} accentSet={ACCENT_ROW_1} direction="left" />
      <MarqueeRow items={ROW_2} accentSet={ACCENT_ROW_2} direction="right" />
    </section>
  );
}
