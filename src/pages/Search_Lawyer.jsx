import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../search-lawyer.css';
// import '../feather.css';

function Search_Lawyer() {
    return (
        <div>
            <div className="main-wrfapper search-page container-fluid">
                <Header />

                {/* Page Content */}
                <div className="doctor-content content mt-5">
                    <div className="container-fluid px-5" id='doctor-content-subpage'>
                        <h3 className="text-center py-5" aria-current="page" id='search-lawyer-title'>Search Lawyer</h3>

                        {/* Doctor Search List */}
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 map-view">
                                <div className="row">
                                    <div className="col-lg-3  theiaStickySidebar">
                                        <div className="filter-contents">
                                            <div className="filter-header">
                                                <h4 className="filter-title">Filter</h4>
                                            </div>
                                            <div className="filter-details">
                                                {/* Filter Grid */}
                                                <div className="filter-grid">
                                                    <h4>
                                                        <a href="search-2.html#collapseone" data-bs-toggle="collapse">Gender</a>
                                                    </h4>
                                                    <div id="collapseone" className="collapse show">
                                                        <div className="filter-collapse">
                                                            <ul>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="gender" />
                                                                        <span className="checkmark" />
                                                                        Male Gender
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="gender" />
                                                                        <span className="checkmark" />
                                                                        Female Gender
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /Filter Grid */}
                                                {/* Filter Grid */}
                                                <div className="filter-grid">
                                                    <h4>
                                                        <a href="search-2.html#collapsetwo" data-bs-toggle="collapse">Availability</a>
                                                    </h4>
                                                    <div id="collapsetwo" className="collapse show">
                                                        <div className="filter-collapse">
                                                            <ul>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="availability" />
                                                                        <span className="checkmark" />
                                                                        Available Today
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="availability" />
                                                                        <span className="checkmark" />
                                                                        Available Tomorrow
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="availability" />
                                                                        <span className="checkmark" />
                                                                        Available in Next 7 Days
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="availability" />
                                                                        <span className="checkmark" />
                                                                        Available in Next 30 Days
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /Filter Grid */}
                                                {/* Filter Grid */}
                                                <div className="filter-grid">
                                                    <h4>
                                                        <a href="search-2.html#collapsethree" data-bs-toggle="collapse">Consultation Fee</a>
                                                    </h4>
                                                    <div id="collapsethree" className="collapse show">
                                                        <div className="filter-collapse">
                                                            <div className="filter-content filter-content-slider">
                                                                <p>$10 <span>$10000</span></p>
                                                                <div className="slider-wrapper">
                                                                    <div id="price-range" />
                                                                </div>
                                                                <div className="price-wrapper">
                                                                    <h6>Price:
                                                                        <span>
                                                                            $<span id="pricerangemin" />
                                                                            - $<span id="pricerangemax" />
                                                                        </span>
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /Filter Grid */}
                                                {/* Filter Grid */}
                                                <div className="filter-grid">
                                                    <h4>
                                                        <a href="search-2.html#collapsefour" data-bs-toggle="collapse">Speciality</a>
                                                    </h4>
                                                    <div id="collapsefour" className="collapse show">
                                                        <div className="filter-collapse">
                                                            <ul>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="speciality" />
                                                                        <span className="checkmark" />
                                                                        Urology
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="speciality" />
                                                                        <span className="checkmark" />
                                                                        Ophthalmology
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="speciality" />
                                                                        <span className="checkmark" />
                                                                        Cardiology
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /Filter Grid */}
                                                {/* Filter Grid */}
                                                <div className="filter-grid">
                                                    <h4>
                                                        <a href="search-2.html#collapsefive" data-bs-toggle="collapse">Experience</a>
                                                    </h4>
                                                    <div id="collapsefive" className=" collapse show">
                                                        <div className="filter-collapse">
                                                            <ul>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="experience" />
                                                                        <span className="checkmark" />
                                                                        1-5 Years
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="experience" />
                                                                        <span className="checkmark" />
                                                                        5+ Years
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /Filter Grid */}
                                                {/* Filter Grid */}
                                                <div className="filter-grid">
                                                    <h4>
                                                        <a href="search-2.html#collapsesix" data-bs-toggle="collapse">Online Consultation</a>
                                                    </h4>
                                                    <div id="collapsesix" className="collapse show">
                                                        <div className="filter-collapse">
                                                            <ul>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="online" />
                                                                        <span className="checkmark" />
                                                                        <i className="feather-video online-icon" /> Video Call
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="online" />
                                                                        <span className="checkmark" />
                                                                        <i className="feather-mic online-icon" /> Audio Call
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="online" />
                                                                        <span className="checkmark" />
                                                                        <i className="feather-message-square online-icon" /> Chat
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="online" />
                                                                        <span className="checkmark" />
                                                                        <i className="feather-users online-icon" /> Instant Consulting
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /Filter Grid */}
                                                {/* Filter Grid */}
                                                <div className="filter-grid">
                                                    <h4>
                                                        <a href="search-2.html#collapseseven" data-bs-toggle="collapse">By Rating</a>
                                                    </h4>
                                                    <div id="collapseseven" className="collapse show">
                                                        <div className="filter-collapse">
                                                            <ul>
                                                                <li>
                                                                    <div className="custom_check rating_custom_check d-inline-flex">
                                                                        <input type="checkbox" name="online" />
                                                                        <span className="checkmark" />
                                                                        <div className="rating">
                                                                            <i className="fas fa-star filled" />
                                                                            <i className="fas fa-star filled" />
                                                                            <i className="fas fa-star filled" />
                                                                            <i className="fas fa-star filled" />
                                                                            <i className="fas fa-star filled" />
                                                                            <span className="rating-count">(40)</span>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="custom_check rating_custom_check d-inline-flex">
                                                                        <input type="checkbox" name="online" />
                                                                        <span className="checkmark" />
                                                                        <div className="rating">
                                                                            <i className="fas fa-star filled" />
                                                                            <i className="fas fa-star filled" />
                                                                            <i className="fas fa-star filled" />
                                                                            <i className="fas fa-star filled" />
                                                                            <i className="fas fa-star" />
                                                                            <span className="rating-count">(35)</span>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="custom_check rating_custom_check d-inline-flex">
                                                                        <input type="checkbox" name="online" />
                                                                        <span className="checkmark" />
                                                                        <div className="rating">
                                                                            <i className="fas fa-star filled" />
                                                                            <i className="fas fa-star filled" />
                                                                            <i className="fas fa-star filled" />
                                                                            <i className="fas fa-star" />
                                                                            <i className="fas fa-star" />
                                                                            <span className="rating-count">(20)</span>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="custom_check rating_custom_check d-inline-flex">
                                                                        <input type="checkbox" name="online" />
                                                                        <span className="checkmark" />
                                                                        <div className="rating">
                                                                            <i className="fas fa-star filled" />
                                                                            <i className="fas fa-star filled" />
                                                                            <i className="fas fa-star" />
                                                                            <i className="fas fa-star" />
                                                                            <i className="fas fa-star" />
                                                                            <span className="rating-count">(10)</span>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="custom_check rating_custom_check d-inline-flex">
                                                                        <input type="checkbox" name="online" />
                                                                        <span className="checkmark" />
                                                                        <div className="rating">
                                                                            <i className="fas fa-star filled" />
                                                                            <i className="fas fa-star" />
                                                                            <i className="fas fa-star" />
                                                                            <i className="fas fa-star" />
                                                                            <i className="fas fa-star" />
                                                                            <span className="rating-count">(05)</span>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /Filter Grid */}
                                                {/* Filter Grid */}
                                                <div className="filter-grid">
                                                    <h4>
                                                        <a href="search-2.html#collapseeight" data-bs-toggle="collapse">Languages</a>
                                                    </h4>
                                                    <div id="collapseeight" className="collapse show">
                                                        <div className="filter-collapse">
                                                            <ul>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="language" />
                                                                        <span className="checkmark" />
                                                                        English
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="language" />
                                                                        <span className="checkmark" />
                                                                        French
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="language" />
                                                                        <span className="checkmark" />
                                                                        Spanish
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="language" />
                                                                        <span className="checkmark" />
                                                                        German
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /Filter Grid */}
                                                {/* Filter Btn */}
                                                <div className="filter-btn apply-btn">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <a href="javascript:void(0);" className="btn btn-primary">Apply</a>
                                                        </div>
                                                        <div className="col-6">
                                                            <a href="javascript:void(0);" className="btn btn-outline-primary">Reset</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /Filter Btn */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="doctor-filter-info">
                                            <div className="doctor-filter-inner">
                                                <div>
                                                    <div className="doctors-found">
                                                        <p><span>100 Doctors found for:</span> Dentist in San francisco, California</p>
                                                    </div>
                                                    <div className="doctor-filter-availability">
                                                        <p>Availability</p>
                                                        <div className="status-toggle status-tog">
                                                            <input type="checkbox" id="status_6" className="check" />
                                                            <label htmlFor="status_6" className="checktoggle">checkbox</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="doctor-filter-option">
                                                    <div className="doctor-filter-sort">
                                                        <p>Sort</p>
                                                        <div className="doctor-filter-select">
                                                            <select className="">
                                                                <option>A to Z</option>
                                                                <option>B to Z</option>
                                                                <option>C to Z</option>
                                                                <option>D to Z</option>
                                                                <option>E to Z</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="doctor-filter-sort">
                                                        <p className="filter-today d-flex align-items-center">
                                                            <i className="feather-calendar" /> Today 10 Aug to 20 Aug
                                                        </p>
                                                    </div>
                                                    <div className="doctor-filter-sort">
                                                        <ul className="nav">
                                                            <li>
                                                                <a href="javascript:void(0);" id="map-list">
                                                                    <iconify-icon icon="lucide:map-pin"></iconify-icon>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="https://doccure.dreamstechnologies.com/html/template/doctor-search-grid.html">
                                                                    <iconify-icon icon="mingcute:grid-line"></iconify-icon>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="search-2.html" className="active">
                                                                    <iconify-icon icon="material-symbols:list" style={{ color: '#fff', fontSize: '22px' }}></iconify-icon>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card doctor-card">
                                            <div className="card-body">
                                                <div className="doctor-widget-one">
                                                    <div className="doc-info-left">
                                                        <div className="doctor-img">
                                                            <a href="https://doccure.dreamstechnologies.com/html/template/doctor-profile.html">
                                                                <img src="https://doccure.dreamstechnologies.com/html/template/assets/img/doctors/doctor-13.jpg" className="img-fluid" alt="John Doe" />
                                                            </a>
                                                            <div className="favourite-btn">
                                                                <a href="javascript:void(0)" className="favourite-icon">
                                                                    <i className="fas fa-heart" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="doc-info-cont">
                                                            <h4 className="doc-name">
                                                                <a href="https://doccure.dreamstechnologies.com/html/template/doctor-profile.html">Dr.John Doe</a>
                                                                <iconify-icon icon="material-symbols:check-circle" id="circle-check-icon"></iconify-icon>
                                                            </h4>
                                                            <p className="doc-speciality">MBBS, Dentist</p>
                                                            <div className="clinic-details">
                                                                <p className="doc-location">
                                                                    <iconify-icon icon="lucide:map-pin" id="available-icon"></iconify-icon>
                                                                    <span>0.9</span> mi - Newyork, USA <a href="javascript:void(0);">Get Direction</a>
                                                                </p>
                                                                <p className="doc-location">
                                                                    <iconify-icon icon="dashicons:awards" id="available-icon"></iconify-icon> 20 Years of Experience
                                                                </p>
                                                            </div>
                                                            <div className="reviews-ratings">
                                                                <p>
                                                                    <span><i className="fas fa-star" /> 4.5</span> (35 Reviews)
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="doc-info-right">
                                                        <div className="clini-infos">
                                                            <ul>
                                                                <li>
                                                                    <iconify-icon icon="mdi:clock" id='available-icon'></iconify-icon>
                                                                    <span className="available-date available-today">Available Today</span>
                                                                </li>
                                                                <li><iconify-icon icon="fa-solid:thumbs-up" id="available-icon"></iconify-icon> 98% <span className="votes">(252 Votes)</span></li>
                                                                <li><iconify-icon icon="lucide:dollar-sign" id="available-icon"></iconify-icon> $1500 <iconify-icon icon="ph:info" id="available-info-icon"></iconify-icon></li>
                                                            </ul>
                                                        </div>
                                                        <div className="clinic-booking book-appoint">
                                                            <a className="btn btn-primary" href="https://doccure.dreamstechnologies.com/html/template/booking.html">Book Appointment</a>
                                                            <a className="btn btn-primary-light" href="https://doccure.dreamstechnologies.com/html/template/booking-2.html">Book Online Consultation</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card doctor-card">
                                            <div className="card-body">
                                                <div className="doctor-widget-one">
                                                    <div className="doc-info-left">
                                                        <div className="doctor-img">
                                                            <a href="https://doccure.dreamstechnologies.com/html/template/doctor-profile.html">
                                                                <img src="https://doccure.dreamstechnologies.com/html/template/assets/img/doctors/doctor-14.jpg" className="img-fluid" alt="Darren Elder" />
                                                            </a>
                                                            <div className="favourite-btn">
                                                                <a href="javascript:void(0)" className="favourite-icon">
                                                                    <i className="fas fa-heart" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="doc-info-cont">
                                                            <h4 className="doc-name">
                                                                <a href="https://doccure.dreamstechnologies.com/html/template/doctor-profile.html">Dr. Darren Elder</a>
                                                                <iconify-icon icon="material-symbols:check-circle" id="circle-check-icon"></iconify-icon>
                                                            </h4>
                                                            <p className="doc-speciality">BDS, MDS - Oral &amp; Maxillofacial Surgery</p>
                                                            <div className="clinic-details">
                                                                <p className="doc-location">
                                                                    <iconify-icon icon="lucide:map-pin" id="available-icon"></iconify-icon>
                                                                    1.1 mi - Georgia, USA <a href="javascript:void(0);">Get Direction</a>
                                                                </p>
                                                                <p className="doc-location">
                                                                    <iconify-icon icon="dashicons:awards" id="available-icon"></iconify-icon> 15 Years of Experience
                                                                </p>
                                                            </div>
                                                            <div className="reviews-ratings">
                                                                <p>
                                                                    <span><i className="fas fa-star" /> 4.3</span> (22 Reviews)
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="doc-info-right">
                                                        <div className="clini-infos">
                                                            <ul>
                                                                <li>
                                                                    <iconify-icon icon="mdi:clock" id='available-icon'></iconify-icon>
                                                                    <span className="available-date available-tomorrow">Available Tomorrow</span>
                                                                </li>
                                                                <li><iconify-icon icon="fa-solid:thumbs-up" id="available-icon"></iconify-icon> 90% <span className="votes">(380 Votes)</span></li>
                                                                <li><iconify-icon icon="lucide:dollar-sign" id="available-icon"></iconify-icon> $2800 <iconify-icon icon="ph:info" id="available-info-icon"></iconify-icon></li>
                                                            </ul>
                                                        </div>
                                                        <div className="clinic-booking book-appoint">
                                                            <a className="btn btn-primary" href="https://doccure.dreamstechnologies.com/html/template/booking.html">Book Appointment</a>
                                                            <a className="btn btn-primary-light" href="https://doccure.dreamstechnologies.com/html/template/booking-2.html">Book Online Consultation</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card doctor-card">
                                            <div className="card-body">
                                                <div className="doctor-widget-one">
                                                    <div className="doc-info-left">
                                                        <div className="doctor-img">
                                                            <a href="https://doccure.dreamstechnologies.com/html/template/doctor-profile.html">
                                                                <img src="https://doccure.dreamstechnologies.com/html/template/assets/img/doctors/doctor-15.jpg" className="img-fluid" alt="Sofia Brient" />
                                                            </a>
                                                            <div className="favourite-btn">
                                                                <a href="javascript:void(0)" className="favourite-icon">
                                                                    <i className="fas fa-heart" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="doc-info-cont">
                                                            <h4 className="doc-name">
                                                                <a href="https://doccure.dreamstechnologies.com/html/template/doctor-profile.html">Dr. Sofia Brient</a>
                                                                <iconify-icon icon="material-symbols:check-circle" id="circle-check-icon"></iconify-icon>
                                                            </h4>
                                                            <p className="doc-speciality">MBBS, Dentist</p>
                                                            <div className="clinic-details">
                                                                <p className="doc-location">
                                                                    <iconify-icon icon="lucide:map-pin" id="available-icon"></iconify-icon>
                                                                    <span>0.9</span> mi - Newyork, USA <a href="javascript:void(0);">Get Direction</a>
                                                                </p>
                                                                <p className="doc-location">
                                                                    <iconify-icon icon="dashicons:awards" id="available-icon"></iconify-icon> 20 Years of Experience
                                                                </p>
                                                            </div>
                                                            <div className="reviews-ratings">
                                                                <p>
                                                                    <span><i className="fas fa-star" /> 4.5</span> (35 Reviews)
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="doc-info-right">
                                                        <div className="clini-infos">
                                                            <ul>
                                                                <li>
                                                                    <iconify-icon icon="mdi:clock" id='available-icon'></iconify-icon>
                                                                    <span className="available-date available-today">Available Today</span>
                                                                </li>
                                                                <li><iconify-icon icon="fa-solid:thumbs-up" id="available-icon"></iconify-icon> 98% <span className="votes">(252 Votes)</span></li>
                                                                <li><iconify-icon icon="lucide:dollar-sign" id="available-icon"></iconify-icon> $1500 <iconify-icon icon="ph:info" id="available-info-icon"></iconify-icon></li>
                                                            </ul>
                                                        </div>
                                                        <div className="clinic-booking book-appoint">
                                                            <a className="btn btn-primary" href="https://doccure.dreamstechnologies.com/html/template/booking.html">Book Appointment</a>
                                                            <a className="btn btn-primary-light" href="https://doccure.dreamstechnologies.com/html/template/booking-2.html">Book Online Consultation</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card doctor-card">
                                            <div className="card-body">
                                                <div className="doctor-widget-one">
                                                    <div className="doc-info-left">
                                                        <div className="doctor-img">
                                                            <a href="https://doccure.dreamstechnologies.com/html/template/doctor-profile.html">
                                                                <img src="https://doccure.dreamstechnologies.com/html/template/assets/img/doctors/doctor-16.jpg" className="img-fluid" alt="Johny Rita" />
                                                            </a>
                                                            <div className="favourite-btn">
                                                                <a href="javascript:void(0)" className="favourite-icon">
                                                                    <i className="fas fa-heart" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="doc-info-cont">
                                                            <h4 className="doc-name">
                                                                <a href="https://doccure.dreamstechnologies.com/html/template/doctor-profile.html">Dr. Johny Rita</a>
                                                                <iconify-icon icon="material-symbols:check-circle" id="circle-check-icon"></iconify-icon>
                                                            </h4>
                                                            <p className="doc-speciality">MBBS, Dentist</p>
                                                            <div className="clinic-details">
                                                                <p className="doc-location">
                                                                    <iconify-icon icon="lucide:map-pin" id="available-icon"></iconify-icon>
                                                                    <span>0.9</span> mi - Newyork, USA <a href="javascript:void(0);">Get Direction</a>
                                                                </p>
                                                                <p className="doc-location">
                                                                    <iconify-icon icon="dashicons:awards" id="available-icon"></iconify-icon> 20 Years of Experience
                                                                </p>
                                                            </div>
                                                            <div className="reviews-ratings">
                                                                <p>
                                                                    <span><i className="fas fa-star" /> 4.5</span> (35 Reviews)
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="doc-info-right">
                                                        <div className="clini-infos">
                                                            <ul>
                                                                <li>
                                                                    <iconify-icon icon="mdi:clock" id='available-icon'></iconify-icon>
                                                                    <span className="available-date available-today">Available Today</span>
                                                                </li>
                                                                <li><iconify-icon icon="fa-solid:thumbs-up" id="available-icon"></iconify-icon> 98% <span className="votes">(252 Votes)</span></li>
                                                                <li><iconify-icon icon="lucide:dollar-sign" id="available-icon"></iconify-icon> $1500 <iconify-icon icon="ph:info" id="available-info-icon"></iconify-icon></li>
                                                            </ul>
                                                        </div>
                                                        <div className="clinic-booking book-appoint">
                                                            <a className="btn btn-primary" href="https://doccure.dreamstechnologies.com/html/template/booking.html">Book Appointment</a>
                                                            <a className="btn btn-primary-light" href="https://doccure.dreamstechnologies.com/html/template/booking-2.html">Book Online Consultation</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card doctor-card">
                                            <div className="card-body">
                                                <div className="doctor-widget-one">
                                                    <div className="doc-info-left">
                                                        <div className="doctor-img">
                                                            <a href="https://doccure.dreamstechnologies.com/html/template/doctor-profile.html">
                                                                <img src="https://doccure.dreamstechnologies.com/html/template/assets/img/doctors/doctor-17.jpg" className="img-fluid" alt="Deborah Angel" />
                                                            </a>
                                                            <div className="favourite-btn">
                                                                <a href="javascript:void(0)" className="favourite-icon">
                                                                    <i className="fas fa-heart" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="doc-info-cont">
                                                            <h4 className="doc-name">
                                                                <a href="https://doccure.dreamstechnologies.com/html/template/doctor-profile.html">Dr. Deborah Angel</a>
                                                                <iconify-icon icon="material-symbols:check-circle" id="circle-check-icon"></iconify-icon>
                                                            </h4>
                                                            <p className="doc-speciality">MBBS, Dentist</p>
                                                            <div className="clinic-details">
                                                                <p className="doc-location">
                                                                    <iconify-icon icon="lucide:map-pin" id="available-icon"></iconify-icon>
                                                                    <span>0.9</span> mi - Newyork, USA <a href="javascript:void(0);">Get Direction</a>
                                                                </p>
                                                                <p className="doc-location">
                                                                    <iconify-icon icon="dashicons:awards" id="available-icon"></iconify-icon> 20 Years of Experience
                                                                </p>
                                                            </div>
                                                            <div className="reviews-ratings">
                                                                <p>
                                                                    <span><i className="fas fa-star" /> 4.5</span> (35 Reviews)
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="doc-info-right">
                                                        <div className="clini-infos">
                                                            <ul>
                                                                <li>
                                                                    <iconify-icon icon="mdi:clock" id='available-icon'></iconify-icon>
                                                                    <span className="available-date available-today">Available Today</span>
                                                                </li>
                                                                <li><iconify-icon icon="fa-solid:thumbs-up" id="available-icon"></iconify-icon> 98% <span className="votes">(252 Votes)</span></li>
                                                                <li><iconify-icon icon="lucide:dollar-sign" id="available-icon"></iconify-icon> $1500 <iconify-icon icon="ph:info" id="available-info-icon"></iconify-icon></li>
                                                            </ul>
                                                        </div>
                                                        <div className="clinic-booking book-appoint">
                                                            <a className="btn btn-primary" href="https://doccure.dreamstechnologies.com/html/template/booking.html">Book Appointment</a>
                                                            <a className="btn btn-primary-light" href="https://doccure.dreamstechnologies.com/html/template/booking-2.html">Book Online Consultation</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="blog-pagination rev-page">
                                                    <nav>
                                                        <ul className="pagination justify-content-center mt-5">
                                                            <li className="page-item disabled">
                                                                <a className="page-link page-prev" href="search-2.html#" tabIndex={-1}><iconify-icon icon="ant-design:double-left-outlined" id="pagination-control-icon"></iconify-icon> PREV</a>
                                                            </li>
                                                            <li className="page-item active">
                                                                <a className="page-link" href="search-2.html#">1</a>
                                                            </li>
                                                            <li className="page-item">
                                                                <a className="page-link" href="search-2.html#">2</a>
                                                            </li>
                                                            <li className="page-item">
                                                                <a className="page-link" href="search-2.html#">...</a>
                                                            </li>
                                                            <li className="page-item">
                                                                <a className="page-link" href="search-2.html#">10</a>
                                                            </li>
                                                            <li className="page-item">
                                                                <a className="page-link page-next" href="search-2.html#">NEXT <iconify-icon icon="ant-design:double-right-outlined" id="pagination-control-icon"></iconify-icon></a>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-12 theiaStickySidebar map-right">
                                <div id="map" className="map-listing" />
                            </div>
                        </div>
                        {/* /Doctor Search List */}
                    </div>
                </div>
                {/* /Page Content */}

                {/* Cursor */}
                <div className="mouse-cursor cursor-outer" />
                <div className="mouse-cursor cursor-inner" />
                {/* /Cursor */}
            </div>



            <Footer />
        </div>




    )
}

export default Search_Lawyer