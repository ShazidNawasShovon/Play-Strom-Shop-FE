import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
const Minting = () => {
  return (
    <div className="relative isolate overflow-hidden  py-16 bg-[#F8F8F8]">
      <img
        src="/assets/Minting/bg.png"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full  bg-repeat"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-[2.6rem] font-black inline-flex gap-3">
            Let’s Start Minting
          </h1>
          <p className="text-[#919191] text-[1rem] my-9">
            This process serves multiple purposes, such as securing the network,
            validating transactions, and creating new units of the
            cryptocurrency.
          </p>
          <button
            href="/"
            className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
          >
            Join Our Community{" "}
            <span className="inline-flex items-center">
              <ArrowUpRightIcon width={23} height={14} />
            </span>
          </button>
        </div>
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

export default Minting;
