import React from 'react'
import Image from 'next/image'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import testVertexShader from '../../shaders/vertex.glsl'
import testFragmentShader from '../../shaders/fragment.glsl'

const Element1 = () => {
return (
<Canvas>
    <pointLight position={[10, 10, 10]}/>
    <mesh>
        <planeBufferGeometry args={[3, 5]}/>
        <meshStandardMaterial color="#7161F5" />
    </mesh>
</Canvas>
)
}

export default Element1