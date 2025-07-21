import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header>
        <div className="header">
          <nav>
            <ul>
              <li>
                <a href="">section 1</a>
              </li>
              <li>
                <a href="">section 2</a>
              </li>
            </ul>
          </nav>
          <Image className={styles.logo} src="/Logo.png" alt="Next.js logo" width={418} height={388} priority />
        </div>
      </header>
      <main className={styles.main}>
        <section>
          <h1>Effortless </h1>
          <h2>Effortless </h2>
          <h3>Effortless </h3>
          <h4>Effortless </h4>
          <h5>Effortless </h5>
        </section>
      </main>
      <footer className={styles.footer}>footer</footer>
    </div>
  );
}
