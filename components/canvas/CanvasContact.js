import React from 'react'
import { Canvas } from '@react-three/fiber'
import SphereWireframed from '../../public/models/sphereWireframed/SphereWireframed'
import { OrbitControls } from '@react-three/drei'

const CanvasContact = () => {
return (
<>
    {/* ---------------------- Canvas ---------------------- */}
    <Canvas className='canvasContact' style={{
        position: "absolute",
        bottom: "5vw",
        left: "-20vw",
        width: "50vw",
        height: "50vw"
        }}>
        <ambientLight intensity={1} />
        <pointLight color="#D0D0D1" intensity={0.5} position={[-2, 1, 2]} />
        <directionalLight color="#697077" intensity={0.75} position={[2, -1, -2]} />
        <SphereWireframed />
        <OrbitControls autoRotate autoRotateSpeed={-0.25} />
    </Canvas>
</>
)
}

export default CanvasContact