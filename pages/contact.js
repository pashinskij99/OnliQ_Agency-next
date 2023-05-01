import React from 'react'
import PageHeader from '../components/PageHeader'
import HomeContactUs from '../components/HomeContactUs'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactNavbar from '../components/ContactNavbar'
import ContactFooter from '../components/ContactFooter'

const Contact = () => {
  return (
    <Layout pageTitle="Zimed - Blog Details">
      <ContactNavbar />
      <PageHeader title="Contact Us" />
      <HomeContactUs />
      <ContactFooter />
    </Layout>
  )
}

export default Contact