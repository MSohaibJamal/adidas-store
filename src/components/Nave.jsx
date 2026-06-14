import React, { useState } from "react";

const Nave = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ["HOME", "PRODUCTS", "ABOUT", "CONTACT", "CART"];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center text-white h-20 px-6 md:px-12 z-[100] transition-all duration-300">
        <div className="flex items-center">
          <img
            src="icons/footLocker.svg"
            alt="logo"
            className="h-8 md:h-10 cursor-pointer object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <li
              key={link}
              className="text-xs font-bold tracking-[0.2em] relative cursor-pointer opacity-70 hover:opacity-100 transition-opacity after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-8">
          <img
            src="icons/search.svg"
            alt="search"
            className="h-5 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
          />
          <img
            src="icons/cart.svg"
            alt="cart"
            className="h-5 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden z-[110] relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 glass z-[105] flex flex-col items-center justify-center transition-all duration-500 lg:hidden ${
            isMenuOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
          }`}
        >
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((link, i) => (
              <li
                key={link}
                className={`text-2xl font-black tracking-widest cursor-pointer hover:text-red-500 transition-all duration-300 transform ${
                  isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </li>
            ))}
          </ul>

          <div
            className={`mt-16 flex gap-10 transition-all duration-700 delay-500 ${
              isMenuOpen ? "scale-100 opacity-100" : "scale-50 opacity-0"
            }`}
          >
            <img src="icons/search.svg" alt="search" className="h-8" />
            <img src="icons/cart.svg" alt="cart" className="h-8" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nave;
