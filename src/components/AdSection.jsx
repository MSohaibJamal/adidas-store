import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";

const AdSection = () => {
  const videoRef = useRef(null);

  const [soundEnabled, setSoundEnabled] = useState(false);
  const [videoHover, setVideoHover] = useState(false);

  const [mousePos, setMousePos] = useState({
    x: -500,
    y: -500,
  });

  const [renderPos, setRenderPos] = useState({
    x: -500,
    y: -500,
  });

  const smoothPos = useRef({
    x: -500,
    y: -500,
  });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleLeave = () => {
    setMousePos({
      x: -500,
      y: -500,
    });
  };

  const enableSound = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = false;
    videoRef.current.volume = 1;
    videoRef.current.play();

    setSoundEnabled(true);
  };

  useEffect(() => {
    gsap.to(smoothPos.current, {
      x: mousePos.x,
      y: mousePos.y,
      duration: 1.5,
      ease: "power4.out",
      onUpdate: () => {
        setRenderPos({
          x: smoothPos.current.x,
          y: smoothPos.current.y,
        });
      },
    });
  }, [mousePos]);

  return (
    <section className="relative w-full min-h-screen bg-black px-4 md:px-8 py-16 md:py-32 overflow-hidden">
      <div
        className="story-video relative w-full max-w-7xl h-[80vh] md:h-[95vh] mx-auto overflow-hidden rounded-[32px] md:rounded-[48px] border border-white/10 shadow-[0_0_100px_rgba(255,255,255,0.04)]"
        onMouseMove={handleMove}
        onMouseEnter={() => setVideoHover(true)}
        onMouseLeave={() => {
          handleLeave();
          setVideoHover(false);
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-110 brightness-[0.55] contrast-125 saturate-125"
        >
          <source src="/videos/Ad.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10 z-10" />

        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-screen z-20 hidden md:block"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "4px 4px",
          }}
        />

        <div
          className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
          style={{
            WebkitMaskImage: `radial-gradient(
              circle ${videoHover ? 180 : 0}px at ${renderPos.x}px ${renderPos.y}px,
              white 0px,
              white 90px,
              rgba(255,255,255,0.9) 140px,
              transparent 180px
            )`,
            maskImage: `radial-gradient(
              circle ${videoHover ? 180 : 0}px at ${renderPos.x}px ${renderPos.y}px,
              white 0px,
              white 90px,
              rgba(255,255,255,0.9) 140px,
              transparent 180px
            )`,
          }}
        >
          <div className="max-w-4xl px-6 md:px-12 text-center">
            <p className="text-red-500 uppercase tracking-[0.5em] md:tracking-[1em] text-[10px] md:text-sm mb-6 md:mb-10 opacity-0 md:opacity-100 animate-pulse">
              ADIDAS ORIGINALS
            </p>

            <h2 className="text-white font-black tracking-[-0.08em] leading-[0.85] text-[3.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[7.5rem] mb-6 md:mb-10 text-gradient uppercase">
              THREE STRIPES
            </h2>

            <div className="w-20 md:w-40 h-px bg-white/20 mx-auto mb-8 md:mb-12" />

            <div className="relative">
              <p className="max-w-2xl mx-auto text-white/80 text-sm sm:text-base md:text-xl lg:text-2xl leading-relaxed font-light">
                Born on the track. <span className="hidden sm:inline">Raised by culture.</span>
                <br className="md:hidden" />
                <br />
                For over seven decades, Adidas has redefined what it means to move
                forward.
                <br />
                <br className="hidden md:block" />
                From world records to city streets, every stripe represents
                ambition, creativity, and relentless progress.
              </p>
              
              <div className="mt-8 md:mt-12">
                <span className="text-white font-medium text-lg md:text-xl border-b border-red-500 pb-1">
                  Not just worn. Remembered.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative corner labels - hide on small mobile */}
        <div className="absolute top-6 left-6 md:top-10 md:left-10 z-40 hidden sm:block">
          <p className="text-white/40 text-[8px] md:text-xs tracking-[0.6em] uppercase">
            Adidas Campaign
          </p>
        </div>

        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-40 hidden sm:block">
          <p className="text-white/40 text-[8px] md:text-xs tracking-[0.4em] uppercase">
            Since 1949
          </p>
        </div>

        {!soundEnabled && (
          <button
            onClick={enableSound}
            className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-50 px-6 py-3 md:px-8 md:py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl text-white uppercase tracking-[0.2em] md:tracking-[0.35em] text-[10px] md:text-xs transition-all duration-500 hover:bg-white/10 hover:scale-105"
          >
            Enable Experience
          </button>
        )}
      </div>
    </section>
  );
};

export default AdSection;