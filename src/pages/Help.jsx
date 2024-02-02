import React from 'react';
import '../assets/css/help.css';
import Header from '../components/Header';
import Footer from './../components/Footer';

function Help() {
    return (
        <div id="main-wrapper">
            {/* Header
        ============================================= */}
            <Header />
            {/* Header end */}
            {/* Page Header
        ============================================= */}
            <section className="hero-wrap section" id='hero-all-wrap'>
                <div className="hero-mask opacity-8 bg-secondary" />
                <div
                    className="hero-bg"
                    style={{ backgroundImage: 'url("https://harnishdesign.net/demo/html/quickai/images/bg/image-2.jpg")' }}
                />
                <div className="hero-content my-5">
                    <div className="container">
                        <div className="row align-items-center text-center">
                            <div className="col-12">
                                <h1 className="text-10 text-white mb-3">How can we help?</h1>
                            </div>
                            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                                <div className="input-group">
                                    <input
                                        className="form-control shadow-none border-0 p-4"
                                        type="search"
                                        id="search-input"
                                        placeholder="Search for a topic or question"
                                        defaultValue=""
                                    />
                                    <button className="btn btn-primary shadow-none px-4" type="button">
                                        <i className="fa fa-search" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Page Header end */}
            {/* Content
        ============================================= */}
            <div id="content">
                {/* Main Topics
          ============================================= */}
                <section className="section py-3 mt-3 py-md-5 mt-md-5" style={{ background: '#00aaef' }}>
                    <div className="container">
                        <h2 className="text-9 text-center text-white my-5">What do you need help with?</h2>
                        <div className="row g-4">
                            <div className="col-sm-6 col-lg-3">
                                <div className="card shadow-sm border-0 mb-5">
                                    <div className="card-body">
                                        <div className="text-center my-4">
                                            {" "}
                                            <span className="text-16 text-primary">
                                                <i className="fas fa-life-ring" />
                                            </span>
                                            <h5 className="mt-1">General Help</h5>
                                        </div>
                                    </div>
                                    <ul className="list-group list-group-flush border-top border-bottom">
                                        <a className="list-group-item list-group-item-action" href="#">
                                            Persius interesset his et
                                        </a>{" "}
                                        <a className="list-group-item list-group-item-action" href="#">
                                            Quot quidam persequeris
                                        </a>{" "}
                                        <a className="list-group-item list-group-item-action" href="#">
                                            Mutat tacimates id sit.{" "}
                                        </a>
                                    </ul>
                                    <div className="card-footer position-relative">
                                        {" "}
                                        <a href="#" className="btn-link stretched-link">
                                            <span className="me-2">
                                                <i className="fas fa-file-alt" />
                                            </span>
                                            33 Topics{" "}
                                            <span className="float-end">
                                                <i className="fas fa-arrow-right" />
                                            </span>
                                        </a>{" "}
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="card shadow-sm border-0 mb-5">
                                    <div className="card-body">
                                        <div className="text-center my-4">
                                            {" "}
                                            <span className="text-16 text-primary">
                                                <i className="fas fa-bolt" />
                                            </span>
                                            <h5 className="mt-1">Bill to Doctors &amp; Billings </h5>
                                        </div>
                                    </div>
                                    <ul className="list-group list-group-flush border-top border-bottom">
                                        <a className="list-group-item list-group-item-action" href="#">
                                            Persius interesset his et
                                        </a>{" "}
                                        <a className="list-group-item list-group-item-action" href="#">
                                            Quot quidam persequeris
                                        </a>{" "}
                                        <a className="list-group-item list-group-item-action" href="#">
                                            Mutat tacimates id sit.{" "}
                                        </a>
                                    </ul>
                                    <div className="card-footer position-relative">
                                        {" "}
                                        <a href="#" className="btn-link stretched-link">
                                            <span className="me-2">
                                                <i className="fas fa-file-alt" />
                                            </span>
                                            25 Topics{" "}
                                            <span className="float-end">
                                                <i className="fas fa-arrow-right" />
                                            </span>
                                        </a>{" "}
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="card shadow-sm border-0 mb-5">
                                    <div className="card-body">
                                        <div className="text-center my-4">
                                            {" "}
                                            <span className="text-16 text-primary">
                                                <i className="fas fa-clipboard-check" />
                                            </span>
                                            <h5 className="mt-1">Patient &amp; Billings</h5>
                                        </div>
                                    </div>
                                    <ul className="list-group list-group-flush border-top border-bottom">
                                        <a className="list-group-item list-group-item-action" href="#">
                                            Persius interesset his et
                                        </a>{" "}
                                        <a className="list-group-item list-group-item-action" href="#">
                                            Quot quidam persequeris
                                        </a>{" "}
                                        <a className="list-group-item list-group-item-action" href="#">
                                            Mutat tacimates id sit.{" "}
                                        </a>
                                    </ul>
                                    <div className="card-footer position-relative">
                                        {" "}
                                        <a href="#" className="btn-link stretched-link">
                                            <span className="me-2">
                                                <i className="fas fa-file-alt" />
                                            </span>
                                            42 Topics{" "}
                                            <span className="float-end">
                                                <i className="fas fa-arrow-right" />
                                            </span>
                                        </a>{" "}
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="card shadow-sm border-0 mb-5">
                                    <div className="card-body">
                                        <div className="text-center my-4">
                                            {" "}
                                            <span className="text-16 text-primary">
                                                <i className="fas fa-user-circle" />
                                            </span>
                                            <h5 className="mt-1">My Account</h5>
                                        </div>
                                    </div>
                                    <ul className="list-group list-group-flush border-top border-bottom">
                                        <a className="list-group-item list-group-item-action" href="#">
                                            Persius interesset his et
                                        </a>{" "}
                                        <a className="list-group-item list-group-item-action" href="#">
                                            Quot quidam persequeris
                                        </a>{" "}
                                        <a className="list-group-item list-group-item-action" href="#">
                                            Mutat tacimates id sit.{" "}
                                        </a>
                                    </ul>
                                    <div className="card-footer position-relative">
                                        {" "}
                                        <a href="#" className="btn-link stretched-link">
                                            <span className="me-2">
                                                <i className="fas fa-file-alt" />
                                            </span>
                                            32 Topics{" "}
                                            <span className="float-end">
                                                <i className="fas fa-arrow-right" />
                                            </span>
                                        </a>{" "}
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="card shadow-sm border-0 mb-5">
                                    <div className="card-body">
                                        <div className="text-center my-4">
                                            {" "}
                                            <span className="text-16 text-primary">
                                                <i className="fas fa-money-check-alt" />
                                            </span>
                                            <h5 className="mt-1">Health Providers</h5>
                                        </div>
                                    </div>
                                    <ul className="list-group list-group-flush border-top border-bottom">
                                        <a className="list-group-item list-group-item-action" href="#">
                                            Persius interesset his et
                                        </a>{" "}
                                        <a className="list-group-item list-group-item-action" href="#">
                                            Quot quidam persequeris
                                        </a>{" "}
                                        <a className="list-group-item list-group-item-action" href="#">
                                            Mutat tacimates id sit.{" "}
                                        </a>
                                    </ul>
                                    <div className="card-footer position-relative">
                                        {" "}
                                        <a href="#" className="btn-link stretched-link">
                                            <span className="me-2">
                                                <i className="fas fa-file-alt" />
                                            </span>
                                            14 Topics{" "}
                                            <span className="float-end">
                                                <i className="fas fa-arrow-right" />
                                            </span>
                                        </a>{" "}
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="card shadow-sm border-0 mb-5">
                                    <div className="card-body">
                                        <div className="text-center my-4">
                                            {" "}
                                            <span className="text-16 text-primary">
                                                <i className="fas fa-times-circle" />
                                            </span>
                                            <h5 className="mt-1">Payment &amp; Cancellation</h5>
                                        </div>
                                    </div>
                                    <ul className="list-group list-group-flush border-top border-bottom">
                                        <a className="list-group-item list-group-item-action" href="#">
                                            Persius interesset his et
                                        </a>{" "}
                                        <a className="list-group-item list-group-item-action" href="#">
                                            Quot quidam persequeris
                                        </a>{" "}
                                        <a className="list-group-item list-group-item-action" href="#">
                                            Mutat tacimates id sit.{" "}
                                        </a>
                                    </ul>
                                    <div className="card-footer position-relative">
                                        {" "}
                                        <a href="#" className="btn-link stretched-link">
                                            <span className="me-2">
                                                <i className="fas fa-file-alt" />
                                            </span>
                                            11 Topics{" "}
                                            <span className="float-end">
                                                <i className="fas fa-arrow-right" />
                                            </span>
                                        </a>{" "}
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="card shadow-sm border-0 mb-5">
                                    <div className="card-body">
                                        <div className="text-center my-4">
                                            {" "}
                                            <span className="text-16 text-primary">
                                                <i className="fas fa-gift" />
                                            </span>
                                            <h5 className="mt-1">Reffral Rewards</h5>
                                        </div>
                                    </div>
                                    <ul className="list-group list-group-flush border-top border-bottom">
                                        <a className="list-group-item list-group-item-action" href="#">
                                            Persius interesset his et
                                        </a>{" "}
                                        <a className="list-group-item list-group-item-action" href="#">
                                            Quot quidam persequeris
                                        </a>{" "}
                                        <a className="list-group-item list-group-item-action" href="#">
                                            Mutat tacimates id sit.{" "}
                                        </a>
                                    </ul>
                                    <div className="card-footer position-relative">
                                        {" "}
                                        <a href="#" className="btn-link stretched-link">
                                            <span className="me-2">
                                                <i className="fas fa-file-alt" />
                                            </span>
                                            9 Topics{" "}
                                            <span className="float-end">
                                                <i className="fas fa-arrow-right" />
                                            </span>
                                        </a>{" "}
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="card shadow-sm border-0 mb-5">
                                    <div className="card-body">
                                        <div className="text-center my-4">
                                            {" "}
                                            <span className="text-16 text-primary">
                                                <i className="fas fa-shield-alt" />
                                            </span>
                                            <h5 className="mt-1">Security</h5>
                                        </div>
                                    </div>
                                    <ul className="list-group list-group-flush border-top border-bottom">
                                        <a className="list-group-item list-group-item-action" href="#">
                                            Persius interesset his et
                                        </a>{" "}
                                        <a className="list-group-item list-group-item-action" href="#">
                                            Quot quidam persequeris
                                        </a>{" "}
                                        <a className="list-group-item list-group-item-action" href="#">
                                            Mutat tacimates id sit.{" "}
                                        </a>
                                    </ul>
                                    <div className="card-footer position-relative">
                                        {" "}
                                        <a href="#" className="btn-link stretched-link">
                                            <span className="me-2">
                                                <i className="fas fa-file-alt" />
                                            </span>
                                            18 Topics{" "}
                                            <span className="float-end">
                                                <i className="fas fa-arrow-right" />
                                            </span>
                                        </a>{" "}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4 pt-md-3 mt-md-4">
                            <div className="col-lg-6">
                                <div className="bg-white shadow-sm rounded ps-4 ps-sm-0 pe-4 py-4" id='envelope-container'>
                                    <div className="row g-0">
                                        <div className="col-12 col-sm-auto text-13 text-muted d-flex align-items-center justify-content-center">
                                            {" "}
                                            <span className="px-4 ms-3 me-2 mb-4 mb-sm-0">
                                                <i className="far fa-envelope" />
                                            </span>{" "}
                                        </div>
                                        <div className="col text-center text-sm-start">
                                            <div className=" text-left">
                                                <h5 className="text-3 text-body">
                                                    Can't find what you're looking for?
                                                </h5>
                                                <p className="text-muted mb-0">
                                                    We want to answer all of your queries. Get in touch and
                                                    we'll get back to you as soon as we can.{" "}
                                                    <a className="btn-link" href="">
                                                        Contact us
                                                        <span className="text-1 ms-1">
                                                            <i className="fas fa-chevron-right" />
                                                        </span>
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="bg-white shadow-sm rounded ps-4 ps-sm-0 pe-4 py-4" id='envelope-container'>
                                    <div className="row g-0">
                                        <div className="col-12 col-sm-auto text-13 text-muted d-flex align-items-center justify-content-center">
                                            {" "}
                                            <span className="px-4 ms-3 me-2 mb-4 mb-sm-0">
                                                <i className="far fa-comment-alt" />
                                            </span>{" "}
                                        </div>
                                        <div className="col text-center text-sm-start">
                                            <div className="text-left">
                                                <h5 className="text-3 text-body">Technical questions</h5>
                                                <p className="text-muted mb-0">
                                                    Have some technical questions? Hit us up on live chat or
                                                    whatever.{" "}
                                                    <a className="btn-link" href="">
                                                        Click here
                                                        <span className="text-1 ms-1">
                                                            <i className="fas fa-chevron-right" />
                                                        </span>
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Main Topics end */}
                {/* Can't find
          ============================================= */}
                {/* Can't find end */}
            </div>
            {/* Content end */}
            {/* Footer
        ============================================= */}
            <Footer />
            {/* Footer end */}
        </div>


    )
}

export default Help