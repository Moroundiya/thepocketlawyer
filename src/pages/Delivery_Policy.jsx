import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Delivery_Policy() {
    return (
        <div>
            <Header />

            <div className="fixed_portion float_left privacy-container">
                <h2 className='text-center fw-bold mb-5 title-heading'>Product and Service Delivery Policy</h2>
                <div className='mb-5'>
                    <h3 className='text-center title-desc mb-2'>General Information</h3>
                    <div className="row px-3">
                        <div className="col-lg-8 mx-auto px-3">
                            <h6 className='content-text'>
                                All orders are subject to product and service availability. If a product or service
                                is unavailable at the time you place your order, we will notify you and refund
                                you the total amount of your order, using the original method of payment.
                            </h6>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className='text-center title-desc mb-2'>Delivery Time</h3>
                    <div className="row px-3">
                        <div className="col-lg-8 mx-auto">
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
                    </div>
                </div>

            </div>


            <Footer />
        </div>
    )
}

export default Delivery_Policy