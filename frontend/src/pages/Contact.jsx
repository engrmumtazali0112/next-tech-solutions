import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck, FiGithub, FiLinkedin } from 'react-icons/fi'

// ── EmailJS credentials (from your Form.js) ──────────────────────────────────
const EMAILJS_SERVICE_ID  = '21dmbcs124'
const EMAILJS_TEMPLATE_ID = 'template_9pkkqa9'
const EMAILJS_PUBLIC_KEY  = 'gP5gF9RPdQC3gvB-c'
// ─────────────────────────────────────────────────────────────────────────────

const SERVICES = [
  'SaaS Development',
  'Web Development',
  'AI & ML Solutions',
  'Mobile Development',
  'Cloud & DevOps',
  'UI/UX Design',
  'Computer Vision',
  'LLM Fine-tuning',
  'RAG Systems',
  'Other',
]

const INFO = [
  { icon: FiMail,   label: 'Email',    val: 'engrmumtazali01@gmail.com',    href: 'mailto:engrmumtazali01@gmail.com' },
  { icon: FiPhone,  label: 'Phone',    val: '+92 XXX XXXXXXX',          href: 'tel:+92XXXXXXXXX' },
  { icon: FiMapPin, label: 'Location', val: 'Lahore, Pakistan · Remote', href: null },
]

