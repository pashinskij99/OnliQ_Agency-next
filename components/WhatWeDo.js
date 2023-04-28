import React from "react";

const variants = [
  {
    id: 0,
    title: "Competency",
    description:
      "Our core competency at Onliq.Agency is to aid our clients in thriving and achieving success. We offer all-inclusive online marketing strategies that are customized to meet your specific requirements and are designed to optimize your potential on OnlyFans. Our emphasis is on ensuring your professional growth while also taking care of your personal well-being.",
  },
  {
    id: 1,
    title: "Proficient experts",
    description:
      "Our team of proficient experts will collaborate with you throughout the entire process to guarantee that you receive maximum benefits from your OnlyFans account. Whether it be content creation or social media management, our team will assist you in effectively utilizing the platform to accomplish your professional and financial goals.",
  },
  {
    id: 2,
    title: "Professional growth",
    description:
      "At Onliq.Agency, we specialize in helping our clients succeed and flourish. Our all-encompassing online marketing strategies are tailored to meet your specific needs and are designed to maximize your potential on OnlyFans. Our top priority is to ensure your professional growth while also taking care of your personal well-being.",
  },
  {
    id: 3,
    title: "Professionals",
    description:
      "Our team of skilled professionals will work closely with you every step of the way to ensure that you get the most out of your OnlyFans account. Whether it involves creating content or managing social media, our team will assist you in utilizing the platform effectively to achieve your professional and financial aspirations.",
  },
];

const WhatWeDo = () => {
  return (
    <section style={{zIndex: '10'}} id="why-us" className="faq-one">
      <img
        src="/assets/images/shapes/faq-shape-1.png"
        alt=""
        className="faq-one__shape-1"
      />
      <img
        src="/assets/images/shapes/faq-shape-3.png"
        alt=""
        className="faq-one__shape-3"
      />
      <div className="container">
        <div className="block-title text-center">
          <span className="block-title__bubbles"></span>
          <h3>What we do</h3>
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
export default WhatWeDo;
