import { useEffect, useRef, useState } from "react";

const CURSOR_SPEED = 0.12;

let mouseX = -100;
let mouseY = -100;
let outlineX = -100;
let outlineY = -100;

export const Cursor = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const animate = () => {
      outlineX += (mouseX - outlineX) * CURSOR_SPEED;
      outlineY += (mouseY - outlineY) * CURSOR_SPEED;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${outlineX}px`;
        cursorRef.current.style.top = `${outlineY}px`;
      }

      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top = `${mouseY}px`;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleHover = (e) => {
      const target = e.target;

      if (target.closest(".story-video")) {
        setHovering("video");
        return;
      }

      if (target.closest(".product-card")) {
        setHovering("card");
        return;
      }

      if (
        target.closest("button") ||
        target.closest("a") ||
        target.closest("li") ||
        target.closest("input") ||
        target.closest("textarea")
      ) {
        setHovering("button");
      } else {
        setHovering(false);
      }
    };

    const handleClick = (e) => {
      const ripple = document.createElement("div");

      ripple.style.position = "fixed";
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      ripple.style.width = "10px";
      ripple.style.height = "10px";
      ripple.style.border = "2px solid rgba(255,255,255,0.5)";
      ripple.style.borderRadius = "9999px";
      ripple.style.pointerEvents = "none";
      ripple.style.transform = "translate(-50%, -50%)";
      ripple.style.zIndex = "9999";
      ripple.style.transition = "all 0.8s cubic-bezier(.16,1,.3,1)";

      document.body.appendChild(ripple);

      requestAnimationFrame(() => {
        ripple.style.width = "90px";
        ripple.style.height = "90px";
        ripple.style.opacity = "0";
      });

      setTimeout(() => ripple.remove(), 800);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleHover);
    document.addEventListener("mouseout", handleHover);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleHover);
      document.removeEventListener("mouseout", handleHover);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`hidden md:flex fixed items-center justify-center pointer-events-none z-[9999]
        -translate-x-1/2 -translate-y-1/2 rounded-full
        transition-all duration-700 ease-out
        backdrop-blur-md mix-blend-difference
        ${
          hovering === "video"
            ? "w-44 h-44 border border-white/30 bg-white/5"
            : hovering === "card"
            ? "w-24 h-24 border border-white/20 bg-white/5 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
            : hovering === "button"
            ? "w-16 h-16 border border-red-500"
            : "w-10 h-10 border border-white/70"
        }`}
      >
        {hovering === "video" && (
          <span className="text-white text-xs tracking-[0.4em] uppercase">
            Discover
          </span>
        )}

        {hovering === "card" && (
          <span className="text-3xl text-white">↗</span>
        )}
      </div>

      <div
        ref={dotRef}
        className={`hidden md:block fixed pointer-events-none z-[9999]
        -translate-x-1/2 -translate-y-1/2 rounded-full
        transition-all duration-300
        ${
          hovering === "video" || hovering === "card"
            ? "opacity-0"
            : hovering === "button"
            ? "w-2 h-2 bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.8)]"
            : "w-2 h-2 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"
        }`}
      />
    </>
  );
};