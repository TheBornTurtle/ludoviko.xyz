import '../styles/globals.css'
import '@dracula/dracula-ui/styles/dracula-ui.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navigation from '../components/nav'
import Footer from '../components/footer.js'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
