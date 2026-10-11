import Link from "next/link";
import styles from "./Footer.module.scss";

const links = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <Link className={styles.brand} href="/" aria-label="AVNIQ Technology home">
          <span className={styles.brandIcon} aria-hidden="true">
            <svg viewBox="0 0 36 36" fill="none">
              <path d="M18 3.5 32.5 11.8v12.4L18 32.5 3.5 24.2V11.8L18 3.5Z" />
              <path d="m11 23 7-12 7 12M13.8 18.5h8.4" />
            </svg>
          </span>
          <span>AVNIQ Technology</span>
        </Link>
        <p>Thoughtful design. Dependable engineering.</p>
      </div>
      <div className={styles.footerBottom}>
        <nav className={styles.footerNav} aria-label="Footer navigation">
          {links.map(({ label, href }) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>
        <span>AVNIQ Technology</span>
      </div>
    </footer>
  );
}
