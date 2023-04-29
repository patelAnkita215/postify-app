import React from "react";

const OtpComponent = () => {
    return(
        <>
            <div className="login-section forgot-psw otp-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <div className="login-box d-flex align-items-center justify-content-center flex-column">
                            <div className="d-flex align-items-center justify-content-center">
                                <div className="login-right ms-0">
                                    <div className="login-form">
                                        <h2 className="login-title">Verify OTP</h2>
                                        <form>
                                            <div className="form-group d-flex align-items-center justify-content-center">
                                                <input className="otp form-control" type="text" />
                                                <input className="otp form-control" type="text" />
                                                <input className="otp form-control" type="text" />
                                                <input className="otp form-control" type="text" />
                                                <input className="otp form-control" type="text" />
                                            </div>
                                            <button type="submit" className="btn btn-login w-100">Verify</button>
                                        </form>
                                        <div className="text-center">
                                            <p className="mb-0 signup-link text-center">Didn’t get OTP yet?</p>
                                            <a href="#" className="forgot-link text-center">Send again</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer d-flex align-items-center">
                                <div className="footer-select">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>English</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <p className="mb-0 ms-sm-1">© 2022 Songzter from Cybertek Networks</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OtpComponent