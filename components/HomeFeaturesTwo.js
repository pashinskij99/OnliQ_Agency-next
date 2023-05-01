import React from 'react'

const HomeFeaturesTwo = () => {
  return (
    <section className="cta-two">
      <img src="/assets/images/shapes/cta-2-shape-1.png" alt="" className="cta-two__shape-1" />
      <img src="/assets/images/shapes/cta-2-shape-2.png" alt="" className="cta-two__shape-2" />
      <div className="container">
        <img src="/assets/images/shapes/cta-2-shape-3.png" alt="" className="cta-two__shape-3" />
        <img style={{maxHeight: '700px'}} src="/assets/images/girls/girl-9.jpg" alt="" className="cta-two__moc" />
        <div className="row">
          <div className="col-xl-5 col-lg-6">
            <div className="cta-two__content">
              <div className="block-title text-left">
                <span className="block-title__bubbles"></span>
                <h3>All while ensuring that your resources are used effectively</h3>
              </div>

              <p>We take pride in our capacity to develop customized strategies that make OnlyFans success not just feasible, but attainable - all while ensuring that your resources are used effectively. That's why we are the foremost management agency for OnlyFans.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeFeaturesTwo