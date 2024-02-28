import React, { useState } from 'react';
import '../availability.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Availability() {
    const [value, onChange] = useState(new Date());
    return (
        <div>
            <Header />
            <div className="content content-space" id='availability-container' style={{ minHeight: "349.906px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="booking-header">
                                <h4 className="booking-title">Select Available Slots</h4>
                            </div>
                           
                            <div className="card booking-card">
                                <div className="card-body time-slot-card-body">
                                    <div className="booking-date-slider">
                                    <Calendar onChange={onChange} value={value} />
                                    </div>
                                    <div className="row mt-5">
                                        <div className="col-lg-4 col-md-4">
                                            <div className="time-slot time-slot-blk">
                                                <h4>Morning</h4>
                                                <div className="time-slot-list">
                                                    <ul>
                                                        <li>
                                                            <a className="timing" href="javascript:void(0);">
                                                                <span>
                                                                    <i className="feather-clock" /> 09:00 - 09:30
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="timing" href="javascript:void(0);">
                                                                <span>
                                                                    <i className="feather-clock" /> 10:00 - 10:30
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li className="time-slot-open time-slot-morning">
                                                            <a className="timing" href="javascript:void(0);">
                                                                <span>
                                                                    <i className="feather-clock" /> 11:00 - 11:30
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <div className="load-more-timings load-more-morning">
                                                                <a href="javascript:void(0);">Load More</a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <div className="time-slot time-slot-blk">
                                                <h4>Afternoon</h4>
                                                <div className="time-slot-list">
                                                    <ul>
                                                        <li>
                                                            <a className="timing" href="javascript:void(0);">
                                                                <span>
                                                                    <i className="feather-clock" /> 12:00 - 12:30
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="timing active" href="javascript:void(0);">
                                                                <span>
                                                                    <i className="feather-clock" /> 01:00 - 01:30
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li className="time-slot-open time-slot-afternoon">
                                                            <a className="timing" href="javascript:void(0);">
                                                                <span>
                                                                    <i className="feather-clock" /> 02:30 - 03:00
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <div className="load-more-timings load-more-afternoon">
                                                                <a href="javascript:void(0);">Load More</a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <div className="time-slot time-slot-blk">
                                                <h4>Evening</h4>
                                                <div className="time-slot-list">
                                                    <ul>
                                                        <li>
                                                            <a className="timing" href="javascript:void(0);">
                                                                <span>
                                                                    <i className="feather-clock" /> 03:00 - 03:30
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="timing" href="javascript:void(0);">
                                                                <span>
                                                                    <i className="feather-clock" /> 04:00 - 04:30
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li className="time-slot-open time-slot-evening">
                                                            <a className="timing" href="javascript:void(0);">
                                                                <span>
                                                                    <i className="feather-clock" /> 05:00 - 05:30
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <div className="load-more-timings load-more-evening">
                                                                <a href="javascript:void(0);">Load More</a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="booking-btn">
                                <a
                                    href="paitent-details.html"
                                    className="btn btn-primary prime-btn justify-content-center align-items-center"
                                >
                                    Next <i className="feather-arrow-right-circle" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="booking-header">
                                <h4 className="booking-title">Booking Summary</h4>
                            </div>
                            <div className="card booking-card">
                                <div className="card-body booking-card-body">
                                    <div className="booking-doctor-details">
                                        <div className="booking-doctor-left">
                                            <div className="booking-doctor-img">
                                                <a href="doctor-profile.html">
                                                    <img
                                                        src="https://doccure.dreamstechnologies.com/html/template/assets/img/doctors/doctor-01.jpg"
                                                        alt="John Doe"
                                                    />
                                                </a>
                                            </div>
                                            <div className="booking-doctor-info mt-3">
                                                <h4>
                                                    <a href="doctor-profile.html">Dr. John Doe</a>
                                                </h4>
                                                <p>MBBS, Dentist</p>
                                            </div>
                                        </div>
                                        <div className="booking-doctor-right">
                                            <p>
                                                <i className="fas fa-check-circle" />
                                                <a href="doctor-profile-settings.html">Edit</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card booking-card">
                                <div className="card-body booking-card-body">
                                    <div className="booking-doctor-details">
                                        <div className="booking-device">
                                            <div className="booking-device-img">
                                                <img
                                                    src="https://doccure.dreamstechnologies.com/html/template/assets/img/icons/device-message.svg"
                                                    alt="device-message"
                                                />
                                            </div>
                                            <div className="booking-doctor-info">
                                                <h3>We can help you</h3>
                                                <p className="device-text">
                                                    Call us +1 888-888-8888 (or) chat with our customer support
                                                    team.
                                                </p>
                                                <a href="chat.html" className="btn">
                                                    Chat With Us
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card booking-card mb-0">
                                <div className="card-body booking-card-body">
                                    <div className="booking-doctor-details">
                                        <div className="booking-device">
                                            <div className="booking-device-img">
                                                <img
                                                    src="https://doccure.dreamstechnologies.com/html/template/assets/img/icons/smart-phone.svg"
                                                    alt="smart-phone"
                                                />
                                            </div>
                                            <div className="booking-doctor-info">
                                                <h3>Get the App</h3>
                                                <p className="device-text">
                                                    Download our app for better experience and for more feature
                                                </p>
                                                <div className="app-images">
                                                    <a href="javascript:void(0);">
                                                        <img src="https://doccure.dreamstechnologies.com/html/template/assets/img/google-img.svg" alt="google-image" />
                                                    </a>
                                                    <a href="javascript:void(0);">
                                                        <img src="https://doccure.dreamstechnologies.com/html/template/assets/img/app-img.svg" alt="app-image" />
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
            <Footer />
        </div>
    )
}

export default Availability