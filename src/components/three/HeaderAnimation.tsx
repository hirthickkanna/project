import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { random } from 'maath';

function ParticleField() {
  const points = useRef<THREE.Points>(null!);
  const { viewport } = useThree();

  useEffect(() => {
    if (points.current) {
      random.inSphere(points.current.geometry.attributes.position.array, {
        radius: 1.5,
        randomize: false
      });
    }
  }, []);

  useFrame((state, delta) => {
    if (points.current) {
      points.current.rotation.x -= delta / 10;
      points.current.rotation.y -= delta / 15;
    }
  });

  return (
    <Points ref={points} stride={3} positions={new Float32Array(5000 * 3)}>
      <PointMaterial
        transparent
        color="#fff"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

const HeaderAnimation: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 3] }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <ParticleField />
      </Canvas>
    </div>
  );
};

export default HeaderAnimation;