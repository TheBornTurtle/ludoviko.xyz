import { Text, Box, Anchor } from '@dracula/dracula-ui'
import Link from 'next/link'

export default function Footer() {
    return <Box className="footer" rounded="lg" color="blackSecondary" p="sm" mt="xs" mx="xs" >
            <Text className="drac-text-purple-cyan">© 2020-2021 Ludoviko</Text>
            <Link href="https://www.iubenda.com/privacy-policy/11941817" passHref><Anchor color="purple" isExternal="true" hoverColor="pink" mx="sm">Privacy</Anchor></Link>
            <Link href="https://www.iubenda.com/privacy-policy/11941817/cookie-policy" passHref><Anchor color="purple" isExternal="true" hoverColor="pink">Cookies</Anchor></Link>
        </Box>
}