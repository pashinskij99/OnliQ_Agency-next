import React from "react";

const featuresArray = [
  {
    id: 0,
    title: "Strategy",
    description:
      "Good commercial strategy and knowledge of social network algorithms are needed for content creators to produce content and make cash. ",
  },
  {
    id: 1,
    title: "Quality",
    description:
      "The quality of the content must be excellent to reach your goals, but you have lack of skills to reach it – we are here for you to give more appeal to your social networks.",
  },
  {
    id: 2,
    title: "Time",
    description:
      "You cannot leave unanswered messages or miss regular posts to reach you goals, but you don’t have time for this – we will be your helping hand.",
  },
  {
    id: 3,
    title: "Variety of models",
    description:
      "Among over 3 million creators in Onlyfans we will make you stand out of the crowd.",
  },
  {
    id: 4,
    title: "Ideas",
    description:
      "Searching for new ideas to create content for your account?  We will create an eefficient action plan for you based on latest trends.",
  },
  {
    id: 5,
    title: "Motivation",
    description:
      "It is not easy to stay motivated every day no matter what in a long term. A manager is here for you to help keep going.",
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
      <div className="container">
        <img
          src="/assets/images/shapes/cta-1-shape-1.png"
          alt=""
          className="cta-three__shape-1"
        />
        {/* <img src="/assets/images/mocs/cta-moc-1-1.png" alt="" className="cta-three__moc" /> */}
        <div className="row justify-content-end">
          <div className="col-lg-12">
            <div className="cta-three__content">
              <div className="block-title text-left">
                <span className="block-title__bubbles"></span>
                <p>Checkout App Features</p>
                <h3>OnlyFans is not a piece of cake…</h3>
                <p className="description">
                  Onlyfans' top 10% of creators earn 70% of the platform's
                  income, while 70% of creators make less than $100 per month.
                  Therefore, accessing the high revenues of the top creators
                  requires the assistance of a professional team.
                </p>
              </div>
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
              <div className="cta-three__wrapper-btn">
                <a href="#" className="thm-btn cta-three__btn">
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FeaturesOne;
