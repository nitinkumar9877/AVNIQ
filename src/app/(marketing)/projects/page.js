import PageIntro from "@/components/ui/PageIntro/PageIntro";
import Reveal from "@/components/animations/Reveal";
import { projects } from "@/features/projects/projects";
import styles from "@/features/projects/ProjectsContent.module.scss";

export const metadata = {
  title: "Projects",
  description:
    "Explore original product and interface concepts from AVNIQ Technology, illustrating our approach to thoughtful digital experiences.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Selected concepts"
        title="A look at how ideas can take shape."
        description="A few original interface concepts—not client work—showing the kind of clear, considered digital experiences we enjoy creating."
      />
      <section className={`page-width ${styles.section}`} aria-label="Product design concepts">
        <p className={styles.notice}>
          <strong>Concept work.</strong> These visuals are illustrative examples
          created for this website and do not represent client projects or results.
        </p>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.06}>
              <article className={styles.card}>
                <div className={`${styles.visual} ${styles[project.style]}`} aria-hidden="true">
                  <div className={styles.mockWindow}>
                    <div className={styles.mockTop}><i /><i /><i /></div>
                    <div className={styles.mockBody}>
                      <i className={styles.mockSide} />
                      <div className={styles.mockContent}>
                        <i /><i /><i />
                        <span><i /><i /></span>
                      </div>
                    </div>
                  </div>
                  <span className={styles.conceptTag}>CONCEPT</span>
                </div>
                <div className={styles.details}>
                  <span>{project.category} · {project.tag}</span>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
