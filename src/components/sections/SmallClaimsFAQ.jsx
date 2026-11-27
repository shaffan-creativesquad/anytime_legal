import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import './ServiceFAQ.css'

const faqs = [
  {
    q: 'What is the maximum I can claim in Ontario Small Claims Court?',
    a: 'The limit is $50,000, not counting interest and costs. If your claim is worth more, you can either give up the excess to stay in Small Claims Court, where fees are lower and the process is faster, or start your action in the Superior Court of Justice instead.',
  },
  {
    q: 'Can a small claims court paralegal in Ontario represent me at trial?',
    a: 'Yes. Paralegals licensed by the Law Society of Ontario are permitted to represent plaintiffs and defendants at every stage of a Small Claims Court matter. That includes preparing the claim or Defence, attending the settlement conference, arguing motions, examining witnesses at trial and enforcing the judgment thereafter.',
  },
  {
    q: 'How long do I have to sue someone in Ontario?',
    a: 'Under the Limitations Act, 2002, the basic time limit is two years from the day you knew, or reasonably ought to have known, of the loss. There are, of course, some exceptions to that. Once the time limit has expired, a claim is absolutely barred, so it\'s worth getting advice as early as possible.',
  },
  {
    q: 'What happens at a settlement conference?',
    a: 'Once a defence is filed, the court will schedule a mandatory settlement conference (usually within 90 days). A deputy judge will assist the parties to settle or to narrow the issues. The documents you\'re relying on will need to be served and filed at least 14 days in advance, so you need to be well prepared well before the conference.',
  },
  {
    q: 'Can a small claims court paralegal help me collect after I win?',
    a: 'Yes, a judgment is only of any value if it\'s paid. If the debtor ignores it, we can go down the route of wage or bank account garnishment, a writ of seizure and sale of property, or an examination hearing where the debtor is required to disclose their income and assets under oath.',
  },
  {
    q: 'Can I file a Small Claims Court claim online?',
    a: 'Yes, claims can be filed online in Ontario as well as in person or by mail to the court office. Filing is just the first step, though. The claim has to be properly served on each defendant and proof of service filed before the case can proceed.',
  },
  {
    q: 'Can I recover my legal costs if I win?',
    a: 'The judge may make the loser pay some of your costs (including a representation fee), but that is subject to the cost rules in the Small Claims Court and is not guaranteed. A reasonable offer to settle early can also be of benefit in terms of costs.',
  },
  {
    q: 'Why hire a small claims court paralegal instead of going it alone?',
    a: 'Small Claims Court is meant to be accessible, but cases are still lost through missed deadlines, weak evidence, and bad pleadings. A small claims court paralegal will present your case in the form the court wants and will speak with the confidence that comes from going through that process on a regular basis.',
  },
]

const SmallClaimsFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="service-faq section">
      <div className="container">
        <div className="service-faq-header">
          <span className="section-subtitle">FAQs</span>
          <h2>Small Claims, Clearly Explained</h2>
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

export default SmallClaimsFAQ
