import React from 'react'

const services = [
    { id: 0, title: 'Onlyfans Account Management:', description: 'After signing our contract and completing the on-boarding process, you will be assigned an account manager who will guide you through a consultation and start scheduling your content. You will also be given an assistant for your account. This allows you to focus on content creation while we take care of the management tasks, reducing your stress and giving you more time to do what you enjoy.' },
    { id: 1, title: 'Social Media Strategy', description: "At Onliq.Agency, we have a dedicated marketing team that can assist you with your social media strategy. If you're struggling with some social media platforms, we can help. Our in-house staff provides customized strategies for each model, ensuring that they achieve the best possible organic growth on their social media platforms." },
    { id: 2, title: 'Networking', description: "Building your presence on social media can be a slow and frustrating process. However, with our networking groups, you don't have to worry about that anymore. You'll be connected with top-notch creators and won't have to waste time and effort trying to find trustworthy collaborators. We provide verified groups to ensure that you have a seamless experience." },
    { id: 3, title: 'Legal & Financial Support ', description: "We have established professional connections and contacts that are readily available to assist you in managing your income and securing your financial future." },
    { id: 4, title: 'Mental Health & 24/7 Support ', description: "Our models are our top priority, and we are always available to offer guidance and support, no matter how big or small the issue may be. We are here to lend an ear and provide a friendly chat whenever needed, 24/7." },
    { id: 5, title: 'Community', description: "We prioritize the well-being of our models and are committed to providing them with guidance and support, regardless of the nature or complexity of the issue. Our team is available round the clock to lend a listening ear and offer a friendly chat whenever necessary." },
]

const HomeOurServices = () => {
    return (
        <section className="pricing-one" id="our-services">
            <div style={{ padding: '0 15px', margin: '0 auto' }} >
                <div className="pricing-one__sep"></div>

                <div className="block-title text-center">
                    <span className="block-title__bubbles"></span>
                    <h3>Our Services</h3>
                </div>
                <p className='text-center'>What we can do for you.</p>

                <div className="tabed-content">
                    <div id="year">
                        <div className="row">
                            {services.map(({ id, title, description }) => (
                                <div key={id} className="col-lg-4 wow fadeInLeft" data-wow-duration="1500ms">
                                    <div style={{ padding: '0 2rem' }} className="pricing-one__single">
                                        <div className="pricing-one__inner">
                                            <img src="/assets/images/shapes/pricing-line-1-1.png" alt="" className="pricing-one__line" />
                                            <h3>{title}</h3>
                                            <ul className="list-unstyled pricing-one__list">
                                                <p style={{ lineHeight: '1.5rem' }}>{description}</p>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default HomeOurServices