import React from 'react'
import Image from 'next/image'
import { Canvas } from '@react-three/fiber'

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