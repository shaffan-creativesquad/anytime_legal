import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import './ServiceFAQ.css'

const faqs = [
  {
    q: 'What is the difference between a notary public and a commissioner of oaths?',
    a: 'A commissioner for taking affidavits, often called a commissioner of oaths, can administer oaths and take affidavits, declarations, and affirmations. A notary public can do all of that and can also certify that copies are true copies of originals and verify signatures on documents.',
  },
  {
    q: 'Where can I find a notary public near me?',
    a: 'Anytime Legal Services provides clients throughout Ontario with service by appointment (flexible hours to suit your workday). If you\'re looking for a notary public near me, just call or message us with the type of document and your deadline, and we\'ll get you a time that works.',
  },
  {
    q: 'What should I bring for public notary services?',
    a: 'Bring the original unsigned document, your valid government-issued photo ID, and the originals of everything you need to be copied and certified. Everyone who has to sign or swear needs to be there with their own ID. If you\'re missing any of those, you\'ll generally be rebooked.',
  },
  {
    q: 'Can I sign my document before the appointment?',
    a: 'No. An affidavit or statutory declaration must be signed in front of the Commissioner or Notary, having first taken an oath or affirmation that the contents are true. A document that\'s been signed in advance will generally need to be signed again in person or re-prepared.',
  },
  {
    q: 'Do I need a consent to travel letter for my child?',
    a: 'It\'s not a legal requirement at all, but the Government of Canada would strongly recommend that you have one if a child is travelling alone, with only one parent or with another adult. Border officers and airlines may well ask for it, and a notarised letter is far more persuasive than an unsigned one.',
  },
  {
    q: 'Will my notarised document be accepted outside Canada?',
    a: 'That\'s down to the destination, really. A lot of countries will accept an apostille issued following notarisation, whereas others will still require it to be legalised via their embassy or consulate. Always check the requirements of the receiving authority first; we\'ll do the notarial bit correctly.',
  },
  {
    q: 'Can you help with Indian Consulate documents?',
    a: 'Yes, we do prepare and notarise the affidavits, declarations, and attested copies that are commonly required for Indian consular services (OCI, passport applications, etc.). The consulate keeps its checklists under review, so always check the current list prior to your appointment and take with you all the documents that are on it.',
  },
  {
    q: 'How quickly can I get public notary services?',
    a: 'The vast majority of standard requirements (an affidavit, a consent letter, a set of certified copies, etc.) can be dealt with in one appointment. Our public notary services are by appointment only and operate on flexible hours, so we can often meet tight deadlines with very short notice.',
  },
]

const PublicNotaryFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="service-faq section">
      <div className="container">
        <div className="service-faq-header">
          <span className="section-subtitle">FAQs</span>
          <h2>Before You Book Your Appointment</h2>
        </div>
        <div className="service-faq-list">
          {faqs.map((item, i) => (
            <div key={i} className={`faq-item ${openIndex === i ? 'faq-item--open' : ''}`}>
              <button className="faq-question" onClick={() => toggle(i)}>
                <span>{item.q}</span>
                <ChevronDown size={20} className={`faq-chevron ${openIndex === i ? 'open' : ''}`} />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p>{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PublicNotaryFAQ
