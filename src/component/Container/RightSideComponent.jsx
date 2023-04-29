import React from "react";
import SuggestionsComponent from "../SuggestionsComponent";
import TrendingComponent from "../TrendingComponent";

const RightSideComponent = () => {
  return (
    <>
      <div className="right-box">
        <div className="box-container">
          <SuggestionsComponent />
        </div>
        <div className="box-container">
          <TrendingComponent />
        </div>
      </div>
    </>
  );
};

export default RightSideComponent;
