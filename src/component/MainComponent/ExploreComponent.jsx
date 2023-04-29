import React from "react";
import LeftSideComponent from "../Container/LeftSideComponent";

const ExploreComponent = () => {
    return(
        <>
            <main>
                <div class="container-md">
                    <div class="main-box two-columns-grid">
                    <LeftSideComponent />
                    <div class="explore-container">
                        <div class="box-container">
                        <div class="trend-grid explore-grid">
                            <div class="trend-grid__item"><img src={require("../../assets/images/imgs/img1.png")} alt=""/></div>
                            <div class="trend-grid__item"><img src={require("../../assets/images/imgs/img2.png")} alt=""/></div>
                            <div class="trend-grid__item"><img src={require("../../assets/images/imgs/img3.png")} alt=""/></div>
                            <div class="trend-grid__item trend-grid__item--lg">
                                <img src={require("../../assets/images/imgs/img4.png")} alt=""/>
                            </div>
                            <div class="trend-grid__item"><img src={require("../../assets/images/imgs/img5.png")} alt=""/></div>
                            <div class="trend-grid__item"><img src={require("../../assets/images/imgs/img6.png")} alt=""/></div>
                            <div class="trend-grid__item"><img src={require("../../assets/images/imgs/img7.png")} alt=""/></div>
                            <div class="trend-grid__item"><img src={require("../../assets/images/imgs/img7.png")} alt=""/></div>
                            <div class="trend-grid__item"><img src={require("../../assets/images/imgs/img7.png")} alt=""/></div>
                            <div class="trend-grid__item"><img src={require("../../assets/images/imgs/img7.png")} alt=""/></div>
                            <div class="trend-grid__item  trend-grid__item--lg"><img src={require("../../assets/images/imgs/img7.png")} alt=""/></div>
                            <div class="trend-grid__item"><img src={require("../../assets/images/imgs/img7.png")} alt=""/></div>
                            <div class="trend-grid__item"><img src={require("../../assets/images/imgs/img7.png")} alt=""/></div>
                            <div class="trend-grid__item"><img src={require("../../assets/images/imgs/img7.png")} alt=""/></div>
                            <div class="trend-grid__item"><img src={require("../../assets/images/imgs/img7.png")} alt=""/></div>
                        </div>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </main>
        </>
    )
}

export default ExploreComponent