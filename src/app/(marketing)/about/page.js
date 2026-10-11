import PageIntro from "@/components/ui/PageIntro/PageIntro";
import Reveal from "@/components/animations/Reveal";
import styles from "@/features/about/AboutContent.module.scss";

export const metadata = {
  title: "About",
  description:
    "Get to know AVNIQ Technology and our thoughtful, practical approach to designing and building digital products.",
};

const principles = [
  {
    number: "01",
    title: "Start with people",
    description:
      "Useful software begins with understanding the people who will rely on it and the work they need to do.",
  },
  {
    number: "02",
    title: "Keep it considered",
    description:
      "We value clear decisions, purposeful interfaces, and the small details that make products easier to use.",
  },
  {
    number: "03",
    title: "Build for what’s next",
    description:
      "A solid technical foundation gives an idea room to grow without losing sight of quality and maintainability.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About AVNIQ"
        title="Good technology should feel clear."
        description="We bring thoughtful product design and dependable software engineering together to make digital experiences that work for people."
      />
      <section className={`page-width ${styles.section}`} aria-label="Our approach">
        <Reveal>
          <div className={styles.grid}>
            <p className={styles.lead}>
              AVNIQ Technology is a software development company focused on
              useful, carefully made digital products.
            </p>
            <div className={styles.copy}>
              <p>
                From the first conversation through design and development, we
                work to make complex ideas easier to understand and build.
              </p>
              <p>
                Our work spans UI/UX design, frontend and backend development,
                full-stack JavaScript, and custom web applications. The right
                approach depends on the product—not a one-size-fits-all stack.
              </p>
            </div>
          </div>
        </Reveal>
        <div className={styles.principles}>
          {principles.map((principle, index) => (
            <Reveal key={principle.number} delay={index * 0.06}>
              <article className={styles.principle}>
                <span>{principle.number}</span>
                <h2>{principle.title}</h2>
                <p>{principle.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
