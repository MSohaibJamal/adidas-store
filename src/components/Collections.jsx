import React from "react";
import Cards from "./Cards";

const Collections = () => {
  return (
    <>
    <section className="w-full px-12 md:px-20 py-24 text-white">
      <div className="flex justify-between items-start mb-16">
        <div className="flex items-center gap-6">
          <p className="text-xs tracking-[0.6em] uppercase text-zinc-500">
            New Drop
          </p>

          <div className="w-24 h-px bg-zinc-700" />
        </div>

        <img
          src="/icons/adidas.svg"
          alt="adidas"
          className="h-16 opacity-90"
        />
      </div>

      <div className="max-w-5xl">
        <h1
          className="
            text-7xl
            md:text-8xl
            lg:text-[10rem]
            font-black
            leading-none
            tracking-[-0.08em]
            mb-8
          "
        >
          COLLECTION
        </h1>

        <div className="flex items-center gap-6 mb-10">
          <div className="w-32 h-px bg-zinc-700" />

          <p
            className="
              text-zinc-400
              uppercase
              tracking-[0.35em]
              text-sm
            "
          >
            Premium Performance. Iconic Style.
          </p>
        </div>

        <p
          className="
            text-zinc-500
            text-lg
            md:text-xl
            max-w-2xl
            leading-relaxed
          "
        >
          Crafted for movement. Refined for everyday wear.
          <br />
          A collection inspired by heritage, performance,
          and modern street culture.
        </p>
      </div>

      <div className="mt-20 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
    </section>
    <section>
      <Cards/>
    </section>
    </>
  );
};

export default Collections;