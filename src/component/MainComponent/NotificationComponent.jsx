import React from "react";
import LeftSideComponent from "../Container/LeftSideComponent";
import RightSideComponent from "../Container/RightSideComponent";

const NotificationComponent = () => {
    return(
        <>
        <main>
        <div className="container-md">
          <div className="main-box">
            <LeftSideComponent />
            <div className="center-box">
                <div className="box-container notification-container">
                <h5 className="title text-center">Notifications</h5>
                <div className="notification-content">
                    <ul className="notification-lists ps-0 mb-0">
                    <li className="notification-item">
                        <a href="#" className="notification-link">
                        <div className="notification-logo"><img src={require("../../assets/images/imgs/img1.png")} alt="" className="img-fluid" /></div>
                        <div className="notification-comment">
                            <p className="mb-0"><span>Jitendrasingh Jadeja</span>
                            <span className="text-blue ms-1">commented on post</span></p>
                            <small>2 hours ago</small>
                        </div>
                        </a>
                    </li>
                    <li className="notification-item">
                        <a href="#" className="notification-link">
                        <div className="notification-logo"><img src={require("../../assets/images/imgs/img1.png")} alt="" className="img-fluid" /></div>
                        <div className="notification-comment">
                            <p className="mb-0"><span>Jitendrasingh Jadeja</span>
                            <span className="text-blue ms-1">commented on post</span></p>
                            <small>2 hours ago</small>
                        </div>
                        </a>
                    </li>
                    <li className="notification-item">
                        <a href="#" className="notification-link">
                        <div className="notification-logo"><img src={require("../../assets/images/imgs/img1.png")} alt="" className="img-fluid" /></div>
                        <div className="notification-comment">
                            <p className="mb-0"><span>Jitendrasingh Jadeja</span>
                            <span className="text-blue ms-1">commented on post</span></p>
                            <small>5 days ago</small>
                        </div>
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            <RightSideComponent />
          </div>
        </div>
      </main>
        </>
    )
}

export default NotificationComponent