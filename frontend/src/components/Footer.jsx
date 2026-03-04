import { Link } from 'react-router-dom'
import { Zap, Github, Linkedin, Twitter, Mail } from 'lucide-react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <span className={styles.logoIcon}><Zap size={16} /></span>
              <span>AI<span className={styles.accent}>&</span>Django Innovators</span>
            </Link>
            <p className={styles.tagline}>
              Bridging AI and innovation. We build intelligent full-stack solutions
              that scale with your ambitions.
            </p>
            <div className={styles.socials}>
              <a href="https://linkedin.com/company/104945423" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="#" aria-label="GitHub"><Github size={18} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
              <a href="mailto:hello@aidjango.dev" aria-label="Email"><Mail size={18} /></a>
            </div>
          </div>

          {/* Navigation */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Navigation</h4>
            <ul>
              {[['/', 'Home'], ['/about', 'About Us'], ['/services', 'Services'], ['/team', 'Our Team'], ['/testimonials', 'Testimonials'], ['/contact', 'Contact']].map(([to, label]) => (
                <li key={to}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Services</h4>
            <ul>
              {['Web Development', 'SaaS Solutions', 'AI/ML Integration', 'Database Development', 'Cloud Development', 'Mobile Apps'].map(s => (
                <li key={s}><Link to="/services">{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Get In Touch</h4>
            <ul className={styles.contactList}>
              <li>📍 Remote — Available Worldwide</li>
              <li>💰 Starting at $20/hr</li>
              <li>🕐 Response within 24 hours</li>
              <li><a href="mailto:hello@aidjango.dev">hello@aidjango.dev</a></li>
            </ul>
            <Link to="/contact" className="btn btn-outline" style={{ marginTop: '20px', fontSize: '0.85rem', padding: '9px 20px' }}>
              Start a Project
            </Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} AI & Django Innovators. All rights reserved.</p>
          <p>Built with ❤️ using FastAPI & React</p>
        </div>
      </div>
    </footer>
  )
}
