const Blacklist = () => {
    return(
        <>
            <h2 className="accordion-header d-lg-none" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#blacklist" aria-expanded="false" aria-controls="blacklist">
                      Blacklist
                    </button>
            </h2>
            <div id="blacklist" className="accordion-collapse collapse d-lg-block" aria-labelledby="headingTwo"
                    data-bs-parent="#myTabContent">
                <div className="accordion-body">
                    <div className="box-container">
                        <h2 className="setting-title">Blacklist</h2>
                        <div className="blacklist-content">
                          <div className="input-group search-box">
                            <span className="input-group-text border-end-0" id="basic-addon1"><img
                                src={require("../../assets/images/icons/ico_search.png")} alt="" className="img-fluid" width="18px" /></span>
                            <input type="text" className="form-control border-start-0" placeholder="Add user to blacklist"
                              aria-label="Add user to blacklist" aria-describedby="basic-addon1" />
                          </div>
                          <div className="blacklist-list">
                            <ul className="ps-0">
                              <li className="blacklist-item px-0">
                                <div className="blacklist-link d-flex align-items-center justify-content-between">
                                  <div className="blacklist-user d-flex align-items-center">
                                    <div className="user-logo"><img src={require("../.././assets/images/imgs/user2.png")} alt="" className="img-fluid" />
                                    </div>
                                    <span>Lily Patel</span>
                                  </div>
                                  <div className="blacklist-button">
                                    <button className="btn btn-unblock">Unblock</button>
                                  </div>
                                </div>
                              </li>
                              <li className="blacklist-item px-0">
                                <div className="blacklist-link d-flex align-items-center justify-content-between">
                                  <div className="blacklist-user d-flex align-items-center">
                                    <div className="user-logo"><img src={require("../.././assets/images/imgs/user2.png")} alt="" className="img-fluid" />
                                    </div>
                                    <span>Lily Patel</span>
                                  </div>
                                  <div className="blacklist-button">
                                    <button className="btn btn-unblock">Unblock</button>
                                  </div>
                                </div>
                              </li>
                              <li className="blacklist-item px-0">
                                <div className="blacklist-link d-flex align-items-center justify-content-between">
                                  <div className="blacklist-user d-flex align-items-center">
                                    <div className="user-logo"><img src={require("../.././assets/images/imgs/user2.png")} alt="" className="img-fluid" />
                                    </div>
                                    <span>Lily Patel</span>
                                  </div>
                                  <div className="blacklist-button">
                                    <button className="btn btn-unblock">Unblock</button>
                                  </div>
                                </div>
                              </li>
                              <li className="blacklist-item px-0">
                                <div className="blacklist-link d-flex align-items-center justify-content-between">
                                  <div className="blacklist-user d-flex align-items-center">
                                    <div className="user-logo"><img src={require("../.././assets/images/imgs/user2.png")} alt="" className="img-fluid" />
                                    </div>
                                    <span>Lily Patel</span>
                                  </div>
                                  <div className="blacklist-button">
                                    <button className="btn btn-unblock">Unblock</button>
                                  </div>
                                </div>
                              </li>
                              <li className="blacklist-item px-0">
                                <div className="blacklist-link d-flex align-items-center justify-content-between">
                                  <div className="blacklist-user d-flex align-items-center">
                                    <div className="user-logo"><img src={require("../.././assets/images/imgs/user2.png")} alt="" className="img-fluid" />
                                    </div>
                                    <span>Lily Patel</span>
                                  </div>
                                  <div className="blacklist-button">
                                    <button className="btn btn-unblock">Unblock</button>
                                  </div>
                                </div>
                              </li>
                              <li className="blacklist-item px-0">
                                <div className="blacklist-link d-flex align-items-center justify-content-between">
                                  <div className="blacklist-user d-flex align-items-center">
                                    <div className="user-logo"><img src={require("../.././assets/images/imgs/user2.png")} alt="" className="img-fluid" />
                                    </div>
                                    <span>Lily Patel</span>
                                  </div>
                                  <div className="blacklist-button">
                                    <button className="btn btn-unblock">Unblock</button>
                                  </div>
                                </div>
                              </li>
                              <li className="blacklist-item px-0">
                                <div className="blacklist-link d-flex align-items-center justify-content-between">
                                  <div className="blacklist-user d-flex align-items-center">
                                    <div className="user-logo"><img src={require("../.././assets/images/imgs/user2.png")} alt="" className="img-fluid" />
                                    </div>
                                    <span>Lily Patel</span>
                                  </div>
                                  <div className="blacklist-button">
                                    <button className="btn btn-unblock">Unblock</button>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blacklist