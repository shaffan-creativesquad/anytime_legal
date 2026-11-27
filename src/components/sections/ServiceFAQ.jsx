import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import './ServiceFAQ.css'

const faqs = [
  {
    q: 'Can a landlord and tenant paralegal represent me at my LTB hearing?',
    a: 'Yes. Paralegals licensed by the Law Society of Ontario are authorised to represent landlords and tenants before the Landlord and Tenant Board. We prepare your filings, we speak on your behalf at the hearing, we negotiate with the other side, and we participate in any mediation. You never go before the Board on your own.',
  },
  {
    q: 'Why hire a landlord tenant board paralegal in Ontario instead of a lawyer?',
    a: 'LTB disputes fall squarely within a paralegal\'s licensed scope of practice. A landlord tenant board paralegal in Ontario works in this tribunal week after week, knows its forms and procedures, and is often a more cost-effective choice than retaining a lawyer for the same hearing.',
  },
  {
    q: 'My landlord served me an N4. Do I have to move out?',
    a: 'No. An N4 is a notice, not an eviction order. In the majority of cases, if you pay everything due (including any rent that has come due since the N4 was issued) prior to the landlord making an L1 application, that will in effect void the L1. If the landlord does apply, you will get a Notice of Hearing, and you will then be in a position to put in issues such as repairs or a payment plan.',
  },
  {
    q: 'How long does an eviction take at the Landlord and Tenant Board?',
    a: 'There is no fixed timeline. It will vary according to the type of application, the Board\'s schedule, and whether the tenant disputes it. Errors in the notice or in service are the most frequent cause of avoidable delay, and that\'s why every form is checked prior to filing.',
  },
  {
    q: 'Can my landlord evict me so a family member can move in?',
    a: 'A landlord can serve an N12 when they, their spouse, child, parent, or caregiver genuinely intend to live in the unit for at least one year. The landlord generally owes one month\'s rent in compensation. If the unit is not actually occupied as claimed, the tenant may file a T5 bad-faith application.',
  },
  {
    q: 'What can I do if my landlord refuses to make repairs?',
    a: 'Most Landlord and Tenant Board hearings are now held by video conference. A party can ask for a different hearing format if video doesn\'t work for them. We prepare your evidence and witnesses so your case comes across clearly on screen, just as it would in a hearing room.',
  },
  {
    q: 'Are LTB hearings held in person?',
    a: 'Most Landlord and Tenant Board hearings are now held by video conference. A party can ask for a different hearing format if video doesn\'t work for them. We prepare your evidence and witnesses so your case comes across clearly on screen, just as it would in a hearing room.',
  },
  {
    q: 'What should I bring to a consultation with a landlord and tenant paralegal?',
    a: 'Bring your lease, every notice or application you\'ve ever received or served, your rent receipts or a rent ledger, photos of the unit, and any texts or emails you\'ve had with the other party. With that in hand, your landlord and tenant paralegal can assess your position in the free 30-minute consultation.',
  },
]

const ServiceFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="service-faq section">
      <div className="container">
        <div className="service-faq-header">
          <span className="section-subtitle">FAQs</span>
          <h2>Answers Before Your Hearing</h2>
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

export default ServiceFAQ
