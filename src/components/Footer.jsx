import React from 'react';
import logo_light from '../assets/images/logo-light.png';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div className="footer_main_wrapper index2_footer_wrapper float_left">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 col-sm-12">
                        <div className="wrapper_second_about">
                            <div className="wrapper_first_image">
                                <a href="index.html"><img src={logo_light} className="img-responsive footer-logo" alt="logo" /></a>
                            </div>
                            <p>
                                ThePocketLawyers is a pioneering Software and platform as a service, we are at the forefront of revolutionizing the
                                legal landscape across Africa and Globally.
                            </p> <br />
                            <p>
                                We&#39;re dedicated to transforming how people access and experience legal
                                services, making them more accessible, efficient, and user-friendly.
                            </p>

                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-12 col-sm-4">
                        <div className="wrapper_second_useful">
                            <h4>useful links </h4>
                            <ul>
                                <li><a href="#"><i className="fa fa-angle-right" />Home</a>
                                </li>
                                <li><a href="#"><i className="fa fa-angle-right" />Services </a>
                                </li>
                                <li><a href="#"><i className="fa fa-angle-right" />E-Stores</a>
                                </li>
                                <li><a href="#"><i className="fa fa-angle-right" />Lawyers</a> </li>
                                <li><a href="#"><i className="fa fa-angle-right" />Consultants</a> </li>
                                <li>
                                    <Link to="/pricing-plans" reloadDocument relative='path'><i className="fa fa-angle-right" /> Plans</Link>

                                </li>
                                <li><a href="#"><i className="fa fa-angle-right" />Solutions</a> </li>
                                <li><a href="#"><i className="fa fa-angle-right" />Integrations</a> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-12 col-sm-4">
                        <div className="wrapper_second_useful wrapper_second_links">
                            <ul>
                                <li>
                                    <Link to="/about-us" reloadDocument relative='path'> <i className="fa fa-angle-right" />About Us</Link>
                                </li>
                                <li>
                                    <Link to="/contact" reloadDocument relative='path'><i className="fa fa-angle-right" />Contact </Link>
                                </li>
                                <li><a href="#"><i className="fa fa-angle-right" />Support </a>
                                </li>
                                <li><a href="#"><i className="fa fa-angle-right" />Careers</a>
                                </li>
                                <li><a href="#"><i className="fa fa-angle-right" />Partners</a> </li>
                                <li>
                                    <Link to="/blog-category" reloadDocument relative='path'><i className="fa fa-angle-right" />News</Link>
                                </li>
                                <li>
                                    <Link to="/help" reloadDocument relative='path'><i className="fa fa-angle-right" />Help</Link>
                                </li>
                                <li>
                                    <Link to="/faq" reloadDocument relative='path'><i className="fa fa-angle-right" />FAQ</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 col-sm-12">
                        <div className="wrapper_second_useful wrapper_second_useful_2">
                            <h4>contact  us</h4>
                            <ul>
                                <li>
                                    <h1>+234 915 848 2622</h1></li>
                                <li><a href="#"><i className="flaticon-mail" />support@thepocketlawyers.net</a>
                                </li>
                                <li><a href="#"><i className="flaticon-language" />www.thepocketlawyers.net</a>
                                </li>
                                <li><i className="flaticon-placeholder" />3rd Floor, 152 Obafemi Awolowo Way Allen Junctions Lagos, Nigeria.
                                </li>
                            </ul>

                            <div className='footer-payment-icon-container'>
                                <a href="#">
                                    <Icon icon="logos:apple-pay" />
                                </a>
                                <a href="#">
                                    <Icon icon="logos:google-pay" />
                                </a>
                                <a href="#">
                                    <Icon icon="logos:mastercard" />
                                </a>
                                <a href="#">
                                    <Icon icon="logos:paypal" />
                                </a>
                                <a href="#">
                                    <Icon icon="logos:visa" />
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                        <div className="copyright_wrapper float_left">
                            <div className="copyright">
                                <p>Copyright <i className="far fa-copyright" />  2024 ThePocketLawyers. <br /> All Right Reserved - Powered By NextSoft-Group</p>
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
        </div >
    )
}

export default Footer