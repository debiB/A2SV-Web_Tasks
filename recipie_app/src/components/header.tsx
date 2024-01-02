import React from 'react'
import Image from 'next/image'
import Navbar from './Navbar';
const NavHeader = () => {
  return (
    <div className="relative min-h screen">
      <Image
        className="lg:w-[580px] xl:w-[620px] h-auto absolute right-0 top-0 -z-10"
        src="/hero2.png"
        width={1000}
        height={600}
        alt="hero"
      />
      <Navbar />
      <div className="mt-20"></div>
      <div className="container h-[calc(100vh - 120px)] grid items-center mt-10">
        <div className="space-y-4 bg:[#ffffff98] w-fit p-4">
          <p className="uppercase font-medium"> Wide option of choices </p>
          <h2 className="text-4xl sm:text-6xl font-bold">
            Delicious<span className="text-accent">Food</span>
          </h2>
          <p className="text-gray-700 text-[14px] sm:text-[16px]">
            Delicious food color, aroma, and taste. <br />
            What are you waiting for?
          </p>
          <button className="bg-accent text-white px-6 py-2 rounded-3xl text-[14px] sm:text-[16px]">
            View more
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavHeader;