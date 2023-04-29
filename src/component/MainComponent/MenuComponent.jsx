import React from "react";
import { Link } from 'react-router-dom';

const MenuComponent = () => {
    return(
        <>
            <ul className="nav">
              <li className="nav-item">
                <Link to="/" className='nav-link active'>
                  <img src={require("../../assets/images/icons/ico_home.png")} alt="" className="img-fluid img-icon" />
                  <img src={require("../../assets/images/icons/ico_home_blue.png")} alt="" className="img-fluid img-icon-active" />
                  <span>Home Feed</span>
                </Link> 
              </li>
              <li className="nav-item">
                <Link to="/message" className="nav-link">
                  <img src={require("../../assets/images/icons/ico_chat.png")} alt="" className="img-fluid img-icon" />
                  <img src={require("../../assets/images/icons/ico_chat_blue.png")} alt="" className="img-fluid img-icon-active" />
                  <span>Messages</span></Link>
              </li>
              <li className="nav-item">
                <Link to="/explore" className="nav-link">
                  <img src={require("../../assets/images/icons/ico_map.png")} alt="" className="img-fluid img-icon" />
                  <img src={require("../../assets/images/icons/ico_map_blue.png")} alt="" className="img-fluid img-icon-active" />
                  <span>Explore</span></Link>
              </li>
              <li className="nav-item">
                <Link to="/notification" className="nav-link">
                  <img src={require("../../assets/images/icons/ico_notification.png")} alt="" className="img-fluid img-icon" />
                  <img src={require("../../assets/images/icons/ico_notification_blue.png")} alt="" className="img-fluid img-icon-active" />
                  <span>Notifications</span></Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <img src={require("../../assets/images/icons/ico_bookmark.png")} alt="" className="img-fluid img-icon" />
                  <img src={require("../../assets/images/icons/ico_bookmark_blue.png")} alt="" className="img-fluid img-icon-active" />
                  <span>Favorites</span></Link>
              </li>
              <li className="nav-item">
                <Link to="/setting" className='nav-link'>
                  <img src={require("../../assets/images/icons/ico_setting.png")} alt="" className="img-fluid img-icon" />
                  <img src={require("../../assets/images/icons/ico_setting_blue.png")} alt="" className="img-fluid img-icon-active" />
                  <span>Settings</span>
                </Link>
              </li>
            </ul>
        </>
    )
}

export default MenuComponent