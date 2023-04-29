import React from "react";

const TrendingComponent = () => {
  return (
    <>
      <h5 className="title text-center">Trending Feeds</h5>
      <div className="trend-grid">
        <div className="trend-grid__item">
          <img src={require("../assets/images/imgs/img1.png")} alt=""/>
        </div>
        <div className="trend-grid__item">
          <img src={require("../assets/images/imgs/img2.png")} alt=""/>
        </div>
        <div className="trend-grid__item trend-grid__item--hor vibes">
          <div className="vibes-content">
            <div className="d-flex align-items-center">
              <div className="vibes-icon"><img src={require("../assets/images/icons/play-blue.webp")} alt="" className="img-fluid" /></div>
              <h5>Jazz Track by Schoufer | Night Vibes 1978</h5>
            </div>
            <div className="vibes-progress">
              <div className="range-slider">
                <small className="range-number"><span className="first-number">1:56</span><span className="last-number">4:27</span></small>
                        
                <input className="range-slider__range" type="range" value="250" min="0" max="500" step="50" />
              </div>
            </div>
          </div>
        </div>
        <div className="trend-grid__item">
          <img src={require("../assets/images/imgs/img3.png")} alt=""/>
        </div>
        <div className="trend-grid__item">
          <img src={require("../assets/images/imgs/img4.png")} alt=""/>
        </div>
        <div className="trend-grid__item">
          <img src={require("../assets/images/imgs/img5.png")} alt=""/>
        </div>
        <div className="trend-grid__item trend-grid__item--vert">
          <img src={require("../assets/images/imgs/img6.png")} alt=""/>
        </div>
        <div className="trend-grid__item">
          <img src={require("../assets/images/imgs/img7.png")} alt=""/>
        </div>
      </div>
      <div className="trend-description">
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </span>
      </div>
    </>
  );
};

export default TrendingComponent;
