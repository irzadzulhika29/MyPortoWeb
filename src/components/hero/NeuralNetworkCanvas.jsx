import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const ParticleNetwork = (props) => {
  const ref = useRef();
  // Generate 200 random points in a sphere of radius 1.5
  const sphere = useMemo(
    () => random.inSphere(new Float32Array(300 * 3), { radius: 1.5 }),
    []
  );

  useFrame((state, delta) => {
    // Rotation animation
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;

    // Optional: Add breathing/pulsing effect here
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#00F2EA"
          size={0.005} // Increased size slightly
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6} // Reduced opacity for subtle effect
        />
      </Points>
    </group>
  );
};

// Lines connecting particles would be heavy to calculate in JS every frame for 300 points O(n^2).
// For a simplified "Neural" look without heavy compute, we can use a second layer of lines
// or just stick to particles giving the "impression" of nodes.
// Alternatively, use 'Drei' Line or Segments if we pre-calculate connections.
// For now, let's stick to the subtle particle cloud to ensure 60FPS as requested.
// We will add a "fog" or depth effect using R3F.

const NeuralNetworkCanvas = () => {
  return (
    <div className="absolute inset-0 z-0 h-screen w-full">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ParticleNetwork />
      </Canvas>
    </div>
  );
};

export default NeuralNetworkCanvas;
