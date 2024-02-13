import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../support.css'
import article from '../assets/images/article.png';
import video from '../assets/images/video.png';
import webminar from '../assets/images/webminar.png';
import support from '../assets/images/support.png';

function Support() {
    return (
        <div>
            <Header />
            <div id="wrap" >
                <section className="content__heading-icons-text " id='content__heading-icons-text'>
                    <div className="container">
                        <div className="content__heading-icons-text-heading text-center" id='content__heading-icons-text-heading'>
                            <h5 className='mb-3'>ThePocketLawyer Support</h5>
                            <h2>How Can We Help?</h2>
                        </div>
                        <div className="row ">
                            <div className="col-12 col-lg-6">
                                <div className="ease">
                                    <div>
                                        <img className='support-images' src={article} />
                                    </div>
                                    <div>
                                        <h4>Help Articles</h4>
                                        <p>Get immediate answers to your ThePocketLawyers questions with our 24/7
                                            Knowledge Base.</p>
                                        <p>&nbsp;</p>
                                        <a href="https://support.mycase.com/en/" className="btn" id='support-cta-btn'>
                                            Help Center  </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="ease">
                                    <div>
                                        <img className='support-images' src={webminar} />
                                    </div>
                                    <div>
                                        <h4>ThePocketLawyers Webinar Series</h4>
                                        <p>Get up and running with ThePocketLawyers quickly and successfully.</p>
                                        <p>&nbsp;</p>
                                        <a href="https://mycase.zoom.us/meeting/register/tJcofu2rrz4oHt0nutufiJoQfhdPK6YCaQuQ" className="btn" id='support-cta-btn'>
                                            Register  </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="ease">
                                    <div>
                                        <img className='support-images' src={video} />

                                    </div>
                                    <div>
                                        <h4>Training Videos</h4>
                                        <p>Watch our training videos to ensure you’re getting the most out of ThePocketLawyers.</p>
                                        <p>&nbsp;</p>
                                        <a href="https://www.mycase.com/support/training-sessions/" className="btn" id='support-cta-btn'>
                                            Training videos  </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="ease">
                                    <div>
                                        <img className='support-images' src={support} />
                                    </div>
                                    <div>
                                        <h4>Chat with Expert Support Team</h4>
                                        <p>Live chat with a support representative for assistance. Chat support hours are from M-F
                                            9am-5 pm PT</p>
                                        <p>&nbsp;</p>
                                        <a href="#chatbutton" className="btn" id='support-cta-btn'>
                                            Chat With Support  </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content__image grey   has-one">
                    <div className="container">
                        <div className="row" id='reverse-container'>
                            <div className="ease">
                                <div>
                                    <h4>Award-winning support from best team in the business</h4>
                                    <p><span style={{ fontWeight: 400 }}>Keep your law firm humming regardless of what challenges you face with
                                        tailored and personal support from ThePocketLawyers customer success team. </span></p>
                                    <div className="content__image-extra mt-4 ">
                                        <div>
                                            <ul>
                                                <li style={{ fontWeight: 400 }} aria-level={1}><span style={{ fontWeight: 400 }}>• &nbsp; Connect with the support team via live chat, phone or email</span></li>
                                                <li style={{ fontWeight: 400 }} aria-level={1}><span style={{ fontWeight: 400 }}>• &nbsp; Spend less time troubleshooting and more time doing your best work</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content__image-images">
                                <div className="ease ">
                                    <img width={621} height={650} src="https://img.freepik.com/free-photo/african-american-woman-near-lady-writing-document-table_23-2148042659.jpg?w=740&amp;t=st=1688239807~exp=1688240407~hmac=7917b46d212d5c28e69e42ad290f9815a732c1b9406dd6b6c403a82e0ae3de5e" alt="" data-lazy-src="https://www.mycase.com/wp-content/uploads/2022/04/support-team-e1649047958967.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content__image grey reverse  has-one">
                    <div className="container">
                        <div className="row" >
                            <div className="content__image-images">
                                <div className="ease " >
                                    <img width={2048} height={1434} src="https://img.freepik.com/free-vector/legal-advisers-concept-illustration_114360-20398.jpg?size=626&amp;ext=jpg&amp;ga=GA1.2.233311484.1695720566&amp;semt=ais" alt="" data-lazy-src="https://www.mycase.com/wp-content/uploads/2022/09/helpcenter.png" />

                                </div>
                            </div>
                            <div className="ease" id='custom-ease'>
                                <div>
                                    <h4>Insights, information and innovations at your fingertips</h4>
                                    <p><span style={{ fontWeight: 400 }}>ThePocketLawyers Knowledge Base puts you in control by providing you with
                                        24/7 access to a vast library of helpful articles, feature descriptions and
                                        training videos. Whether you’re a new customer, or you want to ensure you’re
                                        getting the most from ThePocketLawyers, there’s no better resource to find what
                                        you need. </span></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>

    )
}

export default Support