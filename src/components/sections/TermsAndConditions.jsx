import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Scale,
  Shield,
  Clock,
  Phone,
  Mail,
  ChevronRight,
  ArrowLeft,
  FileText,
  AlertCircle,
  CheckCircle,
  Users,
  Briefcase,
  Lock,
} from 'lucide-react'
import './TermsAndConditions.css'

const sections = [
  { id: 'who-we-are', label: 'Who We Are', icon: Users },
  { id: 'our-services', label: 'Our Services', icon: Briefcase },
  { id: 'website-info', label: 'Website Information', icon: FileText },
  { id: 'no-relationship', label: 'No Paralegal-Client Relationship', icon: AlertCircle },
  { id: 'what-we-help', label: 'What We Can Help With', icon: CheckCircle },
  { id: 'deadlines', label: 'Deadlines Matter', icon: Clock },
  { id: 'notary', label: 'Notary & Commissioning', icon: Scale },
  { id: 'fees', label: 'Fees and Payment', icon: FileText },
  { id: 'responsibilities', label: 'Your Responsibilities', icon: Users },
  { id: 'no-guarantee', label: 'No Guarantee of Outcome', icon: AlertCircle },
  { id: 'confidentiality', label: 'Confidentiality & Privacy', icon: Lock },
  { id: 'ending-services', label: 'Ending Our Services', icon: FileText },
  { id: 'professional-standards', label: 'Professional Standards', icon: Shield },
  { id: 'limitation', label: 'Limitation of Liability', icon: Scale },
  { id: 'governing-law', label: 'Governing Law', icon: FileText },
  { id: 'changes', label: 'Changes', icon: FileText },
  { id: 'contact', label: 'Contact Us', icon: Phone },
]

