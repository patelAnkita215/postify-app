import React from "react";

const LoginComponent = () => {
    return (
        <>
            <div className="login-section signup-section">
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="login-box d-flex align-items-center justify-content-center flex-column">
                        <div className="d-flex align-items-center justify-content-center">
                            <div className="login-img d-none d-md-flex">
                                <img src={require("../../assets/images/imgs/phone-screen.png")} alt="" className="img-fluid" />
                            </div>
                            <div className="login-right">
                                <div className="login-form">
                                    <a href="#" className="logo-link"><img src={require("../../assets/images/imgs/logo.png")} alt="" className="img-fluid" /></a>
                                    <form>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Name" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Username" />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email address" />
                                        </div>
                                        <div className="form-group">
                                            <input type="tel" className="form-control" placeholder="Phone Number" />
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input type="password" className="form-control border-end-0 pe-0" placeholder="Password" aria-label="Password" aria-describedby="basic-addon2" />
                                                <span className="input-group-text" id="basic-addon2"><img src={require("../../assets/images/icons/ico_eye.png")} alt="" className="img-fluid" /></span>
                                            </div>
                                        </div>
                                        
                                        <button type="submit" className="btn btn-login w-100">Signup</button>
                                    </form>
                                    <p className="mb-0 signup-link text-center">Already have an account? <a href="login.html" className="forgot-link">Log in</a></p>
                                </div>
                                <div className="app-group text-center">
                                    <p className="text-center get-app">Get the app</p>
                                    <div className="group-button d-flex align-items-center justify-content-center">
                                        <button className="btn btn-app"><img src={require("../../assets/images/imgs/google-play.png")} alt="" className="img-fluid" /></button>
                                        <button className="btn btn-app ms-2"><img src={require("../../assets/images/imgs/app-store.png")} alt="" className="img-fluid" /></button>
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