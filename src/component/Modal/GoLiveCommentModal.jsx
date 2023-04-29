import React, { useState } from "react";

const GoLiveCommentModal = () => {
    const [liveTitle, setLiveTitle] = useState('');
    const [liveDescription, setLiveDescription] = useState('');
    return(
        <>
            <div className="modal fade custom-modal comment-modal golive-modal" id="goliveModal" tabIndex="-1"
                aria-labelledby="commentModalLabel" aria-hidden="true">
                <div className="modal-dialog  modal-content-lg modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content border-0">
                        <div className="modal-body p-0">
                            <div className="row m-0">
                                <div className="col-12 col-md-6 col-xl-7 cmt-img-wrapper">
                                    <img src={require("../../assets/images/imgs/comment-img.webp")} alt="" className="cmt-img" />
                                </div>
                                <div className="col-12 col-md-6 col-xl-5 px-0 d-flex flex-column">
                                    <button type="button" className="exit-btn" data-bs-dismiss="modal">
                                        <img src={require("../../assets/images/icons/logout.webp")} className="me-1" alt="" />
                                        Exit Live Stream
                                    </button>
                                    <div>
                                        <div className="modal-body d-flex flex-column">
                                            <div className="w-100 scroll-box">
                                                <input placeholder="Live Stream Title" className="border-0 text-center amount-label w-100 mw-100" value={liveTitle} onChange={(e)=>setLiveTitle(e.target.value)} />
                                                <textarea className="border-0 text-center amount-label w-100 mw-100" rows="3" value={liveDescription} onChange={(e)=>setLiveDescription(e.target.value)}>Description</textarea>
                                                <div className="my-2">
                                                    <div className="form-check form-switch free-label">
                                                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                        <label className="form-check-label free-label">
                                                        <span className="on">Free</span>
                                                        <span className="off">Paid</span>
                                                        </label>
                                                        <div className="amount-label p-3 p-lg-4">
                                                        <p className="paid-title">Paid Live Stream</p>
                                                        <input placeholder="Enter the Price"
                                                            className="border-0 text-center amount-label mt-0 bg-white" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-auto">
                                                <button className="btn live-btn mb-3">
                                                <span></span>
                                                Go Live
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- view button --> */}
                                    {/* <button className="btn view-btn">
                                        <img src={require("../../assets/images/icons/eye.webp")} className="me-1" alt="" />
                                        4592
                                    </button> */}
                                    {/* <!-- live comment --> */}
                                    {/* <div className="stream-comment h-100 ">
                                        <h3 className="stream-title">Live Comments</h3>
                                        <div className="stream-body">
                                        <div className="post-user post-user-control d-flex align-items-start px-0">
                                            <div className="post-user-logo post-user-logo-sm">
                                            <img src={require("../../assets/images/imgs/user1.png")} className="img-fluid" />
                                            </div>
                                            <div className="col">
                                            <h5 className="post-user-name justify-content-start">
                                                Ruby Baker
                                            </h5>
                                            <p className="text-msg user-comment">
                                                Lorem ipsum dolor sit amet, consectetur dipiscing elit. 
                                            </p>
                                            </div>
                                        </div>
                                        <div className="post-user post-user-control d-flex align-items-start px-0">
                                            <div className="post-user-logo post-user-logo-sm">
                                            <img src={require("../../assets/images/imgs/user1.png")} className="img-fluid" />
                                            </div>
                                            <div className="col">
                                            <h5 className="post-user-name justify-content-start">
                                                Ruby Baker
                                            </h5>
                                            <p className="text-msg user-comment">
                                                Lorem ipsum dolor sit amet, consectetur dipiscing elit. 
                                            </p>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="stream-footer">
                                        <div className="post-user post-user-control d-flex align-items-start px-0">
                                            <div className="post-user-logo post-user-logo-sm">
                                            <img src={require("../../assets/images/imgs/user1.png")} className="img-fluid" />
                                            </div>
                                            <div className="col d-flex justify-content-between">
                                            <input type="text" className="w-100" placeholder="Say something..." />
                                            <button type="button" className="btn p-0">
                                                <img src={require("../../assets/images/icons/send.webp")} alt="" />
                                            </button>
                                            </div>
                                        </div>
                                        </div>
                                    </div> */}

                                    {/* <!-- Live Audience --> */}
                                    {/* <div className="stream-comment live-audience h-100 ">
                                        <h3 className="stream-title">Live Audience</h3>
                                        <div className="stream-body">
                                        <div className="col d-flex justify-content-between live-search">
                                            <img src={require("../../assets/images/icons/ico_search.png")} alt="" className="me-3" />
                                            <input type="text" className="w-100" placeholder="Search" />
                                        </div>
                                        <div className="post-user post-user-control d-flex align-items-center px-0">
                                            <div className="post-user-logo post-user-logo-sm">
                                            <img src={require("../../assets/images/imgs/user1.png")} className="img-fluid" />
                                            </div>
                                            <div className="col">
                                            <h5 className="post-user-name justify-content-start">
                                                Jhon Doe
                                            </h5>
                                            </div>
                                        </div>
                                        <div className="post-user post-user-control d-flex align-items-center px-0">
                                            <div className="post-user-logo post-user-logo-sm">
                                            <img src={require("../../assets/images/imgs/user1.png")} className="img-fluid" />
                                            </div>
                                            <div className="col">
                                            <h5 className="post-user-name justify-content-start">
                                                Morak Bolec
                                            </h5>
                                            </div>
                                        </div>
                                        <div className="post-user post-user-control d-flex align-items-center px-0">
                                            <div className="post-user-logo post-user-logo-sm">
                                            <img src={require("../../assets/images/imgs/user1.png")} className="img-fluid" />
                                            </div>
                                            <div className="col">
                                            <h5 className="post-user-name justify-content-start">
                                                Gabriela Jore
                                            </h5>
                                            </div>
                                        </div>
                                        <div className="post-user post-user-control d-flex align-items-center px-0">
                                            <div className="post-user-logo post-user-logo-sm">
                                            <img src={require("../../assets/images/imgs/user1.png")} className="img-fluid" />
                                            </div>
                                            <div className="col">
                                            <h5 className="post-user-name justify-content-start">
                                                Michel Jordan
                                            </h5>
                                            </div>
                                        </div>
                                        </div> 
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GoLiveCommentModal