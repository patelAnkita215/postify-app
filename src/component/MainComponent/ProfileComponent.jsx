import React from "react";
import LeftSideComponent from "../Container/LeftSideComponent";
import RightSideComponent from "../Container/RightSideComponent";
import PostComponent from "../PostComponent";

const ProfileComponent = () => {
    return (
        <>
            <main>
                <div className="container">
                    <div className="main-box two-columns-grid">
                        <LeftSideComponent />
                        <div className="other-profile-container">
                            <div className="profile-content box-container">
                                <div className="profile-bg" style={{backgroundImage: "url('../../assets/images/bg/bg-img1.webp')"}}></div>
                                <div className="profile-box text-center">
                                    <div className="profile-more-detail"> 
                                        <div className="profile-logo"><img src={require("../../assets/images/imgs/user2.png")} alt="" className="img-fluid w-100" /></div>
                                        <div className="profile-more"><img src={require("../../assets/images/icons/ico_more-vertical.webp")} alt="" className="img-fluid" width="6px" /></div>
                                    </div>
                                    <h3 className="profile-title">Scarlett Doe <span>@scardoe</span></h3>
                                    <p className="profile-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <a href="#" className="profile-link">www.loremipsum.com</a>
                                    <div className="social-link">
                                    <ul>
                                        <li className="social-item"><a href="#"><img src={require("../../assets/images/icons/ico_facebook.webp")} alt="" className="img-fluid" width="11px" /></a></li>
                                        <li className="social-item"><a href="#"><img src={require("../../assets/images/icons/ico_instagram.webp")} alt="" className="img-fluid" width="20px" /></a></li>
                                        <li className="social-item"><a href="#"><img src={require("../../assets/images/icons/ico_twitter.webp")} alt="" className="img-fluid" width="21px" /></a></li>
                                        <li className="social-item"><a href="#"><img src={require("../../assets/images/icons/ico_linkedin.webp")} alt="" className="img-fluid" width="19px"/></a></li>
                                        <li className="social-item"><a href="#"><img src={require("../../assets/images/icons/ico_link.webp")} alt="" className="img-fluid" width="19px"/></a></li>
                                    </ul>
                                    </div>
                                    <div className="user-follow-details profile-follow d-flex align-items-center justify-content-center">
                                        <div className="follow-number text-center">
                                            <h5>125</h5>
                                            <span>Post</span>
                                        </div>
                                        <div className="follow-number text-center">
                                            <h5>598</h5>
                                            <span>Followers</span>
                                        </div>
                                        <div className="follow-number text-center">
                                            <h5>273</h5>
                                            <span>Following</span>
                                        </div>
                                    </div>
                                    {/* other profile */}
                                    <div className="follow-button d-flex align-items-center justify-content-center">
                                        <button className="btn btn-follow">Follow</button>
                                        <button className="btn btn-message">Message</button>
                                    </div>
                                </div>
                            </div>
                            <div className="sub-box-grid">
                                <div className="center-box">
                                    <PostComponent />
                                </div>
                                <RightSideComponent />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ProfileComponent