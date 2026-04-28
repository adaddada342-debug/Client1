"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

/**
 * Hero monolith — a slowly breathing, mythic figure of Cruz.
 *
 * Built from primitives only (no external models) for instant load
 * and cinematic, deliberate art-direction.
 *  - Towering monolith body (the Titanic)
 *  - Subtle inner ember pulse
 *  - Slow camera parallax driven by --mx / --my
 *  - Floating ring fragments — debris of broken realities
 */

function Monolith() {
  const groupRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const ringsRef = useRef<THREE.Group>(null);

  useFrame(({ clock, pointer }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      // Gentle breathing rotation
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        pointer.x * 0.25 + Math.sin(t * 0.15) * 0.04,
        0.04
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -pointer.y * 0.08 + Math.sin(t * 0.21) * 0.02,
        0.04
      );
      groupRef.current.position.y = Math.sin(t * 0.4) * 0.05;
    }
    if (innerRef.current) {
      const s = 1 + Math.sin(t * 0.8) * 0.04;
      innerRef.current.scale.set(s, s, s);
      const m = innerRef.current.material as THREE.MeshStandardMaterial;
      m.emissiveIntensity = 1.2 + Math.sin(t * 0.6) * 0.4;
    }
    if (ringsRef.current) {
      ringsRef.current.rotation.z = t * 0.05;
      ringsRef.current.children.forEach((c, i) => {
        c.rotation.x = t * (0.05 + i * 0.02) + i;
        c.rotation.y = t * (0.07 + i * 0.015);
      });
    }
  });

  return (
    <group ref={groupRef}>
      {/* Outer silhouette — chamfered monolith body */}
      <mesh castShadow receiveShadow>
        <capsuleGeometry args={[0.95, 2.6, 16, 32]} />
        <meshStandardMaterial
          color="#0c0e15"
          metalness={0.55}
          roughness={0.22}
          envMapIntensity={1}
        />
      </mesh>

      {/* Shoulders — broad, mythic */}
      <mesh position={[0, 1.05, 0]} castShadow>
        <sphereGeometry args={[1.25, 48, 32]} />
        <meshStandardMaterial
          color="#0a0d14"
          metalness={0.5}
          roughness={0.28}
        />
      </mesh>

      {/* Inner ember core — barely visible, breathing */}
      <mesh ref={innerRef} position={[0, 0.2, 0]}>
        <sphereGeometry args={[0.45, 32, 32]} />
        <meshStandardMaterial
          color="#1a0f08"
          emissive="#e98a4b"
          emissiveIntensity={1.4}
          roughness={0.6}
          metalness={0.1}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Drifting rings — mythic debris */}
      <group ref={ringsRef}>
        {Array.from({ length: 4 }).map((_, i) => (
          <mesh
            key={i}
            position={[0, -0.2 + i * 0.1, 0]}
            rotation={[Math.PI / 2 + i * 0.4, i * 0.5, 0]}
          >
            <torusGeometry args={[2.2 + i * 0.35, 0.005 + i * 0.0015, 16, 200]} />
            <meshBasicMaterial
              color={i % 2 === 0 ? "#e98a4b" : "#cdb89a"}
              transparent
              opacity={0.18 - i * 0.03}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}

function CameraRig() {
  const { camera } = useThree();
  useFrame(({ pointer }) => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.4, 0.04);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, 0.2 + pointer.y * 0.2, 0.04);
    camera.lookAt(0, 0.4, 0);
  });
  return null;
}

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const { positions, scales } = useMemo(() => {
    const N = 220;
    const pos = new Float32Array(N * 3);
    const scl = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      const r = 3 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.cos(phi) * 0.4;
      pos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
      scl[i] = Math.random();
    }
    return { positions: pos, scales: scl };
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.getElapsedTime() * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-scale"
          count={scales.length}
          array={scales}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.012}
        color="#cdb89a"
        transparent
        opacity={0.55}
        depthWrite={false}
      />
    </points>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0.4, 5.2], fov: 32 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.18} />
        <directionalLight
          position={[3, 5, 3]}
          intensity={1.2}
          color="#fff5e8"
        />
        <directionalLight
          position={[-4, 2, -2]}
          intensity={0.5}
          color="#7a8eff"
        />
        <pointLight position={[0, 0.2, 1.2]} intensity={1.4} color="#e98a4b" distance={4} />
        <Monolith />
        <Particles />
        <CameraRig />
        <fog attach="fog" args={["#05060a", 5, 12]} />
      </Suspense>
    </Canvas>
  );
}
