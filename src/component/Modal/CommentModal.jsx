import React from "react";

const CommentModal = () => {
    return(
        <>
            <div className="modal fade custom-modal comment-modal" id="commentModal" tabIndex="-1" aria-labelledby="commentModalLabel"
                aria-hidden="true">
                <div className="modal-dialog  modal-content-lg modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content border-0">
                        <div className="modal-body p-0">
                            <div className="row m-0">
                                <div className="col-12 col-md-6 cmt-img-wrapper">
                                    <img src={require("../../assets/images/imgs/comment-img.webp")} alt="" className="cmt-img" />
                                </div>
                                <div className="col-12 col-md-6 px-0">
                                    <div className="modal-header">
                                        <div className="post-user  p-0 post-user-control d-flex align-items-center">
                                            <div className="post-user-logo">
                                                <img src={require("../../assets/images/imgs/user1.png")} className="img-fluid" />
                                            </div>
                                            <div className="col">
                                                <h5 className="post-user-name">Ruby Baker</h5>
                                                <p className="text-msg"> @ruby.b </p>
                                            </div>
                                        </div>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="post-user post-user-control d-flex align-items-start px-0">
                                            <div className="post-user-logo post-user-logo-sm">
                                                <img src={require("../../assets/images/imgs/user1.png")} className="img-fluid" />
                                            </div>
                                            <div className="col">
                                                <h5 className="post-user-name justify-content-start">
                                                Ruby Baker
                                                <p className="text-time m-0 ps-3"> 3 hours ago </p>
                                                </h5>
                                                <p className="text-msg user-comment">Lorem ipsum dolor sit amet, consectetur dipiscing elit. </p>
                                                <div className="d-flex comment-control">
                                                <button className="btn btn-link btn-link-danger">
                                                    Report
                                                </button>
                                                <button className="btn btn-link">
                                                    Reply
                                                </button>
                                                </div>
                                                <div className="post-user post-user-control d-flex align-items-start px-0">
                                                <div className="post-user-logo post-user-logo-sm">
                                                    <img src={require("../../assets/images/imgs/user1.png")} className="img-fluid" />
                                                </div>
                                                <div className="col">
                                                    <h5 className="post-user-name justify-content-start">
                                                    Ruby Baker
                                                    <p className="text-time m-0 ps-3"> 3 hours ago </p>
                                                    </h5>
                                                    <p className="text-msg user-comment">Lorem ipsum dolor sit amet, consectetur dipiscing elit.
                                                    </p>
                                                    <div className="d-flex comment-control">
                                                    <button className="btn btn-link btn-link-danger">
                                                        Report
                                                    </button>
                                                    <button className="btn btn-link">
                                                        Reply
                                                    </button>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-user post-user-control d-flex align-items-start px-0">
                                            <div className="post-user-logo post-user-logo-sm">
                                                <img src={require("../../assets/images/imgs/user1.png")} className="img-fluid" />
                                            </div>
                                            <div className="col">
                                                <h5 className="post-user-name justify-content-start">
                                                Ruby Baker
                                                <p className="text-time m-0 ps-3"> 3 hours ago </p>
                                                </h5>
                                                <p className="text-msg user-comment">Lorem ipsum dolor sit amet, consectetur dipiscing elit. </p>
                                                <div className="d-flex comment-control">
                                                <button className="btn btn-link btn-link-danger">
                                                    Report
                                                </button>
                                                <button className="btn btn-link">
                                                    Reply
                                                </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-user post-user-control d-flex align-items-start px-0">
                                            <div className="post-user-logo post-user-logo-sm">
                                                <img src={require("../../assets/images/imgs/user1.png")} className="img-fluid" />
                                            </div>
                                            <div className="col">
                                                <h5 className="post-user-name justify-content-start">
                                                Ruby Baker
                                                <p className="text-time m-0 ps-3"> 3 hours ago </p>
                                                </h5>
                                                <p className="text-msg user-comment">Lorem ipsum dolor sit amet, consectetur dipiscing elit. </p>
                                                <div className="d-flex comment-control">
                                                <button className="btn btn-link btn-link-danger">
                                                    Report
                                                </button>
                                                <button className="btn btn-link">
                                                    Reply
                                                </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-user post-user-control d-flex align-items-start px-0">
                                            <div className="post-user-logo post-user-logo-sm">
                                                <img src={require("../../assets/images/imgs/user1.png")} className="img-fluid" />
                                            </div>
                                            <div className="col">
                                                <h5 className="post-user-name justify-content-start">
                                                Ruby Baker
                                                <p className="text-time m-0 ps-3"> 3 hours ago </p>
                                                </h5>
                                                <p className="text-msg user-comment">Lorem ipsum dolor sit amet, consectetur dipiscing elit. </p>
                                                <div className="d-flex comment-control">
                                                <button className="btn btn-link btn-link-danger">
                                                    Report
                                                </button>
                                                <button className="btn btn-link">
                                                    Reply
                                                </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer flex-nowrap">
                                        <input type="text" className="form-control border-0" placeholder="Write Comment" />
                                        <button type="button" className="btn m-0">
                                            <img src={require("../../assets/images/icons/send.webp")} alt="" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommentModal