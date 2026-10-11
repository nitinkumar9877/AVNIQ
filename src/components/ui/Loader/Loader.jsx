import styles from "./Loader.module.scss";

export default function Loader({ label = "Loading page" }) {
  return (
    <div className={styles.loader} role="status">
      <span className={styles.spinner} aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}
