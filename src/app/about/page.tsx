import Navbar from "@/components/Navbar";
import AboutHero from "@/components/sections/AboutHero";
import MasonryGallery from "@/components/sections/MasonryGallery";
import RightNow from "@/components/sections/RightNow";
import BeyondTheCode from "@/components/sections/BeyondTheCode";
import TheArc from "@/components/sections/TheArc";
import InstagramFooter from "@/components/sections/InstagramFooter";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <div className="mx-auto max-w-[1400px] px-6 pt-28 pb-20 md:px-10 xl:px-14">
        <AboutHero />
        <MasonryGallery />
        <RightNow />
        <BeyondTheCode />
        <TheArc />
        <InstagramFooter />
      </div>
    </main>
  );
}
