import PageIntro from "@/components/ui/PageIntro/PageIntro";
import Reveal from "@/components/animations/Reveal";
import ContactForm from "@/features/contact/ContactForm";
import styles from "@/features/contact/ContactContent.module.scss";

export const metadata = {
  title: "Contact",
  description:
    "Share what you are thinking about building and learn how AVNIQ Technology can help shape a practical next step.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Start a conversation"
        title="What are you looking to build?"
        description="Tell us a little about your idea, product, or challenge. There’s no need to have every detail figured out."
      />
      <section className={`page-width ${styles.section}`}>
        <Reveal className={styles.aside}>
          <h2>A useful first step.</h2>
          <p>
            Share a few details about what you have in mind. The form below
            checks your entries locally, but it is not connected to a delivery
            service yet, so your message will not be transmitted.
          </p>
        </Reveal>
        <Reveal className={styles.formWrap}>
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
}
