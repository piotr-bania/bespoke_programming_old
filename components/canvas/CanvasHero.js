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
        <ambientLight color="#8A3FFC" intensity={0.015} />
        <pointLight color="#D0D0D1" intensity={0.15} position={[-2, 1, 2]} />
        <directionalLight color="#697077" intensity={0.15} position={[-5, 0, 0]} />
        {/* <Flex justifyContent="center" alignItems="center">
            <Box centerAnchor flexGrow={1}>
                <SphereWireframed />
            </Box>
        </Flex> */}
        <NoiseAdvection />
        <OrbitControls autoRotate autoRotateSpeed={-0.25} />
    </Canvas>
</div>
)
}

export default CanvasHero