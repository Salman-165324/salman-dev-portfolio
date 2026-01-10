import styles from "./Hero.module.css";

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
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 text-center text-white font-['Lato',sans-serif] font-light text-5xl md:text-3xl sm:text-2xl tracking-[10px] md:tracking-[5px] sm:tracking-[3px] z-10 pl-2.5 -mt-[60px] md:-mt-10 sm:-mt-[30px]">
        <span className="bg-gradient-to-b from-white to-[#38495a] bg-clip-text text-transparent">
          Solving business problems
        </span>
        <br />
        <span className="bg-gradient-to-b from-white to-[#38495a] bg-clip-text text-transparent">
          code, design, and product thinking.
        </span>
      </div>
    </section>
  );
}
