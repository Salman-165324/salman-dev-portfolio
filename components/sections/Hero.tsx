import styles from "./Hero.module.css";
import { AuroraText } from "@/components/ui/aurora-text"
export default function Hero() {
  return (
    <section
      className={`relative w-full h-screen overflow-hidden ${styles.heroBackground}`}
    >
      {/* Star layers for parallax effect - CSS modules for complex box-shadows */}
      <div id="stars" className={styles.stars}></div>
      <div id="stars2" className={styles.stars2}></div>
      <div id="stars3" className={styles.stars3}></div>

      {/* Title section - Tailwind for simpler styling */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 text-center text-white font-bold text-3xl md:text-6xl sm:text-4xl tracking-[3px] z-10 pl-2.5 -mt-[60px] md:-mt-10 sm:-mt-[30px] font-title">
        <p className="bg-gradient-to-b from-white to-[#6f7d8b] bg-clip-text text-transparent">
          <span className="uppercase">Product-minded frontend engineer</span>{" "}
          with
        </p>
        <br />
        <p className="bg-gradient-to-b from-white to-[#6f7d8b] bg-clip-text text-transparent">
          <span className="uppercase">UI-UX & backend capability</span>.
        </p>
        <AuroraText>Aurora Text</AuroraText>
      </div>
    </section>
  );
}
