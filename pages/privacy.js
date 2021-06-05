import { Box, Heading, List, Paragraph } from '@dracula/dracula-ui'
import Head from 'next/head'

export default function Privacy() {
    return (
        <Box rounded="lg" p="md" m="md" color="blackSecondary">
            <Head>
                <title>Ludoviko.xyz | Privacy</title>
                <meta name="description" content="Ludo's place on the internet." />
                <link rel="icon" href="/RingRingTechSupport.ico" />
            </Head>
            <Heading size="2xl">Privacy Policy</Heading>
            <Paragraph>This site uses cookies to store information about your browsing activity.</Paragraph>
            <Paragraph>Ludoviko.xyz stores the following information:</Paragraph>
            <List variant="unordered" color="purple">
                <li className="drac-text drac-text-white">A cookie named notification with the value true or false that stores if you have already closed the cookie notification that displays at the top of the page.</li>
                <li className="drac-text drac-text-white">A cookie that stores information for comments, this will not set until you view a blog page! This enables the comments section to remember your poster name.</li>
            </List>
        </Box>
    )
}