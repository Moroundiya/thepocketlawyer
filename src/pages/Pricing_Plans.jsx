import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../pricing-plan.css';

function Pricing_Plans() {
    return (
        <div id="pricing-all-parent-div">
            <Header />

            {/*investment plan wrapper start */}
            <div className="sv_pricing_paln" id='sv_pricing_paln_pro'>
                <div className="container-fluid px-5" id='container-fluid-space-removal'>
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-sm-12 col-12" id='sv-heading-remove-line'>
                            <div className="sv_heading_wraper heading_dwrapper_dark text-center">
                                <h4> our plans </h4>
                                <h3 className='text-dark'> Pay Only for What You Need</h3>
                                <h5 className='text-dark'>Start your free trial. Full access. No credit card required.</h5>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
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
                                    <div class="w-auto d-flex justify-content-center">
                                        <ul class="nav nav-pills mb-5 border px-3 py-2 rounded" id="pills-tab" role="tablist" style={{ background: '#f0a43c' }}>
                                            <li class="nav-item">
                                                <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Monthly</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Yearly</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="tab-content monthly-plan-bg" id="pills-tabContent">
                                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                            <div className="row" id='investment_plans_pro_increase'>
                                                <div className="col-xl-3 col-md-6 col-lg-6 col-sm-6 col-12" id='invest-plan-each-col'>
                                                    <div className="investment_box_wrapper float_left">
                                                        <div className="investment_icon_circle">
                                                            <i className="flaticon-bar-chart" />
                                                        </div>
                                                        <div className="investment_border_wrapper" />
                                                        <div className="investment_content_wrapper">
                                                            <h3 className='font-weight-bold'>
                                                                <a href="#" id='plan-purple-color'>14 Days Trial</a>
                                                            </h3>
                                                            <h4 className='mt-3 text-danger'>
                                                                ₦00:00
                                                            </h4>
                                                            <p className='my-3' style={{ lineHeight: '1.5' }}>
                                                                Advance document management, full
                                                                text search, &amp; Word-based advanced
                                                                document and workspace automation. ,
                                                                Ideal for growing and established Law

                                                                Firms
                                                            </p>
                                                            <p className='text-left px-3 font-weight-bold'>
                                                                ●  Everything in Basic <br />
                                                                ●  Everything in Professional <br />
                                                                ●  Limited Monthly in App Video Calls<br />
                                                                ● Limited Employee Mgt. (+5 Staff)<br />
                                                                ● Limited Practitioners Mgt. (+5
                                                                Lawyers) <br />
                                                                ● ThePocketLawyers Drive<br />
                                                                ● Sync ThePocketLawyers files to your
                                                                desktop automatically<br />
                                                                ● Full Text Search<br />
                                                                ● Perform conflict checks with ease<br />
                                                                ● Advanced Document Automation<br />
                                                                ● Automate legal document creation<br />
                                                                ● Dedicated Account Manager<br />
                                                                ● Advance Reports &amp; Analytics<br />
                                                                ● Custom Design Solutions<br />
                                                                ● NEW Open API<br />
                                                            </p>
                                                        </div>
                                                        <div className="about_btn plans_btn">
                                                            <ul>
                                                                <li>
                                                                    <a href="#">Learn More!</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-6 col-lg-6 col-sm-6 col-12" id='invest-plan-each-col'>
                                                    <div className="investment_box_wrapper float_left">
                                                        <div className="investment_icon_circle red_info_circle">
                                                            <i className="flaticon-money" />
                                                        </div>
                                                        <div className="investment_border_wrapper red_border_wrapper" />
                                                        <div className="investment_content_wrapper">
                                                            <h3 className='font-weight-bold'>
                                                                <a href="#" id='plan-orange-color' >Basic Plan</a>
                                                            </h3>
                                                            <h4 className='mt-3 text-danger'>
                                                                ₦3,500/Month
                                                            </h4>
                                                            <p className='my-3' style={{ lineHeight: '1.5' }}>
                                                                Cloud-based practice and case
                                                                management with end-to-end billing and
                                                                online payments. Ideal for individuals
                                                                and Startup Law Firms
                                                            </p>
                                                            <p className='text-left px-3 font-weight-bold'>
                                                                ● Free Registrations <br />
                                                                ● Limited Access Rights <br />
                                                                ● Unlimited Monthly in App Messages <br />
                                                                ● Profile Management<br />
                                                                ● Matter Management<br />
                                                                ● Limited Employee Mgt. (2 Staff)<br />
                                                                ● Limited Practitioners Mgt. (2 Lawyers)<br />
                                                                ● Free Google meet Links Mgt.<br />
                                                                ● Free Zoom Meeting Links Mgt.<br />
                                                                ● Case and Contact Management<br />
                                                                ● Task Management<br />
                                                                ● Client Intake Management<br />
                                                                ● Client Portal<br />
                                                                ● Time Entry and Expense Tracking<br />
                                                                ● Billing and Online Payments<br />
                                                                ● Legal Calendaring<br />
                                                                ● Unlimited Document Storage<br />
                                                                ● Basic Financial Reporting<br />
                                                                ● Free Training &amp; Support<br />
                                                            </p>
                                                        </div>
                                                        <div className="about_btn plans_btn red_btn_plans">
                                                            <ul>
                                                                <li>
                                                                    <a href="#">Learn More!</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-6 col-lg-6 col-sm-6 col-12" id='invest-plan-each-col'>
                                                    <div className="investment_box_wrapper float_left">
                                                        <div className="investment_icon_circle blue_icon_circle">
                                                            <i className="flaticon-gold" />
                                                        </div>
                                                        <div className="investment_border_wrapper blue_border_wrapper" />
                                                        <div className="investment_content_wrapper">
                                                            <h3 className='font-weight-bold'>
                                                                <a href="#" id='plan-blue-color'>Professional</a>
                                                            </h3>
                                                            <h4 className='mt-3 text-danger'>
                                                                ₦8, 000:00/Month
                                                            </h4>
                                                            <p className='my-3' style={{ lineHeight: '1.5' }}>
                                                                Robust firm management + client
                                                                intake, contact communication, and key
                                                                integrations, Ideal for Startup and
                                                                growing Law Firms
                                                            </p>
                                                            <p className='text-left px-3 font-weight-bold'>
                                                                ● Everything in Basic <br />
                                                                ● limited Monthly in App Voice Calls <br />
                                                                ● Limited Employee Mgt. (+3 Staff)<br />
                                                                ● Limited Practitioners Mgt. (+3
                                                                Lawyers)<br />
                                                                ● Lead &amp; CRM<br />
                                                                ● Payroll &amp; HRM<br />
                                                                ● In App Appointment Mgt.<br />
                                                                ● Custom Fields<br />
                                                                ● Advanced Billing and Invoicing<br />
                                                                ● Secure document sharing via Portal<br />
                                                                ● Integrations: Google, Outlook,<br />
                                                                ● + more features<br />
                                                            </p>
                                                        </div>
                                                        <div className="about_btn plans_btn blue_btn_plans">
                                                            <ul>
                                                                <li>
                                                                    <a href="#">Learn More!</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-6 col-lg-6 col-sm-6 col-12" id='invest-plan-each-col'>
                                                    <div className="investment_box_wrapper float_left">
                                                        <div className="investment_icon_circle green_info_circle">
                                                            <i className="flaticon-medal" />
                                                        </div>
                                                        <div className="investment_border_wrapper green_border_wrapper" />
                                                        <div className="investment_content_wrapper">
                                                            <h3 className='font-weight-bold'>
                                                                <a href="#" id='plan-green-color'>Advanced</a>
                                                            </h3>
                                                            <h4 className='mt-3 text-danger'>
                                                                ₦15, 000:00/Month
                                                            </h4>
                                                            <p>
                                                                <p className='my-3' style={{ lineHeight: '1.5' }}>
                                                                    Advance document management, full
                                                                    text search, &amp; Word-based advanced
                                                                    document and workspace automation. ,
                                                                    Ideal for growing and established Law

                                                                    Firms
                                                                </p>
                                                            </p>
                                                            <p className='text-left px-3 font-weight-bold'>
                                                                ● Everything in Basic <br />
                                                                ● Everything in Professional<br />
                                                                ● limited Monthly in App Video Calls<br />
                                                                ● Limited Employee Mgt. (+5 Staff)<br />
                                                                ● Limited Practitioners Mgt. (+5
                                                                Lawyers)<br />
                                                                ● ThePocketLawyers Drive<br />
                                                                ● Sync ThePocketLawyers files to your
                                                                desktop automatically<br />
                                                                ● Full Text Search<br />
                                                                ● Perform conflict checks with ease<br />
                                                                ● Advanced Document Automation<br />
                                                                ● Automate legal document creation<br />
                                                                ● Dedicated Account Manager<br />
                                                                ● Advance Reports &amp; Analytics<br />
                                                                ● Custom Design Solutions<br />
                                                                ● NEW Open API<br />
                                                                ● + more features<br />
                                                            </p>
                                                        </div>
                                                        <div className="about_btn plans_btn green_plan_btn">
                                                            <ul>
                                                                <li>
                                                                    <a href="#">Learn More!</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                            <div className="row" id='investment_plans_pro_increase'>
                                                <div className="col-xl-3 col-md-6 col-lg-6 col-sm-6 col-12" id='invest-plan-each-col'>
                                                    <div className="investment_box_wrapper float_left">
                                                        <div className="investment_icon_circle">
                                                            <i className="flaticon-bar-chart" />
                                                        </div>
                                                        <div className="investment_border_wrapper" />
                                                        <div className="investment_content_wrapper">
                                                            <h3 className='font-weight-bold'>
                                                                <a href="#" id='plan-purple-color'>14 Days Trial</a>
                                                            </h3>
                                                            <h4 className='mt-3 text-danger'>
                                                                ₦00:00
                                                            </h4>
                                                            <p className='my-3' style={{ lineHeight: '1.5' }}>
                                                                Advance document management, full
                                                                text search, &amp; Word-based advanced
                                                                document and workspace automation. ,
                                                                Ideal for growing and established Law

                                                                Firms
                                                            </p>
                                                            <p className='text-left px-3 font-weight-bold'>
                                                                ●  Everything in Basic <br />
                                                                ●  Everything in Professional <br />
                                                                ●  Limited Monthly in App Video Calls<br />
                                                                ● Limited Employee Mgt. (+5 Staff)<br />
                                                                ● Limited Practitioners Mgt. (+5
                                                                Lawyers) <br />
                                                                ● ThePocketLawyers Drive<br />
                                                                ● Sync ThePocketLawyers files to your
                                                                desktop automatically<br />
                                                                ● Full Text Search<br />
                                                                ● Perform conflict checks with ease<br />
                                                                ● Advanced Document Automation<br />
                                                                ● Automate legal document creation<br />
                                                                ● Dedicated Account Manager<br />
                                                                ● Advance Reports &amp; Analytics<br />
                                                                ● Custom Design Solutions<br />
                                                                ● NEW Open API<br />
                                                            </p>
                                                        </div>
                                                        <div className="about_btn plans_btn">
                                                            <ul>
                                                                <li>
                                                                    <a href="#">Learn More!</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-6 col-lg-6 col-sm-6 col-12" id='invest-plan-each-col'>
                                                    <div className="investment_box_wrapper float_left">
                                                        <div className="investment_icon_circle red_info_circle">
                                                            <i className="flaticon-money" />
                                                        </div>
                                                        <div className="investment_border_wrapper red_border_wrapper" />
                                                        <div className="investment_content_wrapper">
                                                            <h3 className='font-weight-bold'>
                                                                <a href="#" id='plan-orange-color'>Basic Plan</a>
                                                            </h3>
                                                            <h4 className='mt-3 text-danger'>
                                                                ₦35,000:00/Year
                                                            </h4>
                                                            <p className='my-3' style={{ lineHeight: '1.5' }}>
                                                                Cloud-based practice and case
                                                                management with end-to-end billing and
                                                                online payments. Ideal for individuals
                                                                and Startup Law Firms
                                                            </p>
                                                            <p className='text-left px-3 font-weight-bold'>
                                                                ● Free Registrations <br />
                                                                ● Limited Access Rights <br />
                                                                ● Unlimited Monthly in App Messages <br />
                                                                ● Profile Management<br />
                                                                ● Matter Management<br />
                                                                ● Limited Employee Mgt. (2 Staff)<br />
                                                                ● Limited Practitioners Mgt. (2 Lawyers)<br />
                                                                ● Free Google meet Links Mgt.<br />
                                                                ● Free Zoom Meeting Links Mgt.<br />
                                                                ● Case and Contact Management<br />
                                                                ● Task Management<br />
                                                                ● Client Intake Management<br />
                                                                ● Client Portal<br />
                                                                ● Time Entry and Expense Tracking<br />
                                                                ● Billing and Online Payments<br />
                                                                ● Legal Calendaring<br />
                                                                ● Unlimited Document Storage<br />
                                                                ● Basic Financial Reporting<br />
                                                                ● Free Training &amp; Support<br />
                                                            </p>
                                                        </div>
                                                        <div className="about_btn plans_btn red_btn_plans">
                                                            <ul>
                                                                <li>
                                                                    <a href="#">Learn More!</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-6 col-lg-6 col-sm-6 col-12" id='invest-plan-each-col'>
                                                    <div className="investment_box_wrapper float_left">
                                                        <div className="investment_icon_circle blue_icon_circle">
                                                            <i className="flaticon-gold" />
                                                        </div>
                                                        <div className="investment_border_wrapper blue_border_wrapper" />
                                                        <div className="investment_content_wrapper">
                                                            <h3 className='font-weight-bold'>
                                                                <a href="#" id='plan-blue-color'>Professional</a>
                                                            </h3>
                                                            <h4 className='mt-3 text-danger'>
                                                                ₦80,000:00/Year
                                                            </h4>
                                                            <p className='my-3' style={{ lineHeight: '1.5' }}>
                                                                Robust firm management + client
                                                                intake, contact communication, and key
                                                                integrations, Ideal for Startup and
                                                                growing Law Firms
                                                            </p>
                                                            <p className='text-left px-3 font-weight-bold'>
                                                                ● Everything in Basic <br />
                                                                ● limited Monthly in App Voice Calls <br />
                                                                ● Limited Employee Mgt. (+3 Staff)<br />
                                                                ● Limited Practitioners Mgt. (+3
                                                                Lawyers)<br />
                                                                ● Lead &amp; CRM<br />
                                                                ● Payroll &amp; HRM<br />
                                                                ● In App Appointment Mgt.<br />
                                                                ● Custom Fields<br />
                                                                ● Advanced Billing and Invoicing<br />
                                                                ● Secure document sharing via Portal<br />
                                                                ● Integrations: Google, Outlook,<br />
                                                                ● + more features<br />
                                                            </p>
                                                        </div>
                                                        <div className="about_btn plans_btn blue_btn_plans">
                                                            <ul>
                                                                <li>
                                                                    <a href="#">Learn More!</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-6 col-lg-6 col-sm-6 col-12" id='invest-plan-each-col'>
                                                    <div className="investment_box_wrapper float_left">
                                                        <div className="investment_icon_circle green_info_circle">
                                                            <i className="flaticon-medal" />
                                                        </div>
                                                        <div className="investment_border_wrapper green_border_wrapper" />
                                                        <div className="investment_content_wrapper">
                                                            <h3 className='font-weight-bold'>
                                                                <a href="#" id='plan-green-color'>Advanced</a>
                                                            </h3>
                                                            <h4 className='mt-3 text-danger'>
                                                                ₦150,000:00/Year
                                                            </h4>
                                                            <p>
                                                                <p className='my-3' style={{ lineHeight: '1.5' }}>
                                                                    Advance document management, full
                                                                    text search, &amp; Word-based advanced
                                                                    document and workspace automation. ,
                                                                    Ideal for growing and established Law

                                                                    Firms
                                                                </p>
                                                            </p>
                                                            <p className='text-left px-3 font-weight-bold'>
                                                                ● Everything in Basic <br />
                                                                ● Everything in Professional<br />
                                                                ● limited Monthly in App Video Calls<br />
                                                                ● Limited Employee Mgt. (+5 Staff)<br />
                                                                ● Limited Practitioners Mgt. (+5
                                                                Lawyers)<br />
                                                                ● ThePocketLawyers Drive<br />
                                                                ● Sync ThePocketLawyers files to your
                                                                desktop automatically<br />
                                                                ● Full Text Search<br />
                                                                ● Perform conflict checks with ease<br />
                                                                ● Advanced Document Automation<br />
                                                                ● Automate legal document creation<br />
                                                                ● Dedicated Account Manager<br />
                                                                ● Advance Reports &amp; Analytics<br />
                                                                ● Custom Design Solutions<br />
                                                                ● NEW Open API<br />
                                                                ● + more features<br />
                                                            </p>
                                                        </div>
                                                        <div className="about_btn plans_btn green_plan_btn">
                                                            <ul>
                                                                <li>
                                                                    <a href="#">Learn More!</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <div id="menu4" className="tab-pane fade">
                                    <div className="row">
                                        <div className="col-xl-8 col-lg-8 col-md-10 col-12 mx-auto">
                                            <div className="filter-right-column">
                                                <div className="storefront-sorting">
                                                    <div className="woocommerce-notices-wrapper" />
                                                    <form className="woocommerce-ordering" method="get">
                                                        <select
                                                            name="orderby"
                                                            className="orderby"
                                                            aria-label="Shop order"
                                                            style={{ display: "none" }}
                                                        >
                                                            <option value="menu_order" selected="selected">
                                                                Default sorting
                                                            </option>
                                                            <option value="popularity">Sort by popularity</option>
                                                            <option value="rating">Sort by average rating</option>
                                                            <option value="date">Sort by latest</option>
                                                            <option value="price">Sort by price: low to high</option>
                                                            <option value="price-desc">Sort by price: high to low</option>
                                                        </select>
                                                        <div className="nice-select orderby" tabIndex={0}>
                                                            <span className="current">Default sorting</span>
                                                            <ul className="list">
                                                                <li data-value="menu_order" className="option selected">
                                                                    Default sorting
                                                                </li>
                                                                <li data-value="popularity" className="option">
                                                                    Sort by popularity
                                                                </li>
                                                                <li data-value="rating" className="option">
                                                                    Sort by average rating
                                                                </li>
                                                                <li data-value="date" className="option">
                                                                    Sort by latest
                                                                </li>
                                                                <li data-value="price" className="option">
                                                                    Sort by price: low to high
                                                                </li>
                                                                <li data-value="price-desc" className="option">
                                                                    Sort by price: high to low
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <input type="hidden" name="paged" defaultValue={1} />
                                                    </form>
                                                    <p className="woocommerce-result-count">Showing 1–27 of 139 results</p>
                                                    <nav className="woocommerce-pagination">
                                                        <ul className="page-numbers">
                                                            <li>
                                                                <span aria-current="page" className="page-numbers current">
                                                                    1
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="page-numbers"
                                                                    href="https://workdo.io/product-category/dash-saas-addon/page/2/"
                                                                >
                                                                    2
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="page-numbers"
                                                                    href="https://workdo.io/product-category/dash-saas-addon/page/3/"
                                                                >
                                                                    3
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="page-numbers"
                                                                    href="https://workdo.io/product-category/dash-saas-addon/page/4/"
                                                                >
                                                                    4
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="page-numbers"
                                                                    href="https://workdo.io/product-category/dash-saas-addon/page/5/"
                                                                >
                                                                    5
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="page-numbers"
                                                                    href="https://workdo.io/product-category/dash-saas-addon/page/6/"
                                                                >
                                                                    6
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="next page-numbers"
                                                                    href="https://workdo.io/product-category/dash-saas-addon/page/2/"
                                                                >
                                                                    →
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                                <ul className="products row columns-9">
                                                    <li className="col-xl-4 col-lg-6 col-sm-6 col-12">
                                                        <div className="product type-product post-2904 status-publish first instock product_cat-dash-saas-addon product_cat-sales sale downloadable virtual sold-individually purchasable product-type-simple">
                                                            <div className="feature-img">
                                                                <a href="javascript:void(0)" className="pdp-img" tabIndex={0}>
                                                                    {" "}
                                                                    <img
                                                                        src="https://workdo.io/wp-content/themes/storefront-child/assets/images/themes/main-image/sales-dash.png"
                                                                        alt="Sales – Dash SaaS Add-on"
                                                                    />
                                                                </a>
                                                                <div className="hoverable-btn">
                                                                    <div
                                                                        className="d-flex justify-content-center gm-preview-event align-items-center"
                                                                        data-product-id={2904}
                                                                        gm-product-name="Sales - Dash SaaS Add-on"
                                                                        gm-produt-price={29}
                                                                        gm-product-category="Dash SaaS Addon"
                                                                        position={78}
                                                                    >
                                                                        <a
                                                                            href="https://workdo.io/product/dash-saas-addon/sales-dash-saas-add-on/"
                                                                            tabIndex={0}
                                                                        >
                                                                            <svg>
                                                                                <use xlinkHref="#eye-outline" />
                                                                            </svg>
                                                                            Preview
                                                                        </a>
                                                                        <a
                                                                            href="javascript:void(0)"
                                                                            tabIndex={0}
                                                                            className="add-cart-btn"
                                                                            data-product-id={2904}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            <svg>
                                                                                <iconify-icon icon="fa-solid:cart-plus"></iconify-icon>
                                                                            </svg>
                                                                            Cart
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="product-content-top">
                                                                <div className="title">
                                                                    <a href="https://workdo.io/product/dash-saas-addon/sales-dash-saas-add-on/">
                                                                        <h4 className="woocommerce-loop-product__title ">
                                                                            Sales – Dash SaaS Add-on
                                                                        </h4>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="star-rating"
                                                                role="img"
                                                                aria-label="Rated 5.00 out of 5"
                                                            >
                                                                <span style={{ width: "100%" }}>

                                                                </span>
                                                            </div>

                                                            <div className="product-content-bottom">
                                                                <div className="product-rating-content">
                                                                    <div className="product-rating">
                                                                        <div className="d-flex">
                                                                            <div id="new-star-rating-container">
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                            </div>
                                                                            (107 Sales)
                                                                        </div>
                                                                    </div>
                                                                    <div className="card-bottom d-flex align-items-center justify-content-between">
                                                                        <div className="price d-flex">
                                                                            <ins>₦35, 000:00</ins>
                                                                        </div>
                                                                        {/* <span class="price"></span> */}
                                                                        <a
                                                                            href="javascript:void(0);"
                                                                            className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart add-cart-btn btn dark-green"
                                                                            data-product-id={2904}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            add to cart
                                                                            <iconify-icon icon="fa-solid:cart-plus" id="add-on-plan-cart-icon"></iconify-icon>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="col-xl-4 col-lg-6 col-sm-6 col-12">
                                                        <div className="product type-product post-2914 status-publish instock product_cat-dash-saas-addon product_cat-customization sale downloadable virtual sold-individually purchasable product-type-simple">
                                                            <div className="feature-img">
                                                                <a href="javascript:void(0)" className="pdp-img" tabIndex={0}>
                                                                    {" "}
                                                                    <img
                                                                        src="https://workdo.io/wp-content/themes/storefront-child/assets/images/themes/main-image/custom-field-dash.png"
                                                                        alt="Custom Field – Dash SaaS Add-on"
                                                                    />
                                                                </a>
                                                                <div className="hoverable-btn">
                                                                    <div
                                                                        className="d-flex justify-content-center gm-preview-event align-items-center"
                                                                        data-product-id={2914}
                                                                        gm-product-name="Custom Field - Dash SaaS Add-on"
                                                                        gm-produt-price={29}
                                                                        gm-product-category="Dash SaaS Addon"
                                                                        position={89}
                                                                    >
                                                                        <a
                                                                            href="https://workdo.io/product/dash-saas-addon/custom-field-dash-saas-add-on/"
                                                                            tabIndex={0}
                                                                        >
                                                                            <svg>
                                                                                <use xlinkHref="#eye-outline" />
                                                                            </svg>
                                                                            Preview
                                                                        </a>
                                                                        <a
                                                                            href="javascript:void(0)"
                                                                            tabIndex={0}
                                                                            className="add-cart-btn"
                                                                            data-product-id={2914}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            <svg>
                                                                                <iconify-icon icon="fa-solid:cart-plus"></iconify-icon>
                                                                            </svg>
                                                                            Cart
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="product-content-top">
                                                                <div className="title">
                                                                    <a href="https://workdo.io/product/dash-saas-addon/custom-field-dash-saas-add-on/">
                                                                        <h4 className="woocommerce-loop-product__title ">
                                                                            Custom Field – Dash SaaS Add-on
                                                                        </h4>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="star-rating"
                                                                role="img"
                                                                aria-label="Rated 5.00 out of 5"
                                                            >
                                                                <span style={{ width: "100%" }}>

                                                                </span>
                                                            </div>

                                                            <div className="product-content-bottom">
                                                                <div className="product-rating-content">
                                                                    <div className="product-rating">
                                                                        <div className="d-flex">
                                                                            <div id="new-star-rating-container">
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                            </div>
                                                                            (93 Sales)
                                                                        </div>
                                                                    </div>
                                                                    <div className="card-bottom d-flex align-items-center justify-content-between">
                                                                        <div className="price d-flex">
                                                                            <ins>₦35, 000:00</ins>
                                                                        </div>
                                                                        {/* <span class="price"></span> */}
                                                                        <a
                                                                            href="javascript:void(0);"
                                                                            className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart add-cart-btn btn dark-green"
                                                                            data-product-id={2914}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            add to cart
                                                                            <iconify-icon icon="fa-solid:cart-plus" id="add-on-plan-cart-icon"></iconify-icon>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="col-xl-4 col-lg-6 col-sm-6 col-12">
                                                        <div className="product type-product post-2925 status-publish instock product_cat-dash-saas-addon product_cat-finance sale downloadable virtual sold-individually purchasable product-type-simple">
                                                            <div className="feature-img">
                                                                <a href="javascript:void(0)" className="pdp-img" tabIndex={0}>
                                                                    {" "}
                                                                    <img
                                                                        src="https://workdo.io/wp-content/themes/storefront-child/assets/images/themes/main-image/contract-dash.png"
                                                                        alt="Contract – Dash SaaS Add-on"
                                                                    />
                                                                </a>
                                                                <div className="hoverable-btn">
                                                                    <div
                                                                        className="d-flex justify-content-center gm-preview-event align-items-center"
                                                                        data-product-id={2925}
                                                                        gm-product-name="Contract - Dash SaaS Add-on"
                                                                        gm-produt-price={29}
                                                                        gm-product-category="Dash SaaS Addon"
                                                                        position={86}
                                                                    >
                                                                        <a
                                                                            href="https://workdo.io/product/dash-saas-addon/contract-dash-saas-add-on/"
                                                                            tabIndex={0}
                                                                        >
                                                                            <svg>
                                                                                <use xlinkHref="#eye-outline" />
                                                                            </svg>
                                                                            Preview
                                                                        </a>
                                                                        <a
                                                                            href="javascript:void(0)"
                                                                            tabIndex={0}
                                                                            className="add-cart-btn"
                                                                            data-product-id={2925}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            <svg>
                                                                                <iconify-icon icon="fa-solid:cart-plus"></iconify-icon>
                                                                            </svg>
                                                                            Cart
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="product-content-top">
                                                                <div className="title">
                                                                    <a href="https://workdo.io/product/dash-saas-addon/contract-dash-saas-add-on/">
                                                                        <h4 className="woocommerce-loop-product__title ">
                                                                            Contract – Dash SaaS Add-on
                                                                        </h4>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="star-rating"
                                                                role="img"
                                                                aria-label="Rated 5.00 out of 5"
                                                            >
                                                                <span style={{ width: "100%" }}>

                                                                </span>
                                                            </div>

                                                            <div className="product-content-bottom">
                                                                <div className="product-rating-content">
                                                                    <div className="product-rating">
                                                                        <div className="d-flex">
                                                                            <div id="new-star-rating-container">
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                            </div>
                                                                            (89 Sales)
                                                                        </div>
                                                                    </div>
                                                                    <div className="card-bottom d-flex align-items-center justify-content-between">
                                                                        <div className="price d-flex">
                                                                            <ins>₦35, 000:00</ins>
                                                                        </div>
                                                                        {/* <span class="price"></span> */}
                                                                        <a
                                                                            href="javascript:void(0);"
                                                                            className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart add-cart-btn btn dark-green"
                                                                            data-product-id={2925}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            add to cart
                                                                            <iconify-icon icon="fa-solid:cart-plus" id="add-on-plan-cart-icon"></iconify-icon>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="col-xl-4 col-lg-6 col-sm-6 col-12">
                                                        <div className="product type-product post-2942 status-publish instock product_cat-dash-saas-addon product_cat-calendar-management sale downloadable virtual sold-individually purchasable product-type-simple">
                                                            <div className="feature-img">
                                                                <a href="javascript:void(0)" className="pdp-img" tabIndex={0}>
                                                                    {" "}
                                                                    <img
                                                                        src="https://workdo.io/wp-content/themes/storefront-child/assets/images/themes/main-image/calendar-dash.png"
                                                                        alt="Calendar – Dash SaaS Add-on"
                                                                    />
                                                                </a>
                                                                <div className="hoverable-btn">
                                                                    <div
                                                                        className="d-flex justify-content-center gm-preview-event align-items-center"
                                                                        data-product-id={2942}
                                                                        gm-product-name="Calendar - Dash SaaS Add-on"
                                                                        gm-produt-price={29}
                                                                        gm-product-category="Dash SaaS Addon"
                                                                        position={80}
                                                                    >
                                                                        <a
                                                                            href="https://workdo.io/product/dash-saas-addon/calendar-dash-saas-add-on/"
                                                                            tabIndex={0}
                                                                        >
                                                                            <svg>
                                                                                <use xlinkHref="#eye-outline" />
                                                                            </svg>
                                                                            Preview
                                                                        </a>
                                                                        <a
                                                                            href="javascript:void(0)"
                                                                            tabIndex={0}
                                                                            className="add-cart-btn"
                                                                            data-product-id={2942}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            <svg>
                                                                                <iconify-icon icon="fa-solid:cart-plus"></iconify-icon>
                                                                            </svg>
                                                                            Cart
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="product-content-top">
                                                                <div className="title">
                                                                    <a href="https://workdo.io/product/dash-saas-addon/calendar-dash-saas-add-on/">
                                                                        <h4 className="woocommerce-loop-product__title ">
                                                                            Calendar – Dash SaaS Add-on
                                                                        </h4>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="star-rating"
                                                                role="img"
                                                                aria-label="Rated 5.00 out of 5"
                                                            >
                                                                <span style={{ width: "100%" }}>

                                                                </span>
                                                            </div>

                                                            <div className="product-content-bottom">
                                                                <div className="product-rating-content">
                                                                    <div className="product-rating">
                                                                        <div className="d-flex">
                                                                            <div id="new-star-rating-container">
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                            </div>
                                                                            (80 Sales)
                                                                        </div>
                                                                    </div>
                                                                    <div className="card-bottom d-flex align-items-center justify-content-between">
                                                                        <div className="price d-flex">
                                                                            <ins>₦35, 000:00</ins>
                                                                        </div>
                                                                        {/* <span class="price"></span> */}
                                                                        <a
                                                                            href="javascript:void(0);"
                                                                            className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart add-cart-btn btn dark-green"
                                                                            data-product-id={2942}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            add to cart
                                                                            <iconify-icon icon="fa-solid:cart-plus" id="add-on-plan-cart-icon"></iconify-icon>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="col-xl-4 col-lg-6 col-sm-6 col-12">
                                                        <div className="product type-product post-2926 status-publish instock product_cat-dash-saas-addon product_cat-customization sale downloadable virtual sold-individually purchasable product-type-simple">
                                                            <div className="feature-img">
                                                                <a href="javascript:void(0)" className="pdp-img" tabIndex={0}>
                                                                    {" "}
                                                                    <img
                                                                        src="https://workdo.io/wp-content/themes/storefront-child/assets/images/themes/main-image/form-builder-dash.png"
                                                                        alt="Form Builder – Dash SaaS Add-on"
                                                                    />
                                                                </a>
                                                                <div className="hoverable-btn">
                                                                    <div
                                                                        className="d-flex justify-content-center gm-preview-event align-items-center"
                                                                        data-product-id={2926}
                                                                        gm-product-name="Form Builder - Dash SaaS Add-on"
                                                                        gm-produt-price={29}
                                                                        gm-product-category="Dash SaaS Addon"
                                                                        position={93}
                                                                    >
                                                                        <a
                                                                            href="https://workdo.io/product/dash-saas-addon/form-builder-dash-saas-add-on/"
                                                                            tabIndex={0}
                                                                        >
                                                                            <svg>
                                                                                <use xlinkHref="#eye-outline" />
                                                                            </svg>
                                                                            Preview
                                                                        </a>
                                                                        <a
                                                                            href="javascript:void(0)"
                                                                            tabIndex={0}
                                                                            className="add-cart-btn"
                                                                            data-product-id={2926}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            <svg>
                                                                                <iconify-icon icon="fa-solid:cart-plus"></iconify-icon>
                                                                            </svg>
                                                                            Cart
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="product-content-top">
                                                                <div className="title">
                                                                    <a href="https://workdo.io/product/dash-saas-addon/form-builder-dash-saas-add-on/">
                                                                        <h4 className="woocommerce-loop-product__title ">
                                                                            Form Builder – Dash SaaS Add-on
                                                                        </h4>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="star-rating"
                                                                role="img"
                                                                aria-label="Rated 5.00 out of 5"
                                                            >
                                                                <span style={{ width: "100%" }}>

                                                                </span>
                                                            </div>

                                                            <div className="product-content-bottom">
                                                                <div className="product-rating-content">
                                                                    <div className="product-rating">
                                                                        <div className="d-flex">
                                                                            <div id="new-star-rating-container">
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                            </div>
                                                                            (77 Sales)
                                                                        </div>
                                                                    </div>
                                                                    <div className="card-bottom d-flex align-items-center justify-content-between">
                                                                        <div className="price d-flex">
                                                                            <ins>₦35, 000:00</ins>
                                                                        </div>
                                                                        {/* <span class="price"></span> */}
                                                                        <a
                                                                            href="javascript:void(0);"
                                                                            className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart add-cart-btn btn dark-green"
                                                                            data-product-id={2926}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            add to cart
                                                                            <iconify-icon icon="fa-solid:cart-plus" id="add-on-plan-cart-icon"></iconify-icon>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="col-xl-4 col-lg-6 col-sm-6 col-12">
                                                        <div className="product type-product post-2910 status-publish instock product_cat-dash-saas-addon product_cat-operation sale downloadable virtual sold-individually purchasable product-type-simple">
                                                            <div className="feature-img">
                                                                <a href="javascript:void(0)" className="pdp-img" tabIndex={0}>
                                                                    {" "}
                                                                    <img
                                                                        src="https://workdo.io/wp-content/themes/storefront-child/assets/images/themes/main-image/support-ticket-dash.png"
                                                                        alt="Support Ticket – Dash SaaS Add-on"
                                                                    />
                                                                </a>
                                                                <div className="hoverable-btn">
                                                                    <div
                                                                        className="d-flex justify-content-center gm-preview-event align-items-center"
                                                                        data-product-id={2910}
                                                                        gm-product-name="Support Ticket - Dash SaaS Add-on"
                                                                        gm-produt-price={29}
                                                                        gm-product-category="Dash SaaS Addon"
                                                                        position={90}
                                                                    >
                                                                        <a
                                                                            href="https://workdo.io/product/dash-saas-addon/support-ticket-dash-saas-add-on/"
                                                                            tabIndex={0}
                                                                        >
                                                                            <svg>
                                                                                <use xlinkHref="#eye-outline" />
                                                                            </svg>
                                                                            Preview
                                                                        </a>
                                                                        <a
                                                                            href="javascript:void(0)"
                                                                            tabIndex={0}
                                                                            className="add-cart-btn"
                                                                            data-product-id={2910}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            <svg>
                                                                                <iconify-icon icon="fa-solid:cart-plus"></iconify-icon>
                                                                            </svg>
                                                                            Cart
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="product-content-top">
                                                                <div className="title">
                                                                    <a href="https://workdo.io/product/dash-saas-addon/support-ticket-dash-saas-add-on/">
                                                                        <h4 className="woocommerce-loop-product__title ">
                                                                            Support Ticket – Dash SaaS Add-on
                                                                        </h4>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="star-rating"
                                                                role="img"
                                                                aria-label="Rated 5.00 out of 5"
                                                            >
                                                                <span style={{ width: "100%" }}>

                                                                </span>
                                                            </div>

                                                            <div className="product-content-bottom">
                                                                <div className="product-rating-content">
                                                                    <div className="product-rating">
                                                                        <div className="d-flex">
                                                                            <div id="new-star-rating-container">
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                            </div>
                                                                            (74 Sales)
                                                                        </div>
                                                                    </div>
                                                                    <div className="card-bottom d-flex align-items-center justify-content-between">
                                                                        <div className="price d-flex">
                                                                            <ins>₦35, 000:00</ins>
                                                                        </div>
                                                                        {/* <span class="price"></span> */}
                                                                        <a
                                                                            href="javascript:void(0);"
                                                                            className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart add-cart-btn btn dark-green"
                                                                            data-product-id={2910}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            add to cart
                                                                            <iconify-icon icon="fa-solid:cart-plus" id="add-on-plan-cart-icon"></iconify-icon>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="col-xl-4 col-lg-6 col-sm-6 col-12">
                                                        <div className="product type-product post-2922 status-publish instock product_cat-dash-saas-addon product_cat-hr sale downloadable virtual sold-individually purchasable product-type-simple">
                                                            <div className="feature-img">
                                                                <a href="javascript:void(0)" className="pdp-img" tabIndex={0}>
                                                                    {" "}
                                                                    <img
                                                                        src="https://workdo.io/wp-content/themes/storefront-child/assets/images/themes/main-image/recruitment-dash.png"
                                                                        alt="Recruitment – Dash SaaS Add-on"
                                                                    />
                                                                </a>
                                                                <div className="hoverable-btn">
                                                                    <div
                                                                        className="d-flex justify-content-center gm-preview-event align-items-center"
                                                                        data-product-id={2922}
                                                                        gm-product-name="Recruitment - Dash SaaS Add-on"
                                                                        gm-produt-price={19}
                                                                        gm-product-category="Dash SaaS Addon"
                                                                        position={92}
                                                                    >
                                                                        <a
                                                                            href="https://workdo.io/product/dash-saas-addon/recruitment-dash-saas-add-on/"
                                                                            tabIndex={0}
                                                                        >
                                                                            <svg>
                                                                                <use xlinkHref="#eye-outline" />
                                                                            </svg>
                                                                            Preview
                                                                        </a>
                                                                        <a
                                                                            href="javascript:void(0)"
                                                                            tabIndex={0}
                                                                            className="add-cart-btn"
                                                                            data-product-id={2922}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            <svg>
                                                                                <iconify-icon icon="fa-solid:cart-plus"></iconify-icon>
                                                                            </svg>
                                                                            Cart
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="product-content-top">
                                                                <div className="title">
                                                                    <a href="https://workdo.io/product/dash-saas-addon/recruitment-dash-saas-add-on/">
                                                                        <h4 className="woocommerce-loop-product__title ">
                                                                            Recruitment – Dash SaaS Add-on
                                                                        </h4>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="star-rating"
                                                                role="img"
                                                                aria-label="Rated 5.00 out of 5"
                                                            >
                                                                <span style={{ width: "100%" }}>

                                                                </span>
                                                            </div>

                                                            <div className="product-content-bottom">
                                                                <div className="product-rating-content">
                                                                    <div className="product-rating">
                                                                        <div className="d-flex">
                                                                            <div id="new-star-rating-container">
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                            </div>
                                                                            (73 Sales)
                                                                        </div>
                                                                    </div>
                                                                    <div className="card-bottom d-flex align-items-center justify-content-between">
                                                                        <div className="price d-flex">
                                                                            <ins>₦25, 000:00</ins>
                                                                        </div>
                                                                        {/* <span class="price"></span> */}
                                                                        <a
                                                                            href="javascript:void(0);"
                                                                            className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart add-cart-btn btn dark-green"
                                                                            data-product-id={2922}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            add to cart
                                                                            <iconify-icon icon="fa-solid:cart-plus" id="add-on-plan-cart-icon"></iconify-icon>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="col-xl-4 col-lg-6 col-sm-6 col-12">
                                                        <div className="product type-product post-2918 status-publish instock product_cat-dash-saas-addon product_cat-finance sale downloadable virtual sold-individually purchasable product-type-simple">
                                                            <div className="feature-img">
                                                                <a href="javascript:void(0)" className="pdp-img" tabIndex={0}>
                                                                    {" "}
                                                                    <img
                                                                        src="https://workdo.io/wp-content/themes/storefront-child/assets/images/themes/main-image/timesheet-dash.png"
                                                                        alt="Timesheet – Dash SaaS Add-on"
                                                                    />
                                                                </a>
                                                                <div className="hoverable-btn">
                                                                    <div
                                                                        className="d-flex justify-content-center gm-preview-event align-items-center"
                                                                        data-product-id={2918}
                                                                        gm-product-name="Timesheet - Dash SaaS Add-on"
                                                                        gm-produt-price={29}
                                                                        gm-product-category="Dash SaaS Addon"
                                                                        position={91}
                                                                    >
                                                                        <a
                                                                            href="https://workdo.io/product/dash-saas-addon/timesheet-dash-saas-add-on/"
                                                                            tabIndex={0}
                                                                        >
                                                                            <svg>
                                                                                <use xlinkHref="#eye-outline" />
                                                                            </svg>
                                                                            Preview
                                                                        </a>
                                                                        <a
                                                                            href="javascript:void(0)"
                                                                            tabIndex={0}
                                                                            className="add-cart-btn"
                                                                            data-product-id={2918}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            <svg>
                                                                                <iconify-icon icon="fa-solid:cart-plus"></iconify-icon>
                                                                            </svg>
                                                                            Cart
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="product-content-top">
                                                                <div className="title">
                                                                    <a href="https://workdo.io/product/dash-saas-addon/timesheet-dash-saas-add-on/">
                                                                        <h4 className="woocommerce-loop-product__title ">
                                                                            Timesheet – Dash SaaS Add-on
                                                                        </h4>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="star-rating"
                                                                role="img"
                                                                aria-label="Rated 5.00 out of 5"
                                                            >
                                                                <span style={{ width: "100%" }}>

                                                                </span>
                                                            </div>

                                                            <div className="product-content-bottom">
                                                                <div className="product-rating-content">
                                                                    <div className="product-rating">
                                                                        <div className="d-flex">
                                                                            <div id="new-star-rating-container">
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                            </div>
                                                                            (71 Sales)
                                                                        </div>
                                                                    </div>
                                                                    <div className="card-bottom d-flex align-items-center justify-content-between">
                                                                        <div className="price d-flex">
                                                                            <ins>₦35, 000:00</ins>
                                                                        </div>
                                                                        {/* <span class="price"></span> */}
                                                                        <a
                                                                            href="javascript:void(0);"
                                                                            className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart add-cart-btn btn dark-green"
                                                                            data-product-id={2918}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            add to cart
                                                                            <iconify-icon icon="fa-solid:cart-plus" id="add-on-plan-cart-icon"></iconify-icon>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="col-xl-4 col-lg-6 col-sm-6 col-12">
                                                        <div className="product type-product post-3061 status-publish last instock product_cat-dash-saas-addon product_cat-ai sale downloadable virtual sold-individually purchasable product-type-simple">
                                                            <div className="feature-img">
                                                                <a href="javascript:void(0)" className="pdp-img" tabIndex={0}>
                                                                    {" "}
                                                                    <img
                                                                        src="https://workdo.io/wp-content/themes/storefront-child/assets/images/themes/main-image/ai-document-dash.png"
                                                                        alt="AI Document – Dash SaaS Add-on"
                                                                    />
                                                                </a>
                                                                <div className="hoverable-btn">
                                                                    <div
                                                                        className="d-flex justify-content-center gm-preview-event align-items-center"
                                                                        data-product-id={3061}
                                                                        gm-product-name="AI Document - Dash SaaS Add-on"
                                                                        gm-produt-price={39}
                                                                        gm-product-category="Dash SaaS Addon"
                                                                        position={88}
                                                                    >
                                                                        <a
                                                                            href="https://workdo.io/product/dash-saas-addon/ai-document-dash-saas-add-on/"
                                                                            tabIndex={0}
                                                                        >
                                                                            <svg>
                                                                                <use xlinkHref="#eye-outline" />
                                                                            </svg>
                                                                            Preview
                                                                        </a>
                                                                        <a
                                                                            href="javascript:void(0)"
                                                                            tabIndex={0}
                                                                            className="add-cart-btn"
                                                                            data-product-id={3061}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            <svg>
                                                                                <iconify-icon icon="fa-solid:cart-plus"></iconify-icon>
                                                                            </svg>
                                                                            Cart
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="product-content-top">
                                                                <div className="title">
                                                                    <a href="https://workdo.io/product/dash-saas-addon/ai-document-dash-saas-add-on/">
                                                                        <h4 className="woocommerce-loop-product__title ">
                                                                            AI Document – Dash SaaS Add-on
                                                                        </h4>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="star-rating"
                                                                role="img"
                                                                aria-label="Rated 5.00 out of 5"
                                                            >
                                                                <span style={{ width: "100%" }}>

                                                                </span>
                                                            </div>

                                                            <div className="product-content-bottom">
                                                                <div className="product-rating-content">
                                                                    <div className="product-rating">
                                                                        <div className="d-flex">
                                                                            <div id="new-star-rating-container">
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                            </div>
                                                                            (71 Sales)
                                                                        </div>
                                                                    </div>
                                                                    <div className="card-bottom d-flex align-items-center justify-content-between">
                                                                        <div className="price d-flex">
                                                                            <ins>₦45, 000:00</ins>
                                                                        </div>
                                                                        {/* <span class="price"></span> */}
                                                                        <a
                                                                            href="javascript:void(0);"
                                                                            className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart add-cart-btn btn dark-green"
                                                                            data-product-id={3061}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            add to cart
                                                                            <iconify-icon icon="fa-solid:cart-plus" id="add-on-plan-cart-icon"></iconify-icon>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="col-xl-4 col-lg-6 col-sm-6 col-12">
                                                        <div className="product type-product post-2924 status-publish first instock product_cat-dash-saas-addon product_cat-finance sale downloadable virtual sold-individually purchasable product-type-simple">
                                                            <div className="feature-img">
                                                                <a href="javascript:void(0)" className="pdp-img" tabIndex={0}>
                                                                    {" "}
                                                                    <img
                                                                        src="https://workdo.io/wp-content/themes/storefront-child/assets/images/themes/main-image/assets-dash.png"
                                                                        alt="Assets – Dash SaaS Add-on"
                                                                    />
                                                                </a>
                                                                <div className="hoverable-btn">
                                                                    <div
                                                                        className="d-flex justify-content-center gm-preview-event align-items-center"
                                                                        data-product-id={2924}
                                                                        gm-product-name="Assets - Dash SaaS Add-on"
                                                                        gm-produt-price={29}
                                                                        gm-product-category="Dash SaaS Addon"
                                                                        position={95}
                                                                    >
                                                                        <a
                                                                            href="https://workdo.io/product/dash-saas-addon/assets-dash-saas-add-on/"
                                                                            tabIndex={0}
                                                                        >
                                                                            <svg>
                                                                                <use xlinkHref="#eye-outline" />
                                                                            </svg>
                                                                            Preview
                                                                        </a>
                                                                        <a
                                                                            href="javascript:void(0)"
                                                                            tabIndex={0}
                                                                            className="add-cart-btn"
                                                                            data-product-id={2924}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            <svg>
                                                                                <iconify-icon icon="fa-solid:cart-plus"></iconify-icon>
                                                                            </svg>
                                                                            Cart
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="product-content-top">
                                                                <div className="title">
                                                                    <a href="https://workdo.io/product/dash-saas-addon/assets-dash-saas-add-on/">
                                                                        <h4 className="woocommerce-loop-product__title ">
                                                                            Assets – Dash SaaS Add-on
                                                                        </h4>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="star-rating"
                                                                role="img"
                                                                aria-label="Rated 5.00 out of 5"
                                                            >
                                                                <span style={{ width: "100%" }}>

                                                                </span>
                                                            </div>

                                                            <div className="product-content-bottom">
                                                                <div className="product-rating-content">
                                                                    <div className="product-rating">
                                                                        <div className="d-flex">
                                                                            <div id="new-star-rating-container">
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                            </div>
                                                                            (68 Sales)
                                                                        </div>
                                                                    </div>
                                                                    <div className="card-bottom d-flex align-items-center justify-content-between">
                                                                        <div className="price d-flex">
                                                                            <ins>₦35, 000:00</ins>
                                                                        </div>
                                                                        {/* <span class="price"></span> */}
                                                                        <a
                                                                            href="javascript:void(0);"
                                                                            className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart add-cart-btn btn dark-green"
                                                                            data-product-id={2924}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            add to cart
                                                                            <iconify-icon icon="fa-solid:cart-plus" id="add-on-plan-cart-icon"></iconify-icon>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="col-xl-4 col-lg-6 col-sm-6 col-12">
                                                        <div className="product type-product post-2928 status-publish instock product_cat-dash-saas-addon product_cat-communication sale downloadable virtual sold-individually purchasable product-type-simple">
                                                            <div className="feature-img">
                                                                <a href="javascript:void(0)" className="pdp-img" tabIndex={0}>
                                                                    {" "}
                                                                    <img
                                                                        src="https://workdo.io/wp-content/themes/storefront-child/assets/images/themes/main-image/zoom-meeting-dash.png"
                                                                        alt="Zoom Meeting – Dash SaaS Add-on"
                                                                    />
                                                                </a>
                                                                <div className="hoverable-btn">
                                                                    <div
                                                                        className="d-flex justify-content-center gm-preview-event align-items-center"
                                                                        data-product-id={2928}
                                                                        gm-product-name="Zoom Meeting - Dash SaaS Add-on"
                                                                        gm-produt-price={19}
                                                                        gm-product-category="Dash SaaS Addon"
                                                                        position={99}
                                                                    >
                                                                        <a
                                                                            href="https://workdo.io/product/dash-saas-addon/zoom-meeting-dash-saas-add-on/"
                                                                            tabIndex={0}
                                                                        >
                                                                            <svg>
                                                                                <use xlinkHref="#eye-outline" />
                                                                            </svg>
                                                                            Preview
                                                                        </a>
                                                                        <a
                                                                            href="javascript:void(0)"
                                                                            tabIndex={0}
                                                                            className="add-cart-btn"
                                                                            data-product-id={2928}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            <svg>
                                                                                <iconify-icon icon="fa-solid:cart-plus"></iconify-icon>
                                                                            </svg>
                                                                            Cart
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="product-content-top">
                                                                <div className="title">
                                                                    <a href="https://workdo.io/product/dash-saas-addon/zoom-meeting-dash-saas-add-on/">
                                                                        <h4 className="woocommerce-loop-product__title ">
                                                                            Zoom Meeting – Dash SaaS Add-on
                                                                        </h4>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="star-rating"
                                                                role="img"
                                                                aria-label="Rated 5.00 out of 5"
                                                            >
                                                                <span style={{ width: "100%" }}>

                                                                </span>
                                                            </div>

                                                            <div className="product-content-bottom">
                                                                <div className="product-rating-content">
                                                                    <div className="product-rating">
                                                                        <div className="d-flex">
                                                                            <div id="new-star-rating-container">
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                            </div>
                                                                            (66 Sales)
                                                                        </div>
                                                                    </div>
                                                                    <div className="card-bottom d-flex align-items-center justify-content-between">
                                                                        <div className="price d-flex">
                                                                            <ins>₦25, 000:00</ins>
                                                                        </div>
                                                                        {/* <span class="price"></span> */}
                                                                        <a
                                                                            href="javascript:void(0);"
                                                                            className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart add-cart-btn btn dark-green"
                                                                            data-product-id={2928}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            add to cart
                                                                            <iconify-icon icon="fa-solid:cart-plus" id="add-on-plan-cart-icon"></iconify-icon>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="col-xl-4 col-lg-6 col-sm-6 col-12">
                                                        <div className="product type-product post-2929 status-publish instock product_cat-dash-saas-addon product_cat-mobility sale downloadable virtual sold-individually purchasable product-type-simple">
                                                            <div className="feature-img">
                                                                <a href="javascript:void(0)" className="pdp-img" tabIndex={0}>
                                                                    {" "}
                                                                    <img
                                                                        src="https://workdo.io/wp-content/themes/storefront-child/assets/images/themes/main-image/notes-dash.png"
                                                                        alt="Notes – Dash SaaS Add-on"
                                                                    />
                                                                </a>
                                                                <div className="hoverable-btn">
                                                                    <div
                                                                        className="d-flex justify-content-center gm-preview-event align-items-center"
                                                                        data-product-id={2929}
                                                                        gm-product-name="Notes - Dash SaaS Add-on"
                                                                        gm-produt-price={19}
                                                                        gm-product-category="Dash SaaS Addon"
                                                                        position={87}
                                                                    >
                                                                        <a
                                                                            href="https://workdo.io/product/dash-saas-addon/notes-dash-saas-add-on/"
                                                                            tabIndex={0}
                                                                        >
                                                                            <svg>
                                                                                <use xlinkHref="#eye-outline" />
                                                                            </svg>
                                                                            Preview
                                                                        </a>
                                                                        <a
                                                                            href="javascript:void(0)"
                                                                            tabIndex={0}
                                                                            className="add-cart-btn"
                                                                            data-product-id={2929}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            <svg>
                                                                                <iconify-icon icon="fa-solid:cart-plus"></iconify-icon>
                                                                            </svg>
                                                                            Cart
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="product-content-top">
                                                                <div className="title">
                                                                    <a href="https://workdo.io/product/dash-saas-addon/notes-dash-saas-add-on/">
                                                                        <h4 className="woocommerce-loop-product__title ">
                                                                            Notes – Dash SaaS Add-on
                                                                        </h4>
                                                                    </a>
                                                                </div>
                                                            </div>

                                                            <div className="product-content-bottom">
                                                                <div className="product-rating-content">
                                                                    <div className="product-rating">
                                                                        <div className="d-flex">
                                                                            <div id="new-star-rating-container">
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                            </div>
                                                                            (66 Sales)
                                                                        </div>
                                                                    </div>
                                                                    <div className="card-bottom d-flex align-items-center justify-content-between">
                                                                        <div className="price d-flex">
                                                                            <ins>₦25, 000:00</ins>
                                                                        </div>
                                                                        {/* <span class="price"></span> */}
                                                                        <a
                                                                            href="javascript:void(0);"
                                                                            className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart add-cart-btn btn dark-green"
                                                                            data-product-id={2929}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            add to cart
                                                                            <iconify-icon icon="fa-solid:cart-plus" id="add-on-plan-cart-icon"></iconify-icon>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="col-xl-4 col-lg-6 col-sm-6 col-12">
                                                        <div className="product type-product post-4803 status-publish instock product_cat-dash-saas-addon product_cat-finance sale downloadable virtual sold-individually purchasable product-type-simple">
                                                            <div className="feature-img">
                                                                <a href="javascript:void(0)" className="pdp-img" tabIndex={0}>
                                                                    {" "}
                                                                    <img
                                                                        src="https://workdo.io/wp-content/themes/storefront-child/assets/images/themes/main-image/double-entry-dash.png"
                                                                        alt="Double Entry – Dash SaaS Add-on"
                                                                    />
                                                                </a>
                                                                <div className="hoverable-btn">
                                                                    <div
                                                                        className="d-flex justify-content-center gm-preview-event align-items-center"
                                                                        data-product-id={4803}
                                                                        gm-product-name="Double Entry - Dash SaaS Add-on"
                                                                        gm-produt-price={19}
                                                                        gm-product-category="Dash SaaS Addon"
                                                                        position={160}
                                                                    >
                                                                        <a
                                                                            href="https://workdo.io/product/dash-saas-addon/double-entry-dash-saas-add-on/"
                                                                            tabIndex={0}
                                                                        >
                                                                            <svg>
                                                                                <use xlinkHref="#eye-outline" />
                                                                            </svg>
                                                                            Preview
                                                                        </a>
                                                                        <a
                                                                            href="javascript:void(0)"
                                                                            tabIndex={0}
                                                                            className="add-cart-btn"
                                                                            data-product-id={4803}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            <svg>
                                                                                <iconify-icon icon="fa-solid:cart-plus"></iconify-icon>
                                                                            </svg>
                                                                            Cart
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="product-content-top">
                                                                <div className="title">
                                                                    <a href="https://workdo.io/product/dash-saas-addon/double-entry-dash-saas-add-on/">
                                                                        <h4 className="woocommerce-loop-product__title ">
                                                                            Double Entry – Dash SaaS Add-on
                                                                        </h4>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="star-rating"
                                                                role="img"
                                                                aria-label="Rated 5.00 out of 5"
                                                            >
                                                                <span style={{ width: "100%" }}>

                                                                </span>
                                                            </div>

                                                            <div className="product-content-bottom">
                                                                <div className="product-rating-content">
                                                                    <div className="product-rating">
                                                                        <div className="d-flex">
                                                                            <div id="new-star-rating-container">
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                            </div>
                                                                            (65 Sales)
                                                                        </div>
                                                                    </div>
                                                                    <div className="card-bottom d-flex align-items-center justify-content-between">
                                                                        <div className="price d-flex">
                                                                            <ins>₦25, 000:00</ins>
                                                                        </div>
                                                                        {/* <span class="price"></span> */}
                                                                        <a
                                                                            href="javascript:void(0);"
                                                                            className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart add-cart-btn btn dark-green"
                                                                            data-product-id={4803}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            add to cart
                                                                            <iconify-icon icon="fa-solid:cart-plus" id="add-on-plan-cart-icon"></iconify-icon>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="col-xl-4 col-lg-6 col-sm-6 col-12">
                                                        <div className="product type-product post-2912 status-publish instock product_cat-dash-saas-addon product_cat-operation sale downloadable virtual sold-individually purchasable product-type-simple">
                                                            <div className="feature-img">
                                                                <a href="javascript:void(0)" className="pdp-img" tabIndex={0}>
                                                                    {" "}
                                                                    <img
                                                                        src="https://workdo.io/wp-content/themes/storefront-child/assets/images/themes/main-image/rotas-dash.png"
                                                                        alt="Rotas – Dash SaaS Add-on"
                                                                    />
                                                                </a>
                                                                <div className="hoverable-btn">
                                                                    <div
                                                                        className="d-flex justify-content-center gm-preview-event align-items-center"
                                                                        data-product-id={2912}
                                                                        gm-product-name="Rotas - Dash SaaS Add-on"
                                                                        gm-produt-price={19}
                                                                        gm-product-category="Dash SaaS Addon"
                                                                        position={97}
                                                                    >
                                                                        <a
                                                                            href="https://workdo.io/product/dash-saas-addon/rotas-dash-saas-add-on/"
                                                                            tabIndex={0}
                                                                        >
                                                                            <svg>
                                                                                <use xlinkHref="#eye-outline" />
                                                                            </svg>
                                                                            Preview
                                                                        </a>
                                                                        <a
                                                                            href="javascript:void(0)"
                                                                            tabIndex={0}
                                                                            className="add-cart-btn"
                                                                            data-product-id={2912}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            <svg>
                                                                                <iconify-icon icon="fa-solid:cart-plus"></iconify-icon>
                                                                            </svg>
                                                                            Cart
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="product-content-top">
                                                                <div className="title">
                                                                    <a href="https://workdo.io/product/dash-saas-addon/rotas-dash-saas-add-on/">
                                                                        <h4 className="woocommerce-loop-product__title ">
                                                                            Rotas – Dash SaaS Add-on
                                                                        </h4>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="star-rating"
                                                                role="img"
                                                                aria-label="Rated 5.00 out of 5"
                                                            >
                                                                <span style={{ width: "100%" }}>

                                                                </span>
                                                            </div>

                                                            <div className="product-content-bottom">
                                                                <div className="product-rating-content">
                                                                    <div className="product-rating">
                                                                        <div className="d-flex">
                                                                            <div id="new-star-rating-container">
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                            </div>
                                                                            (65 Sales)
                                                                        </div>
                                                                    </div>
                                                                    <div className="card-bottom d-flex align-items-center justify-content-between">
                                                                        <div className="price d-flex">
                                                                            <ins>₦25, 000:00</ins>
                                                                        </div>
                                                                        {/* <span class="price"></span> */}
                                                                        <a
                                                                            href="javascript:void(0);"
                                                                            className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart add-cart-btn btn dark-green"
                                                                            data-product-id={2912}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            add to cart
                                                                            <iconify-icon icon="fa-solid:cart-plus" id="add-on-plan-cart-icon"></iconify-icon>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="col-xl-4 col-lg-6 col-sm-6 col-12">
                                                        <div className="product type-product post-4354 status-publish instock product_cat-dash-saas-addon product_cat-customization sale downloadable virtual sold-individually purchasable product-type-simple">
                                                            <div className="feature-img">
                                                                <a href="javascript:void(0)" className="pdp-img" tabIndex={0}>
                                                                    {" "}
                                                                    <img
                                                                        src="https://workdo.io/wp-content/themes/storefront-child/assets/images/themes/main-image/side-menu-builder-dash.png"
                                                                        alt="Side Menu Builder – Dash SaaS Add-on"
                                                                    />
                                                                </a>
                                                                <div className="hoverable-btn">
                                                                    <div
                                                                        className="d-flex justify-content-center gm-preview-event align-items-center"
                                                                        data-product-id={4354}
                                                                        gm-product-name="Side Menu Builder - Dash SaaS Add-on"
                                                                        gm-produt-price={9}
                                                                        gm-product-category="Dash SaaS Addon"
                                                                        position={127}
                                                                    >
                                                                        <a
                                                                            href="https://workdo.io/product/dash-saas-addon/side-menu-builder-dash-saas-add-on/"
                                                                            tabIndex={0}
                                                                        >
                                                                            <svg>
                                                                                <use xlinkHref="#eye-outline" />
                                                                            </svg>
                                                                            Preview
                                                                        </a>
                                                                        <a
                                                                            href="javascript:void(0)"
                                                                            tabIndex={0}
                                                                            className="add-cart-btn"
                                                                            data-product-id={4354}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            <svg>
                                                                                <iconify-icon icon="fa-solid:cart-plus"></iconify-icon>
                                                                            </svg>
                                                                            Cart
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="product-content-top">
                                                                <div className="title">
                                                                    <a href="https://workdo.io/product/dash-saas-addon/side-menu-builder-dash-saas-add-on/">
                                                                        <h4 className="woocommerce-loop-product__title ">
                                                                            Side Menu Builder – Dash SaaS Add-on
                                                                        </h4>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="star-rating"
                                                                role="img"
                                                                aria-label="Rated 5.00 out of 5"
                                                            >
                                                                <span style={{ width: "100%" }}>

                                                                </span>
                                                            </div>

                                                            <div className="product-content-bottom">
                                                                <div className="product-rating-content">
                                                                    <div className="product-rating">
                                                                        <div className="d-flex">
                                                                            <div id="new-star-rating-container">
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                            </div>
                                                                            (61 Sales)
                                                                        </div>
                                                                    </div>
                                                                    <div className="card-bottom d-flex align-items-center justify-content-between">
                                                                        <div className="price d-flex">
                                                                            <ins>$9</ins>
                                                                        </div>
                                                                        {/* <span class="price"></span> */}
                                                                        <a
                                                                            href="javascript:void(0);"
                                                                            className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart add-cart-btn btn dark-green"
                                                                            data-product-id={4354}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            add to cart
                                                                            <iconify-icon icon="fa-solid:cart-plus" id="add-on-plan-cart-icon"></iconify-icon>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="col-xl-4 col-lg-6 col-sm-6 col-12">
                                                        <div className="product type-product post-2915 status-publish instock product_cat-dash-saas-addon product_cat-finance sale downloadable virtual sold-individually purchasable product-type-simple">
                                                            <div className="feature-img">
                                                                <a href="javascript:void(0)" className="pdp-img" tabIndex={0}>
                                                                    {" "}
                                                                    <img
                                                                        src="https://workdo.io/wp-content/themes/storefront-child/assets/images/themes/main-image/financial-goal-dash.png"
                                                                        alt="Financial Goal – Dash SaaS Add-on"
                                                                    />
                                                                </a>
                                                                <div className="hoverable-btn">
                                                                    <div
                                                                        className="d-flex justify-content-center gm-preview-event align-items-center"
                                                                        data-product-id={2915}
                                                                        gm-product-name="Financial Goal - Dash SaaS Add-on"
                                                                        gm-produt-price={15}
                                                                        gm-product-category="Dash SaaS Addon"
                                                                        position={98}
                                                                    >
                                                                        <a
                                                                            href="https://workdo.io/product/dash-saas-addon/financial-goal-dash-saas-add-on/"
                                                                            tabIndex={0}
                                                                        >
                                                                            <svg>
                                                                                <use xlinkHref="#eye-outline" />
                                                                            </svg>
                                                                            Preview
                                                                        </a>
                                                                        <a
                                                                            href="javascript:void(0)"
                                                                            tabIndex={0}
                                                                            className="add-cart-btn"
                                                                            data-product-id={2915}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            <svg>
                                                                                <iconify-icon icon="fa-solid:cart-plus"></iconify-icon>
                                                                            </svg>
                                                                            Cart
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="product-content-top">
                                                                <div className="title">
                                                                    <a href="https://workdo.io/product/dash-saas-addon/financial-goal-dash-saas-add-on/">
                                                                        <h4 className="woocommerce-loop-product__title ">
                                                                            Financial Goal – Dash SaaS Add-on
                                                                        </h4>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="star-rating"
                                                                role="img"
                                                                aria-label="Rated 5.00 out of 5"
                                                            >
                                                                <span style={{ width: "100%" }}>

                                                                </span>
                                                            </div>

                                                            <div className="product-content-bottom">
                                                                <div className="product-rating-content">
                                                                    <div className="product-rating">
                                                                        <div className="d-flex">
                                                                            <div id="new-star-rating-container">
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                            </div>
                                                                            (60 Sales)
                                                                        </div>
                                                                    </div>
                                                                    <div className="card-bottom d-flex align-items-center justify-content-between">
                                                                        <div className="price d-flex">
                                                                            <ins>$15</ins>
                                                                        </div>
                                                                        {/* <span class="price"></span> */}
                                                                        <a
                                                                            href="javascript:void(0);"
                                                                            className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart add-cart-btn btn dark-green"
                                                                            data-product-id={2915}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            add to cart
                                                                            <iconify-icon icon="fa-solid:cart-plus" id="add-on-plan-cart-icon"></iconify-icon>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="col-xl-4 col-lg-6 col-sm-6 col-12">
                                                        <div className="product type-product post-2919 status-publish instock product_cat-dash-saas-addon product_cat-hr sale downloadable virtual sold-individually purchasable product-type-simple">
                                                            <div className="feature-img">
                                                                <a href="javascript:void(0)" className="pdp-img" tabIndex={0}>
                                                                    {" "}
                                                                    <img
                                                                        src="https://workdo.io/wp-content/themes/storefront-child/assets/images/themes/main-image/performance-dash.png"
                                                                        alt="Performance – Dash SaaS Add-on"
                                                                    />
                                                                </a>
                                                                <div className="hoverable-btn">
                                                                    <div
                                                                        className="d-flex justify-content-center gm-preview-event align-items-center"
                                                                        data-product-id={2919}
                                                                        gm-product-name="Performance - Dash SaaS Add-on"
                                                                        gm-produt-price={19}
                                                                        gm-product-category="Dash SaaS Addon"
                                                                        position={100}
                                                                    >
                                                                        <a
                                                                            href="https://workdo.io/product/dash-saas-addon/performance-dash-saas-add-on/"
                                                                            tabIndex={0}
                                                                        >
                                                                            <svg>
                                                                                <use xlinkHref="#eye-outline" />
                                                                            </svg>
                                                                            Preview
                                                                        </a>
                                                                        <a
                                                                            href="javascript:void(0)"
                                                                            tabIndex={0}
                                                                            className="add-cart-btn"
                                                                            data-product-id={2919}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            <svg>
                                                                                <iconify-icon icon="fa-solid:cart-plus"></iconify-icon>
                                                                            </svg>
                                                                            Cart
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="product-content-top">
                                                                <div className="title">
                                                                    <a href="https://workdo.io/product/dash-saas-addon/performance-dash-saas-add-on/">
                                                                        <h4 className="woocommerce-loop-product__title ">
                                                                            Performance – Dash SaaS Add-on
                                                                        </h4>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="star-rating"
                                                                role="img"
                                                                aria-label="Rated 5.00 out of 5"
                                                            >
                                                                <span style={{ width: "100%" }}>

                                                                </span>
                                                            </div>

                                                            <div className="product-content-bottom">
                                                                <div className="product-rating-content">
                                                                    <div className="product-rating">
                                                                        <div className="d-flex">
                                                                            <div id="new-star-rating-container">
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                            </div>
                                                                            (59 Sales)
                                                                        </div>
                                                                    </div>
                                                                    <div className="card-bottom d-flex align-items-center justify-content-between">
                                                                        <div className="price d-flex">
                                                                            <ins>₦25, 000:00</ins>
                                                                        </div>
                                                                        {/* <span class="price"></span> */}
                                                                        <a
                                                                            href="javascript:void(0);"
                                                                            className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart add-cart-btn btn dark-green"
                                                                            data-product-id={2919}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            add to cart
                                                                            <iconify-icon icon="fa-solid:cart-plus" id="add-on-plan-cart-icon"></iconify-icon>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="col-xl-4 col-lg-6 col-sm-6 col-12">
                                                        <div className="product type-product post-3672 status-publish last instock product_cat-dash-saas-addon product_cat-customization sale downloadable virtual sold-individually purchasable product-type-simple">
                                                            <div className="feature-img">
                                                                <a href="javascript:void(0)" className="pdp-img" tabIndex={0}>
                                                                    {" "}
                                                                    <img
                                                                        src="https://workdo.io/wp-content/themes/storefront-child/assets/images/themes/main-image/workflow-dash.png"
                                                                        alt="Workflow Automation – Dash SaaS Add-on"
                                                                    />
                                                                </a>
                                                                <div className="hoverable-btn">
                                                                    <div
                                                                        className="d-flex justify-content-center gm-preview-event align-items-center"
                                                                        data-product-id={3672}
                                                                        gm-product-name="Workflow Automation - Dash SaaS Add-on"
                                                                        gm-produt-price={29}
                                                                        gm-product-category="Dash SaaS Addon"
                                                                        position={120}
                                                                    >
                                                                        <a
                                                                            href="https://workdo.io/product/dash-saas-addon/workflow-automation-dash-saas-add-on/"
                                                                            tabIndex={0}
                                                                        >
                                                                            <svg>
                                                                                <use xlinkHref="#eye-outline" />
                                                                            </svg>
                                                                            Preview
                                                                        </a>
                                                                        <a
                                                                            href="javascript:void(0)"
                                                                            tabIndex={0}
                                                                            className="add-cart-btn"
                                                                            data-product-id={3672}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            <svg>
                                                                                <iconify-icon icon="fa-solid:cart-plus"></iconify-icon>
                                                                            </svg>
                                                                            Cart
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="product-content-top">
                                                                <div className="title">
                                                                    <a href="https://workdo.io/product/dash-saas-addon/workflow-automation-dash-saas-add-on/">
                                                                        <h4 className="woocommerce-loop-product__title ">
                                                                            Workflow Automation – Dash SaaS Add-on
                                                                        </h4>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="star-rating"
                                                                role="img"
                                                                aria-label="Rated 5.00 out of 5"
                                                            >
                                                                <span style={{ width: "100%" }}>

                                                                </span>
                                                            </div>

                                                            <div className="product-content-bottom">
                                                                <div className="product-rating-content">
                                                                    <div className="product-rating">
                                                                        <div className="d-flex">
                                                                            <div id="new-star-rating-container">
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                            </div>
                                                                            (58 Sales)
                                                                        </div>
                                                                    </div>
                                                                    <div className="card-bottom d-flex align-items-center justify-content-between">
                                                                        <div className="price d-flex">
                                                                            <ins>₦35, 000:00</ins>
                                                                        </div>
                                                                        {/* <span class="price"></span> */}
                                                                        <a
                                                                            href="javascript:void(0);"
                                                                            className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart add-cart-btn btn dark-green"
                                                                            data-product-id={3672}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            add to cart
                                                                            <iconify-icon icon="fa-solid:cart-plus" id="add-on-plan-cart-icon"></iconify-icon>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="col-xl-4 col-lg-6 col-sm-6 col-12">
                                                        <div className="product type-product post-3185 status-publish first instock product_cat-dash-saas-addon product_cat-integration sale downloadable virtual sold-individually purchasable product-type-simple">
                                                            <div className="feature-img">
                                                                <a href="javascript:void(0)" className="pdp-img" tabIndex={0}>
                                                                    {" "}
                                                                    <img
                                                                        src="https://workdo.io/wp-content/themes/storefront-child/assets/images/themes/main-image/webhook-dash.png"
                                                                        alt="Webhook – Dash SaaS Add-on"
                                                                    />
                                                                </a>
                                                                <div className="hoverable-btn">
                                                                    <div
                                                                        className="d-flex justify-content-center gm-preview-event align-items-center"
                                                                        data-product-id={3185}
                                                                        gm-product-name="Webhook - Dash SaaS Add-on"
                                                                        gm-produt-price={39}
                                                                        gm-product-category="Dash SaaS Addon"
                                                                        position={94}
                                                                    >
                                                                        <a
                                                                            href="https://workdo.io/product/dash-saas-addon/webhook-dash-saas-add-on/"
                                                                            tabIndex={0}
                                                                        >
                                                                            <svg>
                                                                                <use xlinkHref="#eye-outline" />
                                                                            </svg>
                                                                            Preview
                                                                        </a>
                                                                        <a
                                                                            href="javascript:void(0)"
                                                                            tabIndex={0}
                                                                            className="add-cart-btn"
                                                                            data-product-id={3185}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            <svg>
                                                                                <iconify-icon icon="fa-solid:cart-plus"></iconify-icon>
                                                                            </svg>
                                                                            Cart
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="product-content-top">
                                                                <div className="title">
                                                                    <a href="https://workdo.io/product/dash-saas-addon/webhook-dash-saas-add-on/">
                                                                        <h4 className="woocommerce-loop-product__title ">
                                                                            Webhook – Dash SaaS Add-on
                                                                        </h4>
                                                                    </a>
                                                                </div>
                                                            </div>

                                                            <div className="product-content-bottom">
                                                                <div className="product-rating-content">
                                                                    <div className="product-rating">
                                                                        <div className="d-flex">
                                                                            <div id="new-star-rating-container">
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                            </div>
                                                                            (57 Sales)
                                                                        </div>
                                                                    </div>
                                                                    <div className="card-bottom d-flex align-items-center justify-content-between">
                                                                        <div className="price d-flex">
                                                                            <ins>₦45, 000:00</ins>
                                                                        </div>
                                                                        {/* <span class="price"></span> */}
                                                                        <a
                                                                            href="javascript:void(0);"
                                                                            className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart add-cart-btn btn dark-green"
                                                                            data-product-id={3185}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            add to cart
                                                                            <iconify-icon icon="fa-solid:cart-plus" id="add-on-plan-cart-icon"></iconify-icon>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="col-xl-4 col-lg-6 col-sm-6 col-12">
                                                        <div className="product type-product post-3776 status-publish instock product_cat-dash-saas-addon product_cat-e-commerces sale downloadable virtual sold-individually purchasable product-type-simple">
                                                            <div className="feature-img">
                                                                <a href="javascript:void(0)" className="pdp-img" tabIndex={0}>
                                                                    {" "}
                                                                    <img
                                                                        src="https://workdo.io/wp-content/themes/storefront-child/assets/images/themes/main-image/inventory-dash.png"
                                                                        alt="Inventory – Dash SaaS Add-on"
                                                                    />
                                                                </a>
                                                                <div className="hoverable-btn">
                                                                    <div
                                                                        className="d-flex justify-content-center gm-preview-event align-items-center"
                                                                        data-product-id={3776}
                                                                        gm-product-name="Inventory - Dash SaaS Add-on"
                                                                        gm-produt-price={19}
                                                                        gm-product-category="Dash SaaS Addon"
                                                                        position={128}
                                                                    >
                                                                        <a
                                                                            href="https://workdo.io/product/dash-saas-addon/inventory-dash-saas-add-on/"
                                                                            tabIndex={0}
                                                                        >
                                                                            <svg>
                                                                                <use xlinkHref="#eye-outline" />
                                                                            </svg>
                                                                            Preview
                                                                        </a>
                                                                        <a
                                                                            href="javascript:void(0)"
                                                                            tabIndex={0}
                                                                            className="add-cart-btn"
                                                                            data-product-id={3776}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            <svg>
                                                                                <iconify-icon icon="fa-solid:cart-plus"></iconify-icon>
                                                                            </svg>
                                                                            Cart
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="product-content-top">
                                                                <div className="title">
                                                                    <a href="https://workdo.io/product/dash-saas-addon/inventory-dash-saas-add-on/">
                                                                        <h4 className="woocommerce-loop-product__title ">
                                                                            Inventory – Dash SaaS Add-on
                                                                        </h4>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="star-rating"
                                                                role="img"
                                                                aria-label="Rated 5.00 out of 5"
                                                            >
                                                                <span style={{ width: "100%" }}>

                                                                </span>
                                                            </div>

                                                            <div className="product-content-bottom">
                                                                <div className="product-rating-content">
                                                                    <div className="product-rating">
                                                                        <div className="d-flex">
                                                                            <div id="new-star-rating-container">
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                            </div>
                                                                            (56 Sales)
                                                                        </div>
                                                                    </div>
                                                                    <div className="card-bottom d-flex align-items-center justify-content-between">
                                                                        <div className="price d-flex">
                                                                            <ins>₦25, 000:00</ins>
                                                                        </div>
                                                                        {/* <span class="price"></span> */}
                                                                        <a
                                                                            href="javascript:void(0);"
                                                                            className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart add-cart-btn btn dark-green"
                                                                            data-product-id={3776}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            add to cart
                                                                            <iconify-icon icon="fa-solid:cart-plus" id="add-on-plan-cart-icon"></iconify-icon>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="col-xl-4 col-lg-6 col-sm-6 col-12">
                                                        <div className="product type-product post-2921 status-publish instock product_cat-dash-saas-addon product_cat-hr sale downloadable virtual sold-individually purchasable product-type-simple">
                                                            <div className="feature-img">
                                                                <a href="javascript:void(0)" className="pdp-img" tabIndex={0}>
                                                                    {" "}
                                                                    <img
                                                                        src="https://workdo.io/wp-content/themes/storefront-child/assets/images/themes/main-image/training-dash.png"
                                                                        alt="Training – Dash SaaS Add-on"
                                                                    />
                                                                </a>
                                                                <div className="hoverable-btn">
                                                                    <div
                                                                        className="d-flex justify-content-center gm-preview-event align-items-center"
                                                                        data-product-id={2921}
                                                                        gm-product-name="Training - Dash SaaS Add-on"
                                                                        gm-produt-price={19}
                                                                        gm-product-category="Dash SaaS Addon"
                                                                        position={101}
                                                                    >
                                                                        <a
                                                                            href="https://workdo.io/product/dash-saas-addon/training-dash-saas-add-on/"
                                                                            tabIndex={0}
                                                                        >
                                                                            <svg>
                                                                                <use xlinkHref="#eye-outline" />
                                                                            </svg>
                                                                            Preview
                                                                        </a>
                                                                        <a
                                                                            href="javascript:void(0)"
                                                                            tabIndex={0}
                                                                            className="add-cart-btn"
                                                                            data-product-id={2921}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            <svg>
                                                                                <iconify-icon icon="fa-solid:cart-plus"></iconify-icon>
                                                                            </svg>
                                                                            Cart
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="product-content-top">
                                                                <div className="title">
                                                                    <a href="https://workdo.io/product/dash-saas-addon/training-dash-saas-add-on/">
                                                                        <h4 className="woocommerce-loop-product__title ">
                                                                            Training – Dash SaaS Add-on
                                                                        </h4>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="star-rating"
                                                                role="img"
                                                                aria-label="Rated 5.00 out of 5"
                                                            >
                                                                <span style={{ width: "100%" }}>

                                                                </span>
                                                            </div>

                                                            <div className="product-content-bottom">
                                                                <div className="product-rating-content">
                                                                    <div className="product-rating">
                                                                        <div className="d-flex">
                                                                            <div id="new-star-rating-container">
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                            </div>
                                                                            (56 Sales)
                                                                        </div>
                                                                    </div>
                                                                    <div className="card-bottom d-flex align-items-center justify-content-between">
                                                                        <div className="price d-flex">
                                                                            <ins>₦25, 000:00</ins>
                                                                        </div>
                                                                        {/* <span class="price"></span> */}
                                                                        <a
                                                                            href="javascript:void(0);"
                                                                            className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart add-cart-btn btn dark-green"
                                                                            data-product-id={2921}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            add to cart
                                                                            <iconify-icon icon="fa-solid:cart-plus" id="add-on-plan-cart-icon"></iconify-icon>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="col-xl-4 col-lg-6 col-sm-6 col-12">
                                                        <div className="product type-product post-3177 status-publish instock product_cat-dash-saas-addon product_cat-ai sale downloadable virtual sold-individually purchasable product-type-simple">
                                                            <div className="feature-img">
                                                                <a href="javascript:void(0)" className="pdp-img" tabIndex={0}>
                                                                    {" "}
                                                                    <img
                                                                        src="https://workdo.io/wp-content/themes/storefront-child/assets/images/themes/main-image/ai-assistant-dash.png"
                                                                        alt="AI Assistant – Dash SaaS Add-on"
                                                                    />
                                                                </a>
                                                                <div className="hoverable-btn">
                                                                    <div
                                                                        className="d-flex justify-content-center gm-preview-event align-items-center"
                                                                        data-product-id={3177}
                                                                        gm-product-name="AI Assistant - Dash SaaS Add-on"
                                                                        gm-produt-price={39}
                                                                        gm-product-category="Dash SaaS Addon"
                                                                        position={96}
                                                                    >
                                                                        <a
                                                                            href="https://workdo.io/product/dash-saas-addon/ai-assistant-dash-saas-add-on/"
                                                                            tabIndex={0}
                                                                        >
                                                                            <svg>
                                                                                <use xlinkHref="#eye-outline" />
                                                                            </svg>
                                                                            Preview
                                                                        </a>
                                                                        <a
                                                                            href="javascript:void(0)"
                                                                            tabIndex={0}
                                                                            className="add-cart-btn"
                                                                            data-product-id={3177}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            <svg>
                                                                                <iconify-icon icon="fa-solid:cart-plus"></iconify-icon>
                                                                            </svg>
                                                                            Cart
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="product-content-top">
                                                                <div className="title">
                                                                    <a href="https://workdo.io/product/dash-saas-addon/ai-assistant-dash-saas-add-on/">
                                                                        <h4 className="woocommerce-loop-product__title ">
                                                                            AI Assistant – Dash SaaS Add-on
                                                                        </h4>
                                                                    </a>
                                                                </div>
                                                            </div>

                                                            <div className="product-content-bottom">
                                                                <div className="product-rating-content">
                                                                    <div className="product-rating">
                                                                        <div className="d-flex">
                                                                            <div id="new-star-rating-container">
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                            </div>
                                                                            (56 Sales)
                                                                        </div>
                                                                    </div>
                                                                    <div className="card-bottom d-flex align-items-center justify-content-between">
                                                                        <div className="price d-flex">
                                                                            <ins>₦45, 000:00</ins>
                                                                        </div>
                                                                        {/* <span class="price"></span> */}
                                                                        <a
                                                                            href="javascript:void(0);"
                                                                            className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart add-cart-btn btn dark-green"
                                                                            data-product-id={3177}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            add to cart
                                                                            <iconify-icon icon="fa-solid:cart-plus" id="add-on-plan-cart-icon"></iconify-icon>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="col-xl-4 col-lg-6 col-sm-6 col-12">
                                                        <div className="product type-product post-3852 status-publish instock product_cat-dash-saas-addon product_cat-social-media sale downloadable virtual sold-individually purchasable product-type-simple">
                                                            <div className="feature-img">
                                                                <a href="javascript:void(0)" className="pdp-img" tabIndex={0}>
                                                                    {" "}
                                                                    <img
                                                                        src="https://workdo.io/wp-content/themes/storefront-child/assets/images/themes/main-image/whatsapp-api-dash.png"
                                                                        alt="WhatsApp API – Dash SaaS Add-on"
                                                                    />
                                                                </a>
                                                                <div className="hoverable-btn">
                                                                    <div
                                                                        className="d-flex justify-content-center gm-preview-event align-items-center"
                                                                        data-product-id={3852}
                                                                        gm-product-name="WhatsApp API - Dash SaaS Add-on"
                                                                        gm-produt-price={29}
                                                                        gm-product-category="Dash SaaS Addon"
                                                                        position={161}
                                                                    >
                                                                        <a
                                                                            href="https://workdo.io/product/dash-saas-addon/whatsapp-api-dash-saas-add-on/"
                                                                            tabIndex={0}
                                                                        >
                                                                            <svg>
                                                                                <use xlinkHref="#eye-outline" />
                                                                            </svg>
                                                                            Preview
                                                                        </a>
                                                                        <a
                                                                            href="javascript:void(0)"
                                                                            tabIndex={0}
                                                                            className="add-cart-btn"
                                                                            data-product-id={3852}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            <svg>
                                                                                <iconify-icon icon="fa-solid:cart-plus"></iconify-icon>
                                                                            </svg>
                                                                            Cart
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="product-content-top">
                                                                <div className="title">
                                                                    <a href="https://workdo.io/product/dash-saas-addon/whatsapp-api-dash-saas-add-on/">
                                                                        <h4 className="woocommerce-loop-product__title ">
                                                                            WhatsApp API – Dash SaaS Add-on
                                                                        </h4>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="star-rating"
                                                                role="img"
                                                                aria-label="Rated 5.00 out of 5"
                                                            >
                                                                <span style={{ width: "100%" }}>

                                                                </span>
                                                            </div>

                                                            <div className="product-content-bottom">
                                                                <div className="product-rating-content">
                                                                    <div className="product-rating">
                                                                        <div className="d-flex">
                                                                            <div id="new-star-rating-container">
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                            </div>
                                                                            (55 Sales)
                                                                        </div>
                                                                    </div>
                                                                    <div className="card-bottom d-flex align-items-center justify-content-between">
                                                                        <div className="price d-flex">
                                                                            <ins>₦35, 000:00</ins>
                                                                        </div>
                                                                        {/* <span class="price"></span> */}
                                                                        <a
                                                                            href="javascript:void(0);"
                                                                            className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart add-cart-btn btn dark-green"
                                                                            data-product-id={3852}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            add to cart
                                                                            <iconify-icon icon="fa-solid:cart-plus" id="add-on-plan-cart-icon"></iconify-icon>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="col-xl-4 col-lg-6 col-sm-6 col-12">
                                                        <div className="product type-product post-4363 status-publish instock product_cat-dash-saas-addon product_cat-communication sale downloadable virtual sold-individually purchasable product-type-simple">
                                                            <div className="feature-img">
                                                                <a href="javascript:void(0)" className="pdp-img" tabIndex={0}>
                                                                    {" "}
                                                                    <img
                                                                        src="https://workdo.io/wp-content/themes/storefront-child/assets/images/themes/main-image/email-box-dash.png"
                                                                        alt="EMail Box – Dash SaaS Add-on"
                                                                    />
                                                                </a>
                                                                <div className="hoverable-btn">
                                                                    <div
                                                                        className="d-flex justify-content-center gm-preview-event align-items-center"
                                                                        data-product-id={4363}
                                                                        gm-product-name="EMail Box - Dash SaaS Add-on"
                                                                        gm-produt-price={29}
                                                                        gm-product-category="Dash SaaS Addon"
                                                                        position={135}
                                                                    >
                                                                        <a
                                                                            href="https://workdo.io/product/dash-saas-addon/email-box-dash-saas-add-on/"
                                                                            tabIndex={0}
                                                                        >
                                                                            <svg>
                                                                                <use xlinkHref="#eye-outline" />
                                                                            </svg>
                                                                            Preview
                                                                        </a>
                                                                        <a
                                                                            href="javascript:void(0)"
                                                                            tabIndex={0}
                                                                            className="add-cart-btn"
                                                                            data-product-id={4363}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            <svg>
                                                                                <iconify-icon icon="fa-solid:cart-plus"></iconify-icon>
                                                                            </svg>
                                                                            Cart
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="product-content-top">
                                                                <div className="title">
                                                                    <a href="https://workdo.io/product/dash-saas-addon/email-box-dash-saas-add-on/">
                                                                        <h4 className="woocommerce-loop-product__title ">
                                                                            EMail Box – Dash SaaS Add-on
                                                                        </h4>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="star-rating"
                                                                role="img"
                                                                aria-label="Rated 5.00 out of 5"
                                                            >
                                                                <span style={{ width: "100%" }}>

                                                                </span>
                                                            </div>

                                                            <div className="product-content-bottom">
                                                                <div className="product-rating-content">
                                                                    <div className="product-rating">
                                                                        <div className="d-flex">
                                                                            <div id="new-star-rating-container">
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                            </div>
                                                                            (54 Sales)
                                                                        </div>
                                                                    </div>
                                                                    <div className="card-bottom d-flex align-items-center justify-content-between">
                                                                        <div className="price d-flex">
                                                                            <ins>₦35, 000:00</ins>
                                                                        </div>
                                                                        {/* <span class="price"></span> */}
                                                                        <a
                                                                            href="javascript:void(0);"
                                                                            className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart add-cart-btn btn dark-green"
                                                                            data-product-id={4363}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            add to cart
                                                                            <iconify-icon icon="fa-solid:cart-plus" id="add-on-plan-cart-icon"></iconify-icon>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="col-xl-4 col-lg-6 col-sm-6 col-12">
                                                        <div className="product type-product post-3607 status-publish instock product_cat-dash-saas-addon product_cat-calendar-management sale downloadable virtual sold-individually purchasable product-type-simple">
                                                            <div className="feature-img">
                                                                <a href="javascript:void(0)" className="pdp-img" tabIndex={0}>
                                                                    {" "}
                                                                    <img
                                                                        src="https://workdo.io/wp-content/themes/storefront-child/assets/images/themes/main-image/appointment-dash.png"
                                                                        alt="Appointment – Dash SaaS Add-on"
                                                                    />
                                                                </a>
                                                                <div className="hoverable-btn">
                                                                    <div
                                                                        className="d-flex justify-content-center gm-preview-event align-items-center"
                                                                        data-product-id={3607}
                                                                        gm-product-name="Appointment - Dash SaaS Add-on"
                                                                        gm-produt-price={39}
                                                                        gm-product-category="Dash SaaS Addon"
                                                                        position={117}
                                                                    >
                                                                        <a
                                                                            href="https://workdo.io/product/dash-saas-addon/appointment-dash-saas-add-on/"
                                                                            tabIndex={0}
                                                                        >
                                                                            <svg>
                                                                                <use xlinkHref="#eye-outline" />
                                                                            </svg>
                                                                            Preview
                                                                        </a>
                                                                        <a
                                                                            href="javascript:void(0)"
                                                                            tabIndex={0}
                                                                            className="add-cart-btn"
                                                                            data-product-id={3607}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            <svg>
                                                                                <iconify-icon icon="fa-solid:cart-plus"></iconify-icon>
                                                                            </svg>
                                                                            Cart
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="product-content-top">
                                                                <div className="title">
                                                                    <a href="https://workdo.io/product/dash-saas-addon/appointment-dash-saas-add-on/">
                                                                        <h4 className="woocommerce-loop-product__title ">
                                                                            Appointment – Dash SaaS Add-on
                                                                        </h4>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="star-rating"
                                                                role="img"
                                                                aria-label="Rated 5.00 out of 5"
                                                            >
                                                                <span style={{ width: "100%" }}>

                                                                </span>
                                                            </div>

                                                            <div className="product-content-bottom">
                                                                <div className="product-rating-content">
                                                                    <div className="product-rating">
                                                                        <div className="d-flex">
                                                                            <div id="new-star-rating-container">
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                            </div>
                                                                            (53 Sales)
                                                                        </div>
                                                                    </div>
                                                                    <div className="card-bottom d-flex align-items-center justify-content-between">
                                                                        <div className="price d-flex">
                                                                            <ins>₦45, 000:00</ins>
                                                                        </div>
                                                                        {/* <span class="price"></span> */}
                                                                        <a
                                                                            href="javascript:void(0);"
                                                                            className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart add-cart-btn btn dark-green"
                                                                            data-product-id={3607}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            add to cart
                                                                            <iconify-icon icon="fa-solid:cart-plus" id="add-on-plan-cart-icon"></iconify-icon>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="col-xl-4 col-lg-6 col-sm-6 col-12">
                                                        <div className="product type-product post-2913 status-publish instock product_cat-dash-saas-addon product_cat-finance sale downloadable virtual sold-individually purchasable product-type-simple">
                                                            <div className="feature-img">
                                                                <a href="javascript:void(0)" className="pdp-img" tabIndex={0}>
                                                                    {" "}
                                                                    <img
                                                                        src="https://workdo.io/wp-content/themes/storefront-child/assets/images/themes/main-image/retainer-dash.png"
                                                                        alt="Retainer – Dash SaaS Add-on"
                                                                    />
                                                                </a>
                                                                <div className="hoverable-btn">
                                                                    <div
                                                                        className="d-flex justify-content-center gm-preview-event align-items-center"
                                                                        data-product-id={2913}
                                                                        gm-product-name="Retainer - Dash SaaS Add-on"
                                                                        gm-produt-price={19}
                                                                        gm-product-category="Dash SaaS Addon"
                                                                        position={103}
                                                                    >
                                                                        <a
                                                                            href="https://workdo.io/product/dash-saas-addon/retainer-dash-saas-add-on/"
                                                                            tabIndex={0}
                                                                        >
                                                                            <svg>
                                                                                <use xlinkHref="#eye-outline" />
                                                                            </svg>
                                                                            Preview
                                                                        </a>
                                                                        <a
                                                                            href="javascript:void(0)"
                                                                            tabIndex={0}
                                                                            className="add-cart-btn"
                                                                            data-product-id={2913}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            <svg>
                                                                                <iconify-icon icon="fa-solid:cart-plus"></iconify-icon>
                                                                            </svg>
                                                                            Cart
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="product-content-top">
                                                                <div className="title">
                                                                    <a href="https://workdo.io/product/dash-saas-addon/retainer-dash-saas-add-on/">
                                                                        <h4 className="woocommerce-loop-product__title ">
                                                                            Retainer – Dash SaaS Add-on
                                                                        </h4>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="star-rating"
                                                                role="img"
                                                                aria-label="Rated 5.00 out of 5"
                                                            >
                                                                <span style={{ width: "100%" }}>

                                                                </span>
                                                            </div>

                                                            <div className="product-content-bottom">
                                                                <div className="product-rating-content">
                                                                    <div className="product-rating">
                                                                        <div className="d-flex">
                                                                            <div id="new-star-rating-container">
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                            </div>
                                                                            (49 Sales)
                                                                        </div>
                                                                    </div>
                                                                    <div className="card-bottom d-flex align-items-center justify-content-between">
                                                                        <div className="price d-flex">
                                                                            <ins>₦25, 000:00</ins>
                                                                        </div>
                                                                        {/* <span class="price"></span> */}
                                                                        <a
                                                                            href="javascript:void(0);"
                                                                            className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart add-cart-btn btn dark-green"
                                                                            data-product-id={2913}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            add to cart
                                                                            <iconify-icon icon="fa-solid:cart-plus" id="add-on-plan-cart-icon"></iconify-icon>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="col-xl-4 col-lg-6 col-sm-6 col-12">
                                                        <div className="product type-product post-2931 status-publish last instock product_cat-dash-saas-addon product_cat-security sale downloadable virtual sold-individually purchasable product-type-simple">
                                                            <div className="feature-img">
                                                                <a href="javascript:void(0)" className="pdp-img" tabIndex={0}>
                                                                    {" "}
                                                                    <img
                                                                        src="https://workdo.io/wp-content/themes/storefront-child/assets/images/themes/main-image/google-authentication-dash.png"
                                                                        alt="Google Authentication – Dash SaaS Add-on"
                                                                    />
                                                                </a>
                                                                <div className="hoverable-btn">
                                                                    <div
                                                                        className="d-flex justify-content-center gm-preview-event align-items-center"
                                                                        data-product-id={2931}
                                                                        gm-product-name="Google Authentication - Dash SaaS Add-on"
                                                                        gm-produt-price={19}
                                                                        gm-product-category="Dash SaaS Addon"
                                                                        position={102}
                                                                    >
                                                                        <a
                                                                            href="https://workdo.io/product/dash-saas-addon/google-authentication-dash-saas-add-on/"
                                                                            tabIndex={0}
                                                                        >
                                                                            <svg>
                                                                                <use xlinkHref="#eye-outline" />
                                                                            </svg>
                                                                            Preview
                                                                        </a>
                                                                        <a
                                                                            href="javascript:void(0)"
                                                                            tabIndex={0}
                                                                            className="add-cart-btn"
                                                                            data-product-id={2931}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            <svg>
                                                                                <iconify-icon icon="fa-solid:cart-plus"></iconify-icon>
                                                                            </svg>
                                                                            Cart
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="product-content-top">
                                                                <div className="title">
                                                                    <a href="https://workdo.io/product/dash-saas-addon/google-authentication-dash-saas-add-on/">
                                                                        <h4 className="woocommerce-loop-product__title ">
                                                                            Google Authentication – Dash SaaS Add-on
                                                                        </h4>
                                                                    </a>
                                                                </div>
                                                            </div>

                                                            <div className="product-content-bottom">
                                                                <div className="product-rating-content">
                                                                    <div className="product-rating">
                                                                        <div className="d-flex">
                                                                            <div id="new-star-rating-container">
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                                <iconify-icon icon="emojione:star"></iconify-icon>
                                                                            </div>
                                                                            (48 Sales)
                                                                        </div>
                                                                    </div>
                                                                    <div className="card-bottom d-flex align-items-center justify-content-between">
                                                                        <div className="price d-flex">
                                                                            <ins>₦25, 000:00</ins>
                                                                        </div>
                                                                        {/* <span class="price"></span> */}
                                                                        <a
                                                                            href="javascript:void(0);"
                                                                            className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart add-cart-btn btn dark-green"
                                                                            data-product-id={2931}
                                                                            page-name="Listing Page"
                                                                        >
                                                                            add to cart
                                                                            <iconify-icon icon="fa-solid:cart-plus" id="add-on-plan-cart-icon"></iconify-icon>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="load-more-ls">
                                                    <input type="hidden" id="offset" defaultValue={27} />
                                                    <input
                                                        type="hidden"
                                                        id="load-category"
                                                        defaultValue="dash-saas-addon"
                                                    />{" "}
                                                    <a className="btn btn-primary text-white load_more" id="load_using_ajax">
                                                        Load More
                                                    </a>
                                                    <p id="no-result-found" />
                                                </div>
                                                <div className="storefront-sorting">
                                                    <form className="woocommerce-ordering" method="get">
                                                        <select
                                                            name="orderby"
                                                            className="orderby"
                                                            aria-label="Shop order"
                                                            style={{ display: "none" }}
                                                        >
                                                            <option value="menu_order" selected="selected">
                                                                Default sorting
                                                            </option>
                                                            <option value="popularity">Sort by popularity</option>
                                                            <option value="rating">Sort by average rating</option>
                                                            <option value="date">Sort by latest</option>
                                                            <option value="price">Sort by price: low to high</option>
                                                            <option value="price-desc">Sort by price: high to low</option>
                                                        </select>
                                                        <div className="nice-select orderby" tabIndex={0}>
                                                            <span className="current">Default sorting</span>
                                                            <ul className="list">
                                                                <li data-value="menu_order" className="option selected">
                                                                    Default sorting
                                                                </li>
                                                                <li data-value="popularity" className="option">
                                                                    Sort by popularity
                                                                </li>
                                                                <li data-value="rating" className="option">
                                                                    Sort by average rating
                                                                </li>
                                                                <li data-value="date" className="option">
                                                                    Sort by latest
                                                                </li>
                                                                <li data-value="price" className="option">
                                                                    Sort by price: low to high
                                                                </li>
                                                                <li data-value="price-desc" className="option">
                                                                    Sort by price: high to low
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <input type="hidden" name="paged" defaultValue={1} />
                                                    </form>
                                                    <p className="woocommerce-result-count">Showing 1–27 of 139 results</p>
                                                    <nav className="woocommerce-pagination">
                                                        <ul className="page-numbers">
                                                            <li>
                                                                <span aria-current="page" className="page-numbers current">
                                                                    1
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="page-numbers"
                                                                    href="https://workdo.io/product-category/dash-saas-addon/page/2/"
                                                                >
                                                                    2
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="page-numbers"
                                                                    href="https://workdo.io/product-category/dash-saas-addon/page/3/"
                                                                >
                                                                    3
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="page-numbers"
                                                                    href="https://workdo.io/product-category/dash-saas-addon/page/4/"
                                                                >
                                                                    4
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="page-numbers"
                                                                    href="https://workdo.io/product-category/dash-saas-addon/page/5/"
                                                                >
                                                                    5
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="page-numbers"
                                                                    href="https://workdo.io/product-category/dash-saas-addon/page/6/"
                                                                >
                                                                    6
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="next page-numbers"
                                                                    href="https://workdo.io/product-category/dash-saas-addon/page/2/"
                                                                >
                                                                    →
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div id="menu5" className="tab-pane fade">
                                    <div class="w-auto d-flex justify-content-center">
                                        <ul class="nav nav-pills mb-5 border px-3 py-2 rounded" id="pills-tab" role="tablist" style={{ background: '#f0a43c' }}>
                                            <li class="nav-item">
                                                <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home2" role="tab" aria-controls="pills-home" aria-selected="true">Monthly</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile2" role="tab" aria-controls="pills-profile" aria-selected="false">Yearly</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="tab-content monthly-plan-bg" id="pills-tabContent">
                                        <div class="tab-pane fade show active" id="pills-home2" role="tabpanel" aria-labelledby="pills-home-tab">
                                            <div className="row" id='investment_plans_pro_increase'>
                                                <div className="col-xl-3 col-md-6 col-lg-6 col-sm-6 col-12" id='invest-plan-each-col'>
                                                    <div className="investment_box_wrapper float_left">
                                                        <div className="investment_icon_circle">
                                                            <i className="flaticon-bar-chart" />
                                                        </div>
                                                        <div className="investment_border_wrapper" />
                                                        <div className="investment_content_wrapper">
                                                            <h3 className='font-weight-bold'>
                                                                <a href="#" id='plan-purple-color'>14 Days Trial</a>
                                                            </h3>
                                                            <h4 className='mt-3 text-danger'>
                                                                ₦00:00
                                                            </h4>
                                                            <h5 className='my-3 text-danger font-weight-bold'>
                                                                What is included?
                                                            </h5>
                                                            <p className='text-left px-3 font-weight-bold'>
                                                                ● All Options in Startup Plan <br />
                                                                ● All Options in Growth Plan<br />
                                                                ● limited Monthly in App Video
                                                                Calls<br />
                                                                ● Unlimited Users (+5 Staff)<br />
                                                                ● Manage Multiple Branches<br />
                                                                ● Unlimited Store Mgt.<br />
                                                                ● Dedicated Account Manager<br />
                                                                ● Advance Reports &amp; Analytics<br />
                                                                ● Custom Design Solutions<br />
                                                                ● Access to Add – Ons Solutions<br />
                                                                ● + more features<br />
                                                            </p>
                                                        </div>
                                                        <div className="about_btn plans_btn">
                                                            <ul>
                                                                <li>
                                                                    <a href="#">Subscribe Now!</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-6 col-lg-6 col-sm-6 col-12" id='invest-plan-each-col'>
                                                    <div className="investment_box_wrapper float_left">
                                                        <div className="investment_icon_circle red_info_circle">
                                                            <i className="flaticon-money" />
                                                        </div>
                                                        <div className="investment_border_wrapper red_border_wrapper" />
                                                        <div className="investment_content_wrapper">
                                                            <h3 className='font-weight-bold'>
                                                                <a href="#" id='plan-orange-color'>Startup Plan</a>
                                                            </h3>
                                                            <h4 className='mt-3 text-danger'>
                                                                ₦4, 500:00/Month
                                                            </h4>
                                                            <h5 className='my-3 text-danger font-weight-bold'>
                                                                What is included?
                                                            </h5>
                                                            <p className='text-left px-3 font-weight-bold'>
                                                                ● Free Registrations <br />
                                                                ● Limited Access Rights<br />
                                                                ● Unlimited Monthly in App
                                                                Messages<br />
                                                                ● Profile Management<br />
                                                                ● Limited Users (2 Staff)<br />
                                                                ● Free Google meet Links Mgt.<br />
                                                                ● Free Zoom Meeting Links Mgt.<br />
                                                                ● Manage Single Online Store<br />
                                                                ● Manage Online Products &amp;
                                                                Services<br />
                                                                ● Manage Payments &amp; Collections<br />
                                                                ● Sales to Unlimited Customers<br />
                                                                ● Manage Online Inventory Store<br />
                                                                ● Manage Customers Database<br />
                                                                ● Manage Online &amp; Offline
                                                                Appointments<br />
                                                                ● Manage Communications
                                                                Channels<br />
                                                                ● Mobile App (Android &amp; IOS)<br />
                                                                ● Access to Credit on Products &amp;
                                                                Services<br />
                                                            </p>
                                                        </div>
                                                        <div className="about_btn plans_btn red_btn_plans">
                                                            <ul>
                                                                <li>
                                                                    <a href="#">Subscribe Now!</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-6 col-lg-6 col-sm-6 col-12" id='invest-plan-each-col'>
                                                    <div className="investment_box_wrapper float_left">
                                                        <div className="investment_icon_circle blue_icon_circle">
                                                            <i className="flaticon-gold" />
                                                        </div>
                                                        <div className="investment_border_wrapper blue_border_wrapper" />
                                                        <div className="investment_content_wrapper">
                                                            <h3 className='font-weight-bold'>
                                                                <a href="#" id='plan-blue-color'>Biz Growth Plan</a>
                                                            </h3>
                                                            <h4 className='mt-3 text-danger'>
                                                                ₦10, 000:00/Month
                                                            </h4>
                                                            <h5 className='my-3 text-danger font-weight-bold'>
                                                                What is included?
                                                            </h5>
                                                            <p className='text-left px-3 font-weight-bold'>
                                                                ● All Options in Startup Plan <br />
                                                                ● Onboarding of All Employees<br />
                                                                ● limited Monthly in App Voice
                                                                Calls<br />
                                                                ● Lead &amp; CRM<br />
                                                                ● In App Appointment Mgt.<br />
                                                                ● Expenses Mgt.<br />
                                                                ● Manage off line and Online
                                                                Transactions<br />
                                                                ● 24/7 Customer Support Services<br />
                                                                ● Limited Database Storage<br />
                                                                ● Unlimited Inventory Mgt.<br />
                                                                ● Three Online Stores Mgt.<br />
                                                                ● Front Office Mgt. System<br />
                                                                ● Business Campaign Mgt.<br />
                                                                ● Integrated of Third Party Apps.<br />
                                                                ● Standard Reports &amp; Analytics<br />
                                                                ● + more features<br />
                                                            </p>
                                                        </div>
                                                        <div className="about_btn plans_btn blue_btn_plans">
                                                            <ul>
                                                                <li>
                                                                    <a href="#">Subscribe Now!</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-6 col-lg-6 col-sm-6 col-12" id='invest-plan-each-col'>
                                                    <div className="investment_box_wrapper float_left">
                                                        <div className="investment_icon_circle green_info_circle">
                                                            <i className="flaticon-medal" />
                                                        </div>
                                                        <div className="investment_border_wrapper green_border_wrapper" />
                                                        <div className="investment_content_wrapper">
                                                            <h3 className='font-weight-bold'>
                                                                <a href="#" id='plan-green-color'>Advanced</a>
                                                            </h3>
                                                            <h4 className='mt-3 text-danger'>
                                                                ₦25, 000:00/
                                                                Yearly
                                                            </h4>
                                                            <h5 className='my-3 text-danger font-weight-bold'>
                                                                What is included?
                                                            </h5>
                                                            <p className='text-left px-3 font-weight-bold'>
                                                                ● All Options in Startup Plan<br />
                                                                ● All Options in Growth Plan<br />
                                                                ● limited Monthly in App Video
                                                                Calls<br />
                                                                ● Unlimited Users (+5 Staff)<br />
                                                                ● Manage Multiple Branches<br />
                                                                ● Unlimited Store Mgt.<br />
                                                                ● Dedicated Account Manager<br />
                                                                ● Advance Reports &amp; Analytics<br />
                                                                ● Custom Design Solutions<br />
                                                                ● Access to Add – Ons Solutions<br />
                                                                ● + more features<br />
                                                            </p>
                                                        </div>
                                                        <div className="about_btn plans_btn green_plan_btn">
                                                            <ul>
                                                                <li>
                                                                    <a href="#">Subscribe Now!</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="pills-profile2" role="tabpanel" aria-labelledby="pills-profile-tab">
                                            <div className="row" id='investment_plans_pro_increase'>
                                                <div className="col-xl-3 col-md-6 col-lg-6 col-sm-6 col-12" id='invest-plan-each-col'>
                                                    <div className="investment_box_wrapper float_left">
                                                        <div className="investment_icon_circle">
                                                            <i className="flaticon-bar-chart" />
                                                        </div>
                                                        <div className="investment_border_wrapper" />
                                                        <div className="investment_content_wrapper">
                                                            <h3 className='font-weight-bold'>
                                                                <a href="#" id='plan-purple-color'>14 Days Trial</a>
                                                            </h3>
                                                            <h4 className='mt-3 text-danger'>
                                                                ₦00:00
                                                            </h4>
                                                            <h5 className='my-3 text-danger font-weight-bold'>
                                                                What is included?
                                                            </h5>
                                                            <p className='text-left px-3 font-weight-bold'>
                                                                ● All Options in Startup Plan <br />
                                                                ● All Options in Growth Plan<br />
                                                                ● limited Monthly in App Video
                                                                Calls<br />
                                                                ● Unlimited Users (+5 Staff)<br />
                                                                ● Manage Multiple Branches<br />
                                                                ● Unlimited Store Mgt.<br />
                                                                ● Dedicated Account Manager<br />
                                                                ● Advance Reports &amp; Analytics<br />
                                                                ● Custom Design Solutions<br />
                                                                ● Access to Add – Ons Solutions<br />
                                                                ● + more features<br />
                                                            </p>
                                                        </div>
                                                        <div className="about_btn plans_btn">
                                                            <ul>
                                                                <li>
                                                                    <a href="#">Subscribe Now!</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-6 col-lg-6 col-sm-6 col-12" id='invest-plan-each-col'>
                                                    <div className="investment_box_wrapper float_left">
                                                        <div className="investment_icon_circle red_info_circle">
                                                            <i className="flaticon-money" />
                                                        </div>
                                                        <div className="investment_border_wrapper red_border_wrapper" />
                                                        <div className="investment_content_wrapper">
                                                            <h3 className='font-weight-bold'>
                                                                <a href="#" id='plan-orange-color'>Startup Plan</a>
                                                            </h3>
                                                            <h4 className='mt-3 text-danger'>
                                                                ₦45, 000:00/Month
                                                            </h4>
                                                            <h5 className='my-3 text-danger font-weight-bold'>
                                                                What is included?
                                                            </h5>
                                                            <p className='text-left px-3 font-weight-bold'>
                                                                ● Free Registrations <br />
                                                                ● Limited Access Rights<br />
                                                                ● Unlimited Monthly in App
                                                                Messages<br />
                                                                ● Profile Management<br />
                                                                ● Limited Users (2 Staff)<br />
                                                                ● Free Google meet Links Mgt.<br />
                                                                ● Free Zoom Meeting Links Mgt.<br />
                                                                ● Manage Single Online Store<br />
                                                                ● Manage Online Products &amp;
                                                                Services<br />
                                                                ● Manage Payments &amp; Collections<br />
                                                                ● Sales to Unlimited Customers<br />
                                                                ● Manage Online Inventory Store<br />
                                                                ● Manage Customers Database<br />
                                                                ● Manage Online &amp; Offline
                                                                Appointments<br />
                                                                ● Manage Communications
                                                                Channels<br />
                                                                ● Mobile App (Android &amp; IOS)<br />
                                                                ● Access to Credit on Products &amp;
                                                                Services<br />
                                                            </p>
                                                        </div>
                                                        <div className="about_btn plans_btn red_btn_plans">
                                                            <ul>
                                                                <li>
                                                                    <a href="#">Subscribe Now!</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-6 col-lg-6 col-sm-6 col-12" id='invest-plan-each-col'>
                                                    <div className="investment_box_wrapper float_left">
                                                        <div className="investment_icon_circle blue_icon_circle">
                                                            <i className="flaticon-gold" />
                                                        </div>
                                                        <div className="investment_border_wrapper blue_border_wrapper" />
                                                        <div className="investment_content_wrapper">
                                                            <h3 className='font-weight-bold'>
                                                                <a href="#" id='plan-blue-color'>Biz Growth Plan</a>
                                                            </h3>
                                                            <h4 className='mt-3 text-danger'>
                                                                ₦100, 000:00/Month
                                                            </h4>
                                                            <h5 className='my-3 text-danger font-weight-bold'>
                                                                What is included?
                                                            </h5>
                                                            <p className='text-left px-3 font-weight-bold'>
                                                                ● All Options in Startup Plan <br />
                                                                ● Onboarding of All Employees<br />
                                                                ● limited Monthly in App Voice
                                                                Calls<br />
                                                                ● Lead &amp; CRM<br />
                                                                ● In App Appointment Mgt.<br />
                                                                ● Expenses Mgt.<br />
                                                                ● Manage off line and Online
                                                                Transactions<br />
                                                                ● 24/7 Customer Support Services<br />
                                                                ● Limited Database Storage<br />
                                                                ● Unlimited Inventory Mgt.<br />
                                                                ● Three Online Stores Mgt.<br />
                                                                ● Front Office Mgt. System<br />
                                                                ● Business Campaign Mgt.<br />
                                                                ● Integrated of Third Party Apps.<br />
                                                                ● Standard Reports &amp; Analytics<br />
                                                                ● + more features<br />
                                                            </p>
                                                        </div>
                                                        <div className="about_btn plans_btn blue_btn_plans">
                                                            <ul>
                                                                <li>
                                                                    <a href="#">Subscribe Now!</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-6 col-lg-6 col-sm-6 col-12" id='invest-plan-each-col'>
                                                    <div className="investment_box_wrapper float_left">
                                                        <div className="investment_icon_circle green_info_circle">
                                                            <i className="flaticon-medal" />
                                                        </div>
                                                        <div className="investment_border_wrapper green_border_wrapper" />
                                                        <div className="investment_content_wrapper">
                                                            <h3 className='font-weight-bold'>
                                                                <a href="#" id='plan-green-color'>Advanced</a>
                                                            </h3>
                                                            <h4 className='mt-3 text-danger'>
                                                                ₦250, 000:00/
                                                                Yearly
                                                            </h4>
                                                            <h5 className='my-3 text-danger font-weight-bold'>
                                                                What is included?
                                                            </h5>
                                                            <p className='text-left px-3 font-weight-bold'>
                                                                ● All Options in Startup Plan<br />
                                                                ● All Options in Growth Plan<br />
                                                                ● limited Monthly in App Video
                                                                Calls<br />
                                                                ● Unlimited Users (+5 Staff)<br />
                                                                ● Manage Multiple Branches<br />
                                                                ● Unlimited Store Mgt.<br />
                                                                ● Dedicated Account Manager<br />
                                                                ● Advance Reports &amp; Analytics<br />
                                                                ● Custom Design Solutions<br />
                                                                ● Access to Add – Ons Solutions<br />
                                                                ● + more features<br />
                                                            </p>
                                                        </div>
                                                        <div className="about_btn plans_btn green_plan_btn">
                                                            <ul>
                                                                <li>
                                                                    <a href="#">Subscribe Now!</a>
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
            </div>

            <div className="" id='fixed_portion'>
                <div className="container">
                    <div className="row">

                    </div>
                </div>
            </div>

            {/*investment plan wrapper end */}
            {/* transaction wrapper start */}



            <section id="enjoy-features" className="content__blocks blue">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 ease show">
                            <div class='d-flex justify-content-center align-items-center w-100 h-100'>
                                <h3>
                                    Plus, enjoy these features at no
                                    <br />
                                    extra cost
                                </h3>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="row">
                                <div className="col-12 col-lg-6 ease show">
                                    <div id='plus-features-each-box'>
                                        <div>
                                            <img
                                                width={63}
                                                height={51}
                                                src="https://www.mycase.com/wp-content/uploads/2022/02/icon-ongoing.svg"
                                                alt="Icon Ongoing"
                                                data-lazy-src="https://www.mycase.com/wp-content/uploads/2022/02/icon-ongoing.svg"
                                                data-ll-status="loaded"
                                                className="entered lazyloaded"
                                            />
                                            <noscript>
                                                &lt;img width="63" height="51"
                                                src="https://www.mycase.com/wp-content/uploads/2022/02/icon-ongoing.svg"
                                                alt="Icon Ongoing" /&gt;
                                            </noscript>
                                        </div>
                                        <div className="content__blocks-title">
                                            Ongoing <br />
                                            updates
                                        </div>
                                    </div>

                                </div>
                                <div className="col-12 col-lg-6 ease show">
                                    <div id='plus-features-each-box'>

                                        <div>
                                            <img
                                                width={59}
                                                height={60}
                                                src="https://www.mycase.com/wp-content/uploads/2022/02/icon-training.svg"
                                                alt="Icon Training"
                                                data-lazy-src="https://www.mycase.com/wp-content/uploads/2022/02/icon-training.svg"
                                                data-ll-status="loaded"
                                                className="entered lazyloaded"
                                            />
                                            <noscript>
                                                &lt;img width="59" height="60"
                                                src="https://www.mycase.com/wp-content/uploads/2022/02/icon-training.svg"
                                                alt="Icon Training" /&gt;
                                            </noscript>
                                        </div>
                                        <div className="content__blocks-title">
                                            Training <br />
                                            sessions
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 ease show">
                                    <div id='plus-features-each-box'>
                                        <div>
                                            <img
                                                width={75}
                                                height={56}
                                                src="https://www.mycase.com/wp-content/uploads/2022/02/icon-award.svg"
                                                alt="Icon Award"
                                                data-lazy-src="https://www.mycase.com/wp-content/uploads/2022/02/icon-award.svg"
                                                data-ll-status="loaded"
                                                className="entered lazyloaded"
                                            />
                                            <noscript>
                                                &lt;img width="75" height="56"
                                                src="https://www.mycase.com/wp-content/uploads/2022/02/icon-award.svg"
                                                alt="Icon Award" /&gt;
                                            </noscript>
                                        </div>
                                        <div className="content__blocks-title">Award-winning Support</div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 ease show">
                                    <div id='plus-features-each-box'>
                                        <div>
                                            <img
                                                width={33}
                                                height={53}
                                                src="https://www.mycase.com/wp-content/uploads/2022/02/icon-guided.svg"
                                                alt="Icon Guided"
                                                data-lazy-src="https://www.mycase.com/wp-content/uploads/2022/02/icon-guided.svg"
                                                data-ll-status="loaded"
                                                className="entered lazyloaded"
                                            />
                                            <noscript>
                                                &lt;img width="33" height="53"
                                                src="https://www.mycase.com/wp-content/uploads/2022/02/icon-guided.svg"
                                                alt="Icon Guided" /&gt;
                                            </noscript>
                                        </div>
                                        <div className="content__blocks-title">
                                            Guided <br />
                                            Implementation
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* <div className="invest_back_wrapper">
                <div className="investment_overlay" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="sv_heading_wraper half_section_headign cf half_sec_heading ls">
                                <h3>Comparative Plans</h3>
                            </div>

                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12">

                        </div>
                    </div>
                </div>
            </div> */}



            <div className=" float_left mt-3" id="investors_wrapper-pricing-pro">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="sv_heading_wraper index2_heading index3_heading index3_headung2">
                                <h4>UNLOCKING LEGAL PRACTICE</h4>
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
            <div className="faq_wrapper float_left my-5">
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
                            <div className="col-lg-10 mx-auto col-md-12 col-sm-12 col-12">
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
            <div className="payments_wrapper float_left my-5" id='transaction-wrapper-container'>
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

export default Pricing_Plans;