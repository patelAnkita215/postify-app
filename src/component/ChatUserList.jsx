import React from "react";

const ChatUserList = () => {
    return (
        <>
            <div className="setting-tabs">
              <div className="input-group message-control m-0 chat-search">
                <span className="input-group-text border-0" id="psw">
                  <img src={require("../assets/images/icons/ico_search.png")} alt="" className="img-fluid" />
                </span>
                <input type="text" className="form-control border-0" placeholder="Search" />
              </div>
              <div className="post-user post-user-control post-user-control-active d-flex align-items-center">
                <div className="post-user-logo">
                  <img src={require("../assets/images/imgs/user1.png")} alt="" className="img-fluid" />
                </div>
                <div className="col">
                  <h5 className="post-user-name">Ruby Baker <span>24m ago</span></h5>
                  <p className="text-msg"> 
                    <b>you still at home... </b>
                    <span className="badge">1</span>
                  </p>
                </div>
              </div>
              <div className="post-user post-user-control d-flex align-items-center">
                <div className="post-user-logo">
                  <img src={require("../assets/images/imgs/user1.png")} alt="" className="img-fluid" />
                </div>
                <div className="col">
                  <h5 className="post-user-name">Ruby Baker <span>24m ago</span></h5>
                  <p className="text-msg"> <b>you still at home... </b></p>
                </div>
              </div>
              <div className="post-user post-user-control d-flex align-items-center">
                <div className="post-user-logo">
                  <img src={require("../assets/images/imgs/user1.png")} alt="" className="img-fluid" />
                </div>
                <div className="col">
                  <h5 className="post-user-name">Ruby Baker <span>24m ago</span></h5>
                  <p className="text-msg"> <b>you still at home... </b></p>
                </div>
              </div>
              <div className="post-user post-user-control d-flex align-items-center">
                <div className="post-user-logo">
                  <img src={require("../assets/images/imgs/user1.png")} alt="" className="img-fluid" />
                </div>
                <div className="col">
                  <h5 className="post-user-name">Ruby Baker <span>24m ago</span></h5>
                  <p className="text-msg"> you still at home...</p>
                </div>
              </div>
              <div className="post-user post-user-control d-flex align-items-center">
                <div className="post-user-logo">
                  <img src={require("../assets/images/imgs/user1.png")} alt="" className="img-fluid" />
                </div>
                <div className="col">
                  <h5 className="post-user-name">Ruby Baker <span>24m ago</span></h5>
                  <p className="text-msg"> you still at home...</p>
                </div>
              </div>
              <div className="post-user post-user-control d-flex align-items-center">
                <div className="post-user-logo">
                  <img src={require("../assets/images/imgs/user1.png")} alt="" className="img-fluid" />
                </div>
                <div className="col">
                  <h5 className="post-user-name">Ruby Baker <span>24m ago</span></h5>
                  <p className="text-msg"> you still at home...</p>
                </div>
              </div>
            </div>
        </>
    )
}

export default ChatUserList