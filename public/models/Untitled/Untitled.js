import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'

export default function Untitled({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/Untitled/untitled.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <PerspectiveCamera makeDefault
        fov={30}
        position={[0, 0, 7.1]}
        near={1}
        far={1000} />
      <mesh geometry={nodes.Cube.geometry} material={materials.Material} rotation={[-0.5, -0.5, -0.5]}  />
    </group>
  )
}

useGLTF.preload('/Untitled/untitled.gltf')
