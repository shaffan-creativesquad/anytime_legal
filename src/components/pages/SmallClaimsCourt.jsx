import React from 'react'
import { Helmet } from 'react-helmet'
import HeroSmallClaims from "../sections/HeroSmallClaims";
import ImgByText from "../sections/ImgByText";
import Contact from '../sections/Contact'
import Stats from '../sections/Stats'
import SmallClaimsFAQ from '../sections/SmallClaimsFAQ'

function SmallClaimsCourt() {
  return (
    <div>
      <Helmet>
        <title>Small Claims Court Ontario | Debt & Contract Disputes</title>
        <meta name="description" content="Representation in Ontario Small Claims Court for civil claims up to $50,000: debt collection, contract disputes and property damage claims. Get help today." />
      </Helmet>
      <HeroSmallClaims />

      <ImgByText
        sideImg="/images/justice.avif"
        subHeading="Starting a Claim"
        heading="Turn an Unpaid Debt into an Enforceable Judgment"
        para="Most claims must be started within two years of discovering the problem. We issue your Plaintiff's Claim, serve it properly, and move the file through settlement conference to trial. As the debt collection paralegal Ontario businesses rely on, we then enforce through garnishment, writs, and examination hearings."
        bulletList={[
          "Unpaid invoices, loans and NSF cheques",
          "Breach of contract and faulty work",
          "Property damage and negligence claims",
        ]}
        imgRight={false}
      />

      <Stats />

      <ImgByText
        sideImg="/images/justice2.0.avif"
        subHeading="Defending a Claim"
        heading="Been Served? Your 20-Day Clock Has Started"
        para="A defence must be filed within 20 days of being served, or the plaintiff can apply to have you noted in default. Our small claims court representation includes drafting your defence, filing a defendant's claim where you have one, and negotiating a fair settlement prior to trial."
        bulletList={[
          "Defence and Defendant's Claim filings",
          "Settlement conference advocacy",
          "Trial preparation, evidence and witnesses",
        ]}
        imgRight={true}
      />

      <SmallClaimsFAQ />

      <Contact />

    </div>
  )
}

export default SmallClaimsCourt
