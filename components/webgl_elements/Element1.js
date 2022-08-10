import React, { useRef, Suspense } from 'react'
import { Canvas, extend, useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import VertexShader from '../../shaders/vertex.glsl'
import FragmentShader from '../../shaders/fragment.glsl'
import { shaderMaterial } from '@react-three/drei'

const WaveMaterial = shaderMaterial({
uTime: 0,
uColor: new THREE.Color(0.0, 0.0, 0.0),
uTexture: new THREE.Texture(),
vertexShader: VertexShader,
fragmentShader: FragmentShader
})

extend({WaveMaterial})

const Wave = () => {
    const ref = useRef()
    useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()))
  
    const [image] = useLoader(THREE.TextureLoader, [
      'images/project-1.jpg',
    ])
  
    return (
      <mesh>
        <planeBufferGeometry args={[8, 6, 16, 16]} />
        <waveMaterial uColor={"hotpink"} ref={ref} uTexture={image} />
      </mesh>
    )
  }

const Element1 = () => {
return (
<Canvas className='canvasElement1' camera={{ fov: 25, position: [0, 0, 15] }}
style={{
    position: "relative",
    width: "20vw",
    height: "auto"
    }}>
      <Suspense fallback={null}>
        <Wave />
      </Suspense>
    </Canvas>
)
}

export default Element1