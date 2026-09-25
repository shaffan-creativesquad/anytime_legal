import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Shield, Lock, Clock, Phone, Mail,
  ChevronDown, ArrowLeft, FileText,
  AlertCircle, CheckCircle, Users,
  Eye, Database, Globe, RefreshCw,
} from 'lucide-react'
import './LegalPage.css'

const sections = [
  { id: 'confidentiality', label: 'Confidentiality First',    icon: Lock },
  { id: 'what-we-collect', label: 'What We Collect',          icon: Database },
  { id: 'why-we-collect',  label: 'Why We Collect It',        icon: Eye },
  { id: 'who-we-share',    label: 'Who We Share It With',     icon: Users },
  { id: 'notary',          label: 'Notary & Commissioning',   icon: FileText },
  { id: 'how-we-protect',  label: 'How We Keep It Safe',      icon: Shield },
  { id: 'how-long',        label: 'How Long We Keep It',      icon: Clock },
  { id: 'your-rights',     label: 'Your Rights',              icon: CheckCircle },
  { id: 'email-updates',   label: 'Email & Updates',          icon: Mail },
  { id: 'cookies',         label: 'Cookies & Website',        icon: Globe },
  { id: 'links',           label: 'Links to Other Websites',  icon: Globe },
  { id: 'changes',         label: 'Changes to This Policy',   icon: RefreshCw },
  { id: 'contact',         label: 'Get in Touch',             icon: Phone },
]

export default function PrivacyPolicy() {
  const [active, setActive]     = useState(sections[0].id)
  const [progress, setProgress] = useState(0)
  const [tocOpen, setTocOpen]   = useState(false)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const pct = (window.scrollY / (doc.scrollHeight - doc.clientHeight)) * 100
      setProgress(Math.min(pct, 100))

      const pos = window.scrollY + 130
      for (const s of sections) {
        const el = document.getElementById(s.id)
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActive(s.id); break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const jump = (id) => {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.offsetTop - 90, behavior: 'smooth' })
    setTocOpen(false)
  }

  return (
    <div className="legal-page">
      <div className="legal-progress-bar" style={{ width: `${progress}%` }} />

      {/* Hero */}
      <section className="legal-hero">
        <div className="legal-hero-grid" />
        <div className="legal-hero-glow" />
        <div className="container">
          <Link to="/" className="legal-back-link">
            <ArrowLeft size={15} /> Back to Home
          </Link>
          <div className="legal-hero-inner">
            <div>
              <p className="legal-hero-eyebrow">Anytime Legal Services</p>
              <motion.h1
                className="legal-hero-title"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Privacy<span>Notice</span>
              </motion.h1>
              <div className="legal-hero-meta">
                <span className="legal-meta-pill"><Clock size={14} /> Last updated: September 7, 2026</span>
                <span className="legal-meta-pill"><Shield size={14} /> PIPEDA Compliant</span>
              </div>
            </div>
            <div className="legal-hero-icon-wrap">
              <Lock size={72} strokeWidth={1} />
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <div className="legal-intro-strip">
        <div className="container">
          <p className="legal-intro-text">
            Whenever you bring a matter to Anytime Legal Services you share personal details — about
            your life, your money, and sometimes your hardest experiences. We take this responsibility
            seriously. We follow Canada's <strong>PIPEDA</strong> and the Law Society of Ontario's
            Paralegal Rules of Conduct.{' '}
            <strong>We protect your information more strictly than most businesses.</strong>
          </p>
        </div>
      </div>

      {/* Mobile TOC */}
      <div className="legal-mobile-toc">
        <button className="legal-mobile-toc-toggle" onClick={() => setTocOpen(!tocOpen)}>
          <FileText size={15} /> Jump to Section
          <ChevronDown size={16} className={`legal-mobile-chevron ${tocOpen ? 'open' : ''}`} />
        </button>
        {tocOpen && (
          <div className="legal-mobile-toc-drawer">
            {sections.map(s => (
              <button key={s.id} onClick={() => jump(s.id)}
                className={`legal-mobile-nav-btn ${active === s.id ? 'active' : ''}`}>
                <s.icon size={13} /> {s.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="legal-body">
        <div className="container">
          <div className="legal-body-inner">

            {/* Sidebar */}
            <nav className="legal-nav">
              <p className="legal-nav-label">Sections</p>
              <div className="legal-nav-list">
                {sections.map(s => (
                  <button key={s.id} onClick={() => jump(s.id)}
                    className={`legal-nav-btn ${active === s.id ? 'active' : ''}`}>
                    <span className="legal-nav-dot" /> {s.label}
                  </button>
                ))}
              </div>
            </nav>

            {/* Content */}
            <main className="legal-content">

              <Sec id="confidentiality" num="01" icon={Lock} title="Confidentiality Comes First">
                <div className="legal-callout legal-callout-blue">
                  <Shield size={18} />
                  <p>Whatever you share with us remains <strong>completely confidential.</strong> We do not share client information outside the firm unless you give permission, the law requires it, or it's necessary to complete your work.</p>
                </div>
                <p>This duty continues even after your case is closed.</p>
              </Sec>

              <Sec id="what-we-collect" num="02" icon={Database} title="What We Collect">
                <p>What we gather depends on your matter. It usually includes:</p>
                <ul className="legal-list">
                  {[
                    'Your name, contact details and preferred contact method',
                    'Identification, when we need to confirm your identity or notarize a document',
                    'Details about your legal issue — dates, documents, and other parties involved',
                    'Financial information linked to billing and payment',
                    'Anything else you choose to share while we work together',
                  ].map((item, i) => <li key={i}><span className="legal-list-bullet" />{item}</li>)}
                </ul>
                <div className="legal-note">
                  <p>Most information comes directly from you. Sometimes, with your consent or when permitted by law, we may also receive information from courts, tribunals, or others involved in your case.</p>
                </div>
              </Sec>

              <Sec id="why-we-collect" num="03" icon={Eye} title="Why We Collect It">
                <p>We use your information to represent you and manage our practice:</p>
                <ul className="legal-checklist">
                  <li><CheckCircle size={15} /> Reviewing your case and giving advice</li>
                  <li><CheckCircle size={15} /> Preparing and filing documents</li>
                  <li><CheckCircle size={15} /> Advocating for you in court or at tribunals</li>
                  <li><CheckCircle size={15} /> Notarizing or commissioning documents</li>
                  <li><CheckCircle size={15} /> Billing for our services</li>
                  <li><CheckCircle size={15} /> Keeping you informed throughout your matter</li>
                </ul>
                <p>We may also use your contact details to follow up or, if you agree, send updates about our services.</p>
              </Sec>

              <Sec id="who-we-share" num="04" icon={Users} title="Who We Share It With, and When">
                <p>We share your information only when necessary for your case or required by law:</p>
                <ul className="legal-list">
                  {[
                    'Courts, tribunals, and government bodies handling your case',
                    'Opposing parties or their representatives, where the matter requires it',
                    'Process servers, agents, or other professionals brought in to help',
                    'Service providers who support our practice, under strict confidentiality',
                  ].map((item, i) => <li key={i}><span className="legal-list-bullet" />{item}</li>)}
                </ul>
                <div className="legal-callout legal-callout-gold">
                  <AlertCircle size={18} />
                  <p>We will <strong>never sell your information.</strong> We do not share it with others unless it relates to your case or a real legal requirement.</p>
                </div>
              </Sec>

              <Sec id="notary" num="05" icon={FileText} title="Notary and Commissioning Services">
                <p>When you ask us to notarize or commission a document, we will ask for identification to confirm your identity. We may keep a record of the service if needed.</p>
                <p>All identification is kept confidential — just like all your other information.</p>
              </Sec>

              <Sec id="how-we-protect" num="06" icon={Shield} title="How We Keep Your Information Safe">
                <p>We protect your information with practical safeguards:</p>
                <ul className="legal-checklist">
                  <li><CheckCircle size={15} /> Limiting who in the firm can access your file</li>
                  <li><CheckCircle size={15} /> Storing records in secure systems</li>
                  <li><CheckCircle size={15} /> Careful handling of both paper and digital records</li>
                </ul>
                <div className="legal-note">
                  <p>Although no system is completely risk-free, we work every day to keep your information safe.</p>
                </div>
              </Sec>

              <Sec id="how-long" num="07" icon={Clock} title="How Long We Keep It">
                <p>We are required to keep legal files for as long as our professional and legal duties demand, and sometimes longer if there is a good reason.</p>
                <p>When a file no longer needs to be kept, we dispose of it securely.</p>
              </Sec>

              <Sec id="your-rights" num="08" icon={CheckCircle} title="Your Rights">
                <p>Under PIPEDA, you have the right to:</p>
                <ul className="legal-checklist">
                  <li><CheckCircle size={15} /> Ask what personal information we hold about you</li>
                  <li><CheckCircle size={15} /> Request a correction if something is inaccurate</li>
                  <li><CheckCircle size={15} /> Ask questions about how your information is processed</li>
                </ul>
                <div className="legal-note">
                  <p>Some records related to your legal matter may have professional or legal limits on access — we will explain these if they apply to you.</p>
                </div>
              </Sec>

              <Sec id="email-updates" num="09" icon={Mail} title="Email and Updates">
                <p>If we send you updates or newsletters, each message will include a way to unsubscribe, as required by Canada's Anti-Spam Legislation (CASL).</p>
                <p>Choosing to unsubscribe will not affect our work on your case or your ability to contact us.</p>
              </Sec>

              <Sec id="cookies" num="10" icon={Globe} title="Cookies and Our Website">
                <p>If you visit our website, we may use cookies and other tools to make the website work well and to understand how people use it.</p>
                <p>You can stop cookies in your browser settings — though some parts of the website might not work as well if you do.</p>
              </Sec>

              <Sec id="links" num="11" icon={Globe} title="Links to Other Websites">
                <p>Our website may link to external resources such as court websites or partners. Once you leave our site, their privacy policies apply — we encourage reviewing them.</p>
              </Sec>

              <Sec id="changes" num="12" icon={RefreshCw} title="Changes to This Policy">
                <p>We may update this policy occasionally. When we do, the revised version will appear on this page with a new date at the top. Please check back from time to time.</p>
              </Sec>

              <Sec id="contact" num="13" icon={Phone} title="Get in Touch">
                <p>If you have a question about your privacy or want to know what information we hold, we are happy to help.</p>
                <div className="legal-contact-grid">
                  <a href="tel:+19054510300" className="legal-contact-card">
                    <div className="legal-contact-card-icon"><Phone size={20} /></div>
                    <div>
                      <span className="legal-contact-card-label">Phone</span>
                      <span className="legal-contact-card-value">(905) 451-0300</span>
                    </div>
                  </a>
                  <a href="tel:+12268889800" className="legal-contact-card">
                    <div className="legal-contact-card-icon"><Phone size={20} /></div>
                    <div>
                      <span className="legal-contact-card-label">Alternate</span>
                      <span className="legal-contact-card-value">(226) 888-9800</span>
                    </div>
                  </a>
                  <a href="mailto:visho@anytimelegalservices.ca" className="legal-contact-card">
                    <div className="legal-contact-card-icon"><Mail size={20} /></div>
                    <div>
                      <span className="legal-contact-card-label">Email</span>
                      <span className="legal-contact-card-value">visho@anytimelegalservices.ca</span>
                    </div>
                  </a>
                </div>
                <div className="legal-note" style={{ marginTop: '1.25rem' }}>
                  <p>If you have a concern we can't resolve, contact the <strong>Office of the Privacy Commissioner of Canada</strong> at <strong>priv.gc.ca</strong>.</p>
                </div>
                <div className="legal-return-btn">
                  <Link to="/" className="btn btn-primary">
                    <ArrowLeft size={15} /> Return to Home
                  </Link>
                </div>
              </Sec>

            </main>
          </div>
        </div>
      </div>
    </div>
  )
}

function Sec({ id, num, icon: Icon, title, children }) {
  return (
    <motion.section
      id={id}
      className="legal-section"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45 }}
    >
      <span className="legal-section-num" aria-hidden="true">{num}</span>
      <div className="legal-section-head">
        <div className="legal-section-icon-box"><Icon size={20} /></div>
        <h2 className="legal-section-title">{title}</h2>
      </div>
      <div className="legal-section-body">{children}</div>
    </motion.section>
  )
}
