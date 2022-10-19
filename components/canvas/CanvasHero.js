import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import NoiseAdvection from '../../public/models/NoiseAdvection/NoiseAdvection'
import Untitled from '../../public/models/Untitled/Untitled'

const CanvasHero = () => {
return (
<div>
    {/* ---------------------- Canvas ---------------------- */}
    <Canvas className='canvasHero' style={{
            position: "absolute",
            top: "-15vh",
            right: "0vw",
            width: "150vw",
            height: "150vh"
            }}>
        <ambientLight color="#FFFFFF" intensity={0.1} />
        <pointLight color="#FFFFFF" intensity={0.1} position={[-2, 0, 2]} />
        <directionalLight color="#FFFFFF" intensity={0.1} position={[2, 0, -2]} />

        <Untitled />
        <OrbitControls autoRotate autoRotateSpeed={-0.1} />
    </Canvas>
</div>
)
}

export default CanvasHero