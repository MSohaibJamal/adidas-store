import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black pt-24 pb-12 border-t border-white/5 px-8 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-12">
        {/* Brand Column */}
        <div className="flex flex-col gap-8">
          <img
            src="/icons/footLocker.svg"
            alt="Adidas"
            className="h-8 md:h-10 w-fit opacity-80 hover:opacity-100 transition-opacity"
          />
          <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
            Pushing the boundaries of sport and style since 1949. Every stripe
            tells a story of ambition and progress.
          </p>
          <div className="flex gap-6 mt-4">
            {["instagram", "twitter", "facebook"].map((social) => (
              <div
                key={social}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition-all duration-500"
              >
                <span className="text-[10px] uppercase font-bold tracking-tighter">
                  {social[0]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Links Columns */}
        {[
          {
            title: "SHOP",
            links: ["New Arrivals", "Best Sellers", "Sale", "Collections"],
          },
          {
            title: "SUPPORT",
            links: ["Order Status", "Shipping", "Returns", "Size Guide"],
          },
          {
            title: "COMPANY",
            links: ["About Us", "Sustainability", "Careers", "Press"],
          },
        ].map((col) => (
          <div key={col.title} className="flex flex-col gap-8">
            <h4 className="text-xs font-black tracking-[0.4em] text-white">
              {col.title}
            </h4>
            <ul className="flex flex-col gap-4">
              {col.links.map((link) => (
                <li
                  key={link}
                  className="text-zinc-500 hover:text-white text-sm cursor-pointer transition-colors w-fit"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-zinc-600 text-[10px] tracking-widest uppercase">
          © 2024 ADIDAS. ALL RIGHTS RESERVED.
        </p>

        <div className="flex gap-8 text-zinc-600 text-[10px] tracking-widest uppercase">
          <span className="cursor-pointer hover:text-white transition-colors">
            Privacy Policy
          </span>
          <span className="cursor-pointer hover:text-white transition-colors">
            Terms of Service
          </span>
        </div>
      </div>

      <div className="mt-20 flex justify-center opacity-[0.03] select-none pointer-events-none">
        <h1 className="text-[15vw] font-black tracking-tighter">ADIDAS</h1>
      </div>
    </footer>
  );
};

export default Footer;