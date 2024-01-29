import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import contact1 from '../assets/images/contact1.jpg';
import contact2 from '../assets/images/contact2.jpg';
import contact3 from '../assets/images/contact3.jpeg';


function Contact_Us() {
  const [phone, setPhone] = useState('');
  return (
    <div>
      <div className="cursor" />
      {/* Top Scroll Start */}
      <a href="javascript:" id="return-to-top"> <i className="fas fa-angle-double-up" /></a>
      {/* Top Scroll End */}
      {/* cp navi wrapper Start */}
      <Header />
      {/* navi wrapper End */}


      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={contact1} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={contact2} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={contact3} alt="image" />
        </SwiperSlide>

      </Swiper>



      {/* map wrapper start */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3963.3290474953865!2d3.348139!3d6.605971!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93db9667a523%3A0x389cab7837c67f88!2sEdubridge%20Digital%20Academy!5e0!3m2!1sen!2sng!4v1706462872636!5m2!1sen!2sng"
        height={600}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className='w-100'
      />


      {/* map wrapper end */}
      {/* contact_wrapper start */}
      <div className="contact_section float_left">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="sv_heading_wraper heading_wrapper_dark dark_heading">
                <h4> get in touch</h4>
                <h3>contact us for support</h3>
              </div>
            </div>
            <div className="col-lg-10 offset-lg-1 col-md-12 col-sm-12 col-12">
              <form>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="form-pos">
                      <div className="form-group i-name">
                        <input type="text" className="form-control require" name="first_name" required placeholder="First Name*" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-pos">
                      <div className="form-group i-name">
                        <input type="text" className="form-control require" name="last_name" required placeholder="last Name*" />
                      </div>
                    </div>
                  </div>
                  {/* /.col-md-12 */}
                  <div className="col-lg-6 col-md-6">
                    <div className="form-e">
                      <div className="form-group i-email">
                        <label className="sr-only">Email </label>
                        <input type="email" className="form-control require" name="email" required placeholder=" Email *" data-valid="email" data-error="Email should be valid." />
                      </div>
                    </div>
                  </div>

                  {/* /.col-md-12 */}
                  <div className="col-lg-6 col-md-6">
                    <div className="form-s">
                      <div className="form-group i-subject">
                        {/* <input type="mobile" className="form-control" name="mobile" required placeholder="Mobile No" /> */}

                        <PhoneInput
                          defaultCountry="ua"
                          value={phone}
                          onChange={(phone) => setPhone(phone)}
                          className=""
                        />

                      </div>
                    </div>
                  </div>
                  {/* /.col-md-12 */}
                  <div className="col-lg-6 col-md-6">
                    <div className="form-s">
                      <div className="form-group i-subject">
                        <input type="mobile" className="form-control" name="country" required placeholder="Country" />
                      </div>
                    </div>
                  </div>
                  {/* /.col-md-12 */}
                  <div className="col-lg-6 col-md-6">
                    <div className="form-s">
                      <div className="form-group i-subject">
                        <input type="mobile" className="form-control" name="state" required placeholder="State" />
                      </div>
                    </div>
                  </div>
                  {/* /.col-md-12 */}
                  <div className="col-lg-6 col-md-6">
                    <div className="form-s">
                      <div className="form-group i-subject">
                        <input type="mobile" className="form-control" name="city" required placeholder="City" />
                      </div>
                    </div>
                  </div>
                  {/* /.col-md-12 */}
                  <div className="col-lg-6 col-md-6">
                    <div className="form-s">
                      <div className="form-group i-subject">
                        <input type="text" className="form-control" name="Subject" required placeholder="subject" />
                      </div>
                    </div>
                  </div>
                  {/* /.col-md-12 */}
                  <div className="col-md-12">
                    <div className="form-m">
                      <div className="form-group i-message">
                        <textarea className="form-control require" name="message" required rows={5} id="messageTen" placeholder=" Message" defaultValue={""} />
                      </div>
                    </div>
                  </div>
                  {/* /.col-md-12 */}
                  <div className="col-md-12">
                    <div className="tb_es_btn_div">
                      <div className="response" />
                      <div className="tb_es_btn_wrapper conatct_btn2 cont_bnt">
                        <button type="button" className="submitForm">send message !</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="contact_section float_left">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="sv_heading_wraper heading_wrapper_dark dark_heading">
                <h4> get in touch</h4>
                <h3>Have Any Question?</h3>
              </div>
            </div>
            <div className="col-lg-10 offset-lg-1 col-md-12 col-sm-12 col-12">
              <div className="wrapper_second_useful wrapper_second_useful_2 ">
                <ul>
                  <li>
                    <h1 className='help-contact-details'>+234 915 848 2622</h1></li>
                  <li className='help-contact-details'><a href="#"><i className="flaticon-mail" />support@thepocketlawyers.net</a>
                  </li>
                  <li className='help-contact-details'><a href="#"><i className="flaticon-language" />www.thepocketlawyers.net</a>
                  </li>
                  <li className='help-contact-details'><i className="flaticon-placeholder help-contact-details" />3rd Floor, 152 Obafemi Awolowo Way Allen Junctions Lagos, Nigeria.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact_wrapper end */}
      {/* payments wrapper start */}
      <div className="payments_wrapper float_left" id='transaction-wrapper-container'>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="sv_heading_wraper half_section_headign index2_heading">
                <h4>Payment Methods</h4>
                <h3>Accepted Payment Method</h3>
                <div className="line_shape" />
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
              <div className="payment_slider_wrapper">
                <div className="owl-carousel owl-theme">
                  <div className="item">
                    <div className="partner_img_wrapper float_left">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png" className="img-responsive" alt="img" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="partner_img_wrapper float_left">
                      <img src="https://logos-world.net/wp-content/uploads/2020/07/PayPal-Logo.png" className="img-responsive" alt="img" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="partner_img_wrapper float_left">
                      <img src="https://1000logos.net/wp-content/uploads/2023/11/Flutterwave-Logo-2016.png" className="img-responsive" alt="img" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="partner_img_wrapper float_left">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Paystack_Logo.png" className="img-responsive" alt="img" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="partner_img_wrapper float_left">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Razorpay_logo.svg/1200px-Razorpay_logo.svg.png" className="img-responsive" alt="img" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="partner_img_wrapper float_left">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Skrill_logo.svg/2560px-Skrill_logo.svg.png" className="img-responsive" alt="img" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="partner_img_wrapper float_left">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Payoneer_logo.svg/2560px-Payoneer_logo.svg.png" className="img-responsive" alt="img" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="partner_img_wrapper float_left">
                      <img src="https://banner2.cleanpng.com/20171220/kke/mastercard-logo-png-5a3a1f282e6103.818127331513758504194124.jpg" className="img-responsive" alt="img" />
                    </div>
                  </div>

                  <div className="item">
                    <div className="partner_img_wrapper float_left">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/2/23/Verve_Image.png" className="img-responsive" alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* payments wrapper end */}
      {/* footer section start*/}
      <Footer />
    </div>

  )
}

export default Contact_Us