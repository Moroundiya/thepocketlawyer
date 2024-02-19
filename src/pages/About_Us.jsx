import React from 'react';
import t1 from '../assets/images/t1.png';
import t2 from '../assets/images/t2.png';
import t3 from '../assets/images/t3.png';
import t4 from '../assets/images/t4.png';
import t5 from '../assets/images/t5.png';
import t6 from '../assets/images/t6.png';
import Header from '../components/Header';
import Footer from '../components/Footer';

import CountUp, { useCountUp } from 'react-countup';

function About_Us() {

    useCountUp({
        ref: 'counter',
        // end: 1234567,
        enableScrollSpy: true,
        scrollSpyOnce: false
    });

    return (
        <div>
            <div className="cursor" />
            {/* Top Scroll Start */}
            <a href="javascript:" id="return-to-top"> <i className="fas fa-angle-double-up" /></a>
            {/* Top Scroll End */}
            {/* cp navi wrapper Start */}
            <Header />
            <div className=" float_left" id='about-us-upper'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12 col-sm-12" id='sv_money_text_wrapper'>
                            <div className="sv_money_text_wrapper float_left" >
                                <h2>Let Us Revolutionize <br />
                                    Your Law Firm!</h2>
                                <p className='text-dark'>
                                    We help law firms run efficiently from anywhere And Anytime, providing an exceptional

                                    client experience, and help firm and Lawyers track performance.
                                </p>

                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 col-sm-12">
                            <div className="sv_abt_img_wrapper float_left">
                                <img src="https://img.freepik.com/premium-photo/portrait-successful-african-american-female-lawyer-holding-wooden-gavel-folder-hands-standing-indoors-smiling-ta-camera_44344-5016.jpg?w=740" alt="img" className="img-responsive" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sv_about_wrapper fixed_portion float_left" id='fixed_portion'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12 col-sm-12">
                            <div className="border_about_wrapper float_left">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-12 col-sm-12">
                                        <div className="sv_abt_img_wrapper float_left">
                                            <img src="https://img.freepik.com/free-vector/graduated-lawyer-concept-illustration_114360-14462.jpg?size=626&amp;ext=jpg&amp;ga=GA1.1.233311484.1695720566&amp;semt=ais" alt="img" className="img-responsive" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-12 col-sm-12 text-justify">
                                        <div className="sv_abt_content_wrapper float_left">
                                            <h1>OUR STORY</h1>
                                            {/* <p>One of the best investing marketing
                                                <br /> tools is High yield investment program.</p> */}
                                        </div>
                                        <p>
                                            ThePocketLawyers is a pioneering Software and
                                            platform as a service, we are at the forefront of
                                            revolutionizing the legal landscape across Africa.
                                            We&#39;re dedicated to transforming how people access
                                            and experience legal services, making them more
                                            accessible, efficient, and user-friendly.
                                            <p className='my-3'>
                                                At our core, we&#39;re driven by a passion for
                                                democratizing legal assistance and support. We
                                                understand the complexities and challenges
                                                individuals and businesses face when seeking legal
                                                guidance or representation. That&#39;s why we&#39;ve
                                                created an innovative digital space that connects
                                                clients with a network of qualified legal
                                                professionals seamlessly.
                                            </p>
                                            <p>
                                                Our platform serves as a bridge between clients and
                                                lawyers, offering a diverse range of legal services
                                                covering various domains such as business law,
                                                intellectual property, family law, real estate, and
                                                much more. We prioritize versatility to cater to the
                                                diverse needs of our users. We offer functionalities
                                                like time tracking, CRM, accounting, case
                                                management, contact management, and docketing.
                                            </p>
                                        </p>
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
                                <p>
                                    Transparency and clarity are integral to our ethos.
                                    We believe in transparent communication, clear
                                    fee structures, and easy access to legal resources,
                                    fostering a client-centric environment where
                                    individuals feel empowered and informed
                                    throughout their legal journey.
                                    ThePocketLawyers stands as a catalyst for change
                                    in the legal-tech industry. By breaking down
                                    barriers and leveraging technology, we&#39;re
                                    reshaping the way legal services are perceived
                                    and accessed. Our commitment to innovation,
                                    coupled with a relentless focus on serving the
                                    evolving needs of our users, defines who we are
                                    at ThePocketLawyers.
                                </p>
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
                                <img src="https://img.freepik.com/free-photo/smiling-african-american-man-listening-colleague_74855-3119.jpg?size=626&amp;ext=jpg&amp;ga=GA1.2.233311484.1695720566&amp;semt=ais" alt="img" className="img-responsive" />
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
                                    <div className="count-description">
                                        <span className="timer">
                                            <CountUp end={365} duration={7} enableScrollSpy={true} scrollSpyOnce={false} />
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
                                            <CountUp end={10000} duration={7} enableScrollSpy /> +</span>
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
                                            <CountUp end={5000} duration={7} enableScrollSpy /> +</span>
                                        <h5 className="con2"> <a href="#"> Law Firms</a></h5>
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
                                        <span className="timer"> <CountUp end={7000} duration={7} enableScrollSpy /> +</span>
                                        <h5 className="con4"> <a href="#"> Legal Professionals</a></h5>
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
                                {/* <h4> features</h4> */}
                                <h3>Fact About ThePocketLawyers</h3>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-sm-6 col-12">
                            <div className="investment_box_wrapper service_box float_left">
                                <div className="investment_icon_circle">
                                    <i className="flaticon-medal" />
                                </div>
                                <div className="investment_border_wrapper" />
                                <div className="investment_content_wrapper text-justify" id='investment_content_wrapper'>
                                    <h1 className='text-center'><a href="#">our mission</a></h1>
                                    <p>
                                        The mission of ThePocketLawyers is centered on revolutionizing the
                                        accessibility and delivery of legal services while upholding the highest
                                        standards of quality, transparency, and innovation. Our core objectives
                                        reflect a commitment to transforming the legal landscape for
                                        individuals and businesses alike.
                                    </p>
                                    <div className='my-3'>
                                        <p className='my-0'>
                                            <iconify-icon icon="mdi:success"></iconify-icon> Accessibility
                                        </p>
                                        <p className='my-0'>
                                            <iconify-icon icon="mdi:success"></iconify-icon> Quality and Expertise
                                        </p>
                                        <p className='my-0'>
                                            <iconify-icon icon="mdi:success"></iconify-icon> Empowerment through Information
                                        </p>
                                        <p className='my-0'>
                                            <iconify-icon icon="mdi:success"></iconify-icon> Transparency and Trust
                                        </p>
                                        <p className='my-0'>
                                            <iconify-icon icon="mdi:success"></iconify-icon> Innovation and Efficiency
                                        </p>
                                        <p className='my-0'>
                                            <iconify-icon icon="mdi:success"></iconify-icon> Customer-Centric Approach
                                        </p>
                                    </div>
                                    <p>
                                        ThePocketLawyers&#39; mission is not just about providing legal
                                        services; it&#39;s about redefining the way legal assistance is
                                        accessed and experienced. By adhering to our core values and
                                        mission, we aim to create a legal ecosystem that empowers,
                                        informs, and serves the diverse needs of our users, ultimately
                                        contributing to a more just and equitable society.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-sm-6 col-12">
                            <div className="investment_box_wrapper service_box float_left">
                                <div className="investment_icon_circle red_info_circle">
                                    <i className="flaticon-shield" />
                                </div>
                                <div className="investment_border_wrapper red_border_wrapper" />
                                <div className="investment_content_wrapper red_content_wrapper text-justify" id='investment_content_wrapper'>
                                    <h1 className='text-center'><a href="#">our vision</a></h1>
                                    <p>
                                        The vision of ThePocketLawyers transcends mere legal
                                        facilitation; it&#39;s about redefining the landscape of legal
                                        services. Our vision embodies a future where access to legal
                                        assistance and support is not hindered by barriers such as
                                        geographical constraints, exorbitant costs, or complexity of
                                        the legal system.
                                    </p>
                                    <p>
                                        At the heart of our vision is the belief in
                                        democratizing legal services. We envision a world where
                                        individuals and businesses, irrespective of their background or
                                        location, can effortlessly access high-quality legal assistance
                                        and support at their fingertips.
                                    </p>
                                    <p>
                                        This accessibility fosters
                                        empowerment, enabling informed decision-making and the
                                        protection of rights. Ultimately, our vision extends beyond
                                        just providing legal aid—it&#39;s about transforming the way legal
                                        services are perceived and accessed. By championing
                                        accessibility, transparency, innovation, and trust,
                                        ThePocketLawyers aims to pave the way for a future where
                                        legal assistance is a fundamental right, easily accessible to all
                                        who seek it
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-sm-6 col-12">
                            <div className="investment_box_wrapper service_box float_left">
                                <div className="investment_icon_circle blue_icon_circle">
                                    <i className="flaticon-bars" />
                                </div>
                                <div className="investment_border_wrapper blue_border_wrapper" />
                                <div className="investment_content_wrapper blue_content_wrapper text-justify" id='investment_content_wrapper'>
                                    <h1 className='text-center'><a href="#">our core value</a></h1>
                                    <p>
                                        The core values of ThePocketLawyers are the guiding
                                        principles that shape our culture, drive our decisions, and
                                        define our commitment to delivering exceptional legal
                                        services. These values form the foundation upon which
                                        we operate and interact with our clients, legal
                                        professionals, and the online community at large.
                                    </p>
                                    <div className='my-3'>
                                        <p className='my-0'>
                                            <iconify-icon icon="mdi:success"></iconify-icon> Accessibility
                                        </p>
                                        <p className='my-0'>
                                            <iconify-icon icon="mdi:success"></iconify-icon>Integrity and Ethics
                                        </p>
                                        <p className='my-0'>
                                            <iconify-icon icon="mdi:success"></iconify-icon> Excellence
                                        </p>
                                        <p className='my-0'>
                                            <iconify-icon icon="mdi:success"></iconify-icon> Innovation
                                        </p>
                                        <p className='my-0'>
                                            <iconify-icon icon="mdi:success"></iconify-icon> Empowerment
                                        </p>
                                        <p className='my-0'>
                                            <iconify-icon icon="mdi:success"></iconify-icon> Diversity and Inclusion
                                        </p>
                                        <p className='my-0'>
                                            <iconify-icon icon="mdi:success"></iconify-icon> Customer-Centric Approach
                                        </p>
                                    </div>
                                    <p>
                                        These core values serve as the compass that guides our actions and
                                        shapes the way we conduct business. They represent our
                                        commitment to delivering accessible, ethical, and exceptional legal
                                        services while upholding integrity, innovation, and empowerment at
                                        the forefront of everything we do.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*our services wrapper end */}
            {/* testimonial wrapper start */}
            <div className="testimonial_wrapper float_left">
                <div className="investment_overlay" id='investment-overlay-pro' />
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
                                                <p>ThePocketLawyers has allowed me to consolidate all of my client files into a single virtual
                                                    work space, giving me and my clients access to all documents at all times.it is also
                                                    secured and puts my clients at ease that their sensitive information is not being
                                                    exchanged of email servers.
                                                </p>
                                            </div>
                                            <div className="ts_img_social_wrapper">
                                                <div className="ts_client_img_wrapper">
                                                    <img src={t1} className="img-responsive" alt="client_img" />
                                                </div>
                                                <div className="ts_client_social_wrapper">
                                                    <p>- Barr. Franky Melaka
                                                        <br /> <span>Legal Consultant</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonial_slide_main_wrapper">
                                            <div className="ts_client_cont_wrapper dark_testimonial_wrapper">
                                                <p>
                                                    ThePocketLawyers has been beneficiary to our Firm right from the beginning we Signup.
                                                    The more we learn to use the tools, the more it is beneficial. It keeps everything all
                                                    together in one place.
                                                </p>
                                            </div>
                                            <div className="ts_img_social_wrapper p2">
                                                <div className="ts_client_social_wrapper right_social_medaia">
                                                    <p>- Merry Jain
                                                        <br /> <span>Business Lawyer</span></p>
                                                </div>
                                                <div className="ts_client_img_wrapper">
                                                    <img src={t2} className="img-responsive" alt="client_img" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonial_slide_main_wrapper dark_top_testimonial">
                                            <div className="ts_client_cont_wrapper">
                                                <p>
                                                    I have been using ThePocketLawyers, it has been an integral part of my practice and I
                                                    cannot imagine doing it without the tools. The interface is extremely easy to navigate.
                                                    The price is affordable, the customer service is impeccable and the constantly innovating
                                                    and evolving
                                                </p>
                                            </div>
                                            <div className="ts_img_social_wrapper">
                                                <div className="ts_client_img_wrapper">
                                                    <img src={t3} className="img-responsive" alt="client_img" />
                                                </div>
                                                <div className="ts_client_social_wrapper">
                                                    <p>- Alfred Oghenekaro
                                                        <br /> <span>Tax Lawyer</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonial_slide_main_wrapper">
                                            <div className="ts_client_cont_wrapper dark_testimonial_wrapper">
                                                <p>
                                                    We have small law firm, but since using ThePocketLawyers, we are more organized and
                                                    customer centric. It is extremely user friendly. It help us keep track of inflows and
                                                    expenses. Upload template documents, which saves us time and money. I would
                                                    recommend this case management system to every law office.
                                                </p>
                                            </div>
                                            <div className="ts_img_social_wrapper p2">
                                                <div className="ts_client_social_wrapper right_social_medaia">
                                                    <p>- Mr. Edem Akpan
                                                        <br /> <span>Immigration Lawyer</span></p>
                                                </div>
                                                <div className="ts_client_img_wrapper">
                                                    <img src={t4} className="img-responsive" alt="client_img" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonial_slide_main_wrapper dark_top_testimonial">
                                            <div className="ts_client_cont_wrapper">
                                                <p>The best thing about the platform is that we only need this one solutions for all our Firms
                                                    requirement. More so they always improve the platform with latest technology, will
                                                    always recommend the solution.</p>
                                            </div>
                                            <div className="ts_img_social_wrapper">
                                                <div className="ts_client_img_wrapper">
                                                    <img src={t5} className="img-responsive" alt="client_img" />
                                                </div>
                                                <div className="ts_client_social_wrapper">
                                                    <p>- Magnus Okeke
                                                        <br /> <span>Property Lawyer</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonial_slide_main_wrapper">
                                            <div className="ts_client_cont_wrapper dark_testimonial_wrapper">
                                                <p>The time keeping is incredibly easy to use, the invoicing and ability for clients to pay is
                                                    fantastic, the ability to execute documents remotely is unparalleled and the chance to
                                                    communicate with our clients through the portal cannot be over emphasized</p>
                                            </div>
                                            <div className="ts_img_social_wrapper p2">
                                                <div className="ts_client_social_wrapper right_social_medaia">
                                                    <p>- Agnes Michael
                                                        <br /> <span>Satisfied Customer</span></p>
                                                </div>
                                                <div className="ts_client_img_wrapper">
                                                    <img src={t6} className="img-responsive" alt="client_img" />
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
                                                        <img src="https://img.freepik.com/premium-photo/black-man-business-person-sit-chair-with-boook_862994-13665.jpg?size=626&amp;ext=jpg&amp;ga=GA1.2.233311484.1695720566&amp;semt=ais" className="img-responsive" alt="img" />
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
                                                        <img src="https://img.freepik.com/premium-photo/woman-suit-sits-desk-with-her-arms-crossed_671352-3698.jpg?size=626&ext=jpg&ga=GA1.2.233311484.1695720566&semt=ais" className="img-responsive" alt="img" />
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
                                                        <img src="https://img.freepik.com/premium-photo/black-man-business-person-sit-chair-with-boook_862994-13668.jpg?size=626&ext=jpg&ga=GA1.2.233311484.1695720566&semt=ais" className="img-responsive" alt="img" />
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

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* investors wrapper end */}
            {/* footer section start*/}
            <Footer />
        </div >

    )
}

export default About_Us;