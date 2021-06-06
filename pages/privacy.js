import { Box, Heading, List, Paragraph, Anchor } from '@dracula/dracula-ui'
import Head from 'next/head'

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
                <li className="drac-text drac-text-white">User data in local storage to allow the comments section to function.</li>
            </List>
            <Paragraph>Ludoviko.xyz uses analytics from <Anchor href="https://plausible.io/" isExternal={true}>Plausible</Anchor> to improve the website. 
            Plausible does not install any cookies in the browser and collects minimal data. 
            Please read their <Anchor isExternal={true} href="https://plausible.io/data-policy" >data policy</Anchor> for more details.
            </Paragraph>
        </Box>
    )
}