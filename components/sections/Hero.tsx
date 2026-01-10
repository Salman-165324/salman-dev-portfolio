import { AuroraText } from "@/components/ui/aurora-text";

/**
 * Hero section component - Main landing section with title and aurora text
 * Background and stars are now handled globally by the Background component
 */
export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Title section - Tailwind for simpler styling */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 text-center text-white font-bold text-xl  sm:text-3xl  md:text-4xl xl:text-5xl 2xl:text-6xl tracking-[3px] z-10 pl-2.5 -mt-[60px] md:-mt-10 sm:-mt-[30px] font-title">
        
        <AuroraText colors = {["#f0e890", "#bcf2aa", "#aaf2b1", "#2eadc9"] } speed={1}>Product-minded Frontend Engineer with</AuroraText>
        <AuroraText className="mt-4" colors = {["#f0e890", "#bcf2aa", "#aaf2b1", "#2eadc9"] } speed={1}>UI-UX & Backend capability</AuroraText>
      </div>
    </section>
  );
}
