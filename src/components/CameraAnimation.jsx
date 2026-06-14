import { useEffect } from "react";
import gsap from "gsap";

export default function CameraAnimation({ cameraRef }) {
  useEffect(() => {
    if (!cameraRef.current) return;

    gsap.fromTo(
      cameraRef.current.position,
      {
        x: 0,
        y: 0.9,
        z: 0.35,
      },
      {
        x: 0,
        y: 0.7,
        z: 1.5,
        duration: 3.2,
        ease: "power4.out",
      }
    );
  }, []);

  return null;
}