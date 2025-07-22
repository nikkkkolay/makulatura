import Image from "next/image";
import { TopBar, Button } from "@/components";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <TopBar />
      <main className={styles.main}>
        <section className={`${styles.main__section} ${styles.main__section_intro}`}>
          <h1>Мы делаем наклейки.</h1>
          <h2>Мы делаем наклейки.</h2>
          <h3>Мы делаем наклейки.</h3>
          <h4>Мы делаем наклейки.</h4>
          <h5>Мы делаем наклейки.</h5>
          <Button size="sm">Наклейки</Button>
          <Button>Наклейки</Button>
          <Button size="l">Наклейки</Button>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam unde itaque harum nemo officia dolorem nihil, eum corporis, placeat cum
            perspiciatis, blanditiis fugiat. Aut facilis aliquid inventore libero fugiat laborum ducimus dicta pariatur, sed ut debitis sapiente
            dolorum odio harum, quidem exercitationem rem ex modi culpa? Facere accusantium iste cum adipisci, quo quis dolore animi sit ipsa aut
            repudiandae recusandae aperiam corporis quam eligendi incidunt sequi doloribus delectus vel voluptate harum cumque vero? Excepturi nihil
            voluptatum adipisci odio expedita id natus dolor. Aliquam recusandae earum repudiandae. Voluptatibus vel, iusto molestiae quod eius illo
            ea quaerat maxime quo vero qui excepturi minus veniam minima perferendis aspernatur aut! Adipisci a enim quibusdam exercitationem qui
            error neque velit temporibus, deleniti maxime. Accusamus illum sit cumque asperiores mollitia laboriosam. Inventore a dignissimos quam
            suscipit eveniet quis ut ducimus enim libero, facere veritatis alias tenetur sed illo totam labore recusandae sapiente necessitatibus iste
            eligendi quaerat error repudiandae ad. Illum unde iure aspernatur repellat laboriosam, sed, repellendus fuga recusandae voluptates nemo ut
            doloribus maiores ab perspiciatis minima error. Sed quos, dicta consequatur molestias harum voluptatem magni, amet soluta ab delectus
            minima aliquam aperiam fugit nesciunt reprehenderit voluptatum provident repellendus. Hic unde dolores iusto omnis, veniam officiis sit
            nemo doloribus dolor tempore saepe velit rem blanditiis facilis molestiae autem perferendis natus perspiciatis. Eligendi ipsum unde
            commodi blanditiis quasi quaerat pariatur minus soluta, facere autem dolorem atque fugit cumque, inventore eveniet dolores sed eos
            similique minima asperiores iure. Harum beatae corporis iusto provident aut voluptatum exercitationem praesentium quidem doloremque iste
            ipsam unde neque, similique corrupti, explicabo modi fuga sint cupiditate recusandae quod optio sit accusantium voluptatem. Debitis
            aspernatur officia voluptatem molestiae accusantium! Nemo eius autem a maxime minus commodi fugiat voluptatem, facere doloremque
            cupiditate odio praesentium quaerat in deleniti dicta ullam qui, exercitationem maiores veniam pariatur accusantium nihil.
          </p>
        </section>
      </main>
      <footer className={styles.footer}>
        <Image className={styles.logo} src="/Logo.png" alt="Логотип Макулатура" width={60} height={55} /> МАКУЛАТУКРА
      </footer>
    </>
  );
}
