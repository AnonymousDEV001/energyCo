import React from "react";

const Featured = () => {
  return (
    <div className="flex justify-center md:flex-nowrap flex-wrap-reverse gap-6 items-center px-10 md:px-20 py-10">
      <div className="w-full md:w-[60%]">
        <img src="/detail.png" className="h-full w-full rounded-b-3xl" alt="" />
      </div>
      <div className="flex flex-col text-center gap-4 w-full md:w-[40%]">
        <h1 className="text-blue-900 text-4xl font-semibold">
          Our Energy Impact by the Numbers
        </h1>
        <p>
          Pairing a comprehensive portfolio with unrivaled capabilities, we’ll
          build a tailored energy strategy that works for you—today and into the
          future. Our vertical integration across the energy supply chain
          delivers exclusive access to refined products, alternative fuels, and
          environmental credits.
        </p>
        <div></div>
      </div>
    </div>
  );
};

export default Featured;
