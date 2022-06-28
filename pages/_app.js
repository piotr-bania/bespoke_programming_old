import '../styles/globals.css'
import Layout from '../components/Layout'
import { Canvas, useThree } from '@react-three/fiber'
import MultipleSpheres from '../public/model1/MultipleSpheres'

function MyApp({ Component, pageProps }) {
return (
<Layout>
  <Component {...pageProps} />
  <Canvas style={{ position: "absolute", top: "0", left: "0", zIndex: "-1", width: "100vw", height: "100vh" }}>
    <MultipleSpheres />
    <ambientLight />
    <pointLight position={[-5, -5, 0]} />
  </Canvas>
</Layout>

)
}

export default MyApp