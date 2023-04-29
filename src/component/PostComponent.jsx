import React from "react";
import CommentModal from "./Modal/CommentModal";
import DonateModal from "./Modal/DonateModal";
import ShareModal from "./Modal/ShareModal";

const PostComponent = () => {
    return(
        <>
            <div className="post-list-box">
                <ul className="post-lists ps-0 mb-0">
                <li className="post-item">
                    <div className="box-container">
                    <div className="post-user-detail d-flex align-items-center justify-content-between">
                        <div className="post-user d-flex align-items-center">
                        <div className="post-user-logo">
                            <img src={require("../assets/images/imgs/user1.png")} alt="" className="img-fluid" />
                        </div>
                        <h5 className="post-user-name">Ruby Baker <span>@ruby.b</span></h5>
                        </div>
                        <div className="post-more">
                        <button className="btn btn-more" data-bs-toggle="modal" data-bs-target="#shareModal"><img
                            src={require("../assets/images/icons/ico_more.png")} alt="" className="img-fluid" width="27px" /></button>
                        </div>
                    </div>
                    <div className="post-image">
                        <img src={require("../assets/images/imgs/img-1.png")} alt="" className="img-fluid" />
                    </div>
                    <div className="post-comments">
                        <div className="post-likes d-flex align-items-start justify-content-between">
                        <div className="like-button d-flex">
                            <div className="d-flex align-items-center flex-column me-4"><button className="btn btn-like"><img
                                src={require("../assets/images/icons/ico_heart.png")} alt="" className="img-fluid" /></button><small>498</small>
                            </div>
                            <div className="d-flex align-items-center flex-column"><button className="btn btn-like"
                                data-bs-toggle="modal" data-bs-target="#commentModal"><img
                                src={require("../assets/images/icons/ico_comment.png")} alt="" className="img-fluid" /></button><small>19</small>
                            </div>
                        </div>
                        <div className="donate-button">
                            <button className="btn btn-donate" data-bs-toggle="modal" data-bs-target="#donateModal">$
                            Donate</button>
                        </div>
                        </div>
                        <div className="comment-description">
                        <p>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <span
                            className="text-blue">#lorm</span><span className="text-blue">#ipsum</span></p>
                        <p className="mb-0 post-time">13 hours ago</p>
                        </div>
                    </div>
                    </div>
                </li>
                <li className="post-item">
                    <div className="box-container">
                    <div className="post-user-detail d-flex align-items-center justify-content-between">
                        <div className="post-user d-flex align-items-center">
                        <div className="post-user-logo">
                            <img src={require("../assets/images/imgs/user2.png")} alt="" className="img-fluid" />
                        </div>
                        <h5 className="post-user-name">Daisy Floyd <span>@daisyfloyd</span></h5>
                        </div>
                        <div className="post-more">
                        <button className="btn btn-more"><img src={require("../assets/images/icons/ico_more.png")} alt="" className="img-fluid"
                            width="27px" /></button>
                        </div>
                    </div>
                    <div className="post-image">
                        <div className="post-lock">
                        <div className="right-button">
                            <button className="btn btn-teaser"><img src={require("../assets/images/icons/ico_play.png")}
                                alt="" className="img-fluid me-1" /> Teaser</button>
                        </div>
                        <div className="d-flex align-items-center flex-column justify-content-center w-100 h-100">
                            <img src={require("../assets/images/icons/ico_lock.png")} alt="" className="img-fluid" />
                            <button className="btn btn-lock">Unlock</button>
                        </div>
                        </div>
                        <img src={require("../assets/images/imgs/img-1.png")} alt="" className="img-fluid" />
                    </div>
                    <div className="post-comments">
                        <div className="post-likes d-flex align-items-start justify-content-between">
                        <div className="like-button d-flex">
                            <div className="d-flex align-items-center flex-column me-4"><button className="btn btn-like"><img
                                src={require("../assets/images/icons/ico_heart.png")} alt="" className="img-fluid" /></button><small>498</small>
                            </div>
                            <div className="d-flex align-items-center flex-column"><button className="btn btn-like"><img
                                src={require("../assets/images/icons/ico_comment.png")} alt="" className="img-fluid" /></button><small>19</small>
                            </div>
                        </div>
                        <div className="donate-button">
                            <button className="btn btn-donate">$ Donate</button>
                        </div>
                        </div>
                        <div className="comment-description">
                        <p>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <span
                            className="text-blue">#lorm</span><span className="text-blue">#ipsum</span></p>
                        <p className="mb-0 post-time">13 hours ago</p>
                        </div>
                    </div>
                    </div>
                </li>
                </ul>  
            </div>
            <CommentModal />
            <DonateModal />
            <ShareModal />
        </>
    )
}

export default PostComponent