const ReferralCode = () => {
    return(
        <>
            <h2 className="accordion-header d-lg-none" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#referralcode" aria-expanded="false" aria-controls="referralcode">
                      My Referral Code
                </button>
            </h2>
            <div id="referralcode" className="accordion-collapse collapse d-lg-block" aria-labelledby="headingThree"
                    data-bs-parent="#myTabContent">
                <div className="accordion-body">
                    <div className="box-container">
                        <div className="referral-box">
                          <h2>Unique Referral Code</h2>
                          <div className="referral-img">
                            <img src={require("../.././assets/images/imgs/referal-code.webp")} alt="" className="img-fluid"/>
                          </div>
                          <div className="referral-codebox">
                            GHTIJ
                          </div>
                          <div className="referral-button">
                            <button className="btn btn-code"><img src={require("../.././assets/images/icons/copy-icon.webp")}
                                alt="" className="img-fluid" /></button>
                            <button className="btn btn-code share-btn"><img src={require("../.././assets/images/icons/share-icon.webp")}
                                alt="" className="img-fluid" /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
        </>
    )
}

export default ReferralCode