import Banner from '../../components/Banner'
import Meta from '../../components/Meta'
import Faq from '../../components/WhatWeDo'
import CallToAction from '../../components/CallToAction'

const AboutView = () => {
  return (
    <>
      <Meta
        title='Onliq.Agency' 
        desc='Incorporating knowledge from the media and marketing industries into the management of OnlyFans.' 
      />
      <main>
        <Banner />
        <CallToAction />
        <Faq />
      </main>
    </>
  )
}

export default AboutView