import React from "react";
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import StoryModal from "./Modal/StoryModal";

const StoryComponent = () => {
  return (
    <>
      <div className="story-slider">
        <div className="right-side-blur"></div>
        <Swiper
            modules={[Navigation]}
          spaceBetween={15}
          slidesPerView={6}
          navigation={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="swiper-slide">
                <a className="story">
                    <div className="profile add-story">
                      <div className="profile-add"><img src={require("../assets/images/icons/ico_add.png")} alt="" className="img-fluid" /></div>
                    </div>
                    <div className="title">Add Story</div>
                </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
                <a className="story" data-bs-toggle="modal" data-bs-target="#storyModal">
                    <div className="profile add-story">
                      <img src={require("../assets/images/imgs/user1.png")} alt="" />
                    </div>
                    <div className="title">Ruby Baker</div>
                </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
                <a className="story" data-bs-toggle="modal" data-bs-target="#storyModal">
                    <div className="profile">
                      <img src={require("../assets/images/imgs/user1.png")} alt="" />
                    </div>
                    <div className="title">Ruby Baker</div>
                </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
                <a className="story" data-bs-toggle="modal" data-bs-target="#storyModal">
                    <div className="profile">
                      <img src={require("../assets/images/imgs/user1.png")} alt="" />
                    </div>
                    <div className="title">Ruby Baker</div>
                </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
                <a className="story" data-bs-toggle="modal" data-bs-target="#storyModal">
                    <div className="profile">
                      <img src={require("../assets/images/imgs/user1.png")} alt="" />
                    </div>
                    <div className="title">Ruby Baker</div>
                </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
                <a className="story" data-bs-toggle="modal" data-bs-target="#storyModal">
                    <div className="profile">
                      <img src={require("../assets/images/imgs/user1.png")} alt="" />
                    </div>
                    <div className="title">Ruby Baker</div>
                </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
                <a className="story" data-bs-toggle="modal" data-bs-target="#storyModal">
                    <div className="profile">
                      <img src={require("../assets/images/imgs/user1.png")} alt="" />
                    </div>
                    <div className="title">Ruby Baker</div>
                </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <StoryModal />
    </>
  );
};

export default StoryComponent;
