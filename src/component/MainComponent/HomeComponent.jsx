import React from "react";
import AddPostComponent from "../AddPostComponent";
import LeftSideComponent from "../Container/LeftSideComponent";
import RightSideComponent from "../Container/RightSideComponent";
import PostComponent from "../PostComponent";
import StoryComponent from "../StoryComponent";

const MainComponent = () => {
  return (
    <>
      <main>
        <div className="container">
          <div className="main-box">
            <LeftSideComponent />
            <div className="center-box">
              <StoryComponent />
              <AddPostComponent />
              <PostComponent />
            </div>
            <RightSideComponent />
          </div>
        </div>
      </main>
    </>
  );
};

export default MainComponent;
