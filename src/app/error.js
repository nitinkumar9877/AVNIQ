"use client";

import { useEffect } from "react";
import styles from "./status-pages.module.scss";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className={styles.statusPage} role="alert">
      <p>Something went wrong</p>
      <h1>We couldn’t load this page.</h1>
      <span>Please try again. If the problem continues, return home and start again.</span>
      <button type="button" onClick={() => reset()}>Try again</button>
    </main>
  );
}
