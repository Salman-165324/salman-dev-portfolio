import styles from "./Background.module.css";

/**
 * Background component - Provides site-wide starry night background effect
 * This component renders the animated star layers and applies the dark gradient background
 */
export default function Background() {
  return (
    <>
      {/* Star layers for parallax effect - CSS modules for complex box-shadows */}
      <div id="stars" className={styles.stars}></div>
      <div id="stars2" className={styles.stars2}></div>
      <div id="stars3" className={styles.stars3}></div>
    </>
  );
}
