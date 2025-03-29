
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

// Simple animated sphere without problematic props
const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Use useFrame for smooth animation
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#64FFDA" />
    </mesh>
  );
};

const ThreeScene = () => {
  return (
    <div className="absolute inset-0 opacity-70">
      <Canvas 
        dpr={[1, 2]}
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
