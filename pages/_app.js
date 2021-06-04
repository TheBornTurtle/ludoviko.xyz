import '../styles/globals.css'
import '@dracula/dracula-ui/styles/dracula-ui.css'
import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
