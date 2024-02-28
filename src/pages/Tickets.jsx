import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../tickets.css';

function Tickets() {
    return (
        <div>
            <Header />

            <div id='ticket-container' className='container'>
                <div className="row">
                    <div className="col-lg-4 col-12 mb-5">
                        <div className="card">
                            <div className="card-body border search-tick-container">
                                <div className>
                                    <h2 className="mb-4 f-w-600 search-h2">Search Your Ticket</h2>
                                </div>
                                <form method="POST" action="">
                                    <input type="hidden" name="_token" defaultValue="Ghbk25BApZgIs0vFLFzeTtid7OEzEVn8Lu9Ewpva" autoComplete="off" />
                                    <div className="">
                                        <div className="form-group mb-3">
                                            <label htmlFor="ticket_id" className="form-label">Ticket Number</label>
                                            <input type="text" className="form-control " id="ticket_id" name="ticket_id" placeholder="Enter Ticket Number" required />
                                            <div className="invalid-feedback d-block">
                                            </div>
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input type="email" className="form-control " id="email" name="email" placeholder="Email address" required />
                                            <div className="invalid-feedback d-block">
                                            </div>
                                        </div>
                                        <div className="d-grid">
                                            <button className="btn btn-primary btn-submit btn-block mt-4">Search</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8 col-12">
                        <div className="card rounded-0 ">
                            <div className="card-body w-100">
                                <form method="post" action="https://demo.rajodiya.com/advocatego-saas/home" className="create-form" encType="multipart/form-data">
                                    <input type="hidden" name="_token" defaultValue="Ghbk25BApZgIs0vFLFzeTtid7OEzEVn8Lu9Ewpva" autoComplete="off" />
                                    <h2 className=" f-w-600 search-h2 mb-4">Create New Ticket</h2>

                                    <div className="text-start row">
                                        <div className="col-lg-6">
                                            <div className="form-group mb-3 6">
                                                <label htmlFor="name" className="form-label">Name</label>
                                                <div className="form-icon-user">
                                                    <input type="text" className="form-control " id="name" name="name" placeholder="Name" required />
                                                    <div className="invalid-feedback d-block">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group mb-3 6">
                                                <label htmlFor="email" className="form-label">Email</label>
                                                <div className="form-icon-user">
                                                    <input type="email" className="form-control " id="email" name="email" placeholder="Email" required />
                                                    <div className="invalid-feedback d-block">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group mb-3 6">
                                                <label htmlFor="category" className="form-label">Category</label>
                                                <select className="form-select" id="category" name="category" data-placeholder="Select Category">
                                                    <option value selected>Select Category</option>
                                                    <option value={1}>
                                                        Bug</option>
                                                    <option value={2}>
                                                        Questions</option>
                                                    <option value={3}>
                                                        New Installation</option>
                                                    <option value={4}>
                                                        Support</option>
                                                    <option value={5}>
                                                        Orla</option>
                                                    <option value={6}>
                                                        Angelica</option>
                                                    <option value={7}>
                                                        Demetria</option>
                                                </select>
                                                <div className="invalid-feedback d-block">
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group mb-3 6">
                                                <label htmlFor="subject" className="form-label">Subject</label>
                                                <div className="form-icon-user">
                                                    <input type="text" className="form-control " id="subject" name="subject" placeholder="Subject" required />
                                                    <div className="invalid-feedback d-block">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group mb-3 6">
                                                <label htmlFor="company" className="form-label">Company</label>
                                                <select className="form-select" id="company" name="company" data-placeholder="Select Company">
                                                    <option value selected>Select Company</option>
                                                    <option value={2}>
                                                        Company</option>
                                                    <option value={5}>
                                                        Thaddeus Head</option>
                                                    <option value={6}>
                                                        Illiana Dunn</option>
                                                    <option value={7}>
                                                        Kevin Barnett</option>
                                                    <option value={8}>
                                                        Ora Reid</option>
                                                    <option value={9}>
                                                        Sigourney William</option>
                                                    <option value={10}>
                                                        Davis Mccall</option>
                                                    <option value={11}>
                                                        Bertha Stephenson</option>
                                                    <option value={12}>
                                                        Jada Bowers</option>
                                                    <option value={13}>
                                                        Vielka Diaz</option>
                                                    <option value={46}>
                                                        Sara Levine</option>
                                                </select>
                                                <div className="invalid-feedback d-block">
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group mb-3 6">
                                                <label htmlFor="priority" className="form-label">Priority</label>
                                                <select className="form-select" id="priority" name="priority" data-placeholder="Select Priority">
                                                    <option value selected>Select Priority</option>
                                                    <option value={1}>
                                                        Luke</option>
                                                    <option value={2}>
                                                        Xantha</option>
                                                    <option value={3}>
                                                        Rama</option>
                                                    <option value={4}>
                                                        Bert</option>
                                                    <option value={5}>
                                                        Ora</option>
                                                    <option value={6}>
                                                        Kathleen</option>
                                                    <option value={7}>
                                                        Jada</option>
                                                </select>
                                                <div className="invalid-feedback d-block">
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group mb-3 12">
                                                <label htmlFor="message" className="form-label">Message</label> <br />
                                                <textarea name="" id="ticket-message" className='w-100'>

                                                </textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group mb-3 6">
                                                <label className="form-label">Attachments
                                                    <small> (You can select multiple files)</small></label>
                                                <div className="choose-file form-group">
                                                    <label htmlFor="file" className="form-label">
                                                        <div>Choose File Here</div>
                                                        <input type="file" className="form-control h-auto " multiple name="attachments[]" id="file" data-filename="multiple_file_selection" />
                                                    </label>
                                                    <p className="multiple_file_selection" />
                                                </div>
                                            </div>
                                            <div className="invalid-feedback d-block">
                                            </div>
                                        </div>  

                                    </div>

                                    <div className="text-center">
                                        <div className="d-inline-block">
                                            <input type="hidden" name="status" defaultValue="New Ticket" />
                                            <button className="btn btn-primary text-white btn-block mt-2">
                                                Create Ticket
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>

            </div>


            <Footer />
        </div>
    )
}

export default Tickets