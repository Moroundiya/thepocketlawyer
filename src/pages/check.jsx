<div className="cp_navi_main_wrapper index2_header_wrapper float_left">
                <div className="container-fluid header-parent-container">
                    <div className="cp_logo_wrapper">
                        <a href="index.html">
                            <img src={currentTheme === "light" ? logo_dark : logo_light} alt="logo" className='header-logo' />
                        </a>
                    </div>


                    <header className="mobail_menu d-block d-sm-block d-md-block d-lg-none d-xl-none">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="cd-dropdown-wrapper">
                                        <a className="house_toggle" href="#0">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                version="1.1"
                                                id="Capa_1"
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 31.177 31.177"
                                                style={{ enableBackground: "new 0 0 31.177 31.177" }}
                                                xmlSpace="preserve"
                                                width="25px"
                                                height="25px"
                                            >
                                                <g>
                                                    <g>
                                                        <path
                                                            className="menubar"
                                                            d="M30.23,1.775H0.946c-0.489,0-0.887-0.398-0.887-0.888S0.457,0,0.946,0H30.23    c0.49,0,0.888,0.398,0.888,0.888S30.72,1.775,30.23,1.775z"
                                                            fill="#004165"
                                                        />
                                                    </g>
                                                    <g>
                                                        <path
                                                            className="menubar"
                                                            d="M30.23,9.126H12.069c-0.49,0-0.888-0.398-0.888-0.888c0-0.49,0.398-0.888,0.888-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,8.729,30.72,9.126,30.23,9.126z"
                                                            fill="#004165"
                                                        />
                                                    </g>
                                                    <g>
                                                        <path
                                                            className="menubar"
                                                            d="M30.23,16.477H0.946c-0.489,0-0.887-0.398-0.887-0.888c0-0.49,0.398-0.888,0.887-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,16.079,30.72,16.477,30.23,16.477z"
                                                            fill="#004165"
                                                        />
                                                    </g>
                                                    <g>
                                                        <path
                                                            className="menubar"
                                                            d="M30.23,23.826H12.069c-0.49,0-0.888-0.396-0.888-0.887c0-0.49,0.398-0.888,0.888-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,23.43,30.72,23.826,30.23,23.826z"
                                                            fill="#004165"
                                                        />
                                                    </g>
                                                    <g>
                                                        <path
                                                            className="menubar"
                                                            d="M30.23,31.177H0.946c-0.489,0-0.887-0.396-0.887-0.887c0-0.49,0.398-0.888,0.887-0.888H30.23    c0.49,0,0.888,0.398,0.888,0.888C31.118,30.78,30.72,31.177,30.23,31.177z"
                                                            fill="#004165"
                                                        />
                                                    </g>
                                                </g>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>


                    <div className="cp_navigation_wrapper">
                        <div className="mainmenu d-xl-block d-lg-block d-md-none d-sm-none d-none">
                            <ul className="main_nav_ul">
                                <li className="has-mega gc_main_navigation">
                                    <a href="#" className="gc_main_navigation active_class">HOME
                                    </a>
                                </li>
                                <li><a href="about_us.html" className="gc_main_navigation">ABOUT US</a></li>
                                <li className="has-mega gc_main_navigation">
                                    <a href="#" className="gc_main_navigation">PRICING
                                    </a>

                                </li>
                                <li className="has-mega gc_main_navigation">
                                    <a href="#" className="gc_main_navigation">FAQ
                                    </a>

                                </li>
                                <li className="has-mega gc_main_navigation">
                                    <a href="#" className="gc_main_navigation">BLOG
                                    </a>

                                </li>
                                <li>
                                    <a href="contact_us.html" className="gc_main_navigation">CONTACT US </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="top_header_right_wrapper top_phonecalls register-login-container">
                       
                        <div className="header_btn header-btn-div">
                            <ul>
                                <li>
                                    <a href="register.html">
                                        <Icon icon="fa6-solid:user-clock" className='book-icon' />
                                        Book Appointment
                                    </a> </li>
                                <li>
                                    <a href="login.html">
                                        <Icon icon="carbon:password" className='signin-icon' />
                                        Sign In </a> </li>
                            </ul>
                        </div>
                        <Icon icon="vaadin:cart" className='cart-icon' />
                        <ToggleTheme selectedTheme={currentTheme} onChange={setCurrentTheme} />
                    </div>
                </div>
            </div> 