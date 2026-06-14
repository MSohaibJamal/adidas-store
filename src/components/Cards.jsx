import React from "react";

const products = [
  {
    id: "01",
    title: "SPORT",
    subtitle: "Performance Collection",
    image: "/icons/Sport.png",
    badge: "Adidas",
    gradient:
      "bg-[radial-gradient(circle_at_top_left,_#8b0000_0%,_#3a0000_35%,_#0a0a0a_100%)]",
    glow: "bg-red-500/20",
  },
  {
    id: "02",
    title: "WHITE",
    subtitle: "Original Collection",
    image: "/icons/White.png",
    badge: "Adidas",
    gradient:
      "bg-[radial-gradient(circle_at_top_left,_#ffffff_0%,_#bdbdbd_35%,_#0a0a0a_100%)]",
    glow: "bg-white/20",
  },
  {
    id: "03",
    title: "GRAY",
    subtitle: "Street Collection",
    image: "/icons/Gray.png",
    badge: "Adidas",
    gradient:
      "bg-[radial-gradient(circle_at_top_left,_#8a8a8a_0%,_#3f3f3f_35%,_#0a0a0a_100%)]",
    glow: "bg-zinc-400/20",
  },
];

const Cards = () => {
  return (
    <section className="flex flex-wrap justify-center gap-8 md:gap-16 py-16 md:py-32 px-6">
      {products.map((product) => (
        <div
          key={product.id}
          style={{ transformStyle: "preserve-3d" }}
          className={`
            product-card
            group
            relative
            w-full
            max-w-[340px]
            md:w-80
            h-[480px]
            md:h-[540px]
            rounded-[40px]
            overflow-hidden
            border
            border-white/5
            ${product.gradient}
            shadow-[0_40px_100px_rgba(0,0,0,0.5)]
            transition-all
            duration-700
            hover:-translate-y-5
            hover:border-white/20
            hover:shadow-[0_50px_120px_rgba(0,0,0,0.8)]
          `}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50" />

          <div className="absolute inset-0 backdrop-blur-[1px]" />

          <div className="absolute top-8 left-8 z-0">
            <p className="text-[5rem] md:text-[7rem] font-black text-white/[0.03] leading-none select-none">
              {product.id}
            </p>
          </div>

          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 rounded-full blur-[100px] md:blur-[120px] ${product.glow} opacity-60`}
          />

          <div className="absolute top-8 right-8 z-20 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl">
            <p className="text-[9px] uppercase font-bold tracking-[0.3em] text-white/80">
              {product.badge}
            </p>
          </div>

          <div className="relative z-10 flex items-center justify-center h-full px-6 pt-10">
            <img
              src={product.image}
              alt={product.title}
              className="
                w-full
                object-contain
                transition-all
                duration-1000
                group-hover:scale-110
                group-hover:-translate-y-10
                drop-shadow-[0_40px_80px_rgba(0,0,0,0.9)]
              "
              style={{
                transform: "translateZ(100px)",
              }}
            />
          </div>

          <div className="absolute bottom-0 left-0 w-full h-56 bg-gradient-to-t from-black via-black/80 to-transparent" />

          <div className="absolute bottom-0 left-0 z-20 w-full p-10">
            <h3 className="text-3xl md:text-4xl font-black tracking-[-0.04em] text-white uppercase text-gradient">
              {product.title}
            </h3>

            <p className="mt-3 text-[10px] md:text-xs text-white/40 uppercase font-bold tracking-[0.4em]">
              {product.subtitle}
            </p>

            <div className="mt-8 flex items-center gap-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white">View Details</span>
                <div className="flex-1 h-px bg-white/20" />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Cards;