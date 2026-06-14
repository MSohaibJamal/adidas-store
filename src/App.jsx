import React, { useRef } from "react";
import Nave from "./components/Nave";
import ScrollBar from "./components/ScrollBar";
import { Cursor } from "./components/Cursor";
import { RedStudio } from "./components/RedStudio";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import CameraAnimation from "./components/CameraAnimation";
import AdSection from "./components/AdSection";
import Collections from "./components/Collections";
import Footer from "./components/Footer";

const App = () => {
  const cameraRef = useRef();

  return (
    <main className="w-full h-screen">
      <Cursor />
      <ScrollBar />
      <Nave />
     
      <Canvas dpr={[1, 1.5]}>
        <PerspectiveCamera
          ref={cameraRef}
          makeDefault
          position={[0, 0.7, 0.4]}
        />

        <CameraAnimation cameraRef={cameraRef} />

        <ambientLight intensity={1} />

        <RedStudio />
      </Canvas>
      <AdSection />
      <Collections />
      <Footer/>
    </main>
  );
};

export default App;