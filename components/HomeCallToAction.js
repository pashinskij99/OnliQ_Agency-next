import Link from 'next/dist/client/link'
import React from 'react'

const HomeCallToAction = () => {
  return (
    <section id='lets-go' className="cta-one">
      <div className="container">
        <div className="cta-one__circle-1"></div>
        <div className="cta-one__circle-2"></div>
        <div className="cta-one__circle-3"></div>
        <div className="cta-one__content text-center">
          <h3>Contact Us Today & <br /> Experience Endless Possibilities</h3>
          <p>Looking forward to hear from you!</p>
          <Link href="/contact">
            <a className="thm-btn cta-one__btn">Contact Us</a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeCallToAction