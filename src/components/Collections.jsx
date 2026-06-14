import React from "react";
import Cards from "./Cards";

const Collections = () => {
  return (
    <>
    <section className="w-full px-6 md:px-20 py-16 md:py-32 text-white overflow-hidden">
      <div className="flex justify-between items-center mb-12 md:mb-20">
        <div className="flex items-center gap-4 md:gap-8">
          <p className="text-[10px] md:text-xs tracking-[0.4em] md:tracking-[0.8em] uppercase text-zinc-500 font-bold">
            New Drop
          </p>
          <div className="w-12 md:w-24 h-px bg-zinc-800" />
        </div>

        <img
          src="/icons/adidas.svg"
          alt="adidas"
          className="h-10 md:h-20 opacity-40 hover:opacity-100 transition-opacity duration-700"
        />
      </div>

      <div className="max-w-6xl">
        <h1
          className="
            text-[4rem]
            sm:text-[6rem]
            md:text-[8rem]
            lg:text-[11rem]
            font-black
            leading-[0.8]
            tracking-[-0.06em]
            mb-10
            text-gradient
          "
        >
          COLLECTION
        </h1>

        <div className="flex items-center gap-4 md:gap-8 mb-12">
          <div className="w-16 md:w-32 h-px bg-zinc-700" />
          <p
            className="
              text-zinc-400
              uppercase
              tracking-[0.2em] md:tracking-[0.5em]
              text-[10px] md:text-sm
              font-medium
            "
          >
            Premium Performance. Iconic Style.
          </p>
        </div>

        <p
          className="
            text-zinc-500
            text-base md:text-2xl
            max-w-3xl
            leading-relaxed
            font-light
          "
        >
          Crafted for movement. Refined for everyday wear.
          <br className="hidden md:block" />
          A collection inspired by heritage, performance,
          and modern street culture.
        </p>
      </div>

      <div className="mt-16 md:mt-32 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
    </section>
    <section className="pb-32">
      <Cards />
    </section>
    </>
  );
};


export default Collections;