const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState('who-we-are')
  const [isTocOpen, setIsTocOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120
      for (const section of sections) {
        const el = document.getElementById(section.id)
        if (el) {
          const { offsetTop, offsetHeight } = el
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const offset = el.offsetTop - 100
      window.scrollTo({ top: offset, behavior: 'smooth' })
    }
    setIsTocOpen(false)
  }

  return (
    <div className="terms-page">
      {/* Hero Banner */}
      <section className="terms-hero">
        <div className="terms-hero-overlay" />
        <div className="container">
          <motion.div
            className="terms-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="terms-back-link">
              <ArrowLeft size={18} />
              Back to Home
            </Link>
            <h1 className="terms-hero-title">
              Terms &amp; <span className="terms-hero-accent">Conditions</span>
            </h1>
            <p className="terms-hero-subtitle">
              Anytime Legal Services Professional Corporation
            </p>
            <div className="terms-hero-meta">
              <span className="terms-meta-item">
                <Clock size={15} />
                Last updated: September 21, 2026
              </span>
              <span className="terms-meta-divider" />
              <span className="terms-meta-item">
                <Shield size={15} />
                Law Society of Ontario Licensed
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Banner */}
      <div className="terms-intro-banner">
        <div className="container">
          <div className="terms-intro-inner">
            <AlertCircle size={20} className="terms-intro-icon" />
            <p>
              These terms explain how you can use the Anytime Legal Services website and what to expect
              when you contact us before hiring our services. By using our website or getting in touch
              with us, you agree to these terms. Once you hire us, we will set out the details of our
              services in a written retainer agreement. If there is any conflict between these terms and
              the signed agreement, the signed agreement will take priority.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="terms-body">
        <div className="container">
          <div className="terms-layout">

            {/* Sidebar TOC */}
            <aside className="terms-sidebar">
              <div className="terms-toc-card">
                <h3 className="terms-toc-title">
                  <FileText size={16} />
                  Table of Contents
                </h3>
                <nav className="terms-toc-nav">
                  {sections.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => scrollToSection(s.id)}
                      className={`terms-toc-item ${activeSection === s.id ? 'active' : ''}`}
                    >
                      <ChevronRight size={13} className="terms-toc-arrow" />
                      {s.label}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Mobile TOC Toggle */}
            <div className="terms-mobile-toc">
              <button
                className="terms-mobile-toc-toggle"
                onClick={() => setIsTocOpen(!isTocOpen)}
              >
                <FileText size={16} />
                Table of Contents
                <ChevronRight
                  size={16}
                  className={`terms-mobile-toc-chevron ${isTocOpen ? 'open' : ''}`}
                />
              </button>
              {isTocOpen && (
                <div className="terms-mobile-toc-menu">
                  {sections.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => scrollToSection(s.id)}
                      className={`terms-toc-item ${activeSection === s.id ? 'active' : ''}`}
                    >
                      <ChevronRight size={13} className="terms-toc-arrow" />
                      {s.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Content */}
            <main className="terms-content">

              <TermsSection id="who-we-are" icon={Users} title="Who We Are">
                <p>
                  Anytime Legal Services Professional Corporation is a licensed paralegal firm serving
                  clients across Ontario. Our paralegals are licensed and regulated by the Law Society
                  of Ontario and follow its Paralegal Rules of Conduct.
                </p>
                <p>
                  In these terms, <strong>"we," "us,"</strong> and <strong>"our"</strong> refer to
                  Anytime Legal Services Professional Corporation. <strong>"You"</strong> refers to
                  the person or business contacting us or using our services.
                </p>
              </TermsSection>

              <TermsSection id="our-services" icon={Briefcase} title="Our Services">
                <p>We provide the following legal services:</p>
                <ul className="terms-list">
                  <li>Notary and commissioning services, including commissioning oaths, notarizing documents, affidavits, statutory declarations, certified copies, invitation letters, passport application support, consent to travel letters, and documents for the Indian Consulate</li>
                  <li>Landlord and Tenant Board affidavits and representation</li>
                  <li>Traffic ticket defence, including speeding, careless driving, CVOR matters, and demerit points</li>
                  <li>Small Claims Court matters, including breach of contract, employment disputes, unpaid debts, negligence, property damage, and faulty goods or services</li>
                </ul>
              </TermsSection>

              <TermsSection id="website-info" icon={FileText} title="Website Information Is Not Legal Advice">
                <div className="terms-highlight-box">
                  <AlertCircle size={18} />
                  <p>
                    The information on our website is provided for general and educational purposes only.
                    It is <strong>not legal advice</strong> and should not be treated as a substitute
                    for advice about your particular situation.
                  </p>
                </div>
                <p>
                  Laws can change, and no two cases are exactly alike, so please speak with another
                  licensed legal professional or us before taking action based on information found
                  on our website.
                </p>
              </TermsSection>

              <TermsSection id="no-relationship" icon={AlertCircle} title="No Paralegal-Client Relationship Until You Hire Us">
                <p>
                  Getting in touch with us through our website, by phone, or by email does{' '}
                  <strong>not automatically create a paralegal-client relationship.</strong> That
                  relationship begins once we've:
                </p>
                <ul className="terms-checklist">
                  <li><CheckCircle size={16} /> Confirmed that we can act for you</li>
                  <li><CheckCircle size={16} /> Completed our conflict check</li>
                  <li><CheckCircle size={16} /> Had you sign a retainer agreement</li>
                </ul>
                <p>
                  We keep information you share with us about a potential matter confidential.
                  However, until we have formally agreed to act for you, we cannot provide legal
                  advice or take responsibility for protecting any deadlines that may apply to
                  your matter.
                </p>
              </TermsSection>

              <TermsSection id="what-we-help" icon={CheckCircle} title="What We Can and Can't Help With">
                <p>
                  Paralegals in Ontario are licensed to provide legal services in specific areas.
                  Some matters fall outside the services we're licensed to provide, including:
                </p>
                <ul className="terms-list terms-list-cross">
                  <li>Most family law matters</li>
                  <li>Wills and estates</li>
                  <li>Real estate transactions</li>
                  <li>Serious criminal charges</li>
                </ul>
                <p>
                  If we can't assist with your matter, we'll let you know and may suggest that
                  you speak with a lawyer or another appropriate professional.
                </p>
              </TermsSection>

              <TermsSection id="deadlines" icon={Clock} title="Deadlines Matter">
                <div className="terms-highlight-box terms-highlight-warning">
                  <Clock size={18} />
                  <p>
                    Many legal matters have strict deadlines, and missing one can affect your options.
                    Please contact us as early as possible if you need help.
                  </p>
                </div>
                <p>For example:</p>
                <ul className="terms-list">
                  <li>You usually have <strong>15 days</strong> to answer a traffic ticket</li>
                  <li>Claims and Landlord and Tenant Board applications have their own deadlines</li>
                </ul>
                <p>
                  Until we have formally agreed to act for you, you remain responsible for keeping
                  track of and meeting any deadlines that apply to your matter.
                </p>
              </TermsSection>

              <TermsSection id="notary" icon={Scale} title="Notary and Commissioning Services">
                <p>
                  For most notary and commissioning appointments, please bring valid
                  government-issued photo ID. If a document needs to be signed in front of us,
                  please <strong>do not sign it beforehand.</strong>
                </p>
                <p>
                  We verify identities and witness signatures as required. Unless we've been hired
                  to provide legal advice, we do not advise you about the contents of documents
                  you ask us to commission or notarize.
                </p>
                <div className="terms-info-box">
                  <p>
                    Some documents, including documents intended for consulates, airlines, or
                    government offices, may have specific requirements. We cannot guarantee that
                    a third party will accept a document after it has been notarized or
                    commissioned. For certified copies, please bring the original document.
                  </p>
                </div>
              </TermsSection>

              <TermsSection id="fees" icon={FileText} title="Fees and Payment">
                <p>
                  Our fees will be explained in a written retainer or fee agreement before we
                  begin work. Some of our services are also available at a flat fee.
                </p>
                <ul className="terms-list">
                  <li>We hold any funds you pay in advance <strong>in trust</strong> until they are earned, as required by the Law Society</li>
                  <li>Costs such as court filing fees, service fees, and other disbursements are separate from our fees and are your responsibility</li>
                  <li>Applicable taxes will also be added</li>
                  <li>Payment is due according to the terms set out in your agreement</li>
                </ul>
              </TermsSection>

              <TermsSection id="responsibilities" icon={Users} title="Your Responsibilities">
                <p>To help us serve you effectively, please:</p>
                <ul className="terms-checklist">
                  <li><CheckCircle size={16} /> Make sure the information you provide is accurate and complete</li>
                  <li><CheckCircle size={16} /> Send us the documents when we request them</li>
                  <li><CheckCircle size={16} /> Respond to our messages within a reasonable time frame</li>
                  <li><CheckCircle size={16} /> Attend any hearings or meetings that are required of you</li>
                  <li><CheckCircle size={16} /> Let us know if there is any change to your contact details</li>
                </ul>
              </TermsSection>

              <TermsSection id="no-guarantee" icon={AlertCircle} title="No Guarantee of Outcome">
                <p>
                  We will put substantial effort into your case, but we cannot guarantee any
                  particular result. The outcome depends on:
                </p>
                <ul className="terms-list">
                  <li>The facts and evidence of your case</li>
                  <li>The applicable law</li>
                  <li>The decisions of the courts, tribunals, and other relevant bodies</li>
                </ul>
              </TermsSection>

              <TermsSection id="confidentiality" icon={Lock} title="Confidentiality and Privacy">
                <p>
                  The information which you give us is confidential and is covered by the
                  privilege between paralegals and their clients, with the exception of those
                  rare instances in which the law or our professional obligations require it.
                </p>
                <p>
                  Your personal information is dealt with in accordance with our Privacy Policy.
                </p>
              </TermsSection>

              <TermsSection id="ending-services" icon={FileText} title="Ending Our Services">
                <p>
                  You can choose to end our services at any time. We may also withdraw from
                  representing you in the limited circumstances permitted by the Paralegal
                  Rules of Conduct.
                </p>
                <p>
                  Where required, we'll provide reasonable notice so you have an opportunity
                  to protect your interests. You remain responsible for fees and costs for
                  work completed before our services end.
                </p>
              </TermsSection>

              <TermsSection id="professional-standards" icon={Shield} title="Our Professional Standards">
                <p>
                  We maintain the professional liability insurance required by the Law Society.
                  If you have a concern about our service, please let us know so we have an
                  opportunity to address it.
                </p>
                <div className="terms-info-box">
                  <p>
                    You can also contact the{' '}
                    <strong>Law Society of Ontario</strong> if you have a professional
                    conduct concern.
                  </p>
                </div>
              </TermsSection>

              <TermsSection id="limitation" icon={Scale} title="Limitation of Liability">
                <p>
                  To the extent permitted by law, we're not responsible for indirect or
                  consequential losses or for issues caused by circumstances outside our
                  reasonable control.
                </p>
                <p>
                  Nothing in these terms is intended to limit any duty we owe you under the
                  Paralegal Rules of Conduct or any rights you may have under applicable law.
                </p>
              </TermsSection>

              <TermsSection id="governing-law" icon={FileText} title="Website Content &amp; Governing Law">
                <p>
                  The content on our website belongs to us unless stated otherwise and may not
                  be copied, reproduced, or reused without our permission.
                </p>
                <p>
                  These terms are governed by the laws of the{' '}
                  <strong>Province of Ontario</strong> and the laws of Canada that apply there.
                </p>
              </TermsSection>

              <TermsSection id="changes" icon={FileText} title="Changes">
                <p>
                  We may update these terms from time to time. The date at the top of this
                  page shows when the current version was last updated.
                </p>
              </TermsSection>

              <TermsSection id="contact" icon={Phone} title="Contact Us">
                <p>If you have any questions about these terms, please reach out:</p>
                <div className="terms-contact-grid">
                  <a href="tel:+19054510300" className="terms-contact-item">
                    <div className="terms-contact-icon">
                      <Phone size={20} />
                    </div>
                    <div>
                      <span className="terms-contact-label">Phone</span>
                      <span className="terms-contact-value">(905) 451-0300</span>
                    </div>
                  </a>
                  <a href="tel:+12268889800" className="terms-contact-item">
                    <div className="terms-contact-icon">
                      <Phone size={20} />
                    </div>
                    <div>
                      <span className="terms-contact-label">Alternate</span>
                      <span className="terms-contact-value">(226) 888-9800</span>
                    </div>
                  </a>
                  <a href="mailto:visho@anytimelegalservices.ca" className="terms-contact-item">
                    <div className="terms-contact-icon">
                      <Mail size={20} />
                    </div>
                    <div>
                      <span className="terms-contact-label">Email</span>
                      <span className="terms-contact-value">visho@anytimelegalservices.ca</span>
                    </div>
                  </a>
                </div>
                <div className="terms-back-home">
                  <Link to="/" className="btn btn-primary">
                    <ArrowLeft size={16} />
                    Return to Home
                  </Link>
                </div>
              </TermsSection>

            </main>
          </div>
        </div>
      </div>
    </div>
  )
}

const TermsSection = ({ id, icon: Icon, title, children }) => (
  <motion.section
    id={id}
    className="terms-section"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.5 }}
  >
    <div className="terms-section-header">
      <div className="terms-section-icon">
        <Icon size={20} />
      </div>
      <h2 className="terms-section-title" dangerouslySetInnerHTML={{ __html: title }} />
    </div>
    <div className="terms-section-body">{children}</div>
  </motion.section>
)

export default TermsAndConditions
