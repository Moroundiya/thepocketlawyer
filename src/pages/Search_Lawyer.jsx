import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../search-lawyer.css';
import { Link } from 'react-router-dom';
// import '../feather.css';

function Search_Lawyer() {
    return (
        <div>
            <div className="main-wrfapper search-page container-fluid" id='search-lawyer-container-all'>
                <Header />

                {/* Page Content */}
                <div className="doctor-content content mt-5">
                    <div className="container-fluid px-5" id='doctor-content-subpage'>
                        <h5 className="py-5" aria-current="page" id='search-lawyer-title'> 2245 Available Lawyers &amp; Attorneys</h5>

                        {/* Doctor Search List */}
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 map-view">
                                <div className="row">
                                    <div className="col-lg-3  theiaStickySidebar">
                                        <div className="filter-contents">
                                            <div className="filter-header">
                                                <h4 className="filter-title">Filter</h4>
                                            </div>
                                            <div className="filter-details">
                                                {/* Filter Grid */}
                                                <div className="filter-grid mt-3">
                                                    <h4>
                                                        <a href="search-2.html#collapseone" data-bs-toggle="collapse">Gender</a>
                                                    </h4>
                                                    <div id="collapseone" className="collapse show">
                                                        <div className="filter-collapse">
                                                            <ul>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="gender" />
                                                                        <span className="checkmark" />
                                                                        Male Gender
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="gender" />
                                                                        <span className="checkmark" />
                                                                        Female Gender
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /Filter Grid */}
                                                {/* Filter Grid */}
                                                <div className="filter-grid mt-3">
                                                    <h4>
                                                        <a href="search-2.html#collapsetwo" data-bs-toggle="collapse">Location</a>
                                                    </h4>
                                                    <div id="collapsetwo" className="collapse show">
                                                        <div className="filter-collapse">
                                                            <select name="" class="form-control required ">
                                                                <option value="" disabled="">Rather Not Say</option>
                                                                <option value="AF">Afghanistan</option>
                                                                <option value="AX">Åland Islands</option>
                                                                <option value="AL">Albania</option>
                                                                <option value="DZ">Algeria</option>
                                                                <option value="AS">American Samoa</option>
                                                                <option value="AD">Andorra</option>
                                                                <option value="AO">Angola</option>
                                                                <option value="AI">Anguilla</option>
                                                                <option value="AQ">Antarctica</option>
                                                                <option value="AG">Antigua and Barbuda</option>
                                                                <option value="AR">Argentina</option>
                                                                <option value="AM">Armenia</option>
                                                                <option value="AW">Aruba</option>
                                                                <option value="AU">Australia</option>
                                                                <option value="AT">Austria</option>
                                                                <option value="AZ">Azerbaijan</option>
                                                                <option value="BS">Bahamas</option>
                                                                <option value="BH">Bahrain</option>
                                                                <option value="BD">Bangladesh</option>
                                                                <option value="BB">Barbados</option>
                                                                <option value="BY">Belarus</option>
                                                                <option value="BE">Belgium</option>
                                                                <option value="BZ">Belize</option>
                                                                <option value="BJ">Benin</option>
                                                                <option value="BM">Bermuda</option>
                                                                <option value="BT">Bhutan</option>
                                                                <option value="BO">Bolivia, Plurinational State of</option>
                                                                <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                                                                <option value="BA">Bosnia and Herzegovina</option>
                                                                <option value="BW">Botswana</option>
                                                                <option value="BV">Bouvet Island</option>
                                                                <option value="BR">Brazil</option>
                                                                <option value="IO">British Indian Ocean Territory</option>
                                                                <option value="BN">Brunei Darussalam</option>
                                                                <option value="BG">Bulgaria</option>
                                                                <option value="BF">Burkina Faso</option>
                                                                <option value="BI">Burundi</option>
                                                                <option value="KH">Cambodia</option>
                                                                <option value="CM">Cameroon</option>
                                                                <option value="CA">Canada</option>
                                                                <option value="CV">Cape Verde</option>
                                                                <option value="KY">Cayman Islands</option>
                                                                <option value="CF">Central African Republic</option>
                                                                <option value="TD">Chad</option>
                                                                <option value="CL">Chile</option>
                                                                <option value="CN">China</option>
                                                                <option value="CX">Christmas Island</option>
                                                                <option value="CC">Cocos (Keeling) Islands</option>
                                                                <option value="CO">Colombia</option>
                                                                <option value="KM">Comoros</option>
                                                                <option value="CG">Congo</option>
                                                                <option value="CD">Congo, the Democratic Republic of the</option>
                                                                <option value="CK">Cook Islands</option>
                                                                <option value="CR">Costa Rica</option>
                                                                <option value="CI">Côte d'Ivoire</option>
                                                                <option value="HR">Croatia</option>
                                                                <option value="CU">Cuba</option>
                                                                <option value="CW">Curaçao</option>
                                                                <option value="CY">Cyprus</option>
                                                                <option value="CZ">Czech Republic</option>
                                                                <option value="DK">Denmark</option>
                                                                <option value="DJ">Djibouti</option>
                                                                <option value="DM">Dominica</option>
                                                                <option value="DO">Dominican Republic</option>
                                                                <option value="EC">Ecuador</option>
                                                                <option value="EG">Egypt</option>
                                                                <option value="SV">El Salvador</option>
                                                                <option value="GQ">Equatorial Guinea</option>
                                                                <option value="ER">Eritrea</option>
                                                                <option value="EE">Estonia</option>
                                                                <option value="ET">Ethiopia</option>
                                                                <option value="FK">Falkland Islands (Malvinas)</option>
                                                                <option value="FO">Faroe Islands</option>
                                                                <option value="FJ">Fiji</option>
                                                                <option value="FI">Finland</option>
                                                                <option value="FR">France</option>
                                                                <option value="GF">French Guiana</option>
                                                                <option value="PF">French Polynesia</option>
                                                                <option value="TF">French Southern Territories</option>
                                                                <option value="GA">Gabon</option>
                                                                <option value="GM">Gambia</option>
                                                                <option value="GE">Georgia</option>
                                                                <option value="DE">Germany</option>
                                                                <option value="GH">Ghana</option>
                                                                <option value="GI">Gibraltar</option>
                                                                <option value="GR">Greece</option>
                                                                <option value="GL">Greenland</option>
                                                                <option value="GD">Grenada</option>
                                                                <option value="GP">Guadeloupe</option>
                                                                <option value="GU">Guam</option>
                                                                <option value="GT">Guatemala</option>
                                                                <option value="GG">Guernsey</option>
                                                                <option value="GN">Guinea</option>
                                                                <option value="GW">Guinea-Bissau</option>
                                                                <option value="GY">Guyana</option>
                                                                <option value="HT">Haiti</option>
                                                                <option value="HM">Heard Island and McDonald Islands</option>
                                                                <option value="VA">Holy See (Vatican City State)</option>
                                                                <option value="HN">Honduras</option>
                                                                <option value="HK">Hong Kong</option>
                                                                <option value="HU">Hungary</option>
                                                                <option value="IS">Iceland</option>
                                                                <option value="IN">India</option>
                                                                <option value="ID">Indonesia</option>
                                                                <option value="IR">Iran, Islamic Republic of</option>
                                                                <option value="IQ">Iraq</option>
                                                                <option value="IE">Ireland</option>
                                                                <option value="IM">Isle of Man</option>
                                                                <option value="IL">Israel</option>
                                                                <option value="IT">Italy</option>
                                                                <option value="JM">Jamaica</option>
                                                                <option value="JP">Japan</option>
                                                                <option value="JE">Jersey</option>
                                                                <option value="JO">Jordan</option>
                                                                <option value="KZ">Kazakhstan</option>
                                                                <option value="KE">Kenya</option>
                                                                <option value="KI">Kiribati</option>
                                                                <option value="KP">Korea, Democratic People's Republic of</option>
                                                                <option value="KR">Korea, Republic of</option>
                                                                <option value="KW">Kuwait</option>
                                                                <option value="KG">Kyrgyzstan</option>
                                                                <option value="LA">Lao People's Democratic Republic</option>
                                                                <option value="LV">Latvia</option>
                                                                <option value="LB">Lebanon</option>
                                                                <option value="LS">Lesotho</option>
                                                                <option value="LR">Liberia</option>
                                                                <option value="LY">Libya</option>
                                                                <option value="LI">Liechtenstein</option>
                                                                <option value="LT">Lithuania</option>
                                                                <option value="LU">Luxembourg</option>
                                                                <option value="MO">Macao</option>
                                                                <option value="MK">Macedonia, the former Yugoslav Republic of</option>
                                                                <option value="MG">Madagascar</option>
                                                                <option value="MW">Malawi</option>
                                                                <option value="MY">Malaysia</option>
                                                                <option value="MV">Maldives</option>
                                                                <option value="ML">Mali</option>
                                                                <option value="MT">Malta</option>
                                                                <option value="MH">Marshall Islands</option>
                                                                <option value="MQ">Martinique</option>
                                                                <option value="MR">Mauritania</option>
                                                                <option value="MU">Mauritius</option>
                                                                <option value="YT">Mayotte</option>
                                                                <option value="MX">Mexico</option>
                                                                <option value="FM">Micronesia, Federated States of</option>
                                                                <option value="MD">Moldova, Republic of</option>
                                                                <option value="MC">Monaco</option>
                                                                <option value="MN">Mongolia</option>
                                                                <option value="ME">Montenegro</option>
                                                                <option value="MS">Montserrat</option>
                                                                <option value="MA">Morocco</option>
                                                                <option value="MZ">Mozambique</option>
                                                                <option value="MM">Myanmar</option>
                                                                <option value="NA">Namibia</option>
                                                                <option value="NR">Nauru</option>
                                                                <option value="NP">Nepal</option>
                                                                <option value="NL">Netherlands</option>
                                                                <option value="NC">New Caledonia</option>
                                                                <option value="NZ">New Zealand</option>
                                                                <option value="NI">Nicaragua</option>
                                                                <option value="NE">Niger</option>
                                                                <option value="NG">Nigeria</option>
                                                                <option value="NU">Niue</option>
                                                                <option value="NF">Norfolk Island</option>
                                                                <option value="MP">Northern Mariana Islands</option>
                                                                <option value="NO">Norway</option>
                                                                <option value="OM">Oman</option>
                                                                <option value="PK">Pakistan</option>
                                                                <option value="PW">Palau</option>
                                                                <option value="PS">Palestinian Territory, Occupied</option>
                                                                <option value="PA">Panama</option>
                                                                <option value="PG">Papua New Guinea</option>
                                                                <option value="PY">Paraguay</option>
                                                                <option value="PE">Peru</option>
                                                                <option value="PH">Philippines</option>
                                                                <option value="PN">Pitcairn</option>
                                                                <option value="PL">Poland</option>
                                                                <option value="PT">Portugal</option>
                                                                <option value="PR">Puerto Rico</option>
                                                                <option value="QA">Qatar</option>
                                                                <option value="RE">Réunion</option>
                                                                <option value="RO">Romania</option>
                                                                <option value="RU">Russian Federation</option>
                                                                <option value="RW">Rwanda</option>
                                                                <option value="BL">Saint Barthélemy</option>
                                                                <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
                                                                <option value="KN">Saint Kitts and Nevis</option>
                                                                <option value="LC">Saint Lucia</option>
                                                                <option value="MF">Saint Martin (French part)</option>
                                                                <option value="PM">Saint Pierre and Miquelon</option>
                                                                <option value="VC">Saint Vincent and the Grenadines</option>
                                                                <option value="WS">Samoa</option>
                                                                <option value="SM">San Marino</option>
                                                                <option value="ST">Sao Tome and Principe</option>
                                                                <option value="SA">Saudi Arabia</option>
                                                                <option value="SN">Senegal</option>
                                                                <option value="RS">Serbia</option>
                                                                <option value="SC">Seychelles</option>
                                                                <option value="SL">Sierra Leone</option>
                                                                <option value="SG">Singapore</option>
                                                                <option value="SX">Sint Maarten (Dutch part)</option>
                                                                <option value="SK">Slovakia</option>
                                                                <option value="SI">Slovenia</option>
                                                                <option value="SB">Solomon Islands</option>
                                                                <option value="SO">Somalia</option>
                                                                <option value="ZA">South Africa</option>
                                                                <option value="GS">South Georgia and the South Sandwich Islands</option>
                                                                <option value="SS">South Sudan</option>
                                                                <option value="ES">Spain</option>
                                                                <option value="LK">Sri Lanka</option>
                                                                <option value="SD">Sudan</option>
                                                                <option value="SR">Suriname</option>
                                                                <option value="SJ">Svalbard and Jan Mayen</option>
                                                                <option value="SZ">Swaziland</option>
                                                                <option value="SE">Sweden</option>
                                                                <option value="CH">Switzerland</option>
                                                                <option value="SY">Syrian Arab Republic</option>
                                                                <option value="TW">Taiwan, Province of China</option>
                                                                <option value="TJ">Tajikistan</option>
                                                                <option value="TZ">Tanzania, United Republic of</option>
                                                                <option value="TH">Thailand</option>
                                                                <option value="TL">Timor-Leste</option>
                                                                <option value="TG">Togo</option>
                                                                <option value="TK">Tokelau</option>
                                                                <option value="TO">Tonga</option>
                                                                <option value="TT">Trinidad and Tobago</option>
                                                                <option value="TN">Tunisia</option>
                                                                <option value="TR">Turkey</option>
                                                                <option value="TM">Turkmenistan</option>
                                                                <option value="TC">Turks and Caicos Islands</option>
                                                                <option value="TV">Tuvalu</option>
                                                                <option value="UG">Uganda</option>
                                                                <option value="UA">Ukraine</option>
                                                                <option value="AE">United Arab Emirates</option>
                                                                <option value="GB">United Kingdom</option>
                                                                <option value="US">United States</option>
                                                                <option value="UM">United States Minor Outlying Islands</option>
                                                                <option value="UY">Uruguay</option>
                                                                <option value="UZ">Uzbekistan</option>
                                                                <option value="VU">Vanuatu</option>
                                                                <option value="VE">Venezuela, Bolivarian Republic of</option>
                                                                <option value="VN">Viet Nam</option>
                                                                <option value="VG">Virgin Islands, British</option>
                                                                <option value="VI">Virgin Islands, U.S.</option>
                                                                <option value="WF">Wallis and Futuna</option>
                                                                <option value="EH">Western Sahara</option>
                                                                <option value="YE">Yemen</option>
                                                                <option value="ZM">Zambia</option>
                                                                <option value="ZW">Zimbabwe</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <input type="text" id="text" class="w-100 my-3" placeholder="Enter State" />
                                                    <input type="text" id="text" class="w-100 my-0" placeholder="Enter City" />
                                                </div>

                                                {/* Filter Grid */}
                                                <div className="filter-grid mt-3">
                                                    <h4>
                                                        <a href="search-2.html#collapsethree" data-bs-toggle="collapse">Consultation Fee</a>
                                                    </h4>
                                                    <div id="collapsethree" className="collapse show">
                                                        <div className="filter-collapse">
                                                            <div className="filter-content filter-content-slider">
                                                                <p>10 <span>100,000</span></p>
                                                                <div className="slider-wrapper">
                                                                    <div id="price-range" />
                                                                </div>
                                                                <div className="price-wrapper">
                                                                    <h6>Price:
                                                                        <span>
                                                                            <span id="pricerangemin" />
                                                                            - <span id="pricerangemax" />
                                                                        </span>
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /Filter Grid */}
                                                {/* Filter Grid */}
                                                <div className="filter-grid mt-3">
                                                    <h4>
                                                        <a href="search-2.html#collapsefour" data-bs-toggle="collapse">Specialization</a>
                                                    </h4>
                                                    <div id="collapsefour" className="collapse show">
                                                        <div className="filter-collapse">
                                                            <select name="" class="form-control required ">
                                                                <option value="" selected disabled>Select</option>
                                                                <option value="">Civil Litigation</option>
                                                                <option value="">Criminal Defense</option>
                                                                <option value="">Family Law</option>
                                                                <option value="">Corporate Law</option>
                                                                <option value="">Real Estate Law</option>
                                                                <option value="">Intellectual Property Law</option>
                                                                <option value="">Bankruptcy Law</option>
                                                                <option value="">Employment Law</option>
                                                                <option value="">Immigration Law</option>
                                                                <option value="">Environmental Law</option>
                                                                <option value="">Tax Law</option>
                                                                <option value="">Healthcare Law</option>
                                                                <option value="">International Law</option>
                                                                <option value="">Estate Planning</option>
                                                                <option value="">Personal Injury Law</option>
                                                                <option value="">Civil Rights Law</option>
                                                                <option value="">Entertainment Law</option>
                                                                <option value="">Sports Law</option>
                                                                <option value="">Admiralty (Maritime) Law</option>
                                                                <option value="">Alternative Dispute Resolution (ADR)</option>

                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /Filter Grid */}
                                                {/* Filter Grid */}
                                                <div className="filter-grid mt-3">
                                                    <h4>
                                                        <a href="search-2.html#collapsefive" data-bs-toggle="collapse">Experience</a>
                                                    </h4>
                                                    <div id="collapsefive" className=" collapse show">
                                                        <div className="filter-collapse">
                                                            <ul>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="experience" />
                                                                        <span className="checkmark" />
                                                                        Fresh
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="experience" />
                                                                        <span className="checkmark" />
                                                                        1-3 Years
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="experience" />
                                                                        <span className="checkmark" />
                                                                        4-6 Years
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="experience" />
                                                                        <span className="checkmark" />
                                                                        7-9 Years
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="experience" />
                                                                        <span className="checkmark" />
                                                                        9 Years Above
                                                                    </label>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="filter-grid mt-3">
                                                    <h4>
                                                        <a href="search-2.html#collapsefour" data-bs-toggle="collapse">Service</a>
                                                    </h4>
                                                    <div id="collapsefour" className="collapse show">
                                                        <div className="filter-collapse">
                                                            <select name="" class="form-control required ">
                                                                <option value="" selected disabled>Select</option>
                                                                <option value="">Legal Consultation</option>
                                                                <option value="">Contract Drafting and Review</option>
                                                                <option value="">Litigation Representation</option>
                                                                <option value="">Legal Research</option>
                                                                <option value="">Document Preparation</option>
                                                                <option value="">Mediation and Arbitration</option>
                                                                <option value="">Estate Planning</option>
                                                                <option value="">Intellectual Property Protection</option>
                                                                <option value="">Business Formation and Transactions</option>
                                                                <option value="">Real Estate Transactions</option>
                                                                <option value="">Employment Law Services</option>
                                                                <option value="">Immigration Services</option>
                                                                <option value="">Bankruptcy Representation</option>
                                                                <option value="">Family Law Services</option>
                                                                <option value="">Criminal Defense Representation</option>
                                                                <option value="">Tax Law Services</option>
                                                                <option value="">Healthcare Law Services</option>
                                                                <option value="">Environmental Law Services</option>
                                                                <option value="">Civil Rights Advocacy</option>
                                                                <option value="">Personal Injury Representation</option>
                                                                <option value="">Entertainment Law Services</option>
                                                                <option value="">Sports Law Services</option>
                                                                <option value="">Admiralty (Maritime) Law Services</option>
                                                                <option value="">Alternative Dispute Resolution (ADR) Services</option>
                                                                <option value="">Compliance and Regulatory Services</option>

                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /Filter Grid */}
                                                {/* Filter Grid */}
                                                <div className="filter-grid mt-3">
                                                    <h4>
                                                        <a href="search-2.html#collapsesix" data-bs-toggle="collapse"> Consultation Shift</a>
                                                    </h4>
                                                    <div id="collapsesix" className="collapse show">
                                                        <div className="filter-collapse">
                                                            <ul>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="online" />
                                                                        <span className="checkmark" />
                                                                        <i className="feather-video online-icon" /> Early Morning
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="online" />
                                                                        <span className="checkmark" />
                                                                        <i className="feather-mic online-icon" /> Morning
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="online" />
                                                                        <span className="checkmark" />
                                                                        <i className="feather-message-square online-icon" /> None
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="online" />
                                                                        <span className="checkmark" />
                                                                        <i className="feather-users online-icon" /> Evening
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="online" />
                                                                        <span className="checkmark" />
                                                                        <i className="feather-users online-icon" /> Night
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="online" />
                                                                        <span className="checkmark" />
                                                                        <i className="feather-users online-icon" /> Midnights
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="online" />
                                                                        <span className="checkmark" />
                                                                        <i className="feather-users online-icon" /> Rounds
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="filter-grid mt-3">
                                                    <h4>
                                                        <a href="search-2.html#collapsesix" data-bs-toggle="collapse"> Booking Class</a>
                                                    </h4>
                                                    <div id="collapsesix" className="collapse show">
                                                        <div className="filter-collapse">
                                                            <ul>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="online" />
                                                                        <span className="checkmark" />
                                                                        <i className="feather-video online-icon" /> Standard
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="online" />
                                                                        <span className="checkmark" />
                                                                        <i className="feather-mic online-icon" /> Feature
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="online" />
                                                                        <span className="checkmark" />
                                                                        <i className="feather-message-square online-icon" /> Urgent
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="online" />
                                                                        <span className="checkmark" />
                                                                        <i className="feather-users online-icon" /> Private
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="online" />
                                                                        <span className="checkmark" />
                                                                        <i className="feather-users online-icon" /> VIP
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="online" />
                                                                        <span className="checkmark" />
                                                                        <i className="feather-users online-icon" /> VVIP
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="filter-grid mt-3">
                                                    <h4>
                                                        <a href="search-2.html#collapsesix" data-bs-toggle="collapse"> Booking Type</a>
                                                    </h4>
                                                    <div id="collapsesix" className="collapse show">
                                                        <div className="filter-collapse">
                                                            <ul>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="online" />
                                                                        <span className="checkmark" />
                                                                        <i className="feather-video online-icon" /> Video
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="online" />
                                                                        <span className="checkmark" />
                                                                        <i className="feather-mic online-icon" /> Voice
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="online" />
                                                                        <span className="checkmark" />
                                                                        <i className="feather-message-square online-icon" /> Chat
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="online" />
                                                                        <span className="checkmark" />
                                                                        <i className="feather-users online-icon" /> Physical Visit
                                                                    </label>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="filter-grid mt-3">
                                                    <h4>
                                                        <a href="search-2.html#collapsesix" data-bs-toggle="collapse">Online Consultation</a>
                                                    </h4>
                                                    <div id="collapsesix" className="collapse show">
                                                        <div className="filter-collapse">
                                                            <ul>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="online" />
                                                                        <span className="checkmark" />
                                                                        <i className="feather-video online-icon" /> Video Call
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="online" />
                                                                        <span className="checkmark" />
                                                                        <i className="feather-mic online-icon" /> Audio Call
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="online" />
                                                                        <span className="checkmark" />
                                                                        <i className="feather-message-square online-icon" /> Chat
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="online" />
                                                                        <span className="checkmark" />
                                                                        <i className="feather-users online-icon" /> Instant Consulting
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /Filter Grid */}
                                                {/* Filter Grid */}
                                                <div className="filter-grid mt-3">
                                                    <h4>
                                                        <a href="search-2.html#collapseseven" data-bs-toggle="collapse">By Rating</a>
                                                    </h4>
                                                    <div id="collapseseven" className="collapse show">
                                                        <div className="filter-collapse">
                                                            <ul>
                                                                <li>
                                                                    <div className="custom_check rating_custom_check d-inline-flex">
                                                                        <input type="checkbox" name="online" />
                                                                        <span className="checkmark" />
                                                                        <div className="rating">
                                                                            <i className="fas fa-star filled" />
                                                                            <i className="fas fa-star filled" />
                                                                            <i className="fas fa-star filled" />
                                                                            <i className="fas fa-star filled" />
                                                                            <i className="fas fa-star filled" />
                                                                            <span className="rating-count">(40)</span>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="custom_check rating_custom_check d-inline-flex">
                                                                        <input type="checkbox" name="online" />
                                                                        <span className="checkmark" />
                                                                        <div className="rating">
                                                                            <i className="fas fa-star filled" />
                                                                            <i className="fas fa-star filled" />
                                                                            <i className="fas fa-star filled" />
                                                                            <i className="fas fa-star filled" />
                                                                            <i className="fas fa-star" />
                                                                            <span className="rating-count">(35)</span>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="custom_check rating_custom_check d-inline-flex">
                                                                        <input type="checkbox" name="online" />
                                                                        <span className="checkmark" />
                                                                        <div className="rating">
                                                                            <i className="fas fa-star filled" />
                                                                            <i className="fas fa-star filled" />
                                                                            <i className="fas fa-star filled" />
                                                                            <i className="fas fa-star" />
                                                                            <i className="fas fa-star" />
                                                                            <span className="rating-count">(20)</span>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="custom_check rating_custom_check d-inline-flex">
                                                                        <input type="checkbox" name="online" />
                                                                        <span className="checkmark" />
                                                                        <div className="rating">
                                                                            <i className="fas fa-star filled" />
                                                                            <i className="fas fa-star filled" />
                                                                            <i className="fas fa-star" />
                                                                            <i className="fas fa-star" />
                                                                            <i className="fas fa-star" />
                                                                            <span className="rating-count">(10)</span>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="custom_check rating_custom_check d-inline-flex">
                                                                        <input type="checkbox" name="online" />
                                                                        <span className="checkmark" />
                                                                        <div className="rating">
                                                                            <i className="fas fa-star filled" />
                                                                            <i className="fas fa-star" />
                                                                            <i className="fas fa-star" />
                                                                            <i className="fas fa-star" />
                                                                            <i className="fas fa-star" />
                                                                            <span className="rating-count">(05)</span>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /Filter Grid */}
                                                {/* Filter Grid */}
                                                <div className="filter-grid mt-3">
                                                    <h4>
                                                        <a href="search-2.html#collapseeight" data-bs-toggle="collapse">Languages</a>
                                                    </h4>
                                                    <div id="collapseeight" className="collapse show">
                                                        <div className="filter-collapse">
                                                            <ul>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="language" />
                                                                        <span className="checkmark" />
                                                                        English
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="language" />
                                                                        <span className="checkmark" />
                                                                        French
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="language" />
                                                                        <span className="checkmark" />
                                                                        Spanish
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="custom_check d-inline-flex">
                                                                        <input type="checkbox" name="language" />
                                                                        <span className="checkmark" />
                                                                        German
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /Filter Grid */}
                                                {/* Filter Btn */}
                                                <div className="filter-btn apply-btn">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <a href="javascript:void(0);" className="btn btn-primary">Apply</a>
                                                        </div>
                                                        <div className="col-6">
                                                            <a href="javascript:void(0);" className="btn btn-outline-primary">Reset</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /Filter Btn */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="doctor-filter-info">
                                            <div className="doctor-filter-inner">
                                                <div>

                                                    <div className="doctor-filter-availability">
                                                        <p id='availability-text'>Availability</p>
                                                        <div className="status-toggle status-tog">
                                                            <input type="checkbox" id="status_6" className="check" />
                                                            <label htmlFor="status_6" className="checktoggle">checkbox</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="doctor-filter-option">
                                                    <div className="doctor-filter-sort">
                                                        <p>Sort</p>
                                                        <div className="doctor-filter-select">
                                                            <select className="">
                                                                <option>A to Z</option>
                                                                <option>B to Z</option>
                                                                <option>C to Z</option>
                                                                <option>D to Z</option>
                                                                <option>E to Z</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="doctor-filter-sort">
                                                        <p className="filter-today d-flex align-items-center">
                                                            <i className="feather-calendar" /> Today 10 Aug to 20 Aug
                                                        </p>
                                                    </div>
                                                    <div className="doctor-filter-sort">
                                                        <ul className="nav">
                                                            <li>
                                                                <a href="javascript:void(0);" id="map-list">
                                                                    <iconify-icon icon="lucide:map-pin"></iconify-icon>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="https://doccure.dreamstechnologies.com/html/template/doctor-search-grid.html">
                                                                    <iconify-icon icon="mingcute:grid-line"></iconify-icon>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="search-2.html" className="active">
                                                                    <iconify-icon icon="material-symbols:list" style={{ color: '#fff', fontSize: '22px' }}></iconify-icon>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card doctor-card">
                                            <div className="card-body">
                                                <div className="doctor-widget-one">
                                                    <div className="doc-info-left">
                                                        <div className="doctor-img">
                                                            <a href="https://doccure.dreamstechnologies.com/html/template/doctor-profile.html">
                                                                <img src="https://img.freepik.com/premium-photo/black-man-business-person-sit-chair-with-boook_862994-13665.jpg?size=626&amp;ext=jpg&amp;ga=GA1.2.233311484.1695720566&amp;semt=ais" className="img-fluid" alt="John Doe" />
                                                            </a>
                                                            <div className="favourite-btn">
                                                                <a href="javascript:void(0)" className="favourite-icon">
                                                                    <i className="fas fa-heart" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="doc-info-cont">
                                                            <h4 className="doc-name">
                                                                <a href="https://doccure.dreamstechnologies.com/html/template/doctor-profile.html">Dr.John Doe</a>
                                                                <iconify-icon icon="material-symbols:check-circle" id="circle-check-icon"></iconify-icon>
                                                            </h4>
                                                            <p className="doc-speciality">MBBS, Dentist</p>
                                                            <div className="clinic-details">
                                                                <p className="doc-location">
                                                                    <iconify-icon icon="lucide:map-pin" id="available-icon"></iconify-icon>
                                                                    <span>0.9</span> mi - Newyork, USA <a href="javascript:void(0);">Get Direction</a>
                                                                </p>
                                                                <p className="doc-location">
                                                                    <iconify-icon icon="dashicons:awards" id="available-icon"></iconify-icon> 20 Years of Experience
                                                                </p>
                                                            </div>
                                                            <div className="reviews-ratings">
                                                                <p>
                                                                    <span><i className="fas fa-star" /> 4.5</span> (35 Reviews)
                                                                </p>
                                                            </div>
                                                            <div className="clinic-details my-details">
                                                                <ul className="clinic-gallery">
                                                                    <li>
                                                                        <a href="https://helpful-bienenstitch-7914f7.netlify.app/assets/img/features/feature-01.jpg" data-fancybox="gallery">
                                                                            <img src="https://helpful-bienenstitch-7914f7.netlify.app/assets/feature-f496401d.jpg" alt="Feature" />
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://helpful-bienenstitch-7914f7.netlify.app/assets/img/features/feature-02.jpg" data-fancybox="gallery">
                                                                            <img src="https://helpful-bienenstitch-7914f7.netlify.app/assets/feature2-82bb9cae.jpg" alt="Feature" />
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://helpful-bienenstitch-7914f7.netlify.app/assets/img/features/feature-03.jpg" data-fancybox="gallery">
                                                                            <img src="https://helpful-bienenstitch-7914f7.netlify.app/assets/feature3-84d9a60d.jpg" alt="Feature" />
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://helpful-bienenstitch-7914f7.netlify.app/assets/img/features/feature-04.jpg" data-fancybox="gallery">
                                                                            <img src="https://helpful-bienenstitch-7914f7.netlify.app/assets/feature4-178ae6d6.jpg" alt="Feature" />
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="clinic-services">
                                                                <span>Dental Fillings</span>
                                                                <span> Whitneing</span>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="doc-info-right">
                                                        <div className="clini-infos">
                                                            <ul>
                                                                <li>
                                                                    <iconify-icon icon="mdi:clock" id='available-icon'></iconify-icon>
                                                                    <span className="available-date available-today">Available Today</span>
                                                                </li>
                                                                <li><iconify-icon icon="fa-solid:thumbs-up" id="available-icon"></iconify-icon> 98% <span className="votes">(252 Votes)</span></li>
                                                                <li><iconify-icon icon="lucide:dollar-sign" id="available-icon"></iconify-icon> $1500 <iconify-icon icon="ph:info" id="available-info-icon"></iconify-icon></li>
                                                            </ul>
                                                        </div>
                                                        <div class="clinic-booking book-appoint" id='clinic-booking'>
                                                            <Link to="/view-profile" reloadDocument relative='path'>
                                                                <button class="btnview-profile" id='btnview-profile'>View Profile</button>
                                                            </Link>
                                                            <Link to="/" reloadDocument relative='path'>
                                                                <button class="btn appoint-btn">Book Appointment</button>
                                                            </Link>
                                                            <Link to="/" reloadDocument relative='path'>
                                                                <button class="btn appoint-btn">Check Availability</button>
                                                            </Link>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card doctor-card">
                                            <div className="card-body">
                                                <div className="doctor-widget-one">
                                                    <div className="doc-info-left">
                                                        <div className="doctor-img">
                                                            <a href="https://doccure.dreamstechnologies.com/html/template/doctor-profile.html">
                                                                <img src="https://img.freepik.com/premium-photo/male-receptionist-elegant-suit-during-work-hours_23-2149714358.jpg?size=626&amp;ext=jpg&amp;ga=GA1.2.233311484.1695720566&amp;semt=ais" className="img-fluid" alt="Darren Elder" />
                                                            </a>
                                                            <div className="favourite-btn">
                                                                <a href="javascript:void(0)" className="favourite-icon">
                                                                    <i className="fas fa-heart" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="doc-info-cont">
                                                            <h4 className="doc-name">
                                                                <a href="https://doccure.dreamstechnologies.com/html/template/doctor-profile.html">Dr. Darren Elder</a>
                                                                <iconify-icon icon="material-symbols:check-circle" id="circle-check-icon"></iconify-icon>
                                                            </h4>
                                                            <p className="doc-speciality">BDS, MDS - Oral &amp; Maxillofacial Surgery</p>
                                                            <div className="clinic-details">
                                                                <p className="doc-location">
                                                                    <iconify-icon icon="lucide:map-pin" id="available-icon"></iconify-icon>
                                                                    1.1 mi - Georgia, USA <a href="javascript:void(0);">Get Direction</a>
                                                                </p>
                                                                <p className="doc-location">
                                                                    <iconify-icon icon="dashicons:awards" id="available-icon"></iconify-icon> 15 Years of Experience
                                                                </p>
                                                            </div>
                                                            <div className="reviews-ratings">
                                                                <p>
                                                                    <span><i className="fas fa-star" /> 4.3</span> (22 Reviews)
                                                                </p>
                                                            </div>
                                                            <div className="clinic-details my-details">
                                                                <ul className="clinic-gallery">
                                                                    <li>
                                                                        <a href="https://helpful-bienenstitch-7914f7.netlify.app/assets/img/features/feature-01.jpg" data-fancybox="gallery">
                                                                            <img src="https://helpful-bienenstitch-7914f7.netlify.app/assets/feature-f496401d.jpg" alt="Feature" />
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://helpful-bienenstitch-7914f7.netlify.app/assets/img/features/feature-02.jpg" data-fancybox="gallery">
                                                                            <img src="https://helpful-bienenstitch-7914f7.netlify.app/assets/feature2-82bb9cae.jpg" alt="Feature" />
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://helpful-bienenstitch-7914f7.netlify.app/assets/img/features/feature-03.jpg" data-fancybox="gallery">
                                                                            <img src="https://helpful-bienenstitch-7914f7.netlify.app/assets/feature3-84d9a60d.jpg" alt="Feature" />
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://helpful-bienenstitch-7914f7.netlify.app/assets/img/features/feature-04.jpg" data-fancybox="gallery">
                                                                            <img src="https://helpful-bienenstitch-7914f7.netlify.app/assets/feature4-178ae6d6.jpg" alt="Feature" />
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="clinic-services">
                                                                <span>Dental Fillings</span>
                                                                <span> Whitneing</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="doc-info-right">
                                                        <div className="clini-infos">
                                                            <ul>
                                                                <li>
                                                                    <iconify-icon icon="mdi:clock" id='available-icon'></iconify-icon>
                                                                    <span className="available-date available-tomorrow">Available Tomorrow</span>
                                                                </li>
                                                                <li><iconify-icon icon="fa-solid:thumbs-up" id="available-icon"></iconify-icon> 90% <span className="votes">(380 Votes)</span></li>
                                                                <li><iconify-icon icon="lucide:dollar-sign" id="available-icon"></iconify-icon> $2800 <iconify-icon icon="ph:info" id="available-info-icon"></iconify-icon></li>
                                                            </ul>
                                                        </div>
                                                        <div class="clinic-booking book-appoint" id='clinic-booking'>
                                                            <Link to="/view-profile" reloadDocument relative='path'>
                                                                <button class="btnview-profile" id='btnview-profile'>View Profile</button>
                                                            </Link>
                                                            <Link to="/" reloadDocument relative='path'>
                                                                <button class="btn appoint-btn">Book Appointment</button>
                                                            </Link>
                                                            <Link to="/" reloadDocument relative='path'>
                                                                <button class="btn appoint-btn">Check Availability</button>
                                                            </Link>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card doctor-card">
                                            <div className="card-body">
                                                <div className="doctor-widget-one">
                                                    <div className="doc-info-left">
                                                        <div className="doctor-img">
                                                            <a href="https://doccure.dreamstechnologies.com/html/template/doctor-profile.html">
                                                                <img src="https://img.freepik.com/premium-photo/black-man-business-person-sit-chair-with-boook_862994-13668.jpg?size=626&amp;ext=jpg&amp;ga=GA1.2.233311484.1695720566&amp;semt=ais" className="img-fluid" alt="Sofia Brient" />
                                                            </a>
                                                            <div className="favourite-btn">
                                                                <a href="javascript:void(0)" className="favourite-icon">
                                                                    <i className="fas fa-heart" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="doc-info-cont">
                                                            <h4 className="doc-name">
                                                                <a href="https://doccure.dreamstechnologies.com/html/template/doctor-profile.html">Dr. Sofia Brient</a>
                                                                <iconify-icon icon="material-symbols:check-circle" id="circle-check-icon"></iconify-icon>
                                                            </h4>
                                                            <p className="doc-speciality">MBBS, Dentist</p>
                                                            <div className="clinic-details">
                                                                <p className="doc-location">
                                                                    <iconify-icon icon="lucide:map-pin" id="available-icon"></iconify-icon>
                                                                    <span>0.9</span> mi - Newyork, USA <a href="javascript:void(0);">Get Direction</a>
                                                                </p>
                                                                <p className="doc-location">
                                                                    <iconify-icon icon="dashicons:awards" id="available-icon"></iconify-icon> 20 Years of Experience
                                                                </p>
                                                            </div>
                                                            <div className="reviews-ratings">
                                                                <p>
                                                                    <span><i className="fas fa-star" /> 4.5</span> (35 Reviews)
                                                                </p>
                                                            </div>
                                                            <div className="clinic-details my-details">
                                                                <ul className="clinic-gallery">
                                                                    <li>
                                                                        <a href="https://helpful-bienenstitch-7914f7.netlify.app/assets/img/features/feature-01.jpg" data-fancybox="gallery">
                                                                            <img src="https://helpful-bienenstitch-7914f7.netlify.app/assets/feature-f496401d.jpg" alt="Feature" />
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://helpful-bienenstitch-7914f7.netlify.app/assets/img/features/feature-02.jpg" data-fancybox="gallery">
                                                                            <img src="https://helpful-bienenstitch-7914f7.netlify.app/assets/feature2-82bb9cae.jpg" alt="Feature" />
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://helpful-bienenstitch-7914f7.netlify.app/assets/img/features/feature-03.jpg" data-fancybox="gallery">
                                                                            <img src="https://helpful-bienenstitch-7914f7.netlify.app/assets/feature3-84d9a60d.jpg" alt="Feature" />
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://helpful-bienenstitch-7914f7.netlify.app/assets/img/features/feature-04.jpg" data-fancybox="gallery">
                                                                            <img src="https://helpful-bienenstitch-7914f7.netlify.app/assets/feature4-178ae6d6.jpg" alt="Feature" />
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="clinic-services">
                                                                <span>Dental Fillings</span>
                                                                <span> Whitneing</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="doc-info-right">
                                                        <div className="clini-infos">
                                                            <ul>
                                                                <li>
                                                                    <iconify-icon icon="mdi:clock" id='available-icon'></iconify-icon>
                                                                    <span className="available-date available-today">Available Today</span>
                                                                </li>
                                                                <li><iconify-icon icon="fa-solid:thumbs-up" id="available-icon"></iconify-icon> 98% <span className="votes">(252 Votes)</span></li>
                                                                <li><iconify-icon icon="lucide:dollar-sign" id="available-icon"></iconify-icon> $1500 <iconify-icon icon="ph:info" id="available-info-icon"></iconify-icon></li>
                                                            </ul>
                                                        </div>
                                                        <div class="clinic-booking book-appoint" id='clinic-booking'>
                                                            <Link to="/view-profile" reloadDocument relative='path'>
                                                                <button class="btnview-profile" id='btnview-profile'>View Profile</button>
                                                            </Link>
                                                            <Link to="/" reloadDocument relative='path'>
                                                                <button class="btn appoint-btn">Book Appointment</button>
                                                            </Link>
                                                            <Link to="/" reloadDocument relative='path'>
                                                                <button class="btn appoint-btn">Check Availability</button>
                                                            </Link>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card doctor-card">
                                            <div className="card-body">
                                                <div className="doctor-widget-one">
                                                    <div className="doc-info-left">
                                                        <div className="doctor-img">
                                                            <a href="https://doccure.dreamstechnologies.com/html/template/doctor-profile.html">
                                                                <img src="https://img.freepik.com/premium-photo/woman-suit-sits-desk-with-her-arms-crossed_671352-3698.jpg?size=626&amp;ext=jpg&amp;ga=GA1.2.233311484.1695720566&amp;semt=ais" className="img-fluid" alt="Johny Rita" />
                                                            </a>
                                                            <div className="favourite-btn">
                                                                <a href="javascript:void(0)" className="favourite-icon">
                                                                    <i className="fas fa-heart" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="doc-info-cont">
                                                            <h4 className="doc-name">
                                                                <a href="https://doccure.dreamstechnologies.com/html/template/doctor-profile.html">Dr. Johny Rita</a>
                                                                <iconify-icon icon="material-symbols:check-circle" id="circle-check-icon"></iconify-icon>
                                                            </h4>
                                                            <p className="doc-speciality">MBBS, Dentist</p>
                                                            <div className="clinic-details">
                                                                <p className="doc-location">
                                                                    <iconify-icon icon="lucide:map-pin" id="available-icon"></iconify-icon>
                                                                    <span>0.9</span> mi - Newyork, USA <a href="javascript:void(0);">Get Direction</a>
                                                                </p>
                                                                <p className="doc-location">
                                                                    <iconify-icon icon="dashicons:awards" id="available-icon"></iconify-icon> 20 Years of Experience
                                                                </p>
                                                            </div>
                                                            <div className="reviews-ratings">
                                                                <p>
                                                                    <span><i className="fas fa-star" /> 4.5</span> (35 Reviews)
                                                                </p>
                                                            </div>
                                                            <div className="clinic-details my-details">
                                                                <ul className="clinic-gallery">
                                                                    <li>
                                                                        <a href="https://helpful-bienenstitch-7914f7.netlify.app/assets/img/features/feature-01.jpg" data-fancybox="gallery">
                                                                            <img src="https://helpful-bienenstitch-7914f7.netlify.app/assets/feature-f496401d.jpg" alt="Feature" />
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://helpful-bienenstitch-7914f7.netlify.app/assets/img/features/feature-02.jpg" data-fancybox="gallery">
                                                                            <img src="https://helpful-bienenstitch-7914f7.netlify.app/assets/feature2-82bb9cae.jpg" alt="Feature" />
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://helpful-bienenstitch-7914f7.netlify.app/assets/img/features/feature-03.jpg" data-fancybox="gallery">
                                                                            <img src="https://helpful-bienenstitch-7914f7.netlify.app/assets/feature3-84d9a60d.jpg" alt="Feature" />
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://helpful-bienenstitch-7914f7.netlify.app/assets/img/features/feature-04.jpg" data-fancybox="gallery">
                                                                            <img src="https://helpful-bienenstitch-7914f7.netlify.app/assets/feature4-178ae6d6.jpg" alt="Feature" />
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="clinic-services">
                                                                <span>Dental Fillings</span>
                                                                <span> Whitneing</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="doc-info-right">
                                                        <div className="clini-infos">
                                                            <ul>
                                                                <li>
                                                                    <iconify-icon icon="mdi:clock" id='available-icon'></iconify-icon>
                                                                    <span className="available-date available-today">Available Today</span>
                                                                </li>
                                                                <li><iconify-icon icon="fa-solid:thumbs-up" id="available-icon"></iconify-icon> 98% <span className="votes">(252 Votes)</span></li>
                                                                <li><iconify-icon icon="lucide:dollar-sign" id="available-icon"></iconify-icon> $1500 <iconify-icon icon="ph:info" id="available-info-icon"></iconify-icon></li>
                                                            </ul>
                                                        </div>
                                                        <div class="clinic-booking book-appoint" id='clinic-booking'>
                                                            <Link to="/view-profile" reloadDocument relative='path'>
                                                                <button class="btnview-profile" id='btnview-profile'>View Profile</button>
                                                            </Link>
                                                            <Link to="/" reloadDocument relative='path'>
                                                                <button class="btn appoint-btn">Book Appointment</button>
                                                            </Link>
                                                            <Link to="/" reloadDocument relative='path'>
                                                                <button class="btn appoint-btn">Check Availability</button>
                                                            </Link>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card doctor-card">
                                            <div className="card-body">
                                                <div className="doctor-widget-one">
                                                    <div className="doc-info-left">
                                                        <div className="doctor-img">
                                                            <a href="https://doccure.dreamstechnologies.com/html/template/doctor-profile.html">
                                                                <img src="https://img.freepik.com/premium-photo/beautiful-african-american-black-woman-with-library-background-generative-ai_35887-12181.jpg?size=626&amp;ext=jpg&amp;ga=GA1.2.233311484.1695720566&amp;semt=ais" className="img-fluid" alt="Deborah Angel" />
                                                            </a>
                                                            <div className="favourite-btn">
                                                                <a href="javascript:void(0)" className="favourite-icon">
                                                                    <i className="fas fa-heart" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="doc-info-cont">
                                                            <h4 className="doc-name">
                                                                <a href="https://doccure.dreamstechnologies.com/html/template/doctor-profile.html">Dr. Deborah Angel</a>
                                                                <iconify-icon icon="material-symbols:check-circle" id="circle-check-icon"></iconify-icon>
                                                            </h4>
                                                            <p className="doc-speciality">MBBS, Dentist</p>
                                                            <div className="clinic-details">
                                                                <p className="doc-location">
                                                                    <iconify-icon icon="lucide:map-pin" id="available-icon"></iconify-icon>
                                                                    <span>0.9</span> mi - Newyork, USA <a href="javascript:void(0);">Get Direction</a>
                                                                </p>
                                                                <p className="doc-location">
                                                                    <iconify-icon icon="dashicons:awards" id="available-icon"></iconify-icon> 20 Years of Experience
                                                                </p>
                                                            </div>
                                                            <div className="reviews-ratings">
                                                                <p>
                                                                    <span><i className="fas fa-star" /> 4.5</span> (35 Reviews)
                                                                </p>
                                                            </div>
                                                            <div className="clinic-details my-details">
                                                                <ul className="clinic-gallery">
                                                                    <li>
                                                                        <a href="https://helpful-bienenstitch-7914f7.netlify.app/assets/img/features/feature-01.jpg" data-fancybox="gallery">
                                                                            <img src="https://helpful-bienenstitch-7914f7.netlify.app/assets/feature-f496401d.jpg" alt="Feature" />
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://helpful-bienenstitch-7914f7.netlify.app/assets/img/features/feature-02.jpg" data-fancybox="gallery">
                                                                            <img src="https://helpful-bienenstitch-7914f7.netlify.app/assets/feature2-82bb9cae.jpg" alt="Feature" />
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://helpful-bienenstitch-7914f7.netlify.app/assets/img/features/feature-03.jpg" data-fancybox="gallery">
                                                                            <img src="https://helpful-bienenstitch-7914f7.netlify.app/assets/feature3-84d9a60d.jpg" alt="Feature" />
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://helpful-bienenstitch-7914f7.netlify.app/assets/img/features/feature-04.jpg" data-fancybox="gallery">
                                                                            <img src="https://helpful-bienenstitch-7914f7.netlify.app/assets/feature4-178ae6d6.jpg" alt="Feature" />
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="clinic-services">
                                                                <span>Dental Fillings</span>
                                                                <span> Whitneing</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="doc-info-right">
                                                        <div className="clini-infos">
                                                            <ul>
                                                                <li>
                                                                    <iconify-icon icon="mdi:clock" id='available-icon'></iconify-icon>
                                                                    <span className="available-date available-today">Available Today</span>
                                                                </li>
                                                                <li><iconify-icon icon="fa-solid:thumbs-up" id="available-icon"></iconify-icon> 98% <span className="votes">(252 Votes)</span></li>
                                                                <li><iconify-icon icon="lucide:dollar-sign" id="available-icon"></iconify-icon> $1500 <iconify-icon icon="ph:info" id="available-info-icon"></iconify-icon></li>
                                                            </ul>
                                                        </div>
                                                        <div class="clinic-booking book-appoint" id='clinic-booking'>
                                                            <Link to="/view-profile" reloadDocument relative='path'>
                                                                <button class="btnview-profile" id='btnview-profile'>View Profile</button>
                                                            </Link>
                                                            <Link to="/" reloadDocument relative='path'>
                                                                <button class="btn appoint-btn">Book Appointment</button>
                                                            </Link>
                                                            <Link to="/" reloadDocument relative='path'>
                                                                <button class="btn appoint-btn">Check Availability</button>
                                                            </Link>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="blog-pagination rev-page">
                                                    <nav>
                                                        <ul className="pagination justify-content-center mt-5">
                                                            <li className="page-item disabled">
                                                                <a className="page-link page-prev" href="search-2.html#" tabIndex={-1}><iconify-icon icon="ant-design:double-left-outlined" id="pagination-control-icon"></iconify-icon> PREV</a>
                                                            </li>
                                                            <li className="page-item active">
                                                                <a className="page-link" href="search-2.html#">1</a>
                                                            </li>
                                                            <li className="page-item">
                                                                <a className="page-link" href="search-2.html#">2</a>
                                                            </li>
                                                            <li className="page-item">
                                                                <a className="page-link" href="search-2.html#">...</a>
                                                            </li>
                                                            <li className="page-item">
                                                                <a className="page-link" href="search-2.html#">10</a>
                                                            </li>
                                                            <li className="page-item">
                                                                <a className="page-link page-next" href="search-2.html#">NEXT <iconify-icon icon="ant-design:double-right-outlined" id="pagination-control-icon"></iconify-icon></a>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-12 theiaStickySidebar map-right">
                                <div id="map" className="map-listing" />
                            </div>
                        </div>
                        {/* /Doctor Search List */}
                    </div>
                </div>
                {/* /Page Content */}

                {/* Cursor */}
                <div className="mouse-cursor cursor-outer" />
                <div className="mouse-cursor cursor-inner" />
                {/* /Cursor */}
            </div>

            <Footer />
        </div>




    )
}

export default Search_Lawyer