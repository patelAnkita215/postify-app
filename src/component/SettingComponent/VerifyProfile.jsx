const VerifyProfile = () => {
    return(
        <>
            <h2 className="accordion-header d-lg-none" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#verify" aria-expanded="false" aria-controls="verify">
                      Verify Profile
                </button>
            </h2>
            <div id="verify" className="accordion-collapse collapse d-lg-block" aria-labelledby="headingThree"
                    data-bs-parent="#myTabContent">
                <div className="accordion-body">
                    <div className="box-container">
                        <h2 className="setting-title">Verify Profile</h2>
                        <div className="verification-content">
                          <h3>Profile verification status</h3>
                          <div className="status d-flex align-items-center justify-content-between">
                            <div className="status-title">
                              <img src={require("../.././assets/images/icons/status_icon.webp")} alt="" className="img-fluid" />
                              <span>Status</span>
                            </div>
                            <button className="btn btn-applied">Not Applied</button>
                          </div>
                        </div>
                        <div className="verification-content profile-verification">
                          <h3>Apply for Profile Verification</h3>
                          <div className="document-verification">
                            <h4>Your government issued ID</h4>
                            <div className="select-document">
                              <button className="btn btn-select">Select</button>
                            </div>
                            <div className="upload-document">
                              <p>Select type of document you’ve uploaded</p>
                              <div>
                                <div className="form-check">
                                  <label className="form-check-label" for="goveId">
                                    Government-issued ID card
                                  </label>
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="goveId"
                                    checked />
                                </div>
                                <div className="form-check">
                                  <label className="form-check-label" for="nationalId">
                                    National Id card
                                  </label>
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="nationalId" />
                                </div>
                                <div className="form-check">
                                  <label className="form-check-label" for="passportId">
                                    Passport
                                  </label>
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="passportId" />
                                </div>
                                <div className="form-check">
                                  <label className="form-check-label" for="drivingId">
                                    Driving license
                                  </label>
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="drivingId" />
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                        <div className="verification-content profile-verification">
                          <div className="document-verification">
                            <h4>Your selfie with your ID and handwritten note</h4>
                            <ul>
                              <li>
                                <p className="mb-0">On a blank piece of white paper write your name, today's date and our
                                  website address</p>
                              </li>
                              <li>
                                <p className="mb-0">
                                  Hold your paper and your ID so we can clearly see both
                                </p>
                              </li>
                              <li>
                                <p className="mb-0">
                                  Take a selfie of you, your ID and your handwritten note. All three elements (you, your
                                  ID and your writting) must be clearly visible without copying or editing
                                </p>
                              </li>
                            </ul>
                            <div className="select-document">
                              <button className="btn btn-select">Select</button>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-center verification-btn">
                          <button className="btn btn-login">Apply</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VerifyProfile