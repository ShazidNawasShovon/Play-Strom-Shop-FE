import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import React from "react";

const Banner = () => {
  return (
    <div className="min-h-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none  md:grid-cols-2 items-center">
          <>
            <div className="w-full lg:text-7xl md:text-5xl text-4xl text-start">
              <span className="font-black">Mint</span>
              <span className="">
                {" "}
                And <strong className="font-black">Sell</strong>
              </span>
              <div className="mx-auto grid  gap-y-5 lg:max-w-[9em] grid-cols-2 items-center mt-4 justify-start">
                <span className="font-black   lg:pe-7 pe-3 ">Web3</span>
                <img
                  className="lg:w-[260px]  w-40 md:w-48  items-center"
                  src="assets/Banner/image.png"
                  alt="..."
                />
                <img
                  className="lg:w-[183px] md:w-32 w-28 items-center "
                  src="assets/Banner/image (1).png"
                  alt="..."
                />
                <img
                  className="lg:w-[260px] md:w-40 w-28"
                  src="assets/Banner/heading.png"
                  alt="..."
                />
                <p className="text-base text-[#919191] col-span-2">
                  Minting and selling Web3 digital art involves creating unique
                  digital artworks using blockchain technology and making them
                  available for purchase on decentralized platforms.
                </p>
              </div>

              <button
                href="/"
                className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                Explore The Market{" "}
                <span className="inline-flex items-center">
                  <ArrowUpRightIcon width={23} height={14} />
                </span>
              </button>
            </div>
          </>
          <div>
            <img src="assets/Banner/Image Part.png" alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
