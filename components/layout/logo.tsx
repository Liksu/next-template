import { ReactElement } from 'react'
import { Text } from '@mantine/core'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Logo(): ReactElement {
    const pathname = usePathname()

    const logo = <Text size="xl">
        SiteLogo
    </Text>

    if (pathname === '/') {
        return logo
    }

    return <Link href="/">{logo}</Link>
}
