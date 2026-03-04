import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, Zap } from 'lucide-react'
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
        {/* Logo */}
        <Link to="/" className={styles.logo} onClick={() => setOpen(false)}>
          <span className={styles.logoIcon}><Zap size={18} /></span>
          <span className={styles.logoText}>AI<span>&</span>Django</span>
        </Link>

        {/* Desktop links */}
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
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link to="/contact" className={`btn btn-primary ${styles.cta}`}>
          Get a Quote
        </Link>

        {/* Mobile toggle */}
        <button className={styles.toggle} onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`${styles.mobile} ${open ? styles.mobileOpen : ''}`}>
        {NAV_LINKS.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `${styles.mobileLink} ${isActive ? styles.active : ''}`
            }
            onClick={() => setOpen(false)}
          >
            {label}
          </NavLink>
        ))}
        <Link
          to="/contact"
          className={`btn btn-primary ${styles.mobileCta}`}
          onClick={() => setOpen(false)}
        >
          Get a Quote
        </Link>
      </div>
    </nav>
  )
}
