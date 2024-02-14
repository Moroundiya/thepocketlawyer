import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import logo2 from '../assets/images/logo-dark.png';
import { Link } from 'react-router-dom';

function Signin() {
    return (
        <div>
            <div className="cursor" />
            {/* Top Scroll Start */}
            <a href="javascript:" id="return-to-top"> <i className="fas fa-angle-double-up" /></a>
            {/* Top Scroll End */}
            {/* cp navi wrapper Start */}
            <Header />
            {/* navi wrapper End */}

            {/* login wrapper start */}
            <div className="login_wrapper fixed_portion float_left" id='fixed_portion'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="login_top_box float_left">
                                <div className="login_banner_wrapper">
                                    <img src={logo2} alt="logo" id='login-logo' />
                                    <div className='my-5' id='login-icon-container'>
                                        <p className='login-with-text'>Sign In with:</p>
                                        <a href="#">
                                            <img src="https://i.pinimg.com/originals/5f/0c/25/5f0c255d69fa5c24701c547d35ceb5ae.png" className="login-with-icon" alt="" />
                                        </a>
                                        <a href="#">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI0HIhQzH1LSKm_9OhP_IPwNMlLPiFip7LmbKjoscO_w&amp;s" className="login-with-icon" alt="" />
                                        </a>
                                        <a href="#">
                                            <img src="https://assets.dryicons.com/uploads/icon/svg/6904/929fe990-8f44-43be-9c3a-5d2f84e2f56e.svg" className="login-with-icon" alt="" />
                                        </a>
                                        <a href="#">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSK7QajYraVhWFuQPgLxq5FZnEyOaZveO87Q&amp;s" className="login-with-icon" alt="" />
                                        </a>

                                    </div>
                                    <img src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-5375.jpg?w=740&t=st=1706521326~exp=1706521926~hmac=754966f517c49c6cb9069d4f9139f09dcba417960b2e04f73f113af030ac15af" alt="" className='img-fluid' />
                                    <div className="jp_regis_center_tag_wrapper jb_register_red_or">
                                        <h1>OR</h1>
                                    </div>
                                </div>
                                <div className="login_form_wrapper" id='login_form_wrapper'>
                                    <div className="sv_heading_wraper heading_wrapper_dark dark_heading hwd">
                                        <h3> Sign In to enter</h3>
                                    </div>
                                    <div className="form-group icon_form comments_form">
                                        <input type="text" className="form-control require" name="full_name" placeholder="Email Address*" />
                                    </div>
                                    <div className="form-group icon_form comments_form">
                                        <input type="password" className="form-control require" placeholder="Password *" />
                                    </div>
                                    <div className="login_remember_box">
                                        <label className="control control--checkbox">Remember me
                                            <input type="checkbox" />
                                            <span className="control__indicator" />
                                        </label>
                                        <Link to="/forget-password" reloadDocument relative='path' className='forget_password'>
                                            Forget Password
                                        </Link>
                                    </div>
                                    <div className="about_btn login_btn float_left">
                                        <a href="#">Sign In</a>
                                    </div>
                                    <div className="dont_have_account float_left" id='dont_have_account'>
                                        <p>Don’t have an account ? <Link to="/signup" reloadDocument relative="path">Sign up</Link></p>
                                    </div>
                                    <h2 id='big-title-add'>#1 African Platform For Lawyers And Attorney
                                        On Demands.</h2>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
            {/* login wrapper end */}
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
        </div>

    )
}

export default Signin