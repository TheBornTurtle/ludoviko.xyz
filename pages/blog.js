import Head from 'next/head'
import { getSortedPostsData } from '../lib/posts'
import { Box, Heading, Anchor, Card, Paragraph } from '@dracula/dracula-ui'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Blog({ allPostsData }) {
    return (
        <div data-target="#navbar" data-spy="scroll">
            <Head>
                <title>Ludo's blog</title>
                <meta property="og:title" content={`Ludo's Blog`} key="title" />
            </Head>
            <main>
                <Box rounded="lg" p="md" m="md" color="blackSecondary" >
                    <Heading size="2xl" >Blog</Heading>
                        {allPostsData.map(({ id, date, title, description }) => (
                            <Card variant="subtle" color="pink" key={id} p="xs" mt="sm">
                                <Anchor href={`/blog/posts/${id}`} mx="sm" mt="sm" color="purple" hoverColor="pink" size="lg">
                                    {title}
                                </Anchor>
                                <Paragraph mx="sm" mt="sm">{description}</Paragraph>
                                <Paragraph mx="sm">{date}</Paragraph>
                            </Card>
                        ))}
                </Box>
            </main>
        </div>
    )
}