import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Security_Policy() {
    return (
        <div>
            <Header />
            <div className="fixed_portion float_left privacy-container">
                <h2 className='text-center fw-bold mb-5 title-heading'>Security Policy</h2>

                <div>
                    <h3 className='text-center title-desc mb-4'>SECURITY OF INFORMATION COLLECTED</h3>
                    <div className="row px-3">
                        <div className="col-lg-8 mx-auto text-justify">
                            <h6 className='content-text mb-4'>
                                We use account information in a password-protected environment as
                                a security measure to protect your data. We use administrative,
                                physical and technical safeguards to protect data. We maintain a
                                high level of data protection via safeguards such as data backup,
                                audit controls, access controls, and some data encryption. Our Site
                                and the Services use industry standard SSL encryption to enhance
                                security of electronic data transmissions.

                            </h6>
                            <h6 className='content-text mb-4'>
                                ThePocketLawyers will maintain all applicable PCI DSS requirements to the extent that it has
                                access to, or otherwise stores, processes or transmits cardholder
                                data. ThePocketLawyers is responsible for ensuring the security of
                                your credit card/cardholder data that may be stored, processed, or
                                transmitted on your behalf, in the context of a TeleHealth visit.

                            </h6>
                            <h6 className='content-text mb-4'>
                                ThePocketLawyers will maintain all applicable PCI DSS requirements
                                to the extent that it has access to, or otherwise stores, processes or
                                transmits cardholder data. In addition, we urge you to take precautionary measures in
                                maintaining the integrity of your data. Please be responsible in
                                making sure no one can see or has access to your personal account
                                and log-in/password information. If you use a public computer, e.g.,

                                at a library or a university, always remember to log out of the Site or
                                Services.
                            </h6>
                            <h6 className='content-text mb-4'>
                                If you use our Site or Services through your employer’s computer
                                network or through an internet café, library or other potentially non-
                                secure internet connection, such use is at your own risk. It is your
                                responsibility to check beforehand on your employer’s or such other
                                site’s privacy and security policy with respect to Internet use.
                                We are not responsible for your handling, sharing, re-sharing and/or
                                distribution of your personal health information. Moreover, if you
                                forward personal health information electronically to another person
                                on or off the Site or Service, we are not responsible for any harm or
                                other consequences from third party use or re-sharing of your
                                information.
                            </h6>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className='text-center title-desc mb-4 title-sub-desc mx-auto'>SELF REVIEW OF DATA AND ABILITY TO DELETE YOUR ACCOUNT INFORMATION</h3>
                    <div className="row px-3">
                        <div className="col-lg-8 mx-auto text-justify">
                            <h6 className='content-text mb-4'>
                                You may request to delete any personal information and to de-
                                authorize the collection of personal information in the future by
                                sending us an email at <a href="#" className='policy-email-link'>info@ThePocketLawyers.com</a>

                            </h6>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Security_Policy;