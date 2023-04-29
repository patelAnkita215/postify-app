import React from "react";

const LoginComponent = () => {
    return (
        <>
            <div className="login-section forgot-psw">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="login-box d-flex align-items-center justify-content-center flex-column">
                            <div className="d-flex align-items-center justify-content-center">
                                <div className="login-right ms-0">
                                    <div className="login-form">
                                        <h2 className="login-title">Forgot Password?</h2>
                                        <form>
                                            <div className="form-group">
                                                <input type="email" className="form-control" placeholder="Registered Email address " />
                                            </div>
                                            <button type="submit" className="btn btn-login w-100">Send</button>
                                        </form>
                                        <div className="or-line">OR</div>
                                        <p className="mb-0 signup-link text-center"><a href="#" className="forgot-link">Create New Account</a></p>
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
                                    <p className="mb-0 ms-sm-1">© 2023 Postify from Cybertek Networks</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginComponent