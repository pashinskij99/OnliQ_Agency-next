import Link from 'next/dist/client/link'
import React from 'react'

//linear-gradient( rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.5) ), url("/assets/images/background/banner-bg-1-1.png")

const HomeBanner = () => {
  return (
    <section className="banner-one home-banner" id="home" style={{ backgroundImage: `linear-gradient( rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.5) ), url(/assets/images/background/banner-bg-1-1.png)` }}>
      <img src="/assets/images/shapes/banner-shapes-1-1.png" alt="" className="banner-one__shape-1" />
      <img src="/assets/images/shapes/banner-shapes-1-2.png" alt="" className="banner-one__shape-2" />

      <img src="/assets/images/shapes/banner-shapes-1-4.png" alt="" className="banner-one__shape-4" />
      <img src="/assets/images/shapes/banner-shapes-1-5.png" alt="" className="banner-one__shape-5" />
      <img src="/assets/images/shapes/banner-shapes-1-6.png" alt="" className="banner-one__shape-6" />
      <img src="/assets/images/shapes/banner-shapes-1-7.png" alt="" className="banner-one__shape-7" />

      <div className="container">
        <img src="/assets/images/shapes/banner-shapes-1-3.png" alt="" className="banner-one__shape-moc-1" />
        <img src="/assets/images/girls/banner-img.png" alt="" className="banner-one__moc" />
        <div className="row">
          <div className="col-lg-8">
            <div className="banner-one__content">
              {/* <p className="banner-one__tag-line">Welcome to Business <Link href="/contact">contact us</Link></p> */}
              <h3>The Onliq.Agency creator ran agency</h3>
              <Link href="/contact">
                <a data-target="#contact" className="thm-btn banner-one__btn scroll-to-target">
                  Contact Us
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeBanner