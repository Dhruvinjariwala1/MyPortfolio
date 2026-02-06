'use client'

import { Sphere } from '@react-three/drei'

type TechSphereProps = {
  scale?: number
}

export default function TechSphere({ scale = 1 }: TechSphereProps) {
  return (
    <group scale={scale}>
      <Sphere args={[2.4, 50, 50]}>
        <meshStandardMaterial
          color="#00ffff"
          wireframe
        />
      </Sphere>
    </group>
  )
}
