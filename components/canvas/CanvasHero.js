import React from 'react'
import { Canvas } from '@react-three/fiber'
import NoiseAdvection from '../../public/models/NoiseAdvection/NoiseAdvection'
import { OrbitControls } from '@react-three/drei'

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
        <ambientLight color="#FFFFFF" intensity={0.05} />
        <pointLight color="#D0D0D1" intensity={0.05} position={[-2, 0, 2]} />
        <directionalLight color="#697077" intensity={0.05} position={[-2, 0, 2]} />

        <NoiseAdvection />
        <OrbitControls autoRotate autoRotateSpeed={-0.05} />
    </Canvas>
</div>
)
}

export default CanvasHero