import Layout from '../../../components/layout'
import Head from 'next/head'
import { getAllPostIds, getPostData } from '../../../lib/posts'
import { Box, Heading, Text } from '@dracula/dracula-ui'


export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export default function Post({ postData }) {
  return <Layout>
      <Head>
        <title>Ludo's Blog | {postData.title}</title>
        <meta name="keywords" content={`${postData.keywords}`} key="keyw"></meta>
        <meta property="og:title" content={`Ludo's Blog | ${postData.title}`} key="title" />
        <meta name="description" content={postData.description} key="desc" />
        <meta property="og:description" content={postData.description} key="og:desc" />
        <meta property="og:type" content="article" key="og:type" />
      </Head>
      <Box rounded="lg" p="md" m="md" color="blackSecondary" >
        <Text className="date" align="right" >{postData.date}</Text>
        <Heading as="h1" size="2xl">{postData.title}</Heading>
        <Box dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
      </Box>
      <Box rounded="lg" p="md" m="md" color="blackSecondary" >
        <div className="drac-text-white drac-bg-black-secondary" dangerouslySetInnerHTML={{
            __html: `
            <script type="text/javascript" src="https://latest.cactus.chat/cactus.js"
              data-default-homeserver-url="https://matrix.cactus.chat:8448"
              data-server-name="cactus.chat"
              data-site-name="5d5351c6"
              data-comment-section-id="${postData.id}"></script>
            <link rel="stylesheet" href="https://latest.cactus.chat/style.css" type="text/css">
          `
          }} />
      </Box>
  </Layout>
}