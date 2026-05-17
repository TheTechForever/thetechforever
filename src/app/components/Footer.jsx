// ============================================================
// Footer.jsx
// The bottom footer of the website.
// EDIT: Update social links, nav links, and copyright name.
// ============================================================

import styles from './Footer.module.css'

// Footer navigation columns
const FOOTER_LINKS = {
  Company:  ['About Us', 'Services', 'Portfolio', 'Careers'],
  Services: ['Web Development', 'Mobile Apps', 'Cloud & DevOps', 'AI & Automation'],
  Contact:  ['hello@technova.in', '+91 98765 43210', 'Vadodara, Gujarat'],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* TOP ROW: logo + nav columns */}
        <div className={styles.top}>

          {/* Brand column */}
          <div className={styles.brandCol}>
            <div className={styles.logo}>
              Tech<span className={styles.logoAccent}>Nova</span>
            </div>
            <p className={styles.tagline}>
              Building the software that<br />powers tomorrow's businesses.
            </p>
            {/* SOCIAL LINKS — replace '#' with your real URLs */}
            <div className={styles.socials}>
              <a href="#" aria-label="LinkedIn"  className={styles.social}>in</a>
              <a href="#" aria-label="Twitter"   className={styles.social}>𝕏</a>
              <a href="#" aria-label="GitHub"    className={styles.social}>gh</a>
              <a href="#" aria-label="Instagram" className={styles.social}>ig</a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([col, links]) => (
            <div key={col} className={styles.linkCol}>
              <h4 className={styles.colTitle}>{col}</h4>
              <ul className={styles.linkList}>
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className={styles.link}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* DIVIDER */}
        <hr className={styles.divider} />

        {/* BOTTOM ROW: copyright */}
        <div className={styles.bottom}>
          <span>© {year} TechNova Pvt. Ltd. All rights reserved.</span>
          <div className={styles.legal}>
            <a href="#" className={styles.legalLink}>Privacy Policy</a>
            <a href="#" className={styles.legalLink}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
