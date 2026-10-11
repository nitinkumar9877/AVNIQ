import PageIntro from "@/components/ui/PageIntro/PageIntro";
import Reveal from "@/components/animations/Reveal";
import Button from "@/components/ui/Button/Button";
import { services } from "@/features/services/services";
import styles from "@/features/services/ServicesContent.module.scss";

export const metadata = {
  title: "Services",
  description:
    "Explore AVNIQ Technology services: UI/UX design, frontend and backend development, MEAN and MERN stack, and custom web applications.",
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="What we do"
        title="The right skills for your next step."
        description="Bring us a challenge, an early idea, or an established product. We’ll shape an approach that fits what you’re trying to make."
      />
      <section className={`page-width ${styles.section}`} aria-label="Development services">
        <div className={styles.grid}>
          {services.map((service, index) => (
            <Reveal key={service.number} delay={index % 3 * 0.05}>
              <article className={styles.card}>
                <span className={styles.number}>{service.number}</span>
                <span className={styles.mark} aria-hidden="true">{service.mark}</span>
                <h2>{service.name}</h2>
                <p>{service.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className={styles.process}>
            <h2>One team, from idea to interface.</h2>
            <p>
              We combine design and engineering in a practical process: clarify
              the need, shape the experience, build the product, and refine the
              details together.
            </p>
            <Button href="/contact">Discuss your project <span aria-hidden="true">↗</span></Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
