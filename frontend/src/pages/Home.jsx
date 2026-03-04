import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Code2, Brain, Globe, CheckCircle, TrendingUp, Users, Briefcase, Star } from 'lucide-react'
import { getServices, getStats, getTestimonials } from '../api'
import styles from './Home.module.css'

function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const step = Math.ceil(target / 60)
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev + step >= target) { clearInterval(timer); return target }
        return prev + step
      })
    }, 25)
    return () => clearInterval(timer)
  }, [target])
  return <span>{count}{suffix}</span>
}

export default function Home() {
  const [services, setServices]       = useState([])
  const [stats, setStats]             = useState(null)
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    getServices().then(r => setServices(r.data.services.slice(0, 6)))
    getStats().then(r => setStats(r.data))
    getTestimonials().then(r => setTestimonials(r.data.testimonials.slice(0, 3)))
  }, [])

  return (
    <div>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroText}>
            <span className="label">Welcome to Next Tech Solutions</span>
            <h1 className={styles.heroTitle}>
              Building the Future<br />
              <span className={styles.gradientText}>One Line of Code</span><br />
              at a Time
            </h1>
            <p className={styles.heroDesc}>
              We deliver intelligent full-stack solutions — from SaaS platforms and AI integrations
              to cloud applications and mobile apps. Your vision, our expertise.
            </p>
            <div className={styles.heroCtas}>
              <Link to="/services" className="btn btn-primary">
                Explore Services <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Start a Project
              </Link>
            </div>
            <div className={styles.heroTrust}>
              {['FastAPI', 'React', 'Django', 'AWS', 'PostgreSQL'].map(t => (
                <span key={t} className={styles.tech}>{t}</span>
              ))}
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.codeCard}>
              <div className={styles.codeHeader}>
                <span className={styles.dot} style={{ background: '#ff5f57' }} />
                <span className={styles.dot} style={{ background: '#febc2e' }} />
                <span className={styles.dot} style={{ background: '#28c840' }} />
                <span className={styles.fileName}>app.py</span>
              </div>
              <pre className={styles.code}><code>{`from fastapi import FastAPI
from ai_engine import InnovatorAI

app = FastAPI()
ai  = InnovatorAI(model="gpt-4")

@app.get("/innovate")
async def innovate(idea: str):
    solution = await ai.build(idea)
    return {
        "status": "shipped 🚀",
        "solution": solution,
        "quality": "production"
    }`}</code></pre>
            </div>
            <div className={styles.floatingBadge} style={{ top: '-16px', right: '-16px' }}>
              <Brain size={14} /> AI Powered
            </div>
            <div className={styles.floatingBadge} style={{ bottom: '-16px', left: '-16px', animationDelay: '1s' }}>
              <CheckCircle size={14} /> Production Ready
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────── */}
      {stats && (
        <section className={styles.statsSection}>
          <div className="container">
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <TrendingUp size={24} className={styles.statIcon} />
                <div className={styles.statNum}><AnimatedCounter target={stats.projects_completed} suffix="+" /></div>
                <div className={styles.statLabel}>Projects Completed</div>
              </div>
              <div className={styles.statItem}>
                <Users size={24} className={styles.statIcon} />
                <div className={styles.statNum}><AnimatedCounter target={stats.happy_clients} suffix="+" /></div>
                <div className={styles.statLabel}>Happy Clients</div>
              </div>
              <div className={styles.statItem}>
                <Briefcase size={24} className={styles.statIcon} />
                <div className={styles.statNum}><AnimatedCounter target={stats.years_experience} suffix="+" /></div>
                <div className={styles.statLabel}>Years Experience</div>
              </div>
              <div className={styles.statItem}>
                <Code2 size={24} className={styles.statIcon} />
                <div className={styles.statNum}><AnimatedCounter target={stats.technologies} suffix="+" /></div>
                <div className={styles.statLabel}>Technologies</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Services Preview ──────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <span className="label">What We Do</span>
              <h2 className="section-title">Services We Provide</h2>
              <p className="section-subtitle">End-to-end development services tailored for startups and growing businesses.</p>
            </div>
            <Link to="/services" className="btn btn-outline">
              All Services <ArrowRight size={16} />
            </Link>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((s, i) => (
              <div key={s.id} className="card" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className={styles.serviceIcon}>{s.icon}</div>
                <h3 className={styles.serviceTitle}>{s.title}</h3>
                <p className={styles.serviceDesc}>{s.description}</p>
                <div className={styles.serviceTags}>
                  {s.features.slice(0, 2).map(f => (
                    <span key={f} className={styles.tag}>{f}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ────────────────────────────────────────────── */}
      <section className={`section ${styles.whySection}`}>
        <div className="container">
          <div className={styles.whyGrid}>
            <div>
              <span className="label">Why Choose Us</span>
              <h2 className="section-title">We Don't Just Code.<br />We Engineer Solutions.</h2>
              <p className="section-subtitle" style={{ marginBottom: '32px' }}>
                Every project we take on is treated like our own startup. We care about quality,
                performance, and delivering real business value.
              </p>
              {[
                ['Clean, documented, maintainable code', Code2],
                ['On-time delivery with transparent communication', CheckCircle],
                ['AI-first approach to problem solving', Brain],
                ['Scalable architecture from day one', Globe],
              ].map(([text, Icon]) => (
                <div key={text} className={styles.whyItem}>
                  <div className={styles.whyCheck}><Icon size={16} /></div>
                  <span>{text}</span>
                </div>
              ))}
              <div style={{ marginTop: '40px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link to="/about" className="btn btn-primary">Learn More <ArrowRight size={16} /></Link>
                <Link to="/contact" className="btn btn-outline">Hire Us</Link>
              </div>
            </div>
            <div className={styles.whyRight}>
              <div className={styles.pricingCard}>
                <div className={styles.pricingHeader}>
                  <span className="label">Pricing</span>
                  <div className={styles.price}>$20<span>/hr</span></div>
                  <p>Starting rate · Transparent pricing</p>
                </div>
                <ul className={styles.pricingList}>
                  {['Free initial consultation', 'Fixed-price projects available', 'Flexible engagement models', 'Money-back guarantee on milestones', '24/7 communication'].map(item => (
                    <li key={item}><CheckCircle size={14} />{item}</li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Get Free Estimate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials Preview ──────────────────────────────── */}
      {testimonials.length > 0 && (
        <section className="section">
          <div className="container">
            <div className={styles.sectionHead}>
              <div>
                <span className="label">Client Feedback</span>
                <h2 className="section-title">What Our Clients Say</h2>
              </div>
              <Link to="/testimonials" className="btn btn-outline">
                All Reviews <ArrowRight size={16} />
              </Link>
            </div>
            <div className={styles.testimonialsGrid}>
              {testimonials.map(t => (
                <div key={t.id} className="card">
                  <div className={styles.stars}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={14} fill="var(--accent-cyan)" color="var(--accent-cyan)" />
                    ))}
                  </div>
                  <p className={styles.testimonialText}>"{t.text}"</p>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.avatar}>{t.avatar}</div>
                    <div>
                      <div className={styles.authorName}>{t.name}</div>
                      <div className={styles.authorRole}>{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Final CTA ─────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaBox}>
            <div className={styles.ctaGlow} />
            <h2 className={styles.ctaTitle}>Ready to Build Something Amazing?</h2>
            <p className={styles.ctaDesc}>
              Let's discuss your project. Free consultation, no commitment.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">
                Start a Conversation <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="btn btn-outline">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
