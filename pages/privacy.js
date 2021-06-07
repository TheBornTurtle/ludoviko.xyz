import { Box, Heading, List, Paragraph, Anchor } from '@dracula/dracula-ui'
import Head from 'next/head'
import Link from 'next/link'

export default function Privacy() {
    return (
        <Box rounded="lg" p="md" m="md" color="blackSecondary">
            <Head>
                <title>Ludoviko.xyz | Privacy</title>
            </Head>
            <Heading size="2xl">Privacy Policy</Heading>
            <Paragraph>This site uses cookies to store information about your browsing activity.</Paragraph>
            <Paragraph>Ludoviko.xyz stores the following information:</Paragraph>
            <List variant="unordered" color="purple">
                <li className="drac-text drac-text-white">Cookie data in local storage to allow the comments section to function. This cookie is named 'cactus-session'.</li>
                <li className="drac-text drac-text-white">Cookie data to manage consent of cookies, this is provided by
                 <Link href="https://www.cookiebot.com/en/" passHref><Anchor color="purple" hoverColor="pink" isExternal={true}> Cookiebot</Anchor></Link>. 
                  This cookie is named 'CookieConsent'
                </li>
            </List>
            <Paragraph>Ludoviko.xyz uses analytics from <Link href="https://plausible.io/" passHref><Anchor color="purple"
                hoverColor="pink" isExternal={true}>Plausible</Anchor></Link> to improve the website. 
            Plausible does not install any cookies in the browser and collects minimal data. 
            Please read their <Link href="https://plausible.io/data-policy" passHref><Anchor isExternal={true} color="purple"
                hoverColor="pink" >data policy</Anchor></Link> for more details.
            </Paragraph>
        </Box>
    )
}