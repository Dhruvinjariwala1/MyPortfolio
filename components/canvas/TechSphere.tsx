'use client'

import { Sphere } from '@react-three/drei'

type TechSphereProps = {
  scale?: number
}

export default function TechSphere({ scale = 1 }: TechSphereProps) {
  return (
    <group scale={scale}>
      <Sphere args={[1.5, 32, 32]}>
        <meshStandardMaterial
          color="#00ffff"
          wireframe
        />
      </Sphere>
    </group>
  )
}
