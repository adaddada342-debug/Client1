"use client";

import {
  Float,
  MeshDistortMaterial,
  OrbitControls,
  PerspectiveCamera,
  Sparkles,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import type { Group, Mesh } from "three";

type CruzFigureProps = {
  pulseSignal?: number;
};

function CruzFigure({ pulseSignal = 0 }: CruzFigureProps) {
  const group = useRef<Group>(null);
  const core = useRef<Mesh>(null);
  const lastPulse = useRef(0);
  const ringRefs = useRef<Array<Mesh | null>>([]);

  const rings = useMemo(
    () =>
      new Array(3).fill(null).map((_, index) => ({
        scale: 1 + index * 0.22,
        y: -0.6 + index * 0.75,
        rotation: index * 0.65,
      })),
    [],
  );

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const elapsed = Math.max(0, pulseSignal - lastPulse.current);
    const pulseLevel = Math.max(0, 1 - elapsed / 800);

    if (pulseSignal > lastPulse.current) {
      lastPulse.current = pulseSignal;
    }

    const pulseStrength = 1 + pulseLevel * 0.22;

    if (group.current) {
      group.current.rotation.y = Math.sin(t * 0.2) * 0.18;
      group.current.position.y = Math.sin(t * 0.55) * 0.08;
      group.current.scale.setScalar(pulseStrength);
    }

    if (core.current) {
      core.current.rotation.y += 0.0035 + pulseLevel * 0.01;
      core.current.rotation.x = Math.sin(t * 0.3) * 0.08;
      core.current.scale.setScalar(1 + pulseLevel * 0.1);

      const coreMaterial = core.current.material as {
        emissiveIntensity?: number;
        distort?: number;
        speed?: number;
      };

      coreMaterial.emissiveIntensity = 0.45 + pulseLevel * 0.8;
      coreMaterial.distort = 0.18 + pulseLevel * 0.1;
      coreMaterial.speed = 1.5 + pulseLevel * 2;
    }

    ringRefs.current.forEach((ring, index) => {
      if (!ring) {
        return;
      }

      ring.scale.setScalar(rings[index].scale * (1 + pulseLevel * 0.18));
      const ringMaterial = ring.material as { emissiveIntensity?: number };
      ringMaterial.emissiveIntensity = 0.3 + pulseLevel * 0.5;
    });
  });

  return (
    <group ref={group}>
      <Float speed={1.2} rotationIntensity={0.18} floatIntensity={0.6}>
        <mesh ref={core} castShadow receiveShadow position={[0, 0.35, 0]}>
          <capsuleGeometry args={[0.78, 1.65, 18, 28]} />
          <MeshDistortMaterial
            color="#d9d1c0"
            emissive="#6f79ff"
            emissiveIntensity={0.45}
            roughness={0.18}
            metalness={0.78}
            distort={0.18}
            speed={1.5}
          />
        </mesh>
      </Float>

      <mesh
        position={[0, -1.55, 0]}
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <circleGeometry args={[2.85, 64]} />
        <meshStandardMaterial color="#101728" roughness={0.85} metalness={0.12} />
      </mesh>

      {rings.map((ring, index) => (
        <mesh
          key={index}
          ref={(node) => {
            ringRefs.current[index] = node;
          }}
          rotation={[Math.PI / 2 + index * 0.25, ring.rotation, 0]}
          position={[0, ring.y, 0]}
          scale={ring.scale}
        >
          <torusGeometry args={[1.18, 0.025, 24, 120]} />
          <meshStandardMaterial
            color={index === 1 ? "#9ea7ff" : "#6e76bc"}
            emissive="#6570ff"
            emissiveIntensity={0.3}
            transparent
            opacity={0.72 - index * 0.16}
          />
        </mesh>
      ))}

      <Sparkles
        count={48}
        scale={[5, 5, 5]}
        size={2.2}
        speed={0.3}
        color="#8f9dff"
        noise={0.8}
      />
    </group>
  );
}

type CruzMonolithProps = {
  interactive?: boolean;
  pulseSignal?: number;
};

export function CruzMonolith({
  interactive = false,
  pulseSignal = 0,
}: CruzMonolithProps) {
  return (
    <div className="h-full min-h-[420px] w-full">
      <Canvas dpr={[1, 1.75]} gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={null}>
          <color attach="background" args={["#05070d"]} />
          <fog attach="fog" args={["#05070d", 5, 13]} />
          <ambientLight intensity={0.75} />
          <directionalLight
            castShadow
            intensity={2.5}
            position={[3.6, 4.4, 3.2]}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <pointLight intensity={12} position={[-2.5, 1.5, 2]} color="#5b6eff" />
          <pointLight intensity={5} position={[2.5, 0, -2]} color="#ffe4a8" />
          <PerspectiveCamera makeDefault fov={34} position={[0, 0.2, 5.25]} />
          <CruzFigure pulseSignal={pulseSignal} />
          {interactive ? (
            <OrbitControls
              enablePan={false}
              minDistance={4.25}
              maxDistance={6.75}
              autoRotate
              autoRotateSpeed={0.45}
              minPolarAngle={Math.PI / 2.8}
              maxPolarAngle={Math.PI / 1.8}
            />
          ) : (
            <OrbitControls
              enablePan={false}
              enableRotate={false}
              enableZoom={false}
              autoRotate
              autoRotateSpeed={0.6}
            />
          )}
        </Suspense>
      </Canvas>
    </div>
  );
}
