import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navigation from '../components/nav.js'
import Footer from '../components/footer.js'
import { Box } from '@dracula/dracula-ui'

export default function Home() {
  return (
    <div className={styles.container} dataTarget="#navbar" dataSpy="scroll">
      <Head>
        <title>Ludoviko.xyz</title>
        <meta name="description" content="Ludo's place on the internet." />
        <link rel="icon" href="/RingRingTechSupport.ico" />
      </Head>

      <main className={styles.main}>
      <Navigation />
        <Box color="purpleCyan" rounded="lg" p="md" m="md" >

        </Box>

      <Footer />
      </main>
    </div>
  )
}
