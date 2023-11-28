import React from "react";
import { BsThreeDots } from "react-icons/bs";
const user = [
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
const Card = ({ props }) => {
  const { name, price, imageUrl, type } = props.card;
  console.log(props);
  //   return (
  //     <div className="w-full rounded-lg shadow-lg lg:max-w-sm">
  //       <div className="mx-auto grid max-w-sm grid-cols-2 gap-x-4  px-3">
  //         {user.map((post) => (
  //           <>
  //             <div
  //               key={post.id}
  //               className="flex my-2  max-w-xl flex-col items-center justify-between "
  //             >
  //               <div className="relative flex items-center gap-x-2">
  //                 <img
  //                   src={post.author.imageUrl}
  //                   alt=""
  //                   className="h-6 w-6 rounded-full bg-gray-50"
  //                 />
  //                 <div className="text-sm leading-6">
  //                   <p className="text-gray-600">{post.author.role}</p>
  //                 </div>
  //               </div>
  //             </div>
  //             <div className=" self-center justify-self-end">
  //               <BsThreeDots className="text-[1.5rem]" />
  //             </div>
  //           </>
  //         ))}
  //       </div>
  //       <img
  //         className="p-3 rounded-md mx-auto"
  //         src={imageUrl}
  //         alt="..."
  //         srcSet=""
  //       />
  //       <div className="mx-auto grid grid-cols-2 gap-x-4">
  //         <div className="p-4 text-start">
  //           <h4 className="text-[1.3rem] text-black font-black">{name}</h4>
  //           <p className="mb-2 text-[1rem] leading-normal text-[#919191]">
  //             {type}
  //           </p>
  //           <p className="mb-2 text-[1rem] leading-normal text-[#919191]">
  //             {price} ETH
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };
  return (
    <div className="w-full rounded-lg shadow-lg lg:max-w-sm">
      <div className="mx-auto grid max-w-sm grid-cols-2 gap-x-4  px-3">
        {user.map((post) => (
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
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </div>
            <div className=" self-center justify-self-end">
              <BsThreeDots className="text-[1.5rem]" />
            </div>
          </>
        ))}
      </div>
      <img
        className="p-3 rounded-md mx-auto"
        src={props.card.imageUrl}
        alt="..."
        srcSet=""
      />
      <div className="mx-auto grid grid-cols-2 gap-x-4">
        <div className="p-4 text-start">
          <h4 className="text-[1.3rem] text-black font-black">
            {props.card.name}
          </h4>
          <p className="mb-2 text-[1rem] leading-normal text-[#919191]">
            {props.card.type}
          </p>
          <p className=" text-[1rem] leading-normal text-orange-500">
            {props.card.price} ETH
          </p>
        </div>
        <div className="p-4 text-end self-end">
          <button className="px-4 py-2 text-sm text-white bg-orange-500 rounded-[0.6rem] shadow">
            Place a Bid
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
