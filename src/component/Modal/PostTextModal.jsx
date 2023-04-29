import React from "react";

const PostTextModal = () => {
    return(
        <>
            <div className="modal fade custom-modal modal-fullscreen-md-down comment-modal text-post-modal" id="postModal"
                tabIndex="-1" aria-labelledby="commentModalLabel">
                <div className="modal-dialog  modal-content-sm modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content border-0">
                        <div className="modal-body d-flex flex-column">
                            <button type="button" className="btn-close d-md-none" data-bs-dismiss="modal"></button>

                            <textarea placeholder="Write a caption here..." className="form-control p-0 pt-3 post-text-areacontrol" rows="9">
                                The physical world and the inner soul constitute nature, the ultimate source of our living. Both living and non-living things include nature, and everyone is interdependent, which helps maintain the ecosystem. Plants, animals, and humans all depend on nature for their survival.
                            </textarea>
                            <div className="radio-price-group radio-price-group-circle justify-content-start">
                                <input type="radio" className="btn-check" name="plan" id="all3" autocomplete="off" checked />
                                <label className="btn btn-secondary flex-grow-0" for="all3">Free to all</label>

                                <input type="radio" className="btn-check" name="plan" id="Subscribers3" autocomplete="off" />
                                <label className="btn btn-secondary flex-grow-0" for="Subscribers3">For Subscribers</label>

                            </div>
                            <label className="caption-label">
                                <b>Tag people</b> <i>@</i> <input type="text" placeholder="username" className="form-control" />
                            </label>
                            <label className="caption-label border-0 mb-md-5">
                                <b>Hashtag</b> <i>#</i> <input type="text" placeholder="hashtag" className="form-control" />
                            </label>
                            <div className="modal-footer justify-content-center border-0 p-0 mt-auto">
                                <button type="button" className="btn btn-login w-100 py-4" data-bs-dismiss="modal">Post</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostTextModal