import { Footer, Group } from '@mantine/core'
import { FOOTER_HEIGHT } from '@/constants/main'

interface FooterProps {
}

export default function SiteFooter(props: FooterProps): JSX.Element {
    return (
        <Footer height={FOOTER_HEIGHT} p="md">
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
