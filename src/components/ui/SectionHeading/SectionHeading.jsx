import styles from "./SectionHeading.module.scss";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  id,
}) {
  return (
    <div className={`${styles.heading} ${styles[align]}`}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <h2 id={id}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
