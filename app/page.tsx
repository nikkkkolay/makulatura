import { TopBar, Footer } from '@/components';

import styles from './page.module.css';
import { Feedback } from '@/components/Feedback/Feedbak';

export default function Home() {
  return (
    <>
      <TopBar />
      <main className={styles.main}>
        <section className={`${styles.main__section_intro}`}>
          <h1>
            Мы делаем <br /> наклейки.
          </h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestiae a officiis!
            Possimus fugit cum ex eos. Quasi, vero expedita!
          </h2>
        </section>

        <section>
          <Feedback className={styles.feedback} />
        </section>

        <Footer />
      </main>
    </>
  );
}
