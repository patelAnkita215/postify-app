import React from "react";

const AudioModal = (props) => {
    const { show, onClose } = props;
    return(
        <>
            <div className="modal fade custom-modal comment-modal photo-modal" id="audioModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog  modal-content-lg modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content border-0">
                    <div className="modal-body">
                    <button type="button" className="btn-close d-md-none" data-bs-dismiss="modal"></button>

                    <div className="row m-0">
                        <div className="col-12 col-md-6 p-0 mb-md-0 d-flex flex-column">
                            {/*<input type="file" id="picupload" hidden />
                                <div className="file-label mb-3 h-100">
                                    <label for="picupload">
                                    <span>Upload Cover from your computer</span>
                                    </label>
                                </div>
                                <div className="file-label file-label-sm mb-md-0">
                                    <label for="picupload">
                                    <span>Upload Cover from your computer</span>
                                    </label>
                                </div> */}
                            <div className="file-box file-label">
                                <div className="audio-thumbnail">
                                <img src={require("../../assets/images/imgs/audio-thumb.webp")} alt="" />
                                </div>
                                <div className="btn-group">
                                <label for="picupload" className="btn">
                                    <img src={require("../../assets/images/icons/upload.webp")} alt="" />
                                </label>
                                </div>
                            </div>
                            <div className="file-label file-label-sm mb-md-0">
                                <div className="media-control w-100">
                                <button className="btn p-0 audio-play">
                                    <img src={require("../../assets/images/icons/button_Play.webp")} alt="" />
                                </button>
                                <div className="col">
                                    <div className="d-flex justify-content-between">
                                    <p className="duration m-0">1:56</p>
                                    <p className="duration m-0">4:27</p>
                                    </div>
                                    <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0"
                                        aria-valuemax="100" style={{width: "25%"}}></div>
                                    </div>
                                    <div className="text-end mt-2">
                                    <button className="btn btn-link-primary ms-auto">
                                        Change audio
                                    </button>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 ps-md-4 d-flex flex-column">
                        <div className="caption-control">
                            <div className="post-user post-user-control d-flex align-items-start p-0">
                            <div className="post-user-logo">
                                <img src={require("../../assets/images/imgs/user1.png")} className="img-fluid" />
                            </div>
                            <textarea placeholder="Write a caption here..." className="form-control p-0 pt-3 border-0"
                                rows="4"></textarea>
                            </div>
                        </div>
                        <div className="radio-price-group radio-price-group-circle">
                            <input type="radio" className="btn-check" name="plan4" id="all2" autocomplete="off" checked />
                            <label className="btn btn-secondary" for="all2">Free to all</label>

                            <input type="radio" className="btn-check" name="plan4" id="Subscribers2" autocomplete="off" />
                            <label className="btn btn-secondary" for="Subscribers2">For Subscribers</label>

                            <input type="radio" className="btn-check" name="plan4" id="Content2" autocomplete="off" />
                            <label className="btn btn-secondary" for="Content2">Paid Content</label>

                        </div>

                        <label className="caption-label">
                            <b>Audio Title</b> <input type="text" placeholder="username" className="form-control" />
                        </label>
                        <label className="caption-label">
                            <b>Tag people</b> <i>@</i> <input type="text" placeholder="username" className="form-control" />
                        </label>
                        <label className="caption-label">
                            <b>Hashtag</b> <i>#</i> <input type="text" placeholder="hashtag" className="form-control" />
                        </label>
                        <label className="caption-label border-0 mb-md-4">
                            <b>Amount</b> <i>$</i> <input type="text" placeholder="5" className="form-control" />
                        </label>
                        <div className="modal-footer justify-content-center border-0 p-0 mt-auto">
                            <button type="button" className="btn btn-login w-100 py-4" data-bs-dismiss="modal">Post</button>
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

export default AudioModal