'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import TechSphere from './TechSphere'
import FloatingIcons from './FloatingIcons'

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      className="w-full h-full"
    >
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />

      <TechSphere scale={0.9} />
      <FloatingIcons />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1}
      />
    </Canvas>
  )
}
