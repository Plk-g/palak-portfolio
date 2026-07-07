import Navbar from "@/components/Navbar";
import CareerTimeline from "@/components/sections/CareerTimeline";
import ProjectGrid from "@/components/sections/ProjectGrid";

export default function WorkPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <div className="mx-auto max-w-[1400px] px-6 pt-28 pb-20 md:px-10 xl:px-14">
        <div className="mb-6 flex justify-end">
          <a
            href="https://github.com/Plk-g"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.85rem] text-accent transition-colors hover:text-accent/80"
          >
            View all on GitHub →
          </a>
        </div>
        <CareerTimeline />
        <ProjectGrid />
      </div>
    </main>
  );
}
