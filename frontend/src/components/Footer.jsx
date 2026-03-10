import { Link } from 'react-router-dom'
import { Github, Linkedin, Twitter, Mail, MapPin, Clock, DollarSign } from 'lucide-react'
import styles from './Footer.module.css'

/* ── Same LogoMark as Navbar ─────────────────────────── */
function LogoMark() {
  return (
    <svg width="36" height="36" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 6 C15 6 13 8 13 12 L13 17 C13 20 11 21 9 22 C11 23 13 24 13 27 L13 32 C13 36 15 38 19 38"
        stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path
        d="M25 6 C29 6 31 8 31 12 L31 17 C31 20 33 21 35 22 C33 23 31 24 31 27 L31 32 C31 36 29 38 25 38"
        stroke="#F5A623" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="29" y="4"  width="3"   height="3"   fill="#F5A623" opacity="0.9"/>
      <rect x="33" y="4"  width="2"   height="2"   fill="#F5A623" opacity="0.7"/>
      <rect x="36" y="2"  width="2"   height="2"   fill="#F5A623" opacity="0.5"/>
      <rect x="33" y="8"  width="2"   height="2"   fill="#F5A623" opacity="0.6"/>
      <rect x="37" y="6"  width="1.5" height="1.5" fill="#F5A623" opacity="0.4"/>
      <rect x="39" y="4"  width="1.5" height="1.5" fill="#F5A623" opacity="0.25"/>
      <rect x="36" y="10" width="1.5" height="1.5" fill="#F5A623" opacity="0.3"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.topGlow} aria-hidden />

      <div className="container">
        <div className={styles.grid}>

          {/* ── Brand ── */}
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <LogoMark />
              <span className={styles.logoText}>
                <span className={styles.logoMain}>
                  Next <span className={styles.logoGold}>Tech</span>
                </span>
                <span className={styles.logoSub}>Solutions</span>
              </span>
            </Link>
            <p className={styles.tagline}>
              Building intelligent, scalable full-stack solutions. From AI integrations
              to cloud-native apps — we turn your ideas into real business growth.
            </p>
            <div className={styles.socials}>
              <a href="https://linkedin.com/in/nexttech-sol" target="_blank" rel="noreferrer" aria-label="LinkedIn" className={styles.socialBtn}><Linkedin size={15} /></a>
              <a href="https://github.com/yourusername"      target="_blank" rel="noreferrer" aria-label="GitHub"   className={styles.socialBtn}><Github   size={15} /></a>
              <a href="#"                                                                      aria-label="Twitter"  className={styles.socialBtn}><Twitter  size={15} /></a>
              <a href="mailto:engrmumtazali01@gmail.com"                                       aria-label="Email"    className={styles.socialBtn}><Mail     size={15} /></a>
            </div>
          </div>

          {/* ── Navigation ── */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Navigation</h4>
            <ul>
              {[['/', 'Home'], ['/about', 'About Us'], ['/services', 'Services'], ['/team', 'Our Team'], ['/testimonials', 'Testimonials'], ['/contact', 'Contact']].map(([to, label]) => (
                <li key={to}><Link to={to}><span className={styles.arrow}>›</span>{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* ── Services ── */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Services</h4>
            <ul>
              {['Web Development', 'SaaS Solutions', 'AI / ML Integration', 'Database Design', 'Cloud & DevOps', 'Mobile Apps'].map(s => (
                <li key={s}><Link to="/services"><span className={styles.arrow}>›</span>{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Get In Touch</h4>
            <ul className={styles.contactList}>
              <li><span className={styles.contactIcon}><MapPin    size={12}/></span>Lahore, Pakistan · Remote</li>
              <li><span className={styles.contactIcon}><DollarSign size={12}/></span>Starting at $20 / hr</li>
              <li><span className={styles.contactIcon}><Clock      size={12}/></span>Response within 24 hours</li>
              <li><span className={styles.contactIcon}><Mail       size={12}/></span>
                <a href="mailto:engrmumtazali01@gmail.com" className={styles.contactEmail}>
                  engrmumtazali01@gmail.com
                </a>
              </li>
            </ul>
            <Link to="/contact" className={styles.footerCta}>Start a Project →</Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Next Tech Solutions. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  )
}