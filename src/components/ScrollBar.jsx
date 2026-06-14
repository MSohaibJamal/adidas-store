import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ScrollBar() {
  const progressRef = useRef();

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = (scrollTop / docHeight) * 100;

      gsap.to(progressRef.current, {
        height: `${progress}%`,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    window.addEventListener("scroll", updateProgress);

    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 h-[250px] w-[3px] bg-white/10 z-[9999] rounded-full">
      <div
        ref={progressRef}
        className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-white via-red-500 to-red-700 rounded-full shadow-[0_0_15px_rgba(239,68,68,.8)]"
        style={{ height: "0%" }}
      />
    </div>
  );
}