import React from "react";
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import StoryModal from "./Modal/StoryModal";

const StoryComponent = () => {
  const [swiper, setSwiper] = React.useState(null);
  // const swiper = useSwiper();
  return (
    <>
      <div className="story-slider">
        {/* <div className="right-side-blur"></div> */}
        <Swiper
            modules={[Navigation]}
          spaceBetween={15}
          slidesPerView={6}
          navigation={{ 
            clickable: true,
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
           }}
          breakpoints={{
            250: {
              slidesPerView: 4,
            },
            360: {
              slidesPerView: 5,
            },
            640: {
              slidesPerView: 6,
            },
            768: {
              slidesPerView: 6,
            },
            800: {
              slidesPerView: 6,
            },
            1200: {
              slidesPerView: 6,
            },
            1400: {
              slidesPerView: 6,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => setSwiper(swiper)}
        >
          <div className="right-side-blur"></div>
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

          <button onClick={() => swiper.slideNext()} className="swiper-button-next"><img src={require("../assets/images/icons/right-arrow.png")} class="img-fluid"
                  width="50px" /></button>
        </Swiper>
      </div>
      <StoryModal />
    </>
  );
};

export default StoryComponent;
