import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Box, Heading, Anchor, List, Card, Paragraph, Avatar } from '@dracula/dracula-ui'

export default function Home() {
  return (
    <div className={styles.container} data-target="#navbar" data-spy="scroll">
      <Head>
        <title>Ludoviko.xyz</title>
      </Head>

      <main className={styles.main}>
        <Box color="purpleCyan" rounded="lg" p="md" mt="lg" mx="md" >
          <Avatar title="Ludoviko" src="/RingRingTechSupport.png" borderVariant="large" color="cyan" />
          <Heading as="h1" size="2xl" color="black" >Saluton!</Heading>
          <Heading size="xl" color="black" >Welcome to my currently WIP site!</Heading>
        </Box>

        <Box rounded="lg" p="md" m="md" color="blackSecondary" id="about" >
          <Anchor></Anchor>
          <Box className="list-display" >
            <Heading as="h1" size="2xl" color="purpleCyan" >About</Heading>
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
            <Heading as="h1" size="2xl" color="purpleCyan" m="md" >Projects</Heading>
            <Card variant="subtle" color="pink" m="sm" >
              <Heading size="lg" className="card-title" p="sm" >Arbúcies</Heading>
              <Paragraph  px="md" >
                A game project for the JVM written in Kotlin.
                The game is a rewrite of a game made by TheCherno on YouTube,
                this original project was made as a Java 2D game tutorial.
              </Paragraph>
              <Link href='https://github.com/Lucxjo/Arbucies' passHref><Anchor
                isExternal="true"
                p="sm"
                color="purple"
                hoverColor="pink" >
                  Github Project
              </Anchor></Link>
              <Link href='https://youtube.com/playlist?list=PLlrATfBNZ98eOOCk2fOFg7Qg5yoQfFAdf' passHref><Anchor
                isExternal="true"
                p="sm"
                color="purple"
                hoverColor="pink" >
                  Original Playlist
              </Anchor></Link>
            </Card>
            <Card variant="subtle" color="pink" m="sm" >
              <Heading size="lg" className="card-title" p="sm" >Kontrolo (Fabric)</Heading>
              <Paragraph  px="md" >
                A Minecraft mod for the Fabric mod loader. This mod adds a GUI for common commands that can be clicked to be excecuted.
                The mod also adds a GUI for you to add your own commands through a config file.
              </Paragraph>
              <Link href='https://github.com/Lucxjo/Kontrolo-Fabric' passHref><Anchor
                isExternal="true"
                p="sm"
                color="purple"
                hoverColor="pink" >
                  Github Project
              </Anchor></Link>
              <Link href='https://modrinth.com/mod/kontrolo' passHref><Anchor
                isExternal="true"
                p="sm"
                color="purple"
                hoverColor="pink" >
                  Download
              </Anchor></Link>
            </Card>
            <Card variant="subtle" color="pink" m="sm" >
              <Heading size="lg" className="card-title" p="sm" >Kontrolo (Forge)</Heading>
              <Paragraph  px="md" >
                A Minecraft mod for the Forge mod loader. This mod adds a GUI for common commands that can be clicked to be excecuted.
                The mod also adds a GUI for you to add your own commands through a config file.
              </Paragraph>
              <Link href='https://github.com/Lucxjo/Kontrolo-Forge' passHref><Anchor
                isExternal="true"
                p="sm"
                color="purple"
                hoverColor="pink" >
                  Github Project
              </Anchor></Link>
              <Link href='https://modrinth.com/mod/kontrolo-forge' passHref><Anchor
                isExternal="true"
                p="sm"
                color="purple"
                hoverColor="pink" >
                  Download
              </Anchor></Link>
            </Card>
            <Card variant="subtle" color="pink" m="sm" >
              <Heading size="lg" className="card-title" p="sm" >Vetero.js</Heading>
              <Paragraph  px="md" >
                A simple weather app built in React.js
              </Paragraph>
              <Link href='https://github.com/Lucxjo/vetero-js' passHref><Anchor
                isExternal="true"
                p="sm"
                color="purple"
                hoverColor="pink" >
                  Github Project
              </Anchor></Link>
              <Link href='https://v.ludoviko.xyz' passHref><Anchor
                isExternal="true"
                p="sm"
                color="purple"
                hoverColor="pink" >
                  View
              </Anchor></Link>
            </Card>
            <Card variant="subtle" color="pink" m="sm" >
              <Heading size="lg" className="card-title" p="sm" >Ludoviko.xyz</Heading>
              <Paragraph  px="md" >
                This website! Technically it is one of my projects, so it deserves to be in this list. Right?
                Built in Next.js with Dracuala theming from the Dracula UI kit.
              </Paragraph>
              <Link href='https://github.com/Lucxjo/ludoviko.xyz' passHref><Anchor
                isExternal="true"
                p="sm"
                color="purple"
                hoverColor="pink" >
                  Github Project
              </Anchor></Link>
            </Card>
          </Box>
        </Box>

        <Box rounded="lg" p="md" m="md" color="blackSecondary" id="social" >
          <Anchor></Anchor>
          <Box className="list-display" >
            <Heading as="h1" size="2xl" color="purpleCyan" >Social</Heading>
            <Paragraph >Here are the places that I spend my time on the internet. Feel free to follow and chat on any of them!</Paragraph>
            <List variant="unordered" color="purple" >
              <li className="drac-text drac-text-white" >
                <Link href="https://twitter.com/Ludoviko_" passHref><Anchor color="purple" hoverColor="pink" >Twitter</Anchor></Link>
              </li>
              <li className="drac-text drac-text-white" >
                <Link href="https://mstdn.social/@Ludoviko" passHref><Anchor rel="me" color="purple" hoverColor="pink" >Mastodon</Anchor></Link>
              </li>
              <li className="drac-text drac-text-white" >
                <Link href="https://github.com/Lucxjo" passHref><Anchor color="purple" hoverColor="pink" >Github</Anchor></Link>
              </li>
              <li className="drac-text drac-text-white" >
                <Link href="https://matrix.to/#/@ludoviko:saluton.cc" passHref><Anchor color="purple" hoverColor="pink" >[matrix]</Anchor></Link>
              </li>
              <li className="drac-text drac-text-white" >
                <Link href="mailto:me@ludoviko.xyz" passHref><Anchor color="purple" hoverColor="pink" >Email</Anchor></Link>
              </li>
            </List>
            <Paragraph mt="sm">Here are some others that I use less frequently:</Paragraph>
            <List variant="unordered" color="purple">
              <li className="drac-text drac-text-white" >Switch Friend code: SW-1092-1929-2801</li>
              <li className="drac-text drac-text-white" >
                <Link href="https://www.twitch.tv/ludoviko_" passHref><Anchor color="purple" hoverColor="pink" >Twitch.tv</Anchor></Link>
              </li>
              <li className="drac-text drac-text-white" >
                <Link href="https://pixelfed.de/Lucxjo" passHref><Anchor color="purple" hoverColor="pink" >Pixelfed</Anchor></Link>
              </li>
            </List>
          </Box>
        </Box>
      </main>
    </div>
  )
}