import Link from 'next/dist/client/link';
import React from 'react';

export default class ContactFooter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollBtn: false
    }
    this.handleScroll = this.handleScroll.bind(this)
    this.scrollTop = this.scrollTop.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {

    if (window.scrollY > 70) {
      this.setState({
        scrollBtn: true
      });
    } else if (window.scrollY < 70) {
      this.setState({
        scrollBtn: false
      });
    }

  }

  scrollTop = () => {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <footer className="site-footer">
          <img src="/assets/images/shapes/footer-shape-1.png" className="site-footer__shape-1" alt="" />
          <img src="/assets/images/shapes/footer-shape-2.png" className="site-footer__shape-2" alt="" />
          <img src="/assets/images/shapes/footer-shape-3.png" className="site-footer__shape-3" alt="" />
          <div className="site-footer__upper">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="footer-widget footer-widget__about">
                    <Link href="/">
                      <a className="footer-widget__logo">
                        <img src="/assets/icons/logo-header.svg" width="200" alt="Awesome Image" />
                      </a>
                    </Link>
                    <p>Onliq.Agency recognizes the significance of dependable management for the progress and expansion of OnlyFans. As the top agency to offer such services, we remain informed and knowledgeable about the most recent developments in this constantly evolving digital environment.</p>
                    {/* <p><a href="mailto:needhelp@zimed.com">needhelp@zimed.com</a> <br />
                      <a href="tel:666-888-0000">666 888 0000</a></p> */}
                  </div>
                </div>

                <div className="col-lg-3 ml-auto">
                  <div className="footer-widget footer-widget__links">
                    <h3 className="footer-widget__title">Contact Us</h3>
                    <div className="footer-widget__links-wrap">
                      <ul className="list-unstyled">
                        <li className="current scrollToLink">
                          <a href="mailto:onliq.agency@gmail.com">onliq.agency@gmail.com</a> 
                        </li>
                        <li>
                          <a 
                            href='https://goo.gl/maps/JUTcKp14dqqcK4Xz8' 
                            target='_blank' 
                            style={{fontStyle: 'normal', lineHeight: 1.4}}
                          >
                            7B, ONE CAPITAL PLACE, <br /> 18 LUARD ROAD, <br /> WAN CHAI, HONG KONG
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="site-footer__bottom">
            <div className="container">
              <div className="inner-container">
                <p className='ml-auto'>© {new Date().getFullYear()} Affroad Ltd, HK. All Rights Reserved</p>
              </div>

            </div>

          </div>
        </footer>
        <div onClick={this.scrollTop} className="scroll-to-target scroll-to-top" style={{ display: this.state.scrollBtn ? 'block' : 'none' }}><i
          className="fa fa-angle-up"></i></div>
      </div>

    )
  }
}