import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Scale, Shield, Clock, Phone, Mail,
  ChevronDown, ArrowLeft, FileText,
  AlertCircle, CheckCircle, Users, Briefcase, Lock,
} from 'lucide-react'
import './LegalPage.css'

const sections = [
  { id: 'who-we-are',      label: 'Who We Are',                    icon: Users },
  { id: 'our-services',    label: 'Our Services',                   icon: Briefcase },
  { id: 'website-info',    label: 'Website Information',            icon: FileText },
  { id: 'no-relationship', label: 'No Client Relationship',         icon: AlertCircle },
  { id: 'what-we-help',    label: 'What We Can Help With',          icon: CheckCircle },
  { id: 'deadlines',       label: 'Deadlines Matter',               icon: Clock },
  { id: 'notary',          label: 'Notary & Commissioning',         icon: Scale },
  { id: 'fees',            label: 'Fees and Payment',               icon: FileText },
  { id: 'responsibilities','label': 'Your Responsibilities',        icon: Users },
  { id: 'no-guarantee',    label: 'No Guarantee of Outcome',        icon: AlertCircle },
  { id: 'confidentiality', label: 'Confidentiality & Privacy',      icon: Lock },
  { id: 'ending-services', label: 'Ending Our Services',            icon: FileText },
  { id: 'professional',    label: 'Professional Standards',         icon: Shield },
  { id: 'limitation',      label: 'Limitation of Liability',        icon: Scale },
  { id: 'governing-law',   label: 'Governing Law',                  icon: FileText },
  { id: 'changes',         label: 'Changes',                        icon: FileText },
  { id: 'contact',         label: 'Contact Us',                     icon: Phone },
]

export default function TermsAndConditions() {
  const [active, setActive]   = useState(sections[0].id)
  const [progress, setProgress] = useState(0)
  const [tocOpen, setTocOpen] = useState(false)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  useEffect(() => {
    const onScroll = () => {
      const doc  = document.documentElement
      const pct  = (window.scrollY / (doc.scrollHeight - doc.clientHeight)) * 100
      setProgress(Math.min(pct, 100))

      const pos = window.scrollY + 130
      for (const s of sections) {
        const el = document.getElementById(s.id)
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActive(s.id)
          break
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
                Terms &amp;<span>Conditions</span>
              </motion.h1>
              <div className="legal-hero-meta">
                <span className="legal-meta-pill"><Clock size={14} /> Last updated: September 21, 2026</span>
                <span className="legal-meta-pill"><Shield size={14} /> Law Society of Ontario Licensed</span>
              </div>
            </div>
            <div className="legal-hero-icon-wrap">
              <Scale size={72} strokeWidth={1} />
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <div className="legal-intro-strip">
        <div className="container">
          <p className="legal-intro-text">
            These terms explain how you can use the Anytime Legal Services website and what to expect
            when you contact us before hiring our services. By using our website or getting in touch
            with us, you agree to these terms. Once you hire us, the details will be set out in a
            written retainer agreement.{' '}
            <strong>If there is any conflict between these terms and the signed agreement, the signed agreement takes priority.</strong>
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

            {/* Sidebar Nav */}
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

              <Sec id="who-we-are" num="01" icon={Users} title="Who We Are" index={0}>
                <p>
                  Anytime Legal Services Professional Corporation is a licensed paralegal firm
                  serving clients across Ontario. Our paralegals are licensed and regulated by the
                  Law Society of Ontario and follow its Paralegal Rules of Conduct.
                </p>
                <p>
                  In these terms, <strong>"we," "us,"</strong> and <strong>"our"</strong> refer to
                  Anytime Legal Services Professional Corporation.{' '}
                  <strong>"You"</strong> refers to the person or business contacting us or using our services.
                </p>
              </Sec>

              <Sec id="our-services" num="02" icon={Briefcase} title="Our Services" index={1}>
                <p>We provide the following legal services:</p>
                <ul className="legal-list">
                  {[
                    'Notary and commissioning services — oaths, affidavits, statutory declarations, certified copies, invitation letters, passport support, consent to travel letters, and Indian Consulate documents',
                    'Landlord and Tenant Board affidavits and representation',
                    'Traffic ticket defence — speeding, careless driving, CVOR matters, and demerit points',
                    'Small Claims Court — breach of contract, employment disputes, unpaid debts, negligence, property damage, and faulty goods or services',
                  ].map((item, i) => (
                    <li key={i}><span className="legal-list-bullet" />{item}</li>
                  ))}
                </ul>
              </Sec>

              <Sec id="website-info" num="03" icon={FileText} title="Website Information Is Not Legal Advice" index={2}>
                <div className="legal-callout legal-callout-blue">
                  <AlertCircle size={18} />
                  <p>The information on our website is for general and educational purposes only. It is <strong>not legal advice</strong> and should not replace advice about your specific situation.</p>
                </div>
                <p>
                  Laws can change and no two cases are exactly alike — please speak with a licensed
                  legal professional or us before acting on information found on our website.
                </p>
              </Sec>

              <Sec id="no-relationship" num="04" icon={AlertCircle} title="No Paralegal-Client Relationship Until You Hire Us" index={3}>
                <p>
                  Getting in touch through our website, phone, or email does{' '}
                  <strong>not automatically create a paralegal-client relationship.</strong>{' '}
                  That relationship begins once we have:
                </p>
                <ul className="legal-checklist">
                  <li><CheckCircle size={15} /> Confirmed we can act for you</li>
                  <li><CheckCircle size={15} /> Completed our conflict check</li>
                  <li><CheckCircle size={15} /> Had you sign a retainer agreement</li>
                </ul>
                <p>
                  We keep information you share confidential. However, until we have formally
                  agreed to act for you, we cannot provide legal advice or protect any deadlines
                  that may apply to your matter.
                </p>
              </Sec>

              <Sec id="what-we-help" num="05" icon={CheckCircle} title="What We Can and Can't Help With" index={4}>
                <p>Some matters fall outside the services paralegals in Ontario are licensed to provide, including:</p>
                <ul className="legal-list">
                  {['Most family law matters','Wills and estates','Real estate transactions','Serious criminal charges'].map((item, i) => (
                    <li key={i}><span className="legal-list-bullet" />{item}</li>
                  ))}
                </ul>
                <p>If we can't assist, we'll let you know and may suggest you speak with a lawyer or another appropriate professional.</p>
              </Sec>

              <Sec id="deadlines" num="06" icon={Clock} title="Deadlines Matter" index={5}>
                <div className="legal-callout legal-callout-gold">
                  <Clock size={18} />
                  <p>Many legal matters have strict deadlines — missing one can affect your options. Please contact us as early as possible.</p>
                </div>
                <ul className="legal-list">
                  <li><span className="legal-list-bullet" />You usually have <strong>15 days</strong> to answer a traffic ticket</li>
                  <li><span className="legal-list-bullet" />Claims and Landlord and Tenant Board applications have their own deadlines</li>
                </ul>
                <p>Until we have formally agreed to act for you, you remain responsible for keeping track of any deadlines.</p>
              </Sec>

              <Sec id="notary" num="07" icon={Scale} title="Notary and Commissioning Services" index={6}>
                <p>For most notary and commissioning appointments, please bring valid government-issued photo ID. If a document needs to be signed in front of us, please <strong>do not sign it beforehand.</strong></p>
                <div className="legal-note">
                  <p>Some documents for consulates, airlines, or government offices may have specific requirements. We cannot guarantee a third party will accept a document after notarization. For certified copies, bring the original document.</p>
                </div>
              </Sec>

              <Sec id="fees" num="08" icon={FileText} title="Fees and Payment" index={7}>
                <p>Our fees will be explained in a written retainer or fee agreement before we begin work. Some services are available at a flat fee.</p>
                <ul className="legal-list">
                  <li><span className="legal-list-bullet" />Advance funds are held <strong>in trust</strong> until earned, as required by the Law Society</li>
                  <li><span className="legal-list-bullet" />Court filing fees, service fees, and other disbursements are your responsibility</li>
                  <li><span className="legal-list-bullet" />Applicable taxes will be added</li>
                  <li><span className="legal-list-bullet" />Payment is due per the terms in your agreement</li>
                </ul>
              </Sec>

              <Sec id="responsibilities" num="09" icon={Users} title="Your Responsibilities" index={8}>
                <p>To help us serve you effectively, please:</p>
                <ul className="legal-checklist">
                  <li><CheckCircle size={15} /> Provide accurate and complete information</li>
                  <li><CheckCircle size={15} /> Send documents when requested</li>
                  <li><CheckCircle size={15} /> Respond to messages within a reasonable timeframe</li>
                  <li><CheckCircle size={15} /> Attend any required hearings or meetings</li>
                  <li><CheckCircle size={15} /> Notify us of any changes to your contact details</li>
                </ul>
              </Sec>

              <Sec id="no-guarantee" num="10" icon={AlertCircle} title="No Guarantee of Outcome" index={9}>
                <p>We will put substantial effort into your case, but we cannot guarantee any particular result. The outcome depends on:</p>
                <ul className="legal-list">
                  <li><span className="legal-list-bullet" />The facts and evidence of your case</li>
                  <li><span className="legal-list-bullet" />The applicable law</li>
                  <li><span className="legal-list-bullet" />Decisions made by courts, tribunals, and other relevant bodies</li>
                </ul>
              </Sec>

              <Sec id="confidentiality" num="11" icon={Lock} title="Confidentiality and Privacy" index={10}>
                <p>The information you give us is confidential and covered by paralegal-client privilege, except in rare instances where the law or our professional obligations require otherwise.</p>
                <p>Your personal information is handled in accordance with our Privacy Policy.</p>
              </Sec>

              <Sec id="ending-services" num="12" icon={FileText} title="Ending Our Services" index={11}>
                <p>You can end our services at any time. We may also withdraw from representing you in limited circumstances permitted by the Paralegal Rules of Conduct.</p>
                <p>Where required, we'll provide reasonable notice. You remain responsible for fees and costs for work completed before our services end.</p>
              </Sec>

              <Sec id="professional" num="13" icon={Shield} title="Our Professional Standards" index={12}>
                <p>We maintain the professional liability insurance required by the Law Society. If you have a concern, please let us know so we have an opportunity to address it.</p>
                <div className="legal-note">
                  <p>You can also contact the <strong>Law Society of Ontario</strong> if you have a professional conduct concern.</p>
                </div>
              </Sec>

              <Sec id="limitation" num="14" icon={Scale} title="Limitation of Liability" index={13}>
                <p>To the extent permitted by law, we're not responsible for indirect or consequential losses or for issues caused by circumstances outside our reasonable control.</p>
                <p>Nothing in these terms limits any duty we owe you under the Paralegal Rules of Conduct or any rights you have under applicable law.</p>
              </Sec>

              <Sec id="governing-law" num="15" icon={FileText} title="Website Content &amp; Governing Law" index={14}>
                <p>The content on our website belongs to us unless stated otherwise and may not be copied, reproduced, or reused without permission.</p>
                <p>These terms are governed by the laws of the <strong>Province of Ontario</strong> and the laws of Canada that apply there.</p>
              </Sec>

              <Sec id="changes" num="16" icon={FileText} title="Changes" index={15}>
                <p>We may update these terms from time to time. The date at the top of this page shows when the current version was last updated.</p>
              </Sec>

              <Sec id="contact" num="17" icon={Phone} title="Contact Us" index={16}>
                <p>If you have any questions about these terms, please reach out:</p>
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

function Sec({ id, num, icon: Icon, title, index, children }) {
  return (
    <motion.section
      id={id}
      className="legal-section"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: 0.05 }}
    >
      <span className="legal-section-num" aria-hidden="true">{num}</span>
      <div className="legal-section-head">
        <div className="legal-section-icon-box"><Icon size={20} /></div>
        <h2 className="legal-section-title" dangerouslySetInnerHTML={{ __html: title }} />
      </div>
      <div className="legal-section-body">{children}</div>
    </motion.section>
  )
}
