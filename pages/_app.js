import '../styles/globals.css'
import '@dracula/dracula-ui/styles/dracula-ui.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navigation from '../components/nav'
import Footer from '../components/footer.js'
import Head from 'next/head'
import PlausibleProvider from 'next-plausible'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <PlausibleProvider domain="ludoviko.xyz">
        <Head>
          <link rel="icon" href="/RingRingTechSupport.ico" />
          <meta property="og:title" content="Ludoviko.xyz" key="title" />
          <meta name="description" content="Ludoviko's little place on the internet" key="desc" />
          <meta property="og:description" content="Ludoviko's little place on the internet" key="og:desc" />
          <meta property="og:type" content="website" key="og:type" />
          <meta property="og:image" content="/RingRingTechSupport.png" key="og:img" />
          <meta name="keywords" content="Ludoviko, Programming, Minecraft, Game Development, Java, Blog, Kotlin" key="keyw" />
        </Head>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </PlausibleProvider>
    </>
  )
}

export default MyApp
