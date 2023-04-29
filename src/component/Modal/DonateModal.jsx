import React from "react";

const DonateModal = () => {
    return(
        <>
            <div className="modal fade custom-modal donate-modal" id="donateModal" tabIndex="-1" aria-labelledby="donateModalLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content border-0">
                        <div className="modal-header">
                            <div className="post-user p-0 post-user-control w-100">
                                <div className="post-user-logo post-user-logo-lg mx-auto">
                                <img src={require("../../assets/images/imgs/user1.png")} className="img-fluid" />
                                </div>
                                <h5 className="post-user-name mt-3 justify-content-center">Ruby Baker</h5>
                            </div>
                        </div>
                        <div className="modal-body text-center">
                            <h3 className="tip-title">TIP</h3>
                            <span className="username">@ruby.b</span>
                            <p className="amount">
                                10.00 USD
                            </p>
                            <div className="radio-price-group mb-4">
                                <input type="radio" className="btn-check" name="options" id="option1" autocomplete="off" checked />
                                <label className="btn btn-secondary" for="option1">$ 10</label>

                                <input type="radio" className="btn-check" name="options" id="option2" autocomplete="off" />
                                <label className="btn btn-secondary" for="option2">$ 50</label>

                                <input type="radio" className="btn-check" name="options" id="option3" autocomplete="off" />
                                <label className="btn btn-secondary" for="option3">$ 100</label>

                                <input type="radio" className="btn-check" name="options" id="option4" autocomplete="off" />
                                <label className="btn btn-secondary" for="option4">$ 500</label>
                            </div>
                            <input type="text" placeholder="Enter tip amount" className="amount-label" />
                            <div className="modal-footer justify-content-center border-0 pt-0">
                                <button type="button" className="btn btn-login donate-btn" data-bs-dismiss="modal">Donate</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DonateModal