import React from "react";
import { Link } from "react-router-dom";

const ShareModal = () => {
    return(
        <>
            <div className="modal fade" id="shareModal" tabIndex="-1" aria-labelledby="shareModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content share-modal-content">
                        <div className="modal-body p-0">
                            <div className="list-group">
                                <Link to="" className="list-group-item">Share</Link>
                                <Link to="" className="list-group-item">Copy link</Link>
                                <Link to="" className="list-group-item">Add to favorites</Link>
                                <Link to="" className="list-group-item">Hide</Link>
                                <Link to="" className="list-group-item">Unfollow</Link>
                                <Link to="" className="list-group-item list-report">Report</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShareModal