"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, ContactShadows, Environment } from "@react-three/drei";
import { Suspense, useRef, useState } from "react";
import * as THREE from "three";

/**
 * Interactive Cruz monolith for the 3D moment.
 * The user can orbit, zoom, and trigger a "ROAR" pulse.
 */

function Body({ pulse }: { pulse: number }) {
  const ref = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ringsRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ref.current) {
      ref.current.position.y = Math.sin(t * 0.4) * 0.05;
    }
    if (coreRef.current) {
      const m = coreRef.current.material as THREE.MeshStandardMaterial;
      const decay = Math.max(0, 1 - (t - pulse));
      m.emissiveIntensity = 1.2 + decay * 6;
      const s = 1 + decay * 0.4 + Math.sin(t * 0.8) * 0.04;
      coreRef.current.scale.set(s, s, s);
    }
    if (ringsRef.current) {
      ringsRef.current.rotation.z = t * 0.06;
      ringsRef.current.children.forEach((c, i) => {
        c.rotation.x = t * (0.08 + i * 0.02) + i;
        c.rotation.y = t * (0.05 + i * 0.015);
      });
    }
  });

  return (
    <group ref={ref}>
      <mesh castShadow>
        <capsuleGeometry args={[1.05, 2.8, 16, 32]} />
        <meshStandardMaterial color="#0c0e15" metalness={0.6} roughness={0.2} />
      </mesh>
      <mesh position={[0, 1.2, 0]} castShadow>
        <sphereGeometry args={[1.4, 48, 32]} />
        <meshStandardMaterial color="#0a0d14" metalness={0.55} roughness={0.26} />
      </mesh>

      <mesh ref={coreRef} position={[0, 0.2, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color="#150a04"
          emissive="#e98a4b"
          emissiveIntensity={1.4}
          roughness={0.55}
          metalness={0.05}
          transparent
          opacity={0.78}
        />
      </mesh>

      <group ref={ringsRef}>
        {Array.from({ length: 5 }).map((_, i) => (
          <mesh
            key={i}
            position={[0, -0.2 + i * 0.06, 0]}
            rotation={[Math.PI / 2 + i * 0.4, i * 0.5, 0]}
          >
            <torusGeometry args={[2.4 + i * 0.32, 0.005 + i * 0.0015, 16, 240]} />
            <meshBasicMaterial
              color={i % 2 === 0 ? "#e98a4b" : "#cdb89a"}
              transparent
              opacity={0.22 - i * 0.03}
            />
          </mesh>
        ))}
      </group>

      <mesh position={[0, -2.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.6, 1.62, 96]} />
        <meshBasicMaterial color="#e98a4b" transparent opacity={0.2} />
      </mesh>
    </group>
  );
}

export default function CruzMonolith() {
  const [pulse, setPulse] = useState(-10);

  return (
    <div className="relative h-full w-full">
      <Canvas
        dpr={[1, 1.6]}
        shadows
        camera={{ position: [0, 0.7, 7.2], fov: 32 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <color attach="background" args={["#05060a"]} />
          <fog attach="fog" args={["#05060a", 6, 14]} />

          <ambientLight intensity={0.25} />
          <directionalLight
            position={[3, 6, 3]}
            intensity={1.4}
            color="#fff2e0"
            castShadow
          />
          <directionalLight position={[-4, 3, -2]} intensity={0.6} color="#7a8eff" />
          <pointLight position={[0, 0.2, 1.4]} intensity={1.6} color="#e98a4b" distance={5} />

          <Body pulse={pulse} />
          <ContactShadows
            opacity={0.6}
            scale={10}
            blur={2.5}
            far={4}
            position={[0, -2.21, 0]}
            color="#000"
          />
          <Environment preset="city" />
          <OrbitControls
            enablePan={false}
            enableZoom
            minDistance={4.5}
            maxDistance={11}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.9}
            rotateSpeed={0.45}
            dampingFactor={0.08}
          />
        </Suspense>
      </Canvas>

      <button
        onClick={() => {
          // trigger ember pulse
          // setPulse to current elapsed time approximation via performance.now()/1000
          setPulse(performance.now() / 1000);
        }}
        className="group absolute bottom-5 left-1/2 -translate-x-1/2 inline-flex items-center gap-3 rounded-lg border border-glass-line bg-white/[0.04] px-4 py-2.5 text-[12px] uppercase tracking-[0.28em] text-bone-100 backdrop-blur-md transition-all duration-500 hover:bg-white/[0.08] hover:glow-ember"
      >
        <span className="size-1.5 rounded-full bg-ember-500 shadow-[0_0_12px_rgba(233,138,75,0.7)] group-hover:animate-pulse" />
        Awaken
      </button>

      <div className="pointer-events-none absolute left-5 top-5 font-mono text-[10px] uppercase tracking-[0.32em] text-bone-300/60">
        Drag to rotate · Scroll to zoom
      </div>
    </div>
  );
}
