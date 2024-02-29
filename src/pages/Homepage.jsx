import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import 'animate.css';
import '../custom.js';
import '../jquery.menu-aim.js';
// import '../logo-carousel.js';
import '../App.css';
import '../external.css';

import t1 from '../assets/images/t1.png';
import t2 from '../assets/images/t2.png';
import t3 from '../assets/images/t3.png';
import t4 from '../assets/images/t4.png';
import t5 from '../assets/images/t5.png';
import t6 from '../assets/images/t6.png';
import vanguard from '../assets/images/vanguard.png'
import techpoint from '../assets/images/techpoint.png';
import techcabal from '../assets/images/techcabal.png';
import punch from '../assets/images/punch.png';
import guardian from '../assets/images/guardian.png';
import sun from '../assets/images/the sun.png'


import logo_light from '../assets/images/logo-light.png';
import logo_dark from '../assets/images/logo-dark.png';
import logo4 from '../assets/images/logo4.png';
import logo5 from '../assets/images/logo5.png';
import sliderbg from '../assets/images/sliderbg.png';
import abt_2 from '../assets/images/abt_2.png';
import abt_3 from '../assets/images/abt_3.png';
import video_bg from '../assets/images/video_bg.jpg';
import cnt1 from '../assets/images/cnt1.png';
import cnt2 from '../assets/images/cnt2.png';
import cnt from '../assets/images/cnt.png';
import logo_resp from '../assets/images/logo_resp.png';
import mem1 from '../assets/images/mem1.png';
import mem2 from '../assets/images/mem2.png';
import mem3 from '../assets/images/mem3.png';
import mem4 from '../assets/images/mem4.png';
import mem5 from '../assets/images/mem5.png';
import mem6 from '../assets/images/mem6.png';
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
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
// import DarkModeToggle from '../components/DarkModeToggle';

import CountUp from 'react-countup';


