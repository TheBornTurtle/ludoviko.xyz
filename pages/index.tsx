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
        <Card color="purpleCyan" rounded="lg" p="md" mt="lg" mx="md" >
          <Avatar title="Ludoviko" src="/RingRingTechSupport.png" borderVariant="large" color="cyan" />
          <Heading as="h1" size="2xl" color="black" >Saluton!</Heading>
          <Heading size="xl" color="black" >Welcome to my currently WIP site!</Heading>
        </Card>

        <Card rounded="lg" p="md" m="md" color="blackSecondary" id="about" >
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
        </Card>

        <Card rounded="lg" p="md" m="md" color="blackSecondary" id="projects" >
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
                isExternal={true}
                p="sm"
                color="purple"
                hoverColor="pink" >
                  Github Project
              </Anchor></Link>
              <Link href='https://youtube.com/playlist?list=PLlrATfBNZ98eOOCk2fOFg7Qg5yoQfFAdf' passHref><Anchor
                isExternal={true}
                p="xs"
                color="purple"
                hoverColor="pink" >
                  Original Playlist
              </Anchor></Link>
            </Card>
            <Card variant="subtle" color="pink" m="sm" >
              <Heading size="lg" className="card-title" p="sm" >Minecraft Projects</Heading>
              <Paragraph  px="md" >
                I have a couple of Minecraft mods, these can be found on a different page. Click the link below to view them!
                I also have a server, this can be found on the same page as the mods at the bottom.
                The server link will jump you straight to that section!
              </Paragraph>
              <Link href='/mc/#mods' passHref><Anchor
                p="sm"
                color="purple"
                hoverColor="pink" >
                  Mods
              </Anchor></Link>
              <Link href='/mc/#server' passHref><Anchor
                p="xs"
                color="purple"
                hoverColor="pink" >
                  Server
              </Anchor></Link>
            </Card>
            <Card variant="subtle" color="pink" m="sm" >
              <Heading size="lg" className="card-title" p="sm" >Vetero.js</Heading>
              <Paragraph  px="md" >
                A simple weather app built in React.js
              </Paragraph>
              <Link href='https://github.com/Lucxjo/vetero-js' passHref><Anchor
                isExternal={true}
                p="sm"
                color="purple"
                hoverColor="pink" >
                  Github Project
              </Anchor></Link>
              <Link href='https://v.ludoviko.xyz' passHref><Anchor
                isExternal={true}
                p="xs"
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
                isExternal={true}
                p="sm"
                color="purple"
                hoverColor="pink" >
                  Github Project
              </Anchor></Link>
            </Card>
          </Box>
        </Card>

        <Card rounded="lg" p="md" m="md" color="blackSecondary" id="social" >
          <Anchor></Anchor>
          <Box className="list-display" >
            <Heading as="h1" size="2xl" color="purpleCyan" >Social</Heading>
            <Paragraph >Here are the places that I spend my time on the internet. Feel free to follow and chat on any of them!</Paragraph>
            <List variant="unordered" color="purple" >
              <li className="drac-text drac-text-white" >
                <Link href="https://twitter.com/Ludoviko_" passHref><Anchor isExternal={true} color="purple" hoverColor="pink" >Twitter</Anchor></Link>
              </li>
              <li className="drac-text drac-text-white" >
                <Link href="https://mstdn.social/@Ludoviko" passHref><Anchor isExternal={true} rel="me" color="purple" hoverColor="pink" >Mastodon</Anchor></Link>
              </li>
              <li className="drac-text drac-text-white" >
                <Link href="https://github.com/Lucxjo" passHref><Anchor isExternal={true} color="purple" hoverColor="pink" >Github</Anchor></Link>
              </li>
              <li className="drac-text drac-text-white" >
                <Link href="https://matrix.to/#/@ludoviko:saluton.cc" passHref><Anchor isExternal={true} color="purple" hoverColor="pink" >[matrix]</Anchor></Link>
              </li>
              <li className="drac-text drac-text-white" >
                <Link href="mailto:me@ludoviko.xyz" passHref><Anchor isExternal={true} color="purple" hoverColor="pink" >Email</Anchor></Link>
              </li>
            </List>
            <Paragraph mt="sm">Here are some others that I use less frequently:</Paragraph>
            <List variant="unordered" color="purple">
              <li className="drac-text drac-text-white" >Switch Friend code: SW-1092-1929-2801</li>
              <li className="drac-text drac-text-white" >
                <Link href="https://www.twitch.tv/ludoviko_" passHref><Anchor isExternal={true} color="purple" hoverColor="pink" >Twitch.tv</Anchor></Link>
              </li>
              <li className="drac-text drac-text-white" >
                <Link href="https://pixelfed.de/Lucxjo" passHref><Anchor isExternal={true} color="purple" hoverColor="pink" >Pixelfed</Anchor></Link>
              </li>
            </List>
          </Box>
        </Card>
      </main>
    </div>
  )
}