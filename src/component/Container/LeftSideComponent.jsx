import React from "react";
import MenuComponent from "../MainComponent/MenuComponent";
import { LeftProfileDetails } from "../LeftProfileDetails";

function LeftSideComponent() {
  return (
    <>
      <div className="left-box d-none d-md-block">
        <LeftProfileDetails />
        <div className="box-container d-none d-md-block">
            <MenuComponent />
        </div>
      </div>
    </>
  );
}

export default LeftSideComponent;
