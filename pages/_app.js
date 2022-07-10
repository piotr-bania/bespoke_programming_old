import '../styles/globals.scss'
import '../components/blog/blog.module.scss'

import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
return (
<Layout>
  <Component {...pageProps} />
</Layout>
)
}

export default MyApp