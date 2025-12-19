import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function SwarmParticles() {
  const ref = useRef<THREE.Points>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const targetPositions = useRef<Float32Array>();

  // Generate organic particle positions in a spherical cluster
  const [positions, originalPositions] = useMemo(() => {
    const count = 1500;
    const positions = new Float32Array(count * 3);
    const originalPositions = new Float32Array(count * 3);

    // Create particles in a spherical volume with organic clustering
    for (let i = 0; i < count; i++) {
      // Use spherical coordinates for more organic distribution
      const radius = Math.random() * 2 + 0.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Store original positions
      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;
    }

    return [positions, originalPositions];
  }, []);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animate particles with organic flow
  useFrame((state) => {
    if (!ref.current) return;

    const time = state.clock.getElapsedTime();
    const positions = ref.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < positions.length / 3; i++) {
      const i3 = i * 3;

      // Get original position
      const origX = originalPositions[i3];
      const origY = originalPositions[i3 + 1];
      const origZ = originalPositions[i3 + 2];

      // Organic flowing motion using multiple sine waves
      const flowX = Math.sin(time * 0.3 + origY * 0.5) * 0.3;
      const flowY = Math.sin(time * 0.2 + origX * 0.5) * 0.3;
      const flowZ = Math.cos(time * 0.25 + origZ * 0.5) * 0.2;

      // Breathing/pulsing effect (like Face ID scanning)
      const pulse = Math.sin(time * 0.5) * 0.2 + 1;

      // Mouse interaction - particles flow away from cursor
      const distanceToMouse = Math.sqrt(
        Math.pow(origX - mousePosition.current.x * 3, 2) +
        Math.pow(origY - mousePosition.current.y * 3, 2)
      );
      const mouseInfluence = Math.max(0, 1 - distanceToMouse / 3) * 0.5;
      const pushX = (origX - mousePosition.current.x * 3) * mouseInfluence;
      const pushY = (origY - mousePosition.current.y * 3) * mouseInfluence;

      // Apply all movements
      positions[i3] = (origX + flowX + pushX) * pulse;
      positions[i3 + 1] = (origY + flowY + pushY) * pulse;
      positions[i3 + 2] = (origZ + flowZ) * pulse;
    }

    ref.current.geometry.attributes.position.needsUpdate = true;

    // Gentle rotation of the entire swarm
    ref.current.rotation.y = time * 0.1;
    ref.current.rotation.x = Math.sin(time * 0.15) * 0.2;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#F97316" // Primary orange
        size={0.08}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function ParticleSwarm() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <SwarmParticles />
      </Canvas>
    </div>
  );
}
