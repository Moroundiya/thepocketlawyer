import React from 'react';
import '../merchant-products.css';
import Header from '../components/Header'
import Footer from '../components/Footer'

function Merchant_Products() {
    return (
        <div className="main-wrapper" id='merchant-product-parent-container'>
            <Header />
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5 col-lg-3 col-xl-3 theiaStickySidebar">
                            <div className="card search-filter">
                                <div className="card-header">
                                    <h4 className="card-title mb-0">Filter</h4>
                                </div>
                                <div className="card-body">
                                    <div className="filter-widget">
                                        <h4>Categories</h4>
                                        <div>
                                            <label className="custom_check">
                                                <input
                                                    type="checkbox"
                                                    name="gender_type"
                                                    defaultChecked=""
                                                />
                                                <span className="checkmark" /> Family Care
                                            </label>
                                        </div>
                                        <div>
                                            <label className="custom_check">
                                                <input type="checkbox" name="gender_type" />
                                                <span className="checkmark" /> Skin Care
                                            </label>
                                        </div>
                                        <div>
                                            <label className="custom_check">
                                                <input type="checkbox" name="gender_type" />
                                                <span className="checkmark" /> Hair Care
                                            </label>
                                        </div>
                                        <div>
                                            <label className="custom_check">
                                                <input type="checkbox" name="gender_type" />
                                                <span className="checkmark" /> Lip Care
                                            </label>
                                        </div>
                                        <div>
                                            <label className="custom_check">
                                                <input type="checkbox" name="gender_type" />
                                                <span className="checkmark" /> Men's Care
                                            </label>
                                        </div>
                                        <div>
                                            <label className="custom_check">
                                                <input type="checkbox" name="gender_type" />
                                                <span className="checkmark" /> Women's Care
                                            </label>
                                        </div>
                                        <div>
                                            <label className="custom_check">
                                                <input type="checkbox" name="gender_type" />
                                                <span className="checkmark" /> Baby care
                                            </label>
                                        </div>
                                    </div>
                                    <div className="btn-search">
                                        <button type="button" className="btn w-100">
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-lg-9 col-xl-9">
                            <div className="row align-items-center pb-3">
                                <div className="col-md-4 col-12 d-md-block d-none custom-short-by">
                                    <h3 className="title pharmacy-title">Medlife Medical</h3>
                                    <p className="doc-location mb-2 text-ellipse pharmacy-location">
                                        <i className="fas fa-map-marker-alt me-1" /> 96 Red Hawk Road
                                        Cyrus, MN 56323{" "}
                                    </p>
                                    <span className="sort-title">Showing 6 of 98 products</span>
                                </div>
                                <div className="col-md-8 col-12 d-md-block d-none custom-short-by">
                                    <div className="sort-by pb-3">
                                        <span className="sort-title">Sort by</span>
                                        <span className="sortby-fliter">
                                            <select className="form-select">
                                                <option>Select</option>
                                                <option className="sorting">Rating</option>
                                                <option className="sorting">Popular</option>
                                                <option className="sorting">Latest</option>
                                                <option className="sorting">Free</option>
                                            </select>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 col-lg-4 col-xl-4 product-custom d-flex">
                                    <div className="profile-widget w-100">
                                        <div className="doc-img">
                                            <a
                                                href="https://doccure.dreamstechnologies.com/html/template/product-description.html"
                                                tabIndex={-1}
                                            >
                                                <img
                                                    className="img-fluid"
                                                    alt="Product image"
                                                    src="https://doccure.dreamstechnologies.com/html/template/assets/img/products/product.jpg"
                                                />
                                            </a>
                                            <a
                                                href="javascript:void(0)"
                                                className="fav-btn"
                                                tabIndex={-1}
                                            >
                                                <i className="far fa-bookmark" />
                                            </a>
                                        </div>
                                        <div className="pro-content">
                                            <h3 className="title pb-4">
                                                <a
                                                    href="https://doccure.dreamstechnologies.com/html/template/product-description.html"
                                                    tabIndex={-1}
                                                >
                                                    Benzaxapine Croplex
                                                </a>
                                            </h3>
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <span className="price">$19.00 </span>
                                                    <span className="price-strike">$45.00</span>
                                                </div>
                                                <div className="col-lg-6 text-end">
                                                    <a
                                                        href="https://doccure.dreamstechnologies.com/html/template/cart.html"
                                                        className="cart-icon"
                                                    >
                                                        <i className="fas fa-shopping-cart" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4 col-xl-4 product-custom d-flex">
                                    <div className="profile-widget w-100">
                                        <div className="doc-img">
                                            <a
                                                href="https://doccure.dreamstechnologies.com/html/template/product-description.html"
                                                tabIndex={-1}
                                            >
                                                <img
                                                    className="img-fluid"
                                                    alt="Product image"
                                                    src="https://doccure.dreamstechnologies.com/html/template/assets/img/products/product13.jpg"
                                                />
                                            </a>
                                            <a
                                                href="javascript:void(0)"
                                                className="fav-btn"
                                                tabIndex={-1}
                                            >
                                                <i className="far fa-bookmark" />
                                            </a>
                                        </div>
                                        <div className="pro-content">
                                            <h3 className="title pb-4">
                                                <a
                                                    href="https://doccure.dreamstechnologies.com/html/template/product-description.html"
                                                    tabIndex={-1}
                                                >
                                                    Rapalac Neuronium
                                                </a>
                                            </h3>
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <span className="price">$16.00</span>
                                                </div>
                                                <div className="col-lg-6 text-end">
                                                    <a
                                                        href="https://doccure.dreamstechnologies.com/html/template/cart.html"
                                                        className="cart-icon"
                                                    >
                                                        <i className="fas fa-shopping-cart" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4 col-xl-4 product-custom d-flex">
                                    <div className="profile-widget w-100">
                                        <div className="doc-img">
                                            <a
                                                href="https://doccure.dreamstechnologies.com/html/template/product-description.html"
                                                tabIndex={-1}
                                            >
                                                <img
                                                    className="img-fluid"
                                                    alt="Product image"
                                                    src="https://doccure.dreamstechnologies.com/html/template/assets/img/products/product1.jpg"
                                                />
                                            </a>
                                            <a
                                                href="javascript:void(0)"
                                                className="fav-btn"
                                                tabIndex={-1}
                                            >
                                                <i className="far fa-bookmark" />
                                            </a>
                                        </div>
                                        <div className="pro-content">
                                            <h3 className="title pb-4">
                                                <a
                                                    href="https://doccure.dreamstechnologies.com/html/template/product-description.html"
                                                    tabIndex={-1}
                                                >
                                                    Ombinazol Bonibamol
                                                </a>
                                            </h3>
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <span className="price">$22.00</span>
                                                </div>
                                                <div className="col-lg-6 text-end">
                                                    <a
                                                        href="https://doccure.dreamstechnologies.com/html/template/cart.html"
                                                        className="cart-icon"
                                                    >
                                                        <i className="fas fa-shopping-cart" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4 col-xl-4 product-custom d-flex">
                                    <div className="profile-widget w-100">
                                        <div className="doc-img">
                                            <a
                                                href="https://doccure.dreamstechnologies.com/html/template/product-description.html"
                                                tabIndex={-1}
                                            >
                                                <img
                                                    className="img-fluid"
                                                    alt="Product image"
                                                    src="https://doccure.dreamstechnologies.com/html/template/assets/img/products/product2.jpg"
                                                />
                                            </a>
                                            <a
                                                href="javascript:void(0)"
                                                className="fav-btn"
                                                tabIndex={-1}
                                            >
                                                <i className="far fa-bookmark" />
                                            </a>
                                        </div>
                                        <div className="pro-content">
                                            <h3 className="title pb-4">
                                                <a
                                                    href="https://doccure.dreamstechnologies.com/html/template/product-description.html"
                                                    tabIndex={-1}
                                                >
                                                    Dantotate Dantodazole
                                                </a>
                                            </h3>
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <span className="price">$10.00 </span>
                                                    <span className="price-strike">$12.00</span>
                                                </div>
                                                <div className="col-lg-6 text-end">
                                                    <a
                                                        href="https://doccure.dreamstechnologies.com/html/template/cart.html"
                                                        className="cart-icon"
                                                    >
                                                        <i className="fas fa-shopping-cart" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4 col-xl-4 product-custom d-flex">
                                    <div className="profile-widget w-100">
                                        <div className="doc-img">
                                            <a
                                                href="https://doccure.dreamstechnologies.com/html/template/product-description.html"
                                                tabIndex={-1}
                                            >
                                                <img
                                                    className="img-fluid"
                                                    alt="Product image"
                                                    src="https://doccure.dreamstechnologies.com/html/template/assets/img/products/product12.jpg"
                                                />
                                            </a>
                                            <a
                                                href="javascript:void(0)"
                                                className="fav-btn"
                                                tabIndex={-1}
                                            >
                                                <i className="far fa-bookmark" />
                                            </a>
                                        </div>
                                        <div className="pro-content">
                                            <h3 className="title pb-4">
                                                <a
                                                    href="https://doccure.dreamstechnologies.com/html/template/product-description.html"
                                                    tabIndex={-1}
                                                >
                                                    Acetrace Amionel
                                                </a>
                                            </h3>
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <span className="price">$7.00</span>
                                                </div>
                                                <div className="col-lg-6 text-end">
                                                    <a
                                                        href="https://doccure.dreamstechnologies.com/html/template/cart.html"
                                                        className="cart-icon"
                                                    >
                                                        <i className="fas fa-shopping-cart" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4 col-xl-4 product-custom d-flex">
                                    <div className="profile-widget w-100">
                                        <div className="doc-img">
                                            <a
                                                href="https://doccure.dreamstechnologies.com/html/template/product-description.html"
                                                tabIndex={-1}
                                            >
                                                <img
                                                    className="img-fluid"
                                                    alt="Product image"
                                                    src="https://doccure.dreamstechnologies.com/html/template/assets/img/products/product11.jpg"
                                                />
                                            </a>
                                            <a
                                                href="javascript:void(0)"
                                                className="fav-btn"
                                                tabIndex={-1}
                                            >
                                                <i className="far fa-bookmark" />
                                            </a>
                                        </div>
                                        <div className="pro-content">
                                            <h3 className="title pb-4">
                                                <a
                                                    href="https://doccure.dreamstechnologies.com/html/template/product-description.html"
                                                    tabIndex={-1}
                                                >
                                                    Ergorinex Caffeigestin
                                                </a>
                                            </h3>
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <span className="price">$15.00</span>
                                                </div>
                                                <div className="col-lg-6 text-end">
                                                    <a
                                                        href="https://doccure.dreamstechnologies.com/html/template/cart.html"
                                                        className="cart-icon"
                                                    >
                                                        <i className="fas fa-shopping-cart" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4 col-xl-4 product-custom d-flex">
                                    <div className="profile-widget w-100">
                                        <div className="doc-img">
                                            <a
                                                href="https://doccure.dreamstechnologies.com/html/template/product-description.html"
                                                tabIndex={-1}
                                            >
                                                <img
                                                    className="img-fluid"
                                                    alt="Product image"
                                                    src="https://doccure.dreamstechnologies.com/html/template/assets/img/products/product3.jpg"
                                                />
                                            </a>
                                            <a
                                                href="javascript:void(0)"
                                                className="fav-btn"
                                                tabIndex={-1}
                                            >
                                                <i className="far fa-bookmark" />
                                            </a>
                                        </div>
                                        <div className="pro-content">
                                            <h3 className="title pb-4">
                                                <a
                                                    href="https://doccure.dreamstechnologies.com/html/template/product-description.html"
                                                    tabIndex={-1}
                                                >
                                                    Alispirox Aerorenone
                                                </a>
                                            </h3>
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <span className="price">$26.00</span>
                                                </div>
                                                <div className="col-lg-6 text-end">
                                                    <a
                                                        href="https://doccure.dreamstechnologies.com/html/template/cart.html"
                                                        className="cart-icon"
                                                    >
                                                        <i className="fas fa-shopping-cart" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4 col-xl-4 product-custom d-flex">
                                    <div className="profile-widget w-100">
                                        <div className="doc-img">
                                            <a
                                                href="https://doccure.dreamstechnologies.com/html/template/product-description.html"
                                                tabIndex={-1}
                                            >
                                                <img
                                                    className="img-fluid"
                                                    alt="Product image"
                                                    src="https://doccure.dreamstechnologies.com/html/template/assets/img/products/product10.jpg"
                                                />
                                            </a>
                                            <a
                                                href="javascript:void(0)"
                                                className="fav-btn"
                                                tabIndex={-1}
                                            >
                                                <i className="far fa-bookmark" />
                                            </a>
                                        </div>
                                        <div className="pro-content">
                                            <h3 className="title pb-4">
                                                <a
                                                    href="https://doccure.dreamstechnologies.com/html/template/product-description.html"
                                                    tabIndex={-1}
                                                >
                                                    Lysofranil Dorzostin
                                                </a>
                                            </h3>
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <span className="price">$10.00 </span>
                                                    <span className="price-strike">$12.00</span>
                                                </div>
                                                <div className="col-lg-6 text-end">
                                                    <a
                                                        href="https://doccure.dreamstechnologies.com/html/template/cart.html"
                                                        className="cart-icon"
                                                    >
                                                        <i className="fas fa-shopping-cart" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4 col-xl-4 product-custom d-flex">
                                    <div className="profile-widget w-100">
                                        <div className="doc-img">
                                            <a
                                                href="https://doccure.dreamstechnologies.com/html/template/product-description.html"
                                                tabIndex={-1}
                                            >
                                                <img
                                                    className="img-fluid"
                                                    alt="Product image"
                                                    src="https://doccure.dreamstechnologies.com/html/template/assets/img/products/product4.jpg"
                                                />
                                            </a>
                                            <a
                                                href="javascript:void(0)"
                                                className="fav-btn"
                                                tabIndex={-1}
                                            >
                                                <i className="far fa-bookmark" />
                                            </a>
                                        </div>
                                        <div className="pro-content">
                                            <h3 className="title pb-4">
                                                <a
                                                    href="https://doccure.dreamstechnologies.com/html/template/product-description.html"
                                                    tabIndex={-1}
                                                >
                                                    Nitrolozin Zithrotropin
                                                </a>
                                            </h3>
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <span className="price">$12.00</span>
                                                </div>
                                                <div className="col-lg-6 text-end">
                                                    <a
                                                        href="https://doccure.dreamstechnologies.com/html/template/cart.html"
                                                        className="cart-icon"
                                                    >
                                                        <i className="fas fa-shopping-cart" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4 col-xl-4 product-custom d-flex">
                                    <div className="profile-widget w-100">
                                        <div className="doc-img">
                                            <a
                                                href="https://doccure.dreamstechnologies.com/html/template/product-description.html"
                                                tabIndex={-1}
                                            >
                                                <img
                                                    className="img-fluid"
                                                    alt="Product image"
                                                    src="https://doccure.dreamstechnologies.com/html/template/assets/img/products/product14.jpg"
                                                />
                                            </a>
                                            <a
                                                href="javascript:void(0)"
                                                className="fav-btn"
                                                tabIndex={-1}
                                            >
                                                <i className="far fa-bookmark" />
                                            </a>
                                        </div>
                                        <div className="pro-content">
                                            <h3 className="title pb-4">
                                                <a
                                                    href="https://doccure.dreamstechnologies.com/html/template/product-description.html"
                                                    tabIndex={-1}
                                                >
                                                    Cordacriptine Mardipine
                                                </a>
                                            </h3>
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <span className="price">$9.00</span>
                                                </div>
                                                <div className="col-lg-6 text-end">
                                                    <a
                                                        href="https://doccure.dreamstechnologies.com/html/template/cart.html"
                                                        className="cart-icon"
                                                    >
                                                        <i className="fas fa-shopping-cart" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4 col-xl-4 product-custom d-flex">
                                    <div className="profile-widget w-100">
                                        <div className="doc-img">
                                            <a
                                                href="https://doccure.dreamstechnologies.com/html/template/product-description.html"
                                                tabIndex={-1}
                                            >
                                                <img
                                                    className="img-fluid"
                                                    alt="Product image"
                                                    src="https://doccure.dreamstechnologies.com/html/template/assets/img/products/product5.jpg"
                                                />
                                            </a>
                                            <a
                                                href="javascript:void(0)"
                                                className="fav-btn"
                                                tabIndex={-1}
                                            >
                                                <i className="far fa-bookmark" />
                                            </a>
                                        </div>
                                        <div className="pro-content">
                                            <h3 className="title pb-4">
                                                <a
                                                    href="https://doccure.dreamstechnologies.com/html/template/product-description.html"
                                                    tabIndex={-1}
                                                >
                                                    Iconevist Ampyplex
                                                </a>
                                            </h3>
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <span className="price">$16.00</span>
                                                </div>
                                                <div className="col-lg-6 text-end">
                                                    <a
                                                        href="https://doccure.dreamstechnologies.com/html/template/cart.html"
                                                        className="cart-icon"
                                                    >
                                                        <i className="fas fa-shopping-cart" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4 col-xl-4 product-custom d-flex">
                                    <div className="profile-widget w-100">
                                        <div className="doc-img">
                                            <a
                                                href="https://doccure.dreamstechnologies.com/html/template/product-description.html"
                                                tabIndex={-1}
                                            >
                                                <img
                                                    className="img-fluid"
                                                    alt="Product image"
                                                    src="https://doccure.dreamstechnologies.com/html/template/assets/img/products/product6.jpg"
                                                />
                                            </a>
                                            <a
                                                href="javascript:void(0)"
                                                className="fav-btn"
                                                tabIndex={-1}
                                            >
                                                <i className="far fa-bookmark" />
                                            </a>
                                        </div>
                                        <div className="pro-content">
                                            <h3 className="title pb-4">
                                                <a
                                                    href="https://doccure.dreamstechnologies.com/html/template/product-description.html"
                                                    tabIndex={-1}
                                                >
                                                    Alcafsteride Omebide
                                                </a>
                                            </h3>
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <span className="price">$7.00</span>
                                                </div>
                                                <div className="col-lg-6 text-end">
                                                    <a
                                                        href="https://doccure.dreamstechnologies.com/html/template/cart.html"
                                                        className="cart-icon"
                                                    >
                                                        <i className="fas fa-shopping-cart" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4 col-xl-4 product-custom d-flex">
                                    <div className="profile-widget w-100">
                                        <div className="doc-img">
                                            <a
                                                href="https://doccure.dreamstechnologies.com/html/template/product-description.html"
                                                tabIndex={-1}
                                            >
                                                <img
                                                    className="img-fluid"
                                                    alt="Product image"
                                                    src="https://doccure.dreamstechnologies.com/html/template/assets/img/products/product15.jpg"
                                                />
                                            </a>
                                            <a
                                                href="javascript:void(0)"
                                                className="fav-btn"
                                                tabIndex={-1}
                                            >
                                                <i className="far fa-bookmark" />
                                            </a>
                                        </div>
                                        <div className="pro-content">
                                            <h3 className="title pb-4">
                                                <a
                                                    href="https://doccure.dreamstechnologies.com/html/template/product-description.html"
                                                    tabIndex={-1}
                                                >
                                                    Neubide Aborase
                                                </a>
                                            </h3>
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <span className="price">$30.00</span>
                                                </div>
                                                <div className="col-lg-6 text-end">
                                                    <a
                                                        href="https://doccure.dreamstechnologies.com/html/template/cart.html"
                                                        className="cart-icon"
                                                    >
                                                        <i className="fas fa-shopping-cart" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4 col-xl-4 product-custom d-flex">
                                    <div className="profile-widget w-100">
                                        <div className="doc-img">
                                            <a
                                                href="https://doccure.dreamstechnologies.com/html/template/product-description.html"
                                                tabIndex={-1}
                                            >
                                                <img
                                                    className="img-fluid"
                                                    alt="Product image"
                                                    src="https://doccure.dreamstechnologies.com/html/template/assets/img/products/product7.jpg"
                                                />
                                            </a>
                                            <a
                                                href="javascript:void(0)"
                                                className="fav-btn"
                                                tabIndex={-1}
                                            >
                                                <i className="far fa-bookmark" />
                                            </a>
                                        </div>
                                        <div className="pro-content">
                                            <h3 className="title pb-4">
                                                <a
                                                    href="https://doccure.dreamstechnologies.com/html/template/product-description.html"
                                                    tabIndex={-1}
                                                >
                                                    ITONE eye drops 10ml
                                                </a>
                                            </h3>
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <span className="price">$50.00</span>
                                                </div>
                                                <div className="col-lg-6 text-end">
                                                    <a
                                                        href="https://doccure.dreamstechnologies.com/html/template/cart.html"
                                                        className="cart-icon"
                                                    >
                                                        <i className="fas fa-shopping-cart" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4 col-xl-4 product-custom d-flex">
                                    <div className="profile-widget w-100">
                                        <div className="doc-img">
                                            <a
                                                href="https://doccure.dreamstechnologies.com/html/template/product-description.html"
                                                tabIndex={-1}
                                            >
                                                <img
                                                    className="img-fluid"
                                                    alt="Product image"
                                                    src="https://doccure.dreamstechnologies.com/html/template/assets/img/products/product8.jpg"
                                                />
                                            </a>
                                            <a
                                                href="javascript:void(0)"
                                                className="fav-btn"
                                                tabIndex={-1}
                                            >
                                                <i className="far fa-bookmark" />
                                            </a>
                                        </div>
                                        <div className="pro-content">
                                            <h3 className="title pb-4">
                                                <a
                                                    href="https://doccure.dreamstechnologies.com/html/template/product-description.html"
                                                    tabIndex={-1}
                                                >
                                                    Antatriene Drospiletra
                                                </a>
                                            </h3>
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <span className="price">$10.00 </span>
                                                    <span className="price-strike">$20.00</span>
                                                </div>
                                                <div className="col-lg-6 text-end">
                                                    <a
                                                        href="https://doccure.dreamstechnologies.com/html/template/cart.html"
                                                        className="cart-icon"
                                                    >
                                                        <i className="fas fa-shopping-cart" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 text-center">
                                <a href="product-all.html#" className="btn book-btn1 mb-4">
                                    Load More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Merchant_Products