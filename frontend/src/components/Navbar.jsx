import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { to: '/',             label: 'Home'         },
  { to: '/about',        label: 'About'        },
  { to: '/services',     label: 'Services'     },
  { to: '/team',         label: 'Team'         },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact',      label: 'Contact'      },
]

export default function Navbar() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>

        {/* ── Logo ── */}
        <Link to="/" className={styles.logo} onClick={() => setOpen(false)}>
          <span className={styles.logoMark}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <polygon points="11,1 21,6 21,16 11,21 1,16 1,6" fill="none" stroke="url(#ng)" strokeWidth="1.5"/>
              <polygon points="11,5 17,8.5 17,13.5 11,17 5,13.5 5,8.5" fill="url(#ng)" opacity="0.25"/>
              <circle cx="11" cy="11" r="2.5" fill="url(#ng)"/>
              <defs>
                <linearGradient id="ng" x1="0" y1="0" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#38bdf8"/>
                  <stop offset="1" stopColor="#818cf8"/>
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className={styles.logoText}>
            Next<span className={styles.logoAccent}>Tech</span>
            <span className={styles.logoSub}>Solutions</span>
          </span>
        </Link>

        {/* ── Desktop links ── */}
        <ul className={styles.links}>
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ''}`
                }
              >
                {label}
                <span className={styles.linkUnderline} />
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ── CTA ── */}
        <Link to="/contact" className={styles.cta}>
          <span className={styles.ctaGlow} />
          Get a Quote
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>

        {/* ── Mobile toggle ── */}
        <button className={styles.toggle} onClick={() => setOpen(!open)} aria-label="menu">
          <span className={`${styles.toggleIcon} ${open ? styles.toggleOpen : ''}`}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </span>
        </button>
      </div>

      {/* ── Mobile menu ── */}
      <div className={`${styles.mobile} ${open ? styles.mobileOpen : ''}`}>
        <div className={styles.mobileLinks}>
          {NAV_LINKS.map(({ to, label }, i) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ''}`
              }
              onClick={() => setOpen(false)}
              style={{ '--i': i }}
            >
              {label}
            </NavLink>
          ))}
        </div>
        <Link
          to="/contact"
          className={styles.mobileCta}
          onClick={() => setOpen(false)}
        >
          Get a Quote →
        </Link>
      </div>
    </nav>
  )
}