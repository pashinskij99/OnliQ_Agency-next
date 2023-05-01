import React, { Component } from 'react';
import Link from 'next/link';

export default class Navbar extends React.Component {
    constructor() {
        super()
        this.state = {
            sticky: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);

        //Mobile Menu
        this.mobileMenu();
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

    mobileMenu = () => {
        //Mobile Menu Toggle
        let mobileNavContainer = document.querySelector(".mobile-nav__container");
        let mainNavContent = document.querySelector(".main-nav__main-navigation").innerHTML;
        mobileNavContainer.innerHTML = mainNavContent;

        document.querySelector(".side-menu__toggler").addEventListener("click", function (e) {
            document.querySelector(".side-menu__block").classList.toggle('active');
            e.preventDefault();
        });

        //Close Mobile Menu
        document.querySelector(".side-menu__close-btn").addEventListener("click", function (e) {
            document.querySelector(".side-menu__block").classList.remove('active');
            e.preventDefault();
        });
    }

    render() {
        return (

            <div>

                <header className="main-nav__header-one ">
                    <nav className={this.state.sticky ? "header-navigation stricky stricked-menu stricky-fixed" : "header-navigation stricky"}>
                        <div className="container">
                            <div className="main-nav__logo-box">
                                <Link href="/" className="main-nav__logo">
                                    <a>
                                        <img src="/assets/icons/logo-header.svg" width="170" alt="Awesome Image" />
                                    </a>
                                </Link>
                                <a href="#" className="side-menu__toggler"><i className="fa fa-bars"></i></a>
                            </div>
                            <div className="main-nav__main-navigation">
                                <ul className="one-page-scroll-menu main-nav__navigation-box">
                                    <li className="current scrollToLink">
                                        <a href="#home">Home</a>
                                    </li>
                                    <li className="scrollToLink">
                                        <a href="#about">About us</a>
                                    </li>
                                    <li className="scrollToLink">
                                        <a href="#what-we-do">What we do</a>
                                    </li>
                                    <li className="scrollToLink">
                                        <a href="#our-services">Our Services</a>
                                    </li>
                                    <li className="scrollToLink">
                                        <a href="#lets-go">Let's go</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="main-nav__right">
                                <Link href="/contact">
                                    <a data-target="#contact"
                                        className="thm-btn header__btn scroll-to-target" >Contact Us</a>
                                </Link>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>

        )
    }
}