
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = clock.getElapsedTime() * 0.15;
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });
  
  return (
    <Sphere 
      ref={sphereRef}
      args={[1, 100, 200]} 
      position={[0, 0, 0]}
    >
      <MeshDistortMaterial 
        color="#64FFDA" 
        attach="material" 
        distort={0.4} 
        speed={2} 
        roughness={0.5}
        metalness={0.2}
      />
    </Sphere>
  );
};

const ParticleField = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 2000;
  
  const particlesPosition = React.useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 10;
      positions[i3 + 1] = (Math.random() - 0.5) * 10;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;
    }
    
    return positions;
  }, [particleCount]);
  
  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x = clock.getElapsedTime() * 0.05;
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.075;
    }
  });
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position" 
          count={particleCount} 
          array={particlesPosition} 
          itemSize={3} 
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.02} 
        color="#CCD6F6" 
        sizeAttenuation 
        transparent
        opacity={0.8}
      />
    </points>
  );
};

const ThreeScene = () => {
  return (
    <Canvas 
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={1} />
      
      <AnimatedSphere />
      <ParticleField />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        rotateSpeed={0.5}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
};

export default ThreeScene;
