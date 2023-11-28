import React from "react";

const Statics = () => {
  const links = [
    { name: "Rare NFT's", href: "#" },
    { name: "Products", href: "#" },
    { name: "Artist", href: "#" },
    { name: "Collection", href: "#" },
  ];
  const stats = [
    { name: "Rare NFT's", value: "10K+" },
    { name: "Products", value: "50K+" },
    { name: "Collection", value: "80K+" },
    { name: "Artist", value: "8K+" },
  ];
  return (
    <div className="min-h-full mt-5">
      <div className="relative isolate overflow-hidden bg-gray-900 py-[5.85rem]">
        <img
          src="/assets/Statics/images.png"
          alt=""
          className="absolute inset-0 -z-10 h-96 w-full object-cover object-center md:object-center"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#efe8eb] to-[#776fff] opacity-20"
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
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#000000] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl ">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">
              We have the best NFT Digital artists
            </h2>
            <p className="mt-6 leading-8 md:text-md text-sm lg:text-lg text-[#CACACA]">
              Our artists possess a remarkable ability to merge cutting-edge
              technology with artistic expression, resulting in captivating and
              visually stunning NFT artworks.
            </p>
          </div>
          <div className="mx-auto items-center  max-w-xl lg:mx-0 lg:max-w-none">
            <dl className=" mt-3 max-w-4xl mx-auto grid grid-cols-2 gap-3   lg:grid-cols-4 items-center">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-orange-500">
                    {stat.name}
                  </dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statics;