const SOCIAL_LINKS = [
  { icon: FiGithub,   label: 'GitHub',   url: 'https://github.com/yourusername' },
  { icon: FiLinkedin, label: 'LinkedIn', url: 'https://linkedin.com/in/nexttech-sol' },
]

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [done, setDone]       = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  // Load EmailJS SDK once
  useEffect(() => {
    if (!window.emailjs) {
      const script = document.createElement('script')
      script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js'
      script.onload = () => window.emailjs.init(EMAILJS_PUBLIC_KEY)
      document.head.appendChild(script)
    } else {
      window.emailjs.init(EMAILJS_PUBLIC_KEY)
    }
  }, [])

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      // Map form fields to your EmailJS template variables
      const templateParams = {
        name:    data.name,
        email:   data.email,
        phone:   data.phone    || 'N/A',
        company: data.company  || 'N/A',
        service: data.service  || 'N/A',
        subject: data.subject,
        message: data.message,
      }

      await window.emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      )

      toast.success('Message sent successfully! I\'ll reply within 24 hours. ✅')
      setDone(true)
      reset()
    } catch (err) {
      console.error('EmailJS error:', err)
      toast.error('Failed to send message. Please try again or email directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main style={{ minHeight: '100vh', background: '#060e1a', paddingTop: 80 }}>

      {/* ── Header ── */}
      <div style={{ padding: '56px 0 48px', background: '#0a1628', borderBottom: '1px solid #162033' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            style={{ color: '#10b981', fontSize: 14, fontWeight: 600, letterSpacing: '0.1em',
                     textTransform: 'uppercase', marginBottom: 12, fontFamily: 'monospace' }}>
            Get In Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, color: '#fff',
                     letterSpacing: -1, marginBottom: 12, lineHeight: 1.2 }}>
            Let's Build Something{' '}
            <span style={{ background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
                           WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Amazing
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            style={{ fontSize: 18, color: '#94a3b8', maxWidth: 600, lineHeight: 1.6 }}>
            Full-Stack AI/ML Engineer specializing in production-ready AI implementations,
            scalable web applications, and computer vision solutions.
          </motion.p>
        </div>
      </div>

      {/* ── Body ── */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 40, alignItems: 'start' }}>

          {/* ── Left info panel ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {INFO.map(({ icon: Icon, label, val, href }) => (
              <motion.div key={label}
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}
                style={{ background: '#0f1e35', border: '1px solid #1e2c45', borderRadius: 16,
                         padding: 20, display: 'flex', alignItems: 'center', gap: 16,
                         transition: 'all 0.2s ease', cursor: href ? 'pointer' : 'default' }}
                onMouseEnter={e => { if (href) { e.currentTarget.style.borderColor = '#10b981'; e.currentTarget.style.transform = 'translateY(-2px)' } }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#1e2c45'; e.currentTarget.style.transform = 'translateY(0)' }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(16,185,129,0.1)',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              color: '#10b981', flexShrink: 0 }}>
                  <Icon size={20} />
                </div>
                <div>
                  <p style={{ fontSize: 12, color: '#64748b', marginBottom: 4, fontWeight: 500 }}>{label}</p>
                  {href
                    ? <a href={href} style={{ fontSize: 15, color: '#fff', fontWeight: 600, textDecoration: 'none', transition: 'color 0.2s' }}
                         onMouseEnter={e => e.currentTarget.style.color = '#10b981'}
                         onMouseLeave={e => e.currentTarget.style.color = '#fff'}>{val}</a>
                    : <p style={{ fontSize: 15, color: '#fff', fontWeight: 600, margin: 0 }}>{val}</p>}
                </div>
              </motion.div>
            ))}

            {/* Social icons */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
              style={{ display: 'flex', gap: 12, marginTop: 8 }}>
              {SOCIAL_LINKS.map(({ icon: Icon, label, url }) => (
                <a key={label} href={url} target="_blank" rel="noopener noreferrer"
                   style={{ width: 48, height: 48, borderRadius: 12, background: '#0f1e35',
                            border: '1px solid #1e2c45', display: 'flex', alignItems: 'center',
                            justifyContent: 'center', color: '#94a3b8', transition: 'all 0.2s ease' }}
                   onMouseEnter={e => { e.currentTarget.style.background = '#10b981'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#10b981'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                   onMouseLeave={e => { e.currentTarget.style.background = '#0f1e35'; e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.borderColor = '#1e2c45'; e.currentTarget.style.transform = 'translateY(0)' }}>
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>

            {/* Availability badge */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              style={{ background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.2)',
                       borderRadius: 16, padding: 20, marginTop: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#10b981',
                               boxShadow: '0 0 12px rgba(16,185,129,0.4)' }} />
                <span style={{ fontSize: 14, color: '#10b981', fontWeight: 700 }}>Available for Projects</span>
              </div>
              <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                Based in Pakistan · Remote worldwide.
                Typical response time: <span style={{ color: '#94a3b8', fontWeight: 600 }}>2–4 hours</span> on business days.
              </p>
            </motion.div>

            {/* Tech stack */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
              style={{ background: '#0f1e35', border: '1px solid #1e2c45', borderRadius: 16, padding: 20 }}>
              <p style={{ fontSize: 13, color: '#94a3b8', marginBottom: 12, fontWeight: 600 }}>TECH STACK</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['Python', 'FastAPI', 'React', 'PyTorch', 'Docker', 'AWS'].map(tech => (
                  <span key={tech} style={{ padding: '4px 10px', background: '#1a2a42', borderRadius: 20,
                                            fontSize: 11, color: '#94a3b8', border: '1px solid #2a3a55' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right: Contact form ── */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
            <div style={{ background: '#0f1e35', border: '1px solid #1e2c45', borderRadius: 24,
                          padding: 36, boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>

              {done ? (
                /* ── Success state ── */
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(16,185,129,0.15)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                margin: '0 auto 24px', color: '#10b981' }}>
                    <FiCheck size={32} />
                  </div>
                  <h3 style={{ fontSize: 24, fontWeight: 800, color: '#fff', marginBottom: 12 }}>Message Sent! 🎉</h3>
                  <p style={{ color: '#64748b', fontSize: 16, marginBottom: 28, lineHeight: 1.6 }}>
                    Your message has been delivered to <strong style={{ color: '#10b981' }}>Hr</strong>.
                    I'll get back to you within 24 hours.
                  </p>
                  <button onClick={() => setDone(false)}
                    style={{ background: 'transparent', border: '1px solid #2a3a55', color: '#fff',
                             padding: '12px 28px', borderRadius: 30, fontSize: 15, fontWeight: 600,
                             cursor: 'pointer', transition: 'all 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#10b981'; e.currentTarget.style.borderColor = '#10b981' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = '#2a3a55' }}>
                    Send Another Message
                  </button>
                </motion.div>

              ) : (
                /* ── Form ── */
                <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

                  {/* Name + Email */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div>
                      <label style={labelStyle}>Full Name <span style={{ color: '#10b981' }}>*</span></label>
                      <input {...register('name', { required: 'Name is required' })}
                        placeholder="Mumtaz Ali" style={inputStyle} />
                      {errors.name && <span style={errStyle}>{errors.name.message}</span>}
                    </div>
                    <div>
                      <label style={labelStyle}>Email <span style={{ color: '#10b981' }}>*</span></label>
                      <input {...register('email', {
                        required: 'Email is required',
                        pattern: { value: /^\S+@\S+$/i, message: 'Invalid email format' }
                      })} placeholder="hello@virevo.com" style={inputStyle} />
                      {errors.email && <span style={errStyle}>{errors.email.message}</span>}
                    </div>
                  </div>

                  {/* Company + Phone */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div>
                      <label style={labelStyle}>Company</label>
                      <input {...register('company')} placeholder="AI Django Innovators" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Phone Number</label>
                      <input {...register('phone')} placeholder="+92 XXX XXXXXXX" style={inputStyle} />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label style={labelStyle}>Service Interested In</label>
                    <select {...register('service')} style={{ ...inputStyle, color: '#94a3b8', cursor: 'pointer' }}>
                      <option value="">Select a service...</option>
                      {SERVICES.map(s => (
                        <option key={s} value={s} style={{ background: '#0f1e35' }}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Subject */}
                  <div>
                    <label style={labelStyle}>Subject <span style={{ color: '#10b981' }}>*</span></label>
                    <input {...register('subject', { required: 'Subject is required' })}
                      placeholder="Project: AI-powered analytics platform" style={inputStyle} />
                    {errors.subject && <span style={errStyle}>{errors.subject.message}</span>}
                  </div>

                  {/* Message */}
                  <div>
                    <label style={labelStyle}>Message <span style={{ color: '#10b981' }}>*</span></label>
                    <textarea {...register('message', { required: 'Message is required' })}
                      rows={5}
                      placeholder="Tell me about your project, timeline, and specific requirements..."
                      style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }} />
                    {errors.message && <span style={errStyle}>{errors.message.message}</span>}
                  </div>

                  {/* Submit */}
                  <button type="submit" disabled={loading}
                    style={{ background: loading ? '#1a2a42' : '#10b981', border: 'none', color: '#fff',
                             padding: 16, borderRadius: 30, fontSize: 16, fontWeight: 600,
                             cursor: loading ? 'not-allowed' : 'pointer', transition: 'all 0.2s',
                             display: 'flex', alignItems: 'center', justifyContent: 'center',
                             gap: 10, marginTop: 8, opacity: loading ? 0.7 : 1 }}
                    onMouseEnter={e => { if (!loading) { e.currentTarget.style.background = '#0d9668'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(16,185,129,0.3)' } }}
                    onMouseLeave={e => { if (!loading) { e.currentTarget.style.background = '#10b981'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' } }}>
                    {loading ? (
                      <>
                        <span style={{ width: 18, height: 18, border: '2px solid rgba(255,255,255,0.3)',
                                       borderTopColor: '#fff', borderRadius: '50%',
                                       animation: 'spin 0.8s linear infinite', display: 'inline-block' }} />
                        Sending...
                      </>
                    ) : (
                      <><FiSend size={16} /> Send Message</>
                    )}
                  </button>

                  <p style={{ fontSize: 12, color: '#475569', textAlign: 'center', marginTop: 4 }}>
                    Message will be sent to <span style={{ color: '#10b981' }}>Hr</span> · I'll reply within 24 hours ⚡
                  </p>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        input:focus, textarea:focus, select:focus {
          border-color: #10b981 !important;
          box-shadow: 0 0 0 3px rgba(16,185,129,0.1);
          outline: none;
        }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  )
}

// ── Shared styles ─────────────────────────────────────────────────────────────
const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  background: '#0a1424',
  border: '1px solid #1e2c45',
  borderRadius: 12,
  color: '#fff',
  fontSize: 15,
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.2s, box-shadow 0.2s',
}

const labelStyle = {
  fontSize: 13,
  color: '#94a3b8',
  display: 'block',
  marginBottom: 6,
  fontWeight: 500,
}

const errStyle = {
  fontSize: 12,
  color: '#ef4444',
  marginTop: 6,
  display: 'block',
}