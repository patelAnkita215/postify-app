import React from "react";

const StoryModal = () => {
    return(
        <>
            <div className="modal fade custom-modal modal-fullscreen-md-down story-modal" id="storyModal" tabIndex="-1"
                aria-labelledby="commentModalLabel">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content border-0">
                        <div className="modal-header">
                            <div className="post-list-box col">
                                <div className="post-user-detail d-flex align-items-center justify-content-between">
                                <div className="post-user d-flex align-items-center">
                                    <div className="post-user-logo">
                                    <img src={require("../../assets/images/imgs/user1.png")} className="img-fluid" />
                                    </div>
                                    <h5 className="post-user-name">Ruby Baker <span>@ruby.b</span></h5>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="post-more dropdown">
                                    <button className="btn btn-more" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src={require("../../assets/images/icons/ico_more.png")} className="img-fluid" width="27px" />
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="#">Unfollow</a></li>
                                        <li><a className="dropdown-item" href="#">Report</a></li>
                                    </ul>
                                    </div>
                                    <button type="button" className="btn-close d-md-none ms-3" data-bs-dismiss="modal"></button>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-body p-0">
                            <div className="swiper story-swiper">
                                <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <img src={require("../../assets/images/imgs/portrait.webp")} className="story-img" alt="" />
                                </div>
                                <div className="swiper-slide">
                                    <img src={require("../../assets/images/imgs/portrait.webp")} className="story-img" alt="" />
                                </div>
                                </div>
                                <div className="swiper-pagination"></div>
                            </div>
                        </div>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StoryModal