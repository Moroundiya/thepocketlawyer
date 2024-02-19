import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import '../solutions.css';
import solutionBg from '../assets/images/young-woman.png';

function Solutions() {
    return (

        <div>
            <Header />
            <div className="slider-area slider_index2_wrapper slider_index3_wrapper float_left">
                <div className="bg-animation">
                    <img className="zoom-fade" src="https://webstrot.com/html/savehyip/light_version/images/pattern.png" alt="img" />
                </div>
                <div className="index2_sliderbg index3_sliderbg">
                    <img src={solutionBg} alt="img" className="img-responsive" />
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
                                                {/* <h2 data-animation="animated bounceInUp" className="">
                                                    Often Have Small
                                                </h2> */}
                                                <h3 data-animation="animated bounceInUp" className="">
                                                    UNLOCKING <br />  LEGAL PRACTICE <br /> EFFICIENCY
                                                    WITH  <br />
                                                    <span>THEPOCKETLAWYERS MODULES</span>
                                                </h3>
                                                <p data-animation="animated bounceInUp" className="">
                                                    Keep Your Employees and Clients Happy and Productive
                                                </p>
                                                {/* <div className="slider_btn index2_sliderbtn index3_sliderbtn float_left">
                                                    <ul>
                                                        <li data-animation="animated bounceInLeft" className="">
                                                            <a href="#">start now</a>
                                                        </li>
                                                        <li data-animation="animated bounceInLeft" className="">
                                                            <a href="#">view plans</a>
                                                        </li>
                                                    </ul>
                                                </div> */}
                                                {/* <div
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
                                                </div> */}
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
                                                {/* <h2 data-animation="animated bounceInUp">Often Have Small</h2> */}
                                                <h3 data-animation="animated bounceInUp">
                                                    Get All Amazing
                                                    Features In Just One

                                                    Tool <br />
                                                    <span>At Unbeatable Price!</span>
                                                </h3>
                                                <p data-animation="animated bounceInUp">
                                                    Scale your plan as your Practice grows
                                                </p>

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
                                                {/* <h2 data-animation="animated bounceInUp">Often Have Small</h2> */}
                                                <h3 data-animation="animated bounceInUp">
                                                    You’re Part To <br />
                                                    <span>Legal Zenith! </span>
                                                </h3>
                                                <p data-animation="animated bounceInUp">
                                                    Elevate your legal practice to unparalleled levels of efficiency and productivity. Our Platform
                                                    offers integrated billing, role-based access control, and document management, ensuring
                                                    every facet of your practice is seamlessly managed. Streamline your operations and focus on what matters most – delivering top – notch legal services.
                                                </p>

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
                                <span>
                                    <iconify-icon icon="mdi:keyboard-arrow-left"></iconify-icon>
                                </span>
                            </a>
                            <a
                                className="next"
                                href="#carousel-example-generic"
                                role="button"
                                data-slide="next"
                            >
                                {" "}
                                <span>
                                    <iconify-icon icon="mdi:keyboard-arrow-right"></iconify-icon>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <section className="managing-buss-section">
                <div className="container">
                    <div className="section-title text-center mb-6">
                        &nbsp;
                    </div>
                    <div className="managing-staff-slider ">
                        <div className="staff-manage-box">
                            <div className="staff-manage-box-inner">
                                <h4>Dashboard</h4>
                                <p>
                                    The ThePocketLawyers dashboard is a comprehensive and well-organized hub, designed with a
                                    range of visual elements and information, allowing user to navigate with ease.
                                </p>
                            </div>
                        </div>
                        <div className="staff-manage-box">
                            <div className="staff-manage-box-inner">
                                <h4>Roles</h4>
                                <p>
                                    Our versatile multi-user role and permission tool enables you to assign distinct roles to each of your
                                    staff members, granting you precise control over their access to specific parameters and functions
                                </p>
                            </div>
                        </div>
                        <div className="staff-manage-box">
                            <div className="staff-manage-box-inner">
                                <h4>Member</h4>
                                <p>
                                    Within the member feature, you have the flexibility to create new members and associate pre-existing
                                    roles with them, allowing for seamless customization of user access.
                                </p>
                            </div>
                        </div>
                        <div className="staff-manage-box">
                            <div className="staff-manage-box-inner">
                                <h4>Group</h4>
                                <p>
                                    Using the group feature, you can efficiently establish and oversee groups while also managing their
                                    composition with your designated members.
                                </p>
                            </div>
                        </div>
                        <div className="staff-manage-box">
                            <div className="staff-manage-box-inner">
                                <h4>Advocate</h4>
                                <p>
                                    The Advocate module within ThePocketLawyers empowers you to effortlessly create comprehensive
                                    advocate profiles, encompassing vital personal details, including both office and home addresses, in
                                    addition to specifying a designated Point of Contact for reference and communication purposes.
                                </p>
                            </div>
                        </div>
                        <div className="staff-manage-box">
                            <div className="staff-manage-box-inner">
                                <h4>Cases</h4>
                                <p>
                                    Within the Cases module of ThePocketLawyers, you can effortlessly initiate the creation of a case by
                                    furnishing essential details related to your side.
                                </p>
                            </div>
                        </div>
                        <div className="staff-manage-box">
                            <div className="staff-manage-box-inner">
                                <h4>To-Do</h4>
                                <p>
                                    The To-Do module in ThePocketLawyers empowers you to efficiently manage your tasks from their
                                    designated start date and time to their specified end date and time.
                                </p>
                            </div>
                        </div>
                        <div className="staff-manage-box">
                            <div className="staff-manage-box-inner">
                                <h4>Calendar</h4>
                                <p>
                                    The Calendar module within ThePocketLawyers facilitates the efficient management of scheduled
                                    To-Dos and Case Hearings and many more common interfaces.
                                </p>
                            </div>
                        </div>
                        <div className="staff-manage-box">
                            <div className="staff-manage-box-inner">
                                <h4>Document </h4>
                                <p>
                                    The Documents module in ThePocketLawyers is designed to streamline the management of legal
                                    documents, offering a centralized repository for efficient organization and easy access.
                                </p>
                            </div>
                        </div>
                        <div className="staff-manage-box">
                            <div className="staff-manage-box-inner">
                                <h4>Bill</h4>
                                <p>
                                    The Bill module within ThePocketLawyers offers a simplified approach to managing service charges
                                    for both advocates and other stakeholders.
                                </p>
                            </div>
                        </div>
                        <div className="staff-manage-box">
                            <div className="staff-manage-box-inner">
                                <h4>Timesheet</h4>
                                <p>
                                    Within ThePocketLawyers, the Timesheet module furnishes comprehensive insights into the hours
                                    dedicated by team members to specific cases on specific days, creating a valuable record of time
                                    spent by each team member on individual cases and offering essential data for resource allocation
                                    and workload management.
                                </p>
                            </div>
                        </div>
                        <div className="staff-manage-box">
                            <div className="staff-manage-box-inner">
                                <h4>Invoice &amp; Expense Mgt.</h4>
                                <p>
                                    Within ThePocketLawyers, the invoice and Expense module offers meticulous monitoring, allowing
                                    you to keep a record of clients invoices and expenses on specific cases for a given day.
                                </p>
                            </div>
                        </div>
                        <div className="staff-manage-box">
                            <div className="staff-manage-box-inner">
                                <h4>Fee Recieved</h4>
                                <p>
                                    The Fee Received module in ThePocketLawyers efficiently tracks fees received for specific cases,
                                    booking, allowing seamless payment tracking through methods like Flutterwave, Paystack, Stripe,
                                    PayPal, etc., promoting financial transparency within the platform.
                                </p>
                            </div>
                        </div>
                        <div className="staff-manage-box">
                            <div className="staff-manage-box-inner">
                                <h4>SEO Purpose</h4>
                                <p>
                                    For SEO enhancement, ThePocketLawyers offers Meta Keywords and Descriptions, valuable meta
                                    tags that provide search engines with precise information about your business content
                                </p>
                            </div>
                        </div>
                        <div className="staff-manage-box">
                            <div className="staff-manage-box-inner">
                                <h4>Cookie Consent</h4>
                                <p>
                                    ThePocketLawyers incorporates Cookie Consent settings, ensuring that users can securely store
                                    their personal information in their browsers, enhancing the convenience of future online service
                                    logins with their explicit permission.
                                </p>
                            </div>
                        </div>
                        <div className="staff-manage-box">
                            <div className="staff-manage-box-inner">
                                <h4>
                                    Company <br /> Management
                                </h4>
                                <p>
                                    Customize your site setting by adding the files of the logo and creating the text for the title. Create
                                    the custom settings for the company and Email address
                                </p>
                            </div>
                        </div>
                        <div className="staff-manage-box">
                            <div className="staff-manage-box-inner">
                                <h4>
                                    Payroll Data
                                    <br />
                                    Storage
                                </h4>
                                <p>
                                    Store payroll data for future reference and ensure your employees receive their Payslips and salaries
                                    as at when due to the right account
                                </p>
                            </div>
                        </div>
                        <div className="staff-manage-box">
                            <div className="staff-manage-box-inner">
                                <h4>
                                    Integrates Third Party Apps.
                                </h4>
                                <p>
                                    Get more work done by integrating seamlessly with your essential business
                                    tools. Sign up and integrate with your favorite apps, discover or suggest new
                                    ones with our Open API.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </div >

    )
}

export default Solutions