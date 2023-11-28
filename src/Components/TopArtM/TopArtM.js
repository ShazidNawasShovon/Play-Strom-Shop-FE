import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const TopArt = [
  {
    name: "Ice Cream Face",
    owner: "@Hot Bids",
    imageUrl: "assets/Minting/image.png",
  },
  {
    name: "Ice Cream Face",
    owner: "@jenymors",
    imageUrl: "assets/Minting/fashion-boy-with-yellow-jacket-blue-pants.jpg",
  },
  {
    name: "Ice Cream Face",
    owner: "@Humpy dumpy",
    imageUrl:
      "assets/Minting/fun-3d-illustration-cartoon-kid-with-rain-gear.jpg",
  },
  {
    name: "Little Miki",
    owner: "@zannatun",
    imageUrl: "assets/Minting/fashion-little-boy.jpg",
  },
  {
    name: "Ice Cream Face",
    owner: "@Hot Bids",
    imageUrl: "assets/Minting/image.png",
  },
];

const TopArtM = () => {
  return (
    <div className="min-h-full mt-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-[2.6rem]  text-center font-bold tracking-tight text-black">
            Top people minded arts
          </h1>
        </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {TopArt.map((art, key) => (
            <SwiperSlide key={key}>
              <img
                className="w-full rounded-3xl lg:max-w-sm shadow-xl  drop-shadow-xl outline outline-1 outline-gray-200"
                src={art.imageUrl}
                alt="..."
              />
              <p className="text-[#919191] mt-2">{art.owner}</p>
              <h5 className="text-xl mb-16 text-center font-bold tracking-tight text-black">
                {art.name}
              </h5>
            </SwiperSlide>
          ))}
          {/* <SwiperSlide>
            <img
              className="w-full rounded-3xl lg:max-w-sm shadow-xl  drop-shadow-2xl outline outline-1 outline-gray-200"
              src="assets/Minting/image.png"
              alt="..."
            />
            <p className="text-[#919191] mt-2">@Hot Bids</p>
            <h5 className="text-xl mb-16 text-center font-bold tracking-tight text-black">
              Ice Cream Face
            </h5>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default TopArtM;
