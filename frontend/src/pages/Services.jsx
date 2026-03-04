import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { getServices } from '../api'
import styles from './Services.module.css'

export default function Services() {
  const [services, setServices] = useState([])
  const [loading, setLoading]   = useState(true)

  useEffect(() => {
    getServices()
      .then(r => setServices(r.data.services))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className="container">
          <span className="label">What We Offer</span>
          <h1 className="section-title" style={{ marginBottom: '20px' }}>
            Full-Stack Services,<br />Intelligent Solutions
          </h1>
          <p className={styles.heroDesc}>
            From database architecture to mobile apps, we cover the entire technology stack.
            Starting at $20/hr with flexible engagement models.
          </p>
          <div className={styles.heroMeta}>
            <span className={styles.metaBadge}>✅ Remote Available</span>
            <span className={styles.metaBadge}>💰 From $20/hr</span>
            <span className={styles.metaBadge}>🕐 24hr Response</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          {loading ? (
            <div className={styles.loading}>
              <div className={styles.spinner} />
              <p>Loading services…</p>
            </div>
          ) : (
            <div className={styles.servicesGrid}>
              {services.map((s, i) => (
                <div key={s.id} className={styles.serviceCard}>
                  <div className={styles.cardTop}>
                    <div className={styles.icon}>{s.icon}</div>
                    <div className={styles.num}>0{s.id}</div>
                  </div>
                  <h3 className={styles.title}>{s.title}</h3>
                  <p className={styles.desc}>{s.description}</p>
                  <ul className={styles.features}>
                    {s.features.map(f => (
                      <li key={f}>
                        <CheckCircle size={14} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className={styles.cardCta}>
                    Get Started <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Process */}
      <section className={`section ${styles.processSection}`}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="label">How We Work</span>
            <h2 className="section-title">Our Development Process</h2>
          </div>
          <div className={styles.processGrid}>
            {[
              { step: '01', title: 'Discovery Call',     desc: 'We deep-dive into your requirements, goals, and technical constraints in a free 1-hour consultation.'      },
              { step: '02', title: 'Proposal & Planning', desc: 'You receive a detailed technical proposal with scope, timeline, milestones, and transparent pricing.'      },
              { step: '03', title: 'Design & Develop',    desc: 'Agile sprints with weekly demos. You see real progress every week and can provide feedback continuously.' },
              { step: '04', title: 'Test & Deploy',       desc: 'Comprehensive testing, security review, and smooth deployment to your preferred cloud infrastructure.'    },
              { step: '05', title: 'Support & Scale',     desc: 'Post-launch support, monitoring, and continuous improvements as your product grows.'                     },
            ].map(({ step, title, desc }) => (
              <div key={step} className={styles.processCard}>
                <div className={styles.processStep}>{step}</div>
                <h3 className={styles.processTitle}>{title}</h3>
                <p className={styles.processDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>Not Sure What You Need?</h2>
            <p className={styles.ctaDesc}>Book a free consultation and we'll help you figure out the best path forward.</p>
            <Link to="/contact" className="btn btn-primary">
              Book Free Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
