import React from 'react'
import PageHeader from '../components/PageHeader'
import HomeContactUs from '../components/HomeContactUs'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactNavbar from '../components/ContactNavbar'
import ContactFooter from '../components/ContactFooter'
import SeoHead from '../components/SeoHead'

const Contact = () => {
  return (
    <Layout pageTitle="Zimed - Blog Details">
      <SeoHead 
        title='Onliq.Agency Contact' 
        description='Join our waiting list!
        Looking forward to hear from you!' 
      /> 
      <ContactNavbar />
      <PageHeader title="Contact Us" />
      <HomeContactUs />
      <ContactFooter />
    </Layout>
  )
}

export default Contact