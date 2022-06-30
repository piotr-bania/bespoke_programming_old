import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'

export default function SphereWireframed({ ...props }) {
const group = useRef()
const { nodes, materials } = useGLTF('/model2/sphereWireframed.gltf')
return (
<group ref={group} {...props} dispose={null}>

  {/* Camera */}
  <PerspectiveCamera makeDefault position={[0, 1, 5]} />

  {/* Model */}
  <mesh geometry={nodes.Sphere.geometry} material={nodes.Sphere.material} position={[0, 0, 0]} rotation={[0.02, 0.25, 0.34]} />
</group>
)
}

useGLTF.preload('/model2/sphereWireframed.gltf')