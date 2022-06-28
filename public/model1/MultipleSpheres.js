import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function MultipleSpheres({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/model1/multipleSpheres.gltf')
  return (
    <group ref={group} {...props} dispose={null} scale={3}>
      <mesh geometry={nodes.Plane.geometry} material={nodes.Plane.material} />
    </group>
  )
}

useGLTF.preload('/model1/multipleSpheres.gltf')
