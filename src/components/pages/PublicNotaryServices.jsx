import React from 'react'
import { Helmet } from 'react-helmet'
import HeroPublicNotary from "../sections/HeroPublicNotary";
import ImgByText from "../sections/ImgByText";
import Contact from '../sections/Contact'
import Stats from '../sections/Stats'
import PublicNotaryFAQ from '../sections/PublicNotaryFAQ'

function PublicNotaryServices() {
  return (
    <div>
      <Helmet>
        <title>Public Notary Ontario | Affidavits, Declarations & Copies</title>
        <meta name="description" content="Certified public notary services in Ontario: document authentication, affidavits, statutory declarations, certified copies and legal certifications." />
      </Helmet>
      <HeroPublicNotary />

      <ImgByText
        sideImg="/images/justice.avif"
        subHeading="Notarization & Certification"
        heading="Certified Copies and Signatures Others Can Rely On"
        para="When you need a document to be notarised, certified, or authenticated, every detail is important. Our notary public Ontario services will notarise your documents, prepare your certified true copies, and deal with your document authentication, with each page being reviewed in advance and anything that a receiving office might have a question about being flagged."
        bulletList={[
          "Notarised documents and legal certifications",
          "Certified true copies of originals",
          "Document authentication",
        ]}
        imgRight={false}
      />

      <Stats />

      <ImgByText
        sideImg="/images/justice2.0.avif"
        subHeading="Oaths & Travel Documents"
        heading="Affidavits, Declarations and Letters Sworn Properly"
        para="As a commissioner of oaths Ontario residents count on, we administer oaths and affirmations for affidavits and statutory declarations. We also prepare and commission invitation letters, consent to travel letters for children, passport supporting documents, and paperwork requested by the Indian Consulate."
        bulletList={[
          "Affidavits and statutory declarations",
          "Invitation and consent to travel letters",
          "Passport and Indian Consulate documents",
        ]}
        imgRight={true}
      />

      <PublicNotaryFAQ />

      <Contact />
    </div>
  )
}

export default PublicNotaryServices
