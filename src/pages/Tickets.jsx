import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../tickets.css';

function Tickets() {
    return (
        <div>
            <Header />





            <div id='ticket-container'>
                <div className="row">
                    <div className="align-items-center col-4 d-flex mx-auto">
                        <div className="card">
                            <div className="card-body border">
                                <div className>
                                    <h2 className="mb-3 f-w-600">Search Your Ticket</h2>
                                </div>
                                <form method="POST" action="">
                                    <input type="hidden" name="_token" defaultValue="Ghbk25BApZgIs0vFLFzeTtid7OEzEVn8Lu9Ewpva" autoComplete="off" />
                                    <div className>
                                        <div className="form-group mb-3">
                                            <label htmlFor="ticket_id" className="form-label">Ticket Number</label>
                                            <input type="text" className="form-control " min={0} id="ticket_id" name="ticket_id" placeholder="Enter Ticket Number" required defaultValue autofocus />
                                            <div className="invalid-feedback d-block">
                                            </div>
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input type="email" className="form-control " id="email" name="email" placeholder="Email address" reuired defaultValue />
                                            <div className="invalid-feedback d-block">
                                            </div>
                                        </div>
                                        <div className="d-grid">
                                            <button className="btn btn-primary btn-submit btn-block mt-2">Search</button>
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