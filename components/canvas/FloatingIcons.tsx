'use client'

import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'
import {
  SiDotnet,
  SiReact,
  SiAndroidstudio,
  SiPostgresql,
  SiJavascript,
  SiPython,
} from 'react-icons/si'

type IconItem = {
  label: string
  icon: React.ReactNode
  position: [number, number, number]
}

const icons: IconItem[] = [
  { label: 'ASP.NET', icon: <SiDotnet />, position: [2.2, 0.6, 0] },
  { label: 'React', icon: <SiReact />, position: [-2.1, 0.8, 0] },
  { label: 'Android', icon: <SiAndroidstudio />, position: [1.2, 1.6, 0] },
  { label: 'PostgreSQL', icon: <SiPostgresql />, position: [-1.2, -1.6, 0] },
  { label: 'JavaScript', icon: <SiJavascript />, position: [1.6, -0.9, 0] },
  { label: 'Python', icon: <SiPython />, position: [2.6, -0.3, 0] },
]

export default function FloatingIcons() {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame(({ clock }) => {
    groupRef.current.rotation.y = clock.getElapsedTime() * 0.25
  })

  return (
    <group ref={groupRef}>
      {icons.map((item, i) => (
        <FloatingIcon
          key={i}
          icon={item.icon}
          label={item.label}
          position={item.position}
        />
      ))}
    </group>
  )
}

function FloatingIcon({
  icon,
  label,
  position,
}: {
  icon: React.ReactNode
  label: string
  position: [number, number, number]
}) {
  const ref = useRef<THREE.Group>(null!)

  useFrame(({ clock }) => {
    ref.current.position.y =
      position[1] + Math.sin(clock.getElapsedTime() * 2) * 0.15
  })

  return (
    <group ref={ref} position={position}>
      <Html center>
        <div className="flex flex-col items-center gap-1 px-3 py-2 rounded-lg bg-black/70 border border-white/10">
          <div className="text-cyan-400 text-xl">{icon}</div>
          <span className="text-[10px] text-white">{label}</span>
        </div>
      </Html>
    </group>
  )
}
