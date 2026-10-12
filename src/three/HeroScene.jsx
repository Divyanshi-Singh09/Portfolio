import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

// Glowing Cyber Core with distortion and emissive pulse
function GlowingCore({ isMobile, reducedMotion }) {
  const meshRef = useRef();
  const ringRef1 = useRef();
  const ringRef2 = useRef();

  useFrame((state, delta) => {
    if (reducedMotion) return;
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.15;
      meshRef.current.rotation.y = t * 0.2;
    }
    if (ringRef1.current) {
      ringRef1.current.rotation.x = t * 0.25;
      ringRef1.current.rotation.y = t * 0.35;
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.x = -t * 0.2;
      ringRef2.current.rotation.z = t * 0.3;
    }
  });

  return (
    <group>
      {/* Central Distorted Glowing Orb */}
      <Sphere ref={meshRef} args={[isMobile ? 1.4 : 1.7, 64, 64]}>
        <MeshDistortMaterial
          color="#8B5CF6"
          emissive="#6D28D9"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.8}
          distort={reducedMotion ? 0 : 0.38}
          speed={reducedMotion ? 0 : 2}
          wireframe={false}
        />
      </Sphere>

      {/* Outer Wireframe Hologram Shield */}
      <Sphere args={[isMobile ? 1.65 : 2.05, 32, 32]}>
        <meshStandardMaterial
          color="#06B6D4"
          emissive="#06B6D4"
          emissiveIntensity={0.8}
          wireframe
          transparent
          opacity={0.35}
        />
      </Sphere>

      {/* Orbiting Orbital Cyber Rings */}
      <mesh ref={ringRef1}>
        <torusGeometry args={[isMobile ? 2.2 : 2.7, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#A78BFA"
          emissive="#8B5CF6"
          emissiveIntensity={1.2}
          transparent
          opacity={0.7}
        />
      </mesh>

      <mesh ref={ringRef2} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[isMobile ? 2.5 : 3.1, 0.015, 16, 100]} />
        <meshStandardMaterial
          color="#38BDF8"
          emissive="#06B6D4"
          emissiveIntensity={1.5}
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  );
}

// Interactive Cosmic / Cyber Particle Swarm
function ParticleField({ count = 350, reducedMotion }) {
  const pointsRef = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorViolet = new THREE.Color("#8B5CF6");
    const colorCyan = new THREE.Color("#06B6D4");
    const colorWhite = new THREE.Color("#FFFFFF");

    for (let i = 0; i < count; i++) {
      const radius = 2.5 + Math.random() * 5.5;
      const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);
      const phi = THREE.MathUtils.randFloat(0, Math.PI);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);

      const mixedColor =
        Math.random() > 0.5
          ? colorViolet.clone().lerp(colorCyan, Math.random())
          : colorCyan.clone().lerp(colorWhite, Math.random() * 0.4);

      col[i * 3] = mixedColor.r;
      col[i * 3 + 1] = mixedColor.g;
      col[i * 3 + 2] = mixedColor.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state) => {
    if (reducedMotion || !pointsRef.current) return;
    const t = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = t * 0.04;
    pointsRef.current.rotation.x = Math.sin(t * 0.02) * 0.05;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

// Floating Geometries (Icosahedron, Octahedron, Torus) simulating code structures
function FloatingTechNodes({ reducedMotion }) {
  return (
    <group>
      <Float speed={reducedMotion ? 0 : 2} rotationIntensity={1} floatIntensity={1.5} position={[-3, 1.8, -1]}>
        <mesh>
          <octahedronGeometry args={[0.35, 0]} />
          <meshStandardMaterial color="#8B5CF6" emissive="#6D28D9" emissiveIntensity={0.8} wireframe />
        </mesh>
      </Float>

      <Float speed={reducedMotion ? 0 : 2.5} rotationIntensity={1.2} floatIntensity={1.8} position={[3.2, -1.5, 0.5]}>
        <mesh>
          <icosahedronGeometry args={[0.4, 0]} />
          <meshStandardMaterial color="#06B6D4" emissive="#0891B2" emissiveIntensity={0.9} wireframe />
        </mesh>
      </Float>

      <Float speed={reducedMotion ? 0 : 1.8} rotationIntensity={0.8} floatIntensity={1.2} position={[2.8, 2.2, -1.2]}>
        <mesh>
          <tetrahedronGeometry args={[0.3, 0]} />
          <meshStandardMaterial color="#EC4899" emissive="#BE185D" emissiveIntensity={0.7} wireframe />
        </mesh>
      </Float>
    </group>
  );
}

// Mouse Follower Rig for gentle perspective parallax
function SceneRig({ children }) {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;
    // Smooth mouse parallax lerp
    const targetX = (state.pointer.x * Math.PI) / 12;
    const targetY = (-state.pointer.y * Math.PI) / 16;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetX, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetY, 0.05);
  });

  return <group ref={group}>{children}</group>;
}

export default function HeroScene() {
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [hasWebGlError, setHasWebGlError] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(motionQuery.matches);
    const motionHandler = (e) => setReducedMotion(e.matches);
    motionQuery.addEventListener("change", motionHandler);

    return () => {
      window.removeEventListener("resize", checkMobile);
      motionQuery.removeEventListener("change", motionHandler);
    };
  }, []);

  if (hasWebGlError) {
    return (
      <div className="w-full h-full flex items-center justify-center relative">
        <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-violet-600 via-indigo-500 to-cyan-400 blur-2xl opacity-40 animate-pulse" />
        <div className="absolute w-48 h-48 rounded-full border border-violet-500/30 flex items-center justify-center">
          <div className="w-36 h-36 rounded-full border border-cyan-400/40 animate-spin" style={{ animationDuration: '15s' }} />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing select-none">
      <Canvas
        camera={{ position: [0, 0, isMobile ? 6.5 : 5.8], fov: 45 }}
        dpr={isMobile ? [1, 1.5] : [1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        onError={() => setHasWebGlError(true)}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#FFFFFF" />
        <pointLight position={[-10, -10, -5]} intensity={2} color="#8B5CF6" />
        <pointLight position={[10, -5, 5]} intensity={2.5} color="#06B6D4" />

        <SceneRig>
          <GlowingCore isMobile={isMobile} reducedMotion={reducedMotion} />
          <ParticleField count={isMobile ? 180 : 380} reducedMotion={reducedMotion} />
          <FloatingTechNodes reducedMotion={reducedMotion} />
        </SceneRig>
      </Canvas>
    </div>
  );
}
