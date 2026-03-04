import { useEffect, useState } from 'react'
import { Star, Quote } from 'lucide-react'
import { getTestimonials } from '../api'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading]           = useState(true)

  useEffect(() => {
    getTestimonials()
      .then(r => setTestimonials(r.data.testimonials))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="label">Social Proof</span>
          <h1 className="section-title" style={{ marginBottom: '20px' }}>
            Don't Take Our Word For It
          </h1>
          <p className={styles.heroDesc}>
            Real feedback from real clients across industries. Every review reflects a partnership
            we're proud of.
          </p>
          <div className={styles.overallRating}>
            <div className={styles.ratingStars}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={24} fill="var(--accent-cyan)" color="var(--accent-cyan)" />
              ))}
            </div>
            <div className={styles.ratingText}>
              <strong>5.0</strong> average rating · <strong>60+</strong> happy clients
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section">
        <div className="container">
          {loading ? (
            <div className={styles.loading}><div className={styles.spinner} /></div>
          ) : (
            <div className={styles.grid}>
              {testimonials.map((t, i) => (
                <div
                  key={t.id}
                  className={styles.card}
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <Quote size={28} className={styles.quoteIcon} />
                  <div className={styles.stars}>
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={14} fill="var(--accent-cyan)" color="var(--accent-cyan)" />
                    ))}
                  </div>
                  <p className={styles.text}>"{t.text}"</p>
                  <div className={styles.author}>
                    <div className={styles.avatar}>{t.avatar}</div>
                    <div>
                      <div className={styles.name}>{t.name}</div>
                      <div className={styles.role}>{t.role}</div>
                      <div className={styles.company}>{t.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Logos / Trust indicators */}
      <section className={styles.trustSection}>
        <div className="container">
          <p className={styles.trustLabel}>Clients we've worked with across industries</p>
          <div className={styles.industryTags}>
            {['FinTech', 'EdTech', 'HealthTech', 'E-Commerce', 'SaaS', 'Logistics', 'AI/ML', 'Media'].map(ind => (
              <span key={ind} className={styles.industryTag}>{ind}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaBox}>
            <div className={styles.ctaGlow} />
            <h2 className={styles.ctaTitle}>Worked With Us?</h2>
            <p className={styles.ctaDesc}>We'd love to hear your feedback. Share your experience and help others make the right choice.</p>
            <a
              href="https://linkedin.com/company/104945423"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Leave a Review on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
