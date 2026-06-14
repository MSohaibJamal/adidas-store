import React, { useState, useEffect, useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";

export function RedStudio(props) {
  const { nodes, materials } = useGLTF("models/Studio.glb");

  const redBake = useTexture("/texture/Red_Studio_Baked_Texture.webp");
  const grayBake = useTexture("/texture/Gray_Studio_Baked_Texture.webp");
  const whiteBake = useTexture("/texture/White_Studio_Baked_Texture.webp");
  const defaultBake = useTexture("/texture/Default_Studio_Baked_Texture.webp");

  const whiteRef = useRef();
  const redRef = useRef();
  const grayRef = useRef();

  const [theme, setTheme] = useState("default");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    [redBake, grayBake, whiteBake, defaultBake].forEach((tex) => {
      tex.flipY = false;
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.needsUpdate = true;
    });
  }, [redBake, grayBake, whiteBake, defaultBake]);

  useEffect(() => {
    const envMaterial = materials["Material.010"];

    switch (theme) {
      case "red":
        envMaterial.map = redBake;
        break;
      case "gray":
        envMaterial.map = grayBake;
        break;
      case "white":
        envMaterial.map = whiteBake;
        break;
      default:
        envMaterial.map = defaultBake;
        break;
    }

    envMaterial.needsUpdate = true;
  }, [theme, materials, redBake, grayBake, whiteBake, defaultBake]);

  const hoverIn = (ref, theme) => {
    if (isMobile) return; // Disable hover effects on mobile for better UX
    setTheme(theme);
    document.body.style.cursor = "pointer";

    gsap.killTweensOf(ref.current.position);
    gsap.killTweensOf(ref.current.rotation);

    gsap.to(ref.current.position, {
      z: 0.1,
      duration: 1,
      ease: "power4.out",
    });

    gsap.to(ref.current.rotation, {
      y: 0,
      duration: 1,
      ease: "power4.out",
    });
  };

  const hoverOut = (ref, originalZ, originalRotation) => {
    if (isMobile) return;
    document.body.style.cursor = "default";

    gsap.killTweensOf(ref.current.position);
    gsap.killTweensOf(ref.current.rotation);

    gsap.to(ref.current.position, {
      z: originalZ,
      duration: 1.2,
      ease: "power4.out",
    });

    gsap.to(ref.current.rotation, {
      y: originalRotation,
      duration: 1.2,
      ease: "power4.out",
    });

    setTheme("default");
  };

  // Responsive positions
  const shirtScale = isMobile ? 0.8 : 1;
  const horizontalGap = isMobile ? 0.45 : 0.65;
  const verticalPos = isMobile ? 0.6 : 0.7;
  const depthPos = isMobile ? -0.2 : -0.45;

  return (
    <group {...props} dispose={null} scale={shirtScale}>
      <mesh
        geometry={nodes.Environment.geometry}
        material={materials["Material.010"]}
        scale={1 / shirtScale} // Keep environment at full scale
      />

      <mesh
        ref={whiteRef}
        geometry={nodes.Shirt_White.geometry}
        material={materials["Material.011"]}
        position={[horizontalGap, verticalPos, depthPos]}
        rotation={[0, Math.PI / 10, 0]}
        onPointerEnter={() => hoverIn(whiteRef, "white")}
        onPointerLeave={() =>
          hoverOut(whiteRef, depthPos, Math.PI / 10)
        }
      />

      <mesh
        ref={redRef}
        geometry={nodes.Shirt_Sport.geometry}
        material={materials["Material.012"]}
        position={[0, verticalPos, 0]}
        rotation={[0, 0, 0]}
        onPointerEnter={() => {
          if (isMobile) return;
          setTheme("red");
          document.body.style.cursor = "pointer";

          gsap.killTweensOf(redRef.current.position);

          gsap.to(redRef.current.position, {
            z: 0.2,
            duration: 1,
            ease: "power4.out",
          });
        }}
        onPointerLeave={() => {
          if (isMobile) return;
          document.body.style.cursor = "default";

          gsap.killTweensOf(redRef.current.position);

          gsap.to(redRef.current.position, {
            z: 0,
            duration: 1.2,
            ease: "power4.out",
          });

          setTheme("default");
        }}
      />

      <mesh
        ref={grayRef}
        geometry={nodes.Shirt_Gray.geometry}
        material={materials["Material.013"]}
        position={[-horizontalGap, verticalPos, depthPos]}
        rotation={[0, -Math.PI / 10, 0]}
        onPointerEnter={() => hoverIn(grayRef, "gray")}
        onPointerLeave={() =>
          hoverOut(grayRef, depthPos, -Math.PI / 10)
        }
      />
    </group>
  );
}


useGLTF.preload("models/Studio.glb");