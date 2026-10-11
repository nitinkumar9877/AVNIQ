import Link from "next/link";
import styles from "./Button.module.scss";

export default function Button({
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const classNames = `${styles.button} ${styles[variant]} ${className}`.trim();

  if (href) {
    return (
      <Link className={classNames} href={href} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classNames} type="button" {...props}>
      {children}
    </button>
  );
}
