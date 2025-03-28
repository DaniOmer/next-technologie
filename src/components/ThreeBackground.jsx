import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { useGesture } from "@use-gesture/react";
import { useRef, useState, useEffect } from "react";

function AnimatedSphere() {
  const sphereRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });
  const [velocity, setVelocity] = useState({ x: 0.5, y: 0.3, z: 0 });
  const { viewport } = useThree();

  const bind = useGesture({
    onDragStart: () => setIsDragging(true),
    onDragEnd: () => setIsDragging(false),
    onDrag: ({ delta: [x, y] }) => {
      if (sphereRef.current) {
        setRotation((prev) => ({
          x: prev.x + y / 100,
          y: prev.y + x / 100,
        }));

        // Allow manual positioning during drag
        setPosition((prev) => ({
          x: prev.x + x / 100,
          y: prev.y - y / 100, // Invert Y for intuitive dragging
          z: prev.z,
        }));

        // Reset velocity when dragging
        setVelocity({ x: 0, y: 0, z: 0 });
      }
    },
  });

  useEffect(() => {
    // Resume movement after dragging stops
    if (!isDragging) {
      setVelocity({
        x: Math.random() * 0.8 - 0.4,
        y: Math.random() * 0.8 - 0.4,
        z: 0,
      });
    }
  }, [isDragging]);

  useFrame((state, delta) => {
    if (!isDragging) {
      // Continue rotation
      setRotation((prev) => ({
        x: prev.x + delta * 0.4,
        y: prev.y + delta * 0.4,
      }));

      // Update position based on velocity
      setPosition((prev) => {
        // Calculate new position
        const newX = prev.x + velocity.x * delta;
        const newY = prev.y + velocity.y * delta;

        // Get boundaries (accounting for sphere size)
        const boundX = viewport.width / 2 - 1;
        const boundY = viewport.height / 2 - 1;

        // Check for collisions and bounce
        let newVelX = velocity.x;
        let newVelY = velocity.y;

        if (newX > boundX || newX < -boundX) {
          newVelX = -velocity.x;
        }

        if (newY > boundY || newY < -boundY) {
          newVelY = -velocity.y;
        }

        // Update velocity if needed
        if (newVelX !== velocity.x || newVelY !== velocity.y) {
          setVelocity({ x: newVelX, y: newVelY, z: 0 });
        }

        // Return new position with boundary checks
        return {
          x: Math.max(-boundX, Math.min(boundX, newX)),
          y: Math.max(-boundY, Math.min(boundY, newY)),
          z: prev.z,
        };
      });
    }
  });

  return (
    <group
      ref={sphereRef}
      position={[position.x, position.y, position.z]}
      rotation={[rotation.x, rotation.y, 0]}
      {...bind()}
    >
      <Sphere args={[1, 32, 32]}>
        <meshStandardMaterial
          color="#4F46E5"
          wireframe
          transparent
          opacity={0.3}
        />
      </Sphere>
    </group>
  );
}

function ThreeBackground() {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <AnimatedSphere />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}

export default ThreeBackground;
