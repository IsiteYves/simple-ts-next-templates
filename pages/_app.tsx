import '../styles/globals.css'
import '@fontsource/open-sans'
import '@fontsource/source-serif-pro'

import Layout from '../layouts/layout'

function MyApp({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp


