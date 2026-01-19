'use client'

import { Sphere } from '@react-three/drei'

export default function TechSphere() {
  return (
    <Sphere args={[1.5, 32, 32]}>
      <meshStandardMaterial color="#00ffff" wireframe />
    </Sphere>
  )
}
