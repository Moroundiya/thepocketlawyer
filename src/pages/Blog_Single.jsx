import React from 'react'

function Blog_Single() {
    return (
        <div>
            <div className="cursor" />
            {/* Top Scroll Start */}
            <a href="javascript:" id="return-to-top"> <i className="fas fa-angle-double-up" /></a>
            {/* Top Scroll End */}
            {/* cp navi wrapper Start */}
            <nav className="cd-dropdown d-block d-sm-block d-md-block d-lg-none d-xl-none">
                <h2><a href="index.html"> savehyip </a></h2>
                <a href="#0" className="cd-close">Close</a>
                <ul className="cd-dropdown-content">
                    <li>
                        <form className="cd-search">
                            <input type="search" placeholder="Search..." />
                        </form>
                    </li>
                    <li className="has-children">
                        <a href="#">index</a>
                        <ul className="cd-secondary-dropdown icon_menu is-hidden">
                            <li className="go-back"><a href="#0">Menu</a></li>
                            <li><a href="index.html">index I</a></li>
                            <li><a href="index2.html">index II</a></li>
                            <li><a href="index3.html">index III</a></li>
                        </ul>
                    </li>
                    <li><a href="about_us.html"> about us </a></li>
                    <li><a href="investment.html"> investment plan </a></li>
                    <li><a href="faq.html"> FAQ </a></li>
                    <li className="has-children">
                        <a href="#">dashboard</a>
                        <ul className="cd-secondary-dropdown icon_menu is-hidden">
                            <li className="go-back"><a href="#0">Menu</a></li>
                            <li>
                                <a href="all_transactions.html">all transactions</a>
                            </li>
                            <li>
                                <a href="banners.html">banners</a>
                            </li>
                            <li>
                                <a href="change_password.html">change password</a>
                            </li>
                            <li>
                                <a href="change_pin.html">change pin</a>
                            </li>
                            <li>
                                <a href="deposit_history.html">deposit history</a>
                            </li>
                            <li>
                                <a href="deposit_list.html">deposit list</a>
                            </li>
                            <li>
                                <a href="earnings_history.html">earnings history</a>
                            </li>
                            <li>
                                <a href="email_notification.html">email notification</a>
                            </li>
                            <li>
                                <a href="exchange_history.html">exchange history</a>
                            </li>
                            <li>
                                <a href="exchange_money.html">exchange money</a>
                            </li>
                            <li>
                                <a href="make_deposit.html">make deposit</a>
                            </li>
                            <li>
                                <a href="my_account.html">my account</a>
                            </li>
                            <li>
                                <a href="payment_request.html">payment request</a>
                            </li>
                            <li>
                                <a href="pending_history.html">pending history</a>
                            </li>
                            <li>
                                <a href="referral_earnings.html">referral earnings</a>
                            </li>
                            <li>
                                <a href="referrals.html">referrals</a>
                            </li>
                            <li>
                                <a href="tickets.html">tickets</a>
                            </li>
                            <li>
                                <a href="transfer_fund.html">transfer fund</a>
                            </li>
                            <li>
                                <a href="view_profile.html">view profile</a>
                            </li>
                        </ul>
                    </li>
                    <li className="has-children">
                        <a href="#">blog</a>
                        <ul className="cd-secondary-dropdown icon_menu is-hidden">
                            <li className="go-back"><a href="#0">Menu</a></li>
                            <li><a href="blog_category.html">blog category</a></li>
                            <li><a href="blog_single.html">blog single</a></li>
                        </ul>
                    </li>
                    <li><a href="contact_us.html"> contact us </a></li>
                    <li><a href="login.html"> login </a></li>
                    <li><a href="register.html"> register </a></li>
                </ul>
                {/* .cd-dropdown-content */}
            </nav>
            <div className="cp_navi_main_wrapper inner_header_wrapper float_left">
                <div className="container-fluid">
                    <div className="cp_logo_wrapper">
                        <a href="index.html">
                            <img src="images/logo2.png" alt="logo" />
                        </a>
                    </div>
                    {/* mobile menu area start */}
                    <header className="mobail_menu d-block d-sm-block d-md-block d-lg-none d-xl-none">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="cd-dropdown-wrapper">
                                        <a className="house_toggle inner_toggle" href="#0">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 31.177 31.177" style={{ enableBackground: 'new 0 0 31.177 31.177' }} xmlSpace="preserve" width="25px" height="25px">
                                                <g>
                                                    <g>
                                                        <path className="menubar" d="M30.23,1.775H0.946c-0.489,0-0.887-0.398-0.887-0.888S0.457,0,0.946,0H30.23    c0.49,0,0.888,0.398,0.888,0.888S30.72,1.775,30.23,1.775z" fill="#004165" />
                                                    </g>
                                                    <g>
                                                        <path className="menubar" d="M30.23,9.126H12.069c-0.49,0-0.888-0.398-0.888-0.888c0-0.49,0.398-0.888,0.888-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,8.729,30.72,9.126,30.23,9.126z" fill="#004165" />
                                                    </g>
                                                    <g>
                                                        <path className="menubar" d="M30.23,16.477H0.946c-0.489,0-0.887-0.398-0.887-0.888c0-0.49,0.398-0.888,0.887-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,16.079,30.72,16.477,30.23,16.477z" fill="#004165" />
                                                    </g>
                                                    <g>
                                                        <path className="menubar" d="M30.23,23.826H12.069c-0.49,0-0.888-0.396-0.888-0.887c0-0.49,0.398-0.888,0.888-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,23.43,30.72,23.826,30.23,23.826z" fill="#004165" />
                                                    </g>
                                                    <g>
                                                        <path className="menubar" d="M30.23,31.177H0.946c-0.489,0-0.887-0.396-0.887-0.887c0-0.49,0.398-0.888,0.887-0.888H30.23    c0.49,0,0.888,0.398,0.888,0.888C31.118,30.78,30.72,31.177,30.23,31.177z" fill="#004165" />
                                                    </g>
                                                </g>
                                            </svg>
                                        </a>
                                        {/* .cd-dropdown */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* .cd-dropdown-wrapper */}
                    </header>
                    <div className="top_header_right_wrapper">
                        <p><i className="flaticon-phone-contact" /> (+91) 123 123 4567</p>
                        <div className="header_btn">
                            <ul>
                                <li>
                                    <a href="register.html"> register </a> </li>
                                <li>
                                    <a href="login.html"> login </a> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="cp_navigation_wrapper main_top_wrapper">
                        <div className="mainmenu d-xl-block d-lg-block d-md-none d-sm-none d-none">
                            <ul className="main_nav_ul">
                                <li className="has-mega gc_main_navigation"><a href="#" className="gc_main_navigation active_class">index <i className="fas fa-caret-down" /></a>
                                    <ul className="navi_2_dropdown">
                                        <li className="parent">
                                            <a href="index.html"><i className="fas fa-caret-right" />index I</a>
                                        </li>
                                        <li className="parent">
                                            <a href="index2.html"><i className="fas fa-caret-right" />index II</a>
                                        </li>
                                        <li className="parent">
                                            <a href="index3.html"><i className="fas fa-caret-right" />index III</a>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="about_us.html" className="gc_main_navigation">about us</a></li>
                                <li><a href="investment.html" className="gc_main_navigation">investment plan</a></li>
                                <li className="has-mega gc_main_navigation"><a href="#" className="gc_main_navigation">pages <i className="fas fa-caret-down" /></a>
                                    <ul className="navi_2_dropdown">
                                        <li className="parent">
                                            <a href="faq.html"><i className="fas fa-caret-right" />FAQ</a>
                                        </li>
                                        <li className="parent">
                                            <a href="login.html"><i className="fas fa-caret-right" />login</a>
                                        </li>
                                        <li className="parent">
                                            <a href="register.html"><i className="fas fa-caret-right" />register</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="has-mega gc_main_navigation"><a href="#" className="gc_main_navigation">dashboard <i className="fas fa-caret-down" /></a>
                                    <ul className="navi_2_dropdown">
                                        <li className="parent">
                                            <a href="#"><i className="fas fa-caret-right" />my account<span><i className="fas fa-caret-right" />
                                            </span></a>
                                            <ul className="dropdown-menu-right">
                                                <li>
                                                    <a href="my_account.html"> <i className="fas fa-caret-right" />my account</a>
                                                </li>
                                                <li>
                                                    <a href="view_profile.html"> <i className="fas fa-caret-right" /> my profile</a>
                                                </li>
                                                <li>
                                                    <a href="email_notification.html"><i className="fas fa-caret-right" />email notification </a>
                                                </li>
                                                <li>
                                                    <a href="change_password.html"><i className="fas fa-caret-right" />change password</a>
                                                </li>
                                                <li>
                                                    <a href="change_pin.html"><i className="fas fa-caret-right" />change pin</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="parent">
                                            <a href="#"> <i className="fas fa-caret-right" />finance<span> <i className="fas fa-caret-right" />
                                            </span></a>
                                            <ul className="dropdown-menu-right">
                                                <li>
                                                    <a href="make_deposit.html"> <i className="fas fa-caret-right" />make deposit</a>
                                                </li>
                                                <li>
                                                    <a href="deposit_list.html"> <i className="fas fa-caret-right" /> deposit lists</a>
                                                </li>
                                                <li>
                                                    <a href="payment_request.html"><i className="fas fa-caret-right" />payment request</a>
                                                </li>
                                                <li>
                                                    <a href="exchange_money.html"><i className="fas fa-caret-right" />exchange money</a>
                                                </li>
                                                <li>
                                                    <a href="transfer_fund.html"><i className="fas fa-caret-right" />fund transfer</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="parent">
                                            <a href="#"> <i className="fas fa-caret-right" />reports<span> <i className="fas fa-caret-right" />
                                            </span></a>
                                            <ul className="dropdown-menu-right">
                                                <li>
                                                    <a href="all_transactions.html"> <i className="fas fa-caret-right" />all transactions</a>
                                                </li>
                                                <li>
                                                    <a href="deposit_history.html"> <i className="fas fa-caret-right" /> deposit history</a>
                                                </li>
                                                <li>
                                                    <a href="pending_history.html"><i className="fas fa-caret-right" />pending history</a>
                                                </li>
                                                <li>
                                                    <a href="exchange_history.html"><i className="fas fa-caret-right" />exchange history</a>
                                                </li>
                                                <li>
                                                    <a href="earnings_history.html"><i className="fas fa-caret-right" />earning history</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="parent">
                                            <a href="#"> <i className="fas fa-caret-right" />referrals<span> <i className="fas fa-caret-right" />
                                            </span></a>
                                            <ul className="dropdown-menu-right">
                                                <li>
                                                    <a href="referrals.html"> <i className="fas fa-caret-right" />my referrals</a>
                                                </li>
                                                <li>
                                                    <a href="banners.html"> <i className="fas fa-caret-right" /> promotionals banners</a>
                                                </li>
                                                <li>
                                                    <a href="referral_earnings.html"><i className="fas fa-caret-right" />referral earnings</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="parent">
                                            <a href="tickets.html"><i className="fas fa-caret-right" />view tickets</a></li>
                                    </ul>
                                </li>
                                <li className="has-mega gc_main_navigation"><a href="#" className="gc_main_navigation">blog <i className="fas fa-caret-down" /></a>
                                    <ul className="navi_2_dropdown">
                                        <li className="parent">
                                            <a href="blog_category.html"><i className="fas fa-caret-right" />blog category</a>
                                        </li>
                                        <li className="parent">
                                            <a href="blog_single.html"><i className="fas fa-caret-right" /> blog single</a>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="contact_us.html" className="gc_main_navigation">contact us</a></li>
                            </ul>
                        </div>
                        {/* mainmenu end */}
                    </div>
                </div>
            </div>
            {/* navi wrapper End */}
            {/* inner header wrapper start */}
            <div className="page_title_section">
                <div className="page_header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 col-md-9 col-12 col-sm-8">
                                <h1>blog single</h1>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12 col-sm-4">
                                <div className="sub_title_section">
                                    <ul className="sub_title">
                                        <li> <a href="#"> Home </a>&nbsp; / &nbsp; </li>
                                        <li>blog single</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* inner header wrapper end */}
            {/* blog category wrapper start*/}
            <div className="blog_category_wrapper fixed_portion float_left">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12">
                            <div className="blog_category_box_wrapper blog_box_wrapper float_left">
                                <div className="blog_news_img_wrapper float_left">
                                    <img src="images/blog1.jpg" alt="blog_img" />
                                    <div className="blog_date_wrapper">
                                        <p>15
                                            <br /> <span>jun</span></p>
                                    </div>
                                </div>
                                <div className="lest_news_cont_wrapper float_left">
                                    <div className="blog_heaidng_top">
                                        <h3> <a href="#">Invest To Grow Your Money </a></h3>
                                    </div>
                                    <div className="blog-single_cntnt">
                                        <p>Web typography is now more stylish and malleable than ever before. New CSS3 properties allow for trul unique typographic effects that in the past wouldve required images and custom JavaScript.Each of the following code snippets. This is shop version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                                            <br />
                                            <br /> trul unique typographic effects that in the past wouldve required images and custom JavaScript.Each of the following code snippets. This is shop version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                                        </p>
                                    </div>
                                    <div className="lest_news_cont_bottom float_left">
                                        <ul>
                                            <li>
                                                <a href="#"><i className="fa fa-user" />by akshay H.</a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="fa fa-comments" />04 comments</a>
                                            </li>
                                            <li><a href="#"><i className="fas fa-heart" />37 likes</a> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="blog_dark_wrapper  blog_single_box float_left">
                                <img src="images/quote.png" alt="img" />
                                <h1>" Xirox Bitcoin City  Those more architectural side of meet <br /> with building and design."</h1>
                                <div className="port-single-entry-meta">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                by- joahn doe</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="blog_single_botttom float_left">
                                <div className="float_left">
                                    <p>Sollicitudin, lorem quis bibe u auctor, nisi elit conat ipsu, nec sagittis sem ni id elit. Duis sed odio sit amet nibh vulpute rsus. Proin gravida nibh vel velit auctor aliquet. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        <br />
                                        <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                                </div>
                                <div className="blog_single_img float_left">
                                    <div className="blog_image_single">
                                        <img src="images/blog_singl1_1.png" className="img-responsive" alt="blog_img1" />
                                    </div>
                                    <div className="blog_text_single">
                                        <p>Duis et nibh blat, eifend liberost amet, suscipit enim. Sed rutrum suere orci. Lorem ipsum dolor sitt amet. This is Photoshoctor or aliqet. Aenean sollicitudin, lorem quis b aliqet. Aenean sollicitudin, lorem quis bibendum.</p>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="far fa-thumbs-up" /> lorem quis bibendum auctor, nisi elit.
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="far fa-thumbs-up" /> bibendum Sollib bibendum auctor, nisi elit.
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="far fa-thumbs-up" /> citudin, lorem quis bibendum consequat bibendum
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="blog_single_img float_left">
                                    <div className="blog_image_single">
                                        <img src="images/blog_single_2.png" className="img-responsive" alt="blog_img1" />
                                    </div>
                                    <div className="blog_text_single">
                                        <p>Duis et nibh blat, eifend or aliqet. Aenean sollicitudin, lorem quis b liberost amet, suscipit enim. Sed rutrum suere orci. Lorem ipsum dolor sitt amet. This is Photoshoctor aliqet. Aenean sollicitudin, lorem quis bibendum.</p>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="far fa-thumbs-up" /> lorem quis bibendum auctor, nisi elit.
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="far fa-thumbs-up" /> bibendum Sollib bibendum auctor, nisi elit.
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="far fa-thumbs-up" /> citudin, lorem quis bibendum consequat bibendum
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="blog_single_text float_left">
                                    <p>Sollicitudin, lorem quis bibe u auctor, nisi elit conat ipsu, nec sagittis sem ni id elit. Duis sed odio sit amet nibh vulpute rsus. Proin gravida nibh vel velit auctor aliquet. Lorem ipsum dolor sit amet, consecteolore magna aliqua.
                                        <br />
                                        <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis auttur adipisicing elit, sed do eiod tempor incididunt ut labore et dolore magna aliqua. Ut en esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                                </div>
                                <div className="tb_btm_link_left">
                                    <ul>
                                        <li><span><i className="fa fa-tag" /> Tags :</span></li>
                                        <li><a href="#">buisness </a></li>
                                        <li><a href="#">bitcoin </a></li>
                                        <li><a href="#">marketing</a></li>
                                    </ul>
                                </div>
                                <div className="tb_btm_link_right">
                                    <ul>
                                        <li>share : </li>
                                        <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                        <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                        <li><a href="#"><i className="fab fa-google-plus-g" /></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="btc_blog_post_admin_main_wrapper float_left">
                                <div className="btc_blog_single_post_admin_img">
                                    <img src="images/author.png" alt="admin_img" />
                                </div>
                                <div className="btc_blog_single_post_admin_img_cont">
                                    <h2>about admin</h2>
                                    <h1><a href="#">joahn doe</a></h1>
                                    <p className="ggg">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctorm, nec sagittis sem nibh id elit. </p>
                                </div>
                            </div>
                            <div className="comments_wrapper float_left">
                                <div className="widget_heading">
                                    <h2>comments (04)</h2>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-12 col-sm-12">
                                        <div className="comments_Box">
                                            <div className="img_wrapper">
                                                <img src="images/cmnt1.jpg" className alt="author_img" />
                                            </div>
                                            <div className="text_wrapper">
                                                <div className="author_detail">
                                                    <span className="author_name"> Jhon Doe <i className="fa fa-circle" /> </span>
                                                    <span className="publish_date"> July 1, 2019 - <a href="#">Reply</a> </span>
                                                </div>
                                                <div className="author_content">
                                                    <p>Integer porttitor fringilla vestibulum. Phasellus curs our tinnt nulla, ut mattis augue finibus ac. Vivamus elementum enim ac enim ultrices rhoncus. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-12 col-sm-12">
                                        <div className="comments_Box">
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12 col-12 col-sm-12">
                                                    <div className="img_wrapper">
                                                        <img src="images/cmnt2.jpg" className alt="author_img" />
                                                    </div>
                                                    <div className="text_wrapper">
                                                        <div className="author_detail">
                                                            <span className="author_name"> Steffa Ferello  <i className="fa fa-circle" /> </span>
                                                            <span className="publish_date"> July 4, 2019 - <a href="#">Reply</a> </span>
                                                        </div>
                                                        <div className="author_content">
                                                            <p>Integer porttitor fringilla vestibulum. Phasellus curs our tinnt nulla, ut mattis augue finibus ac. Vivamus elementum enim ac enim ultrices rhoncus. </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-12 col-sm-12">
                                        <div className="comments_Box">
                                            <div className="img_wrapper">
                                                <img src="images/cmnt3.jpg" className alt="author_img" />
                                            </div>
                                            <div className="text_wrapper">
                                                <div className="author_detail">
                                                    <span className="author_name"> Matin Lauran <i className="fa fa-circle" /> </span>
                                                    <span className="publish_date"> March 1, 2019 - <a href="#">Reply</a> </span>
                                                </div>
                                                <div className="author_content">
                                                    <p>Integer porttitor fringilla vestibulum. Phasellus curs our tinnt nulla, ut mattis augue finibus ac. Vivamus elementum enim ac enim ultrices rhoncus. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-12 col-sm-12">
                                        <div className="comments_Box">
                                            <div className="img_wrapper">
                                                <img src="images/cmnt4.jpg" className alt="author_img" />
                                            </div>
                                            <div className="text_wrapper">
                                                <div className="author_detail">
                                                    <span className="author_name"> Eva Marilla <i className="fa fa-circle" /></span>
                                                    <span className="publish_date"> July 10, 2019 - <a href="#">Reply</a> </span>
                                                </div>
                                                <div className="author_content">
                                                    <p>Integer porttitor fringilla vestibulum. Phasellus curs our tinnt nulla, ut mattis augue finibus ac. Vivamus elementum enim ac enim ultrices rhoncus. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="comments_form float_left">
                                <div className="widget_heading">
                                    <h2>leave a comment</h2>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                        <div className="formsix-pos">
                                            <div className="form-group i-name">
                                                <label className="sr-only">Name</label>
                                                <input type="text" className="form-control" required id="namTen-first" placeholder="Full Name *" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* /.col-md-6 */}
                                    <div className="col-md-6 col-sm-12">
                                        <div className="formsix-e">
                                            <div className="form-group i-email">
                                                <label className="sr-only">Email</label>
                                                <input type="email" className="form-control" required id="emailTen" placeholder="Email Address *" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* /.col-md-6 */}
                                    <div className="col-md-12 col-sm-12">
                                        <div className="formsix-m">
                                            <div className="form-group i-message">
                                                <label className="sr-only">Message</label>
                                                <textarea className="form-control" required rows={4} id="messageTen" placeholder="Message" defaultValue={""} />
                                            </div>
                                        </div>
                                    </div>
                                    {/* /.col-md-12 */}
                                </div>
                                {/* /.row*/}
                                <div className="about_btn float_left">
                                    <ul>
                                        <li>
                                            <a href="#"> send now </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="sidebar_widget">
                                <h4>search</h4>
                                <form className="search_form" role="search">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="search" />
                                        <i className="fa fa-search" />
                                    </div>
                                </form>
                            </div>
                            <div className="sidebar_widget">
                                <h4>blog category</h4>
                                <div className="archives_wrapper">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-angle-right" aria-hidden="true" /> all
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-angle-right" aria-hidden="true" />development
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-angle-right" aria-hidden="true" />exterior &amp; interior
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-angle-right" aria-hidden="true" />photography
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-angle-right" aria-hidden="true" />vedio
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sidebar_widget">
                                <div className="wrapper_second_blog wrapper_second_blog_2">
                                    <h4>recent post</h4>
                                    <div className="blog_wrapper1">
                                        <div className="blog_image">
                                            <img src="images/let1.png" className="img-responsive" alt="img" />
                                        </div>
                                        <div className="sv_blog_text">
                                            <h5><a href="#">Happy work awards</a></h5>
                                            <div className="blog_date blog_date_blog"><i className="fa fa-calendar-o" aria-hidden="true" />Aug 28, 2018-19</div>
                                        </div>
                                    </div>
                                    <div className="blog_wrapper2">
                                        <div className="blog_image">
                                            <img src="images/let2.png" className="img-responsive" alt="img" />
                                        </div>
                                        <div className="sv_blog_text">
                                            <h5><a href="#">Replay market to under</a></h5>
                                            <div className="blog_date blog_date_blog"><i className="fa fa-calendar-o" aria-hidden="true" />Aug 28, 2018-19</div>
                                        </div>
                                    </div>
                                    <div className="blog_wrapper2">
                                        <div className="blog_image">
                                            <img src="images/let5.png" className="img-responsive" alt="img" />
                                        </div>
                                        <div className="sv_blog_text">
                                            <h5><a href="#">Who round three world!</a></h5>
                                            <div className="blog_date blog_date_blog"><i className="fa fa-calendar-o" aria-hidden="true" />Aug 28, 2018-19</div>
                                        </div>
                                    </div>
                                    <div className="blog_wrapper2">
                                        <div className="blog_image">
                                            <img src="images/let4.png" className="img-responsive" alt="img" />
                                        </div>
                                        <div className="sv_blog_text">
                                            <h5><a href="#">invest market indicators</a></h5>
                                            <div className="blog_date blog_date_blog"><i className="fa fa-calendar-o" aria-hidden="true" />Aug 28, 2018-19</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar_widget">
                                <h4>blog archive</h4>
                                <div className="archives_wrapper">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-angle-right" aria-hidden="true" /> january-2018
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-angle-right" aria-hidden="true" />february-2018
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-angle-right" aria-hidden="true" />march-2018
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-angle-right" aria-hidden="true" />april-2018
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-angle-right" aria-hidden="true" />may-2018
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-angle-right" aria-hidden="true" />june-2018
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-angle-right" aria-hidden="true" />july-2018
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-angle-right" aria-hidden="true" />august-2018
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sidebar_widget">
                                <h4>tag cloud</h4>
                                <div className="gc_blog_cloud_side_menu">
                                    <ul>
                                        <li><a href="#">all</a>
                                        </li>
                                        <li><a href="#">service</a>
                                        </li>
                                        <li><a href="#">USA</a>
                                        </li>
                                        <li><a href="#">CSS3</a>
                                        </li>
                                        <li><a href="#">coin</a>
                                        </li>
                                        <li><a href="#">ajax</a></li>
                                        <li><a href="#">JSON</a>
                                        </li>
                                        <li><a href="#">marketing</a></li>
                                        <li><a href="#">netbeans</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*blog category wrapper end*/}
            {/* footer section start*/}
            <div className="footer_main_wrapper float_left">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12 col-sm-12">
                            <div className="wrapper_second_about">
                                <div className="wrapper_first_image">
                                    <a href="index.html"><img src="images/logo.png" className="img-responsive" alt="logo" /></a>
                                </div>
                                <p>We are a full service Digital Marketing Agency all the foundational tool you need.</p>
                                <div className="counter-section">
                                    <div className="ft_about_icon float_left">
                                        <i className="flaticon-user" />
                                        <div className="ft_abt_text_wrapper">
                                            <p className="timer"> 62236</p>
                                            <h4>total member</h4>
                                        </div>
                                    </div>
                                    <div className="ft_about_icon float_left">
                                        <i className="flaticon-money-bag" />
                                        <div className="ft_abt_text_wrapper">
                                            <p className="timer">27236</p>
                                            <h4>total deposited</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-12 col-sm-4">
                            <div className="wrapper_second_useful">
                                <h4>usefull links </h4>
                                <ul>
                                    <li><a href="#"><i className="fa fa-angle-right" />About us</a>
                                    </li>
                                    <li><a href="#"><i className="fa fa-angle-right" />contact </a>
                                    </li>
                                    <li><a href="#"><i className="fa fa-angle-right" />services</a>
                                    </li>
                                    <li><a href="#"><i className="fa fa-angle-right" />news</a> </li>
                                    <li><a href="#"><i className="fa fa-angle-right" />blog</a> </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-12 col-sm-4">
                            <div className="wrapper_second_useful wrapper_second_links">
                                <ul>
                                    <li><a href="#"><i className="fa fa-angle-right" />sitemap</a>
                                    </li>
                                    <li><a href="#"><i className="fa fa-angle-right" />FAQ </a>
                                    </li>
                                    <li><a href="#"><i className="fa fa-angle-right" />awards </a>
                                    </li>
                                    <li><a href="#"><i className="fa fa-angle-right" />tstimonials</a>
                                    </li>
                                    <li><a href="#"><i className="fa fa-angle-right" />career</a> </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 col-sm-12">
                            <div className="wrapper_second_useful wrapper_second_useful_2">
                                <h4>contact  us</h4>
                                <ul>
                                    <li>
                                        <h1>+800 568 322</h1></li>
                                    <li><a href="#"><i className="flaticon-mail" />savehyip@example.com</a>
                                    </li>
                                    <li><a href="#"><i className="flaticon-language" />www.example.com</a>
                                    </li>
                                    <li><i className="flaticon-placeholder" />110, B Street Kalani Bagh Dewas, Madhya Pradesh, INDIA #455001
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                            <div className="copyright_wrapper float_left">
                                <div className="copyright">
                                    <p>Copyright <i className="far fa-copyright" /> 2019 <a href="index.html"> SaveHyip</a>. all right reserved - design by <a href="index.html">webstrot</a></p>
                                </div>
                                <div className="social_link_foter">
                                    <ul>
                                        <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                        <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                                        <li><a href="#"><i className="fab fa-google-plus-g" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Blog_Single