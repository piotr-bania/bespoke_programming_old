import '../styles/globals.css'
import Layout from '../components/Layout'
import { Canvas, useThree } from '@react-three/fiber'
import MultipleSpheres from '../public/model1/MultipleSpheres'
import { Instances, Instance, OrbitControls, Environment, useGLTF } from '@react-three/drei'

function MyApp({ Component, pageProps }) {
return (

<Layout>

  <Component {...pageProps} />

  <Canvas style={{ position: "absolute", top: "0", left: "0", zIndex: "-1", width: "100vw", height: "100vh" }}>

    <ambientLight intensity={0.5} />
    <directionalLight intensity={0.5} position={[-5, -2, 0]} />

    <MultipleSpheres position={[-0.25, 0.25, 0.25]} />
    <OrbitControls autoRotate autoRotateSpeed={-0.5} />

  </Canvas>

</Layout>

)
}

export default MyApp