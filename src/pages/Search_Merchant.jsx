import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../merchant.css'

function Search_Merchant() {
    return (
        <div>
            <Header />
            <div className="main-wrapper ">
                <div>
                    <div className="merchant-header">
                        <div className="contented">
                            <div className="merchant-section" id='merchant-section'>
                                <div id="lawyer-count-bar">
                                    <h5 aria-current="page" id='search-lawyer-title'> 2245 Available Merchants</h5>
                                    <select name="" id="lawyer-count-bar-select">
                                        <option value="" selected disabled>Select</option>
                                        <option value="">Rating</option>
                                        <option value="">Popular</option>
                                        <option value="">Latest</option>
                                        <option value="">Free</option>
                                        <option value="">Home Delivery</option>
                                    </select>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
                                        <div className="card search-filter" id="searched">
                                            <div className="card-header" id="searched">
                                                <h4 className="card-title mb-0 text-white">Search Filter</h4>
                                            </div>
                                            <div className="card-body">
                                                <div className="filter-widget">
                                                    <label htmlFor="">Location</label>
                                                    <br />
                                                    <select name="Select Country" id="country">
                                                        <option value="" disabled selected>Select Country</option>
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
                                                    <input type="text" id="text" className='w-100 my-3' placeholder="Enter State" />
                                                    <input type="text" id="text" className='w-100 my-0' placeholder="Enter City" />
                                                </div>
                                                <div className="merchants mt-1">
                                                    <form action="#" className="merchant__type">
                                                        <label htmlFor="">Specialization</label>
                                                        <br />
                                                        <select name="Audiologist" id="audiologist">
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
                                                        <br />
                                                        <label htmlFor="" className='mt-1'>Service</label>
                                                        <br />
                                                        <select name="Dental" id="dental">
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
                                                        <br />
                                                        <label htmlFor="" className='mt-1'>Merchant Type</label>
                                                        <br />
                                                        <select name="merchant" id="merchant" >
                                                            <option value="">Legal Solutions</option>
                                                            <option value="">Conference &amp; Events</option>
                                                            <option value="">
                                                                Academic &amp; Training
                                                            </option>
                                                            <option value="">Public Law/Regulations</option>
                                                            <option value="">Education &amp; Craft Supplies</option>
                                                            <option value="">Office Supplies</option>
                                                            <option value="">Legal Fashion &amp; Bags</option>
                                                            <option value="">Costume &amp; Outfits</option>
                                                            <option value="">Books &amp; Publications </option>
                                                            <option value="">Legal Accessories &amp; Signage</option>


                                                        </select>
                                                        <br />
                                                        <label htmlFor="" className='mt-1'>Merchant Features</label>
                                                        <br />
                                                        <select name="merchantfeatures" id="merchant" >
                                                            <option value="">Trade Assurance</option>
                                                            <option value="">Verified Merchant</option>
                                                            <option value="">
                                                                Unverified Merchant
                                                            </option>

                                                        </select>
                                                        <br />
                                                        <label htmlFor="" className='search-law-label'>Consultation Shift</label>
                                                        <br />
                                                        <div>
                                                            <label className="custom_check" id="checked">
                                                                <input type="checkbox" name="gender_type" />
                                                                <span className="checkmark" /> Early Morning
                                                            </label>
                                                        </div>
                                                        <div>
                                                            <label className="custom_check" id="checked">
                                                                <input type="checkbox" name="gender_type" />
                                                                <span className="checkmark" /> Morning
                                                            </label>
                                                        </div>
                                                        <div>
                                                            <label className="custom_check" id="checked">
                                                                <input type="checkbox" name="gender_type" />
                                                                <span className="checkmark" /> Noon
                                                            </label>
                                                        </div>
                                                        <div>
                                                            <label className="custom_check" id="checked">
                                                                <input type="checkbox" name="gender_type" />
                                                                <span className="checkmark" /> Evening
                                                            </label>
                                                        </div>

                                                        <div>
                                                            <label className="custom_check" id="checked">
                                                                <input type="checkbox" name="gender_type" />
                                                                <span className="checkmark" /> Rounds
                                                            </label>
                                                        </div>
                                                        <label htmlFor="" className='search-law-label'>Ratings</label>
                                                        <br />
                                                        <div className="rating mb-2">
                                                            <label className="custom_check" id="checked">
                                                                <input type="checkbox" name="gender_type" />
                                                                <span className="checkmark" />
                                                                <i className="fas fa-star filled" />
                                                                <i className="fas fa-star filled" />
                                                                <i className="fas fa-star filled" />
                                                                <i className="fas fa-star filled" />
                                                                <i className="fas fa-star filled" />
                                                                <span className="d-inline-block average-rating">
                                                                    (40)
                                                                </span>
                                                            </label> <br />
                                                            <label className="custom_check" id="checked">
                                                                <input type="checkbox" name="gender_type" />
                                                                <span className="checkmark" />
                                                                <i className="fas fa-star filled" />
                                                                <i className="fas fa-star filled" />
                                                                <i className="fas fa-star filled" />
                                                                <i className="fas fa-star filled" />
                                                                <i className="fas fa-star" />
                                                                <span className="d-inline-block average-rating">
                                                                    (35)
                                                                </span>
                                                            </label> <br />
                                                            <label className="custom_check" id="checked">
                                                                <input type="checkbox" name="gender_type" />
                                                                <span className="checkmark" />
                                                                <i className="fas fa-star filled" />
                                                                <i className="fas fa-star filled" />
                                                                <i className="fas fa-star filled" />
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                                <span className="d-inline-block average-rating">
                                                                    (20)
                                                                </span>
                                                            </label> <br />
                                                            <label className="custom_check" id="checked">
                                                                <input type="checkbox" name="gender_type" />
                                                                <span className="checkmark" />
                                                                <i className="fas fa-star filled" />
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                                <span className="d-inline-block average-rating">
                                                                    (10)
                                                                </span>
                                                            </label> <br />
                                                            <label className="custom_check" id="checked">
                                                                <input type="checkbox" name="gender_type" />
                                                                <span className="checkmark" />
                                                                <i className="fas fa-star filled" />
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star " />
                                                                <i className="fas fa-star" />
                                                                <span className="d-inline-block average-rating">
                                                                    (05)
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div className="filter-widget">
                                                            <label htmlFor="" className='search-law-label'>Categories</label>
                                                            <br />
                                                            <span className="checkmark" />
                                                            <div>
                                                                <label className="custom_check" id="checked">
                                                                    <input type="checkbox" name="gender_type" />
                                                                    <span className="checkmark" />
                                                                    Popular
                                                                </label>
                                                            </div>
                                                            <div>
                                                                <label className="custom_check" id="checked">
                                                                    <input type="checkbox" name="gender_type" />
                                                                    <span className="checkmark" /> Latest
                                                                </label>
                                                            </div>
                                                            <div>
                                                                <label className="custom_check" id="checked">
                                                                    <input type="checkbox" name="gender_type" />
                                                                    <span className="checkmark" /> Ratings
                                                                </label>
                                                                <div>
                                                                    <label className="custom_check" id="checked">
                                                                        <input type="checkbox" name="gender_type" />
                                                                        <span className="checkmark" /> Availability
                                                                    </label>
                                                                </div>
                                                                <div>
                                                                    <label className="custom_check" id="checked">
                                                                        <input
                                                                            type="checkbox"
                                                                            name="gender_type"
                                                                            defaultChecked=""
                                                                        />
                                                                        <span className="checkmark" /> Open 24 Hrs
                                                                    </label>
                                                                </div>
                                                                <div>
                                                                    <label className="custom_check" id="checked">
                                                                        <input type="checkbox" name="gender_type" />
                                                                        <span className="checkmark" /> Home Delivery
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <label htmlFor="" className='search-law-label'>Job Experience</label>
                                                        <br />
                                                        <div>
                                                            <label className="custom_check" id="checked">
                                                                <input type="checkbox" name="gender_type" />
                                                                <span className="checkmark" /> Fresh
                                                            </label>
                                                        </div>
                                                        <div>
                                                            <label className="custom_check" id="checked">
                                                                <input type="checkbox" name="gender_type" />
                                                                <span className="checkmark" /> 1-3 Years
                                                            </label>
                                                        </div>
                                                        <div>
                                                            <label className="custom_check" id="checked">
                                                                <input type="checkbox" name="gender_type" />
                                                                <span className="checkmark" /> 4-6 Years
                                                            </label>
                                                        </div>
                                                        <div>
                                                            <label className="custom_check" id="checked">
                                                                <input type="checkbox" name="gender_type" />
                                                                <span className="checkmark" /> 7-9 Years
                                                            </label>
                                                        </div>
                                                        <div>
                                                            <label className="custom_check" id="checked">
                                                                <input type="checkbox" name="gender_type" />
                                                                <span className="checkmark" /> 9 Years Above
                                                            </label>
                                                        </div>
                                                        <label htmlFor="" className='search-law-label'>Language</label>
                                                        <br />
                                                        <div>
                                                            <label className="custom_check" id="checked">
                                                                <input type="checkbox" name="gender_type" />
                                                                <span className="checkmark" />
                                                                English
                                                            </label>
                                                        </div>
                                                        <div>
                                                            <label className="custom_check" id="checked">
                                                                <input type="checkbox" name="gender_type" />
                                                                <span className="checkmark" />
                                                                French
                                                            </label>
                                                        </div>
                                                        <div>
                                                            <label className="custom_check" id="checked">
                                                                <input type="checkbox" name="gender_type" />
                                                                <span className="checkmark" />
                                                                Spanish
                                                            </label>
                                                        </div>
                                                        <div>
                                                            <label className="custom_check" id="checked">
                                                                <input type="checkbox" name="gender_type" />
                                                                <span className="checkmark" />
                                                                Germany
                                                            </label>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="btn-search mt-5 lawyer-search-btn-proceed" id="search__button">
                                                    <button type="button" className="btn w-100">
                                                        Search
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-8 col-xl-9">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="doctor-widget">
                                                    <div className="doc-info-left">
                                                        <div className="doctor-img1">
                                                            <a href="pharmacy-details.html">
                                                                <img
                                                                    src="https://img.freepik.com/free-vector/male-lawyer-concept-illustration_114360-14510.jpg?size=626&amp;ext=jpg&amp;ga=GA1.2.233311484.1695720566&amp;semt=ais"
                                                                    className="img-fluid"
                                                                    alt="User Image"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="doc-info-cont">
                                                            <h4 className="doc-name mb-2">
                                                                <a href="pharmacy-details.html">Medlife Medical</a>
                                                            </h4>
                                                            <div className="rating mb-2">
                                                                <span className="badge badge-primary">4.0</span>
                                                                <i className="fas fa-star filled" />
                                                                <i className="fas fa-star filled" />
                                                                <i className="fas fa-star filled" />
                                                                <i className="fas fa-star filled" />
                                                                <i className="fas fa-star" />
                                                                <span className="d-inline-block average-rating">
                                                                    (17)
                                                                </span>
                                                            </div>
                                                            <div className="clinic-details">
                                                                <div className="clini-infos pt-3">
                                                                    <p className="doc-location mb-2">
                                                                        <i className="fas fa-phone-volume me-1" />{" "}
                                                                        320-795-8815
                                                                    </p>
                                                                    <p className="doc-location mb-2 text-ellipse">
                                                                        <i className="fas fa-map-marker-alt me-1" /> 96
                                                                        Red Hawk Road Cyrus, MN 56323{" "}
                                                                    </p>
                                                                    <p className="doc-location mb-2">
                                                                        <i className="fas fa-chevron-right me-1" />{" "}
                                                                        Law accessories and Equipment
                                                                    </p>
                                                                    <p className="doc-location mb-2">
                                                                        <i className="fas fa-chevron-right me-1" /> Opens
                                                                        at 08.00 AM
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="doc-info-right">
                                                        <a href="/view-details"></a>
                                                        <div className="clinic-booking">
                                                            <a href="/view-details"></a>
                                                            <a
                                                                className="view-pro-btn"
                                                                href="pharmacy-details.html"
                                                            >
                                                                View Details
                                                            </a>
                                                            <a className="apt-btn" href="product-all.html">
                                                                Browse Products
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="doctor-widget">
                                                    <div className="doc-info-left">
                                                        <div className="doctor-img1">
                                                            <a href="pharmacy-details.html">
                                                                <img
                                                                    src="https://img.freepik.com/free-vector/law-firm-concept-illustration_114360-8869.jpg?size=626&amp;ext=jpg&amp;ga=GA1.2.233311484.1695720566&amp;semt=ais"
                                                                    className="img-fluid"
                                                                    alt="User Image"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="doc-info-cont">
                                                            <h4 className="doc-name mb-2">
                                                                <a href="pharmacy-details.html">PharmaMed Medical</a>
                                                            </h4>
                                                            <div className="rating mb-2">
                                                                <span className="badge badge-primary">4.0</span>
                                                                <i className="fas fa-star filled" />
                                                                <i className="fas fa-star filled" />
                                                                <i className="fas fa-star filled" />
                                                                <i className="fas fa-star filled" />
                                                                <i className="fas fa-star" />
                                                                <span className="d-inline-block average-rating">
                                                                    (17)
                                                                </span>
                                                            </div>
                                                            <div className="clinic-details">
                                                                <div className="clini-infos pt-3">
                                                                    <p className="doc-location mb-2">
                                                                        <i className="fas fa-phone-volume me-1" />{" "}
                                                                        913-631-2538
                                                                    </p>
                                                                    <p className="doc-location mb-2 text-ellipse">
                                                                        <i className="fas fa-map-marker-alt me-1" /> 3830
                                                                        Poe Lane Kansas City, KS 66216{" "}
                                                                    </p>
                                                                    <p className="doc-location mb-2">
                                                                        <i className="fas fa-chevron-right me-1" />{" "}
                                                                        Law accessories and Equipment
                                                                    </p>
                                                                    <p className="doc-location mb-2">
                                                                        <i className="fas fa-chevron-right me-1" /> Opens
                                                                        at 08.00 AM
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="doc-info-right">
                                                        <a href="/view-details"></a>
                                                        <div className="clinic-booking">
                                                            <a href="/view-details"></a>
                                                            <a
                                                                className="view-pro-btn"
                                                                href="pharmacy-details.html"
                                                            >
                                                                View Details
                                                            </a>
                                                            <a className="apt-btn" href="product-all.html">
                                                                Browse Products
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="doctor-widget">
                                                    <div className="doc-info-left">
                                                        <div className="doctor-img1">
                                                            <a href="pharmacy-details.html">
                                                                <img
                                                                    src="https://img.freepik.com/free-photo/lifestyle-people-office_23-2149173727.jpg?size=626&amp;ext=jpg&amp;ga=GA1.2.233311484.1695720566&amp;semt=ais"
                                                                    className="img-fluid"
                                                                    alt="User Image"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="doc-info-cont">
                                                            <h4 className="doc-name mb-2">
                                                                <a href="pharmacy-details.html">
                                                                    The Pill Club Medical
                                                                </a>
                                                            </h4>
                                                            <div className="rating mb-2">
                                                                <span className="badge badge-primary">4.0</span>
                                                                <i className="fas fa-star filled" />
                                                                <i className="fas fa-star filled" />
                                                                <i className="fas fa-star filled" />
                                                                <i className="fas fa-star filled" />
                                                                <i className="fas fa-star" />
                                                                <span className="d-inline-block average-rating">
                                                                    (17)
                                                                </span>
                                                            </div>
                                                            <div className="clinic-details">
                                                                <div className="clini-infos pt-3">
                                                                    <p className="doc-location mb-2">
                                                                        <i className="fas fa-phone-volume me-1" />{" "}
                                                                        816-270-2336
                                                                    </p>
                                                                    <p className="doc-location mb-2 text-ellipse">
                                                                        <i className="fas fa-map-marker-alt me-1" /> 3849
                                                                        Nutter Street Ferrelview, MO 64163{" "}
                                                                    </p>
                                                                    <p className="doc-location mb-2">
                                                                        <i className="fas fa-chevron-right me-1" />{" "}
                                                                        Law accessories and Equipment
                                                                    </p>
                                                                    <p className="doc-location mb-2">
                                                                        <i className="fas fa-chevron-right me-1" /> Opens
                                                                        at 08.00 AM
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="doc-info-right">
                                                        <a href="/view-details"></a>
                                                        <div className="clinic-booking">
                                                            <a href="/view-details"></a>
                                                            <a
                                                                className="view-pro-btn"
                                                                href="pharmacy-details.html"
                                                            >
                                                                View Details
                                                            </a>
                                                            <a className="apt-btn" href="product-all.html">
                                                                Browse Products
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="doctor-widget">
                                                    <div className="doc-info-left">
                                                        <div className="doctor-img1">
                                                            <a href="pharmacy-details.html">
                                                                <img
                                                                    src="https://img.freepik.com/free-vector/legal-advisers-concept-illustration_114360-14519.jpg?size=626&amp;ext=jpg&amp;ga=GA1.2.233311484.1695720566&amp;semt=ais"
                                                                    className="img-fluid"
                                                                    alt="User Image"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="doc-info-cont">
                                                            <h4 className="doc-name mb-2">
                                                                <a href="pharmacy-details.html">
                                                                    The Pill Club Medical
                                                                </a>
                                                            </h4>
                                                            <div className="rating mb-2">
                                                                <span className="badge badge-primary">4.0</span>
                                                                <i className="fas fa-star filled" />
                                                                <i className="fas fa-star filled" />
                                                                <i className="fas fa-star filled" />
                                                                <i className="fas fa-star filled" />
                                                                <i className="fas fa-star" />
                                                                <span className="d-inline-block average-rating">
                                                                    (17)
                                                                </span>
                                                            </div>
                                                            <div className="clinic-details">
                                                                <div className="clini-infos pt-3">
                                                                    <p className="doc-location mb-2">
                                                                        <i className="fas fa-phone-volume me-1" />{" "}
                                                                        816-270-2336
                                                                    </p>
                                                                    <p className="doc-location mb-2 text-ellipse">
                                                                        <i className="fas fa-map-marker-alt me-1" /> 3849
                                                                        Nutter Street Ferrelview, MO 64163{" "}
                                                                    </p>
                                                                    <p className="doc-location mb-2">
                                                                        <i className="fas fa-chevron-right me-1" />{" "}
                                                                        Law accessories and Equipment
                                                                    </p>
                                                                    <p className="doc-location mb-2">
                                                                        <i className="fas fa-chevron-right me-1" /> Opens
                                                                        at 08.00 AM
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="doc-info-right">
                                                        <a href="/view-details"></a>
                                                        <div className="clinic-booking">
                                                            <a href="/view-details"></a>
                                                            <a
                                                                className="view-pro-btn"
                                                                href="pharmacy-details.html"
                                                            >
                                                                View Details
                                                            </a>
                                                            <a className="apt-btn" href="product-all.html">
                                                                Browse Products
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="doctor-widget">
                                                    <div className="doc-info-left">
                                                        <div className="doctor-img1">
                                                            <a href="pharmacy-details.html">
                                                                <img
                                                                    src="https://img.freepik.com/free-photo/thoughtful-black-young-administrative-worker-prepares-monthly-report-stands-near-work-place-with-laptop-computer_273609-18038.jpg?size=626&amp;ext=jpg&amp;ga=GA1.2.233311484.1695720566&amp;semt=ais"
                                                                    className="img-fluid"
                                                                    alt="User Image"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="doc-info-cont">
                                                            <h4 className="doc-name mb-2">
                                                                <a href="pharmacy-details.html">
                                                                    The Pill Club Medical
                                                                </a>
                                                            </h4>
                                                            <div className="rating mb-2">
                                                                <span className="badge badge-primary">4.0</span>
                                                                <i className="fas fa-star filled" />
                                                                <i className="fas fa-star filled" />
                                                                <i className="fas fa-star filled" />
                                                                <i className="fas fa-star filled" />
                                                                <i className="fas fa-star" />
                                                                <span className="d-inline-block average-rating">
                                                                    (17)
                                                                </span>
                                                            </div>
                                                            <div className="clinic-details">
                                                                <div className="clini-infos pt-3">
                                                                    <p className="doc-location mb-2">
                                                                        <i className="fas fa-phone-volume me-1" />{" "}
                                                                        816-270-2336
                                                                    </p>
                                                                    <p className="doc-location mb-2 text-ellipse">
                                                                        <i className="fas fa-map-marker-alt me-1" /> 3849
                                                                        Nutter Street Ferrelview, MO 64163{" "}
                                                                    </p>
                                                                    <p className="doc-location mb-2">
                                                                        <i className="fas fa-chevron-right me-1" />{" "}
                                                                        Law accessories and Equipment
                                                                    </p>
                                                                    <p className="doc-location mb-2">
                                                                        <i className="fas fa-chevron-right me-1" /> Opens
                                                                        at 08.00 AM
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="doc-info-right">
                                                        <a href="/view-details"></a>
                                                        <div className="clinic-booking">
                                                            <a href="/view-details"></a>
                                                            <a
                                                                className="view-pro-btn"
                                                                href="pharmacy-details.html"
                                                            >
                                                                View Details
                                                            </a>
                                                            <a className="apt-btn" href="product-all.html">
                                                                Browse Products
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="doctor-widget">
                                                    <div className="doc-info-left">
                                                        <div className="doctor-img1">
                                                            <a href="pharmacy-details.html">
                                                                <img
                                                                    src="https://img.freepik.com/premium-photo/globe-library-puebla-mexico-books_24859-772.jpg?size=626&amp;ext=jpg&amp;ga=GA1.2.233311484.1695720566&amp;semt=ais"
                                                                    className="img-fluid"
                                                                    alt="User Image"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="doc-info-cont">
                                                            <h4 className="doc-name mb-2">
                                                                <a href="pharmacy-details.html">
                                                                    The Pill Club Medical
                                                                </a>
                                                            </h4>
                                                            <div className="rating mb-2">
                                                                <span className="badge badge-primary">4.0</span>
                                                                <i className="fas fa-star filled" />
                                                                <i className="fas fa-star filled" />
                                                                <i className="fas fa-star filled" />
                                                                <i className="fas fa-star filled" />
                                                                <i className="fas fa-star" />
                                                                <span className="d-inline-block average-rating">
                                                                    (17)
                                                                </span>
                                                            </div>
                                                            <div className="clinic-details">
                                                                <div className="clini-infos pt-3">
                                                                    <p className="doc-location mb-2">
                                                                        <i className="fas fa-phone-volume me-1" />{" "}
                                                                        816-270-2336
                                                                    </p>
                                                                    <p className="doc-location mb-2 text-ellipse">
                                                                        <i className="fas fa-map-marker-alt me-1" /> 3849
                                                                        Nutter Street Ferrelview, MO 64163{" "}
                                                                    </p>
                                                                    <p className="doc-location mb-2">
                                                                        <i className="fas fa-chevron-right me-1" />{" "}
                                                                        Law accessories and Equipment
                                                                    </p>
                                                                    <p className="doc-location mb-2">
                                                                        <i className="fas fa-chevron-right me-1" /> Opens
                                                                        at 08.00 AM
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="doc-info-right">
                                                        <a href="/view-details"></a>
                                                        <div className="clinic-booking">
                                                            <a href="/view-details"></a>
                                                            <a
                                                                className="view-pro-btn"
                                                                href="pharmacy-details.html"
                                                            >
                                                                View Details
                                                            </a>
                                                            <a className="apt-btn" href="product-all.html">
                                                                Browse Products
                                                            </a>
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
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Search_Merchant;