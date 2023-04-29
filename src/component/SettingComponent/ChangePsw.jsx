const ChangePassword = () => {
    return(
        <>
            <h2 className="accordion-header d-lg-none" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#changepsw" aria-expanded="false" aria-controls="changepsw">
                      Change Password
                </button>
            </h2>
            <div id="changepsw" className="accordion-collapse collapse d-lg-block" aria-labelledby="headingThree"
                    data-bs-parent="#myTabContent">
                <div className="accordion-body">
                    <div className="box-container">
                        <h2 className="setting-title">Change Password</h2>
                        <div className="change-psw-form">
                          <form>
                            <div className="form-group current-psw">
                              <label className="d-block">Current Password</label>
                              <div className="input-group">
                                <input type="password" className="form-control border-end-0 pe-0"
                                  placeholder="current Password" aria-label="Password" aria-describedby="psw" />
                                <span className="input-group-text" id="psw"><img src={require("../../assets/images/icons/ico_eye.png")}
                                    alt="" className="img-fluid" /></span>
                              </div>
                              <a href="forgot-password.html"
                                className="forgot-link d-flex align-items-center justify-content-end">forgot password?</a>
                            </div>
                            <div className="form-group">
                              <label className="d-block">New Password</label>
                              <div className="input-group">
                                <input type="password" className="form-control border-end-0 pe-0" placeholder="New Password"
                                  aria-label="Password" aria-describedby="psw" />
                                <span className="input-group-text" id="psw"><img src={require("../../assets/images/icons/ico_eye.png")}
                                    alt="" className="img-fluid" /></span>
                              </div>
                            </div>
                            <div className="form-group">
                              <label className="d-block">Confirm Password</label>
                              <div className="input-group">
                                <input type="password" className="form-control border-end-0 pe-0"
                                  placeholder="Confirm Password" aria-label="Password" aria-describedby="confirm-psw" />
                                <span className="input-group-text" id="confirm-psw"><img
                                    src={require("../../assets/images/icons/ico_eye.png")} alt="" className="img-fluid" /></span>
                              </div>
                            </div>
                            <button type="submit" className="btn btn-login">Save</button>
                          </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChangePassword