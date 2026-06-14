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
    <section className="relative w-full min-h-screen bg-black px-8 py-32 overflow-hidden">
      <div
        className="story-video relative w-full max-w-7xl h-[95vh] mx-auto overflow-hidden rounded-[48px] border border-white/10 shadow-[0_0_100px_rgba(255,255,255,0.04)]"
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
          className="absolute inset-0 opacity-[0.05] mix-blend-screen z-20"
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
          <div className="max-w-3xl px-8 text-center">
            <p className="text-red-500 uppercase tracking-[1em] text-xs md:text-sm mb-10">
              ADIDAS ORIGINALS
            </p>

            <h2 className="text-white font-black tracking-[-0.08em] leading-[0.9] text-[4rem] md:text-[6rem] lg:text-[7rem] mb-8">
              THREE STRIPES
            </h2>

            <div className="w-40 h-px bg-white/20 mx-auto mb-12" />

            <p className="max-w-3xl mx-auto text-white/80 text-lg md:text-2xl leading-relaxed font-light">
              Born on the track.
              <br />
              Raised by culture.
              <br />
              <br />
              For over seven decades, Adidas has redefined what it means to move
              forward.
              <br />
              <br />
              From world records to city streets, every stripe represents
              ambition, creativity, and relentless progress.
              <br />
              <br />
              <span className="text-white font-medium">
                Not just worn. Remembered.
              </span>
            </p>
          </div>
        </div>

        <div className="absolute top-10 left-10 z-40">
          <p className="text-white/40 text-xs tracking-[0.6em] uppercase">
            Adidas Campaign
          </p>
        </div>

        <div className="absolute bottom-10 left-10 z-40">
          <p className="text-white/40 text-xs tracking-[0.4em] uppercase">
            Since 1949
          </p>
        </div>

        {!soundEnabled && (
          <button
            onClick={enableSound}
            className="absolute bottom-10 right-10 z-50 px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl text-white uppercase tracking-[0.35em] text-xs transition-all duration-500 hover:bg-white/10 hover:scale-105"
          >
            Enable Experience
          </button>
        )}
      </div>
    </section>
  );
};

export default AdSection;