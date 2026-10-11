import Link from "next/link";
import styles from "./status-pages.module.scss";

export default function NotFound() {
  return (
    <main className={styles.statusPage}>
      <p>404 · Page not found</p>
      <h1>That page isn’t here.</h1>
      <span>The link may be out of date, or the page may have moved.</span>
      <Link href="/">Back to home <span aria-hidden="true">↗</span></Link>
    </main>
  );
}
