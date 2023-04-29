import React, { useState } from "react";

const ChatMessage = () => {
  const [] = useState();

    return(
        <>
            <div className="settings-tab p-0 d-flex">
              <div className="modal-dialog message-wrapper modal-dialog-scrollable m-0 mw-100 w-100" tabIndex="-1"
                aria-labelledby="commentModalLabel">
                <div className="modal-content border-0">
                  <div className="modal-header">
                    <div className="post-user  p-0 post-user-control d-flex align-items-center">
                      <div className="post-user-logo">
                        <img src={require("../assets/images/imgs/user1.png")} alt="" className="img-fluid" />
                      </div>
                      <div className="col">
                        <h5 className="post-user-name">Ruby Baker</h5>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="dropdown">
                        <button className="btn btn-more" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                          aria-haspopup="true" aria-expanded="false"><img src={require("../assets/images/icons/ico_more.png")}
                            alt="" className="img-fluid" width="27px" /></button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a className="dropdown-item" href="#">Action</a>
                          <a className="dropdown-item" href="#">Another action</a>
                          <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                      </div>
                      <button type="button" className="btn-close chat-close-control"></button>
                    </div>
                  </div>
                  <div className="modal-body">
                    <div className="message-box">
                      <div className="content">
                        Hi Scarlett, any progress on the project? We need a link for standup.
                      </div>
                      <p className="time"> 1 day ago</p>
                    </div>
                    <div className="msg-date">
                      <span>Today</span>
                    </div>
                    <div className="message-box message-box-sent">
                      <div className="content">
                        Hi Ann!
                        Yes, I just finished developing the "Chat" module.
                        12:49 AM
                      </div>
                      <p className="time"> 1 day ago</p>
                    </div>
                    <div className="message-box">
                      <div className="content"><img src={require("../assets/images/imgs/chat-img.webp")} alt="" className="img-fluid chat-thumb" /></div>
                      <p className="time"> 1 day ago</p>
                    </div>
                    <div className="message-box message-box-sent">
                      <div className="content">
                        Awww 🥰 so cute!
                      </div>
                      <p className="time"> 1 day ago</p>
                    </div>
                    <ul className="file-upload">
                      <div className="row row-cols-1 row-cols-sm-3 justify-content-around">
                        <button className="btn">
                          <img src={require("../assets/images/icons/img-upload.webp")} alt="" />
                        </button>
                        <button className="btn">
                          <img src={require("../assets/images/icons/video.webp")} alt="" />
                        </button>
                        <button className="btn paidPostmodal-control" data-bs-toggle="modal"
                          data-bs-target="#paidPostmodal">
                          <img src={require("../assets/images/icons/diamond.webp")} alt="" />
                        </button>
                      </div>
                    </ul>
                    <div className="modal fade post-modal" data-bs-backdrop="static" id="paidPostmodal" tabIndex="-1"
                      aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content border-0">
                          <div className="modal-header border-0 justify-content-center">
                            <h5 className="modal-title">Paid Post</h5>
                          </div>
                          <div className="modal-body pb-2">
                            <input type="file" hidden id="uploadDoc" />
                            <label for="uploadDoc" className="uploadDoc">
                              <img src={require("../assets/images/icons/upload-media.webp")} alt="" />
                              <span>Upload Media</span>
                            </label>
                            <p className="amount-label">
                              Amount
                            </p>
                          </div>
                          <div className="modal-footer justify-content-center border-0 pt-0">
                            <button type="button" className="btn btn-login px-4" data-bs-dismiss="modal">Send</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="file-upload-backdrop"></div>
                  </div>
                  <div className="modal-footer flex-nowrap">
                    <button type="button" className="btn file-toggle">
                      <img src={require("../assets/images/icons/plus.webp")} alt="" />
                    </button>
                    <div className="input-group message-control m-0">
                      <input type="text" className="form-control border-0" placeholder="Just" />
                      <span className="input-group-text border-0" id="psw">
                        <img src={require("../assets/images/icons/dollar-sign.webp")} alt="" className="img-fluid" width="26px" />
                      </span>
                    </div>
                    <button type="button" className="btn m-0">
                      <img src={require("../assets/images/icons/send.webp")} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </>
    )
}

export default ChatMessage