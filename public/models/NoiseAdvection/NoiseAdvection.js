import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'

export default function NoiseAdvection({ ...props }) {
const group = useRef()
const { nodes, materials } = useGLTF('/models/NoiseAdvection/NoiseAdvection.glb')
return (
<group ref={group} {...props} dispose={null}>

{/* Camera */}

<PerspectiveCamera makeDefault
  fov={50}
  position={[0, 0, 4]}
  near={1}
  far={1000} />

  {/* Model */}
  <mesh geometry={nodes.Cube.geometry} material={materials.Material} />
</group>
)
}

useGLTF.preload('/models/NoiseAdvection/NoiseAdvection.glb')