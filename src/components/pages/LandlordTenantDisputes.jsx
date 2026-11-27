import React from 'react'
import HeroLandlordTenant from "../sections/HeroLandlordTenant";
import ImgByText from "../sections/ImgByText";
import Contact from '../sections/Contact'
import Stats from '../sections/Stats'

function LandlordTenantDisputes() {
  return (
    <div>
        <HeroLandlordTenant/>

        <ImgByText
          sideImg="/images/logoOG.jpeg" 
          subHeading="Lorem Ipsum"
          heading="Lorem Ipsum"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          bulletList={["Lorem Ipsum","Lorem Ipsum","Lorem Ipsum"]}
          imgRight={false}
        />
        <ImgByText
          sideImg="/images/logoOG.jpeg" 
          subHeading="Lorem Ipsum"
          heading="Lorem Ipsum"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          bulletList={["Lorem Ipsum","Lorem Ipsum","Lorem Ipsum"]}
          imgRight={true}
        />
        
    <Stats />
        <ImgByText
          sideImg="/images/logoOG.jpeg" 
          subHeading="Lorem Ipsum"
          heading="Lorem Ipsum"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          bulletList={["Lorem Ipsum","Lorem Ipsum","Lorem Ipsum"]}
          imgRight={false}
        />
        
        <Contact />
    </div>
  )
}

export default LandlordTenantDisputes