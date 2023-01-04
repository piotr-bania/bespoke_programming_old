import '../styles/globals.scss'
import '../styles/sections/sections.scss'
import '../styles/sections/navbar.scss'
import '../styles/sections/hero.scss'
import '../styles/sections/my_services.scss'
import '../styles/sections/my_process.scss'
import '../styles/sections/featured_work.scss'
import '../styles/sections/about_me.scss'
import '../styles/sections/post.scss'
import '../styles/sections/blog.scss'
import '../styles/sections/canvas.scss'
import '../styles/sections/faq.scss'
import '../styles/sections/footer.scss'
import '../styles/sections/quote.scss'
import '../styles/sections/pricing.scss'

import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
return (
<Layout>
  <Component {...pageProps} />
</Layout>
)
}

export default MyApp