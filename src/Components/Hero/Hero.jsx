import React from "react";

const Hero = () => {
  return (
    <section className="bg-white px-10 md:px-20 py-10 dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">
            Your Vertically Integrated Energy Solutions Provider
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8  lg:text-lg dark:text-gray-400">
            Energy Co: Your reliable source for electricity and gas solutions.
            With a commitment to sustainability, we harness the power of
            renewable resources to provide clean energy options. Our tailored
            services cater to residential, commercial, and industrial needs.
            Join us in powering a brighter, greener future.
          </p>
          <a
            href="tel:+15596321273"
            className="inline-flex items-center gap-2 justify-center px-5 py-3 mr-3
            text-base font-medium text-center text-white rounded-lg bg-blue-500
            hover:bg-primary-800 focus:ring-4 focus:ring-primary-300
            dark:focus:ring-primary-900"
          >
            <span className="material-symbols-outlined">call</span>
            <span>Contact us</span>
          </a>
        </div>
        <div className="hidden md:flex justify-center items-center lg:mt-0 lg:col-span-5 lg:flex">
          <img className="h-96" src="/bulb.webp" alt="mockup" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
