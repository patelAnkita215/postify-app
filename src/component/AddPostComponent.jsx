import React from "react";
import AudioModal from "./Modal/AudioModal";
import VideoModal from "./Modal/VideoModal";
import PhotoModal from "./Modal/PhotoModal";
import PostModal from "./Modal/PostTextModal"

const AddPostComponent = () => {
  
    return(
        <>
            <div className="box-container post-box-container">
            <div className="user-write d-flex align-items-center">
              <div className="user-logo">
                <img src={require("../assets/images/imgs/user-round.png")} alt="" className="img-fluid" />
              </div>
              <div className="user-type">
                <input type="text" className="form-control" data-bs-toggle="modal" data-bs-target="#postModal"
                  placeholder="write something awesome..." />
              </div>
            </div>
            <div className="clip-button d-flex align-items-center justify-content-end">
              <button className="btn btn-clip ms-0" data-bs-toggle="modal" data-bs-target="#photoModal"><img
                  src={require("../assets/images/icons/ico_img.png")} alt="" className="img-fluid" /><span>Photo</span></button>
              <button className="btn btn-clip" data-bs-toggle="modal" data-bs-target="#videoModal"><img
                  src={require("../assets/images/icons/ico_video.png")} alt="" className="img-fluid" /><span>Video</span></button>
              <button className="btn btn-clip me-0" data-bs-toggle="modal" data-bs-target="#audioModal"><img
                  src={require("../assets/images/icons/ico_audio.png")} alt="" className="img-fluid" /><span>Audio</span></button>
            </div>
          </div>
          <AudioModal />
          <VideoModal />
          <PhotoModal />
          <PostModal />
        </>
    )
}

export default AddPostComponent