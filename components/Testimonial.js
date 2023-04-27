import React from "react";

const goals = [
  {
    id: 0,
    title: "01 - CONTENT CREATION",
    description:
      "We teach you algorithm operation and updates, and current trends, enabling you to create viral content. We instruct you on the various types of Onlyfans content, and all you need to do is upload it to our extranet, and we will handle the rest.",
  },
  {
    id: 1,
    title: "02 - SALES & MARKETING",
    description:
      "We will aid you in converting your followers into paying subscribers through advanced marketing and sales methods, after boosting your followers through targeted content concepts. Our experienced sales representatives, who are compensated based on sales, will promote your content at the most favorable pricing.",
  },
  {
    id: 2,
    title: "03 - COMMUNITY",
    description:
      "You will have a support of professionals and like-minded models who share your objectives. We organize events in beautiful locations to promote networking among models and produce exceptional content, thereby enhancing your motivation.",
  },
];

const Testimonial = () => {
  return (
    <section style={{zIndex: '10'}} className="testimonials__one" id="clients">
      <img
        src="/assets/images/shapes/map-1-1.png"
        alt="Awesome Image"
        className="map-img"
      />
      <img
        src="/assets/images/shapes/testi-shape-1.png"
        alt=""
        className="testimonials__one-shape-1"
      />
      <img
        src="/assets/images/shapes/testi-shape-2.png"
        alt=""
        className="testimonials__one-shape-2"
      />
      <div className="container">
        <div className="row">
          <div>
            <div className="block-title">
              <span className="block-title__bubbles"></span>
              <p>Checkout Latest Posts</p>
              <h3>What Our Clients Are Saying</h3>
              <ul className="p-0">
                {goals.map(({id, title, description}) => (
                    <li
                        style={{listStyle: 'none'}} 
                        className={'mt-5 mb-5'} 
                        key={id}
                    >
                        <h4 className="">{title}</h4>
                        <p className="description">{description}</p>
                    </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
