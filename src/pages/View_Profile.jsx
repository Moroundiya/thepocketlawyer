import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../view-profile.css'


function View_Profile() {
    return (
        <div className="main-wrapper" >
            <Header />
            <div className="content" id='view-profile-parent'>
                <div className="container">
                    <div className="card">
                        <div className="card-body">
                            <div className="doctor-widget">
                                <div className="doc-info-left">
                                    <div className="doctor-img">
                                        <img
                                            src="https://helpful-bienenstitch-7914f7.netlify.app/assets/deborah-b6522712.jpg"
                                            className="img-fluid"
                                            alt="User Image"
                                        />
                                    </div>
                                    <div className="doc-info-cont">
                                        <h5 className="doc-name">Dr. Darren Elder</h5>
                                        <p className="doc-speciality">
                                            BDS, MDS - Oral &amp; Maxillofacial Surgery
                                        </p>
                                        <p className="doc-department">
                                            <img
                                                src="data:image/png;base64,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"
                                                className=""
                                                alt="Speciality"
                                            />
                                            Dentist
                                        </p>
                                        <div className="rating">
                                            <i className="fas fa-star filled" />
                                            <i className="fas fa-star filled" />
                                            <i className="fas fa-star filled" />
                                            <i className="fas fa-star filled" />
                                            <i className="fas fa-star" />
                                            <span className="d-inline-block average-rating">(35)</span>
                                        </div>
                                        <div className="clinic-details">
                                            <p className="doc-location">
                                                <i className="fas fa-map-marker-alt" /> Newyork, USA -{" "}
                                                <a href="">Get Directions</a>
                                            </p>
                                            <ul className="clinic-gallery">
                                                <li>
                                                    <a
                                                        href="assets/img/features/feature-01.jpg"
                                                        data-fancybox="gallery"
                                                    >
                                                        <img src="https://helpful-bienenstitch-7914f7.netlify.app/assets/homw-42cda38c.jpg" alt="Feature" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="assets/img/features/feature-02.jpg"
                                                        data-fancybox="gallery"
                                                    >
                                                        <img
                                                            src="https://helpful-bienenstitch-7914f7.netlify.app/assets/feature02-141fd269.jpg"
                                                            alt="Feature Image"
                                                        />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="assets/img/features/feature-03.jpg"
                                                        data-fancybox="gallery"
                                                    >
                                                        <img
                                                            src="https://helpful-bienenstitch-7914f7.netlify.app/assets/feature03-10a49a5c.jpg"
                                                            alt="Feature"
                                                        />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="assets/img/features/feature-04.jpg"
                                                        data-fancybox="gallery"
                                                    >
                                                        <img
                                                            src="https://helpful-bienenstitch-7914f7.netlify.app/assets/feature04-31ddad90.jpg"
                                                            alt="Feature"
                                                        />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="clinic-services">
                                            <span>Dental Fillings</span>
                                            <span>Teeth Whitneing</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="doc-info-right">
                                    <div className="clini-infos">
                                        <ul>
                                            <li>
                                                <i className="far fa-thumbs-up" /> 99%
                                            </li>
                                            <li>
                                                <i className="far fa-comment" /> 35 Feedback
                                            </li>
                                            <li>
                                                <i className="fas fa-map-marker-alt" /> Newyork, USA
                                            </li>
                                            <li>
                                                <i className="far fa-money-bill-alt" /> $100 per hour{" "}
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="doctor-action">
                                        <a href="javascript:void(0)" className="btn btn-white fav-btn">
                                            <i className="far fa-bookmark" />
                                        </a>
                                        <a href="chat.html" className="btn btn-white msg-btn">
                                            <i className="far fa-comment-alt" />
                                        </a>
                                        <a
                                            href="javascript:void(0)"
                                            className="btn btn-white call-btn"
                                            data-bs-toggle="modal"
                                            data-bs-target="#voice_call"
                                        >
                                            <i className="fas fa-phone" />
                                        </a>
                                        <a
                                            href="javascript:void(0)"
                                            className="btn btn-white call-btn"
                                            data-bs-toggle="modal"
                                            data-bs-target="#video_call"
                                        >
                                            <i className="fas fa-video" />
                                        </a>
                                    </div>
                                    <a href="/newbooking"></a>
                                    <div className="clinic-booking">
                                        <a href="/newbooking"></a>
                                        <a className="apt-btn" href="booking.html">
                                            Book Appointment
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ul class="nav nav-pills my-5" id="pills-tab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Overview</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Locations</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Reviews</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="pills-other-tab" data-toggle="pill" href="#pills-other" role="tab" aria-controls="pills-other" aria-selected="false">Business Hours</a>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent" >
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div className="row">
                                <div className="col-md-12 col-lg-9">
                                    <div className="widget about-widget">
                                        <h4 className="widget-title">About Me</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            Duis aute irure dolor in reprehenderit in voluptate velit
                                            esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                            sint occaecat cupidatat non proident, sunt in culpa qui
                                            officia deserunt mollit anim id est laborum.
                                        </p>
                                    </div>
                                    <div className="widget education-widget">
                                        <h4 className="widget-title">Education</h4>
                                        <div className="experience-box">
                                            <ul className="experience-list">
                                                <li>
                                                    <div className="experience-user">
                                                        <div className="before-circle" />
                                                    </div>
                                                    <div className="experience-content">
                                                        <div className="timeline-content">
                                                            <a href="#/" className="name">
                                                                American Dental Medical University
                                                            </a>
                                                            <div>BDS</div>
                                                            <span className="time">1998 - 2003</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="experience-user">
                                                        <div className="before-circle" />
                                                    </div>
                                                    <div className="experience-content">
                                                        <div className="timeline-content">
                                                            <a href="#/" className="name">
                                                                American Dental Medical University
                                                            </a>
                                                            <div>MDS</div>
                                                            <span className="time">2003 - 2005</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="widget experience-widget">
                                        <h4 className="widget-title">Work &amp; Experience</h4>
                                        <div className="experience-box">
                                            <ul className="experience-list">
                                                <li>
                                                    <div className="experience-user">
                                                        <div className="before-circle" />
                                                    </div>
                                                    <div className="experience-content">
                                                        <div className="timeline-content">
                                                            <a href="#/" className="name">
                                                                Glowing Smiles Family Dental Clinic
                                                            </a>
                                                            <span className="time">
                                                                2010 - Present (5 years)
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="experience-user">
                                                        <div className="before-circle" />
                                                    </div>
                                                    <div className="experience-content">
                                                        <div className="timeline-content">
                                                            <a href="#/" className="name">
                                                                Comfort Care Dental Clinic
                                                            </a>
                                                            <span className="time">
                                                                2007 - 2010 (3 years)
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="experience-user">
                                                        <div className="before-circle" />
                                                    </div>
                                                    <div className="experience-content">
                                                        <div className="timeline-content">
                                                            <a href="#/" className="name">
                                                                Dream Smile Dental Practice
                                                            </a>
                                                            <span className="time">
                                                                2005 - 2007 (2 years)
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="widget awards-widget">
                                        <h4 className="widget-title">Awards</h4>
                                        <div className="experience-box">
                                            <ul className="experience-list">
                                                <li>
                                                    <div className="experience-user">
                                                        <div className="before-circle" />
                                                    </div>
                                                    <div className="experience-content">
                                                        <div className="timeline-content">
                                                            <p className="exp-year">July 2023</p>
                                                            <h4 className="exp-title">Humanitarian Award</h4>
                                                            <p>
                                                                Lorem ipsum dolor sit amet, consectetur
                                                                adipiscing elit. Proin a ipsum tellus. Interdum
                                                                et malesuada fames ac ante ipsum primis in
                                                                faucibus.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="experience-user">
                                                        <div className="before-circle" />
                                                    </div>
                                                    <div className="experience-content">
                                                        <div className="timeline-content">
                                                            <p className="exp-year">March 2011</p>
                                                            <h4 className="exp-title">
                                                                Certificate for International Volunteer Service
                                                            </h4>
                                                            <p>
                                                                Lorem ipsum dolor sit amet, consectetur
                                                                adipiscing elit. Proin a ipsum tellus. Interdum
                                                                et malesuada fames ac ante ipsum primis in
                                                                faucibus.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="experience-user">
                                                        <div className="before-circle" />
                                                    </div>
                                                    <div className="experience-content">
                                                        <div className="timeline-content">
                                                            <p className="exp-year">May 2008</p>
                                                            <h4 className="exp-title">
                                                                The Dental Professional of The Year Award
                                                            </h4>
                                                            <p>
                                                                Lorem ipsum dolor sit amet, consectetur
                                                                adipiscing elit. Proin a ipsum tellus. Interdum
                                                                et malesuada fames ac ante ipsum primis in
                                                                faucibus.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="service-list">
                                        <h4>Services</h4>
                                        <ul className="clearfix">
                                            <li>Tooth cleaning </li>
                                            <li>Root Canal Therapy</li>
                                            <li>Implants</li>
                                            <li>Composite Bonding</li>
                                            <li>Fissure Sealants</li>
                                            <li>Surgical Extractions</li>
                                        </ul>
                                    </div>
                                    <div className="service-list">
                                        <h4>Specializations</h4>
                                        <ul className="clearfix">
                                            <li>Children Care</li>
                                            <li>Dental Care</li>
                                            <li>Oral and Maxillofacial Surgery </li>
                                            <li>Orthodontist</li>
                                            <li>Periodontist</li>
                                            <li>Prosthodontics</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="clinic-content">
                                        <h4 className="clinic-name">
                                            <a href="#">Smile Cute Dental Care Center</a>
                                        </h4>
                                        <p className="doc-speciality">
                                            MDS - Periodontology and Oral Implantology, BDS
                                        </p>
                                        <div className="rating">
                                            <i className="fas fa-star filled" />
                                            <i className="fas fa-star filled" />
                                            <i className="fas fa-star filled" />
                                            <i className="fas fa-star filled" />
                                            <i className="fas fa-star" />
                                            <span className="d-inline-block average-rating">
                                                (4)
                                            </span>
                                        </div>
                                        <div className="clinic-details mb-0">
                                            <h5 className="clinic-direction">
                                                {" "}
                                                <i className="fas fa-map-marker-alt" /> 2286 Sundown
                                                Lane, Austin, Texas 78749, USA <br />
                                                <a href="">Get Directions</a>
                                            </h5>
                                            <ul>
                                                <li>
                                                    <a
                                                        href="assets/img/features/feature-01.jpg"
                                                        data-fancybox="gallery2"
                                                    >
                                                        <img
                                                            src="https://helpful-bienenstitch-7914f7.netlify.app/assets/homw-42cda38c.jpg"
                                                            alt="Feature Image"
                                                        />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="assets/img/features/feature-02.jpg"
                                                        data-fancybox="gallery2"
                                                    >
                                                        <img
                                                            src="https://helpful-bienenstitch-7914f7.netlify.app/assets/feature02-141fd269.jpg"
                                                            alt="Feature Image"
                                                        />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="assets/img/features/feature-03.jpg"
                                                        data-fancybox="gallery2"
                                                    >
                                                        <img
                                                            src="https://helpful-bienenstitch-7914f7.netlify.app/assets/feature03-10a49a5c.jpg"
                                                            alt="Feature Image"
                                                        />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="assets/img/features/feature-04.jpg"
                                                        data-fancybox="gallery2"
                                                    >
                                                        <img
                                                            src="https://helpful-bienenstitch-7914f7.netlify.app/assets/feature04-31ddad90.jpg"
                                                            alt="Feature Image"
                                                        />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="clinic-timing">
                                        <div>
                                            <p className="timings-days">
                                                <span> Mon - Sat </span>
                                            </p>
                                            <p className="timings-times">
                                                <span>10:00 AM - 2:00 PM</span>
                                                <span>4:00 PM - 9:00 PM</span>
                                            </p>
                                        </div>
                                        <div>
                                            <p className="timings-days">
                                                <span>Sun</span>
                                            </p>
                                            <p className="timings-times">
                                                <span>10:00 AM - 2:00 PM</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="consult-price">$250</div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                            <div className="widget review-listing">
                                <ul className="comments-list">
                                    <li>
                                        <div className="comment">
                                            <img
                                                className="avatar avatar-sm rounded-circle"
                                                alt="User Image"
                                                src="https://helpful-bienenstitch-7914f7.netlify.app/assets/patient-da4fe188.jpg"
                                            />
                                            <div className="comment-body">
                                                <div className="meta-data">
                                                    <span className="comment-author">Richard Wilson</span>
                                                    <span className="comment-date">
                                                        Reviewed 2 Days ago
                                                    </span>
                                                    <div className="review-count rating">
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star" />
                                                    </div>
                                                </div>
                                                <p className="recommended">
                                                    <i className="far fa-thumbs-up" /> I recommend the
                                                    doctor
                                                </p>
                                                <p className="comment-content">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                    elit, sed do eiusmod tempor incididunt ut labore et
                                                    dolore magna aliqua. Ut enim ad minim veniam, quis
                                                    nostrud exercitation. Curabitur non nulla sit amet
                                                    nisl tempus
                                                </p>
                                                <div className="comment-reply">
                                                    <a className="comment-btn" href="#">
                                                        <i className="fas fa-reply" /> Reply
                                                    </a>
                                                    <p className="recommend-btn">
                                                        <span>Recommend?</span>
                                                        <a href="#" className="like-btn">
                                                            <i className="far fa-thumbs-up" /> Yes
                                                        </a>
                                                        <a href="#" className="dislike-btn">
                                                            <i className="far fa-thumbs-down" /> No
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="comments-reply">
                                            <li>
                                                <div className="comment">
                                                    <img
                                                        className="avatar avatar-sm rounded-circle"
                                                        alt="User Image"
                                                        src="https://helpful-bienenstitch-7914f7.netlify.app/assets/patient1-e854562e.jpg"
                                                    />
                                                    <div className="comment-body">
                                                        <div className="meta-data">
                                                            <span className="comment-author">
                                                                Charlene Reed
                                                            </span>
                                                            <span className="comment-date">
                                                                Reviewed 3 Days ago
                                                            </span>
                                                            <div className="review-count rating">
                                                                <i className="fas fa-star filled" />
                                                                <i className="fas fa-star filled" />
                                                                <i className="fas fa-star filled" />
                                                                <i className="fas fa-star filled" />
                                                                <i className="fas fa-star" />
                                                            </div>
                                                        </div>
                                                        <p className="comment-content">
                                                            Lorem ipsum dolor sit amet, consectetur
                                                            adipisicing elit, sed do eiusmod tempor incididunt
                                                            ut labore et dolore magna aliqua. Ut enim ad minim
                                                            veniam. Curabitur non nulla sit amet nisl tempus
                                                        </p>
                                                        <div className="comment-reply">
                                                            <a className="comment-btn" href="#">
                                                                <i className="fas fa-reply" /> Reply
                                                            </a>
                                                            <p className="recommend-btn">
                                                                <span>Recommend?</span>
                                                                <a href="#" className="like-btn">
                                                                    <i className="far fa-thumbs-up" /> Yes
                                                                </a>
                                                                <a href="#" className="dislike-btn">
                                                                    <i className="far fa-thumbs-down" /> No
                                                                </a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="comment">
                                            <img
                                                className="avatar avatar-sm rounded-circle"
                                                alt="User Image"
                                                src="https://helpful-bienenstitch-7914f7.netlify.app/assets/patient2-5d2a29be.jpg"
                                            />
                                            <div className="comment-body">
                                                <div className="meta-data">
                                                    <span className="comment-author">Travis Trimble</span>
                                                    <span className="comment-date">
                                                        Reviewed 4 Days ago
                                                    </span>
                                                    <div className="review-count rating">
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star" />
                                                    </div>
                                                </div>
                                                <p className="comment-content">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                    elit, sed do eiusmod tempor incididunt ut labore et
                                                    dolore magna aliqua. Ut enim ad minim veniam, quis
                                                    nostrud exercitation. Curabitur non nulla sit amet
                                                    nisl tempus
                                                </p>
                                                <div className="comment-reply">
                                                    <a className="comment-btn" href="#">
                                                        <i className="fas fa-reply" /> Reply
                                                    </a>
                                                    <p className="recommend-btn">
                                                        <span>Recommend?</span>
                                                        <a href="#" className="like-btn">
                                                            <i className="far fa-thumbs-up" /> Yes
                                                        </a>
                                                        <a href="#" className="dislike-btn">
                                                            <i className="far fa-thumbs-down" /> No
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="all-feedback text-center">
                                    <a href="#" className="btn btn-primary btn-sm">
                                        Show all feedback <strong>(167)</strong>
                                    </a>
                                </div>
                            </div>
                            <div className="write-review">
                                <h4>
                                    Write a review for <strong>Dr. Darren Elder</strong>
                                </h4>
                                <form>
                                    <div className="mb-3">
                                        <label className="mb-2">Review</label>
                                        <div className="star-rating">
                                            <input
                                                id="star-5"
                                                type="radio"
                                                name="rating"
                                                defaultValue="star-5"
                                            />
                                            <label htmlFor="star-5" title="5 stars">
                                                <i className="active fa fa-star" />
                                            </label>
                                            <input
                                                id="star-4"
                                                type="radio"
                                                name="rating"
                                                defaultValue="star-4"
                                            />
                                            <label htmlFor="star-4" title="4 stars">
                                                <i className="active fa fa-star" />
                                            </label>
                                            <input
                                                id="star-3"
                                                type="radio"
                                                name="rating"
                                                defaultValue="star-3"
                                            />
                                            <label htmlFor="star-3" title="3 stars">
                                                <i className="active fa fa-star" />
                                            </label>
                                            <input
                                                id="star-2"
                                                type="radio"
                                                name="rating"
                                                defaultValue="star-2"
                                            />
                                            <label htmlFor="star-2" title="2 stars">
                                                <i className="active fa fa-star" />
                                            </label>
                                            <input
                                                id="star-1"
                                                type="radio"
                                                name="rating"
                                                defaultValue="star-1"
                                            />
                                            <label htmlFor="star-1" title="1 star">
                                                <i className="active fa fa-star" />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="mb-2">Title of your review</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="If you could say it in one sentence, what would you say?"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="mb-2">Your review</label>
                                        <textarea
                                            id="review_desc"
                                            maxLength={100}
                                            className="form-control"
                                            defaultValue={""}
                                        />
                                        <div className="d-flex justify-content-between mt-3">
                                            <small className="text-muted">
                                                <span id="chars">100</span> characters remaining
                                            </small>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="mb-3">
                                        <div className="terms-accept">
                                            <div className="custom-checkbox">
                                                <input type="checkbox" id="terms_accept" />
                                                <label htmlFor="terms_accept">
                                                    I have read and accept{" "}
                                                    <a href="#">Terms &amp; Conditions</a>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="submit-section">
                                        <button
                                            type="submit"
                                            className="btn btn-primary submit-btn"
                                        >
                                            Add Review
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-other" role="tabpanel" aria-labelledby="pills-other-tab">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="widget business-widget">
                                        <div class="widget-content">
                                            <div class="listing-hours">
                                                <div class="listing-day current">
                                                    <div class="day">Today <span>5 Nov 2023</span></div>
                                                    <div class="time-items"><span class="open-status"><span class="badge bg-success-light">Open Now</span></span><span class="time">07:00 AM - 09:00 PM</span></div>
                                                </div>
                                                <div class="listing-day">
                                                    <div class="day">Monday</div>
                                                    <div class="time-items"><span class="time">07:00 AM - 09:00 PM</span></div>
                                                </div>
                                                <div class="listing-day">
                                                    <div class="day">Tuesday</div>
                                                    <div class="time-items"><span class="time">07:00 AM - 09:00 PM</span></div>
                                                </div>
                                                <div class="listing-day">
                                                    <div class="day">Wednesday</div>
                                                    <div class="time-items"><span class="time">07:00 AM - 09:00 PM</span></div>
                                                </div>
                                                <div class="listing-day">
                                                    <div class="day">Thursday</div>
                                                    <div class="time-items"><span class="time">07:00 AM - 09:00 PM</span></div>
                                                </div>
                                                <div class="listing-day">
                                                    <div class="day">Friday</div>
                                                    <div class="time-items"><span class="time">07:00 AM - 09:00 PM</span></div>
                                                </div>
                                                <div class="listing-day">
                                                    <div class="day">Saturday</div>
                                                    <div class="time-items"><span class="time">07:00 AM - 09:00 PM</span></div>
                                                </div>
                                                <div class="listing-day closed">
                                                    <div class="day">Sunday</div>
                                                    <div class="time-items"><span class="time"><span class="badge bg-danger-light">Closed</span></span></div>
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
            <Footer />
        </div>



    )
}

export default View_Profile