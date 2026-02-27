import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, MeshTransmissionMaterial, Float, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function MovingSphere({ position, color, speed, offset }: { position: [number, number, number], color: string, speed: number, offset: number }) {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime() * speed + offset;
      ref.current.position.x = position[0] + Math.sin(t) * 3;
      ref.current.position.y = position[1] + Math.cos(t * 0.8) * 3;
    }
  });

  return (
    <Sphere ref={ref} args={[3, 32, 32]} position={position}>
      <meshBasicMaterial color={color} />
    </Sphere>
  );
}

function Prism() {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.2;
      mesh.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float floatIntensity={2} rotationIntensity={1} speed={2}>
      <mesh ref={mesh} scale={2.5}>
        <octahedronGeometry args={[1, 0]} />
        <MeshTransmissionMaterial 
          backside 
          backsideThickness={2} 
          thickness={2.5} 
          chromaticAberration={1.5} 
          anisotropicBlur={0.2} 
          clearcoat={1} 
          clearcoatRoughness={0.1} 
          envMapIntensity={1.5} 
          resolution={512}
          transmission={1}
          ior={1.5}
        />
      </mesh>
    </Float>
  );
}

export default function PrismBackground() {
  return (
    <div className="absolute inset-0 z-0 bg-[#050505] overflow-hidden">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        
        {/* Colorful glowing orbs in the background to be refracted */}
        <MovingSphere position={[-4, 2, -10]} color="#FF6B00" speed={0.5} offset={0} />
        <MovingSphere position={[4, -2, -12]} color="#2563EB" speed={0.4} offset={Math.PI} />
        <MovingSphere position={[0, 4, -15]} color="#FF9500" speed={0.3} offset={Math.PI / 2} />

        <Prism />
        
        <Environment preset="city" />
      </Canvas>
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] pointer-events-none"></div>
    </div>
  );
}
