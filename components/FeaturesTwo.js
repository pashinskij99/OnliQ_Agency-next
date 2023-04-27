import React from "react";

const FeaturesTwo = () => {
  return (
    <section id="bank" className="cta-two">
      <img
        src="/assets/images/shapes/cta-2-shape-1.png"
        alt=""
        className="cta-two__shape-1"
      />
      <img
        src="/assets/images/shapes/cta-2-shape-2.png"
        alt=""
        className="cta-two__shape-2"
      />
      <div className="container">
        <img
          src="/assets/images/shapes/cta-2-shape-3.png"
          alt=""
          className="cta-two__shape-3"
        />
        <img
          src="/assets/images/girls/girl-1.jpg"
          alt=""
          className="cta-two__moc"
        />
        <div className="row">
          <div className="col-xl-5 col-lg-6">
            <div className="cta-two__content">
              <div className="block-title text-left">
                <span className="block-title__bubbles"></span>
                <p>Checkout App Features</p>
                <h3>
                  Your earnings will be directly deposited into your bank
                  account by OnlyFans.
                </h3>
              </div>
              <p>
                To help you expand your subscriber base, we offer a variety of
                tools, including a share-for-share marketplace that enables you
                to quickly connect with other models for shoutouts.
                Additionally, the agency invests in you by handling advertising
                for you.
              </p>
              <a href="#" className="thm-btn cta-two__btn">
                Discover More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FeaturesTwo;
