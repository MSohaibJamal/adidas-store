import React from "react";

const Nave = () => {
  return (
    <>
      <nav className="w-full flex justify-between items-center text-white h-3 mt-5 p-5">
        <img
          src="icons/footLocker.svg"
          alt="logo"
          className="h-12.25 cursor-pointer"
        />
        <ul className="flex h-6 gap-20">
          <li className="relative cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full">
            HOME
          </li>
          <li className="relative cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full">
            PRODUCTS
          </li>
          <li className="relative cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full">
            ABOUT
          </li>
          <li className="relative cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full">
            CONTACT
          </li>
          <li className="relative cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full">
            CART
          </li>
        </ul>
        <div className="flex gap-5">
          <img
            src="icons/search.svg"
            alt="search"
            className="h-6 cursor-pointer"
          />
          <img src="icons/cart.svg" alt="cart" className="h-6 cursor-pointer" />
        </div>
      </nav>
    </>
  );
};

export default Nave;
