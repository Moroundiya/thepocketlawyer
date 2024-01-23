import React, { useState } from 'react';
import ToggleTheme from "@qvgk/react-toggle-theme";
import { Link } from 'react-router-dom';
// import '../App.css';
import '../assets/css/custom.css';
import logo from '../assets/images/logo.png';
import logo4 from '../assets/images/logo4.png';
import logo5 from '../assets/images/logo5.png';
import banner from '../assets/images/banner.png';
import sliderImg from '../assets/images/slider_img.png';
import mem1 from '../assets/images/mem1.png';
import mem2 from '../assets/images/mem2.png';
import mem3 from '../assets/images/mem3.png';
import mem4 from '../assets/images/mem4.png';
import mem5 from '../assets/images/mem5.png';
import mem6 from '../assets/images/mem6.png';
import workBanner from '../assets/images/work_banner.jpg';
import ts1 from '../assets/images/ts1.png';
import ts2 from '../assets/images/ts2.png';
import inves1 from '../assets/images/inves1.png';
import inves2 from '../assets/images/inves2.png';
import inves3 from '../assets/images/inves3.png';
import inves4 from '../assets/images/inves4.png';
import blog_img1 from '../assets/images/blog_img1.jpg';
import blog_img2 from '../assets/images/blog_img2.jpg';
import blog_img3 from '../assets/images/blog_img3.jpg';
import ac1 from '../assets/images/ac1.jpg';
import ac2 from '../assets/images/ac2.jpg';
import ac3 from '../assets/images/ac3.jpg';
import partner1 from '../assets/images/partner1.png';
import partner2 from '../assets/images/partner2.png';
import partner3 from '../assets/images/partner3.png';
import partner4 from '../assets/images/partner4.png';
// import DarkModeToggle from '../components/DarkModeToggle';

function Homepage() {
    const [currentTheme, setCurrentTheme] = useState("light")

    return (
        <div>
            <div className="cursor" />
            {/* Top Scroll Start */}
            <a href="javascript:" id="return-to-top"> <i className="fas fa-angle-double-up" /></a>
            {/* Top Scroll End */}
            {/* cp navi wrapper Start */}
            <nav className="cd-dropdown d-block d-sm-block d-md-block d-lg-none d-xl-none">
                <h2><a href="index.html"> savehyip </a></h2>
                <a href="#0" className="cd-close">Close</a>
                <ul className="cd-dropdown-content">
                    <li>
                        <form className="cd-search">
                            <input type="search" placeholder="Search..." />
                        </form>
                    </li>
                    <li className="has-children">
                        <a href="#">index</a>
                        <ul className="cd-secondary-dropdown icon_menu is-hidden">
                            <li className="go-back"><a href="#0">Menu</a></li>
                            <li><a href="index.html">index I</a></li>
                            <li><a href="index2.html">index II</a></li>
                            <li><a href="index3.html">index III</a></li>
                        </ul>
                    </li>
                    <li><a href="about_us.html"> about us </a></li>
                    <li><a href="investment.html"> investment plan </a></li>
                    <li><a href="faq.html"> FAQ </a></li>
                    <li className="has-children">
                        <a href="#">dashboard</a>
                        <ul className="cd-secondary-dropdown icon_menu is-hidden">
                            <li className="go-back"><a href="#0">Menu</a></li>
                            <li>
                                <a href="all_transactions.html">all transactions</a>
                            </li>
                            <li>
                                <a href="banners.html">banners</a>
                            </li>
                            <li>
                                <a href="change_password.html">change password</a>
                            </li>
                            <li>
                                <a href="change_pin.html">change pin</a>
                            </li>
                            <li>
                                <a href="deposit_history.html">deposit history</a>
                            </li>
                            <li>
                                <a href="deposit_list.html">deposit list</a>
                            </li>
                            <li>
                                <a href="earnings_history.html">earnings history</a>
                            </li>
                            <li>
                                <a href="email_notification.html">email notification</a>
                            </li>
                            <li>
                                <a href="exchange_history.html">exchange history</a>
                            </li>
                            <li>
                                <a href="exchange_money.html">exchange money</a>
                            </li>
                            <li>
                                <a href="make_deposit.html">make deposit</a>
                            </li>
                            <li>
                                <a href="my_account.html">my account</a>
                            </li>
                            <li>
                                <a href="payment_request.html">payment request</a>
                            </li>
                            <li>
                                <a href="pending_history.html">pending history</a>
                            </li>
                            <li>
                                <a href="referral_earnings.html">referral earnings</a>
                            </li>
                            <li>
                                <a href="referrals.html">referrals</a>
                            </li>
                            <li>
                                <a href="tickets.html">tickets</a>
                            </li>
                            <li>
                                <a href="transfer_fund.html">transfer fund</a>
                            </li>
                            <li>
                                <a href="view_profile.html">view profile</a>
                            </li>
                        </ul>
                    </li>
                    <li className="has-children">
                        <a href="#">blog</a>
                        <ul className="cd-secondary-dropdown icon_menu is-hidden">
                            <li className="go-back"><a href="#0">Menu</a></li>
                            <li><a href="blog_category.html">blog category</a></li>
                            <li><a href="blog_single.html">blog single</a></li>
                        </ul>
                    </li>
                    <li><a href="contact_us.html"> contact us </a></li>
                    <li><a href="login.html"> login </a></li>
                    <li><a href="register.html"> register </a></li>
                </ul>
                {/* .cd-dropdown-content */}
            </nav>
            <div className="cp_navi_main_wrapper index2_header_wrapper float_left">
                <div className="container-fluid">
                    <div className="cp_logo_wrapper">
                        <a href="index.html">
                            <img src={currentTheme === "light" ? logo4 : logo5} alt="logo" />
                        </a>
                    </div>
                    {/* mobile menu area start */}
                    <header className="mobail_menu d-block d-sm-block d-md-block d-lg-none d-xl-none">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="cd-dropdown-wrapper">
                                        <a className="house_toggle" href="#0">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 31.177 31.177" style={{ enableBackground: 'new 0 0 31.177 31.177' }} xmlSpace="preserve" width="25px" height="25px">
                                                <g>
                                                    <g>
                                                        <path className="menubar" d="M30.23,1.775H0.946c-0.489,0-0.887-0.398-0.887-0.888S0.457,0,0.946,0H30.23    c0.49,0,0.888,0.398,0.888,0.888S30.72,1.775,30.23,1.775z" fill="#004165" />
                                                    </g>
                                                    <g>
                                                        <path className="menubar" d="M30.23,9.126H12.069c-0.49,0-0.888-0.398-0.888-0.888c0-0.49,0.398-0.888,0.888-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,8.729,30.72,9.126,30.23,9.126z" fill="#004165" />
                                                    </g>
                                                    <g>
                                                        <path className="menubar" d="M30.23,16.477H0.946c-0.489,0-0.887-0.398-0.887-0.888c0-0.49,0.398-0.888,0.887-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,16.079,30.72,16.477,30.23,16.477z" fill="#004165" />
                                                    </g>
                                                    <g>
                                                        <path className="menubar" d="M30.23,23.826H12.069c-0.49,0-0.888-0.396-0.888-0.887c0-0.49,0.398-0.888,0.888-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,23.43,30.72,23.826,30.23,23.826z" fill="#004165" />
                                                    </g>
                                                    <g>
                                                        <path className="menubar" d="M30.23,31.177H0.946c-0.489,0-0.887-0.396-0.887-0.887c0-0.49,0.398-0.888,0.887-0.888H30.23    c0.49,0,0.888,0.398,0.888,0.888C31.118,30.78,30.72,31.177,30.23,31.177z" fill="#004165" />
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
                    <div className="top_header_right_wrapper top_phonecalls">
                        <p><i className="flaticon-phone-contact" /> (+91) 123 123 4567</p>
                        <div className="header_btn">
                            <ul>
                                <li>
                                    <a href="register.html"> register </a> </li>
                                <li>
                                    <a href="login.html"> login </a> </li>
                            </ul>
                        </div>
                        <ToggleTheme selectedTheme={currentTheme} onChange={setCurrentTheme} />

                    </div>
                    <div className="cp_navigation_wrapper">
                        <div className="mainmenu d-xl-block d-lg-block d-md-none d-sm-none d-none">
                            <ul className="main_nav_ul">
                                <li className="has-mega gc_main_navigation"><a href="#" className="gc_main_navigation active_class">index <i className="fas fa-caret-down" /></a>
                                    <ul className="navi_2_dropdown">
                                        <li className="parent">
                                            <a href="index.html"><i className="fas fa-caret-right" />index I</a>
                                        </li>
                                        <li className="parent">
                                            <a href="index2.html"><i className="fas fa-caret-right" />index II</a>
                                        </li>
                                        <li className="parent">
                                            <a href="index3.html"><i className="fas fa-caret-right" />index III</a>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="about_us.html" className="gc_main_navigation">about us</a></li>
                                <li><a href="investment.html" className="gc_main_navigation">investment plan</a></li>
                                <li className="has-mega gc_main_navigation"><a href="#" className="gc_main_navigation">pages <i className="fas fa-caret-down" /></a>
                                    <ul className="navi_2_dropdown">
                                        <li className="parent">
                                            <a href="faq.html"><i className="fas fa-caret-right" />FAQ</a>
                                        </li>
                                        <li className="parent">
                                            <a href="login.html"><i className="fas fa-caret-right" />login</a>
                                        </li>
                                        <li className="parent">
                                            <a href="register.html"><i className="fas fa-caret-right" />register</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="has-mega gc_main_navigation"><a href="#" className="gc_main_navigation">dashboard <i className="fas fa-caret-down" /></a>
                                    <ul className="navi_2_dropdown">
                                        <li className="parent">
                                            <a href="#"><i className="fas fa-caret-right" />my account<span><i className="fas fa-caret-right" />
                                            </span></a>
                                            <ul className="dropdown-menu-right">
                                                <li>
                                                    <a href="my_account.html"> <i className="fas fa-caret-right" />my account </a>
                                                </li>
                                                <li>
                                                    <a href="view_profile.html"> <i className="fas fa-caret-right" /> my profile</a>
                                                </li>
                                                <li>
                                                    <a href="email_notification.html"><i className="fas fa-caret-right" />email notification </a>
                                                </li>
                                                <li>
                                                    <a href="change_password.html"><i className="fas fa-caret-right" />change password</a>
                                                </li>
                                                <li>
                                                    <a href="change_pin.html"><i className="fas fa-caret-right" />change pin</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="parent">
                                            <a href="#"> <i className="fas fa-caret-right" />finance<span> <i className="fas fa-caret-right" />
                                            </span></a>
                                            <ul className="dropdown-menu-right">
                                                <li>
                                                    <a href="make_deposit.html"> <i className="fas fa-caret-right" />make deposit</a>
                                                </li>
                                                <li>
                                                    <a href="deposit_list.html"> <i className="fas fa-caret-right" /> deposit lists</a>
                                                </li>
                                                <li>
                                                    <a href="payment_request.html"><i className="fas fa-caret-right" />payment request</a>
                                                </li>
                                                <li>
                                                    <a href="exchange_money.html"><i className="fas fa-caret-right" />exchange money</a>
                                                </li>
                                                <li>
                                                    <a href="transfer_fund.html"><i className="fas fa-caret-right" />fund transfer</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="parent">
                                            <a href="#"> <i className="fas fa-caret-right" />reports<span> <i className="fas fa-caret-right" />
                                            </span></a>
                                            <ul className="dropdown-menu-right">
                                                <li>
                                                    <a href="all_transactions.html"> <i className="fas fa-caret-right" />all transactions</a>
                                                </li>
                                                <li>
                                                    <a href="deposit_history.html"> <i className="fas fa-caret-right" /> deposit history</a>
                                                </li>
                                                <li>
                                                    <a href="pending_history.html"><i className="fas fa-caret-right" />pending history</a>
                                                </li>
                                                <li>
                                                    <a href="exchange_history.html"><i className="fas fa-caret-right" />exchange history</a>
                                                </li>
                                                <li>
                                                    <a href="earnings_history.html"><i className="fas fa-caret-right" />earning history</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="parent">
                                            <a href="#"> <i className="fas fa-caret-right" />referrals<span> <i className="fas fa-caret-right" />
                                            </span></a>
                                            <ul className="dropdown-menu-right">
                                                <li>
                                                    <a href="referrals.html"> <i className="fas fa-caret-right" />my referrals</a>
                                                </li>
                                                <li>
                                                    <a href="banners.html"> <i className="fas fa-caret-right" /> promotionals banners</a>
                                                </li>
                                                <li>
                                                    <a href="referral_earnings.html"><i className="fas fa-caret-right" />referral earnings</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="parent">
                                            <a href="tickets.html"><i className="fas fa-caret-right" />view tickets</a></li>
                                    </ul>
                                </li>
                                <li className="has-mega gc_main_navigation"><a href="#" className="gc_main_navigation">blog <i className="fas fa-caret-down" /></a>
                                    <ul className="navi_2_dropdown">
                                        <li className="parent">
                                            <a href="blog_category.html"><i className="fas fa-caret-right" />blog category</a>
                                        </li>
                                        <li className="parent">
                                            <a href="blog_single.html"><i className="fas fa-caret-right" /> blog single</a>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="contact_us.html" className="gc_main_navigation">contact us</a></li>
                            </ul>
                        </div>
                        {/* mainmenu end */}
                    </div>
                </div>
            </div>
            {/* navi wrapper End */}
            {/* slider wrapper start */}
            <div className="slider-area slider_index2_wrapper float_left">
                <div className="index2_sliderbg">
                    <img src="images/sliderbg.png" alt="img" className="img-responsive" />
                </div>
                <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <div className="carousel-captions caption-1">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-10 col-md-12 col-sm-12 col-12">
                                            <div className="content">
                                                <h2 data-animation="animated bounceInUp">Often Have Small</h2>
                                                <h3 data-animation="animated bounceInUp">Invest Your Money  <br />
                                                    For <span>Future</span></h3>
                                                <div data-animation="animated bounceInUp" className="line_shape" />
                                                <p data-animation="animated bounceInUp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Ut enim ad minim veniam Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute an irure dolor in voluptate velit.</p>
                                                <div className="slider_btn index2_sliderbtn float_left">
                                                    <ul>
                                                        <li data-animation="animated bounceInLeft">
                                                            <a href="#">start now</a>
                                                        </li>
                                                        <li data-animation="animated bounceInLeft">
                                                            <a href="#">view plans</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="clear" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-captions caption-2">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-10 col-md-12 col-sm-12 col-12">
                                            <div className="content">
                                                <h2 data-animation="animated bounceInUp">Often Have Small</h2>
                                                <h3 data-animation="animated bounceInUp">Invest Your Money  <br />
                                                    For <span>Future</span></h3>
                                                <div data-animation="animated bounceInUp" className="line_shape" />
                                                <p data-animation="animated bounceInUp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Ut enim ad minim veniam Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute an irure dolor in voluptate velit.</p>
                                                <div className="slider_btn index2_sliderbtn float_left">
                                                    <ul>
                                                        <li data-animation="animated bounceInLeft">
                                                            <a href="#">start now</a>
                                                        </li>
                                                        <li data-animation="animated bounceInLeft">
                                                            <a href="#">view plans</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="clear" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-captions caption-3">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-10 col-md-12 col-sm-12 col-12">
                                            <div className="content">
                                                <h2 data-animation="animated bounceInUp">Often Have Small</h2>
                                                <h3 data-animation="animated bounceInUp">Invest Your Money  <br />
                                                    For <span>Future</span></h3>
                                                <div data-animation="animated bounceInUp" className="line_shape" />
                                                <p data-animation="animated bounceInUp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Ut enim ad minim veniam Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute an irure dolor in voluptate velit.</p>
                                                <div className="slider_btn index2_sliderbtn float_left">
                                                    <ul>
                                                        <li data-animation="animated bounceInLeft">
                                                            <a href="#">start now</a>
                                                        </li>
                                                        <li data-animation="animated bounceInLeft">
                                                            <a href="#">view plans</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="clear" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ol className="carousel-indicators">
                            <li data-target="#carousel-example-generic" data-slide-to={0} className="active"><span className="number">01</span>
                            </li>
                            <li data-target="#carousel-example-generic" data-slide-to={1} className><span className="number">02</span>
                            </li>
                            <li data-target="#carousel-example-generic" data-slide-to={2} className><span className="number">03</span>
                            </li>
                        </ol>
                        <div className="carousel-nevigation">
                            <a className="prev" href="#carousel-example-generic" role="button" data-slide="prev"> <span /> <i className="flaticon-left-arrow" />
                            </a>
                            <a className="next" href="#carousel-example-generic" role="button" data-slide="next"> <span /> <i className="flaticon-arrow-pointing-to-right" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* slider wrapper End */}
            {/*about us wrapper start */}
            <div className="about_us_wrapper index2_about_us_wrapper float_left">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12 col-lg-12 col-sm-12 col-12">
                            <div className="index2_abt_img_wrapper">
                                <img src="images/abt_3.png" alt="About" className="img-responsive" />
                                <div className="sw_disc_img_btm">
                                    <img src="images/abt_2.png" alt="About" className="img-responsive" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12 col-lg-12 col-sm-12 col-12">
                            <div className="about_content_wrapper">
                                <div className="sv_heading_wraper index2_heading">
                                    <h4>who we are</h4>
                                    <h3>Welcome to SaveHyip</h3>
                                    <div className="line_shape" />
                                </div>
                                <div className="welcone_savehiyp float_left">
                                    <p>Put your investing ideas into action with full range of investments. Enjoy real benefits and rewards on your accrue investing.</p>
                                    <div className="welcome_save_inpvate_wrapper">
                                        <ul>
                                            <li className="purple_inovate"><a href="#"><i className="flaticon-check-box" /> We Innovate </a></li>
                                            <li className="blue_inovate"><a href="#"><i className="flaticon-check-box" /> Licenced &amp; Certified </a></li>
                                            <li className="green_inovate"><a href="#"><i className="flaticon-check-box" />Saving &amp; Investments </a></li>
                                        </ul>
                                    </div>
                                    <div className="about_btn float_left">
                                        <ul>
                                            <li>
                                                <a href="#">get more</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about us wrapper end */}
            {/*investment plan wrapper start */}
            <div className="investment_plans index2_investment_plans float_left">
                <div className="investment_overlay" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-sm-12 col-12">
                            <div className="sv_heading_wraper heading_wrapper_dark index2_heading index2_heading_center">
                                <h4> our plans </h4>
                                <h3> Our Investment Plans </h3>
                                <div className="line_shape" />
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-lg-6 col-sm-6 col-12">
                            <div className="investment_box_wrapper index2_investment_box_Wraper float_left">
                                <div className="investment_icon_circle">
                                    <i className="flaticon-bar-chart" />
                                </div>
                                <div className="investment_border_wrapper" />
                                <div className="investment_content_wrapper">
                                    <h1><a href="#">silver plan</a></h1>
                                    <div className="line_shape investment_line_shape" />
                                    <p>Up to 5% for 20 Hourly
                                        <br /> Compound Available
                                        <br /> Down to 5% for 20 Hourly
                                        <br /> Principal Return
                                        <br /> Up to 5% for 20 Hourly</p>
                                </div>
                                <div className="about_btn plans_btn index2_investment_btn">
                                    <ul>
                                        <li>
                                            <a href="#">read more</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-lg-6 col-sm-6 col-12">
                            <div className="investment_box_wrapper index2_investment_box_Wraper float_left">
                                <div className="investment_icon_circle red_info_circle">
                                    <i className="flaticon-money" />
                                </div>
                                <div className="investment_border_wrapper red_border_wrapper" />
                                <div className="investment_content_wrapper red_content_wrapper">
                                    <h1><a href="#">Bronze Plan</a></h1>
                                    <div className="line_shape investment_line_shape" />
                                    <p>Up to 5% Daily for 5 Days
                                        <br /> Min deposit: $2020
                                        <br /> Max deposit: $101010
                                        <br /> Principal Return
                                        <br /> Compound Available</p>
                                </div>
                                <div className="about_btn plans_btn red_btn_plans index2_investment_btn">
                                    <ul>
                                        <li>
                                            <a href="#">read more</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-lg-6 col-sm-6 col-12">
                            <div className="investment_box_wrapper index2_investment_box_Wraper float_left">
                                <div className="investment_icon_circle blue_icon_circle">
                                    <i className="flaticon-gold" />
                                </div>
                                <div className="investment_border_wrapper blue_border_wrapper" />
                                <div className="investment_content_wrapper blue_content_wrapper">
                                    <h1><a href="#">copper plan</a></h1>
                                    <div className="line_shape investment_line_shape" />
                                    <p>Up to 3% Hourly for 10 Hourly
                                        <br /> Min deposit: $300
                                        <br /> Max deposit: $3000
                                        <br /> Principal Not Return
                                        <br /> Compound Not Available</p>
                                </div>
                                <div className="about_btn plans_btn blue_btn_plans index2_investment_btn">
                                    <ul>
                                        <li>
                                            <a href="#">read more</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-lg-6 col-sm-6 col-12">
                            <div className="investment_box_wrapper index2_investment_box_Wraper float_left">
                                <div className="investment_icon_circle green_info_circle">
                                    <i className="flaticon-medal" />
                                </div>
                                <div className="investment_border_wrapper green_border_wrapper" />
                                <div className="investment_content_wrapper green_content_wrapper">
                                    <h1><a href="#">gold plan</a></h1>
                                    <div className="line_shape investment_line_shape" />
                                    <p>Up to 7% for 30 days
                                        <br /> Min deposit: $500
                                        <br /> Max deposit: $3000
                                        <br /> Principal Not Return
                                        <br /> Compound Available</p>
                                </div>
                                <div className="about_btn plans_btn green_plan_btn index2_investment_btn">
                                    <ul>
                                        <li>
                                            <a href="#">read more</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*investment plan wrapper end */}
            {/*calculator plan wrapper start */}
            <div className="calculator_wrapper index2_calculator_wrapper float_left">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-sm-12 col-12">
                            <div className="sv_heading_wraper heading_wrapper_dark dark_heading index2_heading index2_heading_center">
                                <h4> plans calculator </h4>
                                <h3> How Much Can You Save With Plans? </h3>
                                <div className="line_shape" />
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 calc">
                            <div className="mutualfunds-calculator index2_mutualfund">
                                <div className="calculator calculator_index2">
                                    <div className="graph-area">
                                        <span className="mf-yAxis">Investment Value</span>
                                        <svg width="100%" height={350} id="graph" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 900 355" className="mf-chart">
                                            <defs>
                                                <pattern id="grid" x={10} y={10} width="100%" height={88} patternUnits="userSpaceOnUse">
                                                    <line x1={0} y1={0} x2="100%" y2={0} strokeWidth={1} shapeRendering="crispEdges" stroke="#bdbdbd" />
                                                </pattern>
                                            </defs>
                                            <rect width={480} height={355} style={{ fill: 'transparent' }} />
                                            <g>
                                                <path d="M 5,330
      C 5,330
      300,257.5
      475,170" id="path1" fill="none" stroke="#bdbdbd" strokeWidth="5px" strokeLinecap="round" className="anim-path" style={{ transition: 'stroke-dashoffset 2s ease-in-out', strokeDasharray: '522.957, 522.957', strokeDashoffset: '0px', display: 'inline' }} />
                                                <path d="M 5,330
      C 5,330
      300,257.5
      475,20" fill="none" id="path2" stroke="#05a4cd" strokeWidth="5px" strokeLinecap="round" className="anim-path" style={{ transition: 'stroke-dashoffset 2s ease-in-out', strokeDasharray: '572.872, 572.872', strokeDashoffset: '0px', display: 'inline' }} />
                                            </g>
                                            <g className="mf-circles" style={{}}>
                                                <circle cx={472} cy={22} r={8} fill="#05a4cd" stroke="#f9f9f7" strokeWidth="3px" />
                                                <circle cx={472} cy={170} r={8} fill="#bdbdbd" stroke="#f9f9f7" strokeWidth="3px" />
                                            </g>
                                        </svg>
                                        <div className="mf-xAxis">
                                            <span className="mf-xAxis-end" id="years_selected">25 Years</span>
                                        </div>
                                        <div className="labels funds_label" style={{ display: 'block' }}>
                                            <div className="chart-label">
                                                <span className="amt" id="directFund"><i className="fa fa-rupee-sign" />1.98 Cr</span>
                                                <span className="sub">total returns</span>
                                            </div>
                                            <div className="chart-label label-regular">
                                                <span className="amt" id="regularFund"><i className="fa fa-rupee-sign" />1.64 Cr</span>
                                                <span className="sub">investment amounts</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="calc-amt">
                                    <p className="calc-price" id="returnAmount">Rs. 34.06 L</p>
                                    <p>extra returns for you </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 calc">
                            <div className="calculator_portion index2_calculation_portion float_left">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="caluclator_text_wrapper">
                                            <p>deposit amount : <i className="fas fa-info-circle" /></p>
                                            <p className="dollar_wrap"><i className="fa fa-rupee-sign" />
                                                <input type="text" id="investmentAmount" />
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="caluclator_text_wrapper">
                                            <p>monthly SIP : <i className="fas fa-info-circle" /></p>
                                            <p className="dollar_wrap"><i className="fa fa-rupee-sign" />
                                                <input type="text" id="investmentAmountSIP" />
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="caluclator_text_wrapper">
                                            <p>Investment Year : <i className="fas fa-info-circle" /></p>
                                            <select className="custom-select" id="investmentYears">
                                                <option selected value={5}>5 Years</option>
                                                <option value={10}>10 Years</option>
                                                <option value={15}>15 Years</option>
                                                <option value={20}>20 Years</option>
                                                <option value={25}>25 Years</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="about_btn calc_btn index2_calc_btn float_left" onclick="CalCommission(); return false;">
                                            <ul>
                                                <li>
                                                    <a href="#">calculate profit</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*calculator plan wrapper end */}
            {/* global community wrapper start */}
            <div className="global_community_wrapper index2_global_community_wrapper float_left">
                <div className="container">
                    <div className="row">
                        <div className="global_comm_wraper index2_global_comm_wrapper">
                            <h1>We Were Always Thinking Global Community</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Ut enim ad minim veniam Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                        <div className="zero_balance_wrapper">
                            <div className="zero_commisition">
                                <h1>Zero
                                    Commissions</h1>
                                <h4>No hidden charges*</h4>
                            </div>
                            <div className="start_invest_wrap">
                                <h1>start invest now</h1>
                                <div className="about_btn float_left">
                                    <ul>
                                        <li>
                                            <a href="#">buy now !</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* global community wrapper end */}
            {/*our services wrapper start */}
            <div className="our_services_wrapper index2_our_service_wrapper float_left">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-sm-12 col-12">
                            <div className="sv_heading_wraper heading_wrapper_dark dark_heading index2_heading index2_heading_center">
                                <h4> services</h4>
                                <h3>our features</h3>
                                <div className="line_shape" />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-sm-6 col-12">
                            <div className="investment_box_wrapper service_box feature_box index2_service_box float_left">
                                <div className="investment_icon_circle">
                                    <i className="flaticon-medal" />
                                </div>
                                <div className="investment_border_wrapper" />
                                <div className="investment_content_wrapper">
                                    <h1><a href="#">We're Certified</a></h1>
                                    <div className="line_shape investment_line_shape" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Ut enim ad minim veniam</p>
                                    <span className="investment_index_icon"><a href="#"><i className="flaticon-arrow-pointing-to-right" /></a></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-sm-6 col-12">
                            <div className="investment_box_wrapper service_box feature_box index2_service_box float_left">
                                <div className="investment_icon_circle red_info_circle">
                                    <i className="flaticon-shield" />
                                </div>
                                <div className="investment_border_wrapper red_border_wrapper" />
                                <div className="investment_content_wrapper red_content_wrapper">
                                    <h1><a href="#">We're Secure</a></h1>
                                    <div className="line_shape investment_line_shape" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Ut enim ad minim veniam</p>
                                    <span className="investment_index_icon"><a href="#"><i className="flaticon-arrow-pointing-to-right" /></a></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-sm-6 col-12">
                            <div className="investment_box_wrapper service_box feature_box index2_service_box float_left">
                                <div className="investment_icon_circle blue_icon_circle">
                                    <i className="flaticon-bars" />
                                </div>
                                <div className="investment_border_wrapper blue_border_wrapper" />
                                <div className="investment_content_wrapper blue_content_wrapper">
                                    <h1><a href="#">We're Profitable</a></h1>
                                    <div className="line_shape investment_line_shape" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Ut enim ad minim veniam</p>
                                    <span className="investment_index_icon"><a href="#"><i className="flaticon-arrow-pointing-to-right" /></a></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-sm-6 col-12">
                            <div className="investment_box_wrapper service_box feature_box index2_service_box float_left">
                                <div className="investment_icon_circle green_info_circle">
                                    <i className="flaticon-bitcoin" />
                                </div>
                                <div className="investment_border_wrapper green_border_wrapper" />
                                <div className="investment_content_wrapper green_content_wrapper">
                                    <h1><a href="#">We Accept Crypto</a></h1>
                                    <div className="line_shape investment_line_shape" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Ut enim ad minim veniam</p>
                                    <span className="investment_index_icon"><a href="#"><i className="flaticon-arrow-pointing-to-right" /></a></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-sm-6 col-12">
                            <div className="investment_box_wrapper service_box feature_box index2_service_box float_left">
                                <div className="investment_icon_circle pink_info_circle">
                                    <i className="flaticon-headphones" />
                                </div>
                                <div className="investment_border_wrapper pink_border_wrapper" />
                                <div className="investment_content_wrapper pink_content_wrapper">
                                    <h1><a href="#">best support</a></h1>
                                    <div className="line_shape investment_line_shape" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Ut enim ad minim veniam</p>
                                    <span className="investment_index_icon"><a href="#"><i className="flaticon-arrow-pointing-to-right" /></a></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-sm-6 col-12">
                            <div className="investment_box_wrapper service_box feature_box index2_service_box float_left">
                                <div className="investment_icon_circle yellow_info_circle">
                                    <i className="flaticon-language" />
                                </div>
                                <div className="investment_border_wrapper yellow_border_wrapper" />
                                <div className="investment_content_wrapper yellow_content_wrapper">
                                    <h1><a href="#">We're global</a></h1>
                                    <div className="line_shape investment_line_shape" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Ut enim ad minim veniam</p>
                                    <span className="investment_index_icon"><a href="#"><i className="flaticon-arrow-pointing-to-right" /></a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*our services wrapper end */}
            {/* works wrapper start */}
            <div className="works_wrapper float_left">
                <div className="work_banner_wrapper">
                    <img src="images/video_bg.jpg" alt="img" />
                </div>
                <div className="howwork_banner_wrapper index2_homwork_banner_wrapper">
                    <div className="vedio_link_wrapper">
                        <a className="test-popup-link button" rel="external" href="https://www.youtube.com/embed/ryzOXAO0Ss0" title="title"><i className="fa fa-play" /></a>
                        <div className="work_content_wrap">
                            <h1>How It Works</h1>
                            <ul className="work_checklist_wrapper">
                                <li>
                                    <a href="#"><i className="fas fa-dollar-sign" />get deposit</a>
                                </li>
                                <li><a href="#"><i className="far fa-money-bill-alt" /> utilize money</a></li>
                                <li><a href="#"><i className="fas fa-plus" /> give interest</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* works wrapper end */}
            {/* transaction wrapper start */}
            <div className="transaction_wrapper float_left">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="sv_heading_wraper half_section_headign half_sec_heading index2_heading">
                                <h4>who we are</h4>
                                <h3>Our Latest Transaction</h3>
                                <div className="line_shape" />
                            </div>
                            <div className="x_offer_tabs_wrapper">
                                <ul className="nav nav-tabs">
                                    <li className="nav-item"> <a className="nav-link active" data-toggle="tab" href="#home"> deposits</a>
                                    </li>
                                    <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#menu2">withdraw</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="tab-content">
                                <div id="home" className="tab-pane active">
                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="table_next_race league_table overflow-scroll">
                                                <table>
                                                    <tbody><tr>
                                                        <th className="form_table_resp">name</th>
                                                        <th>date</th>
                                                        <th>amount</th>
                                                        <th>currency</th>
                                                        <th>deposit</th>
                                                    </tr>
                                                        <tr>
                                                            <td><img src="images/mem1.png" alt="img" /> <span>Olympia Ripple</span></td>
                                                            <td>June 24,2019</td>
                                                            <td>$6,00,000.00</td>
                                                            <td>Dollar</td>
                                                            <td>03 Minutes Ago</td>
                                                        </tr>
                                                        <tr>
                                                            <td><img src="images/mem4.png" alt="img" /> <span>Nancee Broom</span></td>
                                                            <td>June 04,2019</td>
                                                            <td>$16,00,000.00</td>
                                                            <td>card</td>
                                                            <td>22 Minutes Ago</td>
                                                        </tr>
                                                        <tr>
                                                            <td><img src="images/mem1.png" alt="img" /> <span>Broom Nancee</span></td>
                                                            <td>June 24,2019</td>
                                                            <td>$6,00,000.00</td>
                                                            <td>bitcoin</td>
                                                            <td>15 Minutes Ago</td>
                                                        </tr>
                                                        <tr>
                                                            <td><img src="images/mem2.png" alt="img" /> <span>Ripple Alison</span></td>
                                                            <td>June 24,2019</td>
                                                            <td>$06,00,000.00</td>
                                                            <td>ripees</td>
                                                            <td>05 Minutes Ago</td>
                                                        </tr>
                                                        <tr>
                                                            <td><img src="images/mem3.png" alt="img" /> <span>Olympia Ripple</span></td>
                                                            <td>June 05,2019</td>
                                                            <td>$45,00,000.00</td>
                                                            <td>ETH</td>
                                                            <td>13 Minutes Ago</td>
                                                        </tr>
                                                        <tr>
                                                            <td><img src="images/mem4.png" alt="img" /> <span>Alison Rittichier</span></td>
                                                            <td>June 28,2019</td>
                                                            <td>$77,00,000.00</td>
                                                            <td>payonner</td>
                                                            <td>05 Minutes Ago</td>
                                                        </tr>
                                                        <tr>
                                                            <td><img src="images/mem5.png" alt="img" /> <span>Olympia Ripple</span></td>
                                                            <td>June 24,2019</td>
                                                            <td>$11,00,000.00</td>
                                                            <td>card</td>
                                                            <td>23 Minutes Ago</td>
                                                        </tr>
                                                        <tr>
                                                            <td><img src="images/mem6.png" alt="img" /> <span>Emmett Stein </span></td>
                                                            <td>June 21,2019</td>
                                                            <td>$66,00,000.00</td>
                                                            <td>paypal</td>
                                                            <td>53 Minutes Ago</td>
                                                        </tr>
                                                    </tbody></table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="menu2" className="tab-pane fade">
                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="table_next_race league_table overflow-scroll">
                                                <table>
                                                    <tbody><tr>
                                                        <th className="form_table_resp">name</th>
                                                        <th>date</th>
                                                        <th>amount</th>
                                                        <th>currency</th>
                                                        <th>deposit</th>
                                                    </tr>
                                                        <tr>
                                                            <td><img src="images/mem4.png" alt="img" /> <span>Nancee Broom</span></td>
                                                            <td>June 04,2019</td>
                                                            <td>$16,00,000.00</td>
                                                            <td>card</td>
                                                            <td>22 Minutes Ago</td>
                                                        </tr>
                                                        <tr>
                                                            <td><img src="images/mem1.png" alt="img" /> <span>Olympia Ripple</span></td>
                                                            <td>June 24,2019</td>
                                                            <td>$6,00,000.00</td>
                                                            <td>Dollar</td>
                                                            <td>03 Minutes Ago</td>
                                                        </tr>
                                                        <tr>
                                                            <td><img src="images/mem2.png" alt="img" /> <span>Ripple Alison</span></td>
                                                            <td>June 24,2019</td>
                                                            <td>$06,00,000.00</td>
                                                            <td>ripees</td>
                                                            <td>05 Minutes Ago</td>
                                                        </tr>
                                                        <tr>
                                                            <td><img src="images/mem6.png" alt="img" /> <span>Emmett Stein
                                                            </span></td>
                                                            <td>June 21,2019</td>
                                                            <td>$66,00,000.00</td>
                                                            <td>paypal</td>
                                                            <td>53 Minutes Ago</td>
                                                        </tr>
                                                        <tr>
                                                            <td><img src="images/mem1.png" alt="img" /> <span>Broom Nancee</span></td>
                                                            <td>June 24,2019</td>
                                                            <td>$6,00,000.00</td>
                                                            <td>bitcoin</td>
                                                            <td>15 Minutes Ago</td>
                                                        </tr>
                                                        <tr>
                                                            <td><img src="images/mem4.png" alt="img" /> <span>Alison Rittichier</span></td>
                                                            <td>June 28,2019</td>
                                                            <td>$77,00,000.00</td>
                                                            <td>payonner</td>
                                                            <td>05 Minutes Ago</td>
                                                        </tr>
                                                        <tr>
                                                            <td><img src="images/mem3.png" alt="img" /> <span>Olympia Ripple</span></td>
                                                            <td>June 05,2019</td>
                                                            <td>$45,00,000.00</td>
                                                            <td>ETH</td>
                                                            <td>13 Minutes Ago</td>
                                                        </tr>
                                                        <tr>
                                                            <td><img src="images/mem5.png" alt="img" /> <span>Olympia Ripple</span></td>
                                                            <td>June 24,2019</td>
                                                            <td>$11,00,000.00</td>
                                                            <td>card</td>
                                                            <td>23 Minutes Ago</td>
                                                        </tr>
                                                    </tbody></table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* transaction wrapper start */}
            {/* testimonial wrapper start */}
            <div className="testimonial_wrapper float_left">
                <div className="investment_overlay" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-sm-12 col-12">
                            <div className="sv_heading_wraper heading_wrapper_dark index2_heading index2_heading_center">
                                <h4>testimonial</h4>
                                <h3>what people says</h3>
                                <div className="line_shape" />
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="saying_slider">
                                <div className="owl-carousel owl-theme">
                                    <div className="item">
                                        <div className="saying_content_wrapper float_left">
                                            <div className="saying_img">
                                                <img src="images/cnt1.png" alt="img" />
                                            </div>
                                            <div className="saying_img_name">
                                                <h1><a href="#">Iness Mcnzie</a></h1>
                                                <p>CEO of apple</p>
                                            </div>
                                            <p>“A wonderful serenity has taken possession of my entire soul was created for the bliss serenity”</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="saying_content_wrapper float_left">
                                            <div className="saying_img">
                                                <img src="images/cnt2.png" alt="img" />
                                            </div>
                                            <div className="saying_img_name">
                                                <h1><a href="#">Druid Wenydale</a></h1>
                                                <p>CEO of apple</p>
                                            </div>
                                            <p>“The grammar of the result language is more simple and regular the the of the individual languages”</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="saying_content_wrapper float_left">
                                            <div className="saying_img">
                                                <img src="images/cnt.png" alt="img" />
                                            </div>
                                            <div className="saying_img_name">
                                                <h1><a href="#">Casian vedere</a></h1>
                                                <p>CEO of apple</p>
                                            </div>
                                            <p>“A wonderful serenity has taken possession of my entire soul was created for the bliss serenity”</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* testimonial wrapper end */}
            {/* investors wrapper start */}
            <div className="investors_wrapper float_left">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="sv_heading_wraper half_section_headign index2_heading">
                                <h4>Tranding People</h4>
                                <h3>Our top investors</h3>
                                <div className="line_shape" />
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 sw_spectrm_padding">
                            <div className="investors_slider_wrapper index2_investors_slider_Wrapper">
                                <div className="owl-carousel owl-theme">
                                    <div className="item">
                                        <div className="inves_slider_cntn index2_inves_slider_cntnt float_left">
                                            <div className="investment_box_wrapper index_investment float_left">
                                                <div className="inves_main_border float_left">
                                                    <div className="inves_img_wrapper">
                                                        <img src="images/inves1.png" className="img-responsive" alt="img" />
                                                    </div>
                                                    <div className="investment_content_wrapper inves_heading_txt">
                                                        <h1><a href="#">akshay H.</a></h1>
                                                        <div className="line_shape investment_line_shape" />
                                                        <p>$22500.00 USD</p>
                                                        <ul className="investment_slider_icon">
                                                            <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                                            <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                                            <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                                                            <li><a href="#"><i className="fab fa-google" /></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="inves_slider_cntn index2_inves_slider_cntnt float_left">
                                            <div className="investment_box_wrapper index_investment float_left">
                                                <div className="inves_main_border float_left">
                                                    <div className="inves_img_wrapper">
                                                        <img src="images/inves2.png" className="img-responsive" alt="img" />
                                                    </div>
                                                    <div className="investment_content_wrapper inves_heading_txt">
                                                        <h1><a href="#">maria F.</a></h1>
                                                        <div className="line_shape investment_line_shape" />
                                                        <p>$22500.00 USD</p>
                                                        <ul className="investment_slider_icon">
                                                            <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                                            <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                                            <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                                                            <li><a href="#"><i className="fab fa-google" /></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="inves_slider_cntn index2_inves_slider_cntnt float_left">
                                            <div className="investment_box_wrapper index_investment float_left">
                                                <div className="inves_main_border float_left">
                                                    <div className="inves_img_wrapper">
                                                        <img src="images/inves3.png" className="img-responsive" alt="img" />
                                                    </div>
                                                    <div className="investment_content_wrapper inves_heading_txt">
                                                        <h1><a href="#">josep K.</a></h1>
                                                        <div className="line_shape investment_line_shape" />
                                                        <p>$22500.00 USD</p>
                                                        <ul className="investment_slider_icon">
                                                            <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                                            <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                                            <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                                                            <li><a href="#"><i className="fab fa-google" /></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="inves_slider_cntn index2_inves_slider_cntnt float_left">
                                            <div className="investment_box_wrapper index_investment float_left">
                                                <div className="inves_main_border float_left">
                                                    <div className="inves_img_wrapper">
                                                        <img src="images/inves4.png" className="img-responsive" alt="img" />
                                                    </div>
                                                    <div className="investment_content_wrapper inves_heading_txt">
                                                        <h1><a href="#">liva M.</a></h1>
                                                        <div className="line_shape investment_line_shape" />
                                                        <p>$22500.00 USD</p>
                                                        <ul className="investment_slider_icon">
                                                            <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                                            <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                                            <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                                                            <li><a href="#"><i className="fab fa-google" /></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="inves_slider_cntn index2_inves_slider_cntnt float_left">
                                            <div className="investment_box_wrapper index_investment float_left">
                                                <div className="inves_main_border float_left">
                                                    <div className="inves_img_wrapper">
                                                        <img src="images/inves4.png" className="img-responsive" alt="img" />
                                                    </div>
                                                    <div className="investment_content_wrapper inves_heading_txt">
                                                        <h1><a href="#">akshay H.</a></h1>
                                                        <div className="line_shape investment_line_shape" />
                                                        <p>$22500.00 USD</p>
                                                        <ul className="investment_slider_icon">
                                                            <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                                            <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                                            <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                                                            <li><a href="#"><i className="fab fa-google" /></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* investors wrapper end */}
            {/* newsletter wrapper start */}
            <div className="global_community_wrapper newsletter_wrapper index2_newsletter float_left">
                <div className="container">
                    <div className="row">
                        <div className="global_comm_wraper news_cntnt">
                            <h1>Join Our Newsletter</h1>
                            <p>Put your investing ideas into action with full range of investments.</p>
                            <div className="save_newsletter_field">
                                <input type="text" placeholder="Enter Your Email" />
                                <button type="submit">subscribe</button>
                            </div>
                        </div>
                        <div className="zero_balance_wrapper">
                            <div className="zero_commisition refreal_commison_section">
                                <h1>Refferal Commission</h1>
                                <p>Get On First Level Refferal Commission </p>
                                <div className="about_btn refreal_btn float_left">
                                    <h3>10%</h3>
                                    <ul>
                                        <li>
                                            <a href="#">get link</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* newsletter  wrapper end */}
            {/*our blog wrapper start */}
            <div className="our_blog_wrapper float_left">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-sm-12 col-12">
                            <div className="sv_heading_wraper heading_wrapper_dark dark_heading index2_heading index2_heading_center">
                                <h4> our blog</h4>
                                <h3>Our Latest News</h3>
                                <div className="line_shape" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="blog_box_wrapper index2_blog_wrapepr float_left">
                                <div className="blog_img_wrapper">
                                    <img src="images/blog_img1.jpg" alt="blog_img" />
                                    <div className="blog_date_wrapper index2_blog_date">
                                        <p>15
                                            <br /> <span>jun</span></p>
                                    </div>
                                </div>
                                <div className="btc_blog_indx_cont_wrapper">
                                    <h5> <a href="#">Aligning Resources.</a></h5>
                                    <p>Design is an evolutionary process, and filler text is just one tool in progress your pushing arsenal</p>
                                </div>
                                <div className="btc_blog_indx_cont_bottom">
                                    <div className="btc_blog_indx_cont_bottom_left">
                                        <p><i className="fa fa-user" /> &nbsp;<a href="#">by Akshay</a></p>
                                    </div>
                                    <div className="btc_blog_indx_cont_bottom_right">
                                        <p className="comments"><i className="fa fa-comments" /> &nbsp;<a href="#">04 comments</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="blog_box_wrapper index2_blog_wrapepr float_left">
                                <div className="blog_img_wrapper">
                                    <img src="images/blog_img2.jpg" alt="blog_img" />
                                    <div className="blog_date_wrapper index2_blog_date">
                                        <p>15
                                            <br /> <span>jun</span></p>
                                    </div>
                                </div>
                                <div className="btc_blog_indx_cont_wrapper">
                                    <h5> <a href="#">filling critical data</a></h5>
                                    <p>Design is an evolutionary process, and filler text is just one tool in progress your pushing arsenal</p>
                                </div>
                                <div className="btc_blog_indx_cont_bottom">
                                    <div className="btc_blog_indx_cont_bottom_left">
                                        <p><i className="fa fa-user" /> &nbsp;<a href="#">by Akshay</a></p>
                                    </div>
                                    <div className="btc_blog_indx_cont_bottom_right">
                                        <p className="comments"><i className="fa fa-comments" /> &nbsp;<a href="#">04 comments</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="blog_box_wrapper index2_blog_wrapepr float_left">
                                <div className="blog_img_wrapper">
                                    <img src="images/blog_img3.jpg" alt="blog_img" />
                                    <div className="blog_date_wrapper index2_blog_date">
                                        <p>15
                                            <br /> <span>jun</span></p>
                                    </div>
                                </div>
                                <div className="btc_blog_indx_cont_wrapper">
                                    <h5> <a href="#">getting started</a></h5>
                                    <p>Design is an evolutionary process, and filler text is just one tool in progress your pushing arsenal</p>
                                </div>
                                <div className="btc_blog_indx_cont_bottom">
                                    <div className="btc_blog_indx_cont_bottom_left">
                                        <p><i className="fa fa-user" /> &nbsp;<a href="#">by Akshay</a></p>
                                    </div>
                                    <div className="btc_blog_indx_cont_bottom_right">
                                        <p className="comments"><i className="fa fa-comments" /> &nbsp;<a href="#">04 comments</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*our blog wrapper end */}
            {/* FAQ wrapper start */}
            <div className="faq_wrapper float_left">
                <div className="investment_overlay faq_overlay" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-sm-12 col-12">
                            <div className="sv_heading_wraper heading_wrapper_dark index2_heading  index2_heading_center">
                                <h4>FAQ section</h4>
                                <h3>Frequently Asked Questions</h3>
                                <div className="line_shape" />
                            </div>
                        </div>
                    </div>
                    <div id="accordion" role="tablist">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="card">
                                    {/* Card Title */}
                                    <div className="card_pagee" role="tab" id="headingOne">
                                        <h5 className="h5-md">
                                            <a data-toggle="collapse" href="#collapseOne" role="button" aria-expanded="true" aria-controls="collapseOne">
                                                How can i get help by inbound marketing?
                                            </a>
                                        </h5>
                                    </div>
                                    {/* Card Content */}
                                    <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion" style={{}}>
                                        <div className="card-body">
                                            <div className="card_img">
                                                <img src="images/ac1.jpg" alt="img" />
                                            </div>
                                            <div className="card_cntnt">
                                                <p>Morbi accumsan ipsum velit. Nam nec aks tel lus a odio tincidunt auctor. Proi gravida nibh vel velit auctor.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card_pagee" role="tab" id="headingTwo">
                                        <h5 className="h5-md">
                                            <a className="collapsed" data-toggle="collapse" href="#collapseTwo" role="button" aria-expanded="false" aria-controls="collapseTwo">
                                                What about loan programs?
                                            </a>
                                        </h5>
                                    </div>
                                    <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion" style={{}}>
                                        <div className="card-body">
                                            <div className="card_img">
                                                <img src="images/ac2.jpg" alt="img" />
                                            </div>
                                            <div className="card_cntnt">
                                                <p>Morbi accumsan ipsum velit. Nam nec aks tel lus a odio tincidunt auctor. Proi gravida nibh vel velit auctor.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card_pagee" role="tab" id="headingThree">
                                        <h5 className="h5-md">
                                            <a className="collapsed" data-toggle="collapse" href="#collapseThree" role="button" aria-expanded="false" aria-controls="collapseThree">
                                                Our Happy Clients
                                            </a>
                                        </h5>
                                    </div>
                                    <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                                        <div className="card-body">
                                            <div className="card_img">
                                                <img src="images/ac3.jpg" alt="img" />
                                            </div>
                                            <div className="card_cntnt">
                                                <p>Morbi accumsan ipsum velit. Nam nec aks tel lus a odio tincidunt auctor. Proi gravida nibh vel velit auctor.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card_pagee" role="tab" id="heading4">
                                        <h5 className="h5-md">
                                            <a className="collapsed" data-toggle="collapse" href="#collapse41" role="button" aria-expanded="false" aria-controls="collapse41">
                                                Get Training From Experts
                                            </a>
                                        </h5>
                                    </div>
                                    <div id="collapse41" className="collapse" role="tabpanel" aria-labelledby="heading4" data-parent="#accordion">
                                        <div className="card-body">
                                            <div className="card_img">
                                                <img src="images/ac1.jpg" alt="img" />
                                            </div>
                                            <div className="card_cntnt">
                                                <p>Morbi accumsan ipsum velit. Nam nec aks tel lus a odio tincidunt auctor. Proi gravida nibh vel velit auctor.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card_pagee" role="tab" id="heading7">
                                        <h5 className="h5-md">
                                            <a className="collapsed" data-toggle="collapse" href="#collapseT" role="button" aria-expanded="false" aria-controls="collapseT">
                                                User Guide: Getting Started
                                            </a>
                                        </h5>
                                    </div>
                                    <div id="collapseT" className="collapse" role="tabpanel" aria-labelledby="heading7" data-parent="#accordion">
                                        <div className="card-body">
                                            <div className="card_img">
                                                <img src="images/ac3.jpg" alt="img" />
                                            </div>
                                            <div className="card_cntnt">
                                                <p>Morbi accumsan ipsum velit. Nam nec aks tel lus a odio tincidunt auctor. Proi gravida nibh vel velit auctor.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="card">
                                    {/* Card Title */}
                                    <div className="card_pagee" role="tab" id="headingfour">
                                        <h5 className="h5-md">
                                            <a className="collapsed" data-toggle="collapse" href="#collapse1" role="button" aria-expanded="false" aria-controls="collapse1">
                                                What about loan programs?
                                            </a>
                                        </h5>
                                    </div>
                                    {/* Card Content */}
                                    <div id="collapse1" className="collapse" role="tabpanel" aria-labelledby="headingfour" data-parent="#accordion" style={{}}>
                                        <div className="card-body">
                                            <div className="card_img">
                                                <img src="images/ac1.jpg" alt="img" />
                                            </div>
                                            <div className="card_cntnt">
                                                <p>Morbi accumsan ipsum velit. Nam nec aks tel lus a odio tincidunt auctor. Proi gravida nibh vel velit auctor.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card_pagee" role="tab" id="headingfive">
                                        <h5 className="h5-md">
                                            <a className="collapsed" data-toggle="collapse" href="#collapse2" role="button" aria-expanded="false" aria-controls="collapse2">
                                                Unlimited Features &amp; Unique Layouts
                                            </a>
                                        </h5>
                                    </div>
                                    <div id="collapse2" className="collapse" role="tabpanel" aria-labelledby="headingfive" data-parent="#accordion" style={{}}>
                                        <div className="card-body">
                                            <div className="card_img">
                                                <img src="images/ac2.jpg" alt="img" />
                                            </div>
                                            <div className="card_cntnt">
                                                <p>Morbi accumsan ipsum velit. Nam nec aks tel lus a odio tincidunt auctor. Proi gravida nibh vel velit auctor.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card_pagee" role="tab" id="headingnine">
                                        <h5 className="h5-md">
                                            <a className="collapsed" data-toggle="collapse" href="#collapse02" role="button" aria-expanded="false" aria-controls="collapse02">
                                                Clean and Unique
                                            </a>
                                        </h5>
                                    </div>
                                    <div id="collapse02" className="collapse" role="tabpanel" aria-labelledby="headingnine" data-parent="#accordion" style={{}}>
                                        <div className="card-body">
                                            <div className="card_img">
                                                <img src="images/ac2.jpg" alt="img" />
                                            </div>
                                            <div className="card_cntnt">
                                                <p>Morbi accumsan ipsum velit. Nam nec aks tel lus a odio tincidunt auctor. Proi gravida nibh vel velit auctor.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card_pagee" role="tab" id="headingten">
                                        <h5 className="h5-md">
                                            <a className="collapsed" data-toggle="collapse" href="#collapse092" role="button" aria-expanded="false" aria-controls="collapse092">
                                                Deeply Customisable Theme
                                            </a>
                                        </h5>
                                    </div>
                                    <div id="collapse092" className="collapse" role="tabpanel" aria-labelledby="headingten" data-parent="#accordion" style={{}}>
                                        <div className="card-body">
                                            <div className="card_img">
                                                <img src="images/ac2.jpg" alt="img" />
                                            </div>
                                            <div className="card_cntnt">
                                                <p>Morbi accumsan ipsum velit. Nam nec aks tel lus a odio tincidunt auctor. Proi gravida nibh vel velit auctor.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card_pagee" role="tab" id="headingsiz">
                                        <h5 className="h5-md">
                                            <a className="collapsed" data-toggle="collapse" href="#collapse3" role="button" aria-expanded="false" aria-controls="collapse3">
                                                How do I use the features ?
                                            </a>
                                        </h5>
                                    </div>
                                    <div id="collapse3" className="collapse" role="tabpanel" aria-labelledby="headingsiz" data-parent="#accordion">
                                        <div className="card-body">
                                            <div className="card_img">
                                                <img src="images/ac3.jpg" alt="img" />
                                            </div>
                                            <div className="card_cntnt">
                                                <p>Morbi accumsan ipsum velit. Nam nec aks tel lus a odio tincidunt auctor. Proi gravida nibh vel velit auctor.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card_pagee" role="tab" id="headingseven">
                                        <h5 className="h5-md">
                                            <a className="collapsed" data-toggle="collapse" href="#collapse31" role="button" aria-expanded="false" aria-controls="collapse31">
                                                Pixel perfect and responsive
                                            </a>
                                        </h5>
                                    </div>
                                    <div id="collapse31" className="collapse" role="tabpanel" aria-labelledby="headingseven" data-parent="#accordion">
                                        <div className="card-body">
                                            <div className="card_img">
                                                <img src="images/ac2.jpg" alt="img" />
                                            </div>
                                            <div className="card_cntnt">
                                                <p>Morbi accumsan ipsum velit. Nam nec aks tel lus a odio tincidunt auctor. Proi gravida nibh vel velit auctor.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card_pagee" role="tab" id="headingeight">
                                        <h5 className="h5-md">
                                            <a className="collapsed" data-toggle="collapse" href="#collapse32" role="button" aria-expanded="false" aria-controls="collapse32">
                                                Imagination Is The Beginning
                                            </a>
                                        </h5>
                                    </div>
                                    <div id="collapse32" className="collapse" role="tabpanel" aria-labelledby="headingeight" data-parent="#accordion">
                                        <div className="card-body">
                                            <div className="card_img">
                                                <img src="images/ac1.jpg" alt="img" />
                                            </div>
                                            <div className="card_cntnt">
                                                <p>Morbi accumsan ipsum velit. Nam nec aks tel lus a odio tincidunt auctor. Proi gravida nibh vel velit auctor.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <div className="about_btn calc_btn faqq_btn float_left">
                            <ul>
                                <li>
                                    <a href="#" data-toggle="modal" data-target="#myModal">ask questions ?</a>
                                </li>
                            </ul>
                        </div>
                        <div className="modal fade question_modal" id="myModal" role="dialog">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <button type="button" className="close" data-dismiss="modal">×</button>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="sv_question_pop float_left">
                                                <h1>ask questions ? </h1>
                                                <div className="search_alert_box float_left">
                                                    <div className="apply_job_form">
                                                        <input type="text" name="full_name" placeholder="full name" />
                                                    </div>
                                                    <div className="apply_job_form">
                                                        <input type="text" name="Email" placeholder="Enter Your Email" />
                                                    </div>
                                                    <div className="apply_job_form">
                                                        <input type="text" name="subject" placeholder="your question" />
                                                    </div>
                                                    <div className="apply_job_form">
                                                        <textarea className="form-control" name="message" placeholder="Message" defaultValue={""} />
                                                    </div>
                                                </div>
                                                <div className="question_sec float_left">
                                                    <div className="about_btn calc_btn faqq_btn ques_Btn">
                                                        <ul>
                                                            <li>
                                                                <a href="#">apply now</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="cancel_wrapper">
                                                        <a href="#" className data-dismiss="modal">cancel</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* FAQ wrapper end */}
            {/* payments wrapper start */}
            <div className="payments_wrapper float_left">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="sv_heading_wraper half_section_headign index2_heading">
                                <h4>Payment Methods</h4>
                                <h3>Accepted Payment Method</h3>
                                <div className="line_shape" />
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                            <div className="payment_slider_wrapper">
                                <div className="owl-carousel owl-theme">
                                    <div className="item">
                                        <div className="partner_img_wrapper float_left">
                                            <img src="images/partner1.png" className="img-responsive" alt="img" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="partner_img_wrapper float_left">
                                            <img src="images/partner2.png" className="img-responsive" alt="img" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="partner_img_wrapper float_left">
                                            <img src="images/partner3.png" className="img-responsive" alt="img" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="partner_img_wrapper float_left">
                                            <img src="images/partner4.png" className="img-responsive" alt="img" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="partner_img_wrapper float_left">
                                            <img src="images/partner2.png" className="img-responsive" alt="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* payments wrapper end */}
            {/* footer section start*/}
            <div className="footer_main_wrapper index2_footer_wrapper float_left">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12 col-sm-12">
                            <div className="wrapper_second_about">
                                <div className="wrapper_first_image">
                                    <a href="index.html"><img src="images/logo_resp.png" className="img-responsive" alt="logo" /></a>
                                </div>
                                <p>We are a full service Digital Marketing Agency all the foundational tool you need.</p>
                                <div className="counter-section">
                                    <div className="ft_about_icon float_left">
                                        <i className="flaticon-user" />
                                        <div className="ft_abt_text_wrapper">
                                            <p className="timer"> 62236</p>
                                            <h4>total member</h4>
                                        </div>
                                    </div>
                                    <div className="ft_about_icon float_left">
                                        <i className="flaticon-money-bag" />
                                        <div className="ft_abt_text_wrapper">
                                            <p className="timer">27236</p>
                                            <h4>total deposited</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-12 col-sm-4">
                            <div className="wrapper_second_useful">
                                <h4>usefull links </h4>
                                <ul>
                                    <li><a href="#"><i className="fa fa-angle-right" />About us</a>
                                    </li>
                                    <li><a href="#"><i className="fa fa-angle-right" />contact </a>
                                    </li>
                                    <li><a href="#"><i className="fa fa-angle-right" />services</a>
                                    </li>
                                    <li><a href="#"><i className="fa fa-angle-right" />news</a> </li>
                                    <li><a href="#"><i className="fa fa-angle-right" />blog</a> </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-12 col-sm-4">
                            <div className="wrapper_second_useful wrapper_second_links">
                                <ul>
                                    <li><a href="#"><i className="fa fa-angle-right" />sitemap</a>
                                    </li>
                                    <li><a href="#"><i className="fa fa-angle-right" />FAQ </a>
                                    </li>
                                    <li><a href="#"><i className="fa fa-angle-right" />awards </a>
                                    </li>
                                    <li><a href="#"><i className="fa fa-angle-right" />tstimonials</a>
                                    </li>
                                    <li><a href="#"><i className="fa fa-angle-right" />career</a> </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 col-sm-12">
                            <div className="wrapper_second_useful wrapper_second_useful_2">
                                <h4>contact  us</h4>
                                <ul>
                                    <li>
                                        <h1>+800 568 322</h1></li>
                                    <li><a href="#"><i className="flaticon-mail" />savehyip@example.com</a>
                                    </li>
                                    <li><a href="#"><i className="flaticon-language" />www.example.com</a>
                                    </li>
                                    <li><i className="flaticon-placeholder" />110, B Street Kalani Bagh Dewas, Madhya Pradesh, INDIA #455001
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                            <div className="copyright_wrapper float_left">
                                <div className="copyright">
                                    <p>Copyright <i className="far fa-copyright" /> 2019 <a href="index.html"> SaveHyip</a>. all right reserved - design by <a href="index.html">webstrot</a></p>
                                </div>
                                <div className="social_link_foter">
                                    <ul>
                                        <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                        <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                                        <li><a href="#"><i className="fab fa-google-plus-g" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
    }
    export default Homepage;