import React from 'react'
import { Canvas } from '@react-three/fiber'
import SphereWireframed from '../../public/models/sphereWireframed/SphereWireframed'
import { OrbitControls } from '@react-three/drei'

const CanvasHero = () => {
return (
<div>
    {/* ---------------------- Canvas ---------------------- */}
    <Canvas className='canvasHero' style={{
            position: "absolute",
            top: "5vh",
            right: "-5vw",
            width: "150vw",
            height: "150vh"
            }}>
        <ambientLight intensity={1} />
        <pointLight color="#D0D0D1" intensity={0.5} position={[-2, 1, 2]} />
        <directionalLight color="#697077" intensity={0.75} position={[2, -1, -2]} />
        {/* <Flex justifyContent="center" alignItems="center">
            <Box centerAnchor flexGrow={1}>
            <SphereWireframed />
            </Box>
        </Flex> */}
        <SphereWireframed />
        <OrbitControls autoRotate autoRotateSpeed={-0.25} />
    </Canvas>
</div>
)
}

export default CanvasHero