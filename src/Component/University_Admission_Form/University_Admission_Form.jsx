import React from 'react';

function University_Admission_Form(props) {
    return (
   <main>
  {/* =======================
Main part START */}
  <section>
    <div className="container">
      <div className="row g-5 justify-content-between">
        {/* Admission form START */}
        <div className="col-md-8 mx-auto">
          {/* Title */}
          <h2 className="mb-3">Apply for Admission</h2>
          <p>You can apply online by filling up below form or <a href="#">Download a pdf</a> and submit. Any question related admission process, please contact our admission office at <a href="#">+123 456 789</a> or <a href="#">example@email.com</a>.</p>
          <p className="mb-1">Before you proceed with the form please read below topics:</p>
          <ul className="ps-3">
            <li>Application fee is $49</li>
            <li>Fees are non-refundable</li>
            <li>Field required with <span className="text-danger">*</span> are required to complete the admission form</li>
          </ul>
          {/* Form START */}
          <form className="row g-3">
            <h5 className="mb-0">Personal information</h5>
            {/* First name */}
            <div className="col-12">
              <div className="row g-xl-0 align-items-center">
                <div className="col-lg-4">
                  <h6 className="mb-lg-0">Student first name <span className="text-danger">*</span></h6>
                </div>
                <div className="col-lg-8">
                  <input type="text" className="form-control" id="firstName" />
                </div>
              </div>
            </div>
            {/* Middle name */}
            <div className="col-12">
              <div className="row g-xl-0 align-items-center">
                <div className="col-lg-4">
                  <h6 className="mb-lg-0">Student middle name <span className="text-danger">*</span></h6>
                </div>
                <div className="col-lg-8">
                  <input type="text" className="form-control" id="middleName" />
                </div>
              </div>
            </div>
            {/* Last name */}
            <div className="col-12">
              <div className="row g-xl-0 align-items-center">
                <div className="col-lg-4">
                  <h6 className="mb-lg-0">Student last name <span className="text-danger">*</span></h6>
                </div>
                <div className="col-lg-8">
                  <input type="text" className="form-control" id="lastName" />
                </div>
              </div>
            </div>
            {/* Gender */}
            <div className="col-12">
              <div className="row g-xl-0 align-items-center">
                <div className="col-lg-4">
                  <h6 className="mb-lg-0">Gender <span className="text-danger">*</span></h6>
                </div>
                <div className="col-lg-8">
                  <div className="d-flex">
                    <div className="form-check radio-bg-light me-4">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Male
                      </label>
                    </div>
                    <div className="form-check radio-bg-light">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                      <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Female
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Date of birth */}
            <div className="col-12">
              <div className="row g-xl-0 align-items-center">
                <div className="col-lg-4">
                  <h6 className="mb-lg-0">Date of birth</h6>
                </div>
                <div className="col-lg-8">
                  <div className="row g-2 g-sm-4">
                    <div className="col-4">
                      <select className="form-select js-choice z-index-9 border-0 bg-light" aria-label=".form-select-sm">
                        <option value>Date</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                        <option>21</option>
                        <option>22</option>
                        <option>23</option>
                        <option>24</option>
                        <option>25</option>
                        <option>26</option>
                        <option>27</option>
                        <option>28</option>
                        <option>29</option>
                        <option>30</option>
                        <option>31</option>
                      </select>
                    </div>
                    <div className="col-4">
                      <select className="form-select js-choice z-index-9 border-0 bg-light" aria-label=".form-select-sm">
                        <option value>Month</option>
                        <option>Jan</option>
                        <option>Feb</option>
                        <option>Mar</option>
                        <option>Apr</option>
                        <option>Jun</option>
                        <option>Jul</option>
                        <option>Aug</option>
                        <option>Sep</option>
                        <option>Oct</option>
                        <option>Nov</option>
                        <option>Dec</option>
                      </select>
                    </div>
                    <div className="col-4">
                      <select className="form-select js-choice z-index-9 border-0 bg-light" aria-label=".form-select-sm">
                        <option value>Year</option>
                        <option>1990</option>
                        <option>1991</option>
                        <option>1992</option>
                        <option>1993</option>
                        <option>1994</option>
                        <option>1995</option>
                        <option>1996</option>
                        <option>1997</option>
                        <option>1998</option>
                        <option>1999</option>
                        <option>2000</option>
                        <option>2001</option>
                        <option>2002</option>
                        <option>2003</option>
                        <option>2004</option>
                        <option>2005</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Email */}
            <div className="col-12">
              <div className="row g-xl-0 align-items-center">
                <div className="col-lg-4">
                  <h6 className="mb-lg-0">Email <span className="text-danger">*</span></h6>
                </div>
                <div className="col-lg-8">
                  <input type="email" className="form-control" id="email" />
                </div>
              </div>
            </div>
            {/* Phone number */}
            <div className="col-12">
              <div className="row g-xl-0 align-items-center">
                <div className="col-lg-4">
                  <h6 className="mb-lg-0">Phone number <span className="text-danger">*</span></h6>
                </div>
                <div className="col-lg-8">
                  <input type="text" className="form-control" id="phoneNumber" />
                </div>
              </div>
            </div>
            {/* Home address */}
            <div className="col-12">
              <div className="row g-xl-0">
                <div className="col-lg-4">
                  <h6 className="mb-lg-0">Your address <span className="text-danger">*</span></h6>
                </div>
                <div className="col-lg-8">
                  <textarea className="form-control" rows={3} placeholder defaultValue={""} />
                </div>
              </div>
            </div>
            {/* City */}
            <div className="col-12">
              <div className="row g-xl-0 align-items-center">
                <div className="col-lg-4">
                  <h6 className="mb-lg-0">Select city <span className="text-danger">*</span></h6>
                </div>
                <div className="col-lg-8">
                  <select className="form-select js-choice z-index-9 rounded-3 border-0 bg-light" aria-label=".form-select-sm">
                    <option value>Select city</option>
                    <option>New york</option>
                    <option>Mumbai</option>
                    <option>Delhi</option>
                    <option>London</option>
                    <option>Los angeles</option>
                  </select>
                </div>
              </div>
            </div>
            {/* State */}
            <div className="col-12">
              <div className="row g-xl-0 align-items-center">
                <div className="col-lg-4">
                  <h6 className="mb-lg-0">Select state <span className="text-danger">*</span></h6>
                </div>
                <div className="col-lg-8">
                  <select className="form-select js-choice z-index-9 rounded-3 border-0 bg-light" aria-label=".form-select-sm">
                    <option value>Select state</option>
                    <option>Maharashtra</option>
                    <option>California</option>
                    <option>Florida</option>
                    <option>Alaska</option>
                    <option>Ohio</option>
                  </select>
                </div>
              </div>
            </div>
            {/* Country */}
            <div className="col-12">
              <div className="row g-xl-0 align-items-center">
                <div className="col-lg-4">
                  <h6 className="mb-lg-0">Select country <span className="text-danger">*</span></h6>
                </div>
                <div className="col-lg-8">
                  <select className="form-select js-choice z-index-9 rounded-3 border-0 bg-light" aria-label=".form-select-sm">
                    <option value>Select country</option>
                    <option>India</option>
                    <option>Canada</option>
                    <option>Japan</option>
                    <option>America</option>
                    <option>Dubai</option>
                  </select>
                </div>
              </div>
            </div>
            {/* Zip code*/}
            <div className="col-12">
              <div className="row g-xl-0 align-items-center">
                <div className="col-lg-4">
                  <h6 className="mb-lg-0">Zip code <span className="text-danger">*</span></h6>
                </div>
                <div className="col-lg-8">
                  <input type="text" className="form-control" id="zipCode" />
                </div>
              </div>
            </div>
            {/* Divider */}
            <hr className="my-5" />
            {/* Parent detail */}
            <h5 className="mt-0">Parent detail</h5>
            {/* Salutation */}
            <div className="col-12">
              <div className="row g-xl-0 align-items-center">
                <div className="col-lg-4">
                  <h6 className="mb-lg-0">Salutation <span className="text-danger">*</span></h6>
                </div>
                <div className="col-lg-8">
                  <div className="d-flex">
                    <div className="form-check radio-bg-light me-4">
                      <input className="form-check-input" type="radio" name="flexRadioSalutation" id="flexRadioSalutation1" defaultChecked />
                      <label className="form-check-label" htmlFor="flexRadioSalutation1">
                        Mr.
                      </label>
                    </div>
                    <div className="form-check radio-bg-light me-4">
                      <input className="form-check-input" type="radio" name="flexRadioSalutation" id="flexRadioSalutation2" />
                      <label className="form-check-label" htmlFor="flexRadioSalutation2">
                        Mrs.
                      </label>
                    </div>
                    <div className="form-check radio-bg-light me-4">
                      <input className="form-check-input" type="radio" name="flexRadioSalutation" id="flexRadioSalutation3" />
                      <label className="form-check-label" htmlFor="flexRadioSalutation3">
                        Ms.
                      </label>
                    </div>
                    <div className="form-check radio-bg-light">
                      <input className="form-check-input" type="radio" name="flexRadioSalutation" id="flexRadioSalutation4" />
                      <label className="form-check-label" htmlFor="flexRadioSalutation4">
                        Dr.
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Full name */}
            <div className="col-12">
              <div className="row g-xl-0 align-items-center">
                <div className="col-lg-4">
                  <h6 className="mb-lg-0">Full name <span className="text-danger">*</span></h6>
                </div>
                <div className="col-lg-8">
                  <input type="text" className="form-control" id="fullName" />
                </div>
              </div>
            </div>
            {/* Relation with applicant */}
            <div className="col-12">
              <div className="row g-xl-0 align-items-center">
                <div className="col-lg-4">
                  <h6 className="mb-lg-0">Relation with applicant <span className="text-danger">*</span></h6>
                </div>
                <div className="col-lg-8">
                  <input type="text" className="form-control" id="relation" />
                </div>
              </div>
            </div>
            {/* Email */}
            <div className="col-12">
              <div className="row g-xl-0 align-items-center">
                <div className="col-lg-4">
                  <h6 className="mb-lg-0">Email <span className="text-danger">*</span></h6>
                </div>
                <div className="col-lg-8">
                  <input type="email" className="form-control" id="email2" />
                </div>
              </div>
            </div>
            {/* Phone number */}
            <div className="col-12">
              <div className="row g-xl-0 align-items-center">
                <div className="col-lg-4">
                  <h6 className="mb-lg-0">Phone number <span className="text-danger">*</span></h6>
                </div>
                <div className="col-lg-8">
                  <input type="text" className="form-control" id="phoneNumber2" />
                </div>
              </div>
            </div>
            {/* Home address */}
            <div className="col-12">
              <div className="row g-xl-0">
                <div className="col-lg-4">
                  <h6 className="mb-lg-0">Home address <span className="text-danger">*</span></h6>
                </div>
                <div className="col-lg-8">
                  <textarea className="form-control" rows={3} placeholder defaultValue={""} />
                </div>
              </div>
            </div>
            {/* Job title */}
            <div className="col-12">
              <div className="row g-xl-0 align-items-center">
                <div className="col-lg-4">
                  <h6 className="mb-lg-0">Job title <span className="text-danger">*</span></h6>
                </div>
                <div className="col-lg-8">
                  <input type="text" className="form-control" id="jobTitle" />
                </div>
              </div>
            </div>
            {/* Office phone number */}
            <div className="col-12">
              <div className="row g-xl-0 align-items-center">
                <div className="col-lg-4">
                  <h6 className="mb-lg-0">Office phone number</h6>
                </div>
                <div className="col-lg-8">
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
            {/* Divider */}
            <hr className="my-5" />
            {/* Education */}
            <h5 className="mt-0">Education</h5>
            {/* School or college name */}
            <div className="col-12">
              <div className="row g-xl-0 align-items-center">
                <div className="col-lg-4">
                  <h6 className="mb-lg-0">School or college name <span className="text-danger">*</span></h6>
                </div>
                <div className="col-lg-8">
                  <input type="text" className="form-control" id="collegeName" />
                </div>
              </div>
            </div>
            {/* Year of passing */}
            <div className="col-12">
              <div className="row g-xl-0 align-items-center">
                <div className="col-lg-4">
                  <h6 className="mb-lg-0">Year of passing <span className="text-danger">*</span></h6>
                </div>
                <div className="col-lg-8">
                  <select className="form-select js-choice z-index-9 border-0 bg-light" aria-label=".form-select-sm">
                    <option value>Year</option>
                    <option>1990</option>
                    <option>1991</option>
                    <option>1992</option>
                    <option>1993</option>
                    <option>1994</option>
                    <option>1995</option>
                    <option>1996</option>
                    <option>1997</option>
                    <option>1998</option>
                    <option>1999</option>
                    <option>2000</option>
                    <option>2001</option>
                    <option>2002</option>
                    <option>2003</option>
                    <option>2004</option>
                    <option>2005</option>
                  </select>
                </div>
              </div>
            </div>
            {/* Board of university */}
            <div className="col-12">
              <div className="row g-xl-0 align-items-center">
                <div className="col-lg-4">
                  <h6 className="mb-lg-0">Board of university <span className="text-danger">*</span></h6>
                </div>
                <div className="col-lg-8">
                  <input type="text" className="form-control" id="board" />
                </div>
              </div>
            </div>
            {/* Class grad */}
            <div className="col-12">
              <div className="row g-xl-0 align-items-center">
                <div className="col-lg-4">
                  <h6 className="mb-lg-0">Class grad <span className="text-danger">*</span></h6>
                </div>
                <div className="col-lg-8">
                  <select className="form-select js-choice z-index-9" aria-label=".form-select-sm">
                    <option value>Select grad</option>
                    <option>Distinction</option>
                    <option>First class</option>
                    <option>Second class</option>
                    <option>Third class</option>
                  </select>
                </div>
              </div>
            </div>
            {/* School or college address */}
            <div className="col-12">
              <div className="row g-xl-0">
                <div className="col-lg-4">
                  <h6 className="mb-lg-0">School or college address <span className="text-danger">*</span></h6>
                </div>
                <div className="col-lg-8">
                  <textarea className="form-control" rows={3} placeholder defaultValue={""} />
                </div>
              </div>
            </div>
            {/* Button */}
            <div className="col-12 text-sm-end">
              <button className="btn btn-primary mb-0">Submit</button>
            </div>
          </form>
          {/* Form END */}
        </div>
        {/* Admission form END */}	
      </div>
    </div>
  </section>
  {/* =======================
Main part END */}
</main>

    );
}

export default University_Admission_Form;