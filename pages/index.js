import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navigation from '../components/nav.js'
import Footer from '../components/footer.js'
import { Box, Heading, Anchor, List, Card, Paragraph } from '@dracula/dracula-ui'

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
        <Box color="purpleCyan" rounded="lg" p="md" mt="lg" mx="md" >
          <Heading size="2xl" color="black" >Saluton!</Heading>
          <Heading size="xl" color="black" >Welcome to my currently WIP site!</Heading>
        </Box>

        <Box rounded="lg" p="md" m="md" color="blackSecondary" id="about" >
          <Anchor></Anchor>
          <Box className="list-display" >
            <Heading size="2xl" color="purpleCyan" >About</Heading>
            <Heading size="lg" >So a bit about me:</Heading>
            <List variant="unordered" color="purple" >
              <li className="drac-text drac-text-white" >Age: 21</li>
              <li className="drac-text drac-text-white" >Location: Europe</li>
              <li className="drac-text drac-text-white" >Sexuality: Whatever it is, it isn't straight!</li>
              <li className="drac-text drac-text-white" >Pronouns: He/him, they/them</li>
              <li className="drac-text drac-text-white" >Gender: Male-ish</li>
              <li className="drac-text drac-text-white" >Languages: en-GB, es-ES, eo-EO</li>
            </List>
          </Box>
        </Box>

        <Box rounded="lg" p="md" m="md" color="blackSecondary" id="projects" >
          <Anchor></Anchor>
          <Box className="list-display" >
            <Heading size="2xl" color="purpleCyan" m="md" >Projects</Heading>
            <Card variant="subtle" color="pink" m="sm" >
              <Heading size="lg" className="card-title" p="sm" >Arbúcies</Heading>
              <Paragraph  px="md" >
                A game project for the JVM written in Kotlin.
                The game is a rewrite of a game made by TheCherno on YouTube,
                this original project was made as a Java 2D game tutorial.
              </Paragraph>
              <Anchor href='https://github.com/Lucxjo/Arbucies'
                isExternal="true"
                p="sm"
                color="purple"
                hoverColor="pink" >
                  Github Project
              </Anchor>
              <Anchor
                href='https://youtube.com/playlist?list=PLlrATfBNZ98eOOCk2fOFg7Qg5yoQfFAdf'
                isExternal="true"
                p="sm"
                color="purple"
                hoverColor="pink" >
                  Original Playlist
              </Anchor>
            </Card>
            <Card variant="subtle" color="pink" m="sm" >
              <Heading size="lg" className="card-title" p="sm" >Kontrolo (Fabric)</Heading>
              <Paragraph  px="md" >
                A Minecraft mod for the Fabric mod loader. This mod adds a GUI for common commands that can be clicked to be excecuted.
                The mod also adds a GUI for you to add your own commands through a config file.
              </Paragraph>
              <Anchor href='https://github.com/Lucxjo/Kontrolo-Fabric'
                isExternal="true"
                p="sm"
                color="purple"
                hoverColor="pink" >
                  Github Project
              </Anchor>
              <Anchor
                href='https://modrinth.com/mod/kontrolo'
                isExternal="true"
                p="sm"
                color="purple"
                hoverColor="pink" >
                  Download
              </Anchor>
            </Card>
            <Card variant="subtle" color="pink" m="sm" >
              <Heading size="lg" className="card-title" p="sm" >Kontrolo (Forge)</Heading>
              <Paragraph  px="md" >
                A Minecraft mod for the Forge mod loader. This mod adds a GUI for common commands that can be clicked to be excecuted.
                The mod also adds a GUI for you to add your own commands through a config file.
              </Paragraph>
              <Anchor href='https://github.com/Lucxjo/Kontrolo-Forge'
                isExternal="true"
                p="sm"
                color="purple"
                hoverColor="pink" >
                  Github Project
              </Anchor>
              <Anchor
                href='https://modrinth.com/mod/kontrolo-forge'
                isExternal="true"
                p="sm"
                color="purple"
                hoverColor="pink" >
                  Download
              </Anchor>
            </Card>
          </Box>
        </Box>

      <Footer />
      </main>
    </div>
  )
}
