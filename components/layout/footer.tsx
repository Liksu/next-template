import { Anchor, Footer, Group } from '@mantine/core'
import Link from 'next/link'

interface FooterProps {
}

export default function SiteFooter(props: FooterProps): JSX.Element {
    return (
        <Footer height={60} p="md">
            <Group position="apart">
                <Group position="left">
                </Group>
                <Group position="right">
                    next-template © 2023
                </Group>
            </Group>
        </Footer>
    )
}
