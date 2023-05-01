import React from 'react';
import Link from 'next/link';

export default class ContactNavbar extends React.Component {
  constructor() {
    super()
    this.state = {
      sticky: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {

    if (window.scrollY > 70) {
      this.setState({
        sticky: true
      });
    } else if (window.scrollY < 70) {
      this.setState({
        sticky: false
      });
    }

  }

  render() {
    return (

      <div>

        <header  className="main-nav__header-one">
          <nav className={this.state.sticky ? "header-navigation stricky stricked-menu stricky-fixed" : "header-navigation stricky"}>
            <div style={{height: '90px'}} className="container align-items-center">
              <div className="main-nav__logo-box">
                <Link href="/" className="main-nav__logo">
                  <a>
                    <img src="/assets/icons/logo-header.svg" width="170" alt="Awesome Image" />
                  </a>
                </Link>
              </div>
            </div>
          </nav>
        </header>
      </div>

    )
  }
}