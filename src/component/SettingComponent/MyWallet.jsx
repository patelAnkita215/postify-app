import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const MyWallet = () => {
    return(
        <>
            <h2 className="accordion-header d-lg-none" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#wallet" aria-expanded="false" aria-controls="wallet">
                      My Wallet
                </button>
            </h2>
            <div id="wallet" className="accordion-collapse collapse d-lg-block" aria-labelledby="headingThree"
                    data-bs-parent="#myTabContent">
                <div className="accordion-body">
                    <div className="box-container">
                        <h2 className="setting-title">My Wallet</h2>
                        <div className="wallet-box">
                          <div>
                            <p className="balance-labels">Your balance</p>
                            <p className="wallet-amount">25,789</p>
                          </div>
                          <img src={require("../../assets/images/icons/dollar.webp")} alt="" />
                        </div>
                        <h3 className="gray-label">
                          Buy Coins
                        </h3>
                        <Swiper className="coin-slider"
                            spaceBetween={25}
                            slidesPerView={'auto'}
                            onSlideChange={() => console.log("slide change")}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide>
                              <div className="swiper-slide">
                                <div className="coin-box">
                                  <img src={require("../../assets/images/icons/dollar.webp")} alt="" className="dollar-sign" />
                                  <p>100 Coins</p>
                                  <p className="price">$1</p>
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="swiper-slide">
                                <div className="coin-box">
                                  <img src={require("../../assets/images/icons/dollar.webp")} alt="" className="dollar-sign" />
                                  <p>300 Coins</p>
                                  <p className="price">$3</p>
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="swiper-slide">
                                <div className="coin-box">
                                  <img src={require("../../assets/images/icons/dollar.webp")} alt="" className="dollar-sign" />
                                  <p>500 Coins</p>
                                  <p className="price">$5</p>
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="swiper-slide">
                                <div className="coin-box">
                                  <img src={require("../../assets/images/icons/dollar.webp")} alt="" className="dollar-sign" />
                                  <p>1000 Coins</p>
                                  <p className="price">$10</p>
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="swiper-slide">
                                <div className="coin-box">
                                  <img src={require("../../assets/images/icons/dollar.webp")} alt="" className="dollar-sign" />
                                  <p>100 Coins</p>
                                  <p className="price">$1</p>
                                </div>
                              </div>
                            </SwiperSlide>
                        </Swiper>
                        <h3 className="gray-label">
                          Transaction History
                        </h3>
                        <div className="history-box">
                          <div className="history-content">
                            <div className="date-icon">
                              02
                              <span>July</span>
                            </div>
                            <div className="col d-flex align-items-center justify-content-between">
                              <div>
                                <h3 className="name">Joseph Ipsum</h3>
                                <p>@josephip</p>
                              </div>
                              <p className="price">+11.99</p>
                            </div>
                          </div>
                          <div className="history-content">
                            <div className="date-icon">
                              02
                              <span>July</span>
                            </div>
                            <div className="col d-flex align-items-center justify-content-between">
                              <div>
                                <h3 className="name">Joseph Ipsum</h3>
                                <p>@josephip</p>
                              </div>
                              <p className="price price-danger">+11.99</p>
                            </div>
                          </div>
                          <div className="history-content">
                            <div className="date-icon">
                              02
                              <span>July</span>
                            </div>
                            <div className="col d-flex align-items-center justify-content-between">
                              <div>
                                <h3 className="name">Joseph Ipsum</h3>
                                <p>@josephip</p>
                              </div>
                              <p className="price price-danger">-98.99</p>
                            </div>
                          </div>
                          <button className="btn transaction-btn">
                            View all transaction
                          </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyWallet