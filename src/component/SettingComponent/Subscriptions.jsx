const Subscriptions = () => {
    return(
        <>
            <h2 className="accordion-header d-lg-none" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#subscriptions" aria-expanded="false" aria-controls="subscriptions">
                      Subscriptions
                </button>
            </h2>
            <div id="subscriptions" className="accordion-collapse collapse d-lg-block" aria-labelledby="headingThree"
                    data-bs-parent="#myTabContent">
                <div className="accordion-body">
                    <div className="box-container">
                        <h2 className="setting-title">Subscriptions</h2>
                        
                        <div className="subscribe-box">
                          <label className="plan-label">
                            Annually
                          </label>
                          <div className="post-user post-user-control d-flex align-items-center px-0">
                            <div className="post-user-logo post-user-logo-sm">
                              <img src={require("../../assets/images/imgs/user1.png")} alt="" className="img-fluid" />
                            </div>
                            <div className="col">
                              <h5 className="post-user-name justify-content-start">
                                Ruby Baker
                              </h5>
                              <p className="text-msg user-comment">
                                @karen
                              </p>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between flex-wrap align-items-center">
                            <label className="date-label my-2">
                              Plan start date: 16 July 2021
                            </label>
                            <p className="sub-amount">
                              98.99
                            </p>
                          </div>
                          <div className="d-flex flex-wrap align-items-center justify-content-between">
                            <label className="dayslabel">
                              156 Days Remaining
                            </label>
                            <button className="btn btn-link text-danger p-0">
                              Cancel Subscription
                            </button>
                          </div>
                        </div>
                        <div className="subscribe-box trial-plan">
                          <label className="plan-label">
                            Monthly
                          </label>
                          <div className="post-user post-user-control d-flex align-items-center px-0">
                            <div className="post-user-logo post-user-logo-sm">
                              <img src={require("../../assets/images/imgs/user1.png")} alt="" className="img-fluid" />
                            </div>
                            <div className="col">
                              <h5 className="post-user-name justify-content-start">
                                Ruby Baker
                              </h5>
                              <p className="text-msg user-comment">
                                @karen
                              </p>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between flex-wrap align-items-center">
                            <label className="date-label my-2">
                              Plan start date: 16 July 2021
                            </label>
                            <p className="sub-amount">
                              98.99
                            </p>
                          </div>
                          <div className="d-flex flex-wrap align-items-center justify-content-between">
                            <label className="dayslabel">
                              156 Days Remaining
                            </label>
                            <button className="btn btn-link text-danger p-0">
                              Cancel Subscription
                            </button>
                          </div>
                          <p className="trial-text">
                            Free Trial ends in 2 Days
                          </p>
                        </div>
                        <div className="subscribe-box past-subscribe-box">
                          <label className="plan-label">
                            Monthly
                          </label>
                          <div className="post-user post-user-control d-flex align-items-center px-0">
                            <div className="post-user-logo post-user-logo-sm">
                              <img src={require("../../assets/images/imgs/user1.png")} alt="" className="img-fluid" />
                            </div>
                            <div className="col">
                              <h5 className="post-user-name justify-content-start">
                                Ruby Baker
                              </h5>
                              <p className="text-msg user-comment">
                                @karen
                              </p>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between flex-wrap align-items-center">
                            <label className="date-label my-2">
                              Plan start date: 16 July 2021
                            </label>
                            <p className="sub-amount">
                              98.99
                            </p>
                          </div>
                          <div className="d-flex flex-wrap align-items-center justify-content-between">
                            <label className="dayslabel">
                              00 Days Remaining
                            </label>
                            <button className="btn btn-link text-info p-0">
                              Renew
                            </button>
                          </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Subscriptions