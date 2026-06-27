import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <div className="flex h-dvh flex-col">
        <Hero />
        <Marquee />
      </div>
    </main>
  );
}
