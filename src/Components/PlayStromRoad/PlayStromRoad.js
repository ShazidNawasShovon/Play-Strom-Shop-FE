import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

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
const PlayStromRoad = () => {
  console.log(window.innerWidth);
  return (
    <div className="relative isolate overflow-hidden  py-16 bg-[#F8F8F8]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-[2.6rem] mb-16 text-center font-bold tracking-tight text-black">
          PlayStorm Roadmap
        </h2>
        <Swiper
          slidesPerView={window.innerWidth > 768 ? 3 : 1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
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
              <div>
                <p>phase-o1</p>
                <h2>Planning</h2>
                <p>
                  Planning is a cognitive process that involves setting goals,
                  determining the steps needed to achieve those goals, and
                  organizing resources and activities to execute the necessary
                  actions.
                </p>
              </div>
            </SwiperSlide>
          ))}
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#c1dddc] to-[#fdffff5a] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
};

export default PlayStromRoad;
