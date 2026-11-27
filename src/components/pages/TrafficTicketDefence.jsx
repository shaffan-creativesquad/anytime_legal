import React from 'react'
import { Helmet } from 'react-helmet'
import HeroTrafficTicket from "../sections/HeroTrafficTicket";
import ImgByText from "../sections/ImgByText";
import Contact from '../sections/Contact'
import Stats from '../sections/Stats'
import TrafficTicketFAQ from '../sections/TrafficTicketFAQ'

function TrafficTicketDefence() {
  return (
    <div>
      <Helmet>
        <title>Traffic Ticket Defence Ontario | Speeding & Careless Driving</title>
        <meta name="description" content="Fight speeding, careless driving and HTA tickets in Ontario with experienced defence. Protect your driving record and reduce penalties. Call for help today." />
      </Helmet>
      <HeroTrafficTicket />

      <ImgByText
        sideImg="/images/justice.avif"
        subHeading="Your Options"
        heading="You Have 15 Days to Choose Your Next Move"
        para="Every offence notice gives you three options: pay, request an early resolution meeting (where available), or ask for a trial. Paying the ticket is a guilty plea. Before you go it alone and fight traffic ticket charges, let's have a look at the disclosure, the wording of the charge, and your best route."
        bulletList={[
          "Speeding tickets",
          "Careless driving charges",
          "Highway Traffic Act violations",
        ]}
        imgRight={false}
      />

      <Stats />

      <ImgByText
        sideImg="/images/justice2.0.avif"
        subHeading="Commercial Drivers"
        heading="Keep Your Licence, Your CVOR and Your Income"
        para="For truck drivers and fleet operators, one conviction can have an impact on both your driver's abstract and your company's CVOR safety record. Our traffic ticket defence Ontario strategy takes that business impact into account and will go for a withdrawal, a reduced charge, or fewer points where the evidence supports it."
        bulletList={[
          "CVOR and commercial vehicle offences",
          "Demerit point reduction strategies",
          "Early resolution and trial representation",
        ]}
        imgRight={true}
      />

      <TrafficTicketFAQ />

      <Contact />
    </div>
  )
}

export default TrafficTicketDefence
