import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";

const posts = [
  {
    id: 1,

    author: {
      name: "Jenia Mors",
      role: "@jenymors",
      href: "#",
      imageUrl: "assets/NFT Digital Art/mors avater.png",
    },
  },
  // More posts...
];
const cards = [
  {
    name: "PSR #203",
    imageUrl: "assets/Cards/1.png",
    type: "Current Bid",
    price: 1.38,
  },
  {
    name: "PSR #576",
    imageUrl: "assets/Cards/2.png",
    type: "Current Bid",
    price: 2.85,
  },
  {
    name: "PSR #086",
    imageUrl: "assets/Cards/3.png",
    type: "Current Bid",
    price: 1.58,
  },
  {
    name: "PSR #703",
    imageUrl: "assets/Cards/4.png",
    type: "Current Bid",
    price: 3.38,
  },
  {
    name: "PSR #205",
    imageUrl: "assets/Cards/5.png",
    type: "Current Bid",
    price: 1.38,
  },
  {
    name: "PSR #596",
    imageUrl: "assets/Cards/6.png",
    type: "Current Bid",
    price: 2.85,
  },
  {
    name: "PSR #201",
    imageUrl: "assets/Cards/7.png",
    type: "Current Bid",
    price: 1.58,
  },
  {
    name: "PSR #897",
    imageUrl: "assets/Cards/8.png",
    type: "Current Bid",
    price: 3.38,
  },
];

const PopularCollection = () => {
  return (
    <div className="min-h-full mt-5">
      <div className="relative isolate overflow-hidden bg-gray-900 py-[5.85rem]">
        <img
          src="/assets/popularcollection/bg.png"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full  bg-repeat"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#000000] to-[#000000] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#000000] to-[#000000] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-7xl  grid grid-cols-1 md:grid-cols-2 gap-3">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-start self-center ">
              Popular collection for NFT digital Art
            </h2>
            <p className="mt-6 leading-8 md:text-md text-sm lg:text-lg text-[#CACACA] text-justify justify-self-end">
              This collection showcases a diverse range of artistic styles,
              themes, and mediums, including digital paintings, 3D sculptures,
              animations, virtual reality experiences, and generative art.
              <a
                href="http://"
                className="text-orange-500 text-sm block underline underline-offset-2"
              >
                See more <MdKeyboardArrowRight className="inline-block" />
              </a>
            </p>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none  md:grid-cols-3 lg:grid-cols-4 items-center mt-10 ">
            {cards.map((card, key) => (
              // <HotBids key={key} card={card} />
              <div
                className="w-full rounded-lg shadow-lg  drop-shadow-2xl lg:max-w-sm outline outline-1 outline-gray-800"
                key={key}
              >
                <div className="mx-auto grid max-w-sm grid-cols-2 gap-x-4  px-3  ">
                  {posts.map((post) => (
                    <>
                      <div
                        key={post.id}
                        className="flex my-2  max-w-xl flex-col items-center justify-between "
                      >
                        <div className="relative flex items-center gap-x-2">
                          <img
                            src={post.author.imageUrl}
                            alt=""
                            className="h-6 w-6 rounded-full bg-gray-50"
                          />
                          <div className="text-sm leading-6">
                            <p className="text-[#CACACA]">{post.author.role}</p>
                          </div>
                        </div>
                      </div>
                      <div className=" self-center justify-self-end">
                        <BsThreeDots className="text-[1.5rem] text-[#CACACA]" />
                      </div>
                    </>
                  ))}
                </div>
                <img
                  className="p-3 rounded-md mx-auto"
                  src={card.imageUrl}
                  alt="..."
                  srcSet=""
                />
                <div className="mx-auto grid grid-cols-2 gap-x-4">
                  <div className="p-4 text-start">
                    <h4 className="text-[1.3rem] text-[#FFFFFF] font-black">
                      {card.name}
                    </h4>
                    <p className="mb-2 text-[1rem] leading-normal text-[#919191]">
                      {card.type}
                    </p>
                    <p className=" text-[1rem] leading-normal text-orange-500">
                      {card.price} ETH
                    </p>
                  </div>
                  <div className="p-4 text-end self-end">
                    <button className="px-4 py-2 text-sm text-white  bg-orange-500 rounded-[0.6rem] shadow">
                      Place a Bid
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCollection;
