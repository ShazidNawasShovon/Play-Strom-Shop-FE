import React from "react";

const PageNotFound = () => {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <div className=" w-full ">
            <img
              className=" hidden lg:block "
              src=" https://i.ibb.co/v30JLYr/Group-192-2.png "
              alt=" "
            />
            <img
              className=" hidden md:block lg:hidden "
              src=" https://i.ibb.co/c1ggfn2/Group-193.png "
              alt=" "
            />
            <img
              className=" md:hidden "
              src=" https://i.ibb.co/8gTVH2Y/Group-198.png "
              alt=" "
            />
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </a>
            <a href="/contact" className="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default PageNotFound;
