import { Disclosure } from "@headlessui/react";
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { ABOUT, Icons, SUPPORT } from "./Manue";
import Item from "./Item";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import { BsEnvelopeAt } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="min-h-full">
      <div className="relative isolate overflow-hidden bg-gray-900 pt-3 sm:pt-5 lg:pt-7">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div>
              <h1 className="w-full text-3xl  text-white">
                <span className="font-black">Play</span>Storm
              </h1>
              <p className="py-4 text-[#d4d4d4]">
                The homepage of PlayStorm NFT Website welcomes visitors with a
                visually appealing design, featuring vibrant artworks and a
                dynamic display of trending NFT collections. Users can easily
                navigate through different sections.
              </p>
              <div className="flex flex-row gap-x-2 items-center md:w-[75%] my-6 ">
                <BsEnvelopeAt size={20} className="text-[#FA783E]" />
                <a className="text-white" href="mailto:playstorm@email.com">
                  playstorm@email.com
                </a>
              </div>
            </div>
            <dl className="grid grid-cols-2 gap-x-8 gap-y-10  lg:pt-2">
              <div className="flex flex-col items-start mx-auto">
                <dt className=" font-semibold text-2xl text-white mx-auto">
                  About
                </dt>
                <dd className="mt-2 leading-7 ">
                  <Item Links={ABOUT} title="About" />
                </dd>
              </div>
              <div className="flex flex-col items-start mx-auto">
                <dt className=" text-2xl font-semibold text-white mx-auto">
                  Support
                </dt>
                <dd className="mt-2 leading-7 mx-auto">
                  <Item Links={SUPPORT} title="Support" />
                </dd>
              </div>
            </dl>

            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-2xl">
                Get Subscribed !
              </h2>
              <p className="mt-4 text-md max-w-xs leading-8 text-gray-300">
                Subscribing to a newsletter is a great way to stay informed
                about the latest news & updates.
              </p>
              <div className="mt-6 flex flex-col max-w-xs gap-y-2">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-[#FA783E] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-900"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
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
        </div>
        <hr className=" my-5 divider max-w-7xl mx-auto border-gray-600" />
        <div className="pb-0 text-sm text-center dark:text-gray-400">
          Copyright © 2023 PlayStorm - All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
