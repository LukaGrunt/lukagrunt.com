import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  // Generate particle positions and colors
  const [positions, colors] = useMemo(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const count = isMobile ? 2000 : 5000; // Reduce particles on mobile
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const primaryOrange = new THREE.Color('#F97316');
    const accentRed = new THREE.Color('#B91C1C');
    const white = new THREE.Color('#FAFAFA');

    for (let i = 0; i < count; i++) {
      // Position in 3D space
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;

      // Color variation (mix orange, red, white)
      const colorChoice = Math.random();
      const color = colorChoice < 0.6 ? white : colorChoice < 0.85 ? primaryOrange : accentRed;

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    return [positions, colors];
  }, []);

  // Track mouse movement
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

  // Animation loop
  useFrame((state, delta) => {
    if (!ref.current) return;

    // Gentle rotation
    ref.current.rotation.x += delta * 0.05;
    ref.current.rotation.y += delta * 0.075;

    // Mouse interaction - subtle parallax
    ref.current.rotation.x += (mousePosition.current.y * 0.1 - ref.current.rotation.x) * 0.05;
    ref.current.rotation.y += (mousePosition.current.x * 0.1 - ref.current.rotation.y) * 0.05;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        vertexColors
        size={0.15}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function BackgroundShader() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Gradient Mesh Overlay */}
      <div className="absolute inset-0 gradient-mesh" />

      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 30], fov: 75 }}
        className="absolute inset-0"
        style={{ background: '#030305' }}
      >
        <ParticleField />
      </Canvas>

      {/* Noise Texture */}
      <div className="absolute inset-0 noise-texture pointer-events-none" />
    </div>
  );
}
