import Link from "next/link";
import logo_svg from '../public/assets/images/logo-header.svg'

const links = [
  {id: 0, name: 'About us', href: '/'},
  {id: 1, name: 'Our services', href: '/our-services'},
]

export default class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      sticky: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    //Mobile Menu
    this.mobileMenu();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 70) {
      this.setState({
        sticky: true,
      });
    } else if (window.scrollY < 70) {
      this.setState({
        sticky: false,
      });
    }
  };

  mobileMenu = () => {
    //Mobile Menu Toggle
    let mobileNavContainer = document.querySelector(".mobile-nav__container");
    let mainNavContent = document.querySelector(
      ".main-nav__main-navigation"
    ).innerHTML;
    mobileNavContainer.innerHTML = mainNavContent;

    document
      .querySelector(".side-menu__toggler")
      .addEventListener("click", function (e) {
        document.querySelector(".side-menu__block").classList.toggle("active");
        e.preventDefault();
      });

    //Close Mobile Menu
    document
      .querySelector(".side-menu__close-btn")
      .addEventListener("click", function (e) {
        document.querySelector(".side-menu__block").classList.remove("active");
        e.preventDefault();
      });
  };

  render() {
    return (
      <div>
        <header className="main-nav__header-one">
          <nav
            className={
              this.state.sticky
                ? "header-navigation stricky stricked-menu stricky-fixed"
                : "header-navigation stricky"
            }
          >
            <div className="container">
              <div className="main-nav__logo-box">
                <a href="/" className="main-nav__logo">
                  <img
                    src={logo_svg}
                    width={160}
                    alt="Awesome Image"
                  />
                  {/* <Logo /> */}
                </a>
                <a href="#" className="side-menu__toggler">
                  <i className="fa fa-bars"></i>
                </a>
              </div>
              <div className="main-nav__main-navigation">
                <ul className="one-page-scroll-menu main-nav__navigation-box">
                  {links.map(({id, name, href}) => (
                    <li key={id}>
                      <Link href={href}>{name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
