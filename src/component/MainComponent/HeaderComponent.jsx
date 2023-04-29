import React from "react";
import GoLiveCommentModal from "../Modal/GoLiveCommentModal";

const HeaderComponent = () => {

    return(
        <>
            <header className="header">
                <nav className="navbar navbar-expand-md">
                <div className="container-md">
                    <a className="navbar-brand p-0" href="/">
                        <img src={require("../../assets/images/imgs/logo.png")} alt="" className="img-fluid" width="100px" />
                    </a>

                    <div className="center-part-content d-flex align-items-center">
                    <div className="search-container">
                        <div className="input-group search-box d-none d-md-flex">
                        <span className="input-group-text border-end-0 pe-0" id="basic-addon1">
                            <img src={require("../../assets/images/icons/ico_search.png")} alt="" className="img-fluid" width="18px" /></span>
                        <input type="text" className="form-control border-start-0" placeholder="Search something"
                            aria-label="Search something" aria-describedby="basic-addon1" />
                        </div>
                        <div className="search-mobile d-block d-md-none">
                        <div className="search-dropdown">
                            <button className="btn btn-dropdown dropdown-toggle p-0" type="button" id="searchButton1"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <div className="user-icon"><img src={require("../../assets/images/icons/ico_search.png")} alt="" className="img-fluid" width="18px" />
                            </div>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="searchButton1">
                            <li>
                                <div className="input-group search-box-mobile">
                                <input type="text" className="form-control" placeholder="Search something"
                                    aria-label="Search something" aria-describedby="button-addon2" />
                                <button className="btn btn-search" type="button" id="button-addon2">Search</button>
                                </div>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>

                    <div className="live-btn">
                        <button className="btn btn-live" data-bs-toggle="modal" data-bs-target="#goliveModal">
                            <img src={require("../../assets/images/icons/ico_live.png")} alt="" className="img-fluid" />
                            <span>Go Live</span></button>
                    </div>
                    <div className="wallet-icon">
                        <button className="btn btn-wallet">
                        <img src={require("../../assets/images/icons/ico_wallet.png")} alt="" className="img-fluid" width="22px" />
                        </button>
                    </div>
                    {/* <!-- mobile view menu --> */}
                    <div className="menu-dropdown d-block d-md-none">
                        <button className="btn btn-dropdown dropdown-toggle p-0" type="button" id="menu-dropdown"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <div className="user-icon"><img src={require("../../assets/images/icons/ico_menu.webp")} alt="" className="img-fluid" /></div>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="menu-dropdown">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="index.html">
                            <img src={require("../../assets/images/icons/ico_home.png")} alt="" className="img-fluid img-icon" />
                            <img src={require("../../assets/images/icons/ico_home_blue.png")} alt="" className="img-fluid img-icon-active" />
                            <span>Home Feed</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="messsage.html">
                            <img src={require("../../assets/images/icons/ico_chat.png")} alt="" className="img-fluid img-icon" />
                            <img src={require("../../assets/images/icons/ico_chat_blue.png")} alt="" className="img-fluid img-icon-active" />
                            <span>Messages</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="explore.html">
                            <img src={require("../../assets/images/icons/ico_map.png")} alt="" className="img-fluid img-icon" />
                            <img src={require("../../assets/images/icons/ico_map_blue.png")} alt="" className="img-fluid img-icon-active" />
                            <span>Explore</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="notification.html">
                            <img src={require("../../assets/images/icons/ico_notification.png")} alt="" className="img-fluid img-icon" />
                            <img src={require("../../assets/images/icons/ico_notification_blue.png")} alt="" className="img-fluid img-icon-active" />
                            <span>Notifications</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                            <img src={require("../../assets/images/icons/ico_bookmark.png")} alt="" className="img-fluid img-icon" />
                            <img src={require("../../assets/images/icons/ico_bookmark_blue.png")} alt="" className="img-fluid img-icon-active" />
                            <span>Favorites</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="settings.html">
                            <img src={require("../../assets/images/icons/ico_setting.png")} alt="" className="img-fluid img-icon" />
                            <img src={require("../../assets/images/icons/ico_setting_blue.png")} alt="" className="img-fluid img-icon-active" />
                            <span>Settings</span></a>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div className="right-part-content d-none d-md-block">
                    <div className="user-details">
                        <div className="user-dropdown">
                        <button className="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton1"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <div className="user-icon"><img src={require("../../assets/images/imgs/profile-user.png")} alt="" className="img-fluid" /></div>
                            <span className="user-name">Scarlett Doe</span>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </nav>
            </header>
            <GoLiveCommentModal/>
        </>
    )
}

export default HeaderComponent