import { Link } from 'react-router-dom'
import { Github, Linkedin, Twitter, Mail, MapPin, Clock, DollarSign } from 'lucide-react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>

      {/* Top divider glow */}
      <div className={styles.topGlow} />

      <div className="container">
        <div className={styles.grid}>

          {/* ── Brand ── */}
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <span className={styles.logoMark}>
                <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
                  <polygon points="11,1 21,6 21,16 11,21 1,16 1,6" fill="none" stroke="url(#fg)" strokeWidth="1.5"/>
                  <polygon points="11,5 17,8.5 17,13.5 11,17 5,13.5 5,8.5" fill="url(#fg)" opacity="0.3"/>
                  <circle cx="11" cy="11" r="2.5" fill="url(#fg)"/>
                  <defs>
                    <linearGradient id="fg" x1="0" y1="0" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#38bdf8"/>
                      <stop offset="1" stopColor="#818cf8"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className={styles.logoName}>
                Next<span className={styles.accent}>Tech</span>
                <span className={styles.logoSub}>Solutions</span>
              </span>
            </Link>

            <p className={styles.tagline}>
              Building intelligent, scalable full-stack solutions that power
              your business. From AI integrations to cloud-native apps — we turn
              ideas into reality.
            </p>

            <div className={styles.socials}>
              <a href="https://linkedin.com/company/104945423" target="_blank" rel="noreferrer" aria-label="LinkedIn" className={styles.socialLink}>
                <Linkedin size={16} />
              </a>
              <a href="#" aria-label="GitHub" className={styles.socialLink}>
                <Github size={16} />
              </a>
              <a href="#" aria-label="Twitter" className={styles.socialLink}>
                <Twitter size={16} />
              </a>
              <a href="mailto:hello@nexttech.dev" aria-label="Email" className={styles.socialLink}>
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* ── Navigation ── */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Navigation</h4>
            <ul className={styles.colList}>
              {[
                ['/', 'Home'],
                ['/about', 'About Us'],
                ['/services', 'Services'],
                ['/team', 'Our Team'],
                ['/testimonials', 'Testimonials'],
                ['/contact', 'Contact'],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className={styles.colLink}>
                    <span className={styles.colLinkArrow}>›</span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services ── */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Services</h4>
            <ul className={styles.colList}>
              {[
                'Web Development',
                'SaaS Solutions',
                'AI/ML Integration',
                'Database Development',
                'Cloud & DevOps',
                'Mobile Apps',
              ].map(s => (
                <li key={s}>
                  <Link to="/services" className={styles.colLink}>
                    <span className={styles.colLinkArrow}>›</span>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Get In Touch</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}><MapPin size={14} /></span>
                Remote — Available Worldwide
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}><DollarSign size={14} /></span>
                Starting at $20/hr
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}><Clock size={14} /></span>
                Response within 24 hours
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}><Mail size={14} /></span>
                <a href="mailto:hello@nexttech.dev" className={styles.contactEmail}>
                  hello@nexttech.dev
                </a>
              </li>
            </ul>
            <Link to="/contact" className={styles.footerCta}>
              Start a Project →
            </Link>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Next Tech Solutions. All rights reserved.</p>
          <p className={styles.bottomRight}>Built with ❤️ using FastAPI & React</p>
        </div>
      </div>
    </footer>
  )
}