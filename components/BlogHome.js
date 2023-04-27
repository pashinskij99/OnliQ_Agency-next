import React from "react";

const management = [
  " Dedicated account manager 24/7.",
  " Assistants for organization of promotions and shoutouts.",
  " Guides and sssistance for social networks.",
  " Guides to help you for content creation.",
  " Optimizing your account and conversion imporovement.",
  " PPV + tip sales and upsell management.",
  " Fan management, fans retention, rebill on.",
];

const BlogHome = () => {
  return (
    <section className="blog-one blog-one__home" id="management">
      <img
        src="/assets/images/shapes/blog-shape-1-1.png"
        alt=""
        className="blog-one__shape-1"
      />
      <div className="container management-container">
        <div>
          <img width={500} src="/assets/images/girls/girl-2.jpg" alt="121212" />
        </div>
        <div className="block-title">
          <span className="block-title__bubbles"></span>
          <p>Checkout Latest Posts</p>
          <h3 className="ml-auto">
            Onlyfans Account <br /> Management:
          </h3>
          <ul style={{listStyle: 'none'}} className="mt-4 p-0">
            {management.map((text) => (
              <li className="mt-2" key={text}>
                <span className="mr-2">&#8226;</span> {text}
              </li>
            ))}
          </ul>
        </div>

        {/* <div className="row"> */}
        {/* Cart */}
        {/* <div className="col-lg-4 wow fadeInLeft" data-wow-duration="1500ms">
                                <div className="blog-one__single">
                                    <div className="blog-one__image">
                                        <img src="/assets/images/blog/blog-1-1.jpg" alt=""/>
                                    </div>

                                    <div className="blog-one__content">
                                        <ul className="blog-one__meta list-unstyled">
                                            <li><a href="#"><i className="far fa-clock"></i> 20 Feb</a></li>
                                            <li><a href="#"><i className="far fa-comments"></i> 2 Comments</a></li>
                                        </ul>

                                        <h3>
                                            <Link href="/blog-details">
                                                <a>Pre and post launch mobile app marketing
                                                    pitfalls to avoid
                                                </a>
                                            </Link>
                                        </h3>
                                        <Link href="/blog-details">
                                        <a className="blog-one__link"><i
                                            className="zimed-icon-right-arrow"></i></a>
                                        </Link>
                                    </div>

                                </div>

                            </div> */}

        {/* </div> */}
      </div>
    </section>
  );
};
export default BlogHome;
