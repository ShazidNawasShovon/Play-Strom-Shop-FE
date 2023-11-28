import React from "react";
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import { IoWalletOutline } from "react-icons/io5";
const CandSNFT = () => {
  return (
    <div className="relative isolate overflow-hidden  py-16 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-[2.6rem] mb-16 text-center font-bold tracking-tight text-black">
          Create and sell your NFTs
        </h2>
        <div className="mx-auto grid max-w-2xl grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
          <div className="flex flex-col items-start border rounded-xl  border-gray-200 p-4 ">
            <div className="rounded-md ">
              <img
                src="/assets/CandSNFT/icon (2).png"
                alt=""
                aria-hidden="true"
              />
              {/* <IoWalletOutline className="h-9 w-[2.63rem]" aria-hidden="true" /> */}
            </div>
            <dt className="mt-4 font-black text-2xl ">Set Up Your Wallet</dt>
            <dd className="mt-2 leading-7  text-start text-[#919191]">
              Setting up your wallet is the first step towards unlocking a
              universe of unique and valuable digital assets.
            </dd>
          </div>
          <div className="flex flex-col items-start border rounded-xl  border-gray-200 p-4">
            <div className="rounded-md ">
              <img src="/assets/CandSNFT/ic.png" alt="" aria-hidden="true" />
              {/* <HandRaisedIcon className="h-9 w-[2.63rem]" aria-hidden="true" /> */}
            </div>
            <dt className="mt-4 font-black text-2xl ">
              Create Your Collection
            </dt>
            <dd className="mt-2 leading-7 text-start text-[#919191]">
              Take center stage as an artist, curator, and visionary, share your
              unique creations with the world.
            </dd>
          </div>
          <div className="flex flex-col items-start border rounded-xl  border-gray-200 p-4">
            <div className="rounded-md ">
              <img src="/assets/CandSNFT/icon.png" alt="" aria-hidden="true" />
              {/* <HandRaisedIcon className="h-9 w-[2.63rem]" aria-hidden="true" /> */}
            </div>
            <dt className="mt-4 font-black text-2xl">Add Your NFTs</dt>
            <dd className="mt-2 leading-7 text-start text-[#919191]">
              Add your NFT to our curated collection and share your unique
              creations with a global audience.
            </dd>
          </div>
          <div className="flex flex-col items-start border rounded-xl  border-gray-200 p-4">
            <div className="rounded-md ">
              <img
                src="/assets/CandSNFT/icon (1).png"
                alt=""
                aria-hidden="true"
              />
              {/* <HandRaisedIcon className="h-9 w-[2.63rem]" aria-hidden="true" /> */}
            </div>
            <dt className="mt-4 font-black text-2xl ">List Theme For Sale</dt>
            <dd className="mt-2 leading-7 text-start text-[#919191]">
              Selling your Non-Fungible Tokens (NFTs) is your gateway to
              monetizing your digital art.
            </dd>
          </div>
        </div>
      </div>
      {/* <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div> */}
    </div>
  );
};

export default CandSNFT;
