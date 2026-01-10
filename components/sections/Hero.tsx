import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section>
      {/* Star layers for parallax effect - CSS modules for complex box-shadows */}
      <div
        className={`relative w-full h-screen overflow-hidden ${styles.heroBackground}`}
      >
        <div id="stars" className={styles.stars}></div>
        <div id="stars2" className={styles.stars2}></div>
        <div id="stars3" className={styles.stars3}></div>
      </div>
      {/* Title section - Tailwind for simpler styling */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 text-center text-white font-['Lato',sans-serif] font-bold text-3xl md:text-6xl sm:text-4xl tracking-[10px] md:tracking-[3px] sm:tracking-[3px] z-10 pl-2.5 -mt-[60px] md:-mt-10 sm:-mt-[30px]">
        <p className="bg-linear-to-b from-white to-[#6f7d8b] bg-clip-text text-transparent">
           <span className="uppercase">Product-minded frontend engineer</span> with
        </p>
        <br />
        <p className="bg-linear-to-b from-white to-[#6f7d8b] bg-clip-text text-transparent">
          <span className="uppercase">UI-UX & backend capability</span>.
        </p>
      </div>
    </section>
  );
}
