import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { to: '/',             label: 'Home'         },
  { to: '/about',        label: 'About'        },
  { to: '/services',     label: 'Services'     },
  { to: '/team',         label: 'Team'         },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact',      label: 'Contact'      },
]

function LogoMark() {
  return (
    <svg width="36" height="36" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 6 C15 6 13 8 13 12 L13 17 C13 20 11 21 9 22 C11 23 13 24 13 27 L13 32 C13 36 15 38 19 38"
        stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M25 6 C29 6 31 8 31 12 L31 17 C31 20 33 21 35 22 C33 23 31 24 31 27 L31 32 C31 36 29 38 25 38"
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

export default function Navbar() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>

        <Link to="/" className={styles.logo} onClick={() => setOpen(false)}>
          <span className={styles.logoMark}><LogoMark /></span>
          <span className={styles.logoName}>
            <span className={styles.logoMain}>Next <em>Tech</em></span>
            <span className={styles.logoSub}>Solutions</span>
          </span>
        </Link>

        <ul className={styles.links}>
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} end={to === '/'}
                className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>
                {label}
                <span className={styles.underline} />
              </NavLink>
            </li>
          ))}
        </ul>

        <Link to="/contact" className={styles.cta}>
          Get a Quote <ArrowRight size={14} />
        </Link>

        <button className={styles.toggle} onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className={`${styles.mobile} ${open ? styles.mobileOpen : ''}`}>
        <div className={styles.mobileLinks}>
          {NAV_LINKS.map(({ to, label }, i) => (
            <NavLink key={to} to={to} end={to === '/'}
              className={({ isActive }) => `${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ''}`}
              onClick={() => setOpen(false)}
              style={{ '--i': i }}>
              {label}
            </NavLink>
          ))}
        </div>
        <Link to="/contact" className={styles.mobileCta} onClick={() => setOpen(false)}>
          Get a Quote →
        </Link>
      </div>
    </nav>
  )
}