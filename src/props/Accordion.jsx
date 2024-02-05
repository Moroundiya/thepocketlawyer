import React from 'react'

function Accordion(props) {
    return (
        <div id="accordion" role="tablist" className="inner_faq_section inner_faq_section_parent">
            <h4 className='mb-4'>{props.title}</h4>
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="card">
                        {/* Card Title */}
                        <div className="card_pagee" role="tab" id="headingOne">
                            <h5 className="h5-md">
                                <a data-toggle="collapse" href={props.idNameLink1} role="button" aria-expanded="false" aria-controls="collapseOne">
                                    How can i get help by inbound marketing?
                                </a>
                            </h5>
                        </div>
                        {/* Card Content */}
                        <div id={props.idName1} className="collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion" style={{}}>
                            <div className="card-body">
                                <div className="card_img">
                                    <img src="images/ac1.jpg" alt="img" />
                                </div>
                                <div className="card_cntnt">
                                    <p>Morbi accumsan ipsum velit. Nam nec aks tel lus a odio tincidunt auctor. Proi gravida nibh vel velit auctor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card_pagee" role="tab" id="headingTwo">
                            <h5 className="h5-md">
                                <a className="collapsed" data-toggle="collapse" href={props.idNameLink2} role="button" aria-expanded="false" aria-controls="collapseTwo">
                                    What about loan programs?
                                </a>
                            </h5>
                        </div>
                        <div id={props.idName2} className="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion" style={{}}>
                            <div className="card-body">
                                <div className="card_img">
                                    <img src="images/ac2.jpg" alt="img" />
                                </div>
                                <div className="card_cntnt">
                                    <p>Morbi accumsan ipsum velit. Nam nec aks tel lus a odio tincidunt auctor. Proi gravida nibh vel velit auctor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card_pagee" role="tab" id="headingThree">
                            <h5 className="h5-md">
                                <a className="collapsed" data-toggle="collapse" href={props.idNameLink3} role="button" aria-expanded="false" aria-controls="collapseThree">
                                    Our Happy Clients
                                </a>
                            </h5>
                        </div>
                        <div id={props.idName3} className="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                            <div className="card-body">
                                <div className="card_img">
                                    <img src="images/ac3.jpg" alt="img" />
                                </div>
                                <div className="card_cntnt">
                                    <p>Morbi accumsan ipsum velit. Nam nec aks tel lus a odio tincidunt auctor. Proi gravida nibh vel velit auctor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card_pagee" role="tab" id="heading4">
                            <h5 className="h5-md">
                                <a className="collapsed" data-toggle="collapse" href={props.idNameLink4} role="button" aria-expanded="false" aria-controls="collapse41">
                                    Get Training From Experts
                                </a>
                            </h5>
                        </div>
                        <div id={props.idName4} className="collapse" role="tabpanel" aria-labelledby="heading4" data-parent="#accordion">
                            <div className="card-body">
                                <div className="card_img">
                                    <img src="images/ac1.jpg" alt="img" />
                                </div>
                                <div className="card_cntnt">
                                    <p>Morbi accumsan ipsum velit. Nam nec aks tel lus a odio tincidunt auctor. Proi gravida nibh vel velit auctor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card_pagee" role="tab" id="heading7">
                            <h5 className="h5-md">
                                <a className="collapsed" data-toggle="collapse" href={props.idNameLink5} role="button" aria-expanded="false" aria-controls="collapseT">
                                    User Guide: Getting Started
                                </a>
                            </h5>
                        </div>
                        <div id={props.idName5} className="collapse" role="tabpanel" aria-labelledby="heading7" data-parent="#accordion">
                            <div className="card-body">
                                <div className="card_img">
                                    <img src="images/ac3.jpg" alt="img" />
                                </div>
                                <div className="card_cntnt">
                                    <p>Morbi accumsan ipsum velit. Nam nec aks tel lus a odio tincidunt auctor. Proi gravida nibh vel velit auctor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="card">
                        {/* Card Title */}
                        <div className="card_pagee" role="tab" id="headingeight">
                            <h5 className="h5-md">
                                <a data-toggle="collapse" href={props.idNameLink6} role="button" aria-expanded="true" aria-controls="collapseeight">
                                    What about loan programs?
                                </a>
                            </h5>
                        </div>
                        {/* Card Content */}
                        <div id={props.idName6} className="collapse" role="tabpanel" aria-labelledby="headingeight" data-parent="#accordion" style={{}}>
                            <div className="card-body">
                                <div className="card_img">
                                    <img src="images/ac1.jpg" alt="img" />
                                </div>
                                <div className="card_cntnt">
                                    <p>Morbi accumsan ipsum velit. Nam nec aks tel lus a odio tincidunt auctor. Proi gravida nibh vel velit auctor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        {/* Card Title */}
                        <div className="card_pagee" role="tab" id="headingthe">
                            <h5 className="h5-md">
                                <a className="collapsed" data-toggle="collapse" href={props.idNameLink7} role="button" aria-expanded="false" aria-controls="collapsethe">
                                    User Guide: Getting Started
                                </a>
                            </h5>
                        </div>
                        {/* Card Content */}
                        <div id={props.idName7} className="collapse" role="tabpanel" aria-labelledby="headingthe" data-parent="#accordion" style={{}}>
                            <div className="card-body">
                                <div className="card_img">
                                    <img src="images/ac1.jpg" alt="img" />
                                </div>
                                <div className="card_cntnt">
                                    <p>Morbi accumsan ipsum velit. Nam nec aks tel lus a odio tincidunt auctor. Proi gravida nibh vel velit auctor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        {/* Card Title */}
                        <div className="card_pagee" role="tab" id="headingthey">
                            <h5 className="h5-md">
                                <a className="collapsed" data-toggle="collapse" href={props.idNameLink8} role="button" aria-expanded="false" aria-controls="collapsenine">
                                    Pixel perfect and responsive
                                </a>
                            </h5>
                        </div>
                        {/* Card Content */}
                        <div id={props.idName8} className="collapse" role="tabpanel" aria-labelledby="headingthey" data-parent="#accordion" style={{}}>
                            <div className="card-body">
                                <div className="card_img">
                                    <img src="images/ac1.jpg" alt="img" />
                                </div>
                                <div className="card_cntnt">
                                    <p>Morbi accumsan ipsum velit. Nam nec aks tel lus a odio tincidunt auctor. Proi gravida nibh vel velit auctor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card_pagee" role="tab" id="headingnine">
                            <h5 className="h5-md">
                                <a className="collapsed" data-toggle="collapse" href={props.idNameLink9} role="button" aria-expanded="false" aria-controls="collapsenine">
                                    Imagination Is The Beginning
                                </a>
                            </h5>
                        </div>
                        <div id={props.idName9} className="collapse" role="tabpanel" aria-labelledby="headingnine" data-parent="#accordion" style={{}}>
                            <div className="card-body">
                                <div className="card_img">
                                    <img src="images/ac2.jpg" alt="img" />
                                </div>
                                <div className="card_cntnt">
                                    <p>Morbi accumsan ipsum velit. Nam nec aks tel lus a odio tincidunt auctor. Proi gravida nibh vel velit auctor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card_pagee" role="tab" id="headingTen">
                            <h5 className="h5-md">
                                <a className="collapsed" data-toggle="collapse" href={props.idNameLink10} role="button" aria-expanded="false" aria-controls="collapseTen">
                                    Clean and Unique
                                </a>
                            </h5>
                        </div>
                        <div id={props.idName10} className="collapse" role="tabpanel" aria-labelledby="headingTen" data-parent="#accordion">
                            <div className="card-body">
                                <div className="card_img">
                                    <img src="images/ac3.jpg" alt="img" />
                                </div>
                                <div className="card_cntnt">
                                    <p>Morbi accumsan ipsum velit. Nam nec aks tel lus a odio tincidunt auctor. Proi gravida nibh vel velit auctor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function createAccordion(details) {
    <Accordion key={details.id} title={details.title} idNameLink1={details.idNameLink1} idNameLink2={details.idNameLink2} idNameLink3={details.idNameLink3} idNameLink4={details.idNameLink4} idNameLink5={details.idNameLink5} idNameLink6={details.idNameLink6} idNameLink7={details.idNameLink7} idNameLink8={details.idNameLink8} idNameLink9={details.idNameLink9} idNameLink10={details.idNameLink10}
        idName1={details.idName1} idName2={details.idName2} idName3={details.idName3} idName4={details.idName4} idName5={details.idName5} idName6={details.idName6}
        idName7={details.idName7} idName8={details.idName8} idName9={details.idName9} idName10={details.idName10}
    />
}

export default Accordion;
export { createAccordion }