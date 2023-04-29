const Payout = () => {
    return(
        <>
            <h2 className="accordion-header d-lg-none" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#payout" aria-expanded="false" aria-controls="payout">
                      Payout
                </button>
            </h2>
            <div id="payout" className="accordion-collapse collapse d-lg-block" aria-labelledby="headingThree"
                    data-bs-parent="#myTabContent">
                <div className="accordion-body">
                    <div className="box-container payout-content">
                        <div className="my-balance d-flex align-items-center justify-content-between">
                          <p className="mb-0">Your Balance:</p>
                          <h4 className="mb-0">25,789</h4>
                        </div>
                        <div className="amount-balance d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <div className="dolor-img d-flex justify-content-center align-items-center">
                              <img src={require("../../assets/images/icons/dollar-sign.webp")} alt="" className="img-fluid" />
                            </div>
                            <div className="dolor-input">
                              <input type="text" placeholder="Enter Amount to Payout" className="form-control" />
                            </div>
                          </div>
                          <div className="payout-button">
                            <button className="btn btn-payout">Payout</button>
                          </div>
                        </div>
                        <p className="dolor-text text-center">You can only cashout $$$ coins once in 24 hours.</p>
                        <div className="payout-history">
                          <h4>Payout History</h4>
                          <ul className="ps-0">
                            <li className="payout-item px-0">
                              <div className="d-flex align-items-center payout-box justify-content-between">
                                <div className="payout-number">
                                  <span className="d-block">$548</span>
                                  <small>28 July 2021</small>
                                </div>
                                <button className="btn btn-panding">PENDING</button>
                              </div>
                            </li>
                            <li className="payout-item px-0">
                              <div className="d-flex align-items-center payout-box justify-content-between">
                                <div className="payout-number">
                                  <span className="d-block">$548</span>
                                  <small>28 July 2021</small>
                                </div>
                                <button className="btn btn-panding">PENDING</button>
                              </div>
                            </li>
                            <li className="payout-item px-0">
                              <div className="d-flex align-items-center payout-box justify-content-between">
                                <div className="payout-number">
                                  <span className="d-block">$548</span>
                                  <small>28 July 2021</small>
                                </div>
                                <button className="btn btn-succedd">SUCCEDD</button>
                              </div>
                            </li>
                          </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Payout