const MyPlans = () => {
    return(
        <>
            <h2 className="accordion-header d-lg-none" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#myplans" aria-expanded="false" aria-controls="myplans">
                      My Plans
                </button>
            </h2>
            <div id="myplans" className="accordion-collapse collapse d-lg-block" aria-labelledby="headingThree"
                    data-bs-parent="#myTabContent">
                <div className="accordion-body">
                    <div className="box-container">
                        <h2 className="setting-title">My Plans</h2>
                        <div className="plan-box">
                          <div className="d-sm-flex justify-content-between">
                            <h3 className="plane-title">Monthly Subscription</h3>
                            <div className="switcher">
                              <label for="toggle-0">
                                <input type="checkbox" id="toggle-0" /><span><small></small></span><small></small>
                              </label>
                            </div>
                          </div>
                          <p className="inputlabel">Price (USD)</p>
                          <div className="input-group price-group">
                            <span className="input-group-text" id="basic-addon2">$</span>
                            <input type="text" className="form-control" placeholder="" />
                          </div>
                        </div>
                        <div className="plan-box">
                          <div className="d-sm-flex justify-content-between">
                            <h3 className="plane-title">Annually Subscription</h3>
                            <div className="switcher">
                              <label for="toggle-0">
                                <input type="checkbox" id="toggle-0" /><span><small></small></span><small></small>
                              </label>
                            </div>
                          </div>
                          <p className="inputlabel">Price (USD)</p>
                          <div className="input-group price-group">
                            <span className="input-group-text" id="basic-addon3">$</span>
                            <input type="text" className="form-control" placeholder="" />
                          </div>
                        </div>
                        <div className="plan-box active-plan-box">
                          <div className="d-sm-flex justify-content-between">
                            <h3 className="plane-title">Free Trial</h3>
                            <div className="switcher">
                              <label for="toggle-0">
                                <input type="checkbox" id="toggle-0" /><span><small></small></span><small></small>
                              </label>
                            </div>
                          </div>
                          <p className="inputlabel">Duration (Days)</p>
                          <div className="input-group price-group">
                            <span className="input-group-text" id="basic-addon1">$</span>
                            <input type="text" className="form-control" placeholder="" />
                          </div>
                        </div>
                        <div className="d-flex justify-content-center">
                          <button type="button" className="btn btn-login mt-3 px-5">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyPlans