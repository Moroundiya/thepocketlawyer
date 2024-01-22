import React from 'react';
import logo from '../assets/images/logo.png';
import logo2 from '../assets/images/logo2.png';
import ts1 from '../assets/images/ts1.png';
import ts2 from '../assets/images/ts2.png';
import inves1 from '../assets/images/inves1.png';
import inves2 from '../assets/images/inves2.png';
import inves3 from '../assets/images/inves3.png';
import inves4 from '../assets/images/inves4.png';

function About() {
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
            <div className="cp_navi_main_wrapper inner_header_wrapper float_left">
                <div className="container-fluid">
                    <div className="cp_logo_wrapper">
                        <a href="index.html">
                            <img src={logo2} alt="logo" />
                        </a>
                    </div>
                    {/* mobile menu area start */}
                    <header className="mobail_menu d-block d-sm-block d-md-block d-lg-none d-xl-none">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="cd-dropdown-wrapper">
                                        <a className="house_toggle inner_toggle" href="#0">
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
                    <div className="top_header_right_wrapper">
                        <p><i className="flaticon-phone-contact" /> (+91) 123 123 4567</p>
                        <div className="header_btn">
                            <ul>
                                <li>
                                    <a href="register.html"> register </a> </li>
                                <li>
                                    <a href="login.html"> login </a> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="cp_navigation_wrapper main_top_wrapper">
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
                                                    <a href="my_account.html"> <i className="fas fa-caret-right" />my account</a>
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
            {/* inner header wrapper start */}
            <div className="page_title_section">
                <div className="page_header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 col-md-9 col-12 col-sm-8">
                                <h1>About us </h1>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12 col-sm-4">
                                <div className="sub_title_section">
                                    <ul className="sub_title">
                                        <li> <a href="#"> Home </a>&nbsp; / &nbsp; </li>
                                        <li>About us </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* inner header wrapper end */}
            {/* about us wrapper start */}
            <div className="sv_about_wrapper fixed_portion float_left">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12 col-sm-12">
                            <div className="border_about_wrapper float_left">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-12 col-sm-12">
                                        <div className="sv_abt_img_wrapper float_left">
                                            <img src={abt_img} alt="img" className="img-responsive" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-12 col-sm-12">
                                        <div className="sv_abt_content_wrapper float_left">
                                            <h1>OUR STORY</h1>
                                            <p>One of the best investing marketing
                                                <br /> tools is High yield investment program.</p>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, we clear consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor out incididunt ut labore et dolore magna aliqua. Amet facilisis magna etiam tempor orci.
                                            <br />
                                            <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about us wrapper end */}
            {/* about us wrapper start */}
            <div className="sv_money_wrapper float_left">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12 col-sm-12">
                            <div className="sv_money_text_wrapper float_left">
                                <h1>We Make Your</h1>
                                <h2>Invest To Grow a <br />
                                    Your Money !</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it hasfact that a reader will be distracted by the readable content of a page when do is nitin we done your project with new assignmentg
                                    <br /> Lorem Ipsum is that it hasfact that a reader will be distracted by the readable content of a page when do is nitin we done your project </p>
                                <div className="about_btn float_left inner_abt_btn">
                                    <ul>
                                        <li>
                                            <a href="#">get more</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 col-sm-12">
                            <div className="sv_abt_img_wrapper float_left">
                                <img src={abt_1} alt="img" className="img-responsive" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about us wrapper end */}
            {/* counter wrapper start*/}
            <div className="counter_section float_left">
                <div className="investment_overlay" />
                <div className="counter-section2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-12 col-sm-6">
                                <div className="counter_cntnt_box">
                                    <div className="tb_icon investment_icon_circle">
                                        <div className="icon"><i className="flaticon-bar-chart" />
                                        </div>
                                        <div className="investment_border_wrapper" />
                                    </div>
                                    <div className="count-description"><span className="timer">2846</span>
                                        <h5 className="con1"> <a href="#">days online</a></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12 col-sm-6">
                                <div className="counter_cntnt_box">
                                    <div className="tb_icon investment_icon_circle blue_icon_circle">
                                        <div className="icon"><i className="flaticon-user" />
                                        </div>
                                        <div className="investment_border_wrapper blue_border_wrapper" />
                                    </div>
                                    <div className="count-description"> <span className="timer">425</span>
                                        <h5 className="con2"> <a href="#"> registered users </a></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12 col-sm-6">
                                <div className="counter_cntnt_box">
                                    <div className="tb_icon investment_icon_circle red_info_circle">
                                        <div className="icon"><i className="flaticon-salary" />
                                        </div>
                                        <div className="investment_border_wrapper red_border_wrapper" />
                                    </div>
                                    <div className="count-description"> <span className="timer">7660</span>
                                        <h5 className="con2"> <a href="#"> total deposit </a></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12 col-sm-6">
                                <div className="counter_cntnt_box">
                                    <div className="tb_icon investment_icon_circle green_info_circle">
                                        <div className="icon"><i className="flaticon-withdrawal" />
                                        </div>
                                        <div className="investment_border_wrapper green_border_wrapper" />
                                    </div>
                                    <div className="count-description"> <span className="timer">2347</span>
                                        <h5 className="con4"> <a href="#"> total  withdraw</a></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* counter wrapper end*/}
            {/*our services wrapper start */}
            <div className="our_services_wrapper float_left">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-sm-12 col-12">
                            <div className="sv_heading_wraper heading_wrapper_dark dark_heading">
                                <h4> features</h4>
                                <h3>savehyip features</h3>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-sm-6 col-12">
                            <div className="investment_box_wrapper service_box float_left">
                                <div className="investment_icon_circle">
                                    <i className="flaticon-medal" />
                                </div>
                                <div className="investment_border_wrapper" />
                                <div className="investment_content_wrapper">
                                    <h1><a href="#">our mission</a></h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Ut enim ad minim veniam</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-sm-6 col-12">
                            <div className="investment_box_wrapper service_box float_left">
                                <div className="investment_icon_circle red_info_circle">
                                    <i className="flaticon-shield" />
                                </div>
                                <div className="investment_border_wrapper red_border_wrapper" />
                                <div className="investment_content_wrapper red_content_wrapper">
                                    <h1><a href="#">our vision</a></h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Ut enim ad minim veniam</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-sm-6 col-12">
                            <div className="investment_box_wrapper service_box float_left">
                                <div className="investment_icon_circle blue_icon_circle">
                                    <i className="flaticon-bars" />
                                </div>
                                <div className="investment_border_wrapper blue_border_wrapper" />
                                <div className="investment_content_wrapper blue_content_wrapper">
                                    <h1><a href="#">our value</a></h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Ut enim ad minim veniam</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*our services wrapper end */}
            {/* testimonial wrapper start */}
            <div className="testimonial_wrapper float_left">
                <div className="investment_overlay" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-sm-12 col-12">
                            <div className="sv_heading_wraper heading_wrapper_dark">
                                <h4>testimonial</h4>
                                <h3>what people says</h3>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="testimonial_slider_wrapper">
                                <div className="owl-carousel owl-theme">
                                    <div className="item">
                                        <div className="testimonial_slide_main_wrapper dark_top_testimonial">
                                            <div className="ts_client_cont_wrapper">
                                                <p>“This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.”</p>
                                            </div>
                                            <div className="ts_img_social_wrapper">
                                                <div className="ts_client_img_wrapper">
                                                    <img src={ts1} className="img-responsive" alt="client_img" />
                                                </div>
                                                <div className="ts_client_social_wrapper">
                                                    <p>- by Merry Jain
                                                        <br /> <span>(investor, gold)</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonial_slide_main_wrapper">
                                            <div className="ts_client_cont_wrapper dark_testimonial_wrapper">
                                                <p>“This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.”</p>
                                            </div>
                                            <div className="ts_img_social_wrapper p2">
                                                <div className="ts_client_social_wrapper right_social_medaia">
                                                    <p>- by joahn doe
                                                        <br /> <span>(investor, gold)</span></p>
                                                </div>
                                                <div className="ts_client_img_wrapper">
                                                    <img src={ts2} className="img-responsive" alt="client_img" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonial_slide_main_wrapper dark_top_testimonial">
                                            <div className="ts_client_cont_wrapper">
                                                <p>“This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.”</p>
                                            </div>
                                            <div className="ts_img_social_wrapper">
                                                <div className="ts_client_img_wrapper">
                                                    <img src={ts1} className="img-responsive" alt="client_img" />
                                                </div>
                                                <div className="ts_client_social_wrapper">
                                                    <p>- by Merry Jain
                                                        <br /> <span>(investor, gold)</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonial_slide_main_wrapper">
                                            <div className="ts_client_cont_wrapper dark_testimonial_wrapper">
                                                <p>“This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.”</p>
                                            </div>
                                            <div className="ts_img_social_wrapper p2">
                                                <div className="ts_client_social_wrapper right_social_medaia">
                                                    <p>- by joahn doe
                                                        <br /> <span>(investor, gold)</span></p>
                                                </div>
                                                <div className="ts_client_img_wrapper">
                                                    <img src={ts2} className="img-responsive" alt="client_img" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonial_slide_main_wrapper dark_top_testimonial">
                                            <div className="ts_client_cont_wrapper">
                                                <p>“This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.”</p>
                                            </div>
                                            <div className="ts_img_social_wrapper">
                                                <div className="ts_client_img_wrapper">
                                                    <img src={ts1} className="img-responsive" alt="client_img" />
                                                </div>
                                                <div className="ts_client_social_wrapper">
                                                    <p>- by Merry Jain
                                                        <br /> <span>(investor, gold)</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonial_slide_main_wrapper">
                                            <div className="ts_client_cont_wrapper dark_testimonial_wrapper">
                                                <p>“This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.”</p>
                                            </div>
                                            <div className="ts_img_social_wrapper p2">
                                                <div className="ts_client_social_wrapper right_social_medaia">
                                                    <p>- by joahn doe
                                                        <br /> <span>(investor, gold)</span></p>
                                                </div>
                                                <div className="ts_client_img_wrapper">
                                                    <img src={ts2} className="img-responsive" alt="client_img" />
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
            {/* testimonial wrapper end */}
            {/* investors wrapper start */}
            <div className="investors_wrapper float_left">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="sv_heading_wraper half_section_headign">
                                <h4>Tranding People</h4>
                                <h3>Our top investors</h3>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 sw_spectrm_padding">
                            <div className="investors_slider_wrapper">
                                <div className="owl-carousel owl-theme">
                                    <div className="item">
                                        <div className="inves_slider_cntn float_left">
                                            <div className="investment_box_wrapper index_investment float_left">
                                                <div className="inves_img_wrapper">
                                                    <img src={inves1} className="img-responsive" alt="img" />
                                                </div>
                                                <div className="inves_main_border float_left">
                                                    <div className="investment_icon_circle inves_icon">
                                                        <i className="flaticon-twitter" />
                                                    </div>
                                                    <div className="investment_border_wrapper inves_border_slider" />
                                                    <div className="investment_content_wrapper inves_heading_txt">
                                                        <h1><a href="#">akshay H.</a></h1>
                                                        <p>$22500.00 USD</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="inves_slider_cntn float_left">
                                            <div className="investment_box_wrapper index_investment float_left">
                                                <div className="inves_img_wrapper">
                                                    <img src={inves2} className="img-responsive" alt="img" />
                                                </div>
                                                <div className="inves_main_border float_left">
                                                    <div className="investment_icon_circle inves_icon">
                                                        <i className="flaticon-twitter" />
                                                    </div>
                                                    <div className="investment_border_wrapper inves_border_slider" />
                                                    <div className="investment_content_wrapper inves_heading_txt">
                                                        <h1><a href="#">maria F.</a></h1>
                                                        <p>$22500.00 USD</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="inves_slider_cntn float_left">
                                            <div className="investment_box_wrapper index_investment float_left">
                                                <div className="inves_img_wrapper">
                                                    <img src={inves3} className="img-responsive" alt="img" />
                                                </div>
                                                <div className="inves_main_border float_left">
                                                    <div className="investment_icon_circle inves_icon">
                                                        <i className="flaticon-twitter" />
                                                    </div>
                                                    <div className="investment_border_wrapper inves_border_slider" />
                                                    <div className="investment_content_wrapper inves_heading_txt">
                                                        <h1><a href="#">josep K.</a></h1>
                                                        <p>$22500.00 USD</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="inves_slider_cntn float_left">
                                            <div className="investment_box_wrapper index_investment float_left">
                                                <div className="inves_img_wrapper">
                                                    <img src={inves4} className="img-responsive" alt="img" />
                                                </div>
                                                <div className="inves_main_border float_left">
                                                    <div className="investment_icon_circle inves_icon">
                                                        <i className="flaticon-twitter" />
                                                    </div>
                                                    <div className="investment_border_wrapper inves_border_slider" />
                                                    <div className="investment_content_wrapper inves_heading_txt">
                                                        <h1><a href="#">liva M.</a></h1>
                                                        <p>$22500.00 USD</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="inves_slider_cntn float_left">
                                            <div className="investment_box_wrapper index_investment float_left">
                                                <div className="inves_img_wrapper">
                                                    <img src={inves3} className="img-responsive" alt="img" />
                                                </div>
                                                <div className="inves_main_border float_left">
                                                    <div className="investment_icon_circle inves_icon">
                                                        <i className="flaticon-twitter" />
                                                    </div>
                                                    <div className="investment_border_wrapper inves_border_slider" />
                                                    <div className="investment_content_wrapper inves_heading_txt">
                                                        <h1><a href="#">akshay H.</a></h1>
                                                        <p>$22500.00 USD</p>
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
            {/* footer section start*/}
            <div className="footer_main_wrapper float_left">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12 col-sm-12">
                            <div className="wrapper_second_about">
                                <div className="wrapper_first_image">
                                    <a href="index.html"><img src={logo} className="img-responsive" alt="logo" /></a>
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

export default About