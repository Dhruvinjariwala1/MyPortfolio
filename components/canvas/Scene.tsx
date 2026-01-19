'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import TechSphere from './TechSphere'
import FloatingIcons from './FloatingIcons'

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} />
      <TechSphere />
      <FloatingIcons />
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}
