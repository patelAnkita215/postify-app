import React from "react";
import { Link } from "react-router-dom";

export const LeftProfileDetails = () => {
    return(
        <>
            <div className="box-container pt-0 px-0">
                <div className="box-bg-img"></div>
                <div className="user-detail-box">
                <div className="user-img">
                    <img src={require("../assets/images/imgs/user-round.png")} alt="" className="img-fluid"/>
                </div>
                <h4 className="user-name text-center">Scarlett Doe <small>@scardoe</small></h4>
                <div className="user-follow-details">
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
                <p className="user-description text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt.</p>
                <Link to="/myprofile" className="btn btn-profile">My Profile</Link>
                </div>
            </div>
        </>
    )
}