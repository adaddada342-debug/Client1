"use client";

import { Suspense, type ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

type SceneShellProps = {
  children: ReactNode;
  className?: string;
};

export function SceneShell({ children, className }: SceneShellProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0.45, 5.5], fov: 34 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["#050816"]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[4, 3, 5]} intensity={2.1} color="#f6f7ff" />
        <directionalLight position={[-5, -2, -4]} intensity={1.3} color="#4f8cff" />
        <Suspense fallback={null}>
          <Environment preset="night" />
          {children}
        </Suspense>
      </Canvas>
    </div>
  );
}
