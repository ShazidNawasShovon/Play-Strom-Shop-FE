import React from "react";
import { BsFire } from "react-icons/bs";
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
  {
    id: 2,

    author: {
      name: "Rimeol Zens",
      role: "@rimeol",
      href: "#",
      imageUrl: "assets/NFT Digital Art/zens.png",
    },
  },
  // More posts...
];
const NFT_DigitalArt = () => {
  return (
    <div className="min-h-full mt-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none  md:grid-cols-2 items-center">
          <img src="assets/NFT Digital Art/image.png" alt="" />
          <div className="max-w-3xl">
            <h1 className="text-4xl font-black ">NFT Digital Art #12543</h1>
            <p className="text-[#919191] text-sm mt-10 text-justify max-w-sm mx-auto">
              NFT Digital Art #12543 is a unique and distinctive piece of
              digital artwork that has been tokenized as a non-fungible token
              (NFT). It represents a fusion of digital creativity and blockchain
              technology, making it one-of-a-kind and securely verifiable.
            </p>
            <p className="text-start pl-[6.5rem]">
              Highest Bid:{" "}
              <strong className="text-orange-500">15.38 ETH</strong>
            </p>
            <div className="mx-auto mt-5 grid max-w-sm grid-cols-1 gap-x-8  border-t border-gray-200   lg:grid-cols-2">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="flex max-w-xl flex-col items-center my-auto justify-between "
                >
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img
                      src={post.author.imageUrl}
                      alt=""
                      className="h-10 w-10 rounded-full bg-gray-50"
                    />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <a href={post.author.href}>
                          <span className="absolute inset-0" />
                          {post.author.name}
                        </a>
                      </p>
                      <p className="text-gray-600">{post.author.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mx-auto mt-5 grid max-w-sm  gap-x-8  border-t border-gray-200 items-center grid-cols-2 pt-5">
              <h2 className="text-2xl font-black text-start">13.38 ETH</h2>

              <button
                href="/"
                className="rounded-md justify-self-end w-24 bg-orange-500 px-3.5 py-2.5 text-sm text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFT_DigitalArt;
