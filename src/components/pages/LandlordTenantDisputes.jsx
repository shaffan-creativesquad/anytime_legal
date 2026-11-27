import React from 'react'
import HeroLandlordTenant from "../sections/HeroLandlordTenant";
import ImgByText from "../sections/ImgByText";
import Contact from '../sections/Contact'
import Stats from '../sections/Stats'
import ServiceFAQ from '../sections/ServiceFAQ'

function LandlordTenantDisputes() {
  return (
    <div>
      <HeroLandlordTenant />

      <ImgByText
        sideImg="/images/justice.avif"
        subHeading="For Landlords"
        heading="Recover Rent and Regain Your Unit the Right Way"
        para="Under the Residential Tenancies Act, one incorrect date on an N4 or N12 will see your whole case get restarted. Our LTB paralegal team will serve the correct notice, file the appropriate L1 or L2 application, and present your case with a clean rent ledger and proof of service."
        bulletList={[
          "N4, N5, N8 and N12 notices",
          "L1 and L2 eviction applications",
          "Rent arrears and damage claims",
        ]}
        imgRight={false}
      />

      <Stats />

      <ImgByText
        sideImg="/images/justice2.0.avif"
        subHeading="For Tenants"
        heading="Stand Your Ground When Your Home Is at Risk"
        para="A notice is not an eviction. Only a Board order (enforced by the Court Enforcement Office (Sheriff) will remove you. As the landlord tenant paralegal in Ontario, we will challenge defective notices, file the T2 and T6 applications, and pursue bad-faith eviction claims."
        bulletList={[
          "T2 tenant rights and harassment claims",
          "T6 maintenance and repair applications",
          "T5 bad-faith eviction claims",
        ]}
        imgRight={true}
      />

      <ServiceFAQ />

      <Contact />

    </div>
  )
}

export default LandlordTenantDisputes
