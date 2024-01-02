import React from "react";
import Image from "next/image";
import { IoIosMenu } from "react-icons/io";
const Navbar = () => {
  return (
    <div className="container pt-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          {" "}
          {/* Wrap logo and navigation items in a flex container */}
          <Image src="/logo.png" width={50} height={50} alt="logo" />
          <ul className="md:flex hidden gap-8 items-center font-semibold text-[14px] ml-8">
            <li>Home</li>
            <li>About</li>
            <li>Food</li>
            <li>Dish</li>
            <li>Contact</li>
            <button className="bg-accent text-white px-6 py-2 rounded-3xl">
              Sign up
            </button>
          </ul>
        </div>
        <IoIosMenu  size ={30} className="md:hidden text-accent"/>
      </div>
    </div>
  );
};

export default Navbar;
