import Layout from '../../../components/layout'
import Head from 'next/head'
import { getAllPosts, getPostBySlug } from '../../../lib/posts'
import { Box, Heading, Text, Paragraph, Anchor } from '@dracula/dracula-ui'
import { GetStaticProps, GetStaticPaths } from 'next'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import Link from 'next/link'
import gfm from 'remark-gfm'


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params.id, [
    "title",
    "date",
    "id",
    "content",
    "keywords",
    "description"
  ])
  return {
    props: {
      post
    }
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['id'])

  return {
    paths: posts.map((post: any) => {
      return {
        params: {
          id: post.id,
        },
      }
    }),
    fallback: true,
  }
}


export default function Post({post}) {
  return <Layout>
      <Head>
        <title>Ludo's Blog | {post.title}</title>
        <meta name="keywords" content={`${post.keywords}`} key="keyw"></meta>
        <meta property="og:title" content={`Ludo's Blog | ${post.title}`} key="title" />
        <meta name="description" content={post.description} key="desc" />
        <meta property="og:description" content={post.description} key="og:desc" />
        <meta property="og:type" content="article" key="og:type" />
      </Head>
      <Box rounded="lg" p="md" m="md" color="blackSecondary" >
        <article>
          <Text className="date" align="right" >{post.date}</Text>
          <Heading as="h1" size="2xl">{post.title}</Heading>
          <ReactMarkdown plugins={[gfm]} children={post.content} components={{
            image: image => {
              // @ts-ignore
              return <Image src={image.src} alt={image.alt} height={200} width={355}/>
            },
            h2: h2 => {
              return <Heading size="xl" as="h2">{h2.children}</Heading>
            },
            h3: h3 => {
              return <Heading size="lg" as="h3">{h3.children}</Heading>
            },
            a: link => {
              // @ts-ignore
              if (link.href.startsWith("/")) {
                return <Link href={link.href} passHref><Anchor color="pink">{link.children}</Anchor></Link>
              } else {
                return <Link href={link.href} passHref><Anchor isExternal={true} color="pink">{link.children}</Anchor></Link>
              }
            }
          }} />
        </article>
      </Box>
      <Box rounded="lg" p="md" m="md" color="blackSecondary" >
        <Heading as="h1" size="2xl">Comments</Heading>
        <Paragraph>If comments are not loading and you have accepted cookies, please refresh page.</Paragraph>
        <div className="drac-text-white drac-bg-black-secondary" dangerouslySetInnerHTML={{
            __html: `<script class="_iub_cs_activate-inline" data-iub-purposes="3" type="text/plain" data-suppressedsrc="https://latest.cactus.chat/cactus.js"
              data-default-homeserver-url="https://matrix.cactus.chat:8448"
              data-server-name="cactus.chat"
              data-site-name="5d5351d7"
              data-comment-section-id="${post.id}"></script>
            <link rel="stylesheet" href="https://latest.cactus.chat/style.css" type="text/css">`
          }} />
      </Box>
  </Layout>
}