import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from '@react-three/postprocessing'

import Untitled from '../../public/models/Untitled/Untitled'
import Shape_1 from '../../public/models/Untitled/Shape_1'
import Shape_2 from '../../public/models/Untitled/Shape_2'

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
        <ambientLight color="#FFFFFF" intensity={0.15} />
        <pointLight color="#62F5E6" intensity={0.15} position={[1, 0, -2]} />
        <directionalLight color="#F562C9" intensity={0.15} position={[0, 1, -1]} />

        <Untitled />
        <OrbitControls autoRotate autoRotateSpeed={-0.1} />

        <EffectComposer>
            <Bloom
                luminanceThreshold={0.025}
                luminanceSmoothing={0.025}
                height={400} />
            <Noise
                opacity={0.05} />
            <Vignette
                eskil={false}
                offset={0.1}
                darkness={1} />
        </EffectComposer>
    </Canvas>
</div>
)
}

export default CanvasHero