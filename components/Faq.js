import React from "react";

const variants = [
  {
    id: 0,
    title: "Goals",
    description:
      "Our approaches have been tested and yield substantial profits. A number of the models we represent generate several thousand dollars per month by selling their content.",
  },
  {
    id: 1,
    title: "Experience",
    description:
      "With our marketing, content creation, and e-commerce skills, we can help you increase your earnings.",
  },
  {
    id: 2,
    title: "We are family",
    description:
      "You will join a group of models who share common objectives, and gatherings are arranged for those who want to establish stronger connections.",
  },
];

const Faq = () => {
  return (
    <section id="why-us" className="faq-one">
      <img
        src="/assets/images/shapes/faq-shape-1.png"
        alt=""
        className="faq-one__shape-1"
      />
      <img
        src="/assets/images/shapes/faq-shape-2.png"
        alt=""
        className="faq-one__shape-2"
      />
      <img
        src="/assets/images/shapes/faq-shape-3.png"
        alt=""
        className="faq-one__shape-3"
      />
      <div className="container">
        <div className="block-title text-center">
          <span className="block-title__bubbles"></span>
          <p>Some reasons why...</p>
          <h3>Why us?</h3>
        </div>
        <div className="accrodion-grp wow fadeIn faq-accrodion animated">
          {variants.map(({ id, description, title }) => (
            <div key={id} className="accrodion">
              <div className="accrodion-inner">
                <div className="accrodion-title">
                  <h4>{title}</h4>
                </div>
                <div className="accrodion-content">
                  <div className="inner">
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Faq;
