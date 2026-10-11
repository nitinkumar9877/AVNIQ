import styles from "./BrowserIllustration.module.scss";

export default function BrowserIllustration() {
  return (
    <div className={styles.artwork} role="img" aria-label="A conceptual web application interface">
      <div className={styles.glow} />
      <div className={styles.orbit} />
      <div className={styles.badge}>
        <span aria-hidden="true">✳</span>
        Thoughtfully engineered
      </div>
      <div className={styles.browser}>
        <div className={styles.browserTop}>
          <div className={styles.dots} aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <span className={styles.address}>your-product.app</span>
          <span className={styles.more} aria-hidden="true">···</span>
        </div>
        <div className={styles.interface}>
          <aside className={styles.sidebar} aria-hidden="true">
            <i className={styles.logo} />
            <i /><i /><i /><i />
            <i className={styles.avatar} />
          </aside>
          <div className={styles.content}>
            <div className={styles.greeting}>
              <div>
                <i className={styles.overline} />
                <i className={styles.headingLine} />
              </div>
              <i className={styles.profile} />
            </div>
            <div className={styles.summary}>
              <div><i /><b /><small /></div>
              <div><i /><b /><small /></div>
            </div>
            <div className={styles.chart}>
              <div className={styles.chartHeader}>
                <i />
                <i />
              </div>
              <div className={styles.chartArea}>
                <svg viewBox="0 0 420 100" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M0 76 C30 70 35 55 68 62 S112 72 140 48 184 57 211 39 248 52 277 31 316 45 346 25 388 39 420 8 V100 H0Z" />
                  <path d="M0 76 C30 70 35 55 68 62 S112 72 140 48 184 57 211 39 248 52 277 31 316 45 346 25 388 39 420 8" />
                </svg>
              </div>
              <div className={styles.labels} aria-hidden="true">
                <i /><i /><i /><i /><i /><i />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.floatingCard}>
        <span aria-hidden="true">↗</span>
        <div><b>Made for people</b><small>Every detail, considered.</small></div>
        <i aria-hidden="true" />
      </div>
      <span className={styles.sparkle} aria-hidden="true">✳</span>
    </div>
  );
}
