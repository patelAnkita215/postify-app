import React from "react";

const VideoModal = () => {
    return(
        <>
            <div className="modal fade custom-modal comment-modal photo-modal" id="videoModal" tabIndex="-1"
                aria-labelledby="commentModalLabel">
                <div className="modal-dialog  modal-content-lg modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content border-0">
                        <div className="modal-body">
                            <button type="button" className="btn-close d-md-none" data-bs-dismiss="modal"></button>

                            <div className="row m-0">
                                <div className="col-12 col-md-6 file-label p-0 mb-md-0">
                                    <input type="file" id="picupload" hidden />
                                    {/* <label for="picupload">
                                        <span>Upload Image from your computer</span>
                                    </label> */}
                                    <div className="file-box">
                                        <img src={require("../../assets/images/imgs/comment-img.webp")} alt="" className="cmt-img" />
                                        <div className="btn-group">
                                        <label for="picupload" className="btn">
                                            <img src={require("../../assets/images/icons/upload.webp")} alt="" />
                                        </label>
                                        </div>
                                        <img src={require("../../assets/images/icons/play-icon.webp")} className="play-btn" alt="" />
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
                                        <input type="radio" className="btn-check" name="plan3" id="all" autocomplete="off" checked />
                                        <label className="btn btn-secondary" for="all">Free to all</label>

                                        <input type="radio" className="btn-check" name="plan3" id="Subscribers" autocomplete="off" />
                                        <label className="btn btn-secondary" for="Subscribers">For Subscribers</label>

                                        <input type="radio" className="btn-check" name="plan3" id="Content" autocomplete="off" />
                                        <label className="btn btn-secondary" for="Content">Paid Content</label>

                                    </div>

                                    <label className="caption-label">
                                        <b>Tag people</b> <i>@</i> <input type="text" placeholder="username" className="form-control" />
                                    </label>
                                    <label className="caption-label">
                                        <b>Hashtag</b> <i>#</i> <input type="text" placeholder="hashtag" className="form-control" />
                                    </label>
                                    <label className="caption-label">
                                        <input type="file" id="thumbupload" hidden />
                                        <b>Thumbnail</b>
                                        <label for="thumbupload" className="btn btn-login thumb-btn">
                                        <img src={require("../../assets/images/icons/upload.webp")} alt="" />
                                        </label>
                                        <input type="text" placeholder="5" className="form-control" />
                                    </label>
                                    <label className="caption-label">
                                        <b>Amount</b> <i>$</i> <input type="text" placeholder="5" className="form-control" />
                                    </label>
                                    <label className="caption-label border-0 mb-md-3">
                                        <input type="file" id="thumbupload" hidden />
                                        <b>Thumbnail</b>
                                        <label for="thumbupload" className="btn btn-login thumb-btn">
                                        <img src={require("../../assets/images/icons/upload.webp")} alt="" />
                                        </label>
                                        carnival_teaser02.mp4
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

export default VideoModal