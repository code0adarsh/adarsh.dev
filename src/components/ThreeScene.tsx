
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

const AnimatedSphere = () => {
  return (
    <Sphere args={[1, 100, 200]} position={[0, 0, 0]}>
      <MeshDistortMaterial 
        color="#64FFDA" 
        attach="material" 
        distort={0.4} 
        speed={2} 
        roughness={0.5}
      />
    </Sphere>
  );
};

const ThreeScene = () => {
  return (
    <div className="absolute inset-0 opacity-70">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={1} />
        
        <AnimatedSphere />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          rotateSpeed={0.5}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
