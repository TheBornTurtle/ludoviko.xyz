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

export function Comments({id}) {
  if(getCookieConsentValue('comments') == "true") {
    return <Layout></Layout>
  } else {
    return <Heading>Comments are not enabled.</Heading>
  }
}

export default function Post({ postData }) {
  return <Layout>
      <Head>
          <title>Ludo's Blog | {postData.title}</title>
          <link rel="icon" href="/RingRingTechSupport.ico" />
      </Head>
      <Box rounded="lg" p="md" m="md" color="blackSecondary" >
        <Text className="date" align="right" >{postData.date}</Text>
        <Heading size="2xl">{postData.title}</Heading>
        <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} className="drac-box drac-text drac-text-white" />
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