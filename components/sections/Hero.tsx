import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.container}>
      {/* Star layers for parallax effect */}
      <div id="stars" className={styles.stars}></div>
      <div id="stars2" className={styles.stars2}></div>
      <div id="stars3" className={styles.stars3}></div>

      {/* Title section */}
      <div id="title" className={styles.title}>
        <span>PURE CSS</span>
        <br />
        <span>PARALLAX PIXEL STARS</span>
      </div>
    </div>
  );
}
