import '../styles/globals.css'
import Layout from '../components/Layout'
import { AnimatePresence, motion } from "framer-motion"

function MyApp({ Component, pageProps }) {
return (

<Layout exitBeforeEnter>
  <Component {...pageProps} />
</Layout>

)
}

export default MyApp