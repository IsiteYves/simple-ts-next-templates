import '../styles/globals.css'
import '@fontsource/open-sans'
import Layout from '../layouts/layout'

function MyApp({ Component, pageProps }) {
  return <main style={{ fontFamily : 'Open sans'}}><Layout><Component {...pageProps} /></Layout></main>
}

export default MyApp


