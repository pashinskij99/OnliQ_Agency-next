import React from 'react';

const Banner = () => {

    return(
        <section className="banner-one" id="banner" style={{backgroundImage: `url(/assets/images/background/banner-bg-1-1.png)`}}>
            <img src="/assets/images/shapes/banner-shapes-1-1.png" alt="" className="banner-one__shape-1" />
            <img src="/assets/images/shapes/banner-shapes-1-2.png" alt="" className="banner-one__shape-2" />

            <img src="/assets/images/shapes/banner-shapes-1-4.png" alt="" className="banner-one__shape-4" />
            <img src="/assets/images/shapes/banner-shapes-1-5.png" alt="" className="banner-one__shape-5" />
            <img src="/assets/images/shapes/banner-shapes-1-6.png" alt="" className="banner-one__shape-6" />
            <img src="/assets/images/shapes/banner-shapes-1-7.png" alt="" className="banner-one__shape-7" />

            <div className="container">
                <img src="/assets/images/shapes/banner-shapes-1-3.png" alt="" className="banner-one__shape-moc-1"/>
                <img width={600} src="/assets/images/girls/girl-3.jpg" alt="" className="banner-one__moc" />
                <div className="row">
                    <div className="col-lg-7">
                        <div className="banner-one__content">
                            <p className="banner-one__tag-line">Welcome to SEO Business <a href="#">free trial</a></p>
                            <h3>
                                Addmost Media Agency 
                                <br/> Top level OnlyFans 
                                <br /> Marketing and Management 
                                biggest goals
                            </h3>
                            <p>Addmost Media is a specialized agency that focuses on helping individuals increase their earnings on OnlyFans. With our expertise, we can help you attract more visitors from your social networks, convert them into followers, and ultimately, transform them into fans.</p>
                            <a href="#contact" data-target="#contact" className="thm-btn banner-one__btn scroll-to-target">START NOW</a>
                        </div>
                    </div>
                </div>
            </div>
            </section>
    )
}
export default Banner;