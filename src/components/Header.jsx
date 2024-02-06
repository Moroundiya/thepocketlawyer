import React, { useState } from 'react';
import logo_dark from '../assets/images/logo-dark.png';
import logo_light from '../assets/images/logo-light.png';
import { Icon } from '@iconify/react';
import ToggleTheme from "@qvgk/react-toggle-theme";
import { Link } from "react-router-dom";


function Header() {
    const [currentTheme, setCurrentTheme] = useState("light");

    return (
        <div>
            <nav className="cd-dropdown d-block d-sm-block d-md-block d-lg-block d-xl-none">
                <h2 className='my-2'>
                    <img src={currentTheme === "light" ? logo_dark : logo_light} alt="logo" className='header-logo' />
                </h2>
                <a href="#0" className="cd-close">
                    Close
                </a>
                <ul className="cd-dropdown-content mt-5">
                    <li>
                        <form className="cd-search">
                            <input type="search" placeholder="Search..." />
                        </form>
                    </li>
                    <li >
                        <Link to="/" reloadDocument relative='path'>HOME</Link>
                    </li>
                    <li>
                        <a href="about_us.html">Services</a>
                    </li>
                    <li>
                        <a href="investment.html">E-Stores</a>
                    </li>
                    <li>
                        <Link to="/plans" reloadDocument relative='path'>Plans</Link>

                    </li>
                    <li class="has-children">
                        <a href="#">Company</a>
                        <ul class="cd-secondary-dropdown icon_menu is-hidden">
                            <li className='go-back'>
                                <a href="">BACK</a>
                            </li>
                            <li class="has-children">
                                <a href="#0">Who We Are</a>
                                <ul class="cd-secondary-dropdown icon_menu is-hidden">
                                    <li className='go-back'>
                                        <a href="#0">BACK</a>
                                    </li>
                                    <li>
                                        <Link to="/about" reloadDocument relative='path'>About Us</Link>
                                    </li>
                                    <li>
                                        <a href="#0">Why Choose Us</a>
                                    </li>
                                    <li>
                                        <a href="#0">Career</a>
                                    </li>
                                    <li>
                                        <a href="#0">Event & News </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="has-children">
                                <a href="#0">What We Do</a>
                                <ul class="cd-secondary-dropdown icon_menu is-hidden">
                                    <li className='go-back'>
                                        <a href="#0">BACK</a>
                                    </li>
                                    <li>
                                        <a href="#0">Services</a>
                                    </li>
                                    <li>
                                        <a href="#0">Solutions</a>
                                    </li>
                                    <li>
                                        <a href="#0">Add-Ons</a>
                                    </li>
                                    <li>
                                        <a href="#0">Integrations</a>
                                    </li>
                                    <li>
                                        <a href="#0">Offers & Deals</a>
                                    </li>
                                    <li>
                                        <a href="#0">Success Stories</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="has-children">
                                <a href="#0">Statutory</a>
                                <ul class="cd-secondary-dropdown icon_menu is-hidden">
                                    <li className='go-back'>
                                        <a href="#0">BACK</a>
                                    </li>
                                    <li>
                                        <Link to="/delivery-policy" reloadDocument relative='path'>Delivery Policy</Link>

                                    </li>
                                    <li>
                                        <Link to="/grievance-policy" reloadDocument relative='path'>Grievances Policy</Link>

                                    </li>
                                    <li>
                                        <Link to="/privacy-policy" reloadDocument relative='path'>Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link to="/refund-policy" reloadDocument relative='path'>Refund Policy</Link>
                                    </li>
                                    <li>
                                        <Link to="/security-policy" reloadDocument relative='path'>Security Policy</Link>
                                    </li>
                                    <li>
                                        <a href="#0">Terms & Conditions</a>
                                    </li>
                                    <li>
                                        <a href="#0">Whistle Blowers</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="has-children">
                                <a href="#0">Help Center</a>
                                <ul class="cd-secondary-dropdown icon_menu is-hidden">
                                    <li className='go-back'>
                                        <a href="#0">BACK</a>
                                    </li>
                                    <li>
                                        <Link to="/faq" reloadDocument relative='path'>FAQ</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact" reloadDocument relative='path'>Contact Us</Link>
                                    </li>
                                    <li>
                                        <a href="#0">Support</a>
                                    </li>
                                    <li>
                                        <a href="#0">Partner</a>
                                    </li>
                                    <li>
                                        <a href="#0">Offers & Deals</a>
                                    </li>
                                    <li>
                                        <a href="#0">Partners Directories</a>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </li>
                    <li>
                        <a href="register.html">
                            <Icon icon="fa6-solid:user-clock" className='book-icon' />
                            Book Appointment
                        </a>
                    </li>
                    <li>
                        <Link to="/login" reloadDocument relative='path'>
                            <Icon icon="carbon:password" className='signin-icon' />
                            Sign In
                        </Link>
                    </li>
                    <li className='my-2 ml-3'>
                        <ToggleTheme selectedTheme={currentTheme} onChange={setCurrentTheme} />
                    </li>
                </ul>



            </nav >
            <div className="cp_navi_main_wrapper index2_header_wrapper float_left">
                <div className="container-fluid header-parent-container">
                    <div className="cp_logo_wrapper">
                        <Link to="/" reloadDocument relative='path'>
                            <img src={currentTheme === "light" ? logo_dark : logo_light} alt="logo" className='header-logo' />
                        </Link>
                    </div>
                    {/* mobile menu area start */}
                    <header className="mobail_menu d-block d-sm-block d-md-block d-lg-none d-xl-none">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="cd-dropdown-wrapper">
                                        <a className="house_toggle" href="#0">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                version="1.1"
                                                id="Capa_1"
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 31.177 31.177"
                                                style={{ enableBackground: "new 0 0 31.177 31.177" }}
                                                xmlSpace="preserve"
                                                width="25px"
                                                height="25px"
                                            >
                                                <g>
                                                    <g>
                                                        <path
                                                            className="menubar"
                                                            d="M30.23,1.775H0.946c-0.489,0-0.887-0.398-0.887-0.888S0.457,0,0.946,0H30.23    c0.49,0,0.888,0.398,0.888,0.888S30.72,1.775,30.23,1.775z"
                                                            fill="#004165"
                                                        />
                                                    </g>
                                                    <g>
                                                        <path
                                                            className="menubar"
                                                            d="M30.23,9.126H12.069c-0.49,0-0.888-0.398-0.888-0.888c0-0.49,0.398-0.888,0.888-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,8.729,30.72,9.126,30.23,9.126z"
                                                            fill="#004165"
                                                        />
                                                    </g>
                                                    <g>
                                                        <path
                                                            className="menubar"
                                                            d="M30.23,16.477H0.946c-0.489,0-0.887-0.398-0.887-0.888c0-0.49,0.398-0.888,0.887-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,16.079,30.72,16.477,30.23,16.477z"
                                                            fill="#004165"
                                                        />
                                                    </g>
                                                    <g>
                                                        <path
                                                            className="menubar"
                                                            d="M30.23,23.826H12.069c-0.49,0-0.888-0.396-0.888-0.887c0-0.49,0.398-0.888,0.888-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,23.43,30.72,23.826,30.23,23.826z"
                                                            fill="#004165"
                                                        />
                                                    </g>
                                                    <g>
                                                        <path
                                                            className="menubar"
                                                            d="M30.23,31.177H0.946c-0.489,0-0.887-0.396-0.887-0.887c0-0.49,0.398-0.888,0.887-0.888H30.23    c0.49,0,0.888,0.398,0.888,0.888C31.118,30.78,30.72,31.177,30.23,31.177z"
                                                            fill="#004165"
                                                        />
                                                    </g>
                                                </g>
                                            </svg>
                                        </a>
                                        {/* .cd-dropdown */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* .cd-dropdown-wrapper */}
                    </header>
                    <div className="cp_navigation_wrapper">
                        <div className="mainmenu d-xl-block d-lg-block d-md-none d-sm-none d-none">
                            <ul className="main_nav_ul">
                                <li className="has-mega gc_main_navigation">
                                    <Link to="/" relative='path' reloadDocument className="gc_main_navigation active_class">HOME</Link>

                                </li>
                                <li><a href="about_us.html" className="gc_main_navigation">SERVICES </a></li>
                                <li className="has-mega gc_main_navigation">
                                    <a href="#" className="gc_main_navigation">E-STORES
                                    </a>

                                </li>
                                <li className="has-mega gc_main_navigation">
                                    <Link to="/plans" relative='path' reloadDocument>PLANS</Link>
                                </li>
                                <li className="has-mega gc_main_navigation">
                                    <a href="#" className="gc_main_navigation">COMPANY <i class="fas fa-caret-down"></i>
                                    </a>
                                    <ul class="navi_2_dropdown">
                                        <li class="parent">
                                            <a href="faq.html"><i class="fas fa-caret-right"></i>Who We Are</a>
                                            <ul class="navi_2_dropdown">
                                                <li class="parent">
                                                    <Link to="/about" relative='path' reloadDocument>About Us</Link>

                                                </li>
                                                <li class="parent">
                                                    <a href="login.html">Why Choose Us </a>
                                                </li>
                                                <li class="parent">
                                                    <a href="register.html">Career</a>
                                                </li>
                                                <li class="parent">
                                                    <a href="register.html">Event & News </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="parent">
                                            <a href="login.html"><i class="fas fa-caret-right"></i>What We Do</a>
                                            <ul class="navi_2_dropdown">
                                                <li class="parent">
                                                    <a href="faq.html">Services</a>
                                                </li>
                                                <li class="parent">
                                                    <a href="login.html">Solutions</a>
                                                </li>
                                                <li class="parent">
                                                    <a href="register.html">Add-Ons</a>
                                                </li>
                                                <li class="parent">
                                                    <a href="register.html">Integrations</a>
                                                </li>
                                                <li class="parent">
                                                    <a href="register.html">Offers & Deals</a>
                                                </li>
                                                <li class="parent">
                                                    <a href="register.html">Success Stories</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="parent">
                                            <a href="register.html"><i class="fas fa-caret-right"></i>Help Center</a>
                                            <ul class="navi_2_dropdown">
                                                <li class="parent">
                                                    <Link to="/faq" relative='path' reloadDocument>FAQ</Link>
                                                </li>
                                                <li class="parent">
                                                    <Link to="/contact" reloadDocument relative='path'>Contact Us</Link>
                                                </li>
                                                <li class="parent">
                                                    <a href="register.html">Support </a>
                                                </li>
                                                <li class="parent">
                                                    <a href="register.html">Partners</a>
                                                </li>
                                                <li class="parent">
                                                    <a href="register.html">Partners Directories</a>
                                                </li>

                                            </ul>
                                        </li>
                                        <li class="parent">
                                            <a href="register.html"><i class="fas fa-caret-right"></i>Statutory </a>
                                            <ul class="navi_2_dropdown">
                                                <li class="parent">
                                                    <Link to="/delivery-policy" reloadDocument relative='path'>Delivery Policy</Link>

                                                </li>
                                                <li class="parent">
                                                    <Link to="/grievance-policy" reloadDocument relative='path'>Grievances Policy</Link>

                                                </li>
                                                <li class="parent">
                                                    <Link to="/privacy-policy" reloadDocument relative='path'>Privacy Policy</Link>

                                                </li>
                                                <li class="parent">
                                                    <Link to="/refund-policy" reloadDocument relative='path'>Refund Policy</Link>

                                                </li>
                                                <li class="parent">
                                                    <Link to="/security-policy" reloadDocument relative='path'>Security Policy</Link>

                                                </li>
                                                <li class="parent">
                                                    <a href="register.html">Terms & Conditions</a>
                                                </li>
                                                <li class="parent">
                                                    <a href="register.html">Whistle Blowers</a>
                                                </li>

                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="top_header_right_wrapper top_phonecalls register-login-container">

                        <div className="header_btn header-btn-div">
                            <ul>
                                <li>
                                    <a href="register.html">
                                        <Icon icon="fa6-solid:user-clock" className='book-icon' />
                                        Book Appointment
                                    </a> </li>
                                <li>
                                    <Link to="/login" reloadDocument relative='path'>
                                        <Icon icon="carbon:password" className='signin-icon' />
                                        Sign In
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <Icon icon="vaadin:cart" className='cart-icon' />
                        <ToggleTheme selectedTheme={currentTheme} onChange={setCurrentTheme} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header