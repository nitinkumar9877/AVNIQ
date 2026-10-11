"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import styles from "./Navbar.module.scss";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

function subscribeToTheme(callback) {
  window.addEventListener("avniq-theme-change", callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("avniq-theme-change", callback);
    window.removeEventListener("storage", callback);
  };
}

function getThemeSnapshot() {
  return window.localStorage.getItem("avniq-theme") === "dark" ? "dark" : "light";
}

function getServerThemeSnapshot() {
  return "light";
}

function Brand() {
  return (
    <Link className={styles.brand} href="/" aria-label="AVNIQ Technology home">
      <span className={styles.brandIcon} aria-hidden="true">
        <svg viewBox="0 0 36 36" fill="none">
          <path d="M18 3.5 32.5 11.8v12.4L18 32.5 3.5 24.2V11.8L18 3.5Z" />
          <path d="m11 23 7-12 7 12M13.8 18.5h8.4" />
        </svg>
      </span>
      <span className={styles.brandName}>
        AVNIQ<span>Technology</span>
      </span>
    </Link>
  );
}

function ThemeIcon({ dark }) {
  return dark ? (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.2 15.2A8.6 8.6 0 0 1 8.8 3.8 8.7 8.7 0 1 0 20.2 15.2Z" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot
  );
  const [openForPath, setOpenForPath] = useState(null);
  const menuOpen = openForPath === pathname;
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    function closeOnEscape(event) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    window.localStorage.setItem("avniq-theme", nextTheme);
    window.dispatchEvent(new Event("avniq-theme-change"));
  }

  function renderLinks(mobile = false) {
    return links.map(({ href, label }) => (
      <Link
        className={mobile ? styles.mobileNavLink : styles.navLink}
        href={href}
        key={href}
        aria-current={pathname === href ? "page" : undefined}
        onClick={() => setOpenForPath(null)}
      >
        {label}
        {mobile && <span aria-hidden="true">↗</span>}
      </Link>
    ));
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Brand />
        <nav className={styles.desktopNav} aria-label="Main navigation">
          {renderLinks()}
        </nav>
        <div className={styles.actions}>
          <button
            className={styles.themeToggle}
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            aria-pressed={theme === "dark"}
          >
            <ThemeIcon dark={theme === "dark"} />
          </button>
          <button
            className={styles.menuToggle}
            type="button"
            onClick={() => setOpenForPath(menuOpen ? null : pathname)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <span className={menuOpen ? styles.menuLineOpen : ""} />
            <span className={menuOpen ? styles.menuLineHidden : ""} />
            <span className={menuOpen ? styles.menuLineClose : ""} />
          </button>
        </div>
      </div>
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.nav
            className={styles.mobileNav}
            id="mobile-navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
          >
            {renderLinks(true)}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
