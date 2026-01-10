import { AuroraText } from "@/components/ui/aurora-text";
import { Badge } from "../ui/badge";


export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Title section - Tailwind for simpler styling */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 lg:text-center text-white font-bold text-2xl  sm:text-3xl  md:text-4xl xl:text-5xl 2xl:text-6xl tracking-[3px] z-10 pl-2.5 -mt-[60px] md:-mt-10 sm:-mt-[30px] font-title">
        
        <AuroraText className="hidden lg:inline-block" colors = {["#f0e890", "#bcf2aa", "#aaf2b1", "#2eadc9"] } speed={1}>Product-minded Frontend Engineer with</AuroraText>
        <AuroraText className="mt-4 hidden lg:inline-block" colors = {["#f0e890", "#bcf2aa", "#aaf2b1", "#2eadc9"] } speed={1}>UI-UX & Backend capability</AuroraText>

        {/* <AuroraText
          className="lg:hidden leading-relaxed md:leading-loose "
          colors={["#f0e890", "#bcf2aa", "#aaf2b1", "#2eadc9"]}
          speed={1}
        >
          Product-minded Frontend Engineer with UI-UX & Backend capability
        </AuroraText> */}
        <br />
        <span className="text-zinc-300 text-sm sm:text-base lg:text-lg font-normal-text lg:max-w-3xl">2+ years in Frontend Development | Nextjs, Reactjs, JavaScript, Nodejs | Ex-Assistant Manager Business Development</span>


        <br/>
        {/* <Badge  className="lg:text-sm text-xs text-white/80 bg-slate-900">2+ Years in Software Development</Badge>
        <Badge className="text-sm bg-slate-900">Ex-Assistant Manager Business Development</Badge>
        <br />
        <Badge  className="lg:text-sm bg-slate-900">Nextjs</Badge>
        <Badge  className="text-sm bg-slate-900">React</Badge>
        <Badge  className="text-sm bg-slate-900">JavaScript</Badge> */}
      </div>
    </section>
  );
}
