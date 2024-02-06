import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


function Grievance_Policy() {
    return (
        <div>
            <Header />
            <div className="fixed_portion float_left privacy-container">
                <h2 className='text-center fw-bold mb-5 title-heading'>Customer and Merchant Grievance Redresser </h2>
                <div className='mb-5'>
                    {/* <h3 className='text-center title-desc mb-4'>General Information</h3> */}
                    <div className="row px-3">
                        <div className="col-lg-8 mx-auto px-3 text-justify">
                            <h6 className='content-text'>
                                ThePocketLawyers is a transparent and ethical company and expects that its ethics and values are intentionally upheld across all parties. ThePocketLawyers is bound by the relevant law of the land.
                                This policy outlines a structured grievance redresser mechanism available to customers and merchants for escalating their complaints with ThePocketLawyers. ThePocketLawyers will deal with all customer complaints in transparent and timely manner
                            </h6>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className='text-center fw-bold mb-5 title-heading title-sub-desc mx-auto px-5'>Redresser mechanism for grievances raised over chat / app / email / phone</h4>

                    <div className="row px-3">
                        <div className="col-lg-8 mx-auto text-justify">
                            <h6 className='content-text mb-4'>
                                For walk-ins, kindly visit a selected partner&#39;s location within their opening hour,
                                preferably 1 hour before close of business.

                                For home and office order collection, an estimated service delivery time will be
                                provided to you within an hour of ordering for home or office service.

                            </h6>
                            <h6 className='content-text'>
                                Customer Care Service unit or Partner will contact you and confirm the exact
                                time they will be visiting you for home or office order collection.

                                Unless there are exceptional circumstances, delivery partner will make every

                                effort to fulfill your home or office service request within 24 business hours of
                                the date of your order. Business day means Monday to Friday, except
                                holidays.
                            </h6>
                        </div>
                        <div className="col-lg-8 mx-auto text-justify my-5">
                            <h6>Escalation matrix:</h6>
                            <div className='pl-3 mt-4'>
                                <h6 className='font-weight-bold mb-3'>Level 1 (Queries)</h6>
                                <h6 className='content-text'>For in-app and Website payments and Transactions (Video, Voice, Chat and Physical Visit),
                                    Consultation, Booking, Drugs Ordering, Test, Equipment , Accessories , Health insurance
                                    prepared and postpaid
                                </h6>
                                <ul className='content-text-ul pl-3' style={{ listStyleType: 'disc', color: 'black' }}>
                                    <li>
                                        Online queries in Website and Mobile app
                                        <br />
                                        First response time – 1 working days <br />
                                        Final resolution time – 3 working days
                                    </li>
                                    <li>
                                        Helpline
                                        <ul className='pl-4' style={{ listStyleType: 'circle' }}>
                                            <li>
                                                Consultation and Booking of Doctors – Chat online, email, And Call
                                            </li>
                                            <li>
                                                Financial Services – Deposit, Transfer, Wallet etc. – Chat online, email, And Call
                                            </li>

                                            <li>
                                                Ordering of Drugs, Other Products and Equipment – Chat online, email, And Call
                                            </li>
                                            <li>
                                                Signup, Signin , Forget Password, OTP etc.– Chat online, email, And Call
                                            </li>
                                            <li>
                                                Customers and Vendor Partnership – Chat online, email, And Call
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Final resolution time – 3 working days
                                    </li>

                                    <p className='content-text'>
                                        If TheSkyDoctors needs additional time for any case, customer or client will be informed on the reason of delay and expected resolution timelines.

                                        For payments done by customers through ThePocketLawyers on other websites / apps/stores/shops. Kindly contact your merchant customer care for service / product delivery and quality issues. In case of payment being failed or not acknowledged by merchant, kindly contact your bank customers care if reversal is not done after 48 hours.

                                        For merchants accepting payments through ThePocketLawyers for their websites / app/stores/shops
                                    </p>
                                </ul>
                                <h6 className='font-weight-bold mb-3 mt-5'>Level 2 (Complaints)</h6>
                                <h6 className='content-text'>If customer’s issue is not resolved even after contacting various complaint resolution channels, he/she can reach out to our grievance officer at:
                                </h6>
                                <h6 className='font-weight-bold mb-3 mt-4'>Grievance Support Unit</h6>
                                <h6 className='content-text'>
                                    Next Software And Technology  Limited <br />
                                    3rd Floor , 152 Obafemi Awolowo Way,<br />
                                    Ikeja Lagos, Nigeria.<br />
                                    Opposite AirPort Hotel, By Allen Round About<br />
                                    Email: grievance@thepocketlawyers.net

                                </h6>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
            <Footer />
        </div>
    )
}

export default Grievance_Policy