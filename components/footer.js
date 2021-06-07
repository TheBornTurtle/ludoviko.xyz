import { Text, Box, Anchor } from '@dracula/dracula-ui'
import Link from 'next/link'

export default function Footer() {
    return <Box className="footer" rounded="lg" color="blackSecondary" p="sm" mt="xs" mx="xs" >
            <Text className="drac-text-purple-cyan">© 2020-2021 Ludoviko</Text>
            <Link href="/privacy" passHref><Anchor color="purple" hoverColor="pink" mx="md">Privacy</Anchor></Link>
        </Box>
}