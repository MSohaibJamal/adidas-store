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
    <section className="flex flex-wrap justify-center gap-10 py-20">
      {products.map((product) => (
        <div
          key={product.id}
          style={{ transformStyle: "preserve-3d" }}
          className={`
            product-card
            group
            relative
            w-80
            h-[540px]
            rounded-[36px]
            overflow-hidden
            border
            border-white/10
            ${product.gradient}
            shadow-[0_30px_100px_rgba(0,0,0,0.6)]
            transition-all
            duration-700
            hover:-translate-y-5
            hover:border-white/20
            hover:shadow-[0_40px_120px_rgba(0,0,0,0.8)]
          `}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />

          <div className="absolute inset-0 backdrop-blur-[1px]" />

          <div className="absolute top-6 left-6 z-0">
            <p className="text-[6rem] font-black text-white/10 leading-none">
              {product.id}
            </p>
          </div>

          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-[120px] ${product.glow}`}
          />

          <div className="absolute top-6 right-6 z-20 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/60">
              {product.badge}
            </p>
          </div>

          <div className="relative z-10 flex items-center justify-center h-full px-2">
            <img
              src={product.image}
              alt={product.title}
              className="
                w-[125%]
                object-contain
                transition-all
                duration-1000
                group-hover:scale-110
                group-hover:-translate-y-8
                drop-shadow-[0_50px_100px_rgba(0,0,0,0.8)]
              "
              style={{
                transform: "translateZ(80px)",
              }}
            />
          </div>

          <div className="absolute bottom-0 left-0 w-full h-44 bg-gradient-to-t from-black via-black/60 to-transparent" />

          <div className="absolute bottom-0 left-0 z-20 w-full p-8">
            <h3 className="text-4xl font-black tracking-[-0.06em] text-white">
              {product.title}
            </h3>

            <p className="mt-2 text-sm text-white/50 uppercase tracking-[0.25em]">
              {product.subtitle}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Cards;