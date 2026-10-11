"use client";

import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button/Button";
import BrowserIllustration from "../components/BrowserIllustration";
import styles from "./HomeHero.module.scss";

export default function HomeHero() {
  const reduceMotion = useReducedMotion();
  const enter = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.inner}>
        <motion.div
          className={styles.copy}
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: reduceMotion ? 0 : 0.12, delayChildren: 0.08 }}
        >
          <motion.p className={styles.eyebrow} variants={enter}>
            <span className={styles.codeIcon} aria-hidden="true">&lt;/&gt;</span>
            <span>software &amp; technology</span>
            <i aria-hidden="true" />
          </motion.p>
          <motion.h1
            id="hero-title"
            className={styles.title}
            variants={enter}
            transition={{ duration: reduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            We build smart digital <span>products.</span>
          </motion.h1>
          <motion.p className={styles.subtitle} variants={enter}>
            Web apps, mobile experiences, and cloud solutions—designed with care
            and engineered to work beautifully.
          </motion.p>
          <motion.div className={styles.actions} variants={enter}>
            <Button href="/services">Our Services <span aria-hidden="true">↗</span></Button>
            <Button href="/contact" variant="secondary">Contact Us</Button>
          </motion.div>
          <motion.p className={styles.note} variants={enter}>
            Ideas to impact, built with care.
          </motion.p>
        </motion.div>
        <motion.div
          className={styles.visual}
          initial={reduceMotion ? false : { opacity: 0, scale: 0.97, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <BrowserIllustration />
          </motion.div>
        </motion.div>
      </div>
      <div className={styles.heroFooter}>
        <span>INNOVATION, MADE PRACTICAL</span>
        <a href="#home-services">Discover what we do <span aria-hidden="true">↓</span></a>
      </div>
    </section>
  );
}
