import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Blog_Category() {
    return (
        <div>
            <Header />
            {/* blog category wrapper start*/}
            <div className="blog_category_wrapper fixed_portion float_left" id='fixed_portion'>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12">
                            <div className="blog_category_box_wrapper blog_box_wrapper float_left">
                                <div className="blog_news_img_wrapper float_left">
                                    <img src="https://thepocketlawyers.net/images/blog1.jpg" alt="blog_img" />
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
                                        <p>Web typography is now more stylish and malleable than ever before. New CSS3 properties allow for trul unique typographic effects that in the past wouldve required images and custom JavaScript.Each of the following code snippets. This is shop version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.</p>
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
                                            <li>
                                                <Link to="/blog-single" reloadDocument relative='path' className='blog-learn-more'>
                                                    Learn More
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <Link to="/blog-single" reloadDocument relative='path' className='mobile-blog-learn-more'>
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                            <div className="blog_category_box_wrapper blog_box_wrapper float_left">
                                <div id="blogoneSlider" className="carousel slide" data-ride="carousel">
                                    {/* Wrapper for slides */}
                                    <div className="carousel-inner" role="listbox">
                                        <div className="carousel-item active">
                                            <img src="https://thepocketlawyers.net/images/blog2.jpg" className="img-responsive " alt="Image" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="https://thepocketlawyers.net/images/blog1.jpg" className="img-responsive " alt="Image" />
                                        </div>
                                    </div>
                                    {/* Controls */}
                                    <a className="left carousel-control" href="#blogoneSlider" role="button" data-slide="prev">
                                        <span className="flaticon-left-arrow" />
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="right carousel-control" href="#blogoneSlider" role="button" data-slide="next">
                                        <span className="flaticon-arrow-pointing-to-right" aria-hidden="true" />
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                                <div className="blog_date_wrapper">
                                    <p>15
                                        <br /> <span>jun</span></p>
                                </div>
                                <div className="lest_news_cont_wrapper float_left">
                                    <div className="blog_heaidng_top">
                                        <h3> <a href="#">
                                            Alonso Kelina Falao
                                            Asiano Pero
                                        </a></h3>
                                    </div>
                                    <div className="blog-single_cntnt">
                                        <p>Web typography is now more stylish and malleable than ever before. New CSS3 properties allow for trul unique typographic effects that in the past wouldve required images and custom JavaScript.Each of the following code snippets. This is shop version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.</p>
                                    </div>
                                    <div className="lest_news_cont_bottom float_left">
                                        <ul>
                                            <li>
                                                <a href="#"><i className="fa fa-user" />by ajay S.</a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="fa fa-comments" />04 comments</a>
                                            </li>
                                            <li><a href="#"><i className="fas fa-heart" />117 likes</a> </li>
                                            <li>
                                                <Link to="/blog-single" reloadDocument relative='path' className='blog-learn-more'>
                                                    Learn More
                                                </Link>
                                            </li>
                                        </ul>


                                    </div>
                                    <Link to="/blog-single" reloadDocument relative='path' className='mobile-blog-learn-more'>
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                            <div className="blog_category_box_wrapper blog_box_wrapper float_left">
                                <div className="blog_news_img_wrapper float_left">
                                    <img src="https://thepocketlawyers.net/images/blog1.jpg" alt="blog_img" />
                                    <div className="blog_date_wrapper">
                                        <p>15
                                            <br /> <span>jun</span></p>
                                    </div>
                                </div>
                                <div className="lest_news_cont_wrapper float_left">
                                    <div className="blog_heaidng_top">
                                        <h3> <a href="#">The Scroll Hijacking Usability
                                            Nightmare.</a></h3>
                                    </div>
                                    <div className="blog-single_cntnt">
                                        <p>Web typography is now more stylish and malleable than ever before. New CSS3 properties allow for trul unique typographic effects that in the past wouldve required images and custom JavaScript.Each of the following code snippets. This is shop version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                                        </p></div>
                                    <div className="lest_news_cont_bottom float_left">
                                        <ul>
                                            <li>
                                                <a href="#"><i className="fa fa-user" />by akshay H.</a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="fa fa-comments" />04 comments</a>
                                            </li>
                                            <li><a href="#"><i className="fas fa-heart" />37 likes</a> </li>
                                            <li>
                                                <Link to="/blog-single" reloadDocument relative='path' className='blog-learn-more'>
                                                    Learn More
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <Link to="/blog-single" reloadDocument relative='path' className='mobile-blog-learn-more'>
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="blog_pagination_section float_left">
                                    <ul>
                                        <li>
                                            <a href="#" className="prev"> prev </a>
                                        </li>
                                        <li><a href="#">1</a>
                                        </li>
                                        <li><a href="#">2</a>
                                        </li>
                                        <li className="blog_pagination_after"><a href="#">3</a>
                                        </li>
                                        <li><a href="#">4</a>
                                        </li>
                                        <li><a href="#" className="next">next</a>
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
                                                <i className="fa fa-angle-right" aria-hidden="true" /> All
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-angle-right" aria-hidden="true" />Accounting
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-angle-right" aria-hidden="true" />Attorney
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-angle-right" aria-hidden="true" />Bankruptcy
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-angle-right" aria-hidden="true" />Business
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-angle-right" aria-hidden="true" />Civil Litigations
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-angle-right" aria-hidden="true" />Criminal Law
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-angle-right" aria-hidden="true" />Family Law
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-angle-right" aria-hidden="true" />General Law
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-angle-right" aria-hidden="true" />Government
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-angle-right" aria-hidden="true" />Immigration
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-angle-right" aria-hidden="true" />Insurance
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-angle-right" aria-hidden="true" />IP Law
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-angle-right" aria-hidden="true" />Personal Injury Law
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-angle-right" aria-hidden="true" />Payments
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-angle-right" aria-hidden="true" />Real-Estate
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-angle-right" aria-hidden="true" />Transport
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-angle-right" aria-hidden="true" />Trust &amp; Estate
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
                                            <img src="https://thepocketlawyers.net/images/let1.png" className="img-responsive" alt="img" />
                                        </div>
                                        <div className="sv_blog_text">
                                            <h5><a href="#">Happy work awards</a></h5>
                                            <div className="blog_date blog_date_blog"><i className="fa fa-calendar-o" aria-hidden="true" />Aug 28, 2018-19</div>
                                        </div>
                                    </div>
                                    <div className="blog_wrapper2">
                                        <div className="blog_image">
                                            <img src="https://thepocketlawyers.net/images/let2.png" className="img-responsive" alt="img" />
                                        </div>
                                        <div className="sv_blog_text">
                                            <h5><a href="#">Replay market to under</a></h5>
                                            <div className="blog_date blog_date_blog"><i className="fa fa-calendar-o" aria-hidden="true" />Aug 28, 2018-19</div>
                                        </div>
                                    </div>
                                    <div className="blog_wrapper2">
                                        <div className="blog_image">
                                            <img src="https://thepocketlawyers.net/images/let5.png" className="img-responsive" alt="img" />
                                        </div>
                                        <div className="sv_blog_text">
                                            <h5><a href="#">Who round three world!</a></h5>
                                            <div className="blog_date blog_date_blog"><i className="fa fa-calendar-o" aria-hidden="true" />Aug 28, 2018-19</div>
                                        </div>
                                    </div>
                                    <div className="blog_wrapper2">
                                        <div className="blog_image">
                                            <img src="https://thepocketlawyers.net/images/let4.png" className="img-responsive" alt="img" />
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
            <Footer />
        </div>

    )
}

export default Blog_Category