import React from 'react'
import Layout from '../components/Layout'
import SeoHead from '../components/SeoHead'
import ContactNavbar from '../components/ContactNavbar'
import PageHeader404 from '../components/PageHeader404'
import ContactFooter from '../components/ContactFooter'

const Custom404 = () => {
  return (
    <Layout>
      <SeoHead />
      <ContactNavbar />
      <PageHeader404 title="404 Page not found" />
      <ContactFooter />
    </Layout>
  )
}

export default Custom404