"use client";

import { useState } from "react";
import styles from "./ContactForm.module.scss";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    setStatus(
      "Your details are valid, but this site is not configured to deliver messages yet. Nothing has been sent."
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.fieldGrid}>
        <label className={styles.field}>
          <span>Name</span>
          <input name="name" autoComplete="name" required maxLength={100} />
        </label>
        <label className={styles.field}>
          <span>Email</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
          />
        </label>
      </div>
      <label className={styles.field}>
        <span>What would you like to build?</span>
        <textarea
          name="message"
          rows={6}
          required
          minLength={10}
          maxLength={5000}
        />
      </label>
      <p className={styles.note}>
        This form currently validates in your browser only. No message or
        personal information is transmitted.
      </p>
      <button className={styles.submit} type="submit">
        Check your message <span aria-hidden="true">↗</span>
      </button>
      {status && (
        <p className={styles.status} role="status" aria-live="polite">
          {status}
        </p>
      )}
    </form>
  );
}
