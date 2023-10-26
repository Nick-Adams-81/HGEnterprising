import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1>HG Enterprising</h1>
      </div>
      <h2>
        One stop shop for all your Consulting, Event planning, and Concert
        needs.
      </h2>
      <div className={styles.grid}>
        <div
          href=""
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Phone <span></span>
          </h2>
          <p>(888)405-4410</p>
        </div>

        <div
          href=""
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Address <span></span>
          </h2>
          <p>4650 Natomas Blvd, suite 110</p>
          <p>Sacramento, CA, </p>
        </div>

        <div
          href=""
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Email <span></span>
          </h2>
          <p>hgenterprising@gmail.com</p>
        </div>

        <div
          href=""
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            CEO <span></span>
          </h2>
          <p>Greg Gabriel</p>
        </div>
      </div>
    </main>
  );
}
