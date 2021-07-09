import { Text, Box, Anchor } from '@dracula/dracula-ui'
import Link from 'next/link'

export default function Footer() {
    return <Box className="footer" rounded="lg" color="blackSecondary" p="sm" mt="xs" mx="xs" >
            <Text className="drac-text-pink-purple">© 2020-2021 Ludoviko</Text>
            <Link href="https://www.iubenda.com/privacy-policy/11941817" passHref><Anchor color="pink" isExternal={true} hoverColor="purple" mx="sm">Privacy</Anchor></Link>
            <Link href="https://www.iubenda.com/privacy-policy/11941817/cookie-policy" passHref><Anchor color="pink" isExternal={true} hoverColor="purple">Cookies</Anchor></Link>
        </Box>
}