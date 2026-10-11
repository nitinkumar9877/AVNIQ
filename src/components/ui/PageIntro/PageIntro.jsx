import Reveal from "@/components/animations/Reveal";
import styles from "./PageIntro.module.scss";

export default function PageIntro({ eyebrow, title, description }) {
  return (
    <section className={styles.intro}>
      <Reveal>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1>{title}</h1>
        <p className={styles.description}>{description}</p>
      </Reveal>
    </section>
  );
}
