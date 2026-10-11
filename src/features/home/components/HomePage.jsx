import HomeHero from "../sections/HomeHero";
import ServicesPreview from "../sections/ServicesPreview";
import FeaturedProjects from "../sections/FeaturedProjects";
import Reveal from "@/components/animations/Reveal";
import Button from "@/components/ui/Button/Button";
import styles from "./HomePage.module.scss";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ServicesPreview />
      <FeaturedProjects />
      <section className={`section-space ${styles.closing}`}>
        <Reveal className={styles.closingInner}>
          <p className={styles.eyebrow}>Have an idea in mind?</p>
          <h2>Let’s make something useful.</h2>
          <p>Tell us what you’re looking to build. We’ll help you find a thoughtful next step.</p>
          <Button href="/contact">Start a conversation <span aria-hidden="true">↗</span></Button>
        </Reveal>
      </section>
    </>
  );
}
