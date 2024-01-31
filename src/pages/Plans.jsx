import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import pattern from '../assets/images/pattern.png';
import shape1 from '../assets/images/shape1.png';
import shape2 from '../assets/images/shape2.png';
import in1 from '../assets/images/in1.png';
import in2 from '../assets/images/in2.png';
import in3 from '../assets/images/in3.png';
import in4 from '../assets/images/in4.png';
import mem1 from '../assets/images/mem1.png';
import mem2 from '../assets/images/mem2.png';
import mem3 from '../assets/images/mem3.png';
import mem4 from '../assets/images/mem4.png';
import mem5 from '../assets/images/mem5.png';
import mem6 from '../assets/images/mem6.png';
import video_bg from '../assets/images/video_bg.jpg';
import cnt from '../assets/images/cnt.png';
import cnt1 from '../assets/images/cnt1.png';
import cnt2 from '../assets/images/cnt2.png';
import team1 from '../assets/images/team1.png';
import team2 from '../assets/images/team2.png';
import team3 from '../assets/images/team3.png';
import team4 from '../assets/images/team4.png';
import blog_img1 from '../assets/images/blog_img1.jpg';
import blog_img2 from '../assets/images/blog_img2.jpg';
import blog_img3 from '../assets/images/blog_img3.jpg';
import partner1 from '../assets/images/partner1.png';
import partner2 from '../assets/images/partner2.png';
import partner3 from '../assets/images/partner3.png';
import partner4 from '../assets/images/partner4.png';

function Plans() {
    return (
        <div>
            <Header />
            {/* slider wrapper start */}
            <div className="slider-area slider_index2_wrapper slider_index3_wrapper  float_left">
                <div className="bg-animation">
                    <img className="zoom-fade" src={pattern} alt="img" />
                </div>
                <div className="index2_sliderbg index3_sliderbg">
                    <img src={shape1} alt="img" className="img-responsive" />
                </div>
                <div
                    id="carousel-example-generic"
                    className="carousel slide"
                    data-ride="carousel"
                >
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <div className="carousel-captions caption-1">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-10 col-md-12 col-sm-12 col-12">
                                            <div className="content">
                                                <h2 data-animation="animated bounceInUp">
                                                    Often Have Small
                                                </h2>
                                                <h3 data-animation="animated bounceInUp">
                                                    Invest Your Money <br />
                                                    For <span>Future</span>
                                                </h3>
                                                <p data-animation="animated bounceInUp">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                    sed do Ut enim ad minim veniam Quis nostrud exercitation
                                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                    Duis aute an irure dolor in voluptate velit.
                                                </p>
                                                <div className="slider_btn index2_sliderbtn index3_sliderbtn float_left">
                                                    <ul>
                                                        <li data-animation="animated bounceInLeft">
                                                            <a href="#">start now</a>
                                                        </li>
                                                        <li data-animation="animated bounceInLeft">
                                                            <a href="#">view plans</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div
                                                    data-animation="animated bounceInLeft"
                                                    className="social_link_foter slider_btm_icon_links"
                                                >
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fab fa-facebook-f" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fab fa-twitter" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fab fa-linkedin-in" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fab fa-google-plus-g" />
                                                            </a>
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
                                                <h2 data-animation="animated bounceInUp">
                                                    Often Have Small
                                                </h2>
                                                <h3 data-animation="animated bounceInUp">
                                                    Invest Your Money <br />
                                                    For <span>Future</span>
                                                </h3>
                                                <p data-animation="animated bounceInUp">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                    sed do Ut enim ad minim veniam Quis nostrud exercitation
                                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                    Duis aute an irure dolor in voluptate velit.
                                                </p>
                                                <div className="slider_btn index2_sliderbtn index3_sliderbtn float_left">
                                                    <ul>
                                                        <li data-animation="animated bounceInLeft">
                                                            <a href="#">start now</a>
                                                        </li>
                                                        <li data-animation="animated bounceInLeft">
                                                            <a href="#">view plans</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div
                                                    data-animation="animated bounceInLeft"
                                                    className="social_link_foter slider_btm_icon_links"
                                                >
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fab fa-facebook-f" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fab fa-twitter" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fab fa-linkedin-in" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fab fa-google-plus-g" />
                                                            </a>
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
                                                <h2 data-animation="animated bounceInUp">
                                                    Often Have Small
                                                </h2>
                                                <h3 data-animation="animated bounceInUp">
                                                    Invest Your Money <br />
                                                    For <span>Future</span>
                                                </h3>
                                                <p data-animation="animated bounceInUp">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                    sed do Ut enim ad minim veniam Quis nostrud exercitation
                                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                    Duis aute an irure dolor in voluptate velit.
                                                </p>
                                                <div className="slider_btn index2_sliderbtn index3_sliderbtn float_left">
                                                    <ul>
                                                        <li data-animation="animated bounceInLeft">
                                                            <a href="#">start now</a>
                                                        </li>
                                                        <li data-animation="animated bounceInLeft">
                                                            <a href="#">view plans</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div
                                                    data-animation="animated bounceInLeft"
                                                    className="social_link_foter slider_btm_icon_links"
                                                >
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fab fa-facebook-f" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fab fa-twitter" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fab fa-linkedin-in" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fab fa-google-plus-g" />
                                                            </a>
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
                            <li
                                data-target="#carousel-example-generic"
                                data-slide-to={0}
                                className="active"
                            >
                                <span className="number">01</span>
                            </li>
                            <li
                                data-target="#carousel-example-generic"
                                data-slide-to={1}
                                className=""
                            >
                                <span className="number">02</span>
                            </li>
                            <li
                                data-target="#carousel-example-generic"
                                data-slide-to={2}
                                className=""
                            >
                                <span className="number">03</span>
                            </li>
                        </ol>
                        <div className="carousel-nevigation">
                            <a
                                className="prev"
                                href="#carousel-example-generic"
                                role="button"
                                data-slide="prev"
                            >
                                {" "}
                                <span /> <i className="flaticon-left-arrow" />
                            </a>
                            <a
                                className="next"
                                href="#carousel-example-generic"
                                role="button"
                                data-slide="next"
                            >
                                {" "}
                                <span /> <i className="flaticon-arrow-pointing-to-right" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* slider wrapper End */}
            {/*about us wrapper start */}
            <div className="about_us_wrapper index2_about_us_wrapper index3_about_us float_left" id='about_us_wrapper'>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12 col-lg-12 col-sm-12 col-12">
                            <div className="about_content_wrapper">
                                <div className="sv_heading_wraper index2_heading index3_heading index3_headung2">
                                    <h4>who we are</h4>
                                    <h3>Welcome to SaveHyip</h3>
                                    <div className="line_shape line_shape2" />
                                </div>
                                <div className="welcone_savehiyp float_left">
                                    <p>
                                        Put your investing ideas into action with full range of
                                        investments. Duis auteir ure dolor in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Enjoy real benefits and
                                        rewards on your accrue investing.{" "}
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        Ut enim ad an minim veniam Quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat. Duis auteirure
                                        dolor in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur.
                                    </p>
                                    <div className="welcome_save_inpvate_wrapper index3_welcome_checkbox">
                                        <ul>
                                            <li className="purple_inovate">
                                                <a href="#">
                                                    <i className="flaticon-check-box" /> We Innovate{" "}
                                                </a>
                                            </li>
                                            <li className="blue_inovate">
                                                <a href="#">
                                                    <i className="flaticon-check-box" /> Licenced &amp;
                                                    Certified{" "}
                                                </a>
                                            </li>
                                            <li className="green_inovate">
                                                <a href="#">
                                                    <i className="flaticon-check-box" />
                                                    Saving &amp; Investments{" "}
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="about_btn index3_about_btn float_left">
                                        <ul>
                                            <li>
                                                <a href="#">get more</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12 col-lg-12 col-sm-12 col-12">
                            <div className="index3_about_img_wrapper">
                                <img
                                    src={shape2}
                                    alt="About"
                                    className="img-responsive"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about us wrapper end */}
            {/*investment plan wrapper start */}



            <div className="transaction_wrapper float_left" id='fixed_portion'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="sv_heading_wraper heading_wrapper_dark dark_heading index2_heading index2_heading_center index3_heading ">
                                {/* <h4>who we are</h4> */}
                                <h3>Our Pricing Plan</h3>
                                <div className="line_shape line_shape2" />
                            </div>
                            <div className="x_offer_tabs_wrapper index3_offer_tabs">
                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                        {" "}
                                        <a className="nav-link active" data-toggle="tab" href="#menu3">
                                            {" "}
                                            Firms
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        {" "}
                                        <a className="nav-link" data-toggle="tab" href="#menu4">
                                            Add-ons
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        {" "}
                                        <a className="nav-link" data-toggle="tab" href="#menu5">
                                            Merchants
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="tab-content">
                                <div id="menu3" className="tab-pane active">
                                    <div className="row">
                                        <div className="col-xl-3 col-md-6 col-lg-6 col-sm-6 col-12">
                                            <div className="investment_box_wrapper index2_investment_box_Wraper index3_investment_box_Wraper float_left">
                                                <img src={in1} alt="img" />
                                                <div className="investment_icon_circle">
                                                    <i className="flaticon-bar-chart" />
                                                </div>
                                                <div className="investment_border_wrapper" />
                                                <div className="investment_content_wrapper">
                                                    <h1>
                                                        <a href="#">Monthly</a>
                                                    </h1>
                                                    <div className="line_shape line_shape2" />
                                                    <p>
                                                        Up to 5% for 20 Hourly
                                                        <br /> Compound Available
                                                        <br /> Down to 5% for 20 Hourly
                                                        <br /> Principal Return
                                                        <br /> Up to 5% for 20 Hourly
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
                                        <div className="col-xl-3 col-md-6 col-lg-6 col-sm-6 col-12">
                                            <div className="investment_box_wrapper index2_investment_box_Wraper index3_investment_box_Wraper float_left">
                                                <img src={in2} alt="img" />
                                                <div className="investment_icon_circle red_info_circle">
                                                    <i className="flaticon-money" />
                                                </div>
                                                <div className="investment_border_wrapper red_border_wrapper" />
                                                <div className="investment_content_wrapper red_content_wrapper">
                                                    <h1>
                                                        <a href="#">Anually</a>
                                                    </h1>
                                                    <div className="line_shape line_shape2" />
                                                    <p>
                                                        Up to 5% Daily for 5 Days
                                                        <br /> Min deposit: $2020
                                                        <br /> Max deposit: $101010
                                                        <br /> Principal Return
                                                        <br /> Compound Available
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
                                </div>
                                <div id="menu4" className="tab-pane fade">
                                    <div className="row">
                                        <div className="col-xl-3 col-md-6 col-lg-6 col-sm-6 col-12">
                                            <div className="investment_box_wrapper index2_investment_box_Wraper index3_investment_box_Wraper float_left">
                                                <img src={in1} alt="img" />
                                                <div className="investment_icon_circle">
                                                    <i className="flaticon-bar-chart" />
                                                </div>
                                                <div className="investment_border_wrapper" />
                                                <div className="investment_content_wrapper">
                                                    <h1>
                                                        <a href="#">silver plan</a>
                                                    </h1>
                                                    <div className="line_shape line_shape2" />
                                                    <p>
                                                        Up to 5% for 20 Hourly
                                                        <br /> Compound Available
                                                        <br /> Down to 5% for 20 Hourly
                                                        <br /> Principal Return
                                                        <br /> Up to 5% for 20 Hourly
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
                                        <div className="col-xl-3 col-md-6 col-lg-6 col-sm-6 col-12">
                                            <div className="investment_box_wrapper index2_investment_box_Wraper index3_investment_box_Wraper float_left">
                                                <img src={in2} alt="img" />
                                                <div className="investment_icon_circle red_info_circle">
                                                    <i className="flaticon-money" />
                                                </div>
                                                <div className="investment_border_wrapper red_border_wrapper" />
                                                <div className="investment_content_wrapper red_content_wrapper">
                                                    <h1>
                                                        <a href="#">Bronze Plan</a>
                                                    </h1>
                                                    <div className="line_shape line_shape2" />
                                                    <p>
                                                        Up to 5% Daily for 5 Days
                                                        <br /> Min deposit: $2020
                                                        <br /> Max deposit: $101010
                                                        <br /> Principal Return
                                                        <br /> Compound Available
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
                                        <div className="col-xl-3 col-md-6 col-lg-6 col-sm-6 col-12">
                                            <div className="investment_box_wrapper index2_investment_box_Wraper index3_investment_box_Wraper float_left">
                                                <img src={in4} alt="img" />
                                                <div className="investment_icon_circle blue_icon_circle">
                                                    <i className="flaticon-gold" />
                                                </div>
                                                <div className="investment_border_wrapper blue_border_wrapper" />
                                                <div className="investment_content_wrapper blue_content_wrapper">
                                                    <h1>
                                                        <a href="#">copper plan</a>
                                                    </h1>
                                                    <div className="line_shape line_shape2" />
                                                    <p>
                                                        Up to 3% Hourly for 10 Hourly
                                                        <br /> Min deposit: $300
                                                        <br /> Max deposit: $3000
                                                        <br /> Principal Not Return
                                                        <br /> Compound Not Available
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
                                        <div className="col-xl-3 col-md-6 col-lg-6 col-sm-6 col-12">
                                            <div className="investment_box_wrapper index2_investment_box_Wraper index3_investment_box_Wraper float_left">
                                                <img src={in3} alt="img" />
                                                <div className="investment_icon_circle green_info_circle">
                                                    <i className="fas fa-calendar-alt" />
                                                </div>
                                                <div className="investment_border_wrapper green_border_wrapper" />
                                                <div className="investment_content_wrapper green_content_wrapper">
                                                    <h1>
                                                        <a href="#">gold plan</a>
                                                    </h1>
                                                    <div className="line_shape line_shape2" />
                                                    <p>
                                                        Up to 7% for 30 days
                                                        <br /> Min deposit: $500
                                                        <br /> Max deposit: $3000
                                                        <br /> Principal Not Return
                                                        <br /> Compound Available
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
                                <div id="menu5" className="tab-pane fade">
                                    <div className="row">
                                        <div className="col-xl-3 col-md-6 col-lg-6 col-sm-6 col-12">
                                            <div className="investment_box_wrapper index2_investment_box_Wraper index3_investment_box_Wraper float_left">
                                                <img src={in1} alt="img" />
                                                <div className="investment_icon_circle">
                                                    <i className="flaticon-bar-chart" />
                                                </div>
                                                <div className="investment_border_wrapper" />
                                                <div className="investment_content_wrapper">
                                                    <h1>
                                                        <a href="#">Monthly</a>
                                                    </h1>
                                                    <div className="line_shape line_shape2" />
                                                    <p>
                                                        Up to 5% for 20 Hourly
                                                        <br /> Compound Available
                                                        <br /> Down to 5% for 20 Hourly
                                                        <br /> Principal Return
                                                        <br /> Up to 5% for 20 Hourly
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
                                        <div className="col-xl-3 col-md-6 col-lg-6 col-sm-6 col-12">
                                            <div className="investment_box_wrapper index2_investment_box_Wraper index3_investment_box_Wraper float_left">
                                                <img src={in2} alt="img" />
                                                <div className="investment_icon_circle red_info_circle">
                                                    <i className="flaticon-money" />
                                                </div>
                                                <div className="investment_border_wrapper red_border_wrapper" />
                                                <div className="investment_content_wrapper red_content_wrapper">
                                                    <h1>
                                                        <a href="#">Anually</a>
                                                    </h1>
                                                    <div className="line_shape line_shape2" />
                                                    <p>
                                                        Up to 5% Daily for 5 Days
                                                        <br /> Min deposit: $2020
                                                        <br /> Max deposit: $101010
                                                        <br /> Principal Return
                                                        <br /> Compound Available
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* transaction wrapper start */}
            <div className="transaction_wrapper float_left" id='fixed_portion'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="sv_heading_wraper heading_wrapper_dark dark_heading index2_heading index2_heading_center index3_heading ">
                                {/* <h4>who we are</h4> */}
                                <h3>Our Latest Transaction</h3>
                                <div className="line_shape line_shape2" />
                            </div>
                            <div className="x_offer_tabs_wrapper index3_offer_tabs">
                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                        {" "}
                                        <a className="nav-link active" data-toggle="tab" href="#home">
                                            {" "}
                                            deposits
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        {" "}
                                        <a className="nav-link" data-toggle="tab" href="#menu2">
                                            withdraw
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="tab-content">
                                <div id="home" className="tab-pane active">
                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="table_next_race index3_table_race league_table overflow-scroll">
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <th className="form_table_resp">name</th>
                                                            <th>date</th>
                                                            <th>amount</th>
                                                            <th>currency</th>
                                                            <th>deposit</th>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img src={mem1} alt="img" />{" "}
                                                                <span>Olympia Ripple</span>
                                                            </td>
                                                            <td>June 24,2019</td>
                                                            <td>$6,00,000.00</td>
                                                            <td>Dollar</td>
                                                            <td>03 Minutes Ago</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img src={mem4} alt="img" />{" "}
                                                                <span>Nancee Broom</span>
                                                            </td>
                                                            <td>June 04,2019</td>
                                                            <td>$16,00,000.00</td>
                                                            <td>card</td>
                                                            <td>22 Minutes Ago</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img src={mem1} alt="img" />{" "}
                                                                <span>Broom Nancee</span>
                                                            </td>
                                                            <td>June 24,2019</td>
                                                            <td>$6,00,000.00</td>
                                                            <td>bitcoin</td>
                                                            <td>15 Minutes Ago</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img src={mem2} alt="img" />{" "}
                                                                <span>Ripple Alison</span>
                                                            </td>
                                                            <td>June 24,2019</td>
                                                            <td>$06,00,000.00</td>
                                                            <td>ripees</td>
                                                            <td>05 Minutes Ago</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img src={mem3} alt="img" />{" "}
                                                                <span>Olympia Ripple</span>
                                                            </td>
                                                            <td>June 05,2019</td>
                                                            <td>$45,00,000.00</td>
                                                            <td>ETH</td>
                                                            <td>13 Minutes Ago</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img src={mem4} alt="img" />{" "}
                                                                <span>Alison Rittichier</span>
                                                            </td>
                                                            <td>June 28,2019</td>
                                                            <td>$77,00,000.00</td>
                                                            <td>payonner</td>
                                                            <td>05 Minutes Ago</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img src={mem5} alt="img" />{" "}
                                                                <span>Olympia Ripple</span>
                                                            </td>
                                                            <td>June 24,2019</td>
                                                            <td>$11,00,000.00</td>
                                                            <td>card</td>
                                                            <td>23 Minutes Ago</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img src={mem6} alt="img" />{" "}
                                                                <span>Emmett Stein </span>
                                                            </td>
                                                            <td>June 21,2019</td>
                                                            <td>$66,00,000.00</td>
                                                            <td>paypal</td>
                                                            <td>53 Minutes Ago</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="menu2" className="tab-pane fade">
                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="table_next_race index3_table_race league_table overflow-scroll">
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <th className="form_table_resp">name</th>
                                                            <th>date</th>
                                                            <th>amount</th>
                                                            <th>currency</th>
                                                            <th>deposit</th>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img src={mem4} alt="img" />{" "}
                                                                <span>Nancee Broom</span>
                                                            </td>
                                                            <td>June 04,2019</td>
                                                            <td>$16,00,000.00</td>
                                                            <td>card</td>
                                                            <td>22 Minutes Ago</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img src={mem1} alt="img" />{" "}
                                                                <span>Olympia Ripple</span>
                                                            </td>
                                                            <td>June 24,2019</td>
                                                            <td>$6,00,000.00</td>
                                                            <td>Dollar</td>
                                                            <td>03 Minutes Ago</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img src={mem2} alt="img" />{" "}
                                                                <span>Ripple Alison</span>
                                                            </td>
                                                            <td>June 24,2019</td>
                                                            <td>$06,00,000.00</td>
                                                            <td>ripees</td>
                                                            <td>05 Minutes Ago</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img src={mem6} alt="img" />{" "}
                                                                <span>Emmett Stein</span>
                                                            </td>
                                                            <td>June 21,2019</td>
                                                            <td>$66,00,000.00</td>
                                                            <td>paypal</td>
                                                            <td>53 Minutes Ago</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img src={mem1} alt="img" />{" "}
                                                                <span>Broom Nancee</span>
                                                            </td>
                                                            <td>June 24,2019</td>
                                                            <td>$6,00,000.00</td>
                                                            <td>bitcoin</td>
                                                            <td>15 Minutes Ago</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img src={mem4} alt="img" />{" "}
                                                                <span>Alison Rittichier</span>
                                                            </td>
                                                            <td>June 28,2019</td>
                                                            <td>$77,00,000.00</td>
                                                            <td>payonner</td>
                                                            <td>05 Minutes Ago</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img src={mem3} alt="img" />{" "}
                                                                <span>Olympia Ripple</span>
                                                            </td>
                                                            <td>June 05,2019</td>
                                                            <td>$45,00,000.00</td>
                                                            <td>ETH</td>
                                                            <td>13 Minutes Ago</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img src={mem5} alt="img" />{" "}
                                                                <span>Olympia Ripple</span>
                                                            </td>
                                                            <td>June 24,2019</td>
                                                            <td>$11,00,000.00</td>
                                                            <td>card</td>
                                                            <td>23 Minutes Ago</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
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

            {/*our services wrapper start */}

            {/* investors wrapper start */}
            <div className="investors_wrapper float_left">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="sv_heading_wraper index2_heading index3_heading index3_headung2">
                                <h4>Tranding People</h4>
                                <h3>Keep Your Employees and <br /> Clients Happy and Productives</h3>
                                <div className="line_shape line_shape2" />
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 sw_spectrm_padding">
                            <div className="investors_slider_wrapper index2_investors_slider_Wrapper index3_investors_slider">
                                <div className="owl-carousel owl-theme">
                                    <div className="item">
                                        <div className="inves_slider_cntn index2_inves_slider_cntnt index3_investment_box float_left">
                                            <div className="investment_box_wrapper index_investment float_left">
                                                <div className="inves_main_border float_left py-4 text-center px-3">
                                                    <div className="inves_img_wrapper">
                                                        <h3 className='font-weight-semibold mb-3 text-center'>Dashboard</h3>
                                                    </div>
                                                    <p className='text-dark'>The ThePocketLawyers dashboard is a comprehensive and well-organized hub, designed with a
                                                        range of visual elements and information, allowing user to navigate with ease.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="inves_slider_cntn index2_inves_slider_cntnt index3_investment_box float_left">
                                            <div className="investment_box_wrapper index_investment float_left">
                                                <div className="inves_main_border float_left py-4 text-center px-3">
                                                    <div className="inves_img_wrapper">
                                                        <h3 className='font-weight-semibold mb-3 text-center'>Group</h3>
                                                    </div>
                                                    <p className='text-dark'>
                                                        Using the group feature, you can efficiently establish and oversee groups while also managing their composition with your designated members.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="inves_slider_cntn index2_inves_slider_cntnt index3_investment_box float_left">
                                            <div className="investment_box_wrapper index_investment float_left">
                                                <div className="inves_main_border float_left py-4 text-center px-3">
                                                    <div className="inves_img_wrapper">
                                                        <h3 className='font-weight-semibold mb-3 text-center'>To-Do</h3>
                                                    </div>
                                                    <p className='text-dark'>
                                                        The To-Do module in ThePocketLawyers empowers you to efficiently manage your tasks from their designated start date and time to their specified end date and time.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="inves_slider_cntn index2_inves_slider_cntnt index3_investment_box float_left">
                                            <div className="investment_box_wrapper index_investment float_left">
                                                <div className="inves_main_border float_left py-4 text-center px-3">
                                                    <div className="inves_img_wrapper">
                                                        <h3 className='font-weight-semibold mb-3 text-center'>Member</h3>
                                                    </div>
                                                    <p className='text-dark'>
                                                        Within the member feature, you have the flexibility to create new members and associate pre-existing roles with them, allowing for seamless customization of user access.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="inves_slider_cntn index2_inves_slider_cntnt index3_investment_box float_left">
                                            <div className="investment_box_wrapper index_investment float_left">
                                                <div className="inves_main_border float_left py-4 text-center px-3">
                                                    <div className="inves_img_wrapper">
                                                        <h3 className='font-weight-semibold mb-3 text-center'>Cases</h3>
                                                    </div>
                                                    <p className='text-dark'>
                                                        Within the Cases module of ThePocketLawyers, you can effortlessly initiate the creation of a case by furnishing essential details related to your side.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="inves_slider_cntn index2_inves_slider_cntnt index3_investment_box float_left">
                                            <div className="investment_box_wrapper index_investment float_left">
                                                <div className="inves_main_border float_left py-4 text-center px-3">
                                                    <div className="inves_img_wrapper">
                                                        <h3 className='font-weight-semibold mb-3 text-center'>Document</h3>
                                                    </div>
                                                    <p className='text-dark'>
                                                        The Documents module in ThePocketLawyers is designed to streamline the management of legal documents, offering a centralized repository for efficient organization and easy access.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="inves_slider_cntn index2_inves_slider_cntnt index3_investment_box float_left">
                                            <div className="investment_box_wrapper index_investment float_left">
                                                <div className="inves_main_border float_left py-4 text-center px-3">
                                                    <div className="inves_img_wrapper">
                                                        <h3 className='font-weight-semibold mb-3 text-center'>Roles</h3>
                                                    </div>
                                                    <p className='text-dark'>
                                                        Our versatile multi-user role and permission tool enables you to assign distinct roles to each of your staff members, granting you precise control over their access to specific parameters and functions
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="inves_slider_cntn index2_inves_slider_cntnt index3_investment_box float_left">
                                            <div className="investment_box_wrapper index_investment float_left">
                                                <div className="inves_main_border float_left py-4 text-center px-3">
                                                    <div className="inves_img_wrapper">
                                                        <h3 className='font-weight-semibold mb-3 text-center'>Advocate</h3>
                                                    </div>
                                                    <p className='text-dark'>
                                                        The Advocate module within ThePocketLawyers empowers you to effortlessly create comprehensive
                                                        advocate profiles, encompassing vital personal details, including both office and home addresses, in
                                                        addition to specifying a designated Point of Contact for reference and communication purposes.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="inves_slider_cntn index2_inves_slider_cntnt index3_investment_box float_left">
                                            <div className="investment_box_wrapper index_investment float_left">
                                                <div className="inves_main_border float_left py-4 text-center px-3">
                                                    <div className="inves_img_wrapper">
                                                        <h3 className='font-weight-semibold mb-3 text-center'>Calendar</h3>
                                                    </div>
                                                    <p className='text-dark'>
                                                        The Calendar module within ThePocketLawyers facilitates the efficient management of scheduled
                                                        To-Dos and Case Hearings and many more common interfaces.
                                                    </p>
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

            {/* FAQ wrapper start */}
            <div className="faq_wrapper float_left">
                <div className="investment_overlay faq_overlay" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-sm-12 col-12">
                            <div className="sv_heading_wraper heading_wrapper_dark index2_heading index2_heading_center index3_heading">
                                <h4>FAQ section</h4>
                                <h3>Frequently Asked Questions</h3>
                                <div className="line_shape line_shape2" />
                            </div>
                        </div>
                    </div>
                    <div id="accordion" role="tablist">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="card index3_card">
                                    {/* Card Title */}
                                    <div className="card_pagee" role="tab" id="headingOne">
                                        <h5 className="h5-md">
                                            <a
                                                data-toggle="collapse"
                                                href="#collapseOne"
                                                role="button"
                                                aria-expanded="true"
                                                aria-controls="collapseOne"
                                            >
                                                How does the Free trial work?
                                            </a>
                                        </h5>
                                    </div>
                                    {/* Card Content */}
                                    <div
                                        id="collapseOne"
                                        className="collapse show"
                                        role="tabpanel"
                                        aria-labelledby="headingOne"
                                        data-parent="#accordion"
                                        style={{}}
                                    >
                                        <div className="card-body">
                                            <div className="card_cntnt">
                                                <p>
                                                    Click the “Try for free” button to create an account, No credit card will be requested. You
                                                    will have access to all features, and can choose to purchase subscription plan that suit
                                                    your firm’s requirement later, At the end of 14 days, you will not be able to access any
                                                    of the features of the app.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card index3_card">
                                    <div className="card_pagee" role="tab" id="headingTwo">
                                        <h5 className="h5-md">
                                            <a
                                                className="collapsed"
                                                data-toggle="collapse"
                                                href="#collapseTwo"
                                                role="button"
                                                aria-expanded="false"
                                                aria-controls="collapseTwo"
                                            >
                                                Can I cancel at any time?
                                            </a>
                                        </h5>
                                    </div>
                                    <div
                                        id="collapseTwo"
                                        className="collapse"
                                        role="tabpanel"
                                        aria-labelledby="headingTwo"
                                        data-parent="#accordion"
                                        style={{}}
                                    >
                                        <div className="card-body">
                                            <div className="card_cntnt">
                                                <p>
                                                    Absolutely. Although we hope you’ll find ThePocketLawyers Case manager a good fit
                                                    for your practice management needs, you can discontinue a subscription at any time;
                                                    however, there are no refunds for the current term (monthly or yearly).
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card index3_card">
                                    <div className="card_pagee" role="tab" id="headingThree">
                                        <h5 className="h5-md">
                                            <a
                                                className="collapsed"
                                                data-toggle="collapse"
                                                href="#collapseThree"
                                                role="button"
                                                aria-expanded="false"
                                                aria-controls="collapseThree"
                                            >
                                                What training options are available for customers?
                                            </a>
                                        </h5>
                                    </div>
                                    <div
                                        id="collapseThree"
                                        className="collapse"
                                        role="tabpanel"
                                        aria-labelledby="headingThree"
                                        data-parent="#accordion"
                                    >
                                        <div className="card-body">
                                            <div className="card_cntnt">
                                                <p>
                                                    With Case manager, you get unlimited free access to live training and comprehensive
                                                    support resources. Our extensive knowledgebase is complete with helpful
                                                    walkthroughs, training videos, and answers to frequently asked questions. We’re also
                                                    happy to schedule additional one-on-one training as needed at no additional cost to
                                                    you. If you require onsite training we shall bill you accordingly by numbers of users and
                                                    location in case of physical trainings.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card index3_card">
                                    <div className="card_pagee" role="tab" id="heading4">
                                        <h5 className="h5-md">
                                            <a
                                                className="collapsed"
                                                data-toggle="collapse"
                                                href="#collapse41"
                                                role="button"
                                                aria-expanded="false"
                                                aria-controls="collapse41"
                                            >
                                                Is ThePocketLawyers Case manager Secure?
                                            </a>
                                        </h5>
                                    </div>
                                    <div
                                        id="collapse41"
                                        className="collapse"
                                        role="tabpanel"
                                        aria-labelledby="heading4"
                                        data-parent="#accordion"
                                    >
                                        <div className="card-body">
                                            <div className="card_cntnt">
                                                <p>
                                                    We ensure that your communications are secure using bank-grade 256-bit SSL
                                                    encryption. All of Case Manager’s infrastructure is hosted using physically secure,
                                                    managed data centers that meet the rigid SSAE 16 specifications. Geo-redundant
                                                    backups are performed multiple times per day, and site security and privacy are
                                                    routinely audited by respected third parties.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card index3_card">
                                    <div className="card_pagee" role="tab" id="heading7">
                                        <h5 className="h5-md">
                                            <a
                                                className="collapsed"
                                                data-toggle="collapse"
                                                href="#collapseT"
                                                role="button"
                                                aria-expanded="false"
                                                aria-controls="collapseT"
                                            >
                                                How often are new features added to ThePocketLawyers practice
                                                manager?
                                            </a>
                                        </h5>
                                    </div>
                                    <div
                                        id="collapseT"
                                        className="collapse"
                                        role="tabpanel"
                                        aria-labelledby="heading7"
                                        data-parent="#accordion"
                                    >
                                        <div className="card-body">
                                            <div className="card_cntnt">
                                                <p>
                                                    We are continually working to deliver the most innovative cloud-based practice
                                                    management system to our customers. Thanks to valued feedback and suggestions
                                                    from customers like you, product improvements and updates are integrated seamlessly
                                                    several times per month.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="card index3_card">
                                    {/* Card Title */}
                                    <div className="card_pagee" role="tab" id="headingfour">
                                        <h5 className="h5-md">
                                            <a
                                                className="collapsed"
                                                data-toggle="collapse"
                                                href="#collapse1"
                                                role="button"
                                                aria-expanded="false"
                                                aria-controls="collapse1"
                                            >
                                                How will you bill me?
                                            </a>
                                        </h5>
                                    </div>
                                    {/* Card Content */}
                                    <div
                                        id="collapse1"
                                        className="collapse"
                                        role="tabpanel"
                                        aria-labelledby="headingfour"
                                        data-parent="#accordion"
                                        style={{}}
                                    >
                                        <div className="card-body">
                                            <div className="card_cntnt">
                                                <p>
                                                    We offer both monthly and annual billing. Depending on what option you choose, your
                                                    subscription will be renewed at the end of your license period. You save up to 20% if
                                                    you choose to pay annually.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="card index3_card">
                                    <div className="card_pagee" role="tab" id="headingfive">
                                        <h5 className="h5-md">
                                            <a
                                                className="collapsed"
                                                data-toggle="collapse"
                                                href="#collapse2"
                                                role="button"
                                                aria-expanded="false"
                                                aria-controls="collapse2"
                                            >
                                                Unlimited Features &amp; Unique Layouts
                                            </a>
                                        </h5>
                                    </div>
                                    <div
                                        id="collapse2"
                                        className="collapse"
                                        role="tabpanel"
                                        aria-labelledby="headingfive"
                                        data-parent="#accordion"
                                        style={{}}
                                    >
                                        <div className="card-body">
                                            <div className="card_cntnt">
                                                <p>
                                                    Morbi accumsan ipsum velit. Nam nec aks tel us a odio
                                                    tincidunt an auctor. Proi gravida nibh vel elit ctor. This
                                                    is Photoshop's version of Lorem m. Proin vida nibh vel
                                                    velit auctor. Nam nec aks tel us a odio tincidunt auctor.
                                                    velit auctor.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card index3_card">
                                    <div className="card_pagee" role="tab" id="headingfive1">
                                        <h5 className="h5-md">
                                            <a
                                                className="collapsed"
                                                data-toggle="collapse"
                                                href="#collapse2u"
                                                role="button"
                                                aria-expanded="false"
                                                aria-controls="collapse2u"
                                            >
                                                Unlimited Features &amp; Unique Layouts
                                            </a>
                                        </h5>
                                    </div>
                                    <div
                                        id="collapse2u"
                                        className="collapse"
                                        role="tabpanel"
                                        aria-labelledby="headingfive1"
                                        data-parent="#accordion"
                                        style={{}}
                                    >
                                        <div className="card-body">
                                            <div className="card_cntnt">
                                                <p>
                                                    Morbi accumsan ipsum velit. Nam nec aks tel us a odio
                                                    tincidunt an auctor. Proi gravida nibh vel elit ctor. This
                                                    is Photoshop's version of Lorem m. Proin vida nibh vel
                                                    velit auctor. Nam nec aks tel us a odio tincidunt auctor.
                                                    velit auctor.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card index3_card">
                                    <div className="card_pagee" role="tab" id="headingnine">
                                        <h5 className="h5-md">
                                            <a
                                                className="collapsed"
                                                data-toggle="collapse"
                                                href="#collapse02"
                                                role="button"
                                                aria-expanded="false"
                                                aria-controls="collapse02"
                                            >
                                                Clean and Unique
                                            </a>
                                        </h5>
                                    </div>
                                    <div
                                        id="collapse02"
                                        className="collapse"
                                        role="tabpanel"
                                        aria-labelledby="headingnine"
                                        data-parent="#accordion"
                                        style={{}}
                                    >
                                        <div className="card-body">
                                            <div className="card_cntnt">
                                                <p>
                                                    Morbi accumsan ipsum velit. Nam nec aks tel us a odio
                                                    tincidunt an auctor. Proi gravida nibh vel elit ctor. This
                                                    is Photoshop's version of Lorem m. Proin vida nibh vel
                                                    velit auctor. Nam nec aks tel us a odio tincidunt auctor.
                                                    velit auctor.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card index3_card">
                                    <div className="card_pagee" role="tab" id="headingten">
                                        <h5 className="h5-md">
                                            <a
                                                className="collapsed"
                                                data-toggle="collapse"
                                                href="#collapse092"
                                                role="button"
                                                aria-expanded="false"
                                                aria-controls="collapse092"
                                            >
                                                Deeply Customisable Theme
                                            </a>
                                        </h5>
                                    </div>
                                    <div
                                        id="collapse092"
                                        className="collapse"
                                        role="tabpanel"
                                        aria-labelledby="headingten"
                                        data-parent="#accordion"
                                        style={{}}
                                    >
                                        <div className="card-body">
                                            <div className="card_cntnt">
                                                <p>
                                                    Morbi accumsan ipsum velit. Nam nec aks tel us a odio
                                                    tincidunt an auctor. Proi gravida nibh vel elit ctor. This
                                                    is Photoshop's version of Lorem m. Proin vida nibh vel
                                                    velit auctor. Nam nec aks tel us a odio tincidunt auctor.
                                                    velit auctor.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card index3_card">
                                    <div className="card_pagee" role="tab" id="headingsiz">
                                        <h5 className="h5-md">
                                            <a
                                                className="collapsed"
                                                data-toggle="collapse"
                                                href="#collapse3"
                                                role="button"
                                                aria-expanded="false"
                                                aria-controls="collapse3"
                                            >
                                                How do I use the features ?
                                            </a>
                                        </h5>
                                    </div>
                                    <div
                                        id="collapse3"
                                        className="collapse"
                                        role="tabpanel"
                                        aria-labelledby="headingsiz"
                                        data-parent="#accordion"
                                    >
                                        <div className="card-body">
                                            <div className="card_cntnt">
                                                <p>
                                                    Morbi accumsan ipsum velit. Nam nec aks tel us a odio
                                                    tincidunt an auctor. Proi gravida nibh vel elit ctor. This
                                                    is Photoshop's version of Lorem m. Proin vida nibh vel
                                                    velit auctor. Nam nec aks tel us a odio tincidunt auctor.
                                                    velit auctor.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card index3_card">
                                    <div className="card_pagee" role="tab" id="headingseven">
                                        <h5 className="h5-md">
                                            <a
                                                className="collapsed"
                                                data-toggle="collapse"
                                                href="#collapse31"
                                                role="button"
                                                aria-expanded="false"
                                                aria-controls="collapse31"
                                            >
                                                Pixel perfect and responsive
                                            </a>
                                        </h5>
                                    </div>
                                    <div
                                        id="collapse31"
                                        className="collapse"
                                        role="tabpanel"
                                        aria-labelledby="headingseven"
                                        data-parent="#accordion"
                                    >
                                        <div className="card-body">
                                            <div className="card_cntnt">
                                                <p>
                                                    Morbi accumsan ipsum velit. Nam nec aks tel us a odio
                                                    tincidunt an auctor. Proi gravida nibh vel elit ctor. This
                                                    is Photoshop's version of Lorem m. Proin vida nibh vel
                                                    velit auctor. Nam nec aks tel us a odio tincidunt auctor.
                                                    velit auctor.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card index3_card">
                                    <div className="card_pagee" role="tab" id="headingeight">
                                        <h5 className="h5-md">
                                            <a
                                                className="collapsed"
                                                data-toggle="collapse"
                                                href="#collapse32"
                                                role="button"
                                                aria-expanded="false"
                                                aria-controls="collapse32"
                                            >
                                                Imagination Is The Beginning
                                            </a>
                                        </h5>
                                    </div>
                                    <div
                                        id="collapse32"
                                        className="collapse"
                                        role="tabpanel"
                                        aria-labelledby="headingeight"
                                        data-parent="#accordion"
                                    >
                                        <div className="card-body">
                                            <div className="card_cntnt">
                                                <p>
                                                    Morbi accumsan ipsum velit. Nam nec aks tel us a odio
                                                    tincidunt an auctor. Proi gravida nibh vel elit ctor. This
                                                    is Photoshop's version of Lorem m. Proin vida nibh vel
                                                    velit auctor. Nam nec aks tel us a odio tincidunt auctor.
                                                    velit auctor.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <div className="about_btn calc_btn faqq_btn index3_about_btn  float_left">
                            <ul>
                                <li>
                                    <a href="#" data-toggle="modal" data-target="#myModal">
                                        ask questions ?
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div
                            className="modal fade question_modal index3_question_modal"
                            id="myModal"
                            role="dialog"
                        >
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <button type="button" className="close" data-dismiss="modal">
                                        ×
                                    </button>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="sv_question_pop float_left">
                                                <h1>ask questions ? </h1>
                                                <div className="search_alert_box float_left">
                                                    <div className="apply_job_form">
                                                        <input
                                                            type="text"
                                                            name="full_name"
                                                            placeholder="full name"
                                                        />
                                                    </div>
                                                    <div className="apply_job_form">
                                                        <input
                                                            type="text"
                                                            name="Email"
                                                            placeholder="Enter Your Email"
                                                        />
                                                    </div>
                                                    <div className="apply_job_form">
                                                        <input
                                                            type="text"
                                                            name="subject"
                                                            placeholder="your question"
                                                        />
                                                    </div>
                                                    <div className="apply_job_form">
                                                        <textarea
                                                            className="form-control"
                                                            name="message"
                                                            placeholder="Message"
                                                            defaultValue={""}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="question_sec float_left">
                                                    <div className="about_btn calc_btn faqq_btn index3_about_btn  ques_Btn">
                                                        <ul>
                                                            <li>
                                                                <a href="#">apply now</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="cancel_wrapper">
                                                        <a href="#" className="" data-dismiss="modal">
                                                            cancel
                                                        </a>
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
            <Footer />
        </div>
    )
}

export default Plans;