import React from 'react'

const HomeWhatWeDo = () => {
  return (
    <section id='what-we-do' className="faq-one">
      <img src="/assets/images/shapes/faq-shape-1.png" alt="" className="faq-one__shape-1" />
      <img style={{zIndex: '-1'}} src="/assets/images/shapes/faq-shape-2.png" alt="" className="faq-one__shape-2" />
      <img src="/assets/images/shapes/faq-shape-3.png" alt="" className="faq-one__shape-3" />
      <div className="container">
        <div className="block-title text-center">
          <span className="block-title__bubbles"></span>
          {/* <p>Frequently Asked Questions</p> */}
          <h3>What we do</h3>
        </div>
        <div className="accrodion-grp wow fadeIn faq-accrodion animated">
          <div className="accrodion">
            <div className="accrodion-inner">
              <div className="accrodion-title">
                <h4>Competency</h4>
              </div>
              <div className="accrodion-content">
                <div className="inner">
                  <p>
                    Our core competency at Onliq.Agency is to aid our clients in thriving and achieving success. We offer all-inclusive online marketing strategies that are customized to meet your specific requirements and are designed to optimize your potential on OnlyFans. Our emphasis is on ensuring your professional growth while also taking care of your personal well-being.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="accrodion  ">
            <div className="accrodion-inner">
              <div className="accrodion-title">
                <h4>Proficient experts</h4>
              </div>
              <div className="accrodion-content">
                <div className="inner">
                  <p>Our team of proficient experts will collaborate with you throughout the entire process to guarantee that you receive maximum benefits from your OnlyFans account. Whether it be content creation or social media management, our team will assist you in effectively utilizing the platform to accomplish your professional and financial goals.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="accrodion ">
            <div className="accrodion-inner">
              <div className="accrodion-title">
                <h4>Professional growth</h4>
              </div>
              <div className="accrodion-content">
                <div className="inner">
                  <p>At Onliq.Agency, we specialize in helping our clients succeed and flourish. Our all-encompassing online marketing strategies are tailored to meet your specific needs and are designed to maximize your potential on OnlyFans. Our top priority is to ensure your professional growth while also taking care of your personal well-being.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="accrodion ">
            <div className="accrodion-inner">
              <div className="accrodion-title">
                <h4>Professionals</h4>
              </div>
              <div className="accrodion-content">
                <div className="inner">
                  <p>Our team of skilled professionals will work closely with you every step of the way to ensure that you get the most out of your OnlyFans account. Whether it involves creating content or managing social media, our team will assist you in utilizing the platform effectively to achieve your professional and financial aspirations.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="accrodion ">
            <div className="accrodion-inner">
              <div className="accrodion-title">
                <h4>We offer a range of services, which include but are not limited to:</h4>
              </div>
              <div className="accrodion-content">
                <div className="inner">
                  <p>We offer various services, such as the expansion of your channel, exploring mainstream opportunities, collaborations, formulating a social media strategy, and diversification of platforms.

                    We offer support in legal and financial matters, mental health, networking and social events, brand deals, as well as 24/7 assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeWhatWeDo