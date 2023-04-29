import React from "react";

const SuggestionsComponent = () => {
    return (
        <>
            <h5 className="title text-center">Suggestions</h5>
            <div className="user-follow-list">
              <ul className="user-follow-lists ps-0 mb-0">
                <li className="user-follow-item">
                  <div className="user-follow-link d-flex justify-content-between align-items-center">
                    <div className="user-follow-name d-flex align-items-center">
                      <div className="follow-logo">
                        <img src={require("../assets/images/imgs/follow1.png")} alt="" className="img-fluid" />
                      </div>
                      <p className="mb-0">Daisy Pascall</p>
                    </div>
                    <div className="follow-button">
                      <button className="btn btn-follow">Follow</button>
                    </div>
                  </div>
                </li>
                <li className="user-follow-item">
                  <div className="user-follow-link d-flex justify-content-between align-items-center">
                    <div className="user-follow-name d-flex align-items-center">
                      <div className="follow-logo">
                        <img src={require("../assets/images/imgs/user4.png")} alt="" className="img-fluid" />
                      </div>
                      <p className="mb-0">Giant Dunzo</p>
                    </div>
                    <div className="follow-button">
                      <button className="btn btn-follow">Follow</button>
                    </div>
                  </div>
                </li>
                <li className="user-follow-item">
                  <div className="user-follow-link d-flex justify-content-between align-items-center">
                    <div className="user-follow-name d-flex align-items-center">
                      <div className="follow-logo">
                        <img src={require("../assets/images/imgs/user5.png")} alt="" className="img-fluid" />
                      </div>
                      <p className="mb-0">Eda Dolton</p>
                    </div>
                    <div className="follow-button">
                      <button className="btn btn-follow">Follow</button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
        </>
    )
}

export default SuggestionsComponent