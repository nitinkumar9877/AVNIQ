import Link from "next/link";
import Reveal from "@/components/animations/Reveal";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import { projects } from "@/features/projects/projects";
import styles from "./FeaturedProjects.module.scss";

export default function FeaturedProjects() {
  return (
    <section className={`section-space ${styles.section}`} aria-labelledby="featured-projects-title">
      <div className="page-width">
        <Reveal>
          <div className={styles.headingWrap}>
            <SectionHeading
              id="featured-projects-title"
              eyebrow="A glimpse of what’s possible"
              title="Thoughtful products start with thoughtful choices."
              description="These original interface concepts illustrate the kind of digital experiences our design and engineering practice can shape."
            />
            <Link className={styles.allProjects} href="/projects">
              View project concepts <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </Reveal>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.07}>
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
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
