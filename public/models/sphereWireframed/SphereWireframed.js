import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'
import { Flex, Box } from '@react-three/flex'

export default function SphereWireframed({ ...props }) {
const group = useRef()
const { nodes, materials } = useGLTF('/models/sphereWireframed/sphereWireframed.gltf')
return (
<group ref={group} {...props} dispose={null}>

  {/* Camera */}
  <PerspectiveCamera makeDefault
  fov={50}
  position={[0, 0, 7.1]}
  near={1}
  far={1000} />

  {/* Model */}
  <mesh geometry={nodes.Sphere.geometry} material={nodes.Sphere.material} position={[0, 0, 0]} rotation={[-0.5, -0.5, -0.5]} />
</group>
)
}

useGLTF.preload('/sphereWireframed/sphereWireframed.gltf')