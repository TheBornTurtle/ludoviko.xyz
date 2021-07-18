import Head from 'next/head'
import { getAllPosts } from '../lib/posts'
import { Box, Heading, Anchor, Card, Paragraph } from '@dracula/dracula-ui'
import Link from 'next/link'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
    const allPosts = getAllPosts([
    "title",
    "date",
    "id",
    "content",
    "keywords",
    "description"
  ])

  return {
    props: { allPosts },
  }
}

export default function Blog({
    allPosts
}: any
) {
    return (
        <div data-target="#navbar" data-spy="scroll">
            <Head>
                <title>Ludo's blog</title>
                <meta property="og:title" content={`Ludo's Blog`} key="title" />
            </Head>
            <main>
                <Card rounded="lg" p="md" m="md" color="blackSecondary" >
                    <Heading size="2xl" >Blog</Heading>
                        {allPosts.map(({ id, date, title, description }) => (
                            <Card variant="subtle" color="pink" key={id} p="xs" mt="sm">
                                <Link href={`/blog/posts/${id}`} locale="en" passHref><Anchor mx="sm" mt="sm" color="purple" hoverColor="pink" size="lg">
                                    {title}
                                </Anchor></Link>
                                <Paragraph mx="sm" mt="sm">{description}</Paragraph>
                                <Paragraph mx="sm">{date}</Paragraph>
                            </Card>
                        ))}
                </Card>
            </main>
        </div>
    )
}