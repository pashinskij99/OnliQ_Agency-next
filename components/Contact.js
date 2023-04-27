import React from "react";

const Contact = () => {
  return (
    <section className="contact-one pb-5" id="contact">
      {/* <img
        src="/assets/images/shapes/contact-shape-1.png"
        alt=""
        className="contact-one__shape-1"
      /> */}
      <img
        src="/assets/images/shapes/contact-shape-2.png"
        alt=""
        className="contact-one__shape-2"
      />
      <img
        src="/assets/images/shapes/contact-shape-3.png"
        alt=""
        className="contact-one__shape-3"
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="contact-one__content">
              <div className="contact-one__images">
                <img
                  style={{width: '100%'}}
                  src="/assets/images/resources/contact-1.jpg"
                  className="wow fadeInUp"
                  data-wow-duration="1500ms"
                  alt=""
                />
                {/* <img
                  src="/assets/images/resources/contact-2.jpg"
                  className="wow fadeInUp"
                  data-wow-duration="1500ms"
                  alt=""
                /> */}
              </div>
              <div className="contact-one__infos">
                <div className="contact-one__infos-single">
                  <div className="contact-one__infos-icon">
                    <i className="zimed-icon-message"></i>
                  </div>
                  <div className="contact-one__infos-content">
                    <h3>Email</h3>
                    <p>
                      <a href="mailto:needhelp@zimed.com">needhelp@zimed.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="contact-one__infos-single">
                  <div className="contact-one__infos-icon">
                    <i className="zimed-icon-phone-call"></i>
                  </div>
                  <div className="contact-one__infos-content">
                    <h3>Country</h3>
                    <p>
                      <a href="#">Ukraine</a>
                    </p>
                  </div>
                </div>
                
                <div className="contact-one__infos-single">
                  <div className="contact-one__infos-icon">
                    <i className="zimed-icon-placeholder"></i>
                  </div>
                  <div className="contact-one__infos-content">
                    <h3>Instagram Link</h3>
                    <p>instagram.com/zimed</p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="contact-one__form-wrap">
              <div className="block-title">
                <span className="block-title__bubbles"></span>
                <p>Contact Us Now</p>
                <h3>You want to start now? We can find solution today!</h3>
                <p className="description">
                  Onlyfans income takes time and we are here to invest it in
                  you!
                </p>
              </div>
              <form
                action=""
                className="contact-form-validated contact-one__form"
              >
                <div className="row">
                  <div className="col-md-6">
                    <input type="text" name="name" placeholder="Name" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" name="email" placeholder="Country" />
                  </div>
                  <div className="col-md-12">
                    <input type="text" name="subject" placeholder="Instagram link" />
                  </div>
                  <div className="col-md-12 mt-3">
                    {/* <textarea name="message" placeholder="Message"></textarea> */}
                    <button
                      type="submit"
                      className="thm-btn contact-one__form-btn"
                    >
                      Send Information
                    </button>
                  </div>
                </div>
              </form>
              <div className="result"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
