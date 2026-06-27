import Navbar from "@/components/Navbar";
import CareerTimeline from "@/components/sections/CareerTimeline";
import ProjectGrid from "@/components/sections/ProjectGrid";

export default function WorkPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <div className="mx-auto max-w-[1400px] px-6 pt-28 pb-20 md:px-10 xl:px-14">
        <CareerTimeline />
        <ProjectGrid />
      </div>
    </main>
  );
}
