import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import './ServiceFAQ.css'

const faqs = [
  {
    q: 'How long do I have to respond to a traffic ticket in Ontario?',
    a: 'You have 15 days from receiving the ticket to choose one of the options printed on it. If you don\'t respond in that window, you can be deemed not to dispute the charge, and a justice of the peace may convict you without a hearing.',
  },
  {
    q: 'Should I just pay the ticket and move on?',
    a: 'Paying is a guilty plea. It goes on your driving record; the demerit points are added by the Ministry of Transportation, and your insurer will see it at renewal. It looks like a quick fix, but the long-term cost is often a hell of a lot more than the fine.',
  },
  {
    q: 'Can a traffic ticket paralegal in Ontario go to court for me?',
    a: 'Yes. A licensed paralegal can represent you in respect of Highway Traffic Act matters in provincial offences court. In many cases, you won\'t even need to attend at all, which is a big time saver and avoids the need for you to go through the officer in cross-examination.',
  },
  {
    q: 'Can a traffic ticket paralegal reduce my demerit points?',
    a: 'The court can\'t alter the points attached to a conviction (those are set by law and applied by the Ministry). What can be changed is the charge. You could be negotiating with the prosecutor on a lower speed or a different offence and, as a result, end up with fewer points or indeed no points at all.',
  },
  {
    q: 'What is an early resolution meeting?',
    a: 'It\'s a meeting with the prosecutor prior to trial to discuss your charge. The prosecutor may be prepared to offer you a reduced speed, a lesser charge, or a lower fine in return for a guilty plea. Not all municipalities will have this option, so you should check the back of your ticket to see what is available.',
  },
  {
    q: 'How serious is a careless driving charge?',
    a: 'Careless driving under s 130 of the Highway Traffic Act is a 6 demerit point offence on conviction, carries a significant fine, and can result in a licence suspension. Insurers treat it as a very serious conviction, and it is one of the offences which is well worth defending properly due to its weight.',
  },
  {
    q: 'How many demerit points lead to a suspension?',
    a: 'Fully licensed drivers receive a warning letter at 2 to 8 points, may be called to an interview at 9 to 14 points, and face a 30-day suspension at 15 points. Novice drivers on G1, G2, M1 or M2 licences face consequences at much lower totals.',
  },
  {
    q: 'Is it worth hiring a traffic ticket paralegal for a minor speeding ticket?',
    a: 'Often yes. Even a minor conviction remains on your driving record for three years and will impact your insurance at renewal. A traffic ticket paralegal will be looking for disclosure gaps, procedural errors, and any negotiation points that you may not be aware of.',
  },
]

const TrafficTicketFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="service-faq section">
      <div className="container">
        <div className="service-faq-header">
          <span className="section-subtitle">FAQs</span>
          <h2>Know Your Rights on the Road</h2>
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

export default TrafficTicketFAQ
