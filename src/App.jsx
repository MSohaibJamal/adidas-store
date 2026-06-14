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
    <main className="w-full min-h-screen bg-black">
      <Cursor />
      <ScrollBar />
      <Nave />
     
      <div className="w-full h-screen relative">
        <Canvas 
          dpr={[1, 2]} 
          gl={{ antialias: true, alpha: true }}
          camera={{ position: [0, 0.7, 0.4], fov: window.innerWidth < 768 ? 65 : 45 }}
        >
          <PerspectiveCamera
            ref={cameraRef}
            makeDefault
            position={[0, 0.7, 0.4]}
            fov={window.innerWidth < 768 ? 65 : 45}
          />

          <CameraAnimation cameraRef={cameraRef} />

          <ambientLight intensity={1.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />

          <RedStudio />
        </Canvas>
        
        {/* Subtle overlay for luxury feel */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      <AdSection />
      <Collections />
      <Footer/>
    </main>
  );
};


export default App;