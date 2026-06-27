import Navbar from "@/components/Navbar";
import WatchItThink from "@/components/sections/WatchItThink";
import RoastOrToast from "@/components/sections/RoastOrToast";
import WhatsBrewingSidebar from "@/components/sections/WhatsBrewingSidebar";

export default function LabPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <div className="mx-auto max-w-[1400px] px-6 pt-28 pb-20 md:px-10 xl:px-14">
        <div className="mb-12">
          <h1 className="font-display text-[2rem] font-normal tracking-tight sm:text-[2.8rem] lg:text-[3.5rem]">
            The{" "}
            <em className="font-serif text-accent italic">lab.</em>
          </h1>
          <p className="mt-4 max-w-xl text-[1rem] leading-relaxed text-text/60">
            Where I break things on purpose. Interactive demos, experiments, and
            proof that I build for fun, not just deadlines.
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="flex flex-[1.5] flex-col gap-8">
            <WatchItThink />
            <RoastOrToast />
          </div>
          <div className="flex-1">
            <WhatsBrewingSidebar />
          </div>
        </div>
      </div>
    </main>
  );
}
