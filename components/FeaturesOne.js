import React from "react";

const featuresArray = [
  {
    id: 0,
    title: "Onlyfans Account Management",
    description:
      "After signing our contract and completing the on-boarding process, you will be assigned an account manager who will guide you through a consultation and start scheduling your content. You will also be given an assistant for your account. This allows you to focus on content creation while we take care of the management tasks, reducing your stress and giving you more time to do what you enjoy.",
  },
  {
    id: 1,
    title: "Social Media Strategy",
    description:
      "At Onliq.Agency, we have a dedicated marketing team that can assist you with your social media strategy. If you're struggling with some social media platforms, we can help. Our in-house staff provides customized strategies for each model, ensuring that they achieve the best possible organic growth on their social media platforms.",
  },
  {
    id: 2,
    title: "Networking",
    description:
      "Building your presence on social media can be a slow and frustrating process. However, with our networking groups, you don't have to worry about that anymore. You'll be connected with top-notch creators and won't have to waste time and effort trying to find trustworthy collaborators. We provide verified groups to ensure that you have a seamless experience.",
  },
  {
    id: 3,
    title: "Legal & Financial Support",
    description:
      "We have established professional connections and contacts that are readily available to assist you in managing your income and securing your financial future.",
  },
  {
    id: 4,
    title: "Mental Health & 24/7 Support",
    description:
      "Our models are our top priority, and we are always available to offer guidance and support, no matter how big or small the issue may be. We are here to lend an ear and provide a friendly chat whenever needed, 24/7.",
  },
  {
    id: 5,
    title: "Community",
    description:
      "We prioritize the well-being of our models and are committed to providing them with guidance and support, regardless of the nature or complexity of the issue. Our team is available round the clock to lend a listening ear and offer a friendly chat whenever necessary.",
  },
];

const FeaturesOne = () => {
  return (
    <section id="features" className="cta-three">
      <img
        src="/assets/images/shapes/cta-1-shape-2.png"
        alt=""
        className="cta-three__shape-2"
      />
      <img
        src="/assets/images/shapes/cta-1-shape-3.png"
        alt=""
        className="cta-three__shape-3"
      />
      <div className="features-container">
        <img
          src="/assets/images/shapes/cta-1-shape-1.png"
          alt=""
          className="cta-three__shape-1"
        />
        {/* <img src="/assets/images/mocs/cta-moc-1-1.png" alt="" className="cta-three__moc" /> */}
        <div className="row justify-content-end">
          <div className="col-lg-12">
            <div className="cta-three__content">
              {/* <div className="block-title text-center">
                <span className="block-title__bubbles"></span>
                <p>Checkout App Features</p>
                <h3>OnlyFans is not a piece of cake…</h3>
                <p className="description">
                  Onlyfans' top 10% of creators earn 70% of the platform's
                  income, while 70% of creators make less than $100 per month.
                  Therefore, accessing the high revenues of the top creators
                  requires the assistance of a professional team.
                </p>
              </div> */}
              <div className="cta-three__box-wrap">
                {featuresArray.map(({ id, title, description }) => (
                  <div key={id} className="cta-three__box">
                    <div className="cta-three__box-content">
                      <div className="cta-three__box-icon">
                        <i className="zimed-icon-strategy"></i>
                      </div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* <div className="cta-three__wrapper-btn">
                <a href="#" className="thm-btn cta-three__btn">
                  Discover More
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FeaturesOne;