function useIsInViewport(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const observer = useMemo(
        () =>
            new IntersectionObserver(([entry]) =>
                setIsIntersecting(entry.isIntersecting),
            ),
        [],
    );

    useEffect(() => {
        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, [ref, observer]);

    return isIntersecting;
}


function Homepage() {
    const ref1 = useRef(null);
    const isInViewport1 = useIsInViewport(ref1);

    return (
        <div>
            <div className="cursor" />
            {/* Top Scroll Start */}
            <a href="javascript:" id="return-to-top"> <i className="fas fa-angle-double-up" /></a>
            {/* Top Scroll End */}
            {/* cp navi wrapper Start */}


            <Header />

            {/* navi wrapper End */}


            {/* slider wrapper start */}
            <div className="slider-area slider_index2_wrapper float_left">
                <div className="index2_sliderbg">
                    <img src={sliderbg} alt="img" className="img-responsive" />
                </div>
                <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <div className="carousel-captions caption-1">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-10 col-md-12 col-sm-12 col-12">
                                            <div className="content">
                                                {/* <h2 data-animation="animated bounceInUp">Often Have Small</h2> */}
                                                <h3 data-animation="animated bounceInUp">Chat with a <br />
                                                    Lawyer for  <span>personalized help!</span></h3>
                                                <div data-animation="animated bounceInUp" className="line_shape" />
                                                <p data-animation="animated bounceInUp">
                                                    <Icon icon="emojione-v1:left-check-mark" /> &nbsp;
                                                    Search and Book Any Lawyer of Your Choice
                                                </p>
                                                <p data-animation="animated bounceInUp">
                                                    <Icon icon="emojione-v1:left-check-mark" /> &nbsp;
                                                    All legal issues like divorce, real estate, child custody, and many more!
                                                </p>
                                                <p data-animation="animated bounceInUp">
                                                    <Icon icon="emojione-v1:left-check-mark" /> &nbsp;
                                                    Protect your family and your rights with expert legal help
                                                </p>
                                                <p data-animation="animated bounceInUp">
                                                    <Icon icon="emojione-v1:left-check-mark" /> &nbsp;
                                                    Unlimited chats, plus legal document &amp; small-claims court help
                                                </p>
                                                <div className="slider_btn index2_sliderbtn float_left cta-header-btn ">
                                                    <ul>
                                                        <li data-animation="animated bounceInLeft">
                                                            <Link to="/search-lawyer" reloadDocument relative='path'>Book Now</Link>
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
                                                <h2 data-animation="animated bounceInUp">Book Appointments with Lawyers By department or specialization</h2>
                                                <h3 data-animation="animated bounceInUp">Search For <br />
                                                    Expert <span>Lawyers</span></h3>
                                                <div data-animation="animated bounceInUp" className="line_shape" />
                                                <p data-animation="animated bounceInUp">
                                                    <Icon icon="emojione-v1:left-check-mark" /> &nbsp;
                                                    Get Quick Response
                                                </p>
                                                <p data-animation="animated bounceInUp">
                                                    <Icon icon="emojione-v1:left-check-mark" /> &nbsp;
                                                    100% Customer Satisfactions
                                                </p>
                                                <p data-animation="animated bounceInUp">
                                                    <Icon icon="emojione-v1:left-check-mark" /> &nbsp;
                                                    Quality Service &amp; Review System
                                                </p>
                                                <p data-animation="animated bounceInUp">
                                                    <Icon icon="emojione-v1:left-check-mark" /> &nbsp;
                                                    Customer Access own Dashboard
                                                </p>
                                                <div className="slider_btn index2_sliderbtn float_left cta-header-btn">
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
                                                <h2 data-animation="animated bounceInUp">Revolutionize Your Legal Practice With</h2>
                                                <h3 data-animation="animated bounceInUp">#1 African Legal Productive And<br />
                                                    <span>Efficiency Tools</span></h3>
                                                <div data-animation="animated bounceInUp" className="line_shape" />

                                                <p data-animation="animated bounceInUp">
                                                    ThePocketLawyers is your all-in-one solution for legal practice management, helping
                                                    legal professionals like you streamline tasks, handle case details, and manage
                                                    payments with ease. Boost efficiency and focus on delivering top-notch legal services
                                                    to your clients, all within a single tool.
                                                </p>
                                                <div className="slider_btn index2_sliderbtn float_left cta-header-btn">
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
                                                {/* <h2 data-animation="animated bounceInUp">Book Appointments with Lawyers By department or specialization</h2> */}
                                                <h3 data-animation="animated bounceInUp">Industry-Leading Legal Case Management <br />
                                                    <span>Software and Solutions</span></h3>
                                                <div data-animation="animated bounceInUp" className="line_shape" />
                                                <p data-animation="animated bounceInUp">
                                                    <Icon icon="emojione-v1:left-check-mark" /> &nbsp;
                                                    Case Management – keep all of your case details and documents in one location.
                                                </p>
                                                <p data-animation="animated bounceInUp">
                                                    <Icon icon="emojione-v1:left-check-mark" /> &nbsp;
                                                    Client Communication – real time updates, messaging, document sharing, and task management.
                                                </p>
                                                <p data-animation="animated bounceInUp">
                                                    <Icon icon="emojione-v1:left-check-mark" /> &nbsp;
                                                    Billing and Payments – track time, generate invoices, and accept payments.
                                                </p>
                                                <p data-animation="animated bounceInUp">
                                                    <Icon icon="emojione-v1:left-check-mark" /> &nbsp;
                                                    Customer Lead Mgt.- Manage your customer records anytime &amp; Anywhere
                                                </p>
                                                <div className="slider_btn index2_sliderbtn float_left cta-header-btn">
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
                                                {/* <h2 data-animation="animated bounceInUp">Revolutionize Your Legal Practice With</h2> */}
                                                <h3 data-animation="animated bounceInUp">Boost Your Legal Departments <br />
                                                    <span>Efficiency And Productivity</span></h3>
                                                <div data-animation="animated bounceInUp" className="line_shape" />

                                                <p data-animation="animated bounceInUp">
                                                    Take your legal department’s productivity to the next level with our innovative workflow and
                                                    process automation tools. Experience customized process flows, streamlined external
                                                    counsel and case management, and seamless document generation and file management
                                                </p>
                                                <div className="slider_btn index2_sliderbtn float_left cta-header-btn">
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
                        {/* <ol className="carousel-indicators">
                            <li data-target="#carousel-example-generic" data-slide-to={0} className="active"><span className="number">01</span>
                            </li>
                            <li data-target="#carousel-example-generic" data-slide-to={1} className><span className="number">02</span>
                            </li>
                            <li data-target="#carousel-example-generic" data-slide-to={2} className><span className="number">03</span>
                            </li>
                        </ol> */}
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

                            <div className='w-100 h-100 d-flex justify-contents-center align-items-center'>
                                <img src="https://img.freepik.com/premium-photo/working-as-attorney_891336-4174.jpg?w=740" id="who-we-are-img" alt="About" className="w-100 mb-5" />
                            </div>

                            {/* <div className="index2_abt_img_wrapper">
                                <div className="sw_disc_img_btm">
                                </div>
                            </div> */}
                        </div>
                        <div className="col-xl-6 col-md-12 col-lg-12 col-sm-12 col-12" id='who-we-are-container'>
                            <div className="about_content_wrapper">
                                <div className="sv_heading_wraper index2_heading">
                                    <h4>who we are</h4>
                                    <h3>Welcome To ThePocketLawyers</h3>
                                    <div className="line_shape" />
                                </div>
                                <div className="welcone_savehiyp float_left">
                                    <p>
                                        ThePocketLawyers is a pioneering Software and platform as a service, we are at the forefront of revolutionizing the
                                        legal landscape across Africa and Globally. We&#39;re dedicated to transforming how people access and experience legal
                                        services, making them more accessible, efficient, and user-friendly.
                                    </p>
                                    <p>
                                        At our core, we&#39;re driven by a passion for democratizing legal assistance and support. We understand the complexities
                                        and challenges individuals and businesses face when seeking legal guidance or representation. That&#39;s why we&#39;ve
                                        created an innovative digital space that connects clients with a network of qualified legal professionals seamlessly.
                                    </p>
                                    <p>
                                        Our platform serves as a bridge between clients and lawyers, offering a diverse range of legal services covering various
                                        domains such as business law, intellectual property, family law, real estate, and much more.
                                    </p>
                                    <p>
                                        We prioritize versatility to
                                        cater to the diverse needs of our users. We offer functionalities like time tracking, CRM, accounting, case
                                        management, contact management, and docketing.
                                    </p>
                                    {/* <div className="welcome_save_inpvate_wrapper">
                                        <ul>
                                            <li className="purple_inovate"><a href="#"><i className="flaticon-check-box" /> We Innovate </a></li>
                                            <li className="blue_inovate"><a href="#"><i className="flaticon-check-box" /> Licenced &amp; Certified </a></li>
                                            <li className="green_inovate"><a href="#"><i className="flaticon-check-box" />Saving &amp; Investments </a></li>
                                        </ul>
                                    </div> */}
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

            <div className="float_left">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-sm-12 col-12">
                            <div className="sv_heading_wraper heading_wrapper_dark dark_heading index2_heading index2_heading_center">
                                <h4> services</h4>
                                <h3>Key Features &amp; Functionalities</h3>
                                <div className="line_shape" />
                            </div>
                        </div>


                        <section class="carousel-parent-section">
                            <div class="container">
                                <div class="row">
                                    <div class="col-6">
                                    </div>
                                    <div class="col-6 text-right">
                                        <a class="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                                            <i class="fa fa-arrow-left"></i>
                                        </a>
                                        <a class="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
                                            <i class="fa fa-arrow-right"></i>
                                        </a>
                                    </div>
                                    <div class="col-12">
                                        <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">
                                            <div class="carousel-inner" id='export-carousel'>
                                                <div class="carousel-item active">
                                                    <div class="row">
                                                        <div class="col-md-4 mb-3">
                                                            <div class="card">
                                                                <div className="card-body">

                                                                    <iconify-icon icon="fa:legal" id='carousel-service-icon'></iconify-icon>
                                                                    <div className="investment_content_wrapper">
                                                                        <h1><a href="#">Legal Practice Made Easy</a></h1>
                                                                        <p>Experience efficient legal practice management with ThePocketLawyers. Customize settings, track time, manage expenses, and streamline payments for a seamless legal workflow.</p>
                                                                        <span className="investment_index_icon"><a href="#"><i className="flaticon-arrow-pointing-to-right" /></a></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4 mb-3">
                                                            <div class="card">
                                                                <div className="card-body">

                                                                    <iconify-icon icon="mdi:legal" id='carousel-service-icon'></iconify-icon>
                                                                    <div className="investment_content_wrapper red_content_wrapper">
                                                                        <h1 className='text-center'><a href="#">Simplify Legal Document Management</a></h1>
                                                                        <p>Effortlessly manage legal documents with ThePocketLawyers. This all-in-one solution offers document storage, categorization, and easy retrieval for lawyers and legal professionals.</p>
                                                                        <span className="investment_index_icon"><a href="#"><i className="flaticon-arrow-pointing-to-right" /></a></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4 mb-3">
                                                            <div class="card">
                                                                <div className="card-body">

                                                                    <iconify-icon icon="solar:bill-check-bold" id='carousel-service-icon'></iconify-icon>
                                                                    <div className="investment_content_wrapper blue_content_wrapper">
                                                                        <h1><a href="#">Legal Billing Made Easy</a></h1>
                                                                        <p>Simplify billing for your legal practice with ThePocketLawyers. Manage fees, expenses, and payments seamlessly, offering a convenient and transparent financial tracking system.</p>
                                                                        <span className="investment_index_icon"><a href="#"><i className="flaticon-arrow-pointing-to-right" /></a></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div class="carousel-item">
                                                    <div class="row">

                                                        <div class="col-md-4 mb-3">
                                                            <div class="card">
                                                                <div className="card-body">

                                                                    <iconify-icon icon="zondicons:cloud" id='carousel-service-icon'></iconify-icon>
                                                                    <div className="investment_content_wrapper green_content_wrapper">
                                                                        <h1><a href="#">Cloud Data Storage Integration</a></h1>
                                                                        <p>Safeguard your data and enhance disaster recovery with ThePocketLawyers cloud data storage integration. Choose from providers like AWS and Wasabi for enhanced security.</p>
                                                                        <span className="investment_index_icon"><a href="#"><i className="flaticon-arrow-pointing-to-right" /></a></span>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="col-md-4 mb-3">
                                                            <div class="card">
                                                                <div className="card-body">

                                                                    <iconify-icon icon="tabler:seo" id='carousel-service-icon'></iconify-icon>
                                                                    <div className="investment_content_wrapper pink_content_wrapper">
                                                                        <h1><a href="#">Meta SEO Keywords</a></h1>
                                                                        <p>Boost your online visibility with ThePocketLawyers built-in Meta tags for SEO. Optimize your business&#39;s content for search engines and drive more traffic.</p>
                                                                        <span className="investment_index_icon"><a href="#"><i className="flaticon-arrow-pointing-to-right" /></a></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4 mb-3">
                                                            <div class="card">
                                                                <div className="card-body">

                                                                    <iconify-icon icon="fa6-solid:handshake" id='carousel-service-icon'></iconify-icon>
                                                                    <div className="investment_content_wrapper yellow_content_wrapper">
                                                                        <h1><a href="#">Your Legal Business Companion</a></h1>
                                                                        <p>Empower your legal practice with ThePocketLawyers, offering comprehensive legal practice management, from task oversight to seamless payment processing. Streamline operations and enhance client services under one tool</p>
                                                                        <span className="investment_index_icon"><a href="#"><i className="flaticon-arrow-pointing-to-right" /></a></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div class="carousel-item">
                                                    <div class="row">

                                                        <div class="col-md-4 mb-3">
                                                            <div class="card">
                                                                <div className="card-body">

                                                                    <iconify-icon icon="dashicons:unlock" id='carousel-service-icon'></iconify-icon>
                                                                    <div className="investment_content_wrapper yellow_content_wrapper">
                                                                        <h1><a href="#">Unlocking Legal Practice Potential</a></h1>
                                                                        <p>Experience the future of legal practice management. Our comprehensive platform offers an array of tools and features designed to streamline tasks, enhance collaboration, and optimize financial control. Elevate your legal practice to new heights of efficiency and effectiveness.</p>
                                                                        <span className="investment_index_icon"><a href="#"><i className="flaticon-arrow-pointing-to-right" /></a></span>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="col-md-4 mb-3">
                                                            <div class="card">
                                                                <div className="card-body">

                                                                    <iconify-icon icon="material-symbols:productivity" id='carousel-service-icon'></iconify-icon>
                                                                    <div className="investment_content_wrapper yellow_content_wrapper">
                                                                        <h1><a href="#">Efficiency &amp; Productivity Redefined</a></h1>
                                                                        <p>Empower your legal team with ThePocketLawyers, a robust platform designed for legal professionals. Benefit from role-based access control, customizable settings, and efficient task management. Our platform ensures that your legal practice is efficient, transparent, and always under your control.</p>
                                                                        <span className="investment_index_icon"><a href="#"><i className="flaticon-arrow-pointing-to-right" /></a></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4 mb-3">
                                                            <div class="card">
                                                                <div class="card-body">

                                                                    <iconify-icon icon="material-symbols:productivity" id='carousel-service-icon'></iconify-icon>
                                                                    <div className="investment_content_wrapper yellow_content_wrapper">
                                                                        <h1><a href="#">Your Legal Symphony Conductor</a></h1>
                                                                        <p>ThePocketLawyers redefines the way legal professionals manage their practice. With features like streamlined case management, customizable timesheets, and seamless expense tracking, it takes your legal practice to the next level. Experience a hassle-free approach to legal tasks, enabling you to focus on delivering exceptional services to your clients.</p>
                                                                        <span className="investment_index_icon"><a href="#"><i className="flaticon-arrow-pointing-to-right" /></a></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="carousel-item">
                                                    <div class="row">

                                                        <div class="col-md-4 mb-3">
                                                            <div class="card">
                                                                <div className="card-body">

                                                                    <iconify-icon icon="game-icons:take-my-money" id='carousel-service-icon'></iconify-icon>
                                                                    <div className="investment_content_wrapper yellow_content_wrapper">
                                                                        <h1><a href="#">Seamless Cash Handling</a></h1>
                                                                        <p>ThePocketLawyers simplifies case management with customizable timesheets, expenses tracking, and fee management. Streamline your legal workflow and enhance transparency in your practice.</p>
                                                                        <span className="investment_index_icon"><a href="#"><i className="flaticon-arrow-pointing-to-right" /></a></span>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="col-md-4 mb-3">
                                                            <div class="card">
                                                                <div className="card-body">

                                                                    <iconify-icon icon="material-symbols:partner-exchange" id='carousel-service-icon'></iconify-icon>
                                                                    <div className="investment_content_wrapper yellow_content_wrapper">
                                                                        <h1><a href="#">Your Legal Practice’s Companion</a></h1>
                                                                        <p>ThePocketLawyers is the trusted companion for legal practice, with a comprehensive dashboard, document management, and multi-language support, it empowers you to manage every aspect of your practice effectively</p>
                                                                        <span className="investment_index_icon"><a href="#"><i className="flaticon-arrow-pointing-to-right" /></a></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4 mb-3">
                                                            <div class="card">
                                                                <div class="card-body">
                                                                    <iconify-icon icon="ep:success-filled" id='carousel-service-icon'></iconify-icon>
                                                                    <div className="investment_content_wrapper yellow_content_wrapper">
                                                                        <h1><a href="#">Your Gateway To Legal Success</a></h1>
                                                                        <p>ThePocketLawyers is your Gateway to a new era of legal practice management. With its intuitive tools, customizable settings, and seamless task handling, it empowers legal professionals to enhance their efficiency and deliver exceptional services.</p>
                                                                        <span className="investment_index_icon"><a href="#"><i className="flaticon-arrow-pointing-to-right" /></a></span>
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
                        </section>
                    </div>
                </div>
            </div >

            {/* counter wrapper start*/}
            <div className="counter_section float_left" ref={ref1}>
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
                                    <div className="count-description">
                                        <span className="timer">
                                            {isInViewport1 && <CountUp start={0} end={365} duration={4} />}
                                        </span>
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
                                    <div className="count-description">
                                        <span className="timer">
                                            {isInViewport1 && <CountUp start={0} end={10000} duration={3} />}+
                                        </span>
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
                                    <div className="count-description">
                                        <span className="timer">
                                            {isInViewport1 && <CountUp start={0} end={5000} duration={4} />}+
                                        </span>
                                        <h5 className="con2"> <a href="#"> Law Firms </a></h5>
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
                                    <div className="count-description">
                                        <span className="timer">
                                            {isInViewport1 && <CountUp start={0} end={7000} duration={3} />}+
                                        </span>
                                        <h5 className="con4"> <a href="#">Legal Professionals</a></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* counter wrapper end*/}



            <section class="pm-features-section pt pb">
                <div class="container">
                    <div class="row align-items-center pm-features-section-child">
                        <div class=" col-lg-6 col-12">
                            <div class="section-title">
                                <h3 class="fs-54">
                                    Streamlined Case Management<span> With ThePocketLawyers</span></h3>
                                <p>
                                    ThePocketLawyers help optimizes legal practice management by lawyers’ overseeing their tasks, case
                                    particulars, invoices, and payment processing. It facilitates smooth collaboration throughout the entire
                                    workflow, enabling legal professionals to effectively manage every facet of their practice and operational
                                    processes.
                                </p>
                                <Link to="/signup" reloadDocument relative='path' className='btn'>Sign Up Now</Link>

                            </div>
                        </div>
                        <div class=" col-lg-6 col-12">
                            <div class="info-cards-wrp">
                                <div class="info-cards bg-theme">
                                    <div class="icon-div bg-dark">
                                        <Icon icon="entypo:flash" className='info-cards-icon' />
                                    </div>
                                    <h4>
                                        Automate And Optimizing Your Legal Workflows
                                    </h4>
                                    <p>
                                        ThePocketLawyers is your all-in-one solution for streamlining legal practice management. With features ranging from efficient task
                                        handling and document management to role-based access control and integrated billing, it empowers legal professionals to
                                        automate and enhance their workflow, ensuring that every facet of their practice is efficiently managed.
                                    </p>
                                </div>
                                <div class="info-cards  bg-dark">
                                    <div class="icon-div bg-theme">
                                        <Icon icon="fa:legal" className='info-cards-icon dark' />
                                    </div>
                                    <h4>
                                        Improve And Elevate Your Legal Practice With The ALL–In–One Tools
                                    </h4>
                                    <p>
                                        Improve and elevate your legal practice with ThePocketLawyers, comprehensive platform designed to optimize legal workflows. It
                                        offers user authentication, billings and expense tracking, and seamless billing processes. With customizable settings and a focus
                                        on document management, ThePocketLawyers is your key to efficient, transparent, and streamlined legal operations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Work Section Testing */}

            {/* <div className="our_services_wrapper index2_our_service_wrapper float_left">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-sm-12 col-12">
                            <div className="sv_heading_wraper heading_wrapper_dark dark_heading index2_heading index2_heading_center">
                                <h3>How it Works</h3>
                                <div className="line_shape" />
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-2 col-12">
                            <div className="investment_box_wrapper service_box feature_box index2_service_box float_left">
                                <Icon icon="mdi:monitor-account" className='work-head-title-icon' />
                                <div className="investment_border_wrapper" />
                                <div className="investment_content_wrapper new ">
                                    <h1><a href="#">Connect</a></h1>
                                    <div className="line_shape investment_line_shape" />
                                    <p> Tell the Lawyers' Assistant what's going on so that she can find the attorney for your situation.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-lg-2 col-12">
                            <div className="investment_box_wrapper service_box feature_box index2_service_box float_left">
                                <Icon icon="gridicons:chat" className='work-head-title-icon' />
                                <div className="investment_border_wrapper" />
                                <div className="investment_content_wrapper new ">
                                    <h1><a href="#">Go back-and-forth</a></h1>
                                    <div className="line_shape investment_line_shape" />
                                    <p> Connect with the lawyer via email, text or phone. Include citations, documents, tickets and more to get a comprehensice answer.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-lg-2 col-12">
                            <div className="investment_box_wrapper service_box feature_box index2_service_box float_left">
                                <Icon icon="icon-park-solid:protect" className='work-head-title-icon' />
                                <div className="investment_border_wrapper" />
                                <div className="investment_content_wrapper new ">
                                    <h1><a href="#"> Stay Protected</a></h1>
                                    <div className="line_shape investment_line_shape" />
                                    <p>Get expert legal support from bar-certified attorneys at an extremely affordable price.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-2 col-12">
                            <div className="investment_box_wrapper service_box feature_box index2_service_box float_left">
                                <Icon icon="icon-park-solid:protect" className='work-head-title-icon' />
                                <div className="investment_border_wrapper" />
                                <div className="investment_content_wrapper new ">
                                    <h1><a href="#"> Search And Review Lawyer Profiles</a></h1>
                                    <div className="line_shape investment_line_shape" />
                                    <p> Personally Search listing of Lawyers and attorney’s profile, specialization and services offered.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-2 col-12">
                            <div className="investment_box_wrapper service_box feature_box index2_service_box float_left">
                                <Icon icon="icon-park-solid:protect" className='work-head-title-icon' />
                                <div className="investment_border_wrapper" />
                                <div className="investment_content_wrapper new ">
                                    <h1><a href="#"> Stay Protected</a></h1>
                                    <div className="line_shape investment_line_shape" />
                                    <p>Get expert legal support from bar-certified attorneys at an extremely affordable price.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}





            <div className="works_wrapper float_left" id='works_wrapper'>
                <div className="work_banner_wrapper" id='work_banner_wrapper'>
                    <img src={video_bg} alt="img" className='work_banner_wrapper-img' />
                </div>
                <div className="howwork_banner_wrapper index2_homwork_banner_wrapper">
                    <div className="vedio_link_wrapper">
                        <a className="test-popup-link button" rel="external" href="https://www.youtube.com/embed/ryzOXAO0Ss0" title="title"><i className="fa fa-play" /></a>
                        <div className="work_content_wrap" id='how-it-works'>
                            <h1>How It Works</h1>
                            <ul className="work_checklist_wrapper">
                                <p data-animation="animated bounceInUp">
                                    <Icon icon="mdi:monitor-account" className='work-head-title-icon' />
                                    &nbsp;Connect
                                </p>
                                <p data-animation="animated bounceInUp">
                                    <Icon icon="gridicons:chat" className='work-head-title-icon' />&nbsp;Go back-and-forth
                                </p>
                                <p data-animation="animated bounceInUp">
                                    <Icon icon="icon-park-solid:protect" className='work-head-title-icon' /> &nbsp;Stay Protected
                                </p>
                                <p data-animation="animated bounceInUp">
                                    <Icon icon="mdi:search" className='work-head-title-icon' /> &nbsp;Search And Review Lawyer Profiles
                                </p>
                                <p data-animation="animated bounceInUp">
                                    <Icon icon="wpf:check-book" className='work-head-title-icon' /> &nbsp;Book Appointments And Make Payment
                                </p>
                                <p data-animation="animated bounceInUp">
                                    <Icon icon="map:lawyer" className='work-head-title-icon' /> &nbsp;Get Instant Lawyer’s Appointment
                                </p>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>



            {/*investment plan wrapper start */}





            <div className="investment_plans index2_investment_plans float_left">
                <div className="investment_overlay" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-sm-12 col-12">
                            <div className="sv_heading_wraper heading_wrapper_dark index2_heading index2_heading_center">
                                <h4> Start your free trial. Full access. No credit card required. </h4>
                                <h3> Pay Only for What You Need</h3>
                                <div className="line_shape" />
                            </div>
                        </div>

                        <section class="carousel-parent-section">
                            <div class="container">
                                <div class="row">
                                    <div class="col-6">
                                    </div>
                                    <div class="col-6 text-right">
                                        <a class="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators3" role="button" data-slide="prev">
                                            <i class="fa fa-arrow-left"></i>
                                        </a>
                                        <a class="btn btn-primary mb-3 " href="#carouselExampleIndicators3" role="button" data-slide="next">
                                            <i class="fa fa-arrow-right"></i>
                                        </a>
                                    </div>
                                    <div class="col-12">
                                        <div id="carouselExampleIndicators3" class="carousel slide" data-ride="carousel">
                                            <div class="carousel-inner" id='export-carousel'>
                                                <div class="carousel-item active">
                                                    <div class="row">
                                                        <div class="col-md-4 mb-3">
                                                            <div class="card">
                                                                <div className="card-body">
                                                                    <img src="https://ww2-secure.justanswer.com/static/sip/btc/membership-benefits/law_tnt_1_v1.jpg" className='plan-img' alt="" />
                                                                    <div className="investment_content_wrapper">
                                                                        <h1><a href="#">Chat or Call with a Lawyer</a></h1>
                                                                        <p>
                                                                            Connect with verified lawyers in minutes, 24/7. After working appointments with your
                                                                            preferred lawyer of your choice you can save time and cost, no time for long distance
                                                                            travel to meet your lawyer.
                                                                        </p>
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
                                                        </div>
                                                        <div class="col-md-4 mb-3">
                                                            <div class="card">
                                                                <div className="card-body">
                                                                    <img src="https://ww2-secure.justanswer.com/static/sip/btc/membership-benefits/law_tnt_2_v1.jpg" className='plan-img' alt="" />
                                                                    <div className="investment_content_wrapper red_content_wrapper">
                                                                        <h1><a href="#">Legal document prep</a></h1>
                                                                        <p>
                                                                            Get help to write a will, make a power of attorney, prepare a healthcare directive, Get
                                                                            represented, create a trust, and create other important legal documents and do more.
                                                                        </p>
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
                                                        </div>
                                                        <div class="col-md-4 mb-3">
                                                            <div class="card">
                                                                <div className="card-body">
                                                                    <img src="https://ww2-secure.justanswer.com/static/sip/btc/membership-benefits/law_tnt_3_v1.jpg" className='plan-img' alt="" />
                                                                    <div className="investment_content_wrapper blue_content_wrapper">
                                                                        <h1><a href="#">Small claims court help</a></h1>
                                                                        <p>
                                                                            Get help with small claims court, so you have the confidence you need to present your case.
                                                                        </p>
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
                                                        </div>

                                                    </div>
                                                </div>
                                                <div class="carousel-item">
                                                    <div class="row">
                                                        <div class="col-md-4 mb-3">
                                                            <div class="card">
                                                                <div className="card-body">
                                                                    <img src="https://ww2-secure.justanswer.com/static/sip/btc/membership-benefits/law_tnt_4_v1.jpg" className='plan-img' alt="" />
                                                                    <div className="investment_content_wrapper green_content_wrapper">
                                                                        <h1><a href="#">More benefits beyond legal support</a></h1>
                                                                        <p>
                                                                            Enjoy extra perks that can help support other parts of your life. Referrals, education, and exclusive discounts to name a few.
                                                                        </p>
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
                                                        <div class="col-md-4 mb-3">
                                                            <div class="card">
                                                                <div className="card-body">
                                                                    <img src="https://ww2-secure.justanswer.com/static/sip/btc/membership-benefits/law_tnt_4_v1.jpg" className='plan-img' alt="" />
                                                                    <div className="investment_content_wrapper green_content_wrapper">
                                                                        <h1><a href="#">More benefits beyond legal support</a></h1>
                                                                        <p>
                                                                            Enjoy extra perks that can help support other parts of your life. Referrals, education, and exclusive discounts to name a few.
                                                                        </p>
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
                                                        <div class="col-md-4 mb-3">
                                                            <div class="card">
                                                                <div className="card-body">
                                                                    <img src="https://ww2-secure.justanswer.com/static/JA54186/membership-savings.jpg" className='plan-img' alt="" />
                                                                    <div className="investment_content_wrapper green_content_wrapper">
                                                                        <h1><a href="#">No Contract, Cancel anytime.</a></h1>
                                                                        <p>
                                                                            Legal fees can add up quickly, especially when you’re charged by the hours.
                                                                            ThePocketLawyers help you to save time and cost, by providing various legal
                                                                            department at an affordable cost and ease to select from vast database of lawyers
                                                                            directories.
                                                                        </p>
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

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section >


                    </div>
                </div>
            </div>
            {/*investment plan wrapper end */}
            {/*calculator plan wrapper start */}

            {/* <div className="calculator_wrapper index2_calculator_wrapper float_left">
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
            </div> */}
            {/*calculator plan wrapper end */}
            {/* global community wrapper start */}
            {/* <div className="global_community_wrapper index2_global_community_wrapper float_left">
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
            </div> */}
            {/* global community wrapper end */}


            {/* investors wrapper start */}
            <div className="investors_wrapper float_left">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="sv_heading_wraper half_section_headign index2_heading">
                                <h4>Meet The </h4>
                                <h3>Top High Profiled Lawyers And Attorney</h3>
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
                                                        <img src={inves1} className="img-responsive" alt="img" />
                                                    </div>
                                                    <div className="investment_content_wrapper inves_heading_txt">
                                                        <h1><a href="#">Akshay H.</a></h1>
                                                        <div className="line_shape investment_line_shape" />
                                                        <p>Civil Right Lawyer</p>
                                                        <ul className="investment_slider_icon">
                                                            <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                                            <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                                            <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                                                            <li><a href="#"><i className="fab fa-google" /></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#" className='view-lawyer-profile'>View Profile</a>

                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="inves_slider_cntn index2_inves_slider_cntnt float_left">
                                            <div className="investment_box_wrapper index_investment float_left">
                                                <div className="inves_main_border float_left">
                                                    <div className="inves_img_wrapper">
                                                        <img src={inves2} className="img-responsive" alt="img" />
                                                    </div>
                                                    <div className="investment_content_wrapper inves_heading_txt">
                                                        <h1><a href="#">Maria F.</a></h1>
                                                        <div className="line_shape investment_line_shape" />
                                                        <p>Health Lawyer</p>
                                                        <ul className="investment_slider_icon">
                                                            <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                                            <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                                            <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                                                            <li><a href="#"><i className="fab fa-google" /></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#" className='view-lawyer-profile'>View Profile</a>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="inves_slider_cntn index2_inves_slider_cntnt float_left">
                                            <div className="investment_box_wrapper index_investment float_left">
                                                <div className="inves_main_border float_left">
                                                    <div className="inves_img_wrapper">
                                                        <img src={inves3} className="img-responsive" alt="img" />
                                                    </div>
                                                    <div className="investment_content_wrapper inves_heading_txt">
                                                        <h1><a href="#">josep K.</a></h1>
                                                        <div className="line_shape investment_line_shape" />
                                                        <p>Immigration Lawyer</p>
                                                        <ul className="investment_slider_icon">
                                                            <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                                            <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                                            <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                                                            <li><a href="#"><i className="fab fa-google" /></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#" className='view-lawyer-profile'>View Profile</a>

                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="inves_slider_cntn index2_inves_slider_cntnt float_left">
                                            <div className="investment_box_wrapper index_investment float_left">
                                                <div className="inves_main_border float_left">
                                                    <div className="inves_img_wrapper">
                                                        <img src={inves4} className="img-responsive" alt="img" />
                                                    </div>
                                                    <div className="investment_content_wrapper inves_heading_txt">
                                                        <h1><a href="#">liva M.</a></h1>
                                                        <div className="line_shape investment_line_shape" />
                                                        <p>International Lawyer</p>
                                                        <ul className="investment_slider_icon">
                                                            <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                                            <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                                            <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                                                            <li><a href="#"><i className="fab fa-google" /></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#" className='view-lawyer-profile'>View Profile</a>

                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="inves_slider_cntn index2_inves_slider_cntnt float_left">
                                            <div className="investment_box_wrapper index_investment float_left">
                                                <div className="inves_main_border float_left">
                                                    <div className="inves_img_wrapper">
                                                        <img src="https://demo.phpscriptpoint.com/lawyer/assets/uploads/attorney-1.jpg" className="img-responsive" alt="img" />
                                                    </div>
                                                    <div className="investment_content_wrapper inves_heading_txt">
                                                        <h1><a href="#">Peter R.</a></h1>
                                                        <div className="line_shape investment_line_shape" />
                                                        <p>Medical Lawyer</p>
                                                        <ul className="investment_slider_icon">
                                                            <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                                            <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                                            <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                                                            <li><a href="#"><i className="fab fa-google" /></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#" className='view-lawyer-profile'>View Profile</a>

                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="inves_slider_cntn index2_inves_slider_cntnt float_left">
                                            <div className="investment_box_wrapper index_investment float_left">
                                                <div className="inves_main_border float_left">
                                                    <div className="inves_img_wrapper">
                                                        <img src="https://demo.phpscriptpoint.com/lawyer/assets/uploads/attorney-2.jpg" className="img-responsive" alt="img" />
                                                    </div>
                                                    <div className="investment_content_wrapper inves_heading_txt">
                                                        <h1><a href="#">Tom S.</a></h1>
                                                        <div className="line_shape investment_line_shape" />
                                                        <p>Medical Lawyer</p>
                                                        <ul className="investment_slider_icon">
                                                            <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                                            <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                                            <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                                                            <li><a href="#"><i className="fab fa-google" /></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#" className='view-lawyer-profile'>View Profile</a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* investors wrapper end */}



            {/* transaction wrapper start */}
            <div className="transaction_wrapper float_left" id='transaction-wrapper-container'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="sv_heading_wraper half_section_headign half_sec_heading index2_heading">
                                <h3>Top Expert Lawyers Listing</h3>
                                <h4>By Specialty</h4>
                                <div className="line_shape" />
                            </div>
                            <div className="x_offer_tabs_wrapper">
                                <ul className="nav nav-tabs">
                                    <li className="nav-item"> <a className="nav-link active" data-toggle="tab" href="#home"> General</a>
                                    </li>
                                    <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#menu2">Criminal</a>
                                    </li>
                                    <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#home">Tax</a>
                                    </li>
                                    <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#menu2">Real-Estate</a>
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
                                                        <th>joining date</th>
                                                        <th>Country</th>
                                                        <th>Firm</th>
                                                        <th>Speciality</th>
                                                        <th>Experience</th>
                                                        <th>Social</th>
                                                        <th>Profile</th>
                                                    </tr>
                                                        <tr>
                                                            <td><img src={mem1} alt="img" /> <span>Olympia Ripple</span></td>
                                                            <td>June 24,2019</td>
                                                            <td>South Africa</td>
                                                            <td>Sashi &amp; Sashi</td>
                                                            <td>Civil Lawyer</td>
                                                            <td>7 Years</td>
                                                            <td>
                                                                <a href="#">
                                                                    <Icon icon="logos:facebook" className='social-profile-icon' />
                                                                </a>
                                                                <a href="#">
                                                                    <Icon icon="skill-icons:twitter" className='social-profile-icon' />
                                                                </a>
                                                                <a href="#">
                                                                    <Icon icon="skill-icons:instagram" className='social-profile-icon' />
                                                                </a>
                                                                <a href="#">
                                                                    <Icon icon="skill-icons:linkedin" className='social-profile-icon' />
                                                                </a>
                                                            </td>
                                                            <td>
                                                                <a href="#" class="">View Profile</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><img src={mem4} alt="img" /> <span>Nancee Broom</span></td>
                                                            <td>June 04,2019</td>
                                                            <td>Canada</td>
                                                            <td>Sashi</td>
                                                            <td>Criminal Lawyer</td>
                                                            <td>12 Years</td>
                                                            <td>
                                                                <a href="#">
                                                                    <Icon icon="logos:facebook" className='social-profile-icon' />
                                                                </a>
                                                                <a href="#">
                                                                    <Icon icon="skill-icons:twitter" className='social-profile-icon' />
                                                                </a>
                                                                <a href="#">
                                                                    <Icon icon="skill-icons:instagram" className='social-profile-icon' />
                                                                </a>
                                                                <a href="#">
                                                                    <Icon icon="skill-icons:linkedin" className='social-profile-icon' />
                                                                </a>
                                                            </td>
                                                            <td>
                                                                <a href="#" class="">View Profile</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><img src={mem1} alt="img" /> <span>Broom Nancee</span></td>
                                                            <td>June 24,2019</td>
                                                            <td>United Kingdom</td>
                                                            <td>Shashi</td>
                                                            <td>Medical Lawyer</td>
                                                            <td>5 Years</td>
                                                            <td>
                                                                <a href="#">
                                                                    <Icon icon="logos:facebook" className='social-profile-icon' />
                                                                </a>
                                                                <a href="#">
                                                                    <Icon icon="skill-icons:twitter" className='social-profile-icon' />
                                                                </a>
                                                                <a href="#">
                                                                    <Icon icon="skill-icons:instagram" className='social-profile-icon' />
                                                                </a>
                                                                <a href="#">
                                                                    <Icon icon="skill-icons:linkedin" className='social-profile-icon' />
                                                                </a>
                                                            </td>
                                                            <td>
                                                                <a href="#" class="">View Profile</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><img src={mem2} alt="img" /> <span>Ripple Alison</span></td>
                                                            <td>June 24,2019</td>
                                                            <td>$06,00,000.00</td>
                                                            <td>ripees</td>
                                                            <td>05 Minutes Ago</td>
                                                        </tr>
                                                        <tr>
                                                            <td><img src={mem3} alt="img" /> <span>Olympia Ripple</span></td>
                                                            <td>June 05,2019</td>
                                                            <td>$45,00,000.00</td>
                                                            <td>ETH</td>
                                                            <td>13 Minutes Ago</td>
                                                        </tr>
                                                        <tr>
                                                            <td><img src={mem4} alt="img" /> <span>Alison Rittichier</span></td>
                                                            <td>June 28,2019</td>
                                                            <td>$77,00,000.00</td>
                                                            <td>payonner</td>
                                                            <td>05 Minutes Ago</td>
                                                        </tr>
                                                        <tr>
                                                            <td><img src={mem5} alt="img" /> <span>Olympia Ripple</span></td>
                                                            <td>June 24,2019</td>
                                                            <td>$11,00,000.00</td>
                                                            <td>card</td>
                                                            <td>23 Minutes Ago</td>
                                                        </tr>
                                                        <tr>
                                                            <td><img src={mem6} alt="img" /> <span>Emmett Stein </span></td>
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
                                                        <th>joining date</th>
                                                        <th>Country</th>
                                                        <th>Firm</th>
                                                        <th>Speciality</th>
                                                        <th>Experience</th>
                                                        <th>Social</th>
                                                        <th>Profile</th>
                                                    </tr>
                                                        <tr>
                                                            <td><img src={mem4} alt="img" /> <span>Nancee Broom</span></td>
                                                            <td>June 04,2019</td>
                                                            <td>South Africa</td>
                                                            <td>Sashi &amp; Sashi</td>
                                                            <td>Civil Lawyer</td>
                                                            <td>7 Years</td>
                                                            <td>
                                                                <a href="#">
                                                                    <Icon icon="logos:facebook" className='social-profile-icon' />
                                                                </a>
                                                                <a href="#">
                                                                    <Icon icon="skill-icons:twitter" className='social-profile-icon' />
                                                                </a>
                                                                <a href="#">
                                                                    <Icon icon="skill-icons:instagram" className='social-profile-icon' />
                                                                </a>
                                                                <a href="#">
                                                                    <Icon icon="skill-icons:linkedin" className='social-profile-icon' />
                                                                </a>
                                                            </td>
                                                            <td>
                                                                <a href="#" class="">View Profile</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><img src={mem1} alt="img" /> <span>Olympia Ripple</span></td>
                                                            <td>June 24,2019</td>
                                                            <td>South Africa</td>
                                                            <td>Sashi &amp; Sashi</td>
                                                            <td>Civil Lawyer</td>
                                                            <td>7 Years</td>
                                                            <td>
                                                                <a href="#">
                                                                    <Icon icon="logos:facebook" className='social-profile-icon' />
                                                                </a>
                                                                <a href="#">
                                                                    <Icon icon="skill-icons:twitter" className='social-profile-icon' />
                                                                </a>
                                                                <a href="#">
                                                                    <Icon icon="skill-icons:instagram" className='social-profile-icon' />
                                                                </a>
                                                                <a href="#">
                                                                    <Icon icon="skill-icons:linkedin" className='social-profile-icon' />
                                                                </a>
                                                            </td>
                                                            <td>
                                                                <a href="#" class="">View Profile</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><img src={mem2} alt="img" /> <span>Ripple Alison</span></td>
                                                            <td>June 24,2019</td>
                                                            <td>South Africa</td>
                                                            <td>Sashi &amp; Sashi</td>
                                                            <td>Civil Lawyer</td>
                                                            <td>7 Years</td>
                                                            <td>
                                                                <a href="#">
                                                                    <Icon icon="logos:facebook" className='social-profile-icon' />
                                                                </a>
                                                                <a href="#">
                                                                    <Icon icon="skill-icons:twitter" className='social-profile-icon' />
                                                                </a>
                                                                <a href="#">
                                                                    <Icon icon="skill-icons:instagram" className='social-profile-icon' />
                                                                </a>
                                                                <a href="#">
                                                                    <Icon icon="skill-icons:linkedin" className='social-profile-icon' />
                                                                </a>
                                                            </td>
                                                            <td>
                                                                <a href="#" class="">View Profile</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><img src={mem6} alt="img" /> <span>Emmett Stein
                                                            </span></td>
                                                            <td>June 21,2019</td>
                                                            <td>$66,00,000.00</td>
                                                            <td>paypal</td>
                                                            <td>53 Minutes Ago</td>
                                                        </tr>
                                                        <tr>
                                                            <td><img src={mem1} alt="img" /> <span>Broom Nancee</span></td>
                                                            <td>June 24,2019</td>
                                                            <td>$6,00,000.00</td>
                                                            <td>bitcoin</td>
                                                            <td>15 Minutes Ago</td>
                                                        </tr>
                                                        <tr>
                                                            <td><img src={mem4} alt="img" /> <span>Alison Rittichier</span></td>
                                                            <td>June 28,2019</td>
                                                            <td>$77,00,000.00</td>
                                                            <td>payonner</td>
                                                            <td>05 Minutes Ago</td>
                                                        </tr>
                                                        <tr>
                                                            <td><img src={mem3} alt="img" /> <span>Olympia Ripple</span></td>
                                                            <td>June 05,2019</td>
                                                            <td>$45,00,000.00</td>
                                                            <td>ETH</td>
                                                            <td>13 Minutes Ago</td>
                                                        </tr>
                                                        <tr>
                                                            <td><img src={mem5} alt="img" /> <span>Olympia Ripple</span></td>
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
                                                <img src={t1} alt="img" />
                                            </div>
                                            <div className="saying_img_name">
                                                <h1><a href="#">Alfred Oghenekaro </a></h1>
                                                <p>Tax Lawyer</p>
                                            </div>
                                            <p>I have been using ThePocketLawyers, it has been an integral part of my practice and I cannot
                                                imagine doing it without the tools. The interface is extremely easy to navigate. The price is
                                                affordable, the customer service is impeccable and the constantly innovating and evolving</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="saying_content_wrapper float_left">
                                            <div className="saying_img">
                                                <img src="https://www.thepocketlawyers.net/dark/images/ts1.png" alt="img" />
                                            </div>
                                            <div className="saying_img_name">
                                                <h1><a href="#">Merry Jain</a></h1>
                                                <p>Business Lawyer</p>
                                            </div>
                                            <p>ThePocketLawyers has been beneficiary to our Firm right from the beginning we Signup. The more
                                                we learn to use the tools, the more it is beneficial. It keeps everything all together in one place.</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="saying_content_wrapper float_left">
                                            <div className="saying_img">
                                                <img src={t3} alt="img" />
                                            </div>
                                            <div className="saying_img_name">
                                                <h1><a href="#">Edem Akpan</a></h1>
                                                <p>Immigration Lawyer</p>
                                            </div>
                                            <p>
                                                We have small law firm, but since using ThePocketLawyers, we are more organized and customer
                                                centric. It is extremely user friendly. It help us keep track of inflows and expenses. Upload template
                                                documents, which saves us time and money. I would recommend this case management system to
                                                every law office.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="saying_content_wrapper float_left">
                                            <div className="saying_img">
                                                <img src={t4} alt="img" />
                                            </div>
                                            <div className="saying_img_name">
                                                <h1><a href="#">Agnes Michael</a></h1>
                                                <p>Satisfied Customer</p>
                                            </div>
                                            <p>
                                                The time keeping is incredibly easy to use, the invoicing and ability for clients to pay is fantastic, the
                                                ability to execute documents remotely is unparalleled and the chance to communicate with our
                                                clients through the portal cannot be over emphasized
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="saying_content_wrapper float_left">
                                            <div className="saying_img">
                                                <img src={t2} alt="img" />
                                            </div>
                                            <div className="saying_img_name">
                                                <h1><a href="#">Magnus Okeke </a></h1>
                                                <p>Property Lawyer</p>
                                            </div>
                                            <p>
                                                The best thing about the platform is that we only need this one solutions for all our Firms
                                                requirement. Moreso they always improve the platform with latest technology , will always
                                                recommend the solution.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="saying_content_wrapper float_left">
                                            <div className="saying_img">
                                                <img src="https://www.thepocketlawyers.net/dark/images/ts2.png" alt="img" />
                                            </div>
                                            <div className="saying_img_name">
                                                <h1><a href="#">John Cranne  </a></h1>
                                                <p>Civil Lawyer</p>
                                            </div>
                                            <p>
                                                I use ThePocketLawyers on every single case that I have. As I have become more familiar with the
                                                software. I use more and more features. My clients love the solutions and although I am a sole
                                                practitioner, I feel very professionally competitive because of the software and the tools that
                                                makes me more efficient and productive.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="saying_content_wrapper float_left">
                                            <div className="saying_img">
                                                <img src={t5} alt="img" />
                                            </div>
                                            <div className="saying_img_name">
                                                <h1><a href="#">Margaret Philips  </a></h1>
                                                <p>Satisfied Customer</p>
                                            </div>
                                            <p>
                                                ThePocketLawyers has been the technological and case management backbone of supporting our
                                                firm’s case management, invoicing and payment, ensuring timelines in our cases are properly
                                                documented and management. Is the tool I will whole heartedly recommend without fear?
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="saying_content_wrapper float_left">
                                            <div className="saying_img">
                                                <img src={t6} alt="img" />
                                            </div>
                                            <div className="saying_img_name">
                                                <h1><a href="#">Bar. Franky Melaka</a></h1>
                                                <p>Legal Consultant</p>
                                            </div>
                                            <p>ThePocketLawyers has allowed me to consolidate all of my client files into a single virtual work
                                                space, giving me and my clients access to all documents at all times.it is also secured and puts my
                                                clients at ease that their sensitive information is not being exchanged of email servers.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* testimonial wrapper end */}


            {/* payments wrapper start */}


            <div className="payments_wrapper float_left">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="sv_heading_wraper half_section_headign index2_heading">
                                <h4></h4>
                                <h3>We are on the News</h3>
                                <div className="line_shape" />
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                            <div className="payment_slider_wrapper" id='payment-slider-parent'>
                                <div className="owl-carousel owl-theme" id='owl-theme-container'>
                                    <div className="item">
                                        <div className="partner_img_wrapper float_left">
                                            <img src={techpoint} className="img-responsive" alt="img" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="partner_img_wrapper float_left">
                                            <img src={vanguard} className="img-responsive" alt="img" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="partner_img_wrapper float_left">
                                            <img src={techcabal} className="img-responsive" alt="img" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="partner_img_wrapper float_left">
                                            <img src={guardian} className="img-responsive" alt="img" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="partner_img_wrapper float_left">
                                            <img src={punch} className="img-responsive" alt="img" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="partner_img_wrapper float_left">
                                            <img src={sun} className="img-responsive" alt="img" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* payments wrapper end */}

            {/* payments wrapper start */}
            <div className="payments_wrapper float_left" id='transaction-wrapper-container'>
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
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png" className="img-responsive" alt="img" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="partner_img_wrapper float_left">
                                            <img src="https://logos-world.net/wp-content/uploads/2020/07/PayPal-Logo.png" className="img-responsive" alt="img" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="partner_img_wrapper float_left">
                                            <img src="https://1000logos.net/wp-content/uploads/2023/11/Flutterwave-Logo-2016.png" className="img-responsive" alt="img" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="partner_img_wrapper float_left">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Paystack_Logo.png" className="img-responsive" alt="img" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="partner_img_wrapper float_left">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Razorpay_logo.svg/1200px-Razorpay_logo.svg.png" className="img-responsive" alt="img" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="partner_img_wrapper float_left">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Skrill_logo.svg/2560px-Skrill_logo.svg.png" className="img-responsive" alt="img" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="partner_img_wrapper float_left">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Payoneer_logo.svg/2560px-Payoneer_logo.svg.png" className="img-responsive" alt="img" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="partner_img_wrapper float_left">
                                            <img src="https://banner2.cleanpng.com/20171220/kke/mastercard-logo-png-5a3a1f282e6103.818127331513758504194124.jpg" className="img-responsive" alt="img" />
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="partner_img_wrapper float_left">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/23/Verve_Image.png" className="img-responsive" alt="img" />
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
            <Footer />
        </div >

    )
}
export default Homepage